import logo from './logo.svg';
import volcano from './krakatoa.jpeg';
import gentleGiant from './gentleGiant.jpeg';
import duck from './duck.webp';
import frog from './frog.webp';
import './App.css';
import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Visualizer from './Visualizer';
import PassageCards from './PassageCards'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  HashRouter,
  Route, Routes,
} from "react-router-dom";



// update array on unselect, unsplash API, edge cases: when the user doesn't select an image, only get visualizer to pop up on hover
// beautify the "done selecting" button
// extra - make a home page 

const volcanoParagraph = "Krakatoa (Gunung Krakatau) is a volcanic island between Java and Sumatra. The eruption of mount Krakatoa in August 26-27 in 1883 was among the most violent volcanic events in modern and recorded history. The eruption was equivalent to 200 megatons of TNT—about 13,000 times the nuclear yield of the atomic bomb that devastated Hiroshima. The cataclysmic explosion was distinctly heard as far away as Perth in Western Australia, about 1,930 miles (3,110 km) away. In 1927, eruptions caused smaller Anak Krakatau (“Child of Krakatoa”) to rise from the sea, and the emerging volcanic island continues to grow at an average rate of 7 meters per year. The latest eruption of Anak began in 2008 April and continues today."
const frogParagraph = "The blue poison dart frog (Dendrobates tinctorius \"azureus\") is unquestionably beautiful—like sapphire. And similar to a precious gemstone, this species of frog is one of nature’s unique treasures, found only in the tropical forests that border the Sipaliwini Savanna of southern Suriname and extend into northern Brazil. As its bright warning coloration and common name suggest, the blue poison dart frog is poisonous, secreting a toxic substance through its skin. It is further distinguished by its physique, having long arms and a hunched back. Every individual of the species has a distinct pattern of black spots on its back and sides, a sort of fingerprint that can be used to tell them apart."
const duckParagraph="Mallard ducks are the most common and recognizable wild ducks in the Northern Hemisphere. You'll find mallard ducks near ponds, marshes, streams, and lakes, where they feed on plants, invertebrates, fish, and insects. Mallards are dabbling, or surface-feeding, ducks because they eat by tipping underwater for food—head down, feet and tail in the air—rather than diving. Mallards also forage and graze for food on land. The male mallard duck, called a drake, sports a glossy green head, a white ring around its neck and a rich, chestnut-brown breast. The mottled brown female mallard looks downright dull next to the male's showy feathers. The mallard duck's outer feathers are waterproof, thanks to oil that’s secreted from a gland near the tail. "
const gentleGiantParagraph = "Astronomers announced on Thursday that they had pierced the veil of darkness and dust at the center of our Milky Way galaxy to capture the first picture of “the gentle giant” dwelling there: a supermassive black hole, a trapdoor in space-time through which the equivalent of four million suns have been dispatched to eternity, leaving behind only their gravity and violently bent space-time."
const Access_Key = 'rnlTYIW5DUj9p94sNFM5_XsF2dQq9xj2L46Zqm29hm8';
const Secret_Key = 'wZxtS1_nL2HNvdYSsUzwawsFbemROWfhyq4IZd3tud8';

const colorArray = ['red', 'orange', 'green', 'blue', 'pink', 'raspberry', 'lavender', 'violet', 'magenta', 'blue-green']


class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={

      }
    }
  

  
  render(){
    return (
      <div>
         <h1 className="mainTitle">Visualizer</h1>
        <Routes>
      <Route exact path='/' element={<PassageCards/>}/>
      <Route path='/volcano' element={<Visualizer text={volcanoParagraph}/>}/>
      <Route path='/discovery' element={<Visualizer text={gentleGiantParagraph}/>}/>
      <Route path='/duck' element={<Visualizer text={duckParagraph}/>}/>
      <Route path='/frog' element={<Visualizer text={frog}/>}/>
    </Routes>
      </div>
       
   
  );
}
}



export default App;
