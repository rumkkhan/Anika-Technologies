import axios from 'axios';

export const GET = async (url) => {
    try{
       return   await axios.get(url);   
    }
    catch(error){

    }
} 