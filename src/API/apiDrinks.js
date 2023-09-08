

const API_DRINKS = 'https://my-json-server.typicode.com/sebutsajario/apiDrinks'

import axios from "axios"
import React from "react"

const axiosDrinks = {
    drinks: async() => await axios.get(API_DRINKS +'/drink').then((res) =>  res.data).catch((err) => { console.log(err)}),
    detail: async (id) => await axios.get(`${API_DRINKS}/drink/${id}`).then((res) => res.data).catch((err) => { console.log(err)}),
}

export default axiosDrinks