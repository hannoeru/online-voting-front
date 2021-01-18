import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../axios'

export function useVote() {
  const data = ref()
  const error = ref()

  async function getVotes() {
    const result = await axios.get('vote', data)
    console.log(result)
    if (result.data)
      data.value = result.data
    else
      error.value = 'error'
  }

  return {
    getVotes,
    data,
    error,
  }
}
