import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core'

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = useStorage('transactions', []);

  const addTransaction = (transaction) => {
    transactions.value.push(transaction);
  };

  const deleteTransactionById = (id) => {
    transactions.value = transactions.value.filter((transaction) => transaction.id != id);
  };

  const totalAmount = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
  });

  const incomeAmount = computed(() => {
    return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
  });

  const expenseAmount = computed(() => {
    return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
  });

  return { transactions, addTransaction, deleteTransactionById, totalAmount, incomeAmount, expenseAmount };
})