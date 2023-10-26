import { QueryClient } from "@tanstack/react-query"
import Axios from "axios"

export const axios = Axios.create({
    baseURL : "https://fakestoreapi.com"
})

export const query = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime : Infinity
        }
    }
})