const API_ART_ACTIVITIES = 'https://my-json-server.typicode.com/NihhZaeyy/api-ArtActivities/Art-Activities'

import axios from 'axios'

const axiosArtActivities = {
    artActivities: async() => await axios.get(API_ART_ACTIVITIES).then((res) =>  res.data).catch((err) => { console.log(err)}),
    detail: async (id) => await axios.get(`${API_ART_ACTIVITIES}/${id}`).then((res) => res.data).catch((err) => { console.log(err)}),
}

export default axiosArtActivities