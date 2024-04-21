import { InputLabel } from "./InputLabel";
import { Inputs } from "./Inputs";

export function InputGroup({ inputClass ='mb-3 space-y-2 w-full text-xs',labelName, type, placeholder, name, requiredInput = true }) {
    return (
        <div className={inputClass}>
            <InputLabel labelName={labelName} requiredInput={requiredInput} />
            <Inputs type={type} placeholder={placeholder} name={name} requiredInput={requiredInput} />
            <p className="text-red text-xs hidden">Please fill out this field.</p>
        </div>
    )
}