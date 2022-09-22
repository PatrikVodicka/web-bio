<script setup>
import HTML from '@/assets/img/logo/tech/html.svg?skipsvgo'
import CSS from '@/assets/img/logo/tech/css.svg?skipsvgo'
import Javascript from '@/assets/img/logo/tech/javascript.svg?skipsvgo'
import VueJS from '@/assets/img/logo/tech/vuejs.svg?skipsvgo'
import Webpack from '@/assets/img/logo/tech/webpack.svg?skipsvgo'
import Vite from '@/assets/img/logo/tech/vite.svg?skipsvgo'
import NodeJS from '@/assets/img/logo/tech/nodejs.svg?skipsvgo'

import CV from '@/assets/img/icon/CV.svg'
</script>

<template>
  <main class="wrapper-full-height container-fluid d-flex flex-column justify-content-center">
    <div class="row justify-content-center align-items-md-center text-center">
      <div class="position-relative order-2 order-md-1 col-12 col-md-8 col-lg-7 col-xl-5 text-md-end">
        <h1 class="my-2">Hello there! I'm Patrik Vodička</h1>
        <i class="d-block my-2">
          I specialize in web design and development. Love to work in a team where I can share my knowledge with others in following technologies.
        </i>
        <div
          class="wrapper-tech-logos"
        >
          <HTML />
          <CSS />
          <Javascript />
          <VueJS />
          <Webpack />
          <Vite />
          <NodeJS />
        </div>
        <a
          class="cv-link mt-3"
          href="/CV_Patrik_Vodicka.pdf"
          target="_blank"
        >
          <CV
            class="cv-link__icon"
          />
        </a>
      </div>
      <div class="order-1 order-md-2 col-12 col-md-4 col-lg-3 col-xl-2 my-4 m-md-0 align-self-end align-self-md-center pe-lg-0">
        <img
          class="avatar"
          src="/avatar.jpg"
          alt="Patrik Vodička"
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.wrapper-tech-logos {
  > * {
    height: 35px;
    margin-left: 15px;
  }
}

.cv-link {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 1s 3s ease-out forwards;

  @include media-breakpoint-up(md) {
    position: absolute;
    right: 12px;
  }

  &__icon {
    $size: 50px;

    width: $size;
    height: $size;
    fill: $white;
  }
}

.avatar {
  user-select: none;
  pointer-events: none;
  border-radius: 50%;
}

@include media-breakpoint-up(lg) {
  .avatar {
    transform: scale(1.15);
  }
}
</style>
