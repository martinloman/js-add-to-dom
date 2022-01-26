
// Här hämtar jag referenser till objekt/element i DOMen
var btnObject = document.getElementById("btnObject")
var btnHTML = document.getElementById("btnHTML")
var outputContainer = document.getElementById("outputContainer")
var txtMessage = document.getElementById("txtMessage")

// Jag knyter en eventlyssnare till klick-eventet på ena knappen.
btnObject.onclick = function (e) {
  console.log("Clicked object button.")


  /* 
    Den här funktionen lägger in nya element i DOMen genom 
    att skapa ett element-objekt och lägga till det med append.

    Det här sättet är bra om man ska lägga till element
    som ska ha eventlyssnare kopplat till sig.
  */

  var inputText = txtMessage.value

  var newTextDiv = document.createElement("div")
  newTextDiv.innerText = inputText

  outputContainer.append(newTextDiv)
}

// Till den andra knappen knyter jag en eventlyssnare på ett annat
// sätt. De fungerar likadant, det är bara olika sätt att skriva på.
btnHTML.addEventListener("click", function(e) {
  console.log("Clicked HTML button", txtMessage)
  /* 
    Den här funktionen lägger in nya element i DOMen genom 
    att använda metoden insertAdjacentHTML.

    Om man ska skapa ett nytt element med avancerad HTML-struktur
    är det här ofta det mest läsbara sättet att göra det på.
  */


  var inputText = txtMessage.value
  var html = `<div>${inputText}</div>` // Det här är en så kallad "template string". Den fungerar som en f-string i Python.

  //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  outputContainer.insertAdjacentHTML("beforeend", html)
})
