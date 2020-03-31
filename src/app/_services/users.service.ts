import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(protected apiService: ApiService, protected router: Router) {}


  fetchUsers(params?: HttpParams | any) {
    return this.apiService.get('/users/', params);
  }
}
