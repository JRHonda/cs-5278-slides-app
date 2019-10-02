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

        console.log(link.href);

        this.setState(state => {
            const list = state.list.concat(link.href);
            return {
                list,
                value: '',
            };
        });
    }

    getImages = async () => {

        var i;
        for(i = 1; i < 98; i++) {

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            //targetUrl ='https://github.com/JRHonda/cs-5278-slides/blob/master/cs5278-week-7-slides-pdf.pdf?raw=true';
            targetUrl = `https://github.com/JRHonda/cs-5278-slides/blob/master/week-7-slide-${i}.png?raw=true`;

        await fetch(proxyUrl + targetUrl)
            .then( response => response.blob() )
            .then( blob =>{
                var reader = new FileReader() ;
                var res = '';
                reader.onload = function(){ console.log(this.result); res = this.result; } ; // <--- `this.result` contains a base64 data URI
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
                <h1 className={"ui segment blue"} style={{fontSize: '80px', display: 'flex', justifyContent: 'center', backgroundColor: 'lightgrey'}}>Week 7</h1>
                {this.state.list.map(slide => (
                    <img key={Math.random().toString(36).substr(2, 16)} className={"ui container image"} src={slide} alt={""} />
                ))}

            </div>

        );
    }
}

export default App;