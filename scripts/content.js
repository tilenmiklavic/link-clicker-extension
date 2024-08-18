chrome.runtime.onMessage.addListener((request) => {
  const LINK_CLASS_NAME = "UWckNb"
  console.log(request);
  
  // get list of all links on page
  var links = [...document.getElementsByTagName("a")];

  const valid_links = links.filter((link) => link.getAttribute("jsname") === LINK_CLASS_NAME);

  document.addEventListener("keypress", function(event) {
    link_press(event, valid_links)
  });

  return Promise.resolve({ response: "Hi from content script" });
});

function link_press (e, links) {
  let ind = e.keyCode - 49;
  links[ind].click();
}