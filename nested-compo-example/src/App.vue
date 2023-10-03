<template>
  <div id="app">
    <app-header :title="title" @chgTitle="chgTitleFromParent($event)"/>
    <shinobi :shinobis="shinobis"/>
    <app-footer :title="title"/>
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
      shinobis: [
        { name: 'Shinobu', speciality: 'Vue Component', show: false },
        { name: 'Tenjiro', speciality: 'HTML Wizardy', show: false },
        { name: 'Zenitsu', speciality: 'Click Events', show: false },
        { name: 'Inosuke', speciality: 'Conditionals', show: false },
        { name: 'Naruto', speciality: 'Web pack', show: false },
        { name: 'Sasuke', speciality: 'Data Diggin', show: false },
      ],
      title: "Vue Shinobis"
    }
  },
  methods: {
    chgTitleFromParent:function (changedValue) {
      this.title = changedValue;
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
