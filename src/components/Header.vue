<template>
  <header class="fixed z-50 flex items-center justify-between w-full h-16 px-6 py-2 bg-white border-b">
    <Logo />
    <Search v-if="!$route.meta.hideSearch" />
    <UserAuth />
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
