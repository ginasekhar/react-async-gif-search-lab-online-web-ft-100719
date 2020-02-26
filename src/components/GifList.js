import React, {Component} from "react"


class GifList extends Component {

  constructor(props) {
    super()
    this.state = {
      nothing: ""
    }
  }
  
  render() {
    const imgList = this.props.gifList.map(gif => 
      { return <li key={gif.id}> <img src={gif.url} alt="something" /> </li>} );
    
    return (
      <div>
          <ul>
            {imgList}
          </ul>    
        </div>
    )
  }

}

export default GifList
