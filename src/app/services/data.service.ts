import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://foodcart11.000webhostapp.com/';

  private username:string;

  getUserName(){
    return this.username;
  }

  setUserName(str:string){
    this.username = str;
  }

  constructor(private http: HttpClient) {}

  getUserByUsername(username:string){
    return this.http.get(this.url+'getUserByUsername.php?username='+username);
  }

  getRestaurants() {
    return this.http.get(this.url + 'index.php');
  }

  getRestaurantById(id: number) {
    return this.http.get(this.url + 'getRestaurantById.php?id=' + id);
  }

  getFoodsByRid(rid: number) {
    return this.http.get(this.url + 'getFoodsByRid.php?rid=' + rid);
  }
}
