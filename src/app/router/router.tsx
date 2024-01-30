import { createBrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { SignInPage } from "@/page/auth/ui/sign-in";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App/>
   },
   {
      path: '/sign-in',
      element: <SignInPage/>
   }
])