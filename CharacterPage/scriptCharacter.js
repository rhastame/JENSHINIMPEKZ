// let asu = document.getElementById("char_mon_1")


// let mondstadt_char_button = document.getElementById("mondstadt_char_menu");
// mondstadt_char_button.addEventListener("mouseenter", () => {
//     // asu.style.backgroundImage = "url(\"character/dionaa.jpg\")";
//     console.log("asuuuuu")
//     window.location.href = "indexMaps.html"
// })

function openChar(evt, char) {
    var i, chars, tablinks; 
    chars = document.getElementsByClassName("chars");
    for (i = 0; i < chars.length; i++){
        chars[i].style.display = "none"
    }

    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++){
    //     tablinks[i].className = tablinks[i].className.replace(" activee", " each");
    // }
    document.getElementById(char).style.display = "block";
    // evt.currentTarget.className += " activee"  
}

document.getElementById("mondstadt_char").click();








if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	console.info("This page is reloaded");
	window.location.href = "#";
} else {
	console.info("This page is not reloaded");
}

