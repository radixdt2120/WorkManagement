import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

//const isCallTrue = true
const isCallTrue = false

const Utils = () => {

    const [data, setData] = useState([])

    const updateById = async (id) => {
        var arr = []
        const newItem = {...data.find(item => item.id === id)}
        const url = `http://52.66.238.175:1337/pages/${id}`
        const isDataExist = newItem.GenericSection.find(item => item.__component === "hierarchical.title-content-with-title-content-list")
        if(!isDataExist){
            const additionalData2 = [
                {
                    "__component": "hierarchical.title-content-with-title-content-list",
                    "Title": "Explore More Topics",
                    "LongText": "Ready to brush up on something new? We've got more to read right this way.",
                    "VueReferenceCode": "TCWithTCL_MoreTopics",
                    "TitleContentList": [
                        {
                        "Title": "Software Development",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/software-development",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Software Outsourcing",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/software-outsourcing",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Digital Transformation",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/digital-transformation",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Mobile App Development",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/mobile-app-development",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Enterprise Mobility",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "\n",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/enterprise-mobility",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Thought Leadership",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/thought-leadership",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Events",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/events",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Life at Radixweb",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/life-at-radix",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        },
                        {
                        "Title": "Careers",
                        "SubTitle": null,
                        "ShortText": null,
                        "LongText": "",
                        "VueReferenceCode": "TC",
                        "GuideURL": null,
                        "NavLink": null,
                        "CTA": "/insights/careers",
                        "NavURL": null,
                        "AdditionalReferenceCode": null
                        }
                    ]
                },
                {
                    "__component": "standard.title-content-media-single",
                    "Title": "Get top Insights and news from our technology experts.",
                    "SubTitle": "Want to stay on top of technology trends?",
                    "LongText": "Delivered to you monthly, straight to your inbox.",
                    "VueReferenceCode": "TCM_Subscribe",
                    "Image" : 2503
                }
            ]
            newItem.GenericSection = [...newItem.GenericSection,...additionalData2]
            if(isCallTrue){
                const res = await axios.put(url,newItem)
                const finalUpdatedData = await res.data
                console.log("updated final : ",finalUpdatedData);

            } else {
                console.log("isCalltrue is false");
            }
        } else {
            console.log(`data is already available in this page ,  PageId : ${id}`);
        }
    }

    const handleClick = async (id) => {
        var arr = []
        const item1 = data.find(item => item.id === id)
        const url = `http://52.66.238.175:1337/pages/${id}`
        // const res = await axios.get(url)
        // const data1 = await res.data
        // console.log(data1);
        // const res =await  axios.get(`${url}?NavURL=${item1.URL}`)
        // const mainData =  await res.data 
        // console.log(await res.data);
        console.log(item1);

        const tempe = item1.GenericSection.find(item => item.__component === "hierarchical.title-content-with-title-content-list")
        if(tempe){
            console.log(true);
        } else {
            console.log(false);
        }

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

        const additionalData2 = [
            {
                "__component": "hierarchical.title-content-with-title-content-list",
                "Title": "Explore More Topics",
                "LongText": "Ready to brush up on something new? We've got more to read right this way.",
                "VueReferenceCode": "TCWithTCL_MoreTopics",
                "TitleContentList": [
                    {
                    "Title": "Software Development",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/software-development",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Software Outsourcing",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/software-outsourcing",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Digital Transformation",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/digital-transformation",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Mobile App Development",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/mobile-app-development",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Enterprise Mobility",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "\n",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/enterprise-mobility",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Thought Leadership",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/thought-leadership",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Events",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/events",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Life at Radixweb",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/life-at-radix",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    },
                    {
                    "Title": "Careers",
                    "SubTitle": null,
                    "ShortText": null,
                    "LongText": "",
                    "VueReferenceCode": "TC",
                    "GuideURL": null,
                    "NavLink": null,
                    "CTA": "/insights/careers",
                    "NavURL": null,
                    "AdditionalReferenceCode": null
                    }
                ]
            },
            {
                "__component": "standard.title-content-media-single",
                "Title": "Get top Insights and news from our technology experts.",
                "SubTitle": "Want to stay on top of technology trends?",
                "LongText": "Delivered to you monthly, straight to your inbox.",
                "VueReferenceCode": "TCM_Subscribe",
                "Image" : 2503
            }
        ]

        const newData = {...item1}
        newData.GenericSection = [...newData.GenericSection,...additionalData2]
        //console.log(item1);
        //console.log(newData);
        // const res = await axios.put(url,newData)
        // const final = await res.data
        // console.log("final : ",final);

    }

    const deleteById =async (id) => {
        const url = `http://52.66.238.175:1337/pages/${id}`

        const data1 = {...data.find(item => item.id === id)}
        const updatedGenericSection = data1.GenericSection.filter(item => item.__component !== "hierarchical.title-content-with-title-content-list" && item.__component !== "standard.title-content-media-single")
        const newData = {...data1, GenericSection : [...updatedGenericSection]}
        if(isCallTrue){
            const res1 = await axios.put(url,newData)
            const final = await res1.data
            console.log("deleted final : ",final);
        } else {
            console.log("isCalltrue is false");
        }
    }
    useEffect(() => {
        async function getdata(){
            ///blog/net-core-vs-java
            // const url = "http://52.66.238.175:1337/pages?[URL_contains]=/blog/&_limit=-1"
            // const url = "http://52.66.238.175:1337/pages?[URL_contains]=/current-openings"
            const url = "http://52.66.238.175:1337/pages?[URL_contains]=/blog/10&_limit=-1"
            const res = await axios.get(url)
            const data1 = await res.data 
            console.log("Total data : ",data1.length);
            setData([...data1])
        }
        getdata()
    }, [])

    const updateAll = () => {
        data.map(async item => {
            await updateById(item.id)
        })
    }

    const deleteAll = () => {
        data.map(item => {
            deleteById(item.id)
        })
    }

    

    return (
        <div className="p-3"> 
            <div className="d-flex ">
                <button className="btn btn-success mx-2" onClick={() => {updateAll()}}>update all</button>
                <button className="btn btn-danger mx-2" onClick={() => {deleteAll()}}>delete from all</button>
            </div>
            <ul>


                {data.map(item =>     <li key={item.id}>
                        {item.Title}

                            <button className="btn btn-success mx-2" onClick={() => {updateById(item.id)}}>update</button>

                            <button className="btn btn-danger mx-2" onClick={() => {deleteById(item.id)}}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Utils
