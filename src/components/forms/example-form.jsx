export function ExampleForm() {
    return (
        <form className="form">
            <div className="md:space-y-2 mb-3">
                <label className="text-xs font-semibold text-gray-600 py-2">Company Logo<abbr className="hidden" title="required">*</abbr></label>
                <FileInputGroup />
            </div>
            {/* two cols */}
            <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Company Name'}
                    type={'text'}
                    placeholder={'Your company name'}
                    name={'company-name'}
                />
                <InputGroup
                    inputClass={'mb-3 space-y-2 w-full text-xs'}
                    labelName={'Company mail'}
                    type={'mail'}
                    placeholder={'Your company mail'}
                    name={'company-mail'}
                />
            </div>
            <IconInputGroup
                labelName={'Company website'}
                requiredInput={false}
                type={'url'}
                placeholder="www.yourwebsite.com"
                name={'company-website'}
            />

            {/* two cols */}
            <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <InputGroup
                    inputClass={"w-full flex flex-col mb-3"}
                    labelName={'Company Address'}
                    type={'text'}
                    placeholder={'Company Address'}
                    name={'company-address'}
                    requiredInput={false}
                />
                <Select
                    labelName={'Location'}
                    options={options}
                    inputClass={"w-full flex flex-col mb-3"}
                    name={'location'}
                />
            </div>
            <div className="flex-auto w-full mb-1 text-xs space-y-2">
                <TextArea
                    labelName={'Description'}
                    placeholder={'Company Info'}
                    name={'message'}

                />
                <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
            </div>
            <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
                asterisk <abbr title="Required field">*</abbr></p>
            <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                <CancelButton />
                <SubmitButton />
            </div>
        </form>
    )
}