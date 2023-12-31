new Vue({
  el: "#vue-app",
  data: {
    a: 0,
    b: 0,
    age: 20,
    available: false,
    nearby: false,
    success: false,
    error: false,
    fruits: ["Mango", "Apple", "Banana", "Coconut"],
    heros: [
      {
        name: "Bat Man",
        gender: "Male",
      },
      {
        name: "Iron Man",
        gender: "Male",
      },
      {
        name: "Wonder Woman",
        gender: "Female",
      },
      {
        name: "Captain Marvel",
        gender: "Female",
      },
    ],
  },
  methods: {},
  computed: {
    addToA: function () {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB: function () {
      console.log("addToB");
      return this.b + this.age;
    },
    compoClass: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});
