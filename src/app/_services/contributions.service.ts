import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  constructor(protected apiService: ApiService, protected router: Router) {}

  fetchContributions(params?: HttpParams | any) {
    return this.apiService.get('/group-contributions/');
  }

  createContribution(donation: {} | any) {
    return this.apiService.post('/group-contributions/', donation);
  }
}
