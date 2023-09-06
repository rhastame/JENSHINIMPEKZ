document.getElementById("one").onclick = function change_image() {
	document.getElementById("news-img").src = "https://drive.google.com/uc?export=view&id=1yi_AoTI0jrABNLzxS9MgjkSwkOTqbOrH";
};

document.getElementById("two").onclick = function change_image() {
	document.getElementById("news-img").src = "https://drive.google.com/uc?export=view&id=1WVPm6AcBrHwWQm9861e6ONMJhZHA4N_V";
};

document.getElementById("three").onclick = function change_image() {
	document.getElementById("news-img").src = "https://drive.google.com/uc?export=view&id=1agSoRvwL7r9NBJhBJ-L8hapxaNxtFMwa";
};

document.getElementById("four").onclick = function change_image() {
    document.getElementById("news-img").src = "https://drive.google.com/uc?export=view&id=13mUp6DrLlIZqSDuGwIG7SNfXCbVIeh2L";
};

document.getElementById("five").onclick = function change_image() {
	document.getElementById("news-img").src = "https://drive.google.com/uc?export=view&id=1rsC1hsE8nKKQfVl1JYA6t3nloK37DeUk";
};


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	console.info("This page is reloaded");
	window.location.href = "#";
} else {
	console.info("This page is not reloaded");
}