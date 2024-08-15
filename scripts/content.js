chrome.runtime.onMessage.addListener((request) => {
  console.log("Message from the background script:");
  console.log(request);
  
  // get list of all links on page
  var links = [...document.getElementsByTagName("a")];
  // console.log(links);

  // for (var i = 0; i < links.length; i++) {
  //   links[i].jsname = links[i].getAttribute("jsname")
  //   // console.log(i, links[i].getAttribute("jsname"));
  // }

  console.log(links);
  const valid_links = links.filter((link) => link.getAttribute("jsname") === "UWckNb");

  console.log(valid_links);

  return Promise.resolve({ response: "Hi from content script" });
});
