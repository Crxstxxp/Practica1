import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Conexion con la API de backend
  URL = "http://localhost:5000/api/user";

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.URL)
  }

  createUser(product: any): Observable<User> {
    return this.http.post<User>(this.URL, product);
  }

  updateUser(product: any): Observable<User> {
    console.log("ACTUALIZAR: ",product)
    return this.http.put<User>(this.URL, product);
  }

  deleteUser(id: string):Observable<User> {
    return this.http.delete<User>(this.URL+"/"+id)
  }
}
