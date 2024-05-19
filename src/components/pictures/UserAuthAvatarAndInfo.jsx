export const UserAuthAvatar = ({ userAuth }) => {
    return (
        <picture className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
            {userAuth.avatar ?
                <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={userAuth.avatar} /> :
                <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
            }
            <span className="hidden md:block capitalize">{userAuth.data.username}</span>
        </picture>
    )
}