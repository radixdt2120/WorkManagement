import React from 'react'
import Clock from './Clock'

const TimingDisplay = ({inTime,totalIn,totalOut}) => {
    return (
        <div className="text-center flex-wrap d-flex gap-2   justify-content-center" >
            <Clock bg="primary" title="First In" time={inTime} />
            
            <Clock bg="success" title="Total In" time={totalIn} />

            <Clock bg="danger" title="Total Out" time={totalOut} />
        </div>
    )
}

export default TimingDisplay
