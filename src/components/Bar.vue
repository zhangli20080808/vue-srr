<template>
  <div class="bar">bar {{ this.$store.state.name }}</div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('changeName');
  },
  asyncData(store) {
    return store.dispatch('changeName');
  },
};
</script>
<style scoped>
.bar {
  background: red;
}
</style>
