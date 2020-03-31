import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(protected apiService: ApiService, protected router: Router) {}

  fetchDonations(params?: HttpParams | any) {
    return this.apiService.get('/donations/');
  }

  createDonation(donation: {} | any) {
    return this.apiService.post('/donations/', donation);
  }
}
