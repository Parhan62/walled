function Table(){
const transactions =[];
for (let i = 0; i <10; i++){
    transactions.push({
        date: '20:10-30 June 2022',
        type: i%2 === 0? "DEBIT": "CREDIT",
        fromTo: i%2 === 0? `31000100`: `1001`,
        description: i%2 === 0? `Fore Coffee`: `Topup from Bank Transfer`,
        amount: i%2 === 0? '-75.000,00': '+1.000.000,00'
    });
}
    return(
        <div className="mx-auto p-4 bg white text-black rouded-lg shadow-md">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Date & Time</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">From/To</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transactions, index)=>(
                        <tr key={index}>
                            <td className="border px-4 py-2">{transactions.date}</td>
                            <td className="border px-4 py-2">{transactions.type}</td>
                            <td className="border px-4 py-2">{transactions.fromTo}</td>
                            <td className="border px-4 py-2">{transactions.description}</td>
                            <td className="border px-4 py-2">{transactions.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table