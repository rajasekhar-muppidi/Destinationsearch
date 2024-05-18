import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <input
          type="search"
          placeholder="search"
          value={searchInput}
          onChange={this.onChangeSearch}
        />
        <ul>
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
