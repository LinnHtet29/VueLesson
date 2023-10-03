<template>
  <header>
    <h1 @click="chgTitle">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from '../../main';

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    chgTitle: function () {
      // this.$emit('chgTitle', 'Vue Ranger')
      this.title = 'Vue Ranger';
      bus.$emit('titleChange', this.title);
    }
  }
}
</script>

<style scoped>

header {
  background: lightgreen;
  padding: 5px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
