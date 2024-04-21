import { SidebarSubItem } from "./SidebarSubItem"

export function SidebarItems({ item }) {
    const subItems = item.subItems
    return (
        <>
            <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase" key={item.title}>
                        {item.title}
                    </div>
                </div>
            </li>
            {subItems.map(subItem => {
                return (
                    <SidebarSubItem subItem={subItem} key={`sidebar-sub-item-${subItem.title}`} />
                )
            })}
        </>
    )

}