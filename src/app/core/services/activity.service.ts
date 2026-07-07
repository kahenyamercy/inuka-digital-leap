import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private api: ApiService) {}

  getActivities(params?: Record<string, string>): Observable<Activity[]> {
    return this.api.get<Activity[]>('activities', params);
  }

  getActivity(id: string): Observable<Activity> {
    return this.api.getOne<Activity>('activities', id);
  }

  getMasterclasses(): Observable<Activity[]> {
    return this.api.get<Activity[]>('activities', { type: 'masterclass' });
  }

  getActivitiesByCohort(cohortId: string): Observable<Activity[]> {
    return this.api.get<Activity[]>('activities', { cohort: cohortId });
  }
}
