<template>
  <div>
    <ul>
      <li v-for="shinobi in shinobis" @click="shinobi.show = !shinobi.show" class="shinobis">
        <h2>{{shinobi.name}}</h2>
        <h2 v-show="shinobi.show">{{shinobi.speciality}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shinobis: [
        {name:'Shinobu', speciality: 'Vue Component', show: false},
        {name:'Tenjiro', speciality: 'HTML Wizardy', show: false},
        {name:'Zenitsu', speciality: 'Click Events', show: false},
        {name:'Inosuke', speciality: 'Conditionals', show: false},
        {name:'Naruto', speciality: 'Web pack', show: false},
        {name:'Sasuke', speciality: 'Data Diggin', show: false},
      ],
    }
  }
}
</script>

<style scoped>
.shinobi {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #333;
  margin: 10px;
}
</style>
