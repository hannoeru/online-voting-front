<template>
  <div class="max-w-2xl mx-auto">
    <div class="grid grid-cols-2 gap-4">
      <template v-for="(item, index) in data" :key="item.id">
        <MainCard :data="item" :main="index === 0" :class="{ 'col-span-2': index === 0}" />
      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useVote } from '/~/logics/vote'
import { log } from 'vue-chemistry/console'

const router = useRouter()

const { data, getVotes } = useVote()

getVotes()

log(data)
</script>
