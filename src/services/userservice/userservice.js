 import AxiosService from '@/services/AxiosService/AxiosService'
 export default class userService {
     loginservice(reqPayload) {

     console.log(reqPayload);
     let httpHeaders = {
        headers : {
            'Content-type' : 'application/json'
        }

     }
    
     return AxiosService.prototype.postService('login',reqPayload,false,httpHeaders)
   }
   registrationService(reqPayload) {
    console.log(reqPayload);
    let httpHeaders = {
      headers : {
        'Content-type' : 'application/json'
      }
    }
    return AxiosService.prototype.postService('register',reqPayload,false,httpHeaders)
   }
   forgetPasswordService(reqPayload) {
    console.log(reqPayload);
    let httpHeaders = {
      headers : {
        'Content-type' : 'application/json'
      }
      }
      return AxiosService.prototype.postService('forgotPassword',reqPayload,false,httpHeaders)
 }
 resetPasswordService(reqPayload) {
  console.log(reqPayload);
  let httpHeaders = {
    headers : {
      'Content-type' : 'application/json'
    }
    }
    return AxiosService.prototype.postService('resetPassword',reqPayload,false,httpHeaders)
}
}
 