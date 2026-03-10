import React from 'react'

function DashboardStatComponent() {
    const statCards: {
        value: number;
        title: string;
        color: string;
    }[] = [
            {
                color: '#1599d9',
                title: 'Assets',
                value: 10
            },
            {
                color: '#18af7c',
                title: 'Locations',
                value: 7
            },
            {
                color: '#e89513',
                title: 'Access',
                value: 2
            },
            {
                color: '#e3418c',
                title: 'users',
                value: 1
            },
            {
                color: '#637289',
                title: 'Lock groups',
                value: 0
            },
            {
                color: '#8f5ff4',
                title: 'User groups',
                value: 11
            }
        ];
    return (
        <section className='flex gap-4 justify-between pl-2 pr-2'>
            {
                statCards.map(item => (
                    <div style={{ background:item.color}} className={`flex flex-col gap-2 p-3 items-start flex-1 rounded-md`}>
                        <div className='text-white text-sm font-bold'>{item.title}</div>
                        <div className='text-white text-2xl font-extrabold'>{item.value}</div>
                    </div>
                ))
            }
        </section>
    )
}

export default DashboardStatComponent;