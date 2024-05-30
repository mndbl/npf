import { useEffect, useRef } from "react"
import { useFetcher, useLoaderData, useSubmit } from "react-router-dom"

export function SearchBar() {
    const fetcher = useFetcher()
    const { q } = useLoaderData()
    const submit = useSubmit()
    const searchRef = useRef(null)
    useEffect(() => {
        document.getElementsByName('q').value = q
        searchRef.current.focus()
    }, [q])
   
    return (
        <div className="bg-white float-left rounded flex items-center w-1/3 max-w-md mr-4 p-2 shadow-sm border border-gray-200">
            <fetcher.Form id='search-form' role='search' className="flex">
                <button type='submit' className="outline-none focus:outline-none">
                    <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                <input
                    ref={searchRef}
                    onChange={(e) => {
                        const isFirstSearch = q == null
                        submit(e.currentTarget.form, {
                            replace: !isFirstSearch,
                        })
                    }}
                    defaultValue={q}
                    aria-label="search data"
                    type="search"
                    name="q" id="search-data"
                    placeholder="Search"
                    className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
            </fetcher.Form>
        </div>
    )
}