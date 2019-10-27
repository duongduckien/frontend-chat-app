import axios from 'axios';
import promise from 'promise';

// Config
import * as configData from '../../assets/data/config.json';

export class Middleware {

    public axiosInstance: any;

    constructor() {
        this.createAxios();
        this.instanceAxios();
    }

    createAxios() {
        this.axiosInstance = axios.create({
            baseURL: configData['apiBase'],
            timeout: 6000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        });
    }

    instanceAxios() {

        this.axiosInstance.interceptors.request.use(async (config: any) => {
            return config;
        }, (err: any) => {
            return promise.reject(err);
        });

    }

}