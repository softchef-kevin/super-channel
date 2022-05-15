<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Kanban from '@/components/Kanban.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Kanban msg="You did it!" />
      <Nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </Nav>
    </div>
  </Header>
  <RouterView />
</template>

<style>
@import '@/assets/base.scss';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
  
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
