import { AuthenticationLayout } from '@/Layout/AuthenticationLayout'
import { SignIn } from '@/features/auth/components'

export const AuthRoutes = [
  {
    path: '/',
    element: <AuthenticationLayout/>,
    children: [
      {
        path: '',
        element: <SignIn/>
      }
    ]
  }
]
