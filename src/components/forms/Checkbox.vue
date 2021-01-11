<template>
  <div class="block">
    <Field v-slot="{ field, errorMessage, meta }" :label="label" :name="name" type="checkbox" :value="true">
      <div class="relative mt-2">
        <label class="inline-flex items-start">
          <input
            :value="true"
            type="checkbox"
            class="mt-1 text-gray-700 bg-gray-200 border-transparent rounded focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
            v-bind="field"
          >
          <span class="inline-flex ml-2" :class="$attrs.class"><router-link v-if="link && linkText" :to="link" class="mr-0.5 text-blue-500">{{ linkText }}</router-link>{{ text }}</span>
        </label>
        <p v-show="errorMessage || meta.valid" class="absolute bottom-0 left-0 p-1 text-sm text-red-500 transform translate-y-full">
          {{ errorMessage }}
        </p>
      </div>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmit } from 'vue'
import { Field } from 'vee-validate'

const props = defineProps({
  label: String,
  text: String,
  name: String,
  modelValue: Boolean,
  link: String,
  linkText: String,
  value: String,
})
const emit = defineEmit(['update:modelValue'])
</script>
