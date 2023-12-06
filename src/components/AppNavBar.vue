<script>
import { store } from '../store';
export default {
  props: {
    headerLanguages: Array,
    headerItems: Array,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
}
</script>

<template>
  <div class="navbar container d-flex justify-content-between align-items-center">
    <!-- Logo -->
    <img src="../assets/images/MasterStudy_logo.svg" alt="">

    <!-- Burger Menu and Category -->
    <div class="burger-menu gray d-flex justify-content-between align-items-center">
      <div class="burger-icon">
        <a href=""><i class="fa-solid fa-bars"></i></a>
      </div>
      <div class="category">CATEGORY</div>
    </div>

    <!-- SearchBar -->
    <form class="d-flex align-items-center">
      <input class="search-bar form-control" type="search" placeholder="Search courses" aria-label="Search">
      <button class="search-btn btn btn-primary" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>

    <!-- Instructor - Enterprise-->
    <div class="plan-type">
      <div class="plan-item">
        <a href=""><i class="fa-solid fa-bullhorn blue-hover"></i></a>
        Become an Instructor
      </div>
      <div class="plan-item">
        <a href=""><i class="fa-solid fa-briefcase blue-hover"></i></a>
        For Enterprise
      </div>
    </div>

    <!-- Login -->
    <div class="login">
      <div>
        <a href=""><i class="fa-solid fa-user blue-hover"></i></a>
        Log in
      </div>
      <button class="signup-btn btn btn-primary rounded-pill">SIGN UP</button>
      <a href=""><i class="fa-regular fa-bookmark blue-hover"></i></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;

.burger-menu {
  gap: .4rem;
}

.burger-icon {
  font-size: .5rem;
}

.search-bar {
  background-color: #f0f2f5;
  border: none;
  border-radius: 0;
  width: 400px;
}

.search-btn {
  border-radius: 0;
}

.plan-type {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.gray {
  color: gray;
}

.blue-hover:hover {
  color: blue;
  cursor: pointer;
}
</style>