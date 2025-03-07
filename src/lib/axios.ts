import Axios from 'Axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    timeout: 60000,
    withCredentials: true,
    headers: {
        Accept: "application/json"
    },
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    withXSRFToken: true
})

export default axios