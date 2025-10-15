import React, { Component } from 'react'
import axios from 'axios'
import './NvPost.css'
import { Consumer } from '../../../context/context'
import { v1 as uuid } from 'uuid'

class NvPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Hugo',
  }

  postArticle = (dispatch, e) => {
    const nvPost = {
      userId: 1,
      id: uuid(),
      title: this.state.title,
      body: this.state.content,
      auteur: this.state.author,
    }

    // On simule le fait de pouvoir poster (mais ça ne sera pas enregistré dans l'api)
    axios
      .post('https://jsonplaceholder.typicode.com/posts', nvPost)
      .then((response) => {
        // console.log(reponse)
      })
    this.setState({
      title: '',
      content: '',
      author: 'Hugo',
    })
    this.setState((state) => ({
      posts: (state.posts = [nvPost]),
    }))
    dispatch({ type: 'ADD_POST', payload: nvPost })
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="NvPost form-group">
              <h1>Ajouter un Article</h1>
              <label>Titre</label>
              <input
                className="form-control"
                type="text"
                value={this.state.title}
                onChange={(event) =>
                  this.setState({ title: event.target.value })
                }
              />
              <label>Contenu</label>
              <textarea
                className="form-control"
                rows="4"
                value={this.state.content}
                onChange={(event) =>
                  this.setState({ content: event.target.value })
                }
              />
              <label>Auteur</label>
              <select
                className="form-control"
                value={this.state.author}
                onChange={(event) =>
                  this.setState({ author: event.target.value })
                }
              >
                <option value="Hugo">Hugo</option>
                <option value="Juliette">Juliette</option>
                <option value="John">John</option>
              </select>
              <button
                className="btn btn-success my-3"
                onClick={this.postArticle.bind(this, value.dispatch)}
              >
                Ajouter un Article
              </button>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default NvPost
