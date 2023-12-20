import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ApprovedComments = () =>  {
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await axios.get('/api/comments/approved');
          setComments(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchComments();
    }, []);
  
    return (
      <div>
        <h2>Approved Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  