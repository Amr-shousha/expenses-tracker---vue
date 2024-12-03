<template>
  <div>
    <h4>Your Balance</h4>
    <h1 :class="Total < 0 ? 'minus' : 'plus'">${{ Total }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  Total: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.minus {
  color: rgb(248, 24, 24);
}
.plus {
  color: rgb(78, 220, 7);
}
</style>
