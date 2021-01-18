<template>
  <div class="max-w-2xl mx-auto">
    <div class="grid grid-cols-2 gap-4">
      <template v-for="(item, index) in data" :key="item.id">
        <MainCard :data="item" :main="index === 0" :class="{ 'col-span-2': index === 0}" />
        {{ value }}
      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useVote } from '/~/logics/vote'

const name = ref('')

const router = useRouter()

const { data, getVotes } = useVote()

getVotes()

watch(data, (v) => {
  console.log(v)
})
</script>
