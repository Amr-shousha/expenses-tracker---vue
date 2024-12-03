<template>
  <div class="main d-flex justify-content-around">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ Income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ Expenses }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  Income: {
    type: Number,
    required: true,
  },
  Expenses: {
    type: Number,
    required: true,
  },
});
</script>
<style scoped lang="scss">
.main {
  margin: 30px 0;

  #money-plus {
    color: #009b2c;
  }
  #money-minus {
    color: #ff1515;
  }
}
</style>
