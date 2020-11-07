import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  public getCadastros(){
    return this.httpClient.get('http://localhost:3000/api/todo/');
  }
  public postCadastros(cadastros){
    return this.httpClient.post('http://localhost:3000/api/todo', cadastros);
  }
}
