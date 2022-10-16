chrome.webRequest.onBeforeRequest.addListener
( 
  function(details) { return {cancel: true}},
  { urls:["*://*.zebo.com/*"],
        ["*://*.facebook.com/*"],
        ["*://*.linkedIn.com/*"],
  ["blocking"]
)};


