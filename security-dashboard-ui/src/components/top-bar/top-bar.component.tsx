import { useEffect, useState } from "react";

function TopBarComponent() {
    const [time, setTime] = useState(new Date());
    const formattedDate = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <article className="flex justify-between p-2 items-center bg-white">
            <h5 className="font-bold text-lg">Dashboard</h5>
            <article className="flex flex-col">
                <div className="font-bold text-gray-600">Good evening, <span className="text-black">Leo</span></div>
                <div className="text-gray-400 text-sm">{formattedDate}, {time.toLocaleTimeString()}</div>
            </article>
        </article>
    )
}

export default TopBarComponent;