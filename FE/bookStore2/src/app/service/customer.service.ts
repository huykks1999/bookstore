import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.API +`/customer`;
  }

  get() {
    return new Promise((resolve, reject) =>{
      this.http.get(this.baseUrl).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    });
  }

  getById(id) {
    return new Promise((resolve, rejects) => {
      this.http.get(this.baseUrl+`/${id}`).subscribe(response => {
        resolve(response)
      }, err => {
        rejects(err)
      })
    })
  }

  getByEmail(email) {
    return new Promise((resolve, rejects) => {
      this.http.get(this.baseUrl+`/getCustomerByEmail/${email}`).subscribe(response => {
        resolve(response)
      }, err => {
        rejects(err)
      })
    })
  }

  add(obj) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.baseUrl, obj).subscribe(response => {
        resolve(response)
      }, err => {
        rejects(err)
      })
    })
  }

  update(obj){
    let url = this.baseUrl.concat('/', obj.id);
    return new Promise((resolve, reject) => {
      this.http.put(url, obj).subscribe((result) => {
        resolve(result)
      }, err => {
        reject(err)
      })
    });
  }

  delete(id){
    let url = this.baseUrl.concat('/', id);
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    });
  }
}
