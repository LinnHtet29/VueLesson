<template>
  <div id="add-blog">
    <transition name="fade" mode="out-in">
      <div
        id="alert-box"
        :class="['alert', alertClass]"
        v-if="isSubmitted"
        @transitionend="resetAlert"
      >
        <h6>{{ alertMessage }}</h6>
      </div>
    </transition>
    <h2>Add A New Blog Post</h2>
    <form action="">
      <label>Blog Title:</label>
      <input type="text" required v-model.lazy="blog.title">
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content" col="5"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="event" id="cate-event" v-model="blog.categories">
        <label for="cate-camping">Event</label>
        <input type="checkbox" value="camping" id="cate-camping" v-model="blog.categories">
        <label for="cate-event">Camping</label>
        <input type="checkbox" value="trip" id="type-trip" v-model="blog.categories">
        <label for="cate-trip">Trip</label>
        <input type="checkbox" value="music" id="cate-music" v-model="blog.categories">
        <label for="cate-music">Music</label>
      </div>
        <label for="auth">Author:</label>
        <select id="auth" v-model="blog.author">
          <option value="" disabled>Select Author</option>
          <option v-for="auth in blog.authors" :value="auth">{{auth}}</option>
        </select>
        <button @click="post" id="post-btn">Post Blog</button>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: <span id="pre-title">{{blog.title}}</span></p>
      <p>Author: <span id="pre-author">{{blog.author}}</span></p>
      <p>Blog Content</p>
      <p id="pre-content">{{ blog.content }}</p>
      <u id="pre-categories">
        <li v-for="category in blog.categories">{{ category }}</li>
      </u>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: 'Linn Htet Aung',
        authors: ['Linn Htet Aung', 'John Doe', 'John Walter', 'Jame Smith'],
      },
      isSubmitted: false,
      alertClass: '',
      alertMessage: ''
    }
  },
  methods: {
    post(event) {
      event.preventDefault();
      this.isSubmitted = true;
      console.log(this.blog);
      axios.post('/post', this.blog)
        .then(response => {
          if (response.status) {
            this.alertMessage = 'Blog post successful.';
            this.alertClass = 'success';
            this.resetForm();
          } else {
            console.log("Helo");
            this.alertMessage = 'Blog post falied.';
            this.alertClass = 'danger';
          }
          this.showAlert(this.alertClass, this.alertMessage);
        })
        .catch(err => {
          this.alertMessage = 'Somethings went wrong.Contact us';
          this.alertClass = 'danger';
          console.error(err);
          this.showAlert(this.alertClass, this.alertMessage);
        });
    },
    resetForm() {
      this.blog.title = '';
      this.blog.content = '';
      this.blog.categories = [];
    },
    showAlert(alertClass, message) {
      this.alertClass = alertClass;
      this.alertMessage = message;
      setTimeout(() => {
        this.isSubmitted = false;
        console.log(this.isSubmitted);
      }, 5000);
    },
    resetAlert() {
      this.alertClass = '';
      this.alertMessage = '';
    }
  }
}
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  position: relative;
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px dotted #ccc;
}
#preview * {
  margin-bottom: 5px;
}
#pre-title,#pre-content,#pre-author {
  color: #555;
}
#checkboxes label {
  margin-right: 10px;
}
#checkboxes input,label {
  display: inline-block;
}
#pre-categories li {
  margin-right: 10px;
  display: inline;
}
#post-btn {
  float: right;
  margin-top: 15px;
  background: crimson;
  padding: 5px 10px;
  border-radius: 40px;
  color: whitesmoke;
  cursor: pointer;
}
.alert {
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 85vh;
  opacity: 1;
  transition: opacity 0.4s;
}
.alert::before {
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
}
.alert::after {
  transition: opacity ease-in-out 0.4s;
}
.alert.success {
  background: #99ff96;
}
.alert.danger {
  background: #ff9696;
}
h3 {
  margin: 10px 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
