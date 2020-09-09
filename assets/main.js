
function showDiv1() {
  var x = document.getElementById("welcomeDiv");
  if (x.style.display === "none") {
    document.getElementById("see").textContent = "See Less";
    x.style.display = "block";
  } else {
    document.getElementById("see").textContent = "See More";
    x.style.display = "none";
  }
}
