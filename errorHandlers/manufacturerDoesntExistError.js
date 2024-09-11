module.exports = 
class manufacturerDoesntExistError extends Error {
    constructor() {
        super();
        this.message = "That manufacturer does not exist";
    };
}