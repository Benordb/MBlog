import { Children } from "react"

export const MainButton = ({ btnContent }) => {
    return (
        <button className="bg-indigo-600 text-sm px-3 py-1 text-white rounded-lg max-w-fit">
            {btnContent}
        </button>
    )
}