const apiKey = "k0tNKOu0zRVsXiIp0NmFx5nnFT3UpUny";

const submitBtn = document.querySelector("#submit-btn");
const container = document.querySelector("#gif-container");
const yesButtons = document.querySelectorAll(".yes");
const noButtons = document.querySelectorAll(".no");

let score = 0;

yesButtons.forEach(button => {
  button.addEventListener("click", () => {
    score++;
    button.disabled = true;
    button.nextElementSibling.disabled = true;
  });
});

noButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.disabled = true;
    button.previousElementSibling.disabled = true;
  });
});

submitBtn.addEventListener("click", async () => {
  const personality = score <= 1 ? "introvert" : score === 2 ? "ambivert" : "extrovert";

  container.innerHTML = `<p class="text-center">Your personality type: ${personality.charAt(0).toUpperCase() + personality.slice(1)}</p>`;

  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${personality}&limit=6`;

  const response = await fetch(endpoint);
  const data = await response.json();

  data.data.forEach(gif => {
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    img.className = "col-4 mb-3";
    container.appendChild(img);
  });
});