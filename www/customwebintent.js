/**
 * @author huy.thai
 * huyttq@gmail.com
 */

cordova.define("cordova/plugin/CustomWebIntent",
  function (require, exports, module) {
    var exec = require("cordova/exec");
    
    var CustomWebIntent = function() {};

    CustomWebIntent.prototype.ACTION_SEND = "android.intent.action.SEND";
    CustomWebIntent.prototype.ACTION_VIEW= "android.intent.action.VIEW";
    CustomWebIntent.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
    CustomWebIntent.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
    CustomWebIntent.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
    CustomWebIntent.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";

    CustomWebIntent.prototype.startActivity = function(params, success, fail) {
      return exec(success, fail, 'CustomWebIntent', 'startActivity', [params]);
    };
    module.exports = new CustomWebIntent();
  }
);