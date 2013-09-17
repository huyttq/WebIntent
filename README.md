This is just the wrapper a part of WebIntents plugin by Boris Smus for Phonegap 3.0
Please see full of work in version 2 here https://github.com/phonegap/phonegap-plugins/tree/master/Android/WebIntent
You may want to port the rest in similar way

Using the plugin
1. Add plugin via CLI: phonegap local plugin add https://github.com/huyttq/WebIntent.git
2. Include webintent.js in your app then: 
	var webIntent = cordova.require("cordova/plugin/WebIntent");
	webIntent.startActivity({
		action: webIntent.ACTION_VIEW,
		url: 'file://' + fileFullPath,
		type: 'application/vnd.android.package-archive'
	  },
	  function() {},
	  function() {
		alert('Failed to open URL via Android Intent.');
		console.log("Failed to open URL via Android Intent. URL: " + theFile.fullPath)
	  }
	);