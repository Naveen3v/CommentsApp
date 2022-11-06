import './index.css'
import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    username: '',
    textarea: '',
    commentList: [],
    display: true,
    count: 0,
  }

  likeChanged = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, display: !each.display}
        }
        return each
      }),
    }))
  }

  itemDeleted = id => {
    const {commentList} = this.state
    const filterList = commentList.filter(each => id !== each.id)
    this.setState(prevState => ({
      commentList: filterList,
      count: prevState.count - 1,
    }))
  }

  submitForm = event => {
    event.preventDefault()
    const {username, textarea} = this.state
    const newComment = {
      id: uuidv4(),
      username,
      textarea,
      display: true,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      count: prevState.count + 1,
      username: '',
      textarea: '',
    }))
  }

  changeName = event => {
    this.setState({username: event.target.value})
  }

  changeText = event => {
    this.setState({textarea: event.target.value})
  }

  render() {
    const {username, textarea, commentList, count, display} = this.state
    return (
      <div className="container">
        <h1 className="heading">Comments</h1>
        <div className="inner">
          <form className="formcont" onSubmit={this.submitForm}>
            <p className="para">Say something about 4.O Technologies</p>
            <input
              type="name"
              value={username}
              placeholder="Your Name"
              onChange={this.changeName}
            />
            <textarea
              value={textarea}
              placeholder="Your Comment"
              className="formtext"
              onChange={this.changeText}
            >
              {textarea}
            </textarea>
            <button type="submit" className="formbtn">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="line" />
        <p className="bpara">
          <span className="span">{count}</span> Comments
        </p>
        <ul className="listcont">
          {commentList.map(each => (
            <CommentItem
              details={each}
              key={each.id}
              likeChanged={this.likeChanged}
              itemDeleted={this.itemDeleted}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
