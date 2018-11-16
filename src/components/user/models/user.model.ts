import UserInfo from "../interfaces/userInfo.interface";

class User{

    static isLogin(uuid: string): boolean
    {
        return (false);
    }

    static new(userInfo: UserInfo)
    {
        const q = new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(1, {data: "saved"});
            }, 1000)
        });
        return (q)
    }
}

export default User;