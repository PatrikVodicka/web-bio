<script setup>
import CV from '@/assets/img/icon/CV.svg'
</script>

<template>
  <main class="container-fluid wrapper-full-height">
    <div class="row justify-content-center align-items-md-center text-center">
      <div class="order-2 order-md-1 col-12 col-md-8 col-lg-7 col-xl-5 text-md-end">
        <h1 class="my-2">Patrik Vodička</h1>
        <i class="d-block my-2">
          Frontend web developer
        </i>
        <a
          class="cv-link"
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
          src="../assets/img/avatar.jpg"
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

.cv-link {
  opacity: 0;
  animation: fadeIn 1s 3s ease-out forwards;

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
