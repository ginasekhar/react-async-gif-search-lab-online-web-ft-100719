import React, {Component} from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends Component {
    
  constructor() {
    super()
    this.state = {
      gifList: []
    }
  }
  
         
  fetchGifFromSearch = (data)  => {
      const searchTopic = data.searchString
      let searchURL = `https://api.giphy.com/v1/gifs/search?q=${searchTopic}&api_key=6zt7zkzrxVde1iAmEARE351aHKZenWRg&rating=g&limit=3`
      
    fetch(searchURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not fetch GIFs');
      }
    })
    .then(data => {
      console.log(data.data)
      this.setState(
        { gifList: data.data.map( gif => ({ id: gif.id, url: gif.images.original.url }) ) }
      )
    })
  }
    
  render() {
    return(
      <div>
        <GifSearch handleOnSubmit={this.fetchGifFromSearch} />

        <GifList gifList={this.state.gifList} />  
      </div>    
    )
  }
}

export default GifListContainer
