export type User = {
  id: string
  name: string | null
  surname: string | null
  email: string
  createdAt: string
  updatedAt: string
}

export type Users = {
  data: {
    data: User[]
  }
}
