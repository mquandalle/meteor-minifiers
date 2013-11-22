Tinytest.add("Minifiers - replace isClient/isServer by true/false", function (test) {
  test.equal(
    removeServerCode("if (Meteor.isClient || Meteor.isServer) { console.log('In the text, Meteor.isServer remains unchanged!'); }"),
    "if (true || false) { console.log('In the text, Meteor.isServer remains unchanged!'); }"
  );
});
