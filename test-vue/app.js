new Vue({
  el: "#vue-app",
  data: {
    name: "Linn Htet",
    age: 23,
    job: "Software Engineering",
    website: "http://www.googel.com",
    websiteTag:
      '<a href="http://www.google.com" target="blank">Go Google with next page</a>',
    x: 0,
    y: 0,
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name;
    },
    add: function (inc) {
      return (this.age += inc);
    },
    subtract: function (dec) {
      return (this.age -= dec);
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    showClickMe: () => {
      alert("You clicked me...");
    },
  },
});
