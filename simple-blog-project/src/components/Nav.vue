<template>
  <nav id="nav">
    <ul class="nav-menu">
      <li class="nav-item">
        <router-link to="/" class="nav-link" exact>
          Blogs
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="nav-link" exact>
          Add New Blog
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeNav: ''
    }
  }
}
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  background: crimson;
  width: 100%;
  margin: 0;
  padding: 10px;
  z-index: 9999;
}
.nav-menu {
  display: flex;
  width: 50vh;
  margin: 0 auto;
  justify-content: space-evenly;
}
.nav-item {
  display: inline-block;
}
.nav-link {
  text-decoration: none;
  color: #fff;
  border: none;
  padding: 5px 10px;
  background: transparent;
  cursor: pointer;
  transition: background ease-in-out 0.4s;
  transition: color ease-in-out 0.2s;
}

.router-link-active {
  background: #fff;
  color: crimson;
  border-radius: 20px;
}

</style>
