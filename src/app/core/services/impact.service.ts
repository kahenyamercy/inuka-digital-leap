import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Metric } from '../models/impact.model';

@Injectable({
  providedIn: 'root'
})
export class ImpactService {
  constructor(private api: ApiService) {}

  getMetrics(): Observable<Metric[]> {
    return this.api.get<Metric[]>('metrics');
  }
}
