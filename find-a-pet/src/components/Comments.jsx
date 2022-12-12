import React from 'react'
import { DestroyComment } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Comments = ({id, listingId, comment, getComments}) => {

    let navigate = useNavigate()

    const handleDelete = async () => {
        await DestroyComment({id})
         getComments()
       }
     
    return (
    <div className='comment-container'>
      <div className='comment-options'>
        
          <button className='comment-link' onClick={() => navigate(`/listing/${listingId}`)}>Edit</button>

        <span className='comment-link-divider'>|</span>
        <button onClick={handleDelete}  className='comment-link'>Delete</button>
      </div>
      <div className='comment-text'> 
        {/* <h2 className='comment-title'>{title}</h2> */}
        <h3 className='comment-comment'>{comment}</h3>
        </div>
        <div className='comment-options'> 
        {/* <button onClick={addLike} id="like" className='comment-likes comment-rating'><img src="https://i.imgur.com/CRdu26D.png" alt="thumbs up" width="20px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <button onClick={addDislike} id="dislike" className='comment-dislikes comment-rating'><img src="https://i.imgur.com/irBnQgk.png" alt="thumbs down" width="20px" />&nbsp;&nbsp;</button> */}
        
        </div>
    </div>
  )
}

export default Comments