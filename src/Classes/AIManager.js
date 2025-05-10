const { Functions } = require('./Functions.js');
const { AoiError } = require('./AoiError.js');
const { join } = require('node:path');


class AIManager {
    constructor(client, options = {}) {
        if (!client) throw new AoiError('Client instance is not defined.', 'AOI_CLIENT_INVALID');

        options.key = options.key;

        this.client = client;

        new Functions(this.client, join(__dirname, '..', 'functions'), options.debug);
    }
}

module.exports = { AIManager }