import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard, loader as dashboardLoader } from "./pages/Dashboard";
import { LandingWrap, loader as landingLoader } from "./components/wraps/LandingWrap";
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
import { action as destroyAccountAction } from './pages/data/accounts/destroy'
import { RegisterShow, loader as registerDataLoader } from "./pages/data/registers/show";
import { RegisterForm, action as registerDataAction } from "./pages/data/registers/form";
import { action as destroyRegisterAction } from './pages/data/registers/destroy'
import { ByPeriodsConsults } from "./pages/data/consults/ByPeriodsConsults";
import { UserProfile } from "./pages/auth/Profile";
import { ProfileForm } from "./pages/auth/ProfileForm";

const pathCategories = '/admin/categories-accounts'
const pathAccounts = '/admin/accounts'
const pathRegisters = '/admin/registers'
const pathConsults = '/admin/consults'
const pathProfile = '/admin/user-profile'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingWrap />,
        loader: landingLoader,
        children: [
            {
                index: true,
                element: <LandingPage />,
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
            {
                index: true,
                element: <Dashboard />,
                loader: dashboardLoader
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
                path: `${pathAccounts}/:id/edit`,
                element: <FormAccount />,
                loader: loaderAccountId,
                action: formAccountAction
            },
            {
                path: `${pathAccounts}/add`,
                element: <FormAccount />,
                loader: loaderAccountId,
                action: formAccountAction
            },
            {
                path: `${pathAccounts}/:id/destroy`,
                action: destroyAccountAction
            },
            {
                path: `${pathRegisters}`,
                element: <RegistersIndex />,
                loader: registersLoader
            },
            {
                path: `${pathRegisters}/:id`,
                element: <RegisterShow />,
                loader: registerDataLoader
            },
            {
                path: `${pathRegisters}/:id/edit`,
                element: <RegisterForm />,
                loader: registerDataLoader,
                action: registerDataAction
            },
            {
                path: `${pathRegisters}/add`,
                element: <RegisterForm />,
                loader: registerDataLoader,
                action: registerDataAction
            },
            {
                path: `${pathRegisters}/:id/destroy`,
                action: destroyRegisterAction
            },
            {
                path: `${pathConsults}/by-periods`,
                element: <ByPeriodsConsults />
            },
            {
                path: pathProfile,
                element: <UserProfile />,
                loader: adminLoader
            },
            {
                path: `${pathProfile}/add`,
                element: <ProfileForm />,
                loader: adminLoader
            }
        ]
    },
])

