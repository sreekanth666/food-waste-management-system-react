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

// Get all user accepted requests
export const getAllUserAcceptedRequests = async(reqHeader) => {
    return commonAPI("GET", `${base_url}/accepted/all`, "", reqHeader)
}

// Get requests based on pincode
export const getRequestsPincode = async(reqBody, reqHeader) => {
    return await commonAPI("POST", `${base_url}/requests/pincode/all`, reqBody, reqHeader)
}

// Get entire requests (Active only)
export const getAllActiveRequests = async() => {
    return await commonAPI("GET", `${base_url}/requests/active/all`, "", "")
}

// Accept request
export const acceptRequestAPI = async(reqId, reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${base_url}/requests/accept/${reqId}`, reqBody, reqHeader)
}

// Update delivery status
export const updateDeliveryStatusAPI = async(reqId, reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${base_url}/requests/status/${reqId}`, reqBody, reqHeader)
}

// Update created food request
export const updateFoodRequestAPI = async(reqId, reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${base_url}/requests/food/edit/${reqId}`, reqBody, reqHeader)
}

// Update created waste request
export const updateWasteRequestAPI = async(reqId, reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${base_url}/requests/waste/edit/${reqId}`, reqBody, reqHeader)
}

// Delete food request
export const deleteFoodRequestAPI = async(reqId, reqHeader) => {
    return await commonAPI("DELETE", `${base_url}/requests/food/delete/${reqId}`, {}, reqHeader)
}

// Delete waste request
export const deleteWasteRequestAPI = async(reqId, reqHeader) => {
    return await commonAPI("DELETE", `${base_url}/requests/waste/delete/${reqId}`, {}, reqHeader)
}

// Edit user details
export const editUserDetailsAPI = async(reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${base_url}/user/edit/`, reqBody, reqHeader)
}

// Change password
export const changePasswordAPI = async(reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${base_url}/user/change/password`, reqBody, reqHeader)
}