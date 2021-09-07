
import React from 'react';
import ReactDOM from 'react-dom';
var listOfImages =[];

class App2 extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
        console.log(listOfImages[0])
    }
    
    render(){
        return(
          <div>
              {
                    listOfImages.map(
                      (image, index) =><img key={index} src={image.default} alt="info"></img>
                    )                   
              }
          </div>
        )
    }
}

export default App2;