import Table from "./Table";

const Transactions = ({data}) => {
    return (<>
    <div className="flex flex-col gap-6">
        <div className="text-2xl font-medium">
            Transactions | This Month
        </div>
        <div className="flex flex-row gap-4">
            <div className="bg-zinc-200 text-zinc-500 rounded-full py-1 px-4 text-lg ">
                Payouts (12)
            </div>
            <div className="bg-[#126eb4]  text-white rounded-full py-1 px-4 text-lg shadow-sm">
                Refunds (10)
            </div>
        </div>
        <div>
            <Table data={data} ></Table>
        </div>
    </div>
    </>)
}
export default Transactions;
