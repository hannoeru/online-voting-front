<template>
  <div>
    <div class="mb-2 text-xl text-left text-blue-900">
      <h2>史上最強のエディター</h2>
    </div>
    <div class="p-2 space-y-2 bg-white rounded-xl">
      <div class="relative rounded-md h-36 bg-gradient-to-r from-green-400 to-purple-500">
        <div class="absolute flex w-full h-full">
          <div class="flex items-center justify-center flex-1 h-full p-2">
            <img src="/~/assets/vim.svg" alt="" class="w-2/3 h-2/3">
          </div>
          <div class="flex items-center justify-center flex-1 h-full p-2">
            <img src="/~/assets/emacs.svg" alt="" class="w-2/3 h-2/3">
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 text-xl font-medium text-blue-900">
        <p>Vim</p>
        <span class="text-orange">VS</span>
        <p>Emacs</p>
      </div>
      <div class="relative flex items-center space-x-3 font-medium text-blue-900 text-md">
        <span class="leading-tight">88%</span>
        <div class="flex-auto h-4 overflow-hidden bg-blue-900 rounded-full">
          <div class="h-full bg-orange" style="width: 88%;" />
        </div>
        <span class="leading-tight">12%</span>
      </div>
      <div class="text-blue-900 text-md">
        <p>総投票数：2048件</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <button class="px-2 py-1 leading-tight border-2 rounded-lg text-md border-orange text-orange focus:outline-none focus:ring-1">
          Vimに投票
        </button>
        <button class="px-2 py-1.5 text-md leading-tight text-blue-900 border-2 border-blue-900 rounded-lg focus:outline-none focus:ring-1">
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
