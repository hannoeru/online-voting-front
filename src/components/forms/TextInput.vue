<template>
  <label class="relative block">
    <span class="text-sm font-medium text-blue-900">
      {{ label }}
      <span v-if="require" class="ml-2 text-sm text-red-500">＊必須</span>
    </span>
    <input
      :id="name"
      :type="type || 'text'"
      :class="errorMessage ? 'bg-red-400 border-red-500' : 'bg-indigo-50 border-indigo-200'"
      class="block w-full mt-1 bg-opacity-25 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
      @focusout="validate()"
    >
    <p v-show="errorMessage || meta.valid" class="absolute bottom-0 left-0 p-1 text-sm text-red-500 transform translate-y-full">
      {{ errorMessage }}
    </p>
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  placeholder: String,
  label: String,
  name: String,
  modelValue: String,
  type: String,
  require: Boolean,
  autocomplete: String,
})
const emit = defineEmit(['update:modelValue'])
const {
  value: inputValue,
  errors,
  errorMessage,
  validate,
  handleBlur,
  handleChange,
  meta,
} = useField(props.name as string, undefined, {
  initialValue: props.modelValue,
  label: props.label,
})
</script>
