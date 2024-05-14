export function Inputs({ type='text', placeholder, name, requiredInput = true, defaultVal }) {
    if (requiredInput === true) {
        return (
            <input
                className="text-gray-100 dark:text-gray-800 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required='required'
                type={type}
                placeholder={placeholder}
                name={name}
                id={`required-input-${name}`}
                defaultValue={defaultVal}
                step={0.01}
                min={0}
            />
        )
    }

    return (
        <input
            className="text-gray-100 dark:text-gray-800 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type={type}
            placeholder={placeholder}
            name={`optional-input-${name}`}
            id={`optional-input-${name}`}
            defaultValue={defaultVal}
            step={0.01}
            min={0}
        />
    )
}