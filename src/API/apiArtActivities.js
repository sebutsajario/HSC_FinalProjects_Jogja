const API_ART_ACTIVITIES = 'https://my-json-server.typicode.com/nadila98dev/apiArtActivities'

import axios from 'axios'
import React from "react"

const axiosArtActivities = {
    artactivities: async() => await axios.get(API_ART_ACTIVITIES +'/artactivities').then((res) => res.data).catch((err) => { console.log(err)}),
    detail: async (id) => await axios.get(`${API_ART_ACTIVITIES}/artactivities/${id}`).then((res) => res.data).catch((err) => { console.log(err)}),

}

export default axiosArtActivities