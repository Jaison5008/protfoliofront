import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";   

import axios from 'axios' ;

const url= 'https://profileback.onrender.com';  

export const addUserThunk= createAsyncThunk('post/addUserThunk',async(add,{rejectWithValue})=>{

 try{  
    const response= await axios.post(`${url}/post`,add); 
    console.log(response)
    
    return response.data
    }catch(error){  
    return rejectWithValue({error:error.response.data.error})
 } }
)   



   


const initialState={  
    userList:[],
    
    isLoading:false, 
    isErorr:'', 
    
    
}

const userSlice=createSlice({  
    name:'user',
    initialState,

reducers:{   
    
   
},
extraReducers:(builder)=>{
builder
.addCase(addUserThunk.pending,(state,action)=>{ 
    state.isLoading=true; 
    
})
.addCase(addUserThunk.fulfilled,(state,action)=>{  
    
    state.isLoading=false; 
    state.userList.push(action.payload);
    state.isErorr=''; 
})
.addCase(addUserThunk.rejected,(state,action)=>{   
    
    state.isLoading=false; 
    state.userList=[];
    state.isErorr=action.payload.error;
})  

} 
})
export default userSlice.reducer;