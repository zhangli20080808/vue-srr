<template>
  <div class="foo">
    foo21312
    <button @click="show()">点击</button>
  </div>
</template>
<script>
export default {
  methods: {
    show() {
      console.log(1);
    },
  },
};
</script>
<style scoped>
.foo {
  background: yellow;
}
</style>
