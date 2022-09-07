import TwoFa from "./pages/TwoFa/TwoFa"
import Password from "./pages/Password/Password"
import Data from "./pages/Data/Data"

export const routes= [
  {
    path: '/',
    element: <TwoFa/>
  },{
    path: '/password',
    element: <Password/>
  },{
    path: '/data',
    element: <Data/>
  },
]