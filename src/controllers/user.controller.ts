import { ConnectionPoolInstance } from "../helper/db-config.helper";

class UserController {

    getUserList = async (request: any, response: any): Promise<any> => {
        return (await ConnectionPoolInstance.getInstance())
            .query('select * from tblUser')
            .then((result: any) => {
                return response.status(200).json(result.recordset);
            })
            .catch((err: any) => {
                return response.status(500).json(err.message);
            })
    }


    getUser = async (request: any, response: any): Promise<any> => {
        console.log("userid"+request.params.id )
        return (await ConnectionPoolInstance.getInstance())
            .query(`select * from tblUser where UserId=`+request.params.id)
            .then((result: any) => {
                return response.status(200).json(result.recordset);
            })
            .catch((err: any) => {
                console.log(err.message);
                return response.status(500).json(err.message);
            })
    }

}

export default new UserController();