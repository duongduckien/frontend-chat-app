import httpRequest from '../utilities/middleware';

class API {

    createUsername(params: any) {
        return httpRequest.axiosInstance.post('/users', params);
    }

}

const api = new API();
export default api;