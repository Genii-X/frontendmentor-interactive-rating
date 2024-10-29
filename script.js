let ratings = document.querySelector(".ratings");
let submitButton = document.querySelector("button");
let main = document.querySelector(".main");
let response = document.querySelector(".response");

function handleClick(event) {
  let valueDiv = document.querySelector(".value");

  if (event.target.classList.contains("rating")) {
    document
      .querySelectorAll(".rating")
      .forEach(rating => rating.classList.remove("active"));

    event.target.classList.add("active");
  }

  submitButton.disabled = false;

  let value = event.target.getAttribute("value");

  if (!value) return;

  valueDiv.innerHTML = "";

  valueDiv.prepend(value);
}

ratings.addEventListener("click", handleClick);

function showResponse() {
  main.style.display = "none";
  response.style.display = "block";
}

submitButton.addEventListener("click", showResponse);
