import ip from "ip";
import App from "./app";
import http from "http";

const app = new App().app;
/**
 * get port
 */
const port: string | boolean = normalizePort(process.env.PORT || "80");
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string): string | boolean {
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return (val);
    }
    if (port >= 0){
        return (port.toString());
    }
    return (false);
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            process.stdout.write(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            process.stdout.write(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    process.stdout.write("Listening on " + bind + "\n");
}
