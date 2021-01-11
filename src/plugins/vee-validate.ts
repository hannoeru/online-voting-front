import { configure, defineRule } from 'vee-validate'
import { required, email, min, is, alpha_dash } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'

defineRule('required', required)
defineRule('email', email)
defineRule('alpha_dash', alpha_dash)
defineRule('min', min)
defineRule('is', is)

configure({
  generateMessage: localize({
    ja,
  }),
})

setLocale('ja')
