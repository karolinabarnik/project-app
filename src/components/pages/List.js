import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import Element from './Element';
import '../styles/List.css';

const List = () => {
  const rates = useSelector(store => store.rates);
  const ratesElements = rates.map(rate => (
    <Element key={rate.id} {...rate}/>
  ));

  return (
    <ul className='formList'>
      {ratesElements}
    </ul>
  );
};

const connectReduxStateToProps = store => ({
    rates: store.rates,
});

const ListConsumer = connect(connectReduxStateToProps)(List);

export default ListConsumer;