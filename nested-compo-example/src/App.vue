<template>
  <div id="app">
    <app-header/>
    <shinobi/>
    <app-footer/>
  </div>
</template>

<script>
import Header from './assets/component/Header.vue';
import Footer from './assets/component/Footer.vue';
import Shinobi from './assets/component/Shinobi.vue';

export default {
  name: 'app',
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'shinobi': Shinobi,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
