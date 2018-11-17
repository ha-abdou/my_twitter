import UserInfo from "../interfaces/userInfo.interface";

const emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const fieldRegex: RegExp = /^[a-zA-Z0-9.-]*$/;

function validEmail(email: string): string | null
{
    if (typeof email === "undefined" || email === "")
        return ("Email should not be empty.");
    if (email.length > 32)
        return ("The email should be less then 32 character.");
    if (!emailRegex.test(email))
        return ("Not a valid email.");
    return (null)
}

function validField(field: string, fieldName: string): string | null
{
    if (typeof field === "undefined" || field === "")
        return (fieldName + " should not be empty.");
    if (field.length > 32)
        return ("The " + fieldName + " should be less then 16 character.");
    if (!fieldRegex.test(field))
        return (fieldName + ": only alphbet, numbers, \"-\" and \".\" are alowed");
    return (null);
}

function userValidator(userInfo: UserInfo): Array<string>
{
    let errors: Array<string> = [];
    let error: string | null= "";
    
    error = validEmail(userInfo.email);
    if (error !== null)
        errors.push(error);
    error = validField(userInfo.username, "Username");
    if (error !== null)
        errors.push(error);
    error = validField(userInfo.full_name, "Full name");
    if (error !== null)
        errors.push(error);
    error = validField(userInfo.password, "Password");
    if (error !== null)
        errors.push(error);
    return (errors);
}

export default userValidator;
