import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useDispatch } from 'react-redux';
import List from './List';
import '../styles/Form.css';

import { addRate, editRate } from '../../actions/appActions';

const Form = ({
  author = '',
  callback,
  comment = '',
  id,
  rate = 0,
}) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const dispatch = useDispatch();

  const handleChangeAuthor = event =>
    setAuthorInput(event.target.value);

  const handleChangeRate = event =>
    setRateInput(event.target.value);

  const handleCommentChange = event =>
    setCommentInput(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    id 
      ? dispatch(editRate(rateObject))
      : dispatch(addRate(rateObject));

    if (id) {
      callback();
    }
  }

  return (
    <Provider store={store}>
    <form onSubmit={handleOnSubmit}>
      <div className='formAddComment' >
        <label className='labelAuthor'>
          Author:
          <input
            className='labelAuthorInput'
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput} 
          />
        </label>
      </div>
      <div className='formAddComment'>
        <label className='labelForm'>
          Rate:
          <input
            onChange={handleChangeRate}
            type="number"
            value={rateInput} 
          />
        </label>
      </div>
      <div className='formAddComment'>
        <label className='labelComment'>
          Comment:
          <input
            onChange={handleCommentChange}
            type="text"
            value={commentInput} 
          />
        </label>
      </div>
      <button type="submit" className='buttonForm'>
        {id ? 'Edit' : 'Add'}
      </button>
    </form>
    <List />
    </Provider>
  );
};

export default Form;