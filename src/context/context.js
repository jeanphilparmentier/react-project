import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      }
    case 'ADD_CONTACT':
      return {
        contacts: [action.payload, ...state.contacts],
      }
    case 'ADD_POST':
      return {
        objPosts: (state.objPosts = {
          posts: [...state.objPosts.posts, action.payload],
          selectPostId: null,
          toggle: false,
        }),
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: 'John Doe',
        email: 'john@gmail.com',
        tel: '555-555-5555',
      },
      {
        id: 2,
        nom: 'Jane Doe',
        email: 'jane@gmail.com',
        tel: '555-555-5555',
      },
      {
        id: 3,
        nom: 'Jay Dilla',
        email: 'dilla@gmail.com',
        tel: '555-555-5555',
      },
    ],
    objPosts: {
      posts: [],
      selectPostId: null,
      toggle: false,
    },
    dispatch: (action) => {
      this.setState((state) => reducer(state, action))
    },
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const articles = response.data.slice(0, 4)
      const postAuteur = articles.map((post) => {
        return {
          ...post,
          auteur: 'JeeP',
        }
      })
      this.setState((state) => ({
        objPosts: (state.objPosts = {
          posts: postAuteur,
          ...state.objPosts.posts,
          selectPostId: null,
          toggle: false,
        }),
      }))
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
