import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import { actIncrement, actDecrement } from '../../actions';

const mapStateToProps = state => ({
  current: state.current,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => (
    dispatch(actIncrement())
  ),
  onDecrement: () => (
    dispatch(actDecrement())
  ),
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
