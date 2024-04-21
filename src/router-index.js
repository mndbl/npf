import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { LandingWrap } from "./components/wraps/LandingWrap";
import { Login, action as loginAction } from "./pages/auth/Login";
import { Register, action as registerAction, loader as registerLoader } from "./pages/auth/Register";
import { Logout, action as logoutAction } from "./pages/auth/Logout";
import { AdminPage, loader as adminLoader } from "./pages/AdminPage";
import { IndexCategoriesAccounts } from "./pages/data/categorie-accounts";
import { FormCategorieAccount } from "./pages/data/categorie-accounts/form";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingWrap />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: 'login',
                element: <Login />,
                action: loginAction
            },
            {
                path: 'register',
                element: <Register />,
                action: registerAction,
                loader: registerLoader
            },
            {
                path: '/logout',
                element: <Logout />,
                action: logoutAction
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminPage />,
        loader: adminLoader,
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: '/admin/categories-accounts',
                element: <IndexCategoriesAccounts />
            },
            {
                path: '/admin/categories-accounts/add',
                element: <FormCategorieAccount />
            },
            {
                path: '/admin/categories-accounts/:id/edit',
                element: <FormCategorieAccount />
            },
        ]
    },
])