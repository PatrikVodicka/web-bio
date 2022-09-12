<script setup>
import Kosik from '@/assets/img/logo/kosik.svg'
import Usetreno from '@/assets/img/logo/usetreno.svg'
</script>

<template>
  <main class="container d-flex align-items-center flex-column mt-md-5">
    <article class="row col-10">
      <div
        class="col-8 col-md align-self-start mx-auto my-3 text-end"
      >
        <a
          href="//kosik.cz"
          target="_blank"
        >
          <Kosik />
        </a>
        <i>Online grocery store.<br>2/2020 - 8/2022</i>
      </div>
      <div class="col-12 col-md-8 col-lg-9">
        <i>
          I designed & built the new Kosik SPA FE architecture using VueJS,
          managed JIRA dashboards & engineer hiring interviews and last but not
          least, I mentor, guide and support new team members.
        </i>

        <h4>Tech stack</h4>
        <p>
          Docker, MongoDB, Php7, Nette/Latte, NodeJS, jQuery, VueJS 2.6 → 3,
          Typescript, JS ES6+, Testcafe → Cypress, Jest → Vitest, Storybook,
          Figma, AdobeXD, Inkscape, JIRA + Confluence
        </p>

        <h4>Project examples</h4>

        <h5 class="m-0">Order tracking</h5>
        <p class="mt-0 ms-3">
          To help customers know when and where they can expect their order<br>we create in-house solution using <a href="//leafletjs.com/" target="_blank">leafletjs</a>
        </p>

        <h5 class="m-0">Upgrade from MVC to SPA</h5>
        <p class="mt-0 ms-3">
          Nette/Latte/jQuery → VueJS/REST
        </p>

        <h5 class="m-0">Vue ecosystem upgrade</h5>
        <ol class="mt-0 ms-2 ps-4">
          <li>
            VueJS 2.6 w/ webpack 5
          </li>
          <li>
            VueJS 2.6 w/ Vue CLI
          </li>
          <li>
            VueJS 3 w/ Vite
          </li>
        </ol>

        <h5 class="m-0">Multilanguage grocery ecommerce web app</h5>
        <ul class="mt-0 ms-2 ps-4">
          <li>
            Implementation Vue I18n
          </li>
          <li>
            Assets configuration for each domain
            <br>
            (NodeJS pre-build process)
          </li>
        </ul>

        <h5 class="m-0">Storybook documentation</h5>
        <p class="mt-0 ms-3">
          ReactJS tool for standalone components documentation to improve cooperation with UX designers.
        </p>

        <h5 class="m-0">Unit tests</h5>
        <p class="mt-0 ms-3">
          Jest → Vitest
        </p>

        <h5 class="m-0">E2E automatic testing</h5>
        <p class="mt-0 ms-3">
          Testcafe → Cypress
        </p>
      </div>
    </article>
    <article class="row col-10">
      <div
        class="col-8 col-md align-self-start mx-auto my-3 text-end"
      >
        <a
          href="//usetreno.cz"
          target="_blank"
        >
          <Usetreno
            class="mb-2"
          />
        </a>
        <i>Online comparator for energy products, loans, mortgages, mobile tariffs and much more.<br>9/2017 - 8/2019</i>
      </div>
      <div class="col-12 col-md-8 col-lg-9">
        <i>
          I was part of a small but very dedicated team where everybody aside of their main focus was flexible enough to
          solve issues from different areas. I mainly focus on FE, but I also design UI, manage JIRA dashboard and help
          BE engineers with some parts of their issues.
        </i>

        <h4>Tech stack</h4>
        <p>
          Docker, MySQL, Php7, Symfony, JS ES6+, jQuery → VueJS 2.6, Bootstrap4, Avocode, Photoshop, AdobeXD, JIRA
        </p>

        <h4>Project examples</h4>

        <h5 class="m-0">Rebrand & upgrade usetreno.cz</h5>
        <ul class="mt-0 ms-2 ps-4">
          <li>
            complete design change
          </li>
          <li>
            FE architecture upgrade
            <br>
            MVC Symfony/Twig/jQuery → SPA VueJS/REST
          </li>
        </ul>

        <h5 class="m-0">Design & development VIP clients microsites</h5>
        <p class="my-0 ms-3">
          (mostly MVC model Symfony/Twig/jQuery)
        </p>
        <ul class="list-plain ms-3">
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

        <h5 class="m-0">External project for fast and easy loan comparison</h5>
        <p class="mt-0 ms-3">
          (model SPA VueJS/REST)
        </p>
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