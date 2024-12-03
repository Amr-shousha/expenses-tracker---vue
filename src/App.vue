<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomExpense from "./components/IncomeExpense.vue";
import Transaction from "./components/TransactionList.vue";
import AddTransacrion from "./components/AddTransaction.vue";
import Download from "./components/Download.vue";

import { reactive, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";
const Toast = useToast();
const transactions = reactive([]);

onMounted(() => {
  const savedTransaction = JSON.parse(localStorage.getItem("transactions"));
  if (savedTransaction) {
    transactions.push(...savedTransaction);
  }
});

const saveToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

const Total = computed(() => {
  return transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0); // start with an initial value of 0
});
//income
const Income = computed(() => {
  return transactions
    .filter((transaction) => transaction.amount > 0)

    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2); // start with an initial value of 0
});
//expenses
const Expenses = computed(() => {
  return transactions
    .filter((transaction) => transaction.amount < 0)

    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2); // start with an initial value of 0
});

const handleSubmition = (TransactionData) => {
  transactions.push({
    id: generateUniqueId(),
    text: TransactionData.text,
    amount: TransactionData.amount,
    date: generateDate(),
  });
  saveToLocalStorage();
  Toast.success("Transaction submitted");
};
const generateDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-CA"); // "en-CA" formats as "YYYY-MM-DD"
  return formattedDate;
};
// Format it as YYYY-MM-DD

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000);
};

const handelDelete = (id) => {
  const Index = transactions.findIndex((transaction) => transaction.id === id);
  if (Index !== -1) {
    transactions.splice(Index, 1);
  }
  saveToLocalStorage();
  Toast.success("Transaction deleted");
};
</script>

<template>
  <div class="container">
    <Header />

    <Balance :Total="Total" />
    <IncomExpense :Income="+Income" :Expenses="+Expenses" />
    <Transaction :transactions="transactions" @Delete="handelDelete" />
    <AddTransacrion @TransactionSubmitted="handleSubmition" />
    <Download :transactions="transactions" />
  </div>
</template>

<style scoped></style>
