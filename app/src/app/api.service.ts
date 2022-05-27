import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
   base_url:string = 'http://localhost:8080';

  getMovies(){
    return this.http.get(`${this.base_url}/movies`)
  }
}
