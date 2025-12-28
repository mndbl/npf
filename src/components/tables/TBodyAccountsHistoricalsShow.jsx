import { useEffect, useState } from "react";
import { nf } from "../../config/main.config";

export default function TBodyAccountsHistoricalsShow({ data, showAccountDetails }) {
    const filteredData = data
        .filter(register =>
            register.register_details.some(det => det.account_id === showAccountDetails.id)
        )
    const [totalBalance, setTotalBalance] = useState(0)
    let balance = 0
    useEffect(() => {
        setTotalBalance(balance)
    }, [balance])
    return (
        <tbody>
            {
                filteredData.map((register, index) => {
                    const registerData = register.register_details.find(
                        det => det.account_id === showAccountDetails.id
                    );
                    console.log(registerData);
                    return (
                        <tr key={`account-regiter-detail-${register.id}`}
                            className="text-gray-700 dark:text-gray-100 hover:bg-gray-600">
                            <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{register.date}</th>
                            <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs p-4 text-left truncate-elipsis w-1/3">{register.description}</th>
                            <th className=" capitalize border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{registerData.amount_deb}</th>
                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{registerData.amount_cre}</td>
                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {index === 0 ?

                                    nf.format(balance = parseFloat(showAccountDetails.init_deb_balance) - parseFloat(showAccountDetails.init_cre_balance) + parseFloat(registerData.amount_deb) - parseFloat(registerData.amount_cre))
                                    :
                                    nf.format(balance += registerData.amount_deb - registerData.amount_cre)}
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}