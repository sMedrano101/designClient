import axios from "axios";

//xhttps://www.npmjs.com/package/react-axios
export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID TBT8ShyR0f6pi7RRreNAYc2FyHJkLwiR1DGdOrv6_Go",
    }
})


