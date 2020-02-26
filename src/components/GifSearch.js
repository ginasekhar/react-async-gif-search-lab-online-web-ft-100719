import React, {Component} from "react"

class GifSearch extends Component {
  constructor(props) {
    super()
    this.state = {
      searchString: ""
    }
  }

  handleChange = (e) => {
      e.preventDefault()
      
      this.setState({
        searchString: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleOnSubmit(this.state)
      this.setState({
        searchString: ""
      })
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit} >
              <label>Search string</label>
              <input type="text" name="searchstring" value={this.state.searchString} onChange={this.handleChange} /><br></br>

              <input type="submit"/>
          </form>
      )
  }
}

export default GifSearch