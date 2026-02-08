import { Form, redirect, useNavigation, useLoaderData } from "react-router-dom";
import { GroupButton } from "../../components/buttons/GroupButton";
import { InputGroup } from "../../components/inputs/InputGroup";
import { AuthFormsWrap } from "../../components/wraps/AuthFormsWrap";
import { authService } from "../../services/auth-services";
import { Loader } from "../../components/loaders/loader";

export function loader({ request }) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token') || '';
    const email = url.searchParams.get('email') || '';
    return { token, email };
}

export async function action({ request }) {
    const formData = await request.formData();
    const token = formData.get('token');
    const email = formData.get('user-email');
    const password = formData.get('user-password');
    const password_confirmation = formData.get('user-password-confirm');
    const data = { token, email, password, password_confirmation };
    const res = await authService.resetPassword(data);
    // inspect res to show errors if needed
    return redirect('/login');
}

export function ResetPassword() {
    const navigation = useNavigation();
    const loaderData = useLoaderData();
    if (navigation.state === 'loading') return <Loader />;

    return (
        <AuthFormsWrap captionForm="Reset Password">
            <Form method="post">
                <input type="hidden" name="token" value={loaderData.token} />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Email'}
                    type={'email'}
                    placeholder={'example@mail.com'}
                    name={'user-email'}
                    defaultVal={loaderData.email}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'New Password'}
                    type={'password'}
                    placeholder={'Password'}
                    name={'user-password'}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Confirm Password'}
                    type={'password'}
                    placeholder={'Confirm Password'}
                    name={'user-password-confirm'}
                />
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}