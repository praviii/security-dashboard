import TopBarComponent from "@/components/top-bar/top-bar.component";
import DashboardGraphComponent from "./dashboard-graph.component"
import DashboardStatComponent from "./dashboard-stat.component"

function DashboardComponent() {
    const graphData : {
        title :string;
        data : number[]
    }[] = [
        {
            title:'Assets in stock',
            data:[]
        },
        {
            title:'Highest lock openings(Last 7 days)',
            data:[]
        },
        {
            title:'lock status count',
            data:[]
        }
    ]

    return (
        <section className="w-full flex flex-col gap-4">
             <TopBarComponent />
            <DashboardStatComponent />
            <section className="flex gap-4 justify-between p-2">
                {
                    graphData.map(val => (
                        <DashboardGraphComponent  data={val.data} title={val.title} key={val.title} />
                    ))
                }
            </section>
        </section>
    )
}

export default DashboardComponent