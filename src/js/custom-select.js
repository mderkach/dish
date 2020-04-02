let x, i, j, selElmnt, a, b, c, chevron;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("calculator__select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].querySelectorAll("select")[0];
  chevron = x[i].querySelector(".calculator__select-chevron");
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "calculator__select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "calculator__select-items calculator__select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.querySelectorAll("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("calculator__select-hide");
    this.classList.toggle("calculator__select-arrow-active");
    chevron.classList.toggle("--rotate");
  });
  chevron.addEventListener("click", e => {
    e.stopPropagation();
    closeAllSelect(a);
    a.nextSibling.classList.toggle("calculator__select-hide");
    a.classList.toggle("calculator__select-arrow-active");
    chevron.classList.toggle("--rotate");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    arrNo = [];
  x = document.getElementsByClassName("calculator__select-items");
  y = document.getElementsByClassName("calculator__select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("calculator__select-arrow-active");
      chevron.classList.remove("--rotate");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("calculator__select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
