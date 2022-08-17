import { connect } from 'react-redux';
import Options from './Options';
import { toogleOption } from './options.actions';
import { availableOptionsList } from './options.selectors';

const mapState = state => {
  return {
    options: availableOptionsList(state),
  };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
