window.addEventListener("orientationchange", function() {
  if (screen.orientation.angle === 90 || screen.orientation.angle === -90) {
    document.getElementById("rotate-message").style.display = "none";
  } else {
    document.getElementById("rotate-message").style.display = "block";
  }
});
