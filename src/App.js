import React, {useState, useEffect} from 'react';
import { Heading } from './components/Heading';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage'; ///old

import InfiniteScroll from 'react-infinite-scroll-component';
 
import axios from 'axios';///old unsplash
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';




// style
const GlobalStyle = createGlobalStyle`
 * {
   
   box-sizing: border-box;
 }

 body {
   font-family: sans-serif;
 }

 img {

  height: auto;

  max-width: 100%;

}
`;

//mobile should be padding-bottom: 200 px:
const WrapperImage = styled.section`
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));

padding-bottom: 200 px:
grid-auto-rows: 500px;



  

  

`; 



function App() {
  const importAll = (r) => {
    return r.keys().map(r);

  }



  
  const listOfImages = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));


  
   useEffect(() => {
    fetchImages();
  }, [])

    const fetchImages = () => {
      listOfImages.map(
        (image, index) =><img key={index} src={image.default} alt="info"></img>
      ) 
    };
      

  



  return (
    <div className="App">
     <Heading />
     <GlobalStyle />
     <InfiniteScroll
       dataLength={listOfImages.length}
       next={fetchImages}
       hasMore={true}
       loader={<Loader />}
      >
     
   
     <WrapperImage>
       
     {
       
                    listOfImages.map(
                      (image, index) =><img key={index} src={image.default} alt="info"></img>
                    )                   
              }
     
    
     </WrapperImage>
     </InfiniteScroll>
    </div>
  );
}

export default App;
