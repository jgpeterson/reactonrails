import React, {Component} from 'react'
import axios from 'axios'

class Artist extends Component {

    state = {
        artist: {}
    }

    async componentWillMount() {
        try {
            const artistId = this.props.match.params.artistId
            const response = await axios.get(`/api/artists/${artistId}`)

            this.setState({artist: response.data})

        } catch(error) {
            console.log(error)
        }

    }
    render() {
        return (
            <div>
                <div>
                {this.state.artist.name}                    
               </div>
                <div>
                {this.state.artist.nationality}
                </div>
                <div>
                <img src={this.state.artist.photo_url} />
                </div>
 
               {/* <pre>{JSON.stringify(this.state.artist)}</pre> */}
            </div>
        )
    }
 }
 
 export default Artist
    

