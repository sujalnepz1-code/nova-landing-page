function showMenu() {
  var nav = document.getElementById("nav_bar");
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

function openFaq(item) {
  var ans = item.querySelector(".ans");
  if (ans.style.display == "block") {
    ans.style.display = "none";
  } else {
    ans.style.display = "block";
  }
}
    
