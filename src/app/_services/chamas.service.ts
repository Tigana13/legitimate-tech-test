import { Injectable } from '@angular/core';
import {ApiService} from "./api/api.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChamasService {

  constructor(protected apiService: ApiService, protected router: Router) {}

  fetchChamas(params?: HttpParams | any) {
    return this.apiService.get('/chamas/');
  }

  createChama(chama: {} | any) {
    return this.apiService.post('/chamas/', chama);
  }

  createChamaSchedule(schedule: {} | any) {
    return this.apiService.post('/chamas/contributions/create_schedule/', schedule);
  }

  generateContributionRequest(payload: {} | any) {
    return this.apiService.post('/chamas/contributions/generate_request/', payload);
  }
}
