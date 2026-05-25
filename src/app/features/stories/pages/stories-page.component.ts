import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { STORIES } from '../../../core/constants';

@Component({
  selector: 'app-stories-page',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container" appScrollReveal="fade-up">
        <span class="page-hero__label">Our Blog</span>
        <h1 class="page-hero__title">Stories &amp; Updates</h1>
        <p class="page-hero__subtitle">
          Insights, milestones, and updates from the Inuka Digital Leap programme — 
          celebrating the people and partnerships shaping Kenya's digital future.
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="filter-bar">
      <div class="container">
        <div class="filter-bar__chips">
          <button
            class="filter-bar__chip"
            [class.filter-bar__chip--active]="activeCategory() === 'All'"
            (click)="setCategory('All')"
          >
            All
          </button>
          @for (cat of categories; track cat) {
            <button
              class="filter-bar__chip"
              [class.filter-bar__chip--active]="activeCategory() === cat"
              (click)="setCategory(cat)"
            >
              {{ cat }}
            </button>
          }
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    @if (featuredStory; as story) {
      <section class="featured">
        <div class="container">
          <article
            class="featured__card"
            appScrollReveal="fade-up"
          >
            <div class="featured__card-image">
              <img
                [src]="story.image"
                [alt]="story.title"
                class="featured__card-img"
              />
            </div>
            <div class="featured__card-body">
              <div class="featured__card-meta">
                <span class="featured__card-category">{{ story.category }}</span>
                <span class="featured__card-date">{{ story.date }}</span>
              </div>
              <h2 class="featured__card-title">{{ story.title }}</h2>
              <p class="featured__card-excerpt">{{ story.excerpt }}</p>
              <a [routerLink]="['/stories', story.slug]" class="featured__card-link">
                Read full story
                <span class="pi pi-arrow-right" aria-hidden="true"></span>
              </a>
            </div>
          </article>
        </div>
      </section>
    }

    <!-- Blog Grid -->
    <section class="stories-page">
      <div class="container">
        <div class="stories-page__grid">
          @for (story of filteredStories(); track story.title; let i = $index) {
            <article
              class="stories-page__card"
              appScrollReveal="fade-up"
              [delay]="(i % 3) * 100"
            >
              <div class="stories-page__card-image">
                <img
                  [src]="story.image"
                  [alt]="story.title"
                  class="stories-page__card-img"
                  loading="lazy"
                />
              </div>
              <div class="stories-page__card-body">
                <div class="stories-page__card-meta">
                  <span class="stories-page__card-category">{{ story.category }}</span>
                  <span class="stories-page__card-date">{{ story.date }}</span>
                </div>
                <h3 class="stories-page__card-title">{{ story.title }}</h3>
                <p class="stories-page__card-excerpt">{{ story.excerpt }}</p>
                <a [routerLink]="['/stories', story.slug]" class="stories-page__card-link">
                  Read more
                  <span class="pi pi-arrow-right" aria-hidden="true"></span>
                </a>
              </div>
            </article>
          }
        </div>

        @if (filteredStories().length === 0) {
          <div class="stories-page__empty">
            <span class="pi pi-info-circle" style="font-size: 2rem; opacity: 0.3;"></span>
            <p>No stories found in this category.</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    /* ── Page Hero ── */
    .page-hero {
      background: linear-gradient(135deg, var(--color-deep-navy) 0%, #0a2a4a 100%);
      padding: 120px 0 100px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .page-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(237, 27, 36, 0.12) 0%, transparent 60%);
      pointer-events: none;
    }

    .page-hero__label {
      display: inline-block;
      font: var(--label-caps);
      color: var(--color-electric-blue);
      background: rgba(237, 27, 36, 0.12);
      padding: 4px 16px;
      border-radius: var(--rounded-full);
      margin-bottom: 16px;
    }

    .page-hero__title {
      font-family: var(--font-heading);
      font-size: clamp(2rem, 5vw, 3.25rem);
      font-weight: 800;
      color: #fff;
      margin: 0 0 16px;
      line-height: 1.15;
    }

    .page-hero__subtitle {
      max-width: 640px;
      margin: 0 auto;
      font-family: var(--font-body);
      font-size: 1.05rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.75);
    }

    /* ── Filter Bar ── */
    .filter-bar {
      background: var(--color-surface-container-lowest);
      border-bottom: 1px solid var(--color-outline-variant);
      padding: 20px 0;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .filter-bar__chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    .filter-bar__chip {
      font: var(--label-caps);
      font-size: 0.75rem;
      color: var(--color-on-surface-variant);
      background: var(--color-surface);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-full);
      padding: 6px 16px;
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--color-electric-blue);
        color: var(--color-electric-blue);
      }

      &--active {
        background: var(--color-electric-blue);
        border-color: var(--color-electric-blue);
        color: #fff;
      }
    }

    /* ── Featured Article ── */
    .featured {
      padding: 60px 0 40px;
    }

    .featured__card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-2xl);
      overflow: hidden;
      transition: box-shadow var(--transition-base);

      &:hover {
        box-shadow: var(--shadow-glow-blue);
      }
    }

    .featured__card-image {
      height: 100%;
      min-height: 320px;
      overflow: hidden;
    }

    .featured__card-img {
      width: 100%;
      height: 100%;
      min-height: 320px;
      object-fit: cover;
    }

    .featured__card-body {
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .featured__card-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .featured__card-category {
      font: var(--label-caps);
      font-size: 0.65rem;
      color: var(--color-electric-blue);
      background: rgba(237, 27, 36, 0.08);
      padding: 3px 10px;
      border-radius: var(--rounded-full);
    }

    .featured__card-date {
      font-family: var(--font-body);
      font-size: 0.8rem;
      color: var(--color-on-surface-variant);
    }

    .featured__card-title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 12px;
      line-height: 1.3;
    }

    .featured__card-excerpt {
      font-family: var(--font-body);
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--color-on-surface-variant);
      margin: 0 0 20px;
    }

    .featured__card-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-electric-blue);
      transition: gap var(--transition-fast);

      &:hover {
        gap: 10px;
      }
    }

    /* ── Blog Grid ── */
    .stories-page {
      padding: 0 0 100px;
      background: var(--color-surface);
    }

    .stories-page__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .stories-page__card {
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      overflow: hidden;
      transition: all var(--transition-base);

      &:hover {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
        transform: translateY(-4px);
      }
    }

    .stories-page__card-image {
      height: 200px;
      overflow: hidden;
    }

    .stories-page__card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .stories-page__card-body {
      padding: 24px;
    }

    .stories-page__card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }

    .stories-page__card-category {
      font: var(--label-caps);
      font-size: 0.65rem;
      color: var(--color-electric-blue);
      background: rgba(237, 27, 36, 0.08);
      padding: 3px 10px;
      border-radius: var(--rounded-full);
    }

    .stories-page__card-date {
      font-family: var(--font-body);
      font-size: 0.75rem;
      color: var(--color-on-surface-variant);
    }

    .stories-page__card-title {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 8px;
      line-height: 1.35;
    }

    .stories-page__card-excerpt {
      font-family: var(--font-body);
      font-size: 0.85rem;
      line-height: 1.65;
      color: var(--color-on-surface-variant);
      margin: 0 0 14px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .stories-page__card-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-electric-blue);
      transition: gap var(--transition-fast);

      &:hover {
        gap: 10px;
      }
    }

    .stories-page__empty {
      text-align: center;
      padding: 80px 20px;
      color: var(--color-on-surface-variant);
      font-family: var(--font-body);
    }

    /* ── Responsive ── */
    @media (max-width: 1024px) {
      .stories-page__grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .featured__card {
        grid-template-columns: 1fr;
      }

      .featured__card-image {
        min-height: 240px;
      }
    }

    @media (max-width: 768px) {
      .stories-page__grid {
        grid-template-columns: 1fr;
      }

      .page-hero {
        padding: 100px 0 70px;
      }

      .featured__card-body {
        padding: 24px;
      }

      .featured__card-title {
        font-size: 1.25rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesPageComponent {
  private readonly allStories = [...STORIES];

  protected readonly categories = [
    ...new Set(this.allStories.map((s) => s.category)),
  ].sort();

  protected readonly activeCategory = signal<string>('All');

  protected readonly featuredStory = this.allStories.find((s) => s.featured) ?? null;

  protected readonly filteredStories = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.allStories.filter((s) => !s.featured)
      : this.allStories.filter((s) => s.category === cat && !s.featured);
  });

  protected setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }
}
