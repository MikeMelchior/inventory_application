module.exports = 
class modelDoesntExistError extends Error {
    constructor() {
        super();
        this.message = "That model does not exist."
    }
}