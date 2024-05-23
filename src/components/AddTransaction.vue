<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount <br />(negative - expense, positive - income)</label>
      <input type="text" id="amount" v-model="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTransactionsStore } from '@/stores/transactions';
import { useToast } from "vue-toastification";

const text = ref('');
const amount = ref('');
const toast = useToast();

const textInputElement = ref();

const { addTransaction } = useTransactionsStore();

const onSubmit = () => {
  addTransaction({
    id: generateUniqueId(),
    text: text.value,
    amount: parseFloat(amount.value)
  });

  text.value = '';
  amount.value = '';

  toast.success('Transaction added');
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
}
</script>