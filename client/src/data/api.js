import axios from 'axios';

const apiURL = 'http://localhost:3001/api/';

export const singleFileUpload = async (data) => {
    try {
        await axios.post(apiURL + 'singleFile', data);
    } catch (error) {
        throw error;
    }
}

export const getSingleFiles = async () => {
    try {
        const { data }  = await axios.get(apiURL + 'getAllSingleFiles');
        return data;
    } catch (error) {
        throw error;
    }
}
