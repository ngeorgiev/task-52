import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const body = document.body;
  body.addEventListener('click', () => {
    body.insertAdjacentHTML("beforeend", `
    <article class="message">sample</article>
    <article class="message">sample</article>
    <article class="message">sample</article>
    <article class="message">sample</article>
    <article class="message">sample</article>
  `)
  })
  
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


