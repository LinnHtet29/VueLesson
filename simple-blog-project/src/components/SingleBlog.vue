<template>
  <div id="single-blog">
    <div id="header">
      <h1>{{this.blog.title}}</h1>
      <div>
        <router-link :to="'/edit/'+this.id">
          <button class="btn">Edit</button>
        </router-link>
        <button class="btn" @click="deleteBlog">Delete</button>
      </div>
    </div>
    <p>{{this.blog.content}}</p>
    <ul id="categories-con">
      <li v-for="category in this.blog.categories" v-random-gradient >{{category}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {

      }
    }
  },
  created() {
    console.log(this.id);
    axios.get(`/${this.id}`)
      .then(response => {
        console.log(response);
      this.blog = response.data.result.blog
      })
      .catch(err => console.log(err))
  },
  methods: {
    deleteBlog() {
      console.log(this.id);
      axios.delete(`/delete/${this.id}`)
        .then(response => {
          if (response.status === 200) {
            this.$router.push('/')
          }
        })
        .catch(err => console.log(err))
    }
  }
}

</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
#categories-con {
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
  border-top: 2px solid crimson;
}
#categories-con li {
  font-size: 0.8rem;
  display: inline-block;
  margin: 3px;
  padding: 5px 10px;
  border-radius: 20px;
}
#header {
  display: flex;
  justify-content: space-between;
}
.btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 1px 7px;
  border-radius: 20px;
  margin-left: 10px;
}
.btn:hover {
  box-shadow: 1px 2px 3px #d3d3d3;
}
</style>
