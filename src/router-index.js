import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { LandingWrap } from "./components/wraps/LandingWrap";
import { Login, action as loginAction, loader as loginLoader } from "./pages/auth/Login";
import { Register, action as registerAction, loader as registerLoader } from "./pages/auth/Register";
import { Logout, action as logoutAction } from "./pages/auth/Logout";
import { AdminPage, loader as adminLoader } from "./pages/AdminPage";
import { CategoriesAccountsIndex, loader as loaderCategories } from "./pages/data/categorie-accounts";
import { FormCategorieAccount, action as formCategoriesAction } from "./pages/data/categorie-accounts/form";
import { AccountsIndex, loader as accountsLoader } from "./pages/data/accounts";
import { RegistersIndex, loader as registersLoader } from "./pages/data/registers";
import { CategoryAccount, loader as loaderCategorieId } from "./pages/data/categorie-accounts/show";
import { action as destroyCategoryAction } from "./pages/data/categorie-accounts/destroy";
import { FormAccount, action as formAccountAction } from "./pages/data/accounts/form";
import { Account, loader as loaderAccountId } from "./pages/data/accounts/show";


const pathCategories = '/admin/categories-accounts'
const pathAccounts = '/admin/accounts'
const pathRegisters = '/admin/registers'

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
                action: loginAction,
                loader: loginLoader
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
                path: pathCategories,
                element: <CategoriesAccountsIndex />,
                loader: loaderCategories
            },
            {
                path: `${pathCategories}/add`,
                element: <FormCategorieAccount />,
                loader: loaderCategorieId,
                action: formCategoriesAction
            },
            {
                path: `${pathCategories}/:id`,
                element: <CategoryAccount />,
                loader: loaderCategorieId
            },
            {
                path: `${pathCategories}/:id/edit`,
                element: <FormCategorieAccount />,
                loader: loaderCategorieId,
                action: formCategoriesAction
            },
            {
                path: `${pathCategories}/:id/destroy`,
                action: destroyCategoryAction
            },
            {
                path: pathAccounts,
                element: <AccountsIndex />,
                loader: accountsLoader
            },
            {
                path: `${pathAccounts}/:id`,
                element: <Account />,
                loader: loaderAccountId
            },
            {
                path: `${pathAccounts}/add`,
                element: <FormAccount />,
                action: formAccountAction
            },
            {
                path: '/admin/registers',
                element: <RegistersIndex />,
                loader: registersLoader
            },
        ]
    },
])

