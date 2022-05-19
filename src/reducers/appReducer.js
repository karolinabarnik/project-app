import { ADD, EDIT, DELETE } from '../actions/appActions';

export const appReducer = (state = [], action ) => {
    switch (action.type) {
        case ADD:
            return [ ...state, action.payload];
        case EDIT:
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement;
                }

                const {author, comment, rate} = action.payload

                return ({
                    author,
                    comment,
                    id: rate.id,
                    rate,
                });
            });
        case DELETE:
            return state.filter(currentStateElement =>
                currentStateElement.id !== action.payload.id );

        default:
            console.warn(`We don't have actions type: ${action.type}`);
            return state;
    }
}

