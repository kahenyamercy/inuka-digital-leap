import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { Post, GalleryItem, SiteSetting } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly api = inject(ApiService);

  getPosts(params?: Record<string, string>): Observable<Post[]> {
    return this.api.get<Post[]>('posts', params);
  }

  getPublishedPosts(): Observable<Post[]> {
    return this.api.get<Post[]>('posts', { published: 'true' });
  }

  getPost(id: string): Observable<Post> {
    return this.api.getOne<Post>('posts', id);
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    return this.api.get<Post[]>('posts', { category });
  }

  getGallery(): Observable<GalleryItem[]> {
    return this.api.get<GalleryItem[]>('gallery');
  }

  getSiteSettings(): Observable<SiteSetting[]> {
    return this.api.get<SiteSetting[]>('settings');
  }

  getSettingByKey<T>(key: string): Observable<T | null> {
    return this.getSiteSettings().pipe(
      map(settings => {
        const found = settings.find(s => s.key === key);
        if (!found) return null;
        try {
          return JSON.parse(found.value) as T;
        } catch {
          return found.value as unknown as T;
        }
      })
    );
  }
}
