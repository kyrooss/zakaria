const cursor = document.querySelector("div#cursor"),
  cursorPoint = document.querySelector("div#cursorPoint");

let isTouch = window.navigator.maxTouchPoints;

if (isTouch) {
    cursor.remove();
    cursorPoint.remove();
}

document.addEventListener("mousemove", (e) => {
  cursorPosition(e.clientX, e.clientY);
});

function cursorPosition(x, y) {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.display = null;

  cursorPoint.style.left = x + "px";
  cursorPoint.style.top = y + "px";
  cursorPoint.style.display = null;

  if (y <= 4) {
    cursor.style.opacity = 0;
    cursorPoint.style.opacity = 0;
  } else {
    cursor.style.opacity = null;
    cursorPoint.style.opacity = null;
  }

  cursorClickElements();
}

function cursorClickElements() {
  const clickEle = document.querySelectorAll(".mouseLink");

  clickEle.forEach((c) => {
    c.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      cursorPoint.classList.add("hover");
    });
    c.addEventListener("mouseout", () => {
      cursor.classList.remove("hover");
      cursorPoint.classList.remove("hover");
    });
  });
}

window.addEventListener("mousedown", () => {
  cursor.style.width = `45px`;
});

window.addEventListener("mouseup", () => {
  cursor.style.width = null;
});
