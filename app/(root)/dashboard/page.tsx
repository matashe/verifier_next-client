import { getUsers } from '@/server_actions/api/user.actions'

const DashboardPage = async () => {
  const users = await getUsers()

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default DashboardPage
