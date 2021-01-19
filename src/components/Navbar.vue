<template>
  <div class="fixed top-0 left-0 z-40 inline-flex flex-col p-6 space-y-3 text-left pt-22">
    <router-link to="/vote/new" class="px-3 py-1.5 text-white rounded-lg bg-orange focus:outline-none focus:ring-1 hover:bg-opacity-75">
      投票を作成する
    </router-link>
    <div class="px-3 py-2 text-gray-400 bg-white rounded-lg">
      <p class="px-1 mb-2 text-xl font-semibold text-blue-900">
        カテゴリー
      </p>
      <div class="grid grid-cols-1">
        <router-link
          v-for="item in categroy"
          :key="item.slog"
          to="/sss"
          class="px-2 py-1.5 rounded-lg hover:bg-gray-100 focus:bg-gray-200"
          active-class="bg-gray-200"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categroy = ref([
  {
    name: '政治',
    slog: '政治',
  },
  {
    name: '食べ物',
    slog: '食べ物',
  },
  {
    name: '生活',
    slog: '生活',
  },
  {
    name: '恋愛',
    slog: '恋愛',
  },
])
</script>

<style>

</style>
