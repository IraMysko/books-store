import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FilterActionCreators from '../redux/filters/actions';
// import * as SetBooksActionCreators from '../redux/reduxSetBooks/actions';

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(FilterActionCreators, dispatch)

}