const API_MUSEUM = 'https://my-json-server.typicode.com/komporbakar/apiMuseum'

import axios from 'axios'
import React from 'react'

const axiosInstance = {
    // museum: async() => await axios.get(API_MUSEUM +'/items').then((res) =>  res.data).catch((err) => { console.log(err)}),
    items: async(id) => await axios.get('/db.json').then((res) =>  res.data.items.filter((item) => item.category_id === id)).catch((err) => { console.log(err)}),
    detail: async (slug) => await axios.get('/db.json').then((res) => res.data.items.filter((item) => item.slug == slug)).catch((err) => { console.log(err)}),
}

export default axiosInstance