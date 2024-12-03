<template>
  <h3>New transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div id="IncomExpenses" class="form-control">
      <label for="text">Income/Expense</label>
      <input
        type="text"
        id="text"
        placeholder="Income/Expense..."
        v-model="text"
      />
    </div>
    <div class="form-control">
      <label for="amount">Amount </label>
      <div class="type d-flex justify-content-around">
        <label for="income"
          ><input
            type="radio"
            value="1"
            v-model="transactionType"
            id="income"
          />
          Income</label
        >
        <label for="eXPENSE">
          <input
            type="radio"
            value="2"
            @click="expense = true"
            id="eXPENSE"
            v-model="transactionType"
          />
          Expenses</label
        >
      </div>
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        v-model="amount"
      />
    </div>

    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const Emits = defineEmits(["TransactionSubmitted"]);

const Toast = useToast();
const text = ref("");
const amount = ref("");
const expense = ref(null);
const transactionType = ref(null);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    Toast.error("Both fields must be filled");
    return;
  }
  if (expense.value) {
    amount.value = -amount.value;
    expense.value = null;
  }
  const TransactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  Emits("TransactionSubmitted", TransactionData);
  text.value = "";
  amount.value = "";
};
</script>

<style lang="scss" scoped>
form {
  #IncomExpenses {
    border-radius: 20px 20px 0 0;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    background-color: #000000;
    border-radius: 0px 0 20px 20px;
    gap: 10px;
    margin-top: 10px;
    width: 300px;
    label {
      color: #ffffff;
    }

    input {
      background-color: rgb(255, 255, 255);
      border-radius: 30px;
      padding: 3px 10px;
      border: solid 1px #000000;
    }
  }
  .btn {
    border: none;
    background-color: #39ff27;
    margin: 20px;
    font-weight: 600;
    padding: 5px 20px;
  }
}
</style>
