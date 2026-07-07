import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Cohort, Fellow, Certification } from '../models/cohort.model';

@Injectable({
  providedIn: 'root'
})
export class CohortService {
  constructor(private api: ApiService) {}

  getCohorts(): Observable<Cohort[]> {
    return this.api.get<Cohort[]>('cohorts');
  }

  getCohort(id: string): Observable<Cohort> {
    return this.api.getOne<Cohort>('cohorts', id);
  }

  getFellows(params?: Record<string, string>): Observable<Fellow[]> {
    return this.api.get<Fellow[]>('fellows', params);
  }

  getFeaturedFellows(): Observable<Fellow[]> {
    return this.api.get<Fellow[]>('fellows', { featured: 'true' });
  }

  getFellow(id: string): Observable<Fellow> {
    return this.api.getOne<Fellow>('fellows', id);
  }

  getFellowsByCohort(cohortId: string): Observable<Fellow[]> {
    return this.api.get<Fellow[]>('fellows', { cohort: cohortId });
  }
}
