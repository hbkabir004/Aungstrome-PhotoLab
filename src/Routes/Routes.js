import { createBrowserRouter } from 'react-router-dom';
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import AddService from '../components/Pages/AddService';
import Blog from '../components/Pages/Blog';
import Home from '../components/Pages/Home';
import MyReviews from '../components/Pages/MyReviews';
import Services from '../components/Pages/Services';
import ErrorPage from '../components/Shared/ErrorPage';
import Main from '../layout/Main.jsx';
import PrivateRoute from './PrivateRoute';

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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <Services></Services>,
                loader: ({ params }) => fetch(`https://photolab.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
])

