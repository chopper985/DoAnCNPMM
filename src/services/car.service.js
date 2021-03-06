const carModel = require('../models/car.model');
const BaseService = require('../services/baseService');

class CarService extends BaseService {
    constructor() {
        super(carModel);
    }
    async createCar(payload) {
        try {
            const result = await this.create(payload);
            return result;
        } catch (e) {
            return null;
        }
    }
    async getAllCar() {
        try {
            const result = await this.findAll();
            console.log(result);
            return result;
        } catch (e) {
            return null;
        }
    }
    async getCar(id) {
        try {
            const result = await this.findById(id);
            return result;
        } catch (e) {
            return null;
        }
    }
    async deleteCar(id) {
        try {
            const result = await this.findByIdAndRemove(id);
            return result;
        } catch (e) {
            return null;
        }
    }
    async searchCompanyCar(filter = {}) {
        try {
            const result = await this.search(filter);
            return result;
        } catch (e) {
            return null;
        }
    }
    async searchCarName(filter = {}) {
        try {
            const result = await this.search(filter);
            return result;
        } catch (e) {
            return null;
        }
    }
    async updateCar(id, item) {
        try {
            const result = await this.findByIdAndUpdate(id, item);
            return result;
        } catch (e) {
            return null;
        }
    }
}
module.exports = new CarService();
