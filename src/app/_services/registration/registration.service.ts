import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(protected apiService: ApiService, protected router: Router) {}

  currentUser() {
    return  this.apiService.get('/auth/user/', true);
  }

  register(payload) {
    return this.apiService.post('/register/', payload);
  }
}
