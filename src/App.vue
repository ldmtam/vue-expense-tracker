<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpense />
    <TransactionHistory />
    <AddTransaction />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';
import IncomeExpense from '@/components/IncomeExpense.vue';
import TransactionHistory from '@/components/TransactionHistory.vue';
import AddTransaction from '@/components/AddTransaction.vue';
</script>