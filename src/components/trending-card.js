import { MainButton } from "./main-button"

export const TrendingCard = ({ title, zur, status }) => {

    return (
        <div className={`h-96 w-72 bg-green-200 cursor-pointer rounded-lg overflow-hidden relative`} style={{ backgroundImage: `url(${zur})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-gradient-to-t from-black w-full h-full">
                <div className="absolute bottom-0 p-6">
                    <MainButton btnContent={status} />
                    <p className={`text-white mt-4 h-[50px] duration-1000 overflow-hidden`}>{title}</p>
                </div>
            </div>
        </div>
    )
}