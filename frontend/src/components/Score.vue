<template>
  <div>
    {{ letterGrade.grade }}
    percentage grade: {{ letterGrade.percent }}
  </div>
</template>
<script>
export default {
  name: 'Score',
  data() {
    return {};
  },
  computed: {
    letterGrade() {
      let grade;
      let currentTotalScore = this.$store.state.score * 100;
      if (currentTotalScore >= 90) grade = 'A';
      if (currentTotalScore >= 80 && this.totalScore < 90) grade = 'B';
      return { grade, percent: currentTotalScore };
    },
  },
};
</script>
<style scoped></style>
