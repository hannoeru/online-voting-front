import { ref } from 'vue'

interface LoginForm {
  email: string
  password: string
}

interface RegisterForm extends LoginForm {
  username: string
  terms: boolean
}

export function useAuth() {
  const isLogin = ref(false)

  function login(data: LoginForm) {
    console.log(data)
  }

  function register(data: RegisterForm) {
    console.log(data)
  }

  return {
    login,
    register,
    isLogin,
  }
}
