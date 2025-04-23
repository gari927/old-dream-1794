'use client'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json() as Promise<User[]>)
      .then(setUsers)
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">ユーザー一覧</h1>
      <table className="table-auto border-collapse w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">名前</th>
            <th className="border p-2">メール</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}