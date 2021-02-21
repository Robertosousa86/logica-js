// usando TL para html fragments

const article = {
  title: "Lorem, ipsum.",
  intro: "Lorem ipsum dolor sit amet consectetur.",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque?",
};

const markUp = `
<article>
 <header>
  <h1>${article.title}</h1>
 </header>
  <section>
   <p>${article.intro}</p>
   <p>${article.body}</p>
  </section>
</article>
`;
