# Meteor-minifiers

The goal of this Meteor package is to remove the unnecessary code sent to a Meteor client.

It works in two steps :

1. Replace `Meteor.isClient` by `true` and `Meteor.isServer` by `false` on files sent to the client. We use [grasp](http://graspjs.com/) for that purpose.
2. Use [uglifyjs](http://lisperator.net/uglifyjs/) to remove unnecessary code.

With this package the following piece of code :

```javascript
if (Meteor.isClient) {
  doSomethingOnTheClient();
}

if (Meteor.isServer) {
  doSomethingOnTheServer();
}

if (Meteor.isClient && Meteor.userId()) {
  console.log('User is connected');
}
```

became on the client:

```javascript
doSomethingOnTheClient();

if (Meteor.userId()) {
  console.log('User is connected');
}
```

This is a behavior that a lot of newcomers expect.

## Installation

1. Download the package from github and put in your `./packages/` directory
2. Rename it `minifiers` in order to overwrite the build-in minifiers package

## Links

* See the discussion on `meteor-talk`: https://groups.google.com/forum/#!topic/meteor-talk/iHat47f6iGE
* See the [grasp library](http://graspjs.com/)