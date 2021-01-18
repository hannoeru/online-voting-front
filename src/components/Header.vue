<template>
  <header class="fixed z-50 flex items-center justify-between w-full h-16 px-6 py-2 bg-white border-b">
    <Logo />
    <Search v-if="!$route.meta.hideSearch" />
    <UserAuth :class="{ 'opacity-0': isLogin }" />
  </header>
</template>

<script setup lang="ts">
import { useAuth } from '/~/logics/auth'

const { isLogin } = useAuth()
console.log(isLogin.value)
</script>

<style>

</style>
