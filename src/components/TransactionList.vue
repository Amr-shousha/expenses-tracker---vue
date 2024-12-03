<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      class="d-flex"
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn" @click="deleteTransaction(transaction.id)">
        X
      </button>
    </li>
  </ul>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const Emits = defineEmits(["Delete"]);

function deleteTransaction(id) {
  Emits("Delete", id);
}
</script>
<style lang="scss" scoped>
li {
  background-color: #0b7674;
  padding: 10px 10px;
  justify-content: flex-end;
  margin-top: 5px;
  button {
    background-color: red;
    width: 20px;
    padding: 0;
    margin-left: 10px;
  }
}
</style>
