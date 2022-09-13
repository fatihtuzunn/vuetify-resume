<template>
   <section id="about">
        <div class="container">
            <h2>ABOUT ME</h2>
            <hr>
            <img src="https://images.unsplash.com/photo-1522496739788-e3927a7a5ad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="Photo">
            <p class="lead">Junior Frontend Developer</p>
            <p>I'm  <strong>Front-end Developer</strong> from  Turkey.</p>
            <p>I love <strong>new challenges.</strong> I am a fast learner and a hard-working person.</p>
            
            <p>Aside from development, I like learning languages, playing sports.</p>
        </div>
    </section>
</template>

<style scoped>
.bold {
  font-weight: 700; }




#about {
  padding: 5rem 0;
  text-align: center; }
  #about img {
    width: 400px;
    border: 2px solid #232323;
    border-radius: 100%;
    padding: .2rem;
    margin-top: 3rem;
    margin-bottom: 2rem; }
  #about .lead {
    font-size: 1.5rem;
    color: #00ff6c;
    font-weight: 700;
    margin-bottom: 1.5rem; }
  #about p {
    font-size: 1.25rem;
    color: #232323; }
    #about p a {
      color: #232323;
      text-decoration: underline;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s; }
      #about p a:hover {
        color: #00ff6c; }
  #about p + p {
    margin-bottom: 2rem; }

@media (min-width: 47.9em) {
  #about {
    width: 85%;
    margin: 0 auto; }
    #about h2 {
      font-size: 2.2rem; }
    #about .lead {
      font-size: 1.7rem;
      margin-bottom: 1.5rem; }
    #about p {
      font-size: 1.45rem; } }

@media (min-width: 61.9em) {
  #about {
    width: 80%; }
    #about h2 {
      font-size: 2.4rem; }
    #about .lead {
      font-size: 1.9rem;
      margin-bottom: 1.5rem; }
    #about p {
      font-size: 1.65rem; } }

@media (min-width: 74.9em) {
  #about {
    width: 60%; }
    #about h2 {
      font-size: 2.6rem; }
    #about .lead {
      font-size: 2.1rem;
      margin-bottom: 1.5rem; }
    #about p {
      font-size: 1.85rem; }
    #about p + p {
      margin-bottom: 2.2rem; } }
</style>