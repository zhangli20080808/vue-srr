<template>
  <div id="app">
    <router-link to="/">/foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-view></router-view>
    <!-- {{ $store.state.name }} -->
    <!-- <button @click="$store.dispatch('changeName')">xxx</button> -->
  </div>
</template>
<script>
import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';

export default {
  // mounted() {
  //   this.$store.dispatch('changeName');
  // },
  components: {
    Bar,
    Foo,
  },
};
</script>
<style scoped></style>
