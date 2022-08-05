import AxiosService from "../AxiosService/AxiosService";

export default class NoteService { 
    //call from login component
    
    createNoteService(reqPayload) {
        let token = localStorage.getItem('token')    
        console.log(token);
        //console.log(reqPayload);
        
        let httpHeaders = {
            
            headers: {
                
                'Authorization': "Bearer " +token,
                'Content-type':'application/json'
            }
        } 
        return AxiosService.prototype.postService('createNote',reqPayload,true,httpHeaders)
    }

    getAllNoteService(reqPayload) {
        let token = localStorage.getItem('token')
        console.log(reqPayload);
        let httpHeaders = {
            headers: {
                'Authorization': "Bearer " +token,
                'Content-type': 'application/json'
            }
        }
        return AxiosService.prototype.getService('getAllNotes', true, httpHeaders)
    }
}