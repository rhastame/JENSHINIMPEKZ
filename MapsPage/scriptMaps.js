if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");
    window.location.href = "#";
} else {
	console.info("This page is not reloaded");
}
