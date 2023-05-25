//your JS code here. If required.
var browserName = getBrowserName();
    var version = getBrowserVersion();

    var browserInfoElement = document.getElementById("browser-info");
    browserInfoElement.textContent = "You are using " + browserName + " version " + version;

    function getBrowserName() {
      var userAgent = navigator.userAgent;
      var browserName = "";
      
      if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
      } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
      } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
      } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
      } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
      } else if (userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
      } else {
        browserName = "Unknown";
      }

      return browserName;
    }

    function getBrowserVersion() {
      var userAgent = navigator.userAgent;
      var version = "";

      if (userAgent.indexOf("Chrome") > -1) {
        version = userAgent.match(/Chrome\/(\d+)/)[1];
      } else if (userAgent.indexOf("Firefox") > -1) {
        version = userAgent.match(/Firefox\/(\d+)/)[1];
      } else if (userAgent.indexOf("Safari") > -1) {
        version = userAgent.match(/Version\/(\d+)/)[1];
      } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        version = userAgent.match(/(Opera|OPR)\/(\d+)/)[2];
      } else if (userAgent.indexOf("Edge") > -1) {
        version = userAgent.match(/Edge\/(\d+)/)[1];
      } else if (userAgent.indexOf("Trident") > -1) {
        version = userAgent.match(/rv:(\d+)/)[1];
      }

      return version;
    }
