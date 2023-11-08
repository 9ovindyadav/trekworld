//Trek view page

const queryParams = new URLSearchParams(window.location.search);
const trekId = queryParams.get("id");

console.log(trekId);
console.log(treks[trekId]);
const trekTitle = document.querySelector("#trek-page-title");
const trekAuthor = document.querySelector("#trek-page-author");
const trekDesc = document.querySelector("#trek-page-desc");



trekAuthor.innerHTML = "Written by : " + treks[trekId].author;
trekDesc.innerHTML = treks[trekId].description;
