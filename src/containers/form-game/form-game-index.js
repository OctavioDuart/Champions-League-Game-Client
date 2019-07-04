import React , {Component} from 'react';

import Footer from '../../components/footer/footer';
import Requests from '../../requests/generic_requests';



class FormGame extends Component {  

    async componentWillMount(){
        let responseApi = await Requests.get_all('/teams-player');
        console.log(responseApi);
    };


    render() {
        return (
            <>
            <h1>Formulário do jogo aqui ! . </h1>
            <Footer mt={'115%'}/>
            </>
        );
    };
};

export default FormGame;