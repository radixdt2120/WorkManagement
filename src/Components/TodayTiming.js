import React from 'react'

const TodayTiming = ({data}) => {
    return (
        <div>
            <table className="table table-bordered table-hover table-striped table">
                <thead className="table">
                    <tr>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Work Description</th>
                        <th>Break Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Timings && data.Timings.map(item => <tr key={item.id}>
                        <td>{item.InTime && item.InTime.slice(0,5)}</td>
                        <td>{item.OutTime && item.OutTime.slice(0,5)}</td>
                        <td>{item.WorkDescription}</td>
                        <td>{item.BreakDescription}</td>
                    </tr>)}
                   
                </tbody>
            </table>
        </div>
    )
}

export default TodayTiming
