<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="../assets/logo-planit.png" alt="Logo de Planit" />
        <h1>Planit Todos</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/nosotros">Nosotros</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #c3ddbc;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 40px;
      }

      h1 {
        font-size: 23px;
        color: #315e28;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: #294e21;
        font-weight: bold;
      }
    }
  }
}
</style>
