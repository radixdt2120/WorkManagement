import React from 'react'

const TodayTiming = ({data}) => {

    const handleEditClick = (id) => {
        console.log(id);
    }

    return (
        <div>
            <table className="table table-bordered table-hover table-striped table">
                <thead className="table">
                    <tr>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Work Description</th>
                        <th>Break Description</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Timings && data.Timings.map(item => <tr key={item.id}>
                        <td>{item.InTime && item.InTime.slice(0,5)}</td>
                        <td>{item.OutTime && item.OutTime.slice(0,5)}</td>
                        <td>{item.WorkDescription}</td>
                        <td>{item.BreakDescription}</td>
                        <td onClick={() => handleEditClick(item.id)}><i className="fa fa-edit"></i></td>
                    </tr>)}
                   
                </tbody>
            </table>
        </div>
    )
}

export default TodayTiming
