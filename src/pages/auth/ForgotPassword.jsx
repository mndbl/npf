import { Form, redirect, useNavigation } from "react-router-dom";
import { GroupButton } from "../../components/buttons/GroupButton";
import { InputGroup } from "../../components/inputs/InputGroup";
import { AuthFormsWrap } from "../../components/wraps/AuthFormsWrap";
import { authService } from "../../services/auth-services";
import { Loader } from "../../components/loaders/loader";

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('user-email');
    const data = { email };
    const res = await authService.sendPasswordResetLink(data);
    // if you want, inspect res and handle errors; for now redirect to login
    return redirect('/login');
}

export function ForgotPassword() {
    const navigation = useNavigation();
    if (navigation.state === 'loading') return <Loader />;

    return (
        <AuthFormsWrap captionForm="Forgot Password">
            <Form method="post">
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Email'}
                    type={'email'}
                    placeholder={'example@mail.com'}
                    name={'user-email'}
                />
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}