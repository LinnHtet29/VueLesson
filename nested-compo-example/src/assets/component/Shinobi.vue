<template>
  <div>
    <ul>
      <li v-for="shinobi in shinobis" @click="shinobi.show = !shinobi.show" class="shinobis">
        <h2>{{shinobi.name}}</h2>
        <h2 v-show="shinobi.show">{{shinobi.speciality}}</h2>
      </li>
    </ul>
    <button @click="deleteShinobi" class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    shinobis: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    deleteShinobi: function () {
      this.shinobis.pop();
    }
  },
  // beforeCreate() {
  //   alert("Before created..");
  // },
  // created() {
  //   alert("Created...");
  // },
  // beforeMount() {
  //   alert("Before mount...");
  // },
  // mounted() {
  //   alert("Mounted...");
  // },
  // beforeUpdate() {
  //   alert("Before update....");
  // },
  // updated() {
  //   alert("Updated...");
  // }
}
</script>

<style scoped>
.shinobis {
  width: 100%;
  max-width: 1200px;
  margin: 20px;
  padding: 40px auto;
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

.delete {
  margin: 20px;
  padding: 10px 20px;
}
</style>
