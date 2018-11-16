import ErrorIterface from "./error.interface"

function JSONError (msg: string, err: any, status?: string | number): ErrorIterface{
    let error: ErrorIterface;

    error = {message: msg, error: {status: "", stack: ""}};
    if (process.env.ONDEV === 'true')
    {
        error.error.status = status ? status : "";
        error.error.stack = err;
    }
    return (error);
}

export default JSONError;
