import { createBrowserRouter } from 'react-router-dom';
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Main from '../layout/Main.jsx';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            }
        ]
    },
])

