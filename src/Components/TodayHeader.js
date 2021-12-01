import React from 'react'

const TodayHeader = ({timer}) => {
    return (
        <div className="bg-info card h3 d-inlinealign-self-center " >
            <div className=" card-header  h2 text-center ">
                Today
            </div>
            <div className="card-body d-flex flex-wrap justify-content-between container">
                <div>
                    Date : {new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()}
                </div>
                
                <div className="">
                    Time :  {timer}
                </div>
            </div>
        </div>
    )
}

export default TodayHeader
