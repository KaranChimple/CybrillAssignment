import  {DATA_UPDATE, DATA_CREATE} from './actionTypes';

// export const addWaterGlass = (no_of_glasses, user = "me") => {
//     return {
//       type: ADD_WATER_GLASS,
//       waterGlasses: no_of_glasses,
//       user:user
//     };
//   };

//   export const addSleepHours = (no_of_sleep_hours, user = "me") => {
//     return {
//       type: ADD_SLEEP_HOURS,
//       sleepHours: no_of_sleep_hours,
//       user: user
//     };
//   };

//   export const addWorkoutMins = (workout_mins, user = "me") => {
//     return {
//       type: ADD_WORKOUT_MINS,
//       workoutMins: workout_mins,
//       user: user
//     };
//   };

export default dataUpdate = (no_of_glasses, no_of_sleep_hours, no_of_workout_mins) => {
    const test = new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getYear();
    return {
        type: DATA_UPDATE,
        payload: {
            date: test,
            waterGlassesConsumed: no_of_glasses,
            sleepHours: no_of_sleep_hours,
            workoutMins: no_of_workout_mins,
        }
    }
}

export default dataCreate = () => {
    const test = new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getYear();
    return {        
        type: DATA_CREATE,
        payload: {
            date: test,
            waterGlassesConsumed: 0,
            sleepHours: 0,
            workoutMins: 0,
        }
    }
}