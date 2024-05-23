<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">{{ incomeAmount }} $</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">{{ expenseAmount }} $</p>
    </div>
  </div>
</template>

<script setup>
import { useTransactionsStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';

const { incomeAmount, expenseAmount } = storeToRefs(useTransactionsStore());
</script>