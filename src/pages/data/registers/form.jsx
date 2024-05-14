import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { AuthFormsWrap } from "../../../components/wraps/AuthFormsWrap";
import { useEffect, useState } from "react";
import { InputGroup } from "../../../components/inputs/InputGroup";
import { SelectOptions } from "../../../components/inputs/SelectOptions";
import localforage from "localforage";
import { dataService } from "../../../services/data-services";
import { registers_URL } from "../../../config/main.config";

export async function action({ params, request }) {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.useLoaderData
    if (!accessToken) return redirect('/login')
    const id = params.id
    const formData = request.formData()
    const date = formData.get('date-of-register')
    const description = formData.get('description-of-register')
    const amount = formData.get('amount-of-register')

    return redirect('/admin/registers');
}

export function RegisterForm() {
    const [method, setMethod] = useState('post');
    const { register, accounts, accessToken } = useLoaderData();
    const [entries, setEntries] = useState(() => {
        if (register.register_details) {
            const debits = register.register_details
                .filter(reg => reg.amount_deb > 0)
                .map(reg => ({ id: reg.id, account_id: reg.account_id, amount: reg.amount_deb }));

            const credits = register.register_details
                .filter(reg => reg.amount_cre > 0)
                .map(reg => ({ id: reg.id, account_id: reg.account_id, amount: reg.amount_cre }));

            return { debits, credits };
        } else {
            return { debits: [{ id: 0, account_id: 0, amount: '' }], credits: [{ id: 0, account_id: 0, amount: '' }] };
        }
    });
    const [errorMessage, setErrorMessage] = useState('')
    const [showBanner, setShowBanner] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        if (register?.id) {
            setMethod('put');
        }
    }, []);

    useEffect(() => {
        const showBanner = errorMessage != '' && setTimeout(() => {
            setShowBanner(false)
            setErrorMessage(prevError => prevError = '')
        }, 5000);

        return () => clearTimeout(showBanner)
    }, [errorMessage])

    const handleEntryChange = (index, type, field, value) => {
        const newEntries = { ...entries };
        newEntries[type][index][field] = value;
        setEntries(newEntries);
    };

    const addEntry = (type) => {
        const newEntries = { ...entries };
        newEntries[type].push({ account_id: 0, amount: '' });
        setEntries(newEntries);
    };

    const removeEntry = (index, type) => {
        const newEntries = { ...entries };
        newEntries[type].splice(index, 1);
        setEntries(newEntries);
    };

    const errorDetected = (error) => {
        setErrorMessage(prevError => prevError = error)
        setShowBanner(true)
    }

    const handleSubmit = async (event, accessToken) => {
        event.preventDefault();
        const sumDebits = parseFloat(entries['debits'].reduce((prev, curr) => parseFloat(prev) + parseFloat(curr.amount), 0)).toFixed(2)
        const sumCredits = parseFloat(entries['credits'].reduce((prev, curr) => parseFloat(prev) + parseFloat(curr.amount), 0)).toFixed(2)
        const date = document.getElementsByName('date-of-register')[0].value
        const description = document.getElementsByName('description-of-register')[0].value
        const amount = parseFloat(document.getElementsByName('amount-of-register')[0].value).toFixed(2)
        let newOrUpdateData = {}
        if (sumDebits != sumCredits) return errorDetected('the amount of debits and credits must be equal')
        if (sumDebits != amount) return errorDetected('the amounts of debits must be equal to the register amount')
        if (sumCredits != amount) return errorDetected('the amounts of credits must be equal to the register amount')
        const data = {
            date, amount, description,
            'debits': { ...entries['debits'] },
            'credits': { ...entries['credits'] }
        }
        if (register?.id) {
            newOrUpdateData = await dataService.updateData(`${registers_URL}/update/${register.id}`, data, accessToken)
        } else {
            newOrUpdateData = await dataService.addData(`${registers_URL}/create`, data, accessToken)
        }

        setEntries({ debits: [{ id: 0, account_id: 0, amount: '' }], credits: [{ id: 0, account_id: 0, amount: '' }] })
        return navigate('/admin/registers')
    };

    return (
        <AuthFormsWrap captionForm="Registers">

            <div role="alert" className={`${!showBanner && 'hidden'} rounded border-s-4 border-red-500 bg-red-50 p-4`}>
                <div className="flex items-center gap-2 text-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <strong className="block font-medium text-xs"> Something went wrong </strong>
                </div>

                <p className="mt-2 text-red-700 text-xs">
                    {errorMessage}
                </p>
            </div>
            <Form method={method} onSubmit={(e) => {
                handleSubmit(e, accessToken)
            }}>
                <div className="grid grid-cols-2 gap-2">
                    <InputGroup
                        labelName={'date'}
                        type={'date'}
                        placeholder={'date of register'}
                        name={'date-of-register'}
                        defaultVal={register?.date}
                    />
                    <InputGroup
                        labelName={'amount-register'}
                        type={'number'}
                        placeholder={'amount of register'}
                        name={'amount-of-register'}
                        defaultVal={register?.amount}
                    />
                </div>
                <InputGroup
                    labelName={'description-register'}
                    type={'text'}
                    placeholder={'description'}
                    name={'description-of-register'}
                    defaultVal={register?.description}
                />
                <hr />
                <div className="text-black text-xs">
                    <div className="">
                        <button className="mb-2 md:mb-0 bg-white px-5 py-2 mt-2 text-sm shadow-sm font-medium tracking-wider border text-blue-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                            type="button" onClick={() => addEntry('debits')}>Add Debit</button>

                        {entries.debits.map((debit, index) => (
                            <div key={`debit-${index}`} className="flex text-black gap-2 my-2">
                                <select
                                    className="text-gray-100 dark:text-gray-800 capitalize block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                                    required="required"
                                    name={`select-account-debits-${index}`}
                                    id={`select-account-debits-${index}`}
                                    defaultValue={debit.account_id}
                                    onChange={(e) => handleEntryChange(index, 'debits', 'account_id', e.target.value)}
                                >
                                    <option value="">Select an option</option>
                                    <SelectOptions options={accounts} />
                                </select>

                                <input className="text-gray-100 dark:text-gray-800 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                    type="number"
                                    value={debit.amount}
                                    defaultValue={debit.debits}
                                    onChange={(e) => handleEntryChange(index, 'debits', 'amount', e.target.value)}
                                    placeholder="debit amount"
                                    step={0.01}
                                />
                                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-blue-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                                    type="button"
                                    onClick={() => removeEntry(index, 'debits')}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-blue-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                        type="button" onClick={() => addEntry('credits')}>Add Credit</button>

                    {entries.credits.map((credit, index) => (
                        <div key={`credit-${index}`} className="flex text-black gap-2 my-2">
                            <select
                                className="text-gray-100 dark:text-gray-800 capitalize block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                                required="required"
                                name={`select-account-debits-${index}`}
                                id={`select-account-debits-${index}`}
                                defaultValue={credit.account_id}
                                onChange={(e) => handleEntryChange(index, 'credits', 'account_id', e.target.value)}
                            >
                                <option value="">Select an option</option>
                                <SelectOptions options={accounts} />
                            </select>

                            <input className="text-gray-100 dark:text-gray-800 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                type="number"
                                value={credit.amount}
                                onChange={(e) => handleEntryChange(index, 'credits', 'amount', e.target.value)}
                                placeholder="credit amount"
                                step={0.01}
                            />
                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-blue-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                                type="button"
                                onClick={() => removeEntry(index, 'credits')}>Delete</button>
                        </div>
                    ))}

                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-blue-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                        type="submit"
                    >Guardar Registro</button>
                </div>
            </Form>
        </AuthFormsWrap>
    );
}

