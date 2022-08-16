import { connect } from 'react-redux';
import Options from './Options';
import { selectedOptionsList } from './options.selectors';
import { toogleOption } from './options.actions';

const mapState = state => {
  return {
    options: selectedOptionsList(state),
  };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
