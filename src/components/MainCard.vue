<template>
  <div>
    <div class="mb-2 text-2xl text-left text-blue-900">
      <h1>史上最強のエディター</h1>
    </div>
    <div class="p-2 space-y-2 bg-white rounded-xl">
      <div class="relative pb-64 rounded-md bg-gradient-to-r from-green-400 to-purple-500">
        <div class="absolute flex w-full h-full">
          <div class="flex items-center justify-center flex-1 h-full p-2">
            <img src="/~/assets/vim.svg" alt="" class="w-2/3 h-2/3">
          </div>
          <div class="flex items-center justify-center flex-1 h-full p-2">
            <img src="/~/assets/emacs.svg" alt="" class="w-2/3 h-2/3">
          </div>
        </div>
      </div>
      <div class="relative flex justify-around text-xl font-medium text-blue-900">
        <p>Vim</p>
        <p>Emacs</p>
        <span class="absolute text-orange">VS</span>
      </div>
      <div class="relative flex items-center space-x-3 text-xl font-medium text-blue-900">
        <span class="leading-tight">88%</span>
        <div class="flex-auto h-4 overflow-hidden bg-blue-900 rounded-full">
          <div class="h-full bg-orange" style="width: 88%;" />
        </div>
        <span class="leading-tight">12%</span>
      </div>
      <div class="text-xl text-blue-900">
        <p>総投票数：2048件</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <button class="px-2 py-1 text-lg leading-tight border-2 rounded-lg border-orange text-orange focus:outline-none focus:ring-1">
          Vimに投票
        </button>
        <button class="px-2 py-1.5 text-lg leading-tight text-blue-900 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring-1">
          Emacsに投票
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
