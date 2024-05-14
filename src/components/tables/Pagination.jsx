import { DOTS, usePagination } from "../../custom-hooks/usePagination";
import { InputLabel } from "../inputs/InputLabel";
import { PaginationWrap } from "../wraps/PaginationWrap";

const pageSizeOptions = [
    10, 20, 50, 100
]

export function Pagination({ currentPage, totalCount, pageSize, onPageChange, siblingCount = 1, setPageSize }) {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    })

    if (currentPage === 0 || paginationRange.length < 2) {
        return null
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    const onPrev = () => {
        onPageChange(currentPage - 1)
    }

    let lastPage = paginationRange[paginationRange.length - 1]
    const paginationPage = "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
    const activePaginationPage = "px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple"
    return (
        <PaginationWrap>
            <span className="w-full flex items-center col-span-3">Showing {totalCount ? 1 + (currentPage * pageSize) - pageSize : 0}-{(currentPage + 1) * pageSize > totalCount ? totalCount : ((currentPage + 1) * pageSize) - pageSize} of {totalCount} </span>
            <span className="col-span-2"></span>
            {/* select pahge size */}
            <div className={'w-full gap-2 text-xs flex'}>
                <InputLabel labelName={`Ver: `} requiredInput={false} />
                <select
                    className="w-1/2 px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple"
                    required="required"
                    name={`select-page-size`}
                    id={`select-page-size`}
                    defaultValue={pageSize}
                    onChange={(e) => { setPageSize(Number(e.target.value)) }}
                >
                    <option value="">Select an option</option>
                    {
                        pageSizeOptions.map((opt) => <option key={`select-option-${opt}`}
                            className='text-gray-100 dark:text-gray-800' value={opt}>
                            {opt}
                        </option>)
                    }
                </select>
            </div>
            {/* <!-- Pagination --> */}
            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                        {
                            currentPage === 1 ?

                                <li>
                                    <button onClick={onPrev}
                                        disabled className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>
                                :
                                <li>
                                    <button onClick={onPrev}
                                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>
                        }
                        {
                            paginationRange.map(pageNumber => {
                                if (pageNumber === DOTS) {
                                    return <li key={`pg-${pageNumber}`}>&#8230;</li>
                                }

                                return (
                                    <li key={`pg-${pageNumber}`}
                                        className={`${currentPage === pageNumber ? activePaginationPage : paginationPage} cursor-pointer`}
                                        onClick={() => { onPageChange(pageNumber) }}>
                                        {pageNumber}
                                    </li>
                                )

                            })
                        }

                        {/* <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                        </li>
                        <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                        </li>
                        <li>
                            <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                        </li>
                        <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                        </li>
                        <li>
                            <span className="px-3 py-1">...</span>
                        </li>
                        <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                        </li>
                        <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                        </li> */}
                        {
                            lastPage === currentPage ?
                                <li>
                                    <button onClick={onNext}
                                        disabled className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                                        <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>
                                :
                                <li>
                                    <button onClick={onNext}
                                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                                        <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>
                        }
                    </ul>
                </nav>
            </span>
        </PaginationWrap>
    )
}