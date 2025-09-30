<script setup>
import { reactive, defineEmits } from "vue";
import TodoButton from "./TodoButton.vue";

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
  <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
    <input type="text" v-model="todoState.todo" />
    <TodoButton @click="createTodo()" />
  </div>
  <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 3px solid #41b080;
  border-radius: 15px;
  margin-bottom: 10px;

  &.input-err {
    border-color: rgb(163, 32, 32);
  }

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
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: rgb(163, 32, 32);
}
</style>
