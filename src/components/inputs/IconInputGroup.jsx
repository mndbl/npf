import { InputLabel } from "./InputLabel";

export function IconInputGroup({ labelName, requiredInput=false, type, placeholder = '', name }) {
    return (
        <div className="mb-3 space-y-2 w-full text-xs">
            <InputLabel labelName={labelName} requiredInput={requiredInput} />
            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                <div className="flex">
                    <span
                        className="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  lg:text-xl rounded-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </span>
                </div>
                <input
                    type={type}
                    id={`icon-input-group-${name}`}
                    name={`icon-input-group-${name}`}
                    className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                    placeholder={placeholder} />
            </div>
        </div>
    )
}