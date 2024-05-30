import { Form, redirect } from "react-router-dom";
import { GroupButton } from "../../components/buttons/GroupButton";
import { InputGroup } from "../../components/inputs/InputGroup";
import { AuthFormsWrap } from "../../components/wraps/AuthFormsWrap";
import { authService } from "../../services/auth-services";
import localforage from "localforage";

export async function loader() {
    localforage.setItem('userAuth',
    {
        username: null,
        accessToken: null,
        message: 'user logout',
        success: false
    })
    return null
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('user-email')
    const password = formData.get('user-password')
    const data = { email, password }
    const userAuth = await authService.login(data)
    if (userAuth.success === false) {
        return redirect('/login')
    }

    return redirect('/admin')
}

export function Login() {
    return (
        <AuthFormsWrap captionForm="Login">
            <Form method="post">
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Email'}
                    type={'email'}
                    placeholder={'example@mail.com'}
                    name={'user-email'}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Password'}
                    type={'password'}
                    placeholder={'Password'}
                    name={'user-password'}
                />
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}