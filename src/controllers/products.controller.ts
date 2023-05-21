const {writeFile,readFile} = require('fs')
const {promisify} = require('util')
 
const readFileasync = promisify(readFile);
const writeFileasync = promisify(writeFile);


class ProductsController {

    getMensWatchesList = async (request: any, response: any): Promise<any> => {
        try {
            const data = await readFileasync('./src/data/menswatch.txt','utf-8');
            const mensWatchList =JSON.parse(data);
            return response.status(200).json(mensWatchList);
        } catch (e: any) {
            return response.status(500).json(e.message);
        }

    }




}

export default new ProductsController();