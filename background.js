chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // console.log(details)
    return {cancel: true}; 
  },
  {urls: 
    ["*://*.cz/wp-content/plugins/wp-content-copy-protection*",
    "*://*.com/wp-content/plugins/wp-content-copy-protection*",
    "*://*.eu/wp-content/plugins/wp-content-copy-protection*"]
  },
  ["blocking"]
);