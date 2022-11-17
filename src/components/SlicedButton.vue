<script setup>
const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <span class="sliced-button">
    <component
      v-for="btn in buttons"
      class="btn"
      :is="btn?.entity || 'router-link'"
      :to="btn?.to"
      :href="btn?.href || btn?.to"
      :target="btn?.target"
      @click="e => btn?.click(e)"
    >
      <span
        v-text="btn.text"
      />
    </component>
  </span>
</template>

<style lang="scss" scoped>
$sliced-button-border-width: 2px;

.sliced-button {
  display: inline-block;
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: inset 0 0 0 $sliced-button-border-width $white;
}

.btn {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  transform: skew(-20deg);
  box-shadow: 0 0 0 $sliced-button-border-width * 0.5 $white;
  border: 0;
  font-size: 16px;
  line-height: 1;

  > span {
    display: inline-block;
    transform: skew(20deg);
  }
}
</style>