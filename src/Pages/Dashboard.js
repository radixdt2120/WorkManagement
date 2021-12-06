import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    // const [data, setData] = useState([])
    // var arr = [878,873,880,883,884,881,877,882,878,876,1005,896,913,915]

    // const handleClick = async (id) => {
        
    //     // const item1 = data.find(item => item.id == id)
    //     // var id = 779;
    //     const url = `http://52.66.238.175:1337/pages/${id}`
    //     const res = await axios.get(url)
    //     const item1 = await res.data
    //     console.log(item1);
    //     // const res =await  axios.get(`${url}?NavURL=${item1.URL}`)
    //     // const mainData =  await res.data 
    //     // console.log(await res.data);

    //     const additionalData = [{
    //         "__component": "tags.meta-tags",
    //         "VueReferenceCode": "MT",
    //         "AdditionalReferenceCode": "MT",
    //         "CharSetTag": {
    //             "CharSet": "1",
    //             "VueReferenceCode": "MCT_01",
    //         },
    //         "MetaNameTag": [
    //             {
    //                 "Content": "#025fa2",
    //                 "VueReferenceCode": "MNT_01",
    //                 "Name": "4"
    //             },
    //             {
    //                 "Content": "width=device-width, initial-scale=1.0",
    //                 "VueReferenceCode": "MNT_02",
    //                 "Name": "5"
    //             }
    //         ],
    //         "MetaPropertyTag": [
    //             {
    //                 "Content": "en_US",
    //                 "VueReferenceCode": "MPT_01",
    //                 "Property": "8"
    //             },
    //             {
    //                 "Content": "website",
    //                 "VueReferenceCode": "MPT_02",
    //                 "Property": "9"
    //             },
    //             {
    //                 "Content": 'pending',
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "10"
    //             },
    //             {
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "33"
    //             },
    //             {
    //                 "Content": item1.URL,
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "11"
    //             },
    //             {
    //                 "Content": "Radixweb",
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "12"
    //             },
    //             {

    //                 "VueReferenceCode": "MPT",
    //                 "Property": "15"
    //             },
    //             {
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "34"
    //             },
    //             {
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "35"
    //             },
    //             {
    //                 "Content": "summary_large_image",
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "6"
    //             },
    //             {
    //                 "Content": "@radixweb",
    //                 "VueReferenceCode": "MPT",
    //                 "Property": "22"
    //             }
    //         ],
    //         "MetaHttpEquivTag": [
    //             {
    //                 "HttpEquiv": "13",
    //                 "Content": "30",
    //                 "VueReferenceCode": "MHT_01",
    //             }
    //         ],
    //         "MetaItemPropTag": [
    //             {
    //                 "ItemProp": "24",
    //                 "Content": "Name",
    //                 "VueReferenceCode": "MIT_01",
    //             }
    //         ],
    //         "MetaNameImageTag": [
    //             {
    //                 "VueReferenceCode": "MNIT_01",
    //             }
    //         ],
    //         "MetaPropertyImageTag": [
    //             {
    //                 "ItemProp": "15",
    //                 "VueReferenceCode": "MPIT_01",
    //             }
    //         ],
    //         "MetaItemPropImageTag": [
    //             {
    //                 "ItemProp": "23",
    //                 "VueReferenceCode": "MPIT_01",
    //             }
    //         ],
    //         "LinkTags": []
    //     },
    //     {
    //         "__component": "tags.seo",
    //         "MetaTitle": `pending - Radixweb`,
    //         "VueReferenceCode": "SEO_01",
    //     }]
    //     console.log(additionalData);
    //     const newData = { ...item1 }
    //     newData.GenericSection = [...newData.GenericSection, ...additionalData]
    //     // console.log(item1);
    //     // console.log(newData);
    //     // const ress = await axios.put(url,newData)
    //     // const final = await ress.data
    //     // console.log("final : ",final);

    // }

    // useEffect(() => {
    //     async function getdata() {
    //         var arr = ['/industries/real-estate',
    //         '/services/software-architecture',
    //          '/software-and-hi-tech'
    //         , '/subscription'
    //         , '/careerform-thank-you'
    //         , '/thankyou'
    //         , '/payment-thanks.html'
    //         , '/top-questions-to-ask-before-you-hire-a-node.js-development-team'
    //         , '/unsubscribe'
    //         , '/welcome-to-radixwebs-new-office-ekyarth'
    //         , '/services/whql-testing-certification'
    //         , '/start/engineering-thankyou'
    //         , '/new-office-launch-ekyarth'
    //         , '/hire-software-and-qa-tester'
    //         , '/hire-open-source-developers'
    //         , '/services/progressive-web-apps-development'
    //         , '/full-stack-development'
    //         , '/industries/real-estate'
    //         , '/services/cross-platform-app-development'
    //         , '/services/hybrid-apps-development'
    //         , '/services'
    //         , '/services/offshore-development-center-odc'
    //         , '/services/bsp-os-porting'
    //         , '/services/whql-testing-certification'
    //         , '/services/manufacturing-execution-systems-mes'
    //         , '/solutions/debt-collection-software'
    //         , '/insights'
    //         , '/software-and-hi-tech'
    //         , '/industries/education'
    //         , '/services/software-architecture'
    //         , '/thankyou'
    //         , '/careerform-thank-you'
    //         , '/payment-thanks.html'
    //         , '/radix-premier-league-thank-you'
    //         , '/guides-thankyou'
    //         , '/subscription'
    //         , '/unsubscribe'
    //         , '/picnic'
    //         , '/paypal-payment.php'
    //         , '/radix-premier-league'
    //         , '/insights/uncategorized'
    //         , '/insights/application-development'
    //         , '/insights/mobile-app-development'
    //         , '/insights/web-development'
    //         , '/insights/cloud-computing'
    //         , '/events'
    //         , '/insights/software-development'
    //         , '/insights/embedded-development'
    //         , '/insights/enterprise-mobility'
    //         , '/insights/digital-transformation'
    //         , '/insights/thought-leadership'
    //         , '/insights/software-outsourcing'
    //         , '/insights/careers'
    //         , '/insights/emerging-technologies'
    //         , '/insights/application-modernization'];

    //         const ids = arr.map( async page => {
    //             const res = await axios.get(`http://52.66.238.175:1337/pages?[URL_contains]=${page}`)
    //             const data1 = await res.data
    //             data.push(data1[0].id)
    //             //  setData([...data , data1[0].id])
    //              console.log(data1[0].id);
    //              console.log(data);
    //             //  return data1[0].id
    //         } )
    //         console.log(data , ids);
    //         //const res = await axios.get("http://52.66.238.175:1337/pages?[URL_contains]=/current-openings")
    //         // console.log(data1);
    //         // setData([...data1])
    //     }
    //     getdata()
    // }, [])
    return (
        <div>
            <ul>
                {/* {arr.map(ar => <div><h1>{ar}</h1> <button onClick={handleClick(ar)}>{ar}</button></div>)} */}

                {/* {data.map(item => <li key={item.id}> */}
                    {/* {item.Title} */}
                    {/* <button onClick={() => {

                        //handleClick(item.id)
                    }
                    }>
                        {item.Title}
                    </button> */}
                {/* </li> */}
                {/* )} */}
            </ul>
        </div>
    )
}

export default Dashboard
