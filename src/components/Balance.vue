<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ totalAmount }} $</h1>
</template>

<script setup>
import { useTransactionsStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';

const { totalAmount } = storeToRefs(useTransactionsStore());
</script>