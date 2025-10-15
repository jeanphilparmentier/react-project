import React, { Component } from 'react'
import NvPost from '../../composants/Blog/NvPost/NvPost'
import PostModale from '../../composants/Blog/PostModale/PostModale'
import './Blog.css'
import Post from '../../composants/Blog/Post/Post'
import { Consumer } from '../../context/context'

class Blog extends Component {
  state = {
    posts: [],
    selectPostId: null,
    toggle: false,
    selectPostApi: null,
  }

  selectId = (id) => {
    this.setState({ selectPostId: id })
    this.setState({ toggle: true })
    this.setState({ selectPostApi: id + 1 })
  }

  toggleModale = () => {
    this.setState({ toggle: false })
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          auteur={post.auteur}
          titre={post.title}
          clicked={() => this.selectId(post.id)}
        />
      )
    })

    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              <section>
                <NvPost posts={this.state.posts} />
              </section>
              <h2 className="text-center my-5">Choisissez un post ...</h2>
              <PostModale
                id={this.state.selectPostId}
                cache={this.toggleModale}
                toggle={this.state.toggle}
                api={this.state.selectPostApi}
              />
              <section className="Posts">
                {/* {posts} */}
                {value.objPosts.posts.length > 0 &&
                  value.objPosts.posts.map((post, index) => (
                    <Post
                      key={post.id}
                      auteur={post.auteur}
                      titre={post.title}
                      clicked={() => this.selectId(index)}
                    />
                  ))}
              </section>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Blog
