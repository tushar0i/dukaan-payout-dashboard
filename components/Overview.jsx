import PProcessedCard from "../components/PProcessedCard";
import PriceCard from "../components/PriceCard";
import MainCard from "../components/MainCard";

const Overview = () => {
    return (<>
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center ">
                <div className="text-xl font-medium">
                    Overview
                </div>
                <div className=" flex justify-between items-center bg-white border border-gray-200 px-3 py-2 rounded-md  text-zinc-600 ">
                    This month
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-zinc-600 ml-1" viewBox="0 0 24 24"><path d="M8.12 9.29 12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" /></svg>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-wrap">
                <div className="flex-1   min-w-[300px]">
                    <MainCard title={'Next Payout'} orderCount={'13'} amount={'23,548.20'}></MainCard>
                </div>
                <div className="flex-1  min-w-[300px]">
                    <PriceCard title={'Amount Pending'} orderCount={'13'} amount={'75,923.50'}></PriceCard>
                </div>
                <div className="flex-1 min-w-[300px]">
                    <PProcessedCard title={'Amount Pocessed'} amount={'450,970.20'}></PProcessedCard>
                </div>
            </div>
        </div>
    </>)
}

export default Overview;