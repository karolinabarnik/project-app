import { useState } from 'react';
import '../styles/Element.css';
import Form from './Form';

const Element = ({author, comment, id, rate}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm(prev => !prev);

  const formOrButtonElement = isVisibleForm
    ? (
      <Form
        author={author}
        callback={toggleElements}
        comment={comment}
        id={id}
        rate={rate}
      />
    ) : (
      <button 
      onClick={toggleElements}
      className='buttonElement'>
        Edit 
      </button>
    );

  return (
    <ul className='listElement'>
      <p className='authorElement'>Author: {author}</p>
      <p className='rateElement'>Rate: {rate}</p>
      <p className='commentElement'>Comment: {comment}</p>
      {formOrButtonElement}
    </ul>
  );
};

export default Element;