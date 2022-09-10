<script setup>
import LinkedIn from '@/assets/img/logo/linkedin.svg'
import GitHub from '@/assets/img/logo/github.svg'
import Skype from '@/assets/img/logo/skype.svg'
import Gmail from '@/assets/img/logo/gmail.svg'
</script>

<template>
  <main class="container wrapper-full-height">
    <div class="row align-items-center h-100">

      <div class="col-6 col-md">
        <a
          href="skype:patrik_vodicka?chat"
          id="skype"
          class="logo"
          title="Skype"
        >
          <Skype />
        </a>
      </div>

      <div class="col-6 col-md">
        <a
          id="linkedin"
          class="logo"
          href="//www.linkedin.com/in/patrik-vodi%C4%8Dka-788799122/"
          target="_blank"
          title="Linked-In"
        >
          <LinkedIn />
        </a>
      </div>

      <div class="col-6 col-md">
        <a
          id="github"
          class="logo"
          href="//github.com/PatrikVodicka"
          target="_blank"
          title="GitHub"
        >
          <GitHub />
        </a>
      </div>

      <div class="col-6 col-md">
        <a
          id="gmail"
          href="mailto:vodicka.patrik@gmail.com"
          class="logo"
          title="Gmail"
        >
          <Gmail />
        </a>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
.logo {
  display: block;
  width: auto;
  height: 100%;
  margin: 3vh auto;
  max-width: calc(10vh + 10vw);
  max-height: calc(10vh + 10vw);
  cursor: pointer;

  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

#skype {
  fill: #0078ca !important;
}

#linkedin {
  fill: #0077B5 !important;
  animation-delay: .1s;
}

#github {
  fill: #d9d9d9 !important;
  animation-delay: .2s;
}

#gmail {
  fill: #b23121 !important;
  animation-delay: .3s;
}
</style>
