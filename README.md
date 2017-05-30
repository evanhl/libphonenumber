libphonenumber
==============

Google's libphonenumber as an easily included JavaScript library. Fork of [nathanhammond/libphonenumber](https://github.com/nathanhammond/libphonenumber) modified to remove all methods outside of `isValidNumberForRegion` to reduce file size. Tested against libphonenumber 8.5.0.

Exports
-------

This library adds the global `phoneUtils` with the following methods:

```js
phoneUtils.isValidNumberForRegion(phoneNumber, regionCode);
```

How it works
------------

I've extracted/ported/written code based on `vendor/libphonenumber/javascript/i18n/phonenumbers/demo.js` and turned that into `libphonenumber.js` at the root of this project.

I've modified `vendor/libphonenumber/javascript/build.xml` and turned that into `build.xml` at the root of this project. Diff those files to see changes.

The `./build.sh` command uses those two pieces together in order to generate a new version of libphonenumber.js in the `/dist` folder.

Before you run the build script, ensure you have these tools installed and present on your system's PATH:
* [Ant](http://ant.apache.org/)
* [Ant-Contrib](http://ant-contrib.sourceforge.net/)
* [Maven](http://maven.apache.org/)
