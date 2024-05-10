import localforage from "localforage";
import { redirect, useLoaderData } from "react-router-dom";
import { dataService } from "../../../services/data-services";
import { accounts_URL } from "../../../config/main.config";
import { SectionShowDetailsWrap } from "../../../components/wraps/SectionShowDetailsWrap";

export async function loader({ params }) {
    const userAuth = await localforage.getItem('userAuth')
    if (!userAuth) return redirect('/login')
    const { accessToken } = userAuth.data
    const id = params.id
    const account = await dataService.getDataId(`${accounts_URL}/show/${id}`, accessToken)
    console.log(accessToken);
    return { account }
}

export function Account() {
    const { account } = useLoaderData()
    return (
        <SectionShowDetailsWrap
            description={'Account Name'}
            label={account.name}
            textButton={'see details'}
        >

        </SectionShowDetailsWrap>
    )
}