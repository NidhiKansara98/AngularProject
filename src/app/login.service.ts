import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  //Static username and password set on localstorage
  public check_UserandPass(usernm:string, pass:string){
      if(usernm == 'admin' && pass == 'admin'){
        
        localStorage.setItem('username','admin');
        localStorage.setItem('password','admin');
        return true;
      }
      else{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        return false;
      }
  }
}
