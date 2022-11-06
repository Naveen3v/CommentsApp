// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, likeChanged, itemDeleted} = props
  const {username, textarea, display, id} = details

  const changeLike = () => {
    likeChanged(id)
  }

  const deleteItem = () => {
    itemDeleted(id)
  }

  return (
    <li className="listitem">
      <div className="imagecont">
        <img src="" alt="profile" className="bimage" />

        <div className="textcont">
          <div className="date">
            <h1 className="cheading">{username}</h1>
            <p className="datepara">{formatDistanceToNow(new Date())} ago</p>
          </div>
          <p className="cpara">{textarea}</p>
        </div>
      </div>
      <div className="likecont">
        <div className="likecontainer">
          <button type="button" className="cbtn" onClick={changeLike}>
            {display ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
                className="likeimg"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
                className="likeimg"
              />
            )}
          </button>
          {display ? <p>Like</p> : <p>Liked</p>}
        </div>
        <button type="button" id="delete" className="cbtn" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="likeimg"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
