<template>
  <div class="wrapper my-5 py-sm-5">
    <router-link
      class="link-example"
      to="/examples/cats"
      title="Infinite cat scroll"
    >
      <img
        class="rounded-circle"
        src="//cataas.com/cat/roll"
        alt="Cute cat image"
      >
      <div class="ms-2">
        <h3 class="my-1">Infinite cats scroll</h3>
        <i>Internet belongs to cats!</i>
      </div>
    </router-link>
    <router-link
      class="link-example"
      to="/examples/cat-breeds-catalog"
      title="Cat breeds game"
    >
      <img
        class="rounded-circle"
        src="//cataas.com/cat/comfy"
        alt="Cute cat image"
      >
      <div class="ms-2">
        <h3 class="my-1">Cat breeds catalog</h3>
        <i>All known cat breeds</i>
      </div>
    </router-link>
    <router-link
      class="link-example"
      to="/examples/cat-breeds-game"
      title="Cat breeds game"
    >
      <img
        class="rounded-circle"
        src="//cataas.com/cat/fun"
        alt="Cute cat image"
      >
      <div class="ms-2">
        <h3 class="my-1">Cat breeds game</h3>
        <i>Guess cat breed!</i>
      </div>
    </router-link>
    <a
      class="link-example"
      href="//rgb.cekuj.net"
      target="_blank"
      title="RGB chart generator"
    >
      <img
        class="rgb-pie-chart"
        src="/img/rgb-pie-chart.png"
        alt="RGB pie chart"
      />
      <div class="ms-2">
        <h3 class="my-1">RGB chart generator</h3>
        <i>My first FE project</i>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
}

.link-example {
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 20px 10px;
  color: $white;
  text-align: left;
  overflow: hidden;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;

  img {
    $size: 100px;
    width: $size;
    height: $size;
  }

  &:hover {
    text-decoration: none;
  }
}

.rgb-pie-chart {
  filter: brightness(0.65);
}
</style>