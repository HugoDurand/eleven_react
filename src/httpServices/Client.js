import axios from 'axios';

export class Client {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getPlanetes() {
        return axios.get(`${this.baseUrl}/api/planete`);
    }

    getPlaneteDetail(id) {
        return axios.get(`${this.baseUrl}/api/planete/${id}`);
    }

    deletePlanete(id) {
        return axios.delete(`${this.baseUrl}/api/planete/${id}`);
    }

    updatePlanete() {

    }


    createPlanete(planete) {

        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            }
          };

        return axios.post(`${this.baseUrl}/api/planete`, {planete}, config);
    }

}