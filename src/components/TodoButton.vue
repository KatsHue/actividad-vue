<script setup></script>

<template>
  <button>
    <slot>Crear</slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  margin: 0;
  padding: 8px 16px;
  border: none;
  border-radius: 10px 10px 10px 10px;
  background-color: #c3ddbc;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: "Marcellus", sans-serif;
  font-size: 15px;
  font-weight: bold;
}

button:hover {
  background-color: #41b080;
  color: white;
}

button:active {
  transform: scale(0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
