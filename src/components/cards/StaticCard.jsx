import { useNavigation } from "react-router-dom";
import { nf } from "../../config/main.config";
import { Loader } from "../loaders/loader";

export function StaticCard({ icon, label, amount, currency }) {
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />
    return (
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                {icon}
            </div>
            <div className="text-right">
                <p className="text-2xl">{`${currency === true ? nf.format(amount) : (amount)}`}</p>
                <p>{label}</p>
            </div>
        </div>
    )
}