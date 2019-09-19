import { DATA_UPDATE, DATA_CREATE } from '../actions/actionTypes';

const INITIAL_STATE = {
    listOfAllData: [
        {
            date: '18-09-19',
            waterGlassesConsumed: 10,
            sleepHours: 8,
            workoutMins: 45,
        },
        {
            date: '17-09-19',
            waterGlassesConsumed: 10,
            sleepHours: 8,
            workoutMins: 45,
        }
    ],
}

export default (state = INITIAL_STATE, action) => {

    // console.log('My reducers');
    if (action.type === DATA_UPDATE) {
        let oldState = {};
        for (var i = 0; i < oldState.length; i++) {
            if (oldState.listOfAllData[i].date == action.payload.date) {
                oldState.listOfAllData[i].waterGlassesConsumed = action.payload.waterGlassesConsumed;
                oldState.listOfAllData[i].sleepHours = action.payload.sleepHours;
                oldState.listOfAllData[i].workoutMins = action.payload.workoutMins;
            }
        }
        return oldState;
    } else if (action.type === DATA_CREATE) {
        let oldState = {};
        oldState.listOfAllData = state.listOfAllData;
        oldState.listOfAllData.push(action.payload)
        return oldState;
    } else {

        return state;
    }
    // switch (action.type) {
    //     case DATA_CREATE:
    //     oldState.listOfAllData = state.listOfAllData;
    //     oldState.listOfAllData.push(action.payload)
    // return oldState;

    //     // case DATA_UPDATE:
    //     //     for (var i = 0; i < oldState.length; i++) {
    //     //         if (oldState.listOfAllData[i].date == action.payload.date) {
    //     //             oldState.listOfAllData[i].waterGlassesConsumed = action.payload.waterGlassesConsumed;
    //     //             oldState.listOfAllData[i].sleepHours = action.payload.sleepHours;
    //     //             oldState.listOfAllData[i].workoutMins = action.payload.workoutMins;
    //     //         }
    //     //     }

    //     default: return state;

    // }
}