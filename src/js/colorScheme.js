function changeFavicon(light, dark) {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentFavicon = document.getElementById("favicon");
  currentFavicon.href = prefersDarkScheme.matches ? dark : light;

  prefersDarkScheme.addEventListener("change", (e) => {
    currentFavicon.href = e.matches ? dark : light;
  });
}

// Gotta find some other icons. When downloaded, the calculator svg becomes black either way
changeFavicon(
  "images/calculator-light_icon.svg",
  "images/calculator-black_icon.svg",
);
