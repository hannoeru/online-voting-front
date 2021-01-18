import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'
import axios from '../axios'

interface LoginForm {
  email: string
  password: string
}

interface RegisterForm extends LoginForm {
  username: string
  terms: boolean
}

interface UserStorage {
  token: string
}

const userStorage = useStorage<UserStorage>('user', { token: '' })

export function useAuth() {
  const isLogin = computed(() => {
    return !!userStorage.value.token
  })
  const router = useRouter()

  async function login(data: LoginForm) {
    const result = await axios.post('auth/login', data)
    console.log(result)
    if (result.data.success) {
      userStorage.value.token = result.data.token
      router.push('/')
    }
    else {
      userStorage.value.token = ''
    }
  }

  async function register(data: RegisterForm) {
    const result = await axios.post('auth/signup', {
      email: data.email,
      name: data.username,
      password: data.password,
    })
    console.log(result)
    if (result.data.success) {
      userStorage.value.token = result.data.token
      router.push('/')
    }
    else {
      userStorage.value.token = ''
    }
  }

  return {
    login,
    register,
    isLogin,
  }
}
