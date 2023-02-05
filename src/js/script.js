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