import { Middleware } from '../utilities/middleware';

const httpRequest = new Middleware();

export class API {

    getCargoTypes() {
        return httpRequest.axiosInstance.get('/cargoTypes');
    }

    getDrivers() {
        return httpRequest.axiosInstance.get('/drivers');
    }

    getTruckStatus() {
        return httpRequest.axiosInstance.get('/truckStatus');
    }

    createTruck(params: any) {
        return httpRequest.axiosInstance.post('/trucks', params);
    }

    getTrucks() {
        return httpRequest.axiosInstance.get('/trucks');
    }

}