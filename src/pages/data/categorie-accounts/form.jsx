import localforage from "localforage";
import { Select } from "../../../components/inputs/Select";
import { AuthFormsWrap } from "../../../components/wraps/AuthFormsWrap";
import { InputGroup } from "../../../components/inputs/InputGroup";
import { GroupButton } from "../../../components/buttons/GroupButton";
import { Form } from "react-router-dom";

export function FormCategorieAccount() {
    const typeOfAccounts = [
        'balance sheets', 'incomes and expenses'
    ]
    return (
        <AuthFormsWrap captionForm="Categorie Account">
            <Form method="post" className="space-y-2">
                <Select name='type-of-account' labelName={'type of account'} options={typeOfAccounts} />
                <InputGroup
                    name='categorie-account-name'
                    type={'text'}
                    labelName={"Category Name"}
                    placeholder={'Enter category name'}
                />
                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}