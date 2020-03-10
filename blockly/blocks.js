//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#vyf2pz
Blockly.Blocks['waspot_ctrl_video'] = {
  init: function() {
    this.appendValueInput("videoId")
        .setCheck(null)
        .appendField("建立影片")
        .appendField(new Blockly.FieldVariable("video"), "video")
        .appendField(" , 使用 VideoTag ID:");
    this.appendDummyInput()
        .appendField("影片URL : ")
        .appendField(new Blockly.FieldTextInput("http://webduino.tw/walkman.mp4"), "videoURL");
    this.appendDummyInput()
        .appendField("寬度")
        .appendField(new Blockly.FieldTextInput("320"), "width");
    this.appendDummyInput()
        .appendField("高度")
        .appendField(new Blockly.FieldTextInput("240"), "height");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#ht2mj4
Blockly.Blocks['waspot_setting_video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("video"), "video")
        .appendField("顯示座標 x:")
        .appendField(new Blockly.FieldTextInput("320"), "x")
        .appendField(" , y:")
        .appendField(new Blockly.FieldTextInput("320"), "y")
        .appendField(" , z-index")
        .appendField(new Blockly.FieldTextInput("1"), "zIndex")
        .appendField(" , 影片寬度")
        .appendField(new Blockly.FieldTextInput("240"), "width");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['waspot_ctrl_video_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("使用")
        .appendField(new Blockly.FieldVariable("video"), "video")
        .appendField("進行")
        .appendField(new Blockly.FieldDropdown([["播放", "play()"], ["暫停", "pause()"], ["停止", "load()"], ["顯示", "hidden=false"], ["隱藏", "hidden=true"]]), "action");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#ue69jh
Blockly.Blocks['waspot_show_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["隱藏", "hide"], ["顯示", "show"]]), "visible")
      .appendField(new Blockly.FieldVariable("actor"), "actor")
      .appendField("的位置");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#8ttkr7
Blockly.Blocks['waspot_set_snd_url_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("設定")
      .appendField(new Blockly.FieldVariable("actor"), "actor")
      .appendField(" 聲音 URL：");
    this.appendValueInput("sndURL")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#4i2maq
Blockly.Blocks['waspot_play_audio_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("播放")
      .appendField(new Blockly.FieldVariable("actor"), "actor")
      .appendField("聲音");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#eb4ter
Blockly.Blocks['waspot_touch_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("當")
      .appendField(new Blockly.FieldVariable("actor"), "actor")
      .appendField("被碰到時");
    this.appendStatementInput("inside")
      .setCheck(null)
      .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


Blockly.Blocks['waspot_reloadimg_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("設定")
      .appendField(new Blockly.FieldVariable("actor"), "actor");
    this.appendValueInput("imgURL")
      .setCheck(null)
      .appendField("圖片URL：");
    this.appendValueInput("after")
      .setCheck(null)
      .appendField(" , ");
    this.appendDummyInput()
      .appendField("秒後回復原圖片");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


Blockly.Blocks['waspot_delete_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("設定")
      .appendField(new Blockly.FieldVariable("actor"), "actor");
    this.appendValueInput("imgURL")
      .setCheck(null)
      .appendField("圖片URL：");
    this.appendValueInput("after")
      .setCheck(null)
      .appendField(" , ");
    this.appendDummyInput()
      .appendField("秒後刪除此物件");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


Blockly.Blocks['waspot_loadimg_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("設定")
      .appendField(new Blockly.FieldVariable("actor"), "actor");
    this.appendValueInput("imgURL")
      .setCheck(null)
      .appendField("圖片URL：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#z4scj4
Blockly.Blocks['waspot_move_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("移動")
      .appendField(new Blockly.FieldVariable("actor"), "actor");
    this.appendValueInput("x")
      .setCheck(null)
      .appendField("到座標 x:");
    this.appendValueInput("y")
      .setCheck(null)
      .appendField(" y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#z4scj4
Blockly.Blocks['waspot_move_between_actor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("移動")
        .appendField(new Blockly.FieldVariable("actor"), "actor");
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("從座標 x:");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField(" y:");
    this.appendValueInput("x2")
        .setCheck(null)
        .appendField("到座標 x2:");
    this.appendValueInput("y2")
        .setCheck(null)
        .appendField(" y2:");
    this.appendValueInput("sec")
        .setCheck(null)
        .appendField("每");
    this.appendValueInput("pixel")
        .setCheck(null)
        .appendField("秒，間距");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['waspot_set_image_size'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("設定")
      .appendField(new Blockly.FieldVariable("actor"), "actor");
    this.appendValueInput("width").setCheck(null)
      .appendField("圖片 寬:");
    this.appendValueInput("height")
      .setCheck(null)
      .appendField(", 高:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#4n6dhn
Blockly.Blocks['waspot_create_actor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("建立")
      .appendField(new Blockly.FieldVariable("actor"), "actor")
      .appendField(" 圖片URL：");
    this.appendValueInput("imgURL")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(" 寬");
    this.appendValueInput("width")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("高");
    this.appendValueInput("height")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(",")
      .appendField("放入")
      .appendField(new Blockly.FieldVariable("camera"), "camera");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['waspot_get_camera'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("建立")
      .appendField(new Blockly.FieldVariable("camera"), "camera")
      .appendField("並啟動，影像來源：")
      .appendField(new Blockly.FieldTextInput("0"), "src")
      .appendField(" 影像大小：")
      .appendField(new Blockly.FieldDropdown([["320x240", "320,240"], ["480x360", "480,360"], ["640x480", "640,480"], ["800x600", "800,600"]]), "screenSize")
      .appendField(" 旋轉鏡頭：")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "rotate")
      .appendField(" 水平翻轉：")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "flip")
      .appendField(" 透明度：")
      .appendField(new Blockly.FieldDropdown([["10%", "0.1"], ["30%", "0.3"], ["70%", "0.5"], ["100%", "1"]]), "opacity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};