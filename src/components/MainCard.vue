<template>
  <div class="text-center">
    <div class="mb-2 text-left text-blue-900" :class="main ? 'text-2xl' : 'text-xl'">
      <h1>{{ data.title }}</h1>
    </div>
    <div class="p-2 space-y-2 bg-white rounded-xl">
      <div class="relative rounded-md bg-gradient-to-r from-green-400 to-purple-500" :class="main ? 'pb-64' : 'pb-48'">
        <div class="absolute flex w-full h-full">
          <div class="flex items-center justify-center flex-1 h-full p-2">
            <img src="/~/assets/vim.webp" alt="" class="h-2/3">
          </div>
          <div class="flex items-center justify-center flex-1 h-full p-2">
            <img src="/~/assets/emacs.webp" alt="" class="h-2/3">
          </div>
        </div>
      </div>
      <div v-if="main" class="relative flex justify-around text-xl font-medium text-blue-900">
        <p>{{ data.left.title }}</p>
        <p>{{ data.right.title }}</p>
        <span class="absolute text-orange">VS</span>
      </div>
      <div v-else class="grid grid-cols-3 text-xl font-medium text-blue-900">
        <p>Vim</p>
        <span class="text-orange">VS</span>
        <p>Emacs</p>
      </div>
      <div class="relative flex items-center space-x-3 text-xl font-medium text-blue-900" :class="{ 'text-md': !main}">
        <span class="leading-tight">{{ leftPrecent }}%</span>
        <div class="flex-auto h-4 overflow-hidden bg-blue-900 rounded-full">
          <div class="h-full bg-orange" :style="`width: ${leftPrecent}%;`" />
        </div>
        <span class="leading-tight">{{ rightPrecent }}%</span>
      </div>
      <div class="text-xl text-blue-900">
        <p>総投票数：{{ left + right }}件</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <button class="px-2 py-1 text-lg leading-tight border-2 rounded-lg border-orange text-orange focus:outline-none focus:ring-1">
          {{ data.left.title }}に投票
        </button>
        <button class="px-2 py-1.5 text-lg leading-tight text-blue-900 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring-1">
          {{ data.right.title }}に投票
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  main: {
    type: Boolean,
    default: false,
  },
})
const left = props.data.left.score as number
const right = props.data.right.score as number

const leftPrecent = computed(() => {
  return ((left / (left + right)) * 100).toFixed()
})

const rightPrecent = computed(() => {
  return ((right / (left + right)) * 100).toFixed()
})
</script>

<style>

</style>
