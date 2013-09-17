cordova.define("cordova/plugin/WebIntent",
  function (require, exports, module) {
    var exec = require("cordova/exec");
    
    var WebIntent = function() {};

    WebIntent.prototype.ACTION_SEND = "android.intent.action.SEND";
    WebIntent.prototype.ACTION_VIEW= "android.intent.action.VIEW";
    WebIntent.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
    WebIntent.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
    WebIntent.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
    WebIntent.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";

    WebIntent.prototype.startActivity = function(params, success, fail) {
      return exec(success, fail, 'WebIntent', 'startActivity', [params]);
    };
    module.exports = new WebIntent();
  }
);