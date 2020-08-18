import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(usuario: { login: string; senha: string; }) {

    //console.info(JSON.stringify(usuario))

    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      // tslint:disable-next-line: jsdoc-format
      /**retorno http */

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token",token);
      console.log("token : " + localStorage.getItem("token"))


    }, erroor => {
      console.error("Erro ao fazer login, a senha esta incorreta");
    }
    
    
    
    );

  }

}
