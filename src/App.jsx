import Overview from "../components/Overview";
import SidePanal from "../components/SidePanal";
import TopBar from "../components/TopBar";
import { useState } from "react";
import Transactions from "../components/Transactions";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const transactions = [
        {
            id: "#281209",
            status: "Successful",
            trxId: "TRX123456",
            time: "Today, 8:45 PM",
            amount: "$1125.00",
        },
        {
            id: "#281210",
            status: "Processing",
            trxId: "TRX789012",
            time: "Tomorrow, 10:00 AM",
            amount: "$950.50",
        },
        {
            id: "#281211",
            status: "Successful",
            trxId: "TRX345678",
            time: "Yesterday, 3:30 PM",
            amount: "$750.00",
        },
        {
            id: "#281212",
            status: "Successful",
            trxId: "TRX901234",
            time: "Today, 11:20 AM",
            amount: "$2000.00",
        },
        {
            id: "#281213",
            status: "Processing",
            trxId: "TRX567890",
            time: "Tomorrow, 9:00 AM",
            amount: "$1800.00",
        },
        {
            id: "#281214",
            status: "Processing",
            trxId: "TRX098765",
            time: "Yesterday, 2:00 PM",
            amount: "$500.00",
        },
        {
            id: "#281215",
            status: "Successful",
            trxId: "TRX456789",
            time: "Today, 10:30 AM",
            amount: "$3000.00",
        },
        {
            id: "#281216",
            status: "Processing",
            trxId: "TRX987654",
            time: "Tomorrow, 11:30 AM",
            amount: "$1200.00",
        },
        {
            id: "#281217",
            status: "Processing",
            trxId: "TRX654321",
            time: "Yesterday, 4:00 PM",
            amount: "$900.00",
        },
        {
            id: "#281218",
            status: "Successful",
            trxId: "TRX234567",
            time: "Today, 9:45 AM",
            amount: "$1500.00",
        },
    ];


    return (
        <>
            <div className="flex">
                <div className="fixed z-50  h-screen">
                    <SidePanal sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} ></SidePanal>
                </div>
                <div className="flex-1 lg:ml-56 h-screen overflow-y-auto">
                    <div className="sticky top-0">
                        <TopBar setSidebarOpen={setSidebarOpen} />
                    </div>

                    <div className="p-4 sm:p-8 flex flex-col gap-7">
                        <Overview />
                        <Transactions data={transactions} />
                        <div className="flex flex-row items-center justify-center text-gray-500 ">
                            <a>Made With ❤️  By <a className="font-semibold underline" >TUSHAR THAKUR</a> An Assignment From Harkirat's Cohort 2.0</a>
                        </div>
                        <div className="flex flex-row items-center justify-center underline text-blue-600">
                            <a href="https://github.com/tushar0i/dukaan-payouts-dashboard"> https://github.com/tushar0i/dukaan-payouts-dashboard</a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="pl-3 w-8 h-8" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default App;