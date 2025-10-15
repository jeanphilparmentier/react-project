import React, { Component } from 'react'
import axios from 'axios'
import './PostModale.css'
import { Consumer } from '../../../context/context'

class PostModale extends Component {
  state = {
    loadedPost: null,
  }

  componentDidUpdate() {
    // Pourquoi inférieure ou égale à 3? Pour garder un exemple
    // d'utilisation de axios.get(). L'API jsonplaceholder permet de récupérer des posts mais pas d'en enregistrer (le post est simulé)
    // Dans les autres cas on va lire notre state tout simplement
    if ((this.props.id && this.props.id <= 3) || this.props.id === 0) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.api)
      ) {
        axios
          .get('https://jsonplaceholder.typicode.com/posts/' + this.props.api)
          .then((response) => {
            this.setState({
              loadedPost: response.data,
            })
          })
      }
    }
  }

  render() {
    if ((this.props.id && this.props.id <= 3) || this.props.id === 0) {
      return this.state.loadedPost && this.props.toggle ? (
        <div className="PostComplet">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <button
            className="btn btn-danger my-3 btnPost"
            onClick={this.props.cache}
          >
            Fermer
          </button>
        </div>
      ) : null
    } else if (this.props.api) {
      return (
        <Consumer>
          {(value) => {
            return this.props.toggle ? (
              <div className="PostComplet">
                <h1>{value.objPosts.posts[this.props.id].title}</h1>
                <p>{value.objPosts.posts[this.props.id].body}</p>
                <button
                  className="btn btn-danger my-3 btnPost"
                  onClick={this.props.cache}
                >
                  Fermer
                </button>
              </div>
            ) : null
          }}
        </Consumer>
      )
    } else {
      return null
    }
  }
}
export default PostModale
