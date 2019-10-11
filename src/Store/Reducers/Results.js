import * as actionTypes from '../../Actions';

const initialState = {
    results: []
};

const results = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {...state, results: state.results.concat({id: new Date(), value: action.result})};
        case actionTypes.DELETE:
            return {...state, results: state.results.filter(result => result.id !== action.resultElementId)}    
}
return state;

}

export default results; 