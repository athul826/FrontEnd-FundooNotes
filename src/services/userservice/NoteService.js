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
    UpdateNotes(reqData) {
        let token = localStorage.getItem('token')
        console.log(token)
        let authOption = {
          headers: {
            'Authorization': "Bearer " +token, 
            'content-Type': 'application/json'
          }
        }
        return AxiosService.prototype.postService('updateNotebyid', reqData, true, authOption)
      }

      deleteNote(reqData) {
        let token = localStorage.getItem('token')
        console.log(token)
        let authOption = {
          headers: {
            'Authorization': "Bearer " +token, 
            'content-Type': 'application/json'
          }
        }
        return AxiosService.prototype.postService('trashNoteById', reqData, true, authOption)
      }

      archiveNote(reqData) {
        let token = localStorage.getItem('token')
        console.log(token)
        let authOption = {
          headers: {
            'Authorization': "Bearer " +token, 
            'content-Type': 'application/json'
          }
        }
        return AxiosService.prototype.postService('archivenote', reqData, true, authOption)
      }

      colourNote(reqData) {
        let token = localStorage.getItem('token')
        console.log(token)
        let authOption = {
          headers: {
            'Authorization': "Bearer " +token, 
            'content-Type': 'application/json'
          }
        }
        return AxiosService.prototype.postService('colournote', reqData, true, authOption)
      }
}