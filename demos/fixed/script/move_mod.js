// Move block definition
Blockly.Blocks['move_mod'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("move")
    .appendField(new Blockly.FieldDropdown([["forward","FORWARD"], ["backward","BACKWARD"]]), "direction");
    this.setColour(175);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("add a number here");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_mod'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_magnitude = block.getFieldValue('magnitude');
  var code = '...;\n';
  return code;
};

