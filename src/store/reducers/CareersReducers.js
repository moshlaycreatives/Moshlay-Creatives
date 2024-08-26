const initialvalue ={
 jobs:[],
}


const CareersReducers = (state= initialvalue , action)=>{
switch (action.type) {
    case 'GET-CAREERS-JOB':
        return {
            ...state,
            jobs : action.payload,
        }
        // return careersJob;
    default:
        return state;
}

}

export default CareersReducers;