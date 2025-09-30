<script setup>
import { reactive, defineEmits } from "vue";

const todoState = reactive({
  todo: "",
  invalid: null,
  errMsg: "",
});

const emit = defineEmits(["create-todo"]);

const createTodo = () => {
  todoState.invalid = null;
  if (todoState.todo !== "") {
    emit("create-todo", todoState.todo);
    todoState.todo = "";
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = "Tu tarea no debe estar vacía";
};
</script>

<template>
  <div class="input-wrap">
    <input type="text" v-model="todoState.todo" />
    <button @click="createTodo()">Crear</button>
  </div>
  <p v-if="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
  <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 3px solid #41b080;
  border-radius: 15px;
  margin-bottom: 10px;

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;
    border-radius: 15px;

    &:focus {
      outline: none;
    }
  }

  button {
    margin: 0;
    padding: 8px 16px;
    border: none;
    border-radius: 15px 15px 3px 3px;
    background-color: #c3ddbc;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: #41b080; /* cambio sutil al pasar el mouse */
  }

  button:active {
    transform: scale(0.95); /* efecto de "presionado" */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* sombra más suave */
  }
}
</style>
