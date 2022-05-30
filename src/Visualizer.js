
import './Visualizer.css';
import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

// update array on unselect, unsplash API, edge cases: when the user doesn't select an image, only get visualizer to pop up on hover
// beautify the "done selecting" button
// extra - make a home page 

const Access_Key = 'rnlTYIW5DUj9p94sNFM5_XsF2dQq9xj2L46Zqm29hm8';
const Secret_Key = 'wZxtS1_nL2HNvdYSsUzwawsFbemROWfhyq4IZd3tud8';

const colorArray = ['red', 'orange', 'green', 'blue', 'pink', 'raspberry', 'lavender', 'violet', 'magenta', 'blue-green']


class Visualizer extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      highlightedText: '',
      result: [],
      currentColor: '',
      numberPhrasesSelected: -1,
      selectedImagesUrls: [],
      textToDisplay: this.props.text,
      visualizerInfo: [
    
    ]

      }
    }
  


  fetchRequest = async () => {
    const imgQuery =  window.getSelection().toString();
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${imgQuery}&client_id=${Access_Key}&orientation=squarish&per_page=6`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    this.setState({result: result});
  };


  imagePressed = (event) => {

    this.setState({selectedImagesUrls: [...this.state.selectedImagesUrls, event.currentTarget.id]})
    console.log("in image pressed");
    if( document.getElementById("IMG_" + event.currentTarget.id ).style.borderColor === this.state.currentColor)
    {
      document.getElementById("IMG_" + event.currentTarget.id).style.border = 'none';

      // delete from visualSummaryUrls state
    }
    else{
      //this.setState({selectedImagesUrls: [...this.state.selectedImagesUrls, event.currentTarget.id]})
      document.getElementById("IMG_" + event.currentTarget.id).style.borderColor = this.state.currentColor;
      document.getElementById("IMG_" +event.currentTarget.id).style.borderSize = '20px';
      document.getElementById("IMG_" + event.currentTarget.id).style.borderStyle = 'solid';
      
    }


  }
  handleMouseUp = () => {

   
    let selection = window.getSelection();
    let selection_text = selection.toString();

    if(selection_text === "")
    {
        console.log("selected text is empty");
        return;
    }

    let index = this.state.numberPhrasesSelected;
    index += 1
    this.setState({numberPhrasesSelected: index});
    this.setState({highlightedText: selection_text});
    
    var span = document.createElement('SPAN');
    span.textContent = selection_text;
    this.setState({currentColor: colorArray[index]});
    span.classList.add(colorArray[index]); 
    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
    this.fetchRequest();
  };

  doneSelecting = () => 
  {
    console.log(this.state.selectedImagesUrls);
    this.setState(
      {visualizerInfo: [...this.state.visualizerInfo, 
        {color: this.state.currentColor, imageUrls: this.state.selectedImagesUrls}
        ]
      });
    this.setState({selectedImagesUrls: []});
  }
  
  render(){
    return (
    <div className="wrapper">
      <div className="left-side">
        <div className = "paragraph text" onMouseUp={this.handleMouseUp}>
        <h1 class="subtitle">Sample Paragraph</h1>
          <p id="textToDisplay"> {this.state.textToDisplay}</p>
        </div>
        <div className="popup">
          <h1>Select Images to visualize the phrase: </h1>
          <h2>{this.state.highlightedText}</h2>
          {
          this.state.result.map((val) => {
                return (
            <>
            <button onClick={this.imagePressed} className="buttonWrapper" id={val.urls.small}>
                <img
                      className="popup-images"
                      src={val.urls.small}
                      alt="val.alt_description"
                      key={val.urls.small}
                      id={"IMG_" + val.urls.small}
                /> 
            </button>
              </>
              );
            })}
            <button onClick={this.doneSelecting} className="doneButton"> Done Selecting</button>
        </div>
      </div>
      <div className = "side-visualizer">
        <h1 class="subtitle"> Visual Summary</h1>
        {this.state.visualizerInfo.map((val) => {
          return(
            <div className={"visualizer-row " + val.color + "-background"}>
              {val.imageUrls.map((url) => {
                return(<div>

                  <img src={url} className="visualizer-images"/>
                </div>);
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}
}


export default Visualizer;
