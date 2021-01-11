<template>
  <div class="max-w-sm px-8 py-6 mx-auto bg-white rounded-xl">
    <div class="mb-5 text-2xl font-medium text-center text-blue-900">
      <h1>ログイン</h1>
    </div>
    <Form v-slot="{ meta }" :validation-schema="schema" class="grid w-full max-w-md grid-cols-1 gap-6" @submit="login">
      <TextInput name="email" type="email" label="E-mail" placeholder="me@example.com" autocomplete="email" />
      <TextInput name="password" type="password" label="パスワード" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" autocomplete="password" />
      <div class="mt-4 text-center">
        <button type="submit" class="w-full p-2 mb-1 text-white rounded-lg wpx-3 bg-orange focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50" :disabled="!meta.valid">
          ログイン
        </button>
        <span class="text-xs text-gray-400">
          パスワードを忘れた場合は
          <router-link to="/reset/password" class="text-orange">
            こちら
          </router-link>
        </span>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Form } from 'vee-validate'
import { useAuth } from '/~/logics/auth'

const schema = {
  email: 'required|email',
  password: 'required',
}

const { login } = useAuth()
</script>
