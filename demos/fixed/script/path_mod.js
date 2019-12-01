// Path block definition
Blockly.Blocks['path_mod'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("path")
        .appendField(new Blockly.FieldDropdown([["ahead","AHEAD"], ["to the left","TO_LEFT"], ["to the right","TO_RIGHT"]]), "PATH");
    // Connection set to left output
    this.setOutput(true, null);
    this.setColour(340);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['path_mod'] = function(block) {
  var dropdown_path = block.getFieldValue('PATH');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};