chrome.commands.onCommand.addListener((command) => {
  chrome.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(sendMessageToScript)
    .catch(onError);
});

function sendMessageToScript(tabs) {
  chrome.tabs
    .sendMessage(tabs[0].id, { greeting: "Hi from background script" })
    .then((response) => {
      console.log("Message from the content script:");
      console.log(response);
    })
    .catch(onError);
}

function onError(error) {
  console.error(`Error: ${error}`);
} 


