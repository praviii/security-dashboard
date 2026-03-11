

function TableComponent({ data, title }: TableProps) {
    return (
        <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-lg border">
            <thead className="bg-accent">
                <tr>
                    {
                        title.map(t => (
                            <th className="py-2 text-xs font-bold">{t}</th>
                        ))
                    }
                </tr>
            </thead>
            {
                data.length <= 0 &&
                <tbody className="text-center">
                    <tr className="h-4">
                        <td colSpan={title.length}></td>
                    </tr>
                    <tr className="h-4">
                        <td colSpan={title.length}>No result found</td>
                    </tr>
                    <tr className="h-4">
                        <td colSpan={title.length}></td>
                    </tr>
                </tbody>
            }

        </table>
    )
}

export default TableComponent;

export interface TableProps {
    title: string[];
    data: string[]
}