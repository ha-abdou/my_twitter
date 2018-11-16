
interface ErrorIterface{
    message: string,
    error: { status: string | number, stack: any}
}

export default ErrorIterface;