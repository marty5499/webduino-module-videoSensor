Blockly.JavaScript['waspot_ctrl_video'] = function (block) {
  var variable_video = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('video'), Blockly.Variables.NAME_TYPE);
  var id = Blockly.JavaScript.valueToCode(block, 'videoId', Blockly.JavaScript.ORDER_ATOMIC);
  var url = block.getFieldValue('videoURL');
  var w = block.getFieldValue('width');
  var h = block.getFieldValue('height');
  var code = variable_video + '= createOrGetVideoEle(' + id + ',"' + url + '",' + w + ',' + h + ');\n';
  return code;
};

Blockly.JavaScript['waspot_ctrl_video_action'] = function (block) {
  var variable_video = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('video'), Blockly.Variables.NAME_TYPE);
  var dropdown_action = block.getFieldValue('action');
  var code = variable_video + '.' + dropdown_action + ';\n';
  return code;
};

Blockly.JavaScript['waspot_setting_video'] = function (block) {
  var variable_video = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('video'), Blockly.Variables.NAME_TYPE);
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var z = block.getFieldValue('zIndex');
  var w = block.getFieldValue('width');
  var code = variable_video + '.style="position:absolute;top:' + y + 'px;left:' + x + 'px;z-index:' + z + ';width:' + w + 'px";\n';
  return code;
};

Blockly.JavaScript['waspot_show_actor'] = function (block) {
  var dropdown_visible = block.getFieldValue('visible');
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor + '.' + dropdown_visible + '();\n';
  return code;
};

Blockly.JavaScript['waspot_play_audio_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor + '.play();\n';
  return code;
};

Blockly.JavaScript['waspot_touch_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var statements_inside = Blockly.JavaScript.statementToCode(block, 'inside');
  var code = variable_actor + '.onTouch(\n';
  code += 'async function(pos){\n';
  code += statements_inside;
  code += '\n});\n';
  return code;
};

Blockly.JavaScript['waspot_reloadimg_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var value_imgurl = Blockly.JavaScript.valueToCode(block, 'imgURL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_after = Blockly.JavaScript.valueToCode(block, 'after', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.switchImg(' + value_imgurl + ',' + value_after + ');\n';
  return code;
};


Blockly.JavaScript['waspot_delete_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var value_imgurl = Blockly.JavaScript.valueToCode(block, 'imgURL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_after = Blockly.JavaScript.valueToCode(block, 'after', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.delete.call(this,' + value_imgurl + ',' + value_after + ');\n';
  return code;
};


Blockly.JavaScript['waspot_loadimg_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var value_imgurl = Blockly.JavaScript.valueToCode(block, 'imgURL', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.setImg(' + value_imgurl + ');\n';
  return code;
};

Blockly.JavaScript['waspot_move_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.moveTo(' + value_x + ',' + value_y + ');\n';
  return code;
};

Blockly.JavaScript['waspot_move_between_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sec = Blockly.JavaScript.valueToCode(block, 'sec', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.moveBetween(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ',' + value_sec + ');\n';
  return code;
};

Blockly.JavaScript['waspot_set_snd_url_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var value_sndurl = Blockly.JavaScript.valueToCode(block, 'sndURL', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.setSndURL(' + value_sndurl + ');\n';
  return code;
};

Blockly.JavaScript['waspot_set_image_size'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_actor + '.setImgSize(' + w + ',' + h + ');\n';
  return code;
};

Blockly.JavaScript['waspot_create_actor'] = function (block) {
  var variable_actor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('actor'), Blockly.Variables.NAME_TYPE);
  var variable_camera = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('camera'), Blockly.Variables.NAME_TYPE);
  var text_imgURL = Blockly.JavaScript.valueToCode(block, 'imgURL', Blockly.JavaScript.ORDER_ATOMIC);
  var text_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var text_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var text_sndURL = block.getFieldValue('sndURL');
  var code = variable_actor + ' = new Actor(cv,{\n';
  code += '"stage":' + variable_camera + ',\n';
  code += '"img":' + text_imgURL + ',\n';
  code += '"pos":[-1,-1,' + text_width + ',' + text_height + ']\n});\n';
  code += 'await ' + variable_actor + '.start();\n';
  return code;
};

Blockly.JavaScript['waspot_get_camera'] = function (block) {
  var variable_camera = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('camera'), Blockly.Variables.NAME_TYPE);
  var checkbox_rotate = block.getFieldValue('rotate') == 'TRUE' ? 90 : 0;
  var checkbox_flip = block.getFieldValue('flip') == 'TRUE';
  var screenSize = block.getFieldValue('screenSize');
  var opacity = block.getFieldValue('opacity');
  var text_src = block.getFieldValue('src');
  var code = variable_camera + ' = createCamera("' + text_src + '",' + screenSize + ',' + checkbox_rotate + ',' + checkbox_flip + ',' + opacity + ');\n';
  return code;
};