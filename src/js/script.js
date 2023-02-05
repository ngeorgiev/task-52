const body = document.body;
body.addEventListener('click', () => {
    body.insertAdjacentHTML("beforeend", `
    <article class="message"></article>
    <article class="message"></article>
    <article class="message"></article>
    <article class="message"></article>
    <article class="message"></article>
  `)
})