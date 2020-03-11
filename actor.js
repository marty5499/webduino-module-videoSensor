class Actor {

  static create(obj) {
    if (!Actor.idx) {
      Actor.idx = 0;
      Actor.objs = {};
    }
    Actor.idx++;
    Actor.objs[Actor.idx] = obj;
    return Actor.idx;
  }
  constructor(cv, info) {
    var self = this;
    self.id = Actor.create(this);
    self.running = false;
    self.cv = cv;
    self.info = info;
    self.img = null;
    self.swapping = false;
    self.imgReady = false;
    self.touching = false;
    self.removed = false;
    self.collisionObj = null;
    this.lastInsideTime = -1;
    self.stage = info.stage; // camera
    self.moveArray = [];
    self.isFlip = self.stage.getFlip();
    self.body = document.getElementsByTagName('body')[0];
    self.originImgURL = info.img;
    self.originSize = [info.pos[3], info.pos[4]];
    self.setImg(info.img, info.pos, function () {
      self.hide();
    });
    if (typeof info.snd == 'undefined') {
      info.snd = "";
    }
    self.audio = new Audio(info.snd);
    self.jsonInfo = {
      "history": 100,
      "varThreshold": 25,
      "learningRate": 0.001,
      "detectShadows": false,
      "objMinSize": 3,
      "touchTime": 1000,
      "filter": ["e2", "g1", "d3"]
    };
    self.onTouchCallback = function () {};
    self.onCollisionCallback = function (obj) {};
    self.setTracking({
      'inside': function (pos) {
        var nowTime = new Date().getTime();
        if (nowTime - this.lastInsideTime < self.jsonInfo.touchTime) {
          self.touching = true;
          return;
        }
        self.touching = false;
        this.lastInsideTime = nowTime;
        if (self.isHide()) return;
        self.inPos = pos;
        self.onTouchCallback(pos);
      },
      'outside': function (pos) {
        self.outPos = pos;
      }
    });
  }

  stop() {
    this.removed = true;
    this.tracking.stop();
    delete Actor.objs[this.id];
  }


  delete(url, switchTime) {
    var self = this;
    var lastPos = [self.x, self.y, self.width, self.height];
    self.stop();
    self.setImg(url, lastPos, function () {
      setTimeout(function () {
        self.hide();
      }, self.jsonInfo.touchTime);
    });
  }

  play() {
    this.audio.play();
    return this;
  }

  showTime() {
    this.tracking.scan();
  }

  switchImg(url, switchTime) {
    var self = this;
    if (self.swapping || self.touching) return;
    self.swapping = true;
    self.jsonInfo.touchTime = switchTime * 1000;
    var lastPos = [self.x, self.y, self.width, self.height];
    self.setImg(url, lastPos, function () {
      setTimeout(function () {
        self.setImg(self.originImgURL, lastPos, function () {
          self.swapping = false;
        });
      }, self.jsonInfo.touchTime);
    });
  }

  setSndURL(url) {
    this.audio = new Audio(url);
  }

  setImgSize(width, height) {
    this.width = width;
    this.height = height;
    this.img.style.width = this.width + 'px';
    this.img.style.height = this.height + 'px';
  }

  setImg(url, pos, callback) {
    var self = this;
    if (arguments.length == 1) {
      pos = [self.x, self.y];
    }
    if (self.img != null && self.img.parentElement != null) {
      var parentEle = self.img.parentElement;
      parentEle.removeChild(self.img);
    }
    var canvas = self.stage.getCanvas();
    self.img = new Image();
    self.imgReady = false;
    self.img.onload = function () {
      self.imgReady = true;
      var left = self.getCanvas().offsetLeft + pos[0];
      var top = self.getCanvas().offsetTop + pos[1];
      this.style.position = 'absolute';
      this.style.left = left + 'px';
      this.style.top = top + 'px';
      self.body.appendChild(this);
      self.moveArray.push([self.x, self.y]);
      if (typeof callback != 'undefined') {
        callback();
      }
    };
    self.img.src = url;
    self.x = pos[0];
    self.y = pos[1];
    self.width = self.img.width;
    self.height = self.img.height;
    if (pos.length == 4) {
      self.width = this.info.pos[2];
      self.height = this.info.pos[3];
      self.img.style.width = self.width + 'px';
      self.img.style.height = self.height + 'px';
    }
    return this;
  }

  getCanvas() {
    return this.stage.getCanvas();
  }

  checkCollision() {
    var x = this.x + (this.width / 2);
    var y = this.y + (this.height / 2);

    function distance(obj) {
      var objX = obj.x + obj.width / 2;
      var objY = obj.y + obj.height / 2;
      return Math.sqrt((objX - x) * (objX - x) + (objY - y) * (objY - y));
    }
    if (this.id != 1) return false;
    for (const [key, obj] of Object.entries(Actor.objs)) {
      if (key == this.id) continue;
      var d = distance(obj);
      if (d < (obj.width / 3 + this.width / 3) ||
        d < (obj.height / 3 + this.height / 3)) {
        this.collisionObj = obj;
        this.onCollisionCallback(obj);
        return true;
      }
    }
    return false;
  }


  moveTo(x, y) {
    if (this.removed) {
      return this;
    }
    //support array [x,y]
    if (arguments.length == 1) {
      y = x[1];
      x = x[0];
    }
    if (this.running) {
      this.x = x;
      this.y = y;
      if (this.x < 0) {
        this.img.style.display = 'none';
        return;
      }
      this.img.style.display = '';
      var offsetLeft = this.getCanvas().offsetLeft;
      var offsetTop = this.getCanvas().offsetTop;
      this.img.style.left = offsetLeft + this.x + "px";
      this.img.style.top = offsetTop + this.y + "px";
      this.tracking.moveTo(x, y);
      this.checkCollision();
    } else {
      this.moveArray.push([x, y]);
    }
    return this;
  }

  moveBetween(x1, y1, x2, y2, sec) {
    if (this.removed) {
      return this;
    }
    if (!this.running) {
      console.log("running first !")
      return this;
    }
    if (this.x != x1 || this.y != y1) {
      this.moveTo(x1, y1);
    }

    var totalTime = sec * 1000;
    var x_dist = (x2 - x1);
    var y_dist = (y2 - y1);
    var self = this;
    var moveTime = 30;
    var cnt = totalTime / moveTime;
    var move = setInterval(function () {
      self.x = self.x + (x_dist / (totalTime / moveTime));
      self.y = self.y + (y_dist / (totalTime / moveTime));
      if (self.x < -1 || self.x > self.getCanvas().width) {
        self.stop();
        self.hide();
      }
      if (self.y < -1 || self.y > self.getCanvas().height) {
        self.stop();
        self.hide();
      }
      if (--cnt < 0 || self.removed) {
        clearInterval(move);
      } else {
        self.moveTo(self.x, self.y);
      }
    }, moveTime);

  }

  isHide() {
    return this.img.style.display == 'none';
  }

  hide() {
    this.img.style.display = 'none';
  }

  show() {
    this.img.style.display = '';
  }

  getStage() {
    return this.stage;
  }

  onTouch(callback) {
    this.onTouchCallback = callback;
  }

  onCollision(collisionCallback) {
    this.onCollisionCallback = collisionCallback;
  }

  setTracking(callback) {
    var x = this.x;
    var y = this.y;
    this.tracking =
      new Hotspot(this.getCanvas(), this.getCanvas(), true,
        x, y,
        x + this.width, y,
        x + this.width, y + this.height,
        x, y + this.height);
    this.tracking.setFlip(this.isFlip);
    this.tracking.jsonInfo = this.jsonInfo;
    this.tracking.setCvProcess(this.cv.imgFilter);

    if (typeof callback['inside'] == "function") {
      this.tracking.inside(callback['inside']);
    }
    if (typeof callback['outside'] == "function") {
      this.tracking.outside(callback['outside']);
    }
    return this;
  }

  async start() {
    var self = this;
    async function go() {
      self.stage.onCanvas(function (c) {
        if (self.moveArray.length > 0 && self.imgReady) {
          for (var i = 0; i < self.moveArray.length; i++) {
            self.moveTo(self.moveArray.pop());
          }
        }
        self.showTime();
      });

      return new Promise((resolve, reject) => {
        self.stage.onReady(function () {
          self.tracking.start();
          self.running = true;
          for (var i = 0; i < self.moveArray.length; i++) {
            self.moveTo(self.moveArray.pop());
          }
          resolve("Success");
        });
      })
    }
    await go();
  }
}