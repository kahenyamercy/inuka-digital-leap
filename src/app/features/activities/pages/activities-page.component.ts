import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ActivityService } from '../../../core/services/activity.service';
import { Activity } from '../../../core/models/activity.model';

@Component({
  selector: 'app-activities-page',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, DatePipe],
  template: `
    <section class="page-hero">
      <div class="container" appScrollReveal="fade-up">
        <span class="page-hero__label">In Action</span>
        <h1 class="page-hero__title">Activities &amp; Experiences</h1>
        <p class="page-hero__subtitle">
          From hands-on labs to industry exposure, every activity is designed to build
          practical skills and real-world confidence in network infrastructure.
        </p>
      </div>
    </section>

    <section class="filter-bar">
      <div class="container">
        <div class="filter-bar__chips">
          <button class="filter-bar__chip" [class.filter-bar__chip--active]="activeCategory() === 'All'" (click)="setCategory('All')">All</button>
          @for (cat of categories(); track cat) {
            <button class="filter-bar__chip" [class.filter-bar__chip--active]="activeCategory() === cat" (click)="setCategory(cat)">{{ cat }}</button>
          }
        </div>
      </div>
    </section>

    @if (loading()) {
      <div style="text-align:center;padding:80px;color:var(--color-on-surface-variant);font-family:var(--font-body);">
        <span class="pi pi-spin pi-spinner" style="font-size:2rem;"></span>
        <p>Loading activities...</p>
      </div>
    }

    <section class="activities-page">
      <div class="container">
        <div class="activities-page__grid">
          @for (activity of filteredActivities(); track activity.id; let i = $index) {
            <a [routerLink]="['/activities', activity.id]" class="activities-page__card" appScrollReveal="fade-up" [delay]="(i % 3) * 80">
              <div class="activities-page__card-visual">
                @if (activity.photo) {
                  <img [src]="activity.photo" [alt]="activity.title" style="width:100%;height:100%;object-fit:cover;" />
                } @else {
                  <span class="activities-page__card-icon pi pi-bolt" aria-hidden="true"></span>
                }
              </div>
              <div class="activities-page__card-body">
                <div class="activities-page__card-meta">
                  <span class="activities-page__card-category">{{ activity.activity_type }}</span>
                  <span class="activities-page__card-duration">{{ activity.activity_date | date:'mediumDate' }}</span>
                </div>
                <h3 class="activities-page__card-title">{{ activity.title }}</h3>
                <p class="activities-page__card-description">{{ activity.description }}</p>
                <span class="activities-page__card-link">
                  Learn more <span class="pi pi-arrow-right" aria-hidden="true"></span>
                </span>
              </div>
            </a>
          }
        </div>

        @if (!loading() && filteredActivities().length === 0) {
          <div class="activities-page__empty">
            <span class="pi pi-info-circle" style="font-size: 2rem; opacity: 0.3;"></span>
            <p>No activities found in this category.</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-hero { background: url('/assets/optical.jpg') center / cover no-repeat; padding: 120px 0 100px; text-align: center; position: relative; overflow: hidden; }
    .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(237,27,36,0.12) 0%, transparent 60%); pointer-events: none; }
    .page-hero__label { display: inline-block; font: var(--label-caps); color: var(--color-electric-blue); background: rgba(237,27,36,0.12); padding: 4px 16px; border-radius: var(--rounded-full); margin-bottom: 16px; }
    .page-hero__title { font-family: var(--font-heading); font-size: clamp(2rem,5vw,3.25rem); font-weight: 800; color: #fff; margin: 0 0 16px; line-height: 1.15; }
    .page-hero__subtitle { max-width: 640px; margin: 0 auto; font-family: var(--font-body); font-size: 1.05rem; line-height: 1.7; color: rgba(255,255,255,0.75); }
    .filter-bar { background: var(--color-surface-container-lowest); border-bottom: 1px solid var(--color-outline-variant); padding: 20px 0; position: sticky; top: 0; z-index: 10; }
    .filter-bar__chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
    .filter-bar__chip { font: var(--label-caps); font-size: 0.75rem; color: var(--color-on-surface-variant); background: var(--color-surface); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-full); padding: 6px 16px; cursor: pointer; transition: all var(--transition-fast); }
    .filter-bar__chip:hover { border-color: var(--color-electric-blue); color: var(--color-electric-blue); }
    .filter-bar__chip--active { background: var(--color-electric-blue); border-color: var(--color-electric-blue); color: #fff; }
    .activities-page { padding: 0 0 100px; background: var(--color-surface); }
    .activities-page__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding-top: 60px; }
    .activities-page__card { display: flex; flex-direction: column; text-decoration: none; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: 20px; overflow: hidden; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); position: relative; }
    .activities-page__card:hover { border-color: transparent; box-shadow: 0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(237,27,36,0.08); transform: translateY(-6px); }
    .activities-page__card-visual { height: 140px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(237,27,36,0.04), rgba(22,196,127,0.04)); border-bottom: 1px solid var(--color-outline-variant); overflow: hidden; }
    .activities-page__card-icon { font-size: 2.5rem; color: var(--color-electric-blue); opacity: 0.5; }
    .activities-page__card-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
    .activities-page__card-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
    .activities-page__card-category { font: var(--label-caps); font-size: 0.65rem; color: var(--color-electric-blue); background: rgba(237,27,36,0.08); padding: 3px 10px; border-radius: var(--rounded-full); }
    .activities-page__card-duration { font-family: var(--font-body); font-size: 0.75rem; color: var(--color-on-surface-variant); }
    .activities-page__card-title { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 8px; line-height: 1.35; }
    .activities-page__card-description { font-family: var(--font-body); font-size: 0.85rem; line-height: 1.65; color: var(--color-on-surface-variant); margin: 0 0 14px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex: 1; }
    .activities-page__card-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-body); font-size: 0.85rem; font-weight: 600; color: var(--color-electric-blue); transition: gap 0.3s ease; }
    .activities-page__card-link:hover { gap: 10px; }
    .activities-page__empty { text-align: center; padding: 80px 20px; color: var(--color-on-surface-variant); font-family: var(--font-body); }
    @media (max-width: 1024px) { .activities-page__grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) { .page-hero { padding: 100px 0 70px; } .activities-page__grid { grid-template-columns: 1fr; gap: 16px; padding: 40px 0 20px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesPageComponent implements OnInit {
  private readonly activityService = inject(ActivityService);

  private readonly allActivities = signal<Activity[]>([]);
  protected readonly loading = signal(true);
  protected readonly activeCategory = signal<string>('All');

  protected readonly categories = computed(() => [
    ...new Set(this.allActivities().map((a) => a.activity_type))
  ].sort());

  protected readonly filteredActivities = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.allActivities()
      : this.allActivities().filter((a) => a.activity_type === cat);
  });

  protected setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  ngOnInit(): void {
    this.activityService.getActivities().subscribe({
      next: (data) => {
        this.allActivities.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
}
