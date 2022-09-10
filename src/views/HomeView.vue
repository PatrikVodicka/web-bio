<template>
  <main class="container-fluid wrapper-full-height">
    <div class="row justify-content-center align-items-md-center h-100 text-center">
      <div class="order-2 order-md-1 col-12 col-md-8 col-lg-7 col-xl-5 text-md-end">
        <h1>Hi, I'm Patrik Vodička</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores inventore
          perferendis possimus qui, quod.
        </p>
      </div>
      <div class="order-1 order-md-2 col-12 col-md-4 col-lg-3 col-xl-2 my-5 m-md-0 align-self-end align-self-md-center pe-lg-0">
        <img
          id="me"
          src="../assets/img/avatar.jpg"
          alt="Patrik Vodička"
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  animation: fadeIn 1s ease-out;
}

#me {
  user-select: none;
  pointer-events: none;
  border-radius: 50%;
}

@include media-breakpoint-up(lg) {
  #me {
    transform: scale(1.15);
  }
}
</style>
