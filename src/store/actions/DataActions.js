import api from "../../utils/Api"

export const SendFormData = (formData) => async (dispatch) => {
  
    try {
      const res = await api.post("/createContact", formData);
      console.log("send form data api ",formData);
  
      return res;
    } catch (err) {
      throw err;
    }xx
  };
  
  
  export const getAllBlogs = ()=>  async (dispatch)=>{
    
    try {
      const res = await api.get('/getAllBlogs');
      dispatch({type :'GET-ALL-BLOGS', payload:res.data})
    return res;
    } catch (error) {
      throw(error);
    }
  }