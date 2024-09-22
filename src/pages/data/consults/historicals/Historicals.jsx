import { useEffect, useMemo, useState } from "react"
import { Table } from "../../../../components/tables/Table"
import { dataService } from "../../../../services/data-services"
import { admin_URL, consults_URL } from "../../../../config/main.config"
import { useLoaderData, useSearchParams, } from "react-router-dom"
import { InputLabel } from "../../../../components/inputs/InputLabel"

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
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q') || '';


    useEffect(() => {
        const yearsHistoricals = async () => {
            const yearsData = await dataService.getData(`${admin_URL}/years-historicals`, '', {}, userAuth.data.accessToken)
            setYears(() => yearsData)
        }
        yearsHistoricals();
    }, [userAuth])

    useEffect(() => {
        const historicalsData = async () => {
            const historicalsData = await dataService.getData(`${consults_URL}/historicals/${year}`, q, { keys: ['description'] }, userAuth.data.accessToken)
            setHistoricals(() => historicalsData)
        }
        year && historicalsData();
    }, [year, q, userAuth])

    useEffect(() => {
        document.getElementsByName('q').value = q
    }, [q])

    const data = useMemo(() => historicals, [historicals])
    return (
        <div className="border-2 border-gray-50 border-opacity-20 m-2 rounded-lg p-6">
            <h1 className="text-gray-700 dark:text-white text-center font-bold text-4xl shadow-md p-2">
                Historicals {year} {q}</h1>
            <div className="m-2 w-1/5">

                <div className='mb-3 space-y-2 w-full text-xs'>
                    <InputLabel labelName='Years' />
                    <select
                        onChange={(e) => SetYear(() => e.target.value)}
                        className="text-gray-100 dark:text-gray-700 capitalize block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required="required"
                        name={`select-years-historicals`}
                        id={`select-years-historicals`}
                        defaultValue={year ? year : ''}
                    >
                        <option value="">Select a year</option>
                        {
                            years.map((opt) => <option key={`select-option-${opt.year}`}
                                className='text-gray-100 dark:text-gray-800' value={opt.year}>
                                {opt.year}
                            </option>)
                        }
                    </select>
                </div>
            </div>
            {
                year !== '' && <Table
                    captionTable="Register index"
                    tableHeads={tableHeads}
                    data={data}
                />
            }
        </div>
    )
}