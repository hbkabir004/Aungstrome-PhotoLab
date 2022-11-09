import { createBrowserRouter } from 'react-router-dom';
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import Main from '../layout/Main.jsx';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
])

