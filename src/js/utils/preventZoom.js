let lastTouchEnd = 0;

document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 100) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false,
);
