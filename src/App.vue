<template>
  <Header />
  <Navbar v-if="!$route.meta.hideNavbar" />
  <main class="relative w-full p-6 text-gray-700 pt-22 overscroll-x-none">
    <router-view />
    <Footer />
  </main>
  <Copyright />
</template>
