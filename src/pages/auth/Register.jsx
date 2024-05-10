import { Form, redirect, useLoaderData } from "react-router-dom";
import { GroupButton } from "../../components/buttons/GroupButton";
import { InputGroup } from "../../components/inputs/InputGroup";
import { AuthFormsWrap } from "../../components/wraps/AuthFormsWrap";
import { authService } from "../../services/auth-services";
import localforage from "localforage";

export async function loader() {
    localforage.removeItem('userAuth')
    return null
}

export async function action({ request }) {
    const formData = await request.formData()
    const name = formData.get('user-full-name')
    const email = formData.get("user-email")
    const password = formData.get('user-password')
    const password_confirmation = formData.get('user-password-confirm')
    const data = { name, email, password, password_confirmation }
    const newUser = await authService.register(data)
    console.log(data);
    if (newUser.success === false) {
        localforage.setItem('errorMessage', newUser.message)
        return redirect('/register')
    }
    return redirect('/admin/dashboard')
}


export function Register(params) {
    return (
        <AuthFormsWrap captionForm="Register">
            <Form method="post">
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Full Name'}
                    type={'text'}
                    placeholder={'Your Full Name'}
                    name={'user-full-name'}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Email'}
                    type={'email'}
                    placeholder={'Your Email'}
                    name={'user-email'}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Password'}
                    type={'password'}
                    placeholder={'Your Password'}
                    name={'user-password'}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Confirm Password'}
                    type={'password'}
                    placeholder={'Your Password Confirm'}
                    name={'user-password-confirm'}
                />
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}