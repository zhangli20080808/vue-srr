<template>
  <div>
    foo
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
<style scoped></style>
