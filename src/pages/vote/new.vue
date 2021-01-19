<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="mb-2 text-2xl text-blue-900">新しい投票を作成しましょう！</h1>
    <div class="px-10 py-8 space-y-2 bg-white rounded-xl">
      <Form v-slot="{ meta }" :validation-schema="schema" class="grid w-full grid-cols-1 gap-6" @submit="login">
        <TextInput name="title" type="text" label="タイトル" placeholder="" />
        <div class="flex space-x-6">
          <TextInput class="flex-1" name="leftTitle" type="text" label="左の画像のタイトル" placeholder="" />
          <TextInput class="flex-1" name="rightTitle" type="text" label="右の画像のタイトル" placeholder="" />
        </div>
        <div class="flex space-x-6">
          <TextInput class="flex-1" name="year" type="text" label="年" placeholder="" />
          <TextInput class="flex-1" name="month" type="text" label="月" placeholder="" />
          <TextInput class="flex-1" name="date" type="text" label="日" placeholder="" />
          <TextInput class="flex-1" name="hour" type="text" label="時" placeholder="" />
          <TextInput class="flex-1" name="minu" type="text" label="分" placeholder="" />
        </div>
        <div class="mt-4 text-center">
          <button type="submit" class="w-full p-2 mb-1 text-white rounded-lg wpx-3 bg-orange focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50" :disabled="!meta.valid">
            ログイン
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Form } from 'vee-validate'
import { useAuth } from '/~/logics/auth'

const schema = {
  title: 'required',
  leftTitle: 'required',
  rightTitle: 'required',
  year: 'required',
  month: 'required',
  date: 'required',
  hour: 'required',
  minu: 'required',
}

const { login } = useAuth()
</script>
