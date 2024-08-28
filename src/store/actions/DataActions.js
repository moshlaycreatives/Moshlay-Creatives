import api from "../../utils/Api"

export const SendFormData = (formData) => async (dispatch) => {
  
    try {
      const res = await api.post("/createContact", formData);
      console.log("send form data api ",formData);
  
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  
  // export const getAllBlogs = ()=>  async (dispatch)=>{
    
  //   try {
  //     const res = await api.get('/getAllBlogs');
  //     dispatch({type :'GET-ALL-BLOGS', payload:res.data})
  //     // console.log('payload data get blog api ', dispatch({type :'GET-ALL-BLOGS', payload:res.data}))
      
  //   return res;
  //   } catch (error) {
  //     throw(error);
  //   }
  // }

  export const getAllBlogs = () => async (dispatch) => {
    dispatch({ type: 'GET-ALL-BLOGS-REQUEST' }); // Dispatch request action
  
    try {
      const res = await api.get('/getAllBlogs');
      console.log('Fetched blogs:', res?.data); // Log fetched data
  
      dispatch({ type: 'GET-ALL-BLOGS', payload: res?.data });
      // console.log('data send to reducer', dispatch({ type: 'GET-ALL-BLOGS', payload: res.data }))
    } catch (error) {
      console.error('Fetch blogs error:', error);
      dispatch({ type: 'GET-ALL-BLOGS-FAILURE', payload: error.message });
    }
  };

  export const SendBlogsId = (blogId)=> async (dispatch)=>{
    const res = await api.get(`/getBlogId/${blogId}`)
    dispatch({type:'SEND-BLOGS-ID', payload:res?.data})
    try {
      return res;
    } catch (error) {
      throw err;
      
    }
  }


  export const GetCareersJob = ()=> async (dispatch)=>{
    const res = await api.get('/getAllJobs')
    dispatch({type:'GET-CAREERS-JOB', payload:res.data})
    try {
      return res;
    } catch (error) {
      throw err;
      
    }
  }

  export const SendJobId = (jobId)=> async (dispatch)=>{
    const res = await api.get(`/getJobById/${jobId}`)
    console.log('api res res re s', res)
    // dispatch({type:'SEND-BLOGS-ID', payload:res.data})
    try {
      return res;
    } catch (error) {
      throw err;
      
    }
  }

  export const ApplyCareersJob = (formData) => async (dispatch) => {
  
    try {
      const res = await api.post("/applyNow", formData);
      // console.log("send job apply  data api ",formData);
      // console.log("send job apply  data api ",res);
      return res;
    } catch (err) {
      console.log("eireireier", err)
      throw err;
    }xx
  };
  