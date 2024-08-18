chrome.commands.onCommand.addListener((command) => {
  change_icon(true);

  chrome.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(sendMessageToScript)
    .catch(onError);
});

async function sendMessageToScript(tabs) {
  (async () => {
    const response = await chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});

    if (response.success) {
      change_icon(false)
    }
  })();
}

function onError(error) {
  console.error(`Error: ${error}`);
} 

function change_icon(active) {
  chrome.action.setIcon({
    path : `images/favicon-${active ? 'active-' : ''}32x32.png`
  });
}