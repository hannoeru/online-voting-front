<template>
  <nav class="mt-6 text-xl text-center">
    <router-link class="mx-2 icon-btn" to="/" title="home">
      <carbon-campsite />
    </router-link>

    <a class="mx-2 icon-btn" title="dark" @click="isDark = !isDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <router-link class="mx-2 icon-btn" to="/about" title="about">
      <carbon-dicom-overlay />
    </router-link>

    <a class="mx-2 icon-btn" rel="noreferrer" href="https://github.com/hannoeru/online-voting-front" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template>

<script setup lang='ts'>
import { isDark } from '/~/logics'

</script>
