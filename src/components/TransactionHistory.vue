<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions" 
      :key="transaction.id"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{ transaction.text }} <span>{{ transaction.amount }} $</span><button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button>
    </li>
  </ul>
</template>

<script setup>
import { useTransactionsStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';
import { useToast } from "vue-toastification";

const transactionsStores = useTransactionsStore();
const { transactions } = storeToRefs(transactionsStores);
const { deleteTransactionById } = transactionsStores;

const toast = useToast();

const deleteTransaction = (transId) => {
  deleteTransactionById(transId);
  toast.success('Transaction deleted');
}
</script>