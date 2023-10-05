//Define custom error handling class
//Then this error class object can be thrown in other Javascript file
class NotFoundException extends Error {
    constructor(message){
        super(message)
    }
}

module.exports = NotFoundException;
