// If Block Definition
Blockly.Blocks['if_mod'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("if");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("then");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['if_mod'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = '...;\n';
    return code;
  };