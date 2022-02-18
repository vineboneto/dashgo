import { api } from '@/services/api'
import { useQuery, UseQueryOptions } from 'react-query'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = {
  users: User[]
  totalCount: number
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }),
  }))

  return {
    users,
    totalCount,
  }
}

export function useUsers(page: number, options?: UseQueryOptions<GetUsersResponse>) {
  return useQuery<GetUsersResponse>(
    ['users', page],
    async () => {
      const data = await getUsers(page)
      return data
    },
    {
      staleTime: 1000 * 5,
      ...options,
    }
  )
}
