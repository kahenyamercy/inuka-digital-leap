import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, SlicePipe } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ContentService } from '../../../../core/services/content.service';
import { Post } from '../../../../core/models/content.model';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollRevealDirective, DatePipe, SlicePipe],
  template: `
    <section class="stories section-padding" id="stories">
      <div class="container">
        <app-section-header
          title="Latest Stories"
          subtitle="Insights, milestones, and updates from the Inuka Digital Leap programme."
          label="Blog & News"
        />
        <div class="stories__grid">
          @for (post of featured(); track post.id; let i = $index) {
            <article class="stories__card" [class.stories__card--featured]="i === 0" appScrollReveal="fade-up" [delay]="i * 100">
              <div class="stories__card-image">
                @if (post.cover_image) {
                  <img [src]="post.cover_image" [alt]="post.title" class="stories__card-img" loading="lazy" />
                }
              </div>
              <div class="stories__card-body">
                <div class="stories__card-meta">
                  <span class="stories__card-category">{{ post.category }}</span>
                  <span class="stories__card-date">{{ post.published_at | date:'mediumDate' }}</span>
                </div>
                <h3 class="stories__card-title">{{ post.title }}</h3>
                @if (i === 0) {
                  <p class="stories__card-excerpt">{{ post.content | slice:0:150 }}...</p>
                }
                <a [routerLink]="['/stories', post.slug]" class="stories__card-link">
                  Read more <span class="pi pi-arrow-right" aria-hidden="true"></span>
                </a>
              </div>
            </article>
          }
        </div>
        <div class="stories__cta" appScrollReveal="fade-up">
          <a routerLink="/stories" class="stories__cta-link">
            View all stories
            <span class="pi pi-arrow-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stories { background: var(--color-surface); }
    .stories__grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
    .stories__card { background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl); overflow: hidden; transition: all var(--transition-base); }
    .stories__card:hover { border-color: var(--color-electric-blue); box-shadow: var(--shadow-glow-blue); transform: translateY(-4px); }
    .stories__card-image { height: 180px; overflow: hidden; }
    .stories__card-img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .stories__card--featured .stories__card-image { height: 280px; }
    .stories__card--featured .stories__card-title { font-size: 1.25rem; }
    .stories__card-body { padding: 20px; }
    .stories__card-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
    .stories__card-category { font: var(--label-caps); font-size: 0.65rem; color: var(--color-electric-blue); background: rgba(237,27,36,0.08); padding: 3px 10px; border-radius: var(--rounded-full); }
    .stories__card-date { font-family: var(--font-body); font-size: 0.75rem; color: var(--color-on-surface-variant); }
    .stories__card-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 8px; line-height: 1.35; }
    .stories__card-excerpt { font-family: var(--font-body); font-size: 0.85rem; line-height: 1.65; color: var(--color-on-surface-variant); margin: 0 0 12px; }
    .stories__card-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-body); font-size: 0.85rem; font-weight: 600; color: var(--color-electric-blue); transition: gap var(--transition-fast); }
    .stories__card-link:hover { gap: 10px; }
    .stories__cta { text-align: center; margin-top: 40px; }
    .stories__cta-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; color: var(--color-electric-blue); padding: 12px 28px; border: 1px solid var(--color-electric-blue); border-radius: var(--rounded-full); transition: all var(--transition-base); }
    .stories__cta-link:hover { background: var(--color-electric-blue); color: #fff; gap: 12px; }
    @media (max-width: 1024px) { .stories__grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 768px) { .stories__grid { grid-template-columns: 1fr; } .stories__card--featured .stories__card-image { height: 200px; } .stories__card-image { height: 160px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent implements OnInit {
  private readonly contentService = inject(ContentService);
  protected readonly featured = signal<Post[]>([]);

  ngOnInit(): void {
    this.contentService.getPublishedPosts().subscribe({
      next: (data) => this.featured.set(data.slice(0, 2)),
      error: () => {}
    });
  }
}
