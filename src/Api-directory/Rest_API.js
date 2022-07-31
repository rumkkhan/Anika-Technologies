import * as APIEndpoint from "./API_Directory";
import {GET}  from "./HTTP";


const getAllRepositories = async () => {
    let url = APIEndpoint.GET_REPOSITORIES_URL
    let result =  await GET(url);
    return result;
}

export const API = {getAllRepositories};