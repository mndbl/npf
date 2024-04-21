export function FileInputGroup({ params, setParams }) {
    return (
        <div className="flex items-center py-6">
            <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                <img className="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload" />
            </div>
            <label className="cursor-pointer ">
                <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                <input type="file" className="hidden" multiple />
            </label>
        </div>
    )
}