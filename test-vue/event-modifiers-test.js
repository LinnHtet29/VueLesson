new Vue({
  el: "#vue-app",
  data: {
    nameStatus: false,
    ageStatus: false,
    color: "blue",
    showImg: true,
    books: [
      {
        name: "Book 1",
        author: "Linn Htet Aung",
      },
      {
        name: "Book 2",
        author: "Heinn Thant Sin",
      },
      {
        name: "Book 3",
        author: "Shine Wai Tun",
      },
    ],
  },
  methods: {
    changeRed: function () {
      this.color = "red";
    },
    changeBlue: function () {
      this.color = "blue";
    },
    showImage: function () {
      this.showImg = !this.showImg;
    },
    validateName: function (event) {
      this.nameStatus = event.target.value === "" ? false : true;
      if (this.nameStatus) {
        alert("Welcome " + event.target.value);
      }
    },
    validateAge: function (event) {
      this.ageStatus = event.target.value === "" ? false : true;
      if (this.ageStatus) {
        alert("Your age is " + event.target.value);
      }
    },
  },
});
