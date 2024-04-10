module.exports = {
  meta: {
    type: "problem",
    messages: {
      noBarrel: `Should not use imports ends with "." or "..". Import the specific file instead.`
    },
    schema: [] // no options
  },
  create: function(context) {
    return {
      ImportDeclaration: function(node) {
        const value = node.source.value;
        if (value) {
          if (value.endsWith('.')) {
            context.report({
              node: node,
              messageId: "noBarrel",
            });
          }
        }
      }
    }
  }
}
