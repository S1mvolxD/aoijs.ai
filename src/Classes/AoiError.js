class AoiError extends Error {
    constructor(message, code) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.message = message;
        this.support = 'https://aoi.js.org/invite';
        this.time = new Date().toISOString();
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { AoiError }