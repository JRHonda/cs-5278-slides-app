import React from 'react';
import 'gh-pages';

class App extends React.Component {

    state =  {
        list: []
    };

    handleRes = (r) => {

        let link = document.createElement('img');
        let blob = new Blob([r], {type: 'text/png'});

        link.href = URL.createObjectURL(blob);

        this.setState(state => {
            const list = state.list.concat(link.href);
            return {
                list,
                value: '',
            };
        });
    }

    getImages = () => {

        var i;
        for(i = 1; i < 12; i++) {

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = `https://github.com/JRHonda/cs-5278-slides/blob/master/week-7-slide-${i}.png?raw=true`

        fetch(proxyUrl + targetUrl)
            .then( response => response.blob() )
            .then( blob =>{
                var reader = new FileReader() ;
                var res = '';
                reader.onload = function(){ res = this.result; } ; // <--- `this.result` contains a base64 data URI
                console.log(res);
                this.handleRes(blob);

                reader.readAsDataURL(blob) ;
            }) ;


        }

    }

    componentDidMount = () => {
        this.getImages();
    }

    render() {
        return (

            <div>
                <h1 style={{fontSize: '32px'}}>Week 7</h1>
                {this.state.list.map(slide => (
                    <img className={"ui container image"} src={slide} alt={""} />
                ))}

            </div>

        );
    }
}

export default App;