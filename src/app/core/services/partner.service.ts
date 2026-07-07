import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Partner } from '../models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  constructor(private api: ApiService) {}

  getPartners(): Observable<Partner[]> {
    return this.api.get<Partner[]>('partners');
  }

  getRequiredAcknowledgements(): Observable<Partner[]> {
    return this.api.get<Partner[]>('partners');
  }
}
