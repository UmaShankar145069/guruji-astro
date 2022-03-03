// handle lang
function handleLanguage() {
  const poi = document.querySelector(".poi");
  const option = document.querySelector(".option");
  if (poi.style.display === "block" && option.style.display === "block") {
    poi.style.display = "none";
    option.style.display = "none";
  } else {
    poi.style.display = "block";
    option.style.display = "block";
  }
}

// handle profile
function handleProfile() {
  const poi = document.querySelector(".pro-pointer");
  const option = document.querySelector(".profile-detail");
  if (poi.style.display === "block" && option.style.display === "block") {
    poi.style.display = "none";
    option.style.display = "none";
  } else {
    poi.style.display = "block";
    option.style.display = "block";
  }
}
