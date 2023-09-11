document.getElementById("mazieKaķēni").addEventListener("click", () => {
  const inputValue = document.getElementById("input").value;
  const h1 = document.createElement("h1");
  h1.textContent = inputValue;

  document.body.appendChild(h1);
});
