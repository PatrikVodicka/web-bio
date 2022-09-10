<script setup>
import Kosik from '@/assets/img/logo/kosik.svg'
import Usetreno from '@/assets/img/logo/usetreno.svg'
</script>

<template>
  <main class="container d-flex align-items-center flex-column mt-md-5">
    <article class="row col-10">
      <Kosik
        class="col-8 col-md align-self-start mx-auto my-3"
      />
      <div class="col-12 col-md-8 col-lg-9">
        <p class="mt-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos incidunt magnam temporibus!
          Architecto asperiores at autem deleniti eligendi eum fuga illo illum labore laudantium magnam magni mollitia nobis
          numquam possimus quaerat qui quibusdam recusandae repellat similique vero, voluptates, voluptatibus. Commodi,
          culpa cumque dolore eum quas quidem rem ullam unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos incidunt magnam temporibus!
          Architecto asperiores at autem deleniti eligendi eum fuga illo illum labore laudantium magnam magni mollitia nobis
          numquam possimus quaerat qui quibusdam recusandae repellat similique vero, voluptates, voluptatibus. Commodi,
          culpa cumque dolore eum quas quidem rem ullam unde.
        </p>
      </div>
    </article>
    <article class="row col-10">
      <Usetreno
        class="col-8 col-md align-self-start mx-auto my-3"
      />
      <div class="col-12 col-md-8 col-lg-9">
        <p class="mt-0">
          I mainly redesigned and updated <a href="//usetreno.cz" target="_blank">Ušetřeno.cz</a> portal from jQuery based FE to Vue.js, but participated on many other fronts.
        </p>

        <p>Such as keeping CMS system updated and as flexible as possible and CRM system more UX friendly to
          help CC operators do their job more efficiently.</p>

        <p>I also created and maintained related microsites</p>

        <ul>
          <li>
            <a
              href="//www.elektrina.cz"
              target="_blank"
            >
              elektrina.cz
            </a>
          </li>
          <li>
            <a
              href="//www.cspujcky.cz"
              target="_blank"
            >
              cspujcky.cz
            </a>
          </li>
          <li>
            <a
              href="//www.postovni-sporitelna-pujcka.cz/"
              target="_blank"
            >
              postovni-sporitelna-pujcka.cz
            </a>

          </li>
          <li>
            <a
              href="//www.usetreno-cofidis.cz"
              target="_blank"
            >
              usetreno-cofidis.cz
            </a>
          </li>
          <li>
            <a
              href="//www.usetreno-zonky.cz"
              target="_blank"
            >
              usetreno-zonky.cz
            </a>
          </li>
          <li>
            <a
              href="//www.pujcka-csob.cz"
              target="_blank"
            >
              pujcka-csob.cz
            </a>
          </li>
          <li>
            <a
              href="//www.usetreno-hypotecni-banka.cz"
              target="_blank"
            >
              usetreno-hypotecni-banka.cz
            </a>
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>

<style lang="scss" scoped>
article {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;

  &:nth-child(2) {
    animation-delay: .1s;
  }

  &:nth-child(3) {
    animation-delay: .2s;
  }

  > *:last-child {
    margin-bottom: 0; // no margin bottom on last element
  }

  &:not(:first-of-type):before {
    display: block;
    content: '';
    margin: 3rem auto;
    height: 1px;
    width: 100%;
    background: transparent linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, $sw-blue 50%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>