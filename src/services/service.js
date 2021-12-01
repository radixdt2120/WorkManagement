import axios from "axios"

const  BASR_URL = "http://localhost:1338"
class services {
    static async getTodayData(id,date){
        const res = await axios.get(`${BASR_URL}/working-times?user.id=${id}&Date=${date}`)
        return await res.data
    }

    static async addNewData(newData){
        console.log(newData);
        const res = await axios.post(`${BASR_URL}/working-times`,newData)
        return await res.data
    }

    static async updateTodayData(id,newData){
        const res = await axios.put(`${BASR_URL}/working-times/${id}`,newData)
        return await res.data
    }
}

export default services