const apiKey = "k0tNKOu0zRVsXiIp0NmFx5nnFT3UpUny";

const button = document.querySelector("#fetch-gif-btn");
const input = document.querySelector("#search-input");
const container = document.querySelector("#gif-container");

button.addEventListener("click", async () => {
  const searchTerm = input.value.trim() || "funny";

  container.innerHTML = "";

  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=6`;

  const response = await fetch(endpoint);
  const data = await response.json();

  data.data.forEach(gif => {
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    img.className = "col-4 mb-3";
    container.appendChild(img);
  });
});