<template>
  <button class="answer-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'AnswerButton',
};
</script>

<style scoped>
.answer-button {
  border: 3px solid #fff;
  color: #fff;
  background: none;
  padding: 1em;
  font-size: 1em;
  transition: 0.3s;
  width: 90%;
}

.answer-button:hover {
  background-color: #ffffff37;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
}
</style>
