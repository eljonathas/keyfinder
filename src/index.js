import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.scss';
import {Instrument, selectedKeys} from './components/instrument';

class Tools extends React.Component {
    render(){
        switch(this.props.tool){
            case 'keyboard':
                return <Instrument></Instrument>;
            case 'audio':
                return false;
            default:
                return false;
        }
    }
}

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            tool: 'keyboard'
        }
        this.sendContent = this.sendContent.bind(this);
    }

    componentDidMount (){
        let buttonSend = document.querySelector('.ap3995kf');        
        buttonSend.addEventListener('click', this.sendContent);
    }

    sendContent() {
        console.log(selectedKeys);
    }

    render () {
        return (
            <div className="ap0469d wrapper">
                <div className="container ap2093h header">
                    <div className="row app-viewer-icon aep3043">
                        <span className="img extend ap3is4d"></span>
                    </div>
                </div>
                <div className="container ap3959k keyboard">
                    <div className="row">
                        <div className="header">
                            <h1>MARQUE AS NOTAS PARA IDENTIFICAR O ACORDE <i className="kfi kfi-wink"></i></h1>
                        </div>
                    </div>
                    <Tools tool={this.state.tool}></Tools>
                    <div className="row actions justify-content-end">
                        <div className="col-sm-3 play-keys">
                            <p><i className="kfi kfi-speaker"></i> Tocar as notas</p>
                        </div>
                        <div className="col-sm-3 remove-keys">
                            <p><i className="kfi kfi-trash"></i> Limpar seleção</p>
                        </div>
                    </div>
                    <div className="button-env ap3995kf">
                        <div className="inner">
                            VERIFICAR
                        </div>
                    </div>
                </div>
                <div className="container ap3044g change-instrument">
                    <div className="row header">
                        <p>ESCOLHA A FERRAMENTA</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-1 btn pianoSet active">
                            <i className="kfi kfi-keyboard"></i>
                        </div>
                        <div className="col-sm-1 btn audioSet">
                            <i className="kfi kfi-yt"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));