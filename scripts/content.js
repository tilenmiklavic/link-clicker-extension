chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const LINK_CLASS_NAME = "UWckNb"
  
  // get list of all links on page
  var links = [...document.getElementsByTagName("a")];

  const valid_links = links.filter((link) => link.getAttribute("jsname") === LINK_CLASS_NAME);

  const link_press = (e, links) => {
    let ind = e.keyCode - 49;
    links[ind].click();
    sendResponse({success: true});
    }

  document.addEventListener("keypress", function(event) {
    link_press(event, valid_links)
  });

  return true;
});
