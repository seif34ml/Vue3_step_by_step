<template>
  <div>
    <slot name="icon" />
    <slot name="heading" />
    <slot name="body" />
  </div>
</template>

<script setup>
name: 'MainItem'
</script>

<style scoped>
div {
  border: 2px solid black;
  margin-bottom: 15px;
  padding-top: 15px;
}
</style>
