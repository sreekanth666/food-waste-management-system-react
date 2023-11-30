import { base_url } from "./baseURL"
import { commonAPI } from "./commonAPI"

// User registration
export const registerAPI = async(reqBody) => {
    return await commonAPI("POST", `${base_url}/users/register`, reqBody, "")
}

// User login
export const loginAPI = async(reqBody) => {
    return await commonAPI("POST", `${base_url}/users/login`, reqBody, "")
}

// Create food request
export const createFoodRequestAPI = async(reqBody, reqHeader) => {
    return commonAPI("POST", `${base_url}/request/food`, reqBody, reqHeader)
}

// Create waste request
export const createWasteRequestAPI = async(reqBody, reqHeader) => {
    return await commonAPI("POST", `${base_url}/request/waste`, reqBody, reqHeader)
}

// Get all user requests
export const getAllUserRequests = async(reqHeader) => {
    return await commonAPI("GET", `${base_url}/request/all`, "", reqHeader)
}

// Get requests based on pincode
export const getRequestsPincode = async(reqBody, reqHeader) => {
    return await commonAPI("POST", `${base_url}/requests/pincode/all`, reqBody, reqHeader)
}