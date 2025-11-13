const Table = ({ data }) => {
    return (<>
        <div className="bg-white rounded-lg shadow-sm flex flex-col gap-3 p-3">
            <div className="flex justify-between gap-4">
                <div>
                    <div class="relative w-54 ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 fill-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                            </svg>
                        </div>
                        <input type="text" className="bg-white border border-gray-200 text-gray-900 text-sm rounded-md block  ps-10 p-2.5 focus:outline-none  w-full" placeholder="Order ID or Transaction ID" required />
                    </div>
                </div>
                <div className="flex flex-row gap-4 ">
                    <div className="flex gap-1 items-center  bg-white border border-gray-200 rounded-md px-2">
                        <div className="text-gray-800">
                            Sort
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-600 h-5 w-5" viewBox="0 0 24 24"><path d="M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35 5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 0 0-.7 0z" /></svg>
                    </div>
                    <div className="flex px-2 items-center bg-white border border-gray-200 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-600 h-5 w-5" viewBox="0 0 24 24"><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z" /></svg>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto ">
                <table className="min-w-full ">
                    <thead className="bg-zinc-100 rounded-2xl ">
                        <tr>
                            <th className="px-4 py-2 font-medium text-left text-gray-700 rounded-l text-nowrap">Order ID</th>
                            <th className="px-4 py-2 font-medium text-left  text-gray-700 text-nowrap">Status</th>
                            <th className="px-4 py-2 font-medium text-left  text-gray-700 text-nowrap">Transaction ID</th>
                            <th className="px-4 py-2 font-medium text-left  text-gray-700 text-nowrap">Refund Time</th>
                            <th className="px-4 py-2 font-medium text-right  text-gray-700 rounded-r text-nowrap">Order Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} className="bg-white">
                                <td className="px-4 py-2 text-sm text-[#126eb4] underline font-medium  ">{row.id}</td>
                                <td className="px-4 py-2 text-sm text-gray-700  ">
                                <div className="flex items-center ">
                                    <div className={` w-2.5 h-2.5 mr-2  items-center rounded-2xl text-xs font-medium ${row.status === "Successful"
                                        ? "bg-green-400"
                                        : "bg-gray-400"
                                        }`}></div>
                                    {row.status}
                                </div>
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-700  ">{row.trxId}</td>
                                <td className="px-4 py-2 text-sm text-gray-700  ">{row.time}</td>
                                <td className="px-4 py-2 text-sm text-gray-700   text-right ">{row.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}
export default Table;