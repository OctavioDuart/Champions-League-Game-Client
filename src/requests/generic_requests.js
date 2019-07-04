import axios from 'axios';
import { HOST, KEY_HEADER } from '../configs';


var headers = {
    'Content-Type': 'application/json',
    'Validation': KEY_HEADER
}


const requests = {

    get_all: async route => {

        let response_api = await axios.get(`${HOST}${route}`,
            { headers: headers }
        );
        return response_api;
    }

};


export default requests;