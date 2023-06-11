let blockedWebsites = ['facebook', 'twitter', 'instagram', 'google', 'reddit', 'a', 'a', 'a', 'a']; // add more websites to this array as needed

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    blockedWebsites.forEach(website => {
      if (changeInfo.url.includes(website + '.')) {
        console.log(`Blocked website detected: ${website}`);
      }
    });
  }
});
