<template>
  <div class="p-6">
    <div class="max-w-2xl mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <MainCard class="col-span-2" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${name.value}`)
}
</script>
