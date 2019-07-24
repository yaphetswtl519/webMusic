const http = require('http');
const path = require('path');
class Boot {
    constructor() {
        this.apps = {};
    }
    init(app) {
        this.app = app;
    }
    initService() {
        this.service = this.app.service = {};
    }
    listen() {
        const server = http.createServer(this.app.callback());
        server.listen(this.app.config.PORT, () => {
            console.log(`listen port is ${this.app.config.PORT}`);
        });
    }
    config() {
        this.app.config = {
            PORT: 8080
        };
    }
    start() {
        this.config();
        this.initService();
        this.listen();
    }
}
module.exports = new Boot();