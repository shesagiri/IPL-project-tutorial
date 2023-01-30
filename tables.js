let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".card");

function getResults(e) {
  images.forEach((val) => {
    val.style.display = "none";
    val.dataset.title.includes(e.target.value)
      ? (val.style.display = "block")
      : null;
  });
}

searchBox.addEventListener("keyup", getResults);
