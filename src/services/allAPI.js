import commonAPI from "./commonAPI";
import URL from "./URL"


// saveVideoAPI - post method to "http://localhost:3000/uploadVideos" called by add component
export const saveAPI= async (Details) => {
    return await commonAPI("POST",`${URL}/Upload`,Details)
}

export const getAPI= async () => {
    return await commonAPI("GET",`${URL}/Upload`)
}

