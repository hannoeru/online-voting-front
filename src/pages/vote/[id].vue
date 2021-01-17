<template>
  <div class="max-w-2xl mx-auto">
    <div class="grid grid-cols-2 gap-4">
      <MainCard class="col-span-2" />
      {{ id }}
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')

const props = defineProps({
  id: String,
})

const router = useRouter()
</script>
