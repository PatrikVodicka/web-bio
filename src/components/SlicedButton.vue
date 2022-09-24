<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  btnHref1: {
    type: String,
    default: '',
  },
  btnTo1: {
    type: String,
    default: '',
  },
  btnText1: {
    type: String,
    default: '',
  },
  btnHref2: {
    type: String,
    default: '',
  },
  btnTo2: {
    type: String,
    default: '',
  },
  btnText2: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="sliced-button">
    <component
      class="btn1"
      :is="btnHref1 ? 'a' : 'router-link'"
      :to="btnTo1 || undefined"
      :href="btnHref1 || btnTo1"
      :target="btnHref1 ? '_blank' : undefined"
    >
      <span
        v-text="btnText1"
      />
    </component>
    <component
      class="btn2"
      :is="btnHref2 ? 'a' : 'router-link'"
      :to="btnTo2 || undefined"
      :href="btnHref2 || btnTo2"
      :target="btnHref2 ? '_blank' : undefined"
    >
      <span
        v-text="btnText2"
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
  line-height: 1;
}

[class^=btn] {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: $white;
  transform: skew(-20deg);
  transition: background-color 0.15s ease-in, color 0.15s ease-in;

  > span {
    display: inline-block;
    transform: skew(20deg);
  }

  &:hover {
    text-decoration: none;
    color: $sw-yellow;
    background-color: adjust-color($sw-blue, $alpha: -0.6);
  }
}

.btn1 {
  box-shadow: 0 0 0 $sliced-button-border-width * 0.5 $white;
}

.btn2 {
  box-shadow: 0 0 0 $sliced-button-border-width * 0.5 $white;
}
</style>