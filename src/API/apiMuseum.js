const API_MUSEUM = 'https://my-json-server.typicode.com/komporbakar/apiMuseum'

import axios from 'axios'
import React from 'react'

const axiosInstance = {
    museum: async() => await axios.get(API_MUSEUM +'/items?id_category=6').then((res) =>  res.data).catch((err) => { console.log(err)}),
    detail: async (slug) => await axios.get(`${API_MUSEUM}/items?slug=${slug}`).then((res) => res.data).catch((err) => { console.log(err)}),
}

export default axiosInstance