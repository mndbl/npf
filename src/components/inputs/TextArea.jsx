import { InputLabel } from "./InputLabel"

export function TextArea({ labelName, name, placeholder, requiredInput = true }) {
    if (requiredInput === true) {
        return (
            <>
                <InputLabel labelName={labelName} />
                <textarea
                    required
                    name={`text-area-${name}`}
                    id={`text-area-${name}`}
                    className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder={placeholder}
                    spellCheck="false">
                </textarea>
            </>
        )
    }
    return (
        <>
            <InputLabel labelName={labelName} />
            <textarea
                name={`text-area-${name}`}
                id={`text-area-${name}`}
                className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                placeholder={placeholder}
                spellCheck="false">
            </textarea>
        </>
    )
}