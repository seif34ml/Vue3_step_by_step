<script setup>
import { ref } from 'vue'
import MainItem from '../components/MainItem.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>Homepage message: {{ msg }}</h1>
  <main-item>
    <template #icon>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/349/954/original/documentation-vector-icon.jpg"
        alt="icon heading 1"
        srcset=""
        width="50"
        height="50"
      />
    </template>
    <template #heading><h1>seif heading1</h1></template>
    <template #body><p>this is paragraph 1</p></template>
  </main-item>
  <main-item>
    <template #icon>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/349/954/original/documentation-vector-icon.jpg"
        alt="icon heading 1"
        srcset=""
        width="50"
        height="50"
      />
    </template>
    <template #heading><h1>seif heading2</h1></template>
    <template #body><p>this is paragraph 2</p></template>
  </main-item>
  <main-item>
    <template #icon>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/349/954/original/documentation-vector-icon.jpg"
        alt="icon heading 1"
        srcset=""
        width="50"
        height="50"
      />
    </template>
    <template #heading><h1>seif heading3</h1></template>
    <template #body><p>this is paragraph 3</p></template>
  </main-item>
</template>
/* we have now the same component with diffrent contents */
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
