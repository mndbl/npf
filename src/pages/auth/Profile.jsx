import { Link, useLoaderData, useNavigation } from "react-router-dom"
import { Loader } from "../../components/loaders/loader"

export function UserProfile() {
    const { userAuth } = useLoaderData()
    const { profile } = userAuth.data
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />
    return (
        // <!-- component -->
        <div className="h-full lg:h-screen -mt-6 bg-gray-200  dark:bg-gray-600   flex flex-wrap items-center  justify-center  ">
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden" >
                    <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                {/* user avatar */}
                <div className="flex justify-center px-5  -mt-12">
                    {
                        !profile ?
                            <img className="h-32 w-32 bg-gray-300 p-2 rounded-full   " src="" alt="" />
                            :
                            <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                    }

                </div>
                <div className=" ">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold capitalize">{userAuth.data.username}</h2>
                    </div>
                    {
                        !profile ?
                            <div className="text-center px-14 pb-4">
                                <p className="mt-2 text-gray-500 text-sm">User has not profile yet.{' '}
                                    <Link to={'add'} className="underline">Add profile!</Link>
                                </p>
                            </div>
                            :
                            <>
                                <div className="text-center px-14">
                                    <p className="mt-2 text-gray-500 text-sm">
                                        <Link to={`${profile.id}/edit`} className="underline">Edit profile!</Link>
                                    </p>
                                </div>
                                <hr className="mt-6" />
                                <div className="flex  bg-gray-700 ">
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
                                        <p><span className="font-semibold">2.5 k </span> Followers</p>
                                    </div>
                                    <div className="border"></div>
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 hover:text-gray-600 cursor-pointer">
                                        <p> <span className="font-semibold ">2.0 k </span> Following</p>
                                    </div>

                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}