import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ContentService } from '../../../../core/services/content.service';
import { LearningArea } from '../../../../core/models/pathway.model';

@Component({
  selector: 'app-learning-areas',
  standalone: true,
  imports: [SectionHeaderComponent, CarouselComponent, ScrollRevealDirective],
  template: `
    <section class="learning section-padding">
      <div class="container">
        <app-section-header
          title="Learning Areas"
          subtitle="Our comprehensive curriculum covers the full fibre optic lifecycle — from network fundamentals and survey planning through installation, splicing, testing, maintenance, and professional practice."
          label="Curriculum"
        />
        <div class="learning__grid">
          @for (area of areas(); track area.title; let i = $index) {
            <div class="learning__card" appScrollReveal="fade-up" [delay]="i * 80">
              <div class="learning__card-icon-wrapper">
                <span class="learning__card-icon" [class]="area.icon" aria-hidden="true"></span>
              </div>
              <h3 class="learning__card-title">{{ area.title }}</h3>
              <p class="learning__card-desc">{{ area.description }}</p>
            </div>
          }
        </div>
        <div class="learning__carousel">
          <app-carousel>
            @for (area of areas(); track area.title) {
              <div class="learning__card">
                <div class="learning__card-icon-wrapper">
                  <span class="learning__card-icon" [class]="area.icon" aria-hidden="true"></span>
                </div>
                <h3 class="learning__card-title">{{ area.title }}</h3>
                <p class="learning__card-desc">{{ area.description }}</p>
              </div>
            }
          </app-carousel>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .learning { background: var(--color-surface); }
    .learning__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .learning__carousel { display: none; }
    .learning__card { padding: 28px 24px; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl); transition: all var(--transition-base); }
    .learning__card:hover { border-color: var(--color-electric-blue); box-shadow: var(--shadow-glow-blue); transform: translateY(-6px); }
    .learning__card-icon-wrapper { width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; background: rgba(237,27,36,0.08); border-radius: var(--rounded-lg); margin-bottom: 20px; }
    .learning__card-icon { font-size: 1.5rem; color: var(--color-electric-blue); }
    .learning__card-title { font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 12px; }
    .learning__card-desc { font-family: var(--font-body); font-size: 0.9rem; line-height: 1.7; color: var(--color-on-surface-variant); margin: 0; }
    @media (max-width: 1200px) { .learning__grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 1024px) { .learning__grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) { .learning__grid { display: none; } .learning__carousel { display: block; } .learning__card { padding: 24px 20px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningAreasComponent implements OnInit {
  private readonly contentService = inject(ContentService);
  protected readonly areas = signal<LearningArea[]>([]);

  ngOnInit(): void {
    this.contentService.getSettingByKey<LearningArea[]>('learning_areas').subscribe({
      next: (data) => {
        if (data) this.areas.set(data);
      },
      error: () => {}
    });
  }
}
