import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {

    const [data, setData] = useState([])

    const handleClick =async  (id) => {
        const item1 = data.find(item => item.id == id)
        const url = `http://52.66.238.175:1337/pages/${id}`
        // const res = await axios.get(url)
        // const data1 = await res.data
        // console.log(data1);
        // const res =await  axios.get(`${url}?NavURL=${item1.URL}`)
        // const mainData =  await res.data 
        // console.log(await res.data);



        const additionalData = [{
            "__component": "tags.meta-tags",
            "VueReferenceCode": "MT",
            "AdditionalReferenceCode": "MT",
            "CharSetTag": {
                "CharSet": "1",
                "VueReferenceCode": "MCT_01",
            },
            "MetaNameTag": [
                {
                    "Content": "#025fa2",
                    "VueReferenceCode": "MNT_01",
                    "Name": "4"
                },
                {
                    "Content": "width=device-width, initial-scale=1.0",
                    "VueReferenceCode": "MNT_02",
                    "Name": "5"
                }
            ],
            "MetaPropertyTag": [
                {
                    "Content": "en_US",
                    "VueReferenceCode": "MPT_01",
                    "Property": "8"
                },
                {
                    "Content": "website",
                    "VueReferenceCode": "MPT_02",
                    "Property": "9"
                },
                {
                    "Content": `${item1.Title} - Radixweb`,
                    "VueReferenceCode": "MPT",
                    "Property": "10"
                },
                {
                    "VueReferenceCode": "MPT",
                    "Property": "33"
                },
                {
                    "Content": item1.URL,
                    "VueReferenceCode": "MPT",
                    "Property": "11"
                },
                {
                    "Content": "Radixweb",
                    "VueReferenceCode": "MPT",
                    "Property": "12"
                },
                {
                    
                    "VueReferenceCode": "MPT",
                    "Property": "15"
                },
                {
                    "VueReferenceCode": "MPT",
                    "Property": "34"
                },
                {
                    "VueReferenceCode": "MPT",
                    "Property": "35"
                },
                {
                    "Content": "summary_large_image",
                    "VueReferenceCode": "MPT",
                    "Property": "6"
                },
                {
                    "Content": "@radixweb",
                    "VueReferenceCode": "MPT",
                    "Property": "22"
                }
            ],
            "MetaHttpEquivTag": [
                {
                    "HttpEquiv": "13",
                    "Content": "30",
                    "VueReferenceCode": "MHT_01",
                }
            ],
            "MetaItemPropTag": [
                {
                    "ItemProp": "24",
                    "Content": "Name",
                    "VueReferenceCode": "MIT_01",
                }
            ],
            "MetaNameImageTag": [
                {
                    "VueReferenceCode": "MNIT_01",
                }
            ],
            "MetaPropertyImageTag": [
                {
                    "VueReferenceCode": "MPIT_01",
                }
            ],
            "MetaItemPropImageTag": [
                {
                    "ItemProp": "23",
                    "VueReferenceCode": "MPIT_01",
                }
            ],
            "LinkTags": [ ]
            },
            {
                "__component": "tags.seo",
                "MetaTitle": `${item1.Title} - Radixweb`,
                "VueReferenceCode": "SEO_01",
        }]

        const newData = {...item1}
        newData.GenericSection = [...newData.GenericSection,...additionalData]
        console.log(item1);
        console.log(newData);
        // const res = await axios.put(url,newData)
        // const final = await res.data
        // console.log("final : ",final);

    }

    useEffect(() => {
        async function getdata(){
            //const res = await axios.get("http://52.66.238.175:1337/pages?[URL_contains]=/current-openings")
            const res = await axios.get("http://52.66.238.175:1337/pages?[URL_contains]=/current-openings/")
            const data1 = await res.data 
            console.log(data1);
            setData([...data1])
        }
        getdata()
    }, [])
    return (
        <div>
            <ul>
                {data.map(item =>     <li key={item.id}>
                        {item.Title}
                        <button onClick={() => {

                            //handleClick(item.id)
                        }
                        }>
                            {item.Title}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Dashboard
