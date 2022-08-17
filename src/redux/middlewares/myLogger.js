import rootReducer from "../rootReducer";

//middleware follows the currying format
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);
    
    const upcomingValue = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming: ${JSON.stringify(upcomingValue)}`);

    next(action)

}

export default myLogger;