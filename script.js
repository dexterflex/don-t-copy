const text = document.getElementById("prohibited_text");
text.addEventListener("copy", (event) => {
	event.preventDefault();
	const customText = "why are you copying me?";
	event.clipboardData.setData("text/plain", customText);
});
