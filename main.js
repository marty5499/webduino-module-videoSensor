  (async function () {

    var camera;
    var rock;
    var time;
    var damage;
    var rocket;
    var coll;


    async function LR(rock, time, setY) {
      var rock = new Actor(cv, {
        "stage": camera,
        "img": 'rock.gif',
        "pos": [-1, -1, 32, 32]
      });
      console.log("rock start..");
      await rock.start();
      rock.moveBetween(0, setY, 650, setY, time);
      //*
      rock.onTouch(
        function (pos) {
          //rock.delete('explosion.gif', 0.5);
        });
      //*/
    }

    camera = await createCamera("0", 640, 480, 0, true, 0.5);
    damage = 0;
    document.getElementById('demo-area-01-show').innerHTML = (String('碰撞次數：') + String(damage));

    async function forloop() {
      console.log("gogogo...");
      var rock;
      for (var count = 0; count < 1; count++) {
        LR(rock, 1/*parseInt(Math.random()*7)*/, count * 20);
        //LR(rock, 0.5/*parseInt(Math.random()*7)*/, count * 20);
        //LR(rock, 0.8/*parseInt(Math.random()*7)*/, count * 20);
      }
    }



    /*
    LR(null, 3, 20 * 20);;
    setTimeout(async function () {
      console.log("create...");
      await LR(null, 3, 10 * 20);
    }, 3000);
    //*/
    forloop();
  }());