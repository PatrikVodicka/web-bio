<script setup>
import CV from '@/assets/img/icon/CV.svg'
</script>

<template>
  <aside>
    <a
      class="cv-link"
      href="/CV_Patrik_Vodicka.pdf"
      target="_blank"
    >
      <CV
        class="cv-link__icon"
      />
    </a>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  justify-content: end;
  position: fixed;
  inset: auto 15px 15px 15px;
  pointer-events: none;
}

.cv-link {
  display: inline-block;
  padding: 3px 10px 3px 0px;
  opacity: 0;
  animation: fadeIn 1s 3s ease-out forwards;
  border-radius: 50%;
  background: $sw-blue;
  pointer-events: auto;

  &__icon {
    $size: 50px;

    width: $size;
    height: $size;
    fill: $white;
  }
}
</style>