"use strict";

// parameter3 (color) been removed as colour not being changed at the moment
function openPage(pageName, elmnt) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = "rgb(0, 250, 154)";
}

document.getElementById("defaultOpen").click();
