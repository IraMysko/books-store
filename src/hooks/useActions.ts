import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FilterActionCreators from '../redux/filters/actions';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(FilterActionCreators, dispatch);
}