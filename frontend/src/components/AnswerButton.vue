<template>
  <button class="answer-button">
    <slot name="numeric" class="numeric"></slot>
    <slot name="answer" class="answer-text"></slot>
  </button>
</template>
<script>
export default {
  name: 'AnswerButton',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .answer-button {
  border-radius: 0.5em 0em 0em 0.5em;
  background: rgb(2, 82, 2);
  border: none;
  color: white;
  font-size: 1em;
  padding: 1em;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;
}

.answer-button:hover {
  outline: 1px solid green;
  background: green;
  outline: none;
}

.answer-text {
  padding: 1em;
}

.numeric {
  border-radius: 0.5em 0em 0em 0.5em;
  font-size: 1.25em;
  background-color: gray;
  padding: 1em;
} */
</style>
