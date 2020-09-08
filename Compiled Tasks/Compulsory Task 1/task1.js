// Function to change heading font size:
function changeHeadingSize() {
    document.getElementById("mainHeading").style.fontSize = "100px";
}
// Function to return heading font size to normal:
function returnHeadingSize() {
    document.getElementById("mainHeading").style.fontSize = "32px";
}
// Function to change Font Family(style) of paragraph:
function changeStyle() {
    document.getElementById("introParagraph").style.fontFamily = "courier";
}
// Function to Hightlight text of paragraph:
function highlightText() {
    document.getElementById("introParagraph").style.backgroundColor = "yellow";
}
// Function to hide Image:
function hideImage() {
    document.getElementById("teamLeader").style.display = "none";
}
// Function to change Image:
function changeImage() {
    document.getElementById("teamLeader").src = "../images/teamLeader2.jpg";
}
// Function to change image upon mouse hover over:
function hoverImage() {
    document.getElementById("teamLeader").src = "../images/teamLeader3.jpg";
}
// Function to return image to original image when not hovered over by user mouse.
function imageReturn() {
    document.getElementById("teamLeader").src = "../images/teamLeader.jpg";
}
// Function that alerts user upon right click of mouse.
function rightClickAlert() {
    alert("You right clicked me!");
}
// Funtion that alerts user upon submission of data in the form.
function dataEntryAlert() {
    alert("Thank you for submitting your information!");
}
// Function that alerts user that the web page has been fully loaded.
function loadedPage() {
    alert("The web page is fully loaded, click okay to continue.")
}
// Function that highlights a paragraph when the users mouse overs over it and returns to normal when passed.
function highlightHover() {
    document.getElementById("introParagraph").style.backgroundColor = "white";
}
// Function that returns the text of paragraph to normal when mouse moves passed paragraph.
function returnText() {
    document.getElementById("introParagraph").style.backgroundColor = "lightblue";
}