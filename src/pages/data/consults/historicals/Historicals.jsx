import { useEffect, useMemo, useState } from "react"
import { Table } from "../../../../components/tables/Table"
import { dataService } from "../../../../services/data-services"
import { admin_URL, consults_URL, nf } from "../../../../config/main.config"
import { Form, redirect, useLoaderData, useSearchParams, } from "react-router-dom"
import { InputLabel } from "../../../../components/inputs/InputLabel"
import { Button } from "../../../../components/buttons/Button"
import localforage from "localforage"
import { AccountsByCategories } from "../../../../components/sections/AccountsByCategories"
import { TableWrap } from "../../../../components/wraps/TableWrap"
import { SectionShowDetailsWrap } from "../../../../components/wraps/SectionShowDetailsWrap"
import TBodyAccountsHistoricalsShow from "../../../../components/tables/TBodyAccountsHistoricalsShow"

export async function action() {
    const userAuth = await localforage.getItem('userAuth')
    const { accessToken } = userAuth.data
    if (!accessToken) return redirect('/login')
    const today = new Date();
    const prevYear = today.getFullYear()
    const yearToHistoricals = Number(prevYear) - 1
    const response = await dataService.historicalsGenerate(`${admin_URL}/transf-to-historicals/${yearToHistoricals}`, accessToken)
    return redirect('/admin/consults/historicals')
}

const tableHeads = [
    {
        header: 'date',
        accessor: 'date',
    },
    {
        header: 'description',
        accessor: 'description',
    },

    {
        header: 'amount',
        accessor: 'amount',
        type: 'amount'
    },
]

export function Historicals() {
    const { userAuth } = useLoaderData()
    const [year, SetYear] = useState('')
    const [years, setYears] = useState([])
    const [historicals, setHistoricals] = useState([])
    const [historicalsCategories, setHistoricalsCategories] = useState([])
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q') || '';
    const [showAccountDetails, setShowAccountDetails] = useState([])
    const [totalBalance, setTotalBalance] = useState(0)
    
    useEffect(() => {
        // Calculate balance when showAccountDetails changes
        if (showAccountDetails.length !== 0) {
            const filteredData = historicals.filter(register =>
                register.register_details.some(det => det.account_id === showAccountDetails.id)
            )
            
            let balance = 0
            filteredData.forEach((register, index) => {
                const registerData = register.register_details.find(
                    det => det.account_id === showAccountDetails.id
                );
                
                if (index === 0) {
                    balance = parseFloat(showAccountDetails.init_deb_balance) - parseFloat(showAccountDetails.init_cre_balance) + parseFloat(registerData.amount_deb) - parseFloat(registerData.amount_cre)
                } else {
                    balance += registerData.amount_deb - registerData.amount_cre
                }
            })
            
            setTotalBalance(balance)
        }
    }, [showAccountDetails, historicals])
    // Add loading and error states
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const yearsHistoricals = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const yearsData = await dataService.getData(`${admin_URL}/years-historicals`, '', {}, userAuth.data.accessToken)
                setYears(() => yearsData)
            } catch (err) {
                setError('Failed to load years data. Please try again later.')
                console.error('Error loading years:', err)
            } finally {
                setIsLoading(false)
            }
        }
        yearsHistoricals();
    }, [userAuth])

    useEffect(() => {
        const historicalsData = async () => {
            if (!year) return
            setIsLoading(true)
            setError(null)
            try {
                const historicalsData = await dataService.getData(`${consults_URL}/historicals/${year}`, q, { keys: ['description'] }, userAuth.data.accessToken)
                setHistoricals(() => historicalsData[0])
                setHistoricalsCategories(() => historicalsData[1])
            } catch (err) {
                setError('Failed to load historical data. Please try again later.')
                console.error('Error loading historicals:', err)
            } finally {
                setIsLoading(false)
            }
        }
        year && historicalsData();
    }, [year, q, userAuth])

    useEffect(() => {
        const searchInput = document.getElementsByName('q')[0]
        if (searchInput) {
            searchInput.value = q
        }
    }, [q])

    const data = useMemo(() => historicals, [historicals])
    return (
        <div className="border-2 border-gray-50 border-opacity-20 m-2 rounded-lg p-6" role="main">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-gray-700 dark:text-white text-center font-bold text-4xl shadow-md p-2">
                    Historicals {year} {q}
                </h1>
                <Form
                    method="post"
                    action={`/admin/historicals/generate`}
                    onSubmit={(event) => {
                        if (!window.confirm("Please confirm you want to generate the historicals.")) {
                            event.preventDefault();
                        }
                    }}
                    aria-label="Generate historicals form"
                >
                    <Button
                        text="Generate"
                        disabled={isLoading}
                        aria-busy={isLoading}
                    />
                </Form>
            </div>

            {error && (
                <div role="alert" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                    {error}
                </div>
            )}

            <div className="m-2 w-1/5">
                <div className='mb-3 space-y-2 w-full text-xs'>
                    <InputLabel labelName='Years' htmlFor="select-years-historicals" />
                    <select
                        onChange={(e) => SetYear(() => e.target.value)}
                        className="text-gray-100 dark:text-gray-700 capitalize block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full"
                        required="required"
                        name="select-years-historicals"
                        id="select-years-historicals"
                        defaultValue={year ? year : ''}
                        disabled={isLoading}
                        aria-label="Select year"
                        aria-invalid={error ? "true" : "false"}
                    >
                        <option value="">Select a year</option>
                        {years.map((opt) => (
                            <option
                                key={`select-option-${opt.year}`}
                                className='text-gray-100 dark:text-gray-800'
                                value={opt.year}
                            >
                                {opt.year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {isLoading ? (
                <div role="status" className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <>
                    {year !== '' && (
                        <>
                            <Table
                                captionTable="Register index"
                                tableHeads={tableHeads}
                                data={data}
                                aria-label="Historical records table"
                            />
                            <div className="mt-4 py-2">
                                <TableWrap>
                                    <AccountsByCategories
                                        categories={historicalsCategories}
                                        setShowAccountDetails={setShowAccountDetails}
                                        showAccountDetails={showAccountDetails}
                                        aria-label="Categories breakdown"
                                    />
                                </TableWrap>
                            </div>
                            {
                                showAccountDetails.length !== 0 &&
                                <div className="mt-4 py-2">
                                    <TableWrap>
                                        <SectionShowDetailsWrap
                                            description={'Account Name: '}
                                            label={`${showAccountDetails.name} (${nf.format(parseFloat(totalBalance))})`}
                                            textButton={'see details'}
                                        >
                                            <table className="items-center w-full bg-transparent border-collapse overflow-y-auto">
                                                <thead className="">
                                                    <tr className="">
                                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">date</th>
                                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">description</th>
                                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Debits</th>
                                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Credits</th>
                                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                    <TBodyAccountsHistoricalsShow
                                                        data={data}
                                                        showAccountDetails={showAccountDetails}
                                                    />
                                                </tbody>
                                            </table>
                                        </SectionShowDetailsWrap>
                                    </TableWrap>
                                </div>
                            }
                        </>
                    )}
                </>
            )}
        </div>
    )
}