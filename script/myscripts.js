

// set up text to print, each item in array is new line
var aText = new Array(
    ">Its happening. Q predicted this.",
    ">Top Insider: \"Remilios are the answer.\"",
    ">Time is running out.",
    ">Yesterday's speech contains breadcrumbs.",
    ">Trump: \"I can only show you the way.\" ",
    ">\"Mint approaches.\"",
    ">Expand your mind. Mint Remilios.",
    ">The Great Awakening.",
    "-Q"


);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("demo");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "";

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();