import React from 'react';
import check from './utils/array_utils';

let KeyList = document.getElementsByClassName('k3094pd'),
    pianoAudioList = [],
    selectedKeys = [],
    audio = {};

class Instrument extends React.Component {
    constructor(){
        super();
        this.keyClick = this.keyClick.bind(this);
        this.playNotes = this.playNotes.bind(this);
        this.removeNotes = this.removeNotes.bind(this);
    }

    componentWillMount(){
        for(var i in pianoAudioList){
            audio[pianoAudioList[i].note] = new Audio();
            audio[pianoAudioList[i].note].src = pianoAudioList[i].audio;
        }
    }

    componentDidMount(){
        let $inst_view = document.querySelector('.ap300mf'),
            key_names = document.querySelectorAll('.key-name'),
            // show notes when doc is loaded
            verify = () => {
                setTimeout(() => {
                    $inst_view.classList.add('active')
                }, 200);
            };
        
        // add delay on transitions
        key_names.forEach((_, i) => {
            let keyId   = _.parentElement.getAttribute('key-id'),
                keyName = _.parentElement.getAttribute('key-note');
            _.setAttribute("style", "transition-delay:"+i*60+"ms");
            pianoAudioList.push({note: keyName, audio: 'audio/'+keyId+'.wav'});
        });

        // check when the doc is loaded
        document.addEventListener('DOMContentLoaded', verify);

        // add event listener on keys
        for(let i = 0; i < KeyList.length; i++){
            KeyList[i].addEventListener('click', this.keyClick);
        }

        // add event listener to play keys
        document.querySelector('.play-keys').addEventListener('click', this.playNotes);

        // add event listener to remove keys 
        document.querySelector('.remove-keys').addEventListener('click', this.removeNotes);
    }

    componentWillUnmount(){
        // remove the event listener when component is unmount
        for(let i = 0; i < KeyList.length; i++){
            KeyList[i].removeEventListener('click', this.keyClick);
        }

        document.querySelector('.play-keys').removeEventListener('click', this.playNotes);
        document.querySelector('.remove-keys').removeEventListener('click', this.removeNotes);
    }

    keyClick(e){
        let $element;
        // class check to add active
        if(e.srcElement.className.length === 0){
            $element = e.srcElement.parentElement.parentElement;
        }else if(e.srcElement.className.indexOf('key-name') !== -1){
            $element = e.srcElement.parentElement;
        }else  $element = e.srcElement;
        $element.className.indexOf('active') === -1 ? $element.classList.add('active') : $element.classList.remove('active');

        // capture key-code
        let keyName = $element.getAttribute('key-note'),
            playKeys = document.querySelector('.play-keys');

        if($element.className.indexOf('active' !== -1)){    
            audio[keyName].currentTime = 0;
            audio[keyName].play();
        }

        // add or remove from note array
        check.inArray(selectedKeys, keyName) ? selectedKeys.splice(check.getIndex(selectedKeys, keyName), 1) : selectedKeys.push(keyName);

        // unlock play keys
        selectedKeys.length !== 0 ? playKeys.classList.add('active') : playKeys.classList.remove('active');

    }

    playNotes(){
        let selectedNotes = document.querySelectorAll('.k3094pd');
        selectedNotes.forEach(z => {
            if(z.className.indexOf('active') === -1) return;
            let keyNote = z.getAttribute('key-note');
            audio[keyNote].currentTime = 0;
            audio[keyNote].play();
        });
    }
    
    removeNotes() {
        let selectedNotes = document.querySelectorAll('.k3094pd'),
            playKeys = document.querySelector('.play-keys');
        selectedNotes.forEach(z => {
            z.classList.remove('active');
            playKeys.classList.remove('active');
        });

        selectedKeys = [];
    }

    render(){
        return(
            <div className="row">
                <div className="inst-view ap300mf">
                    <div className="k3094pd key" key-id="1" key-note="C">
                        <div className="key-name"><p>C</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="2" key-note="C#">
                        <div className="key-name"><p>C#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="3" key-note="D">
                        <div className="key-name"><p>D</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="4" key-note="D#">
                        <div className="key-name"><p>D#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="5" key-note="E">
                        <div className="key-name"><p>E</p></div>
                    </div>
                    <div className="k3094pd key" key-id="6" key-note="F">
                        <div className="key-name"><p>F</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="7" key-note="F#">
                        <div className="key-name"><p>F#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="8" key-note="G">
                        <div className="key-name"><p>G</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="9" key-note="G#">
                        <div className="key-name"><p>G#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="10" key-note="A">
                        <div className="key-name"><p>A</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="11" key-note="A#">
                        <div className="key-name"><p>A#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="12" key-note="B">
                        <div className="key-name"><p>B</p></div>
                    </div>
                    <div className="k3094pd key" key-id="13" key-note="C-om">
                        <div className="key-name"><p>C</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="14" key-note="C#-om">
                        <div className="key-name"><p>C#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="15" key-note="D-om">
                        <div className="key-name"><p>D</p></div>
                    </div>
                    <div className="k3094pd key-sharp" key-id="16" key-note="D#-om">
                        <div className="key-name"><p>D#</p></div>
                    </div>
                    <div className="k3094pd key" key-id="17" key-note="E-om">
                        <div className="key-name"><p>E</p></div>
                    </div>
                </div>
            </div>
        );
    };
};

export {Instrument, selectedKeys};