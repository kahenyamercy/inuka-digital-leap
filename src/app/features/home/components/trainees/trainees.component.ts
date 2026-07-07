import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { CohortService } from '../../../../core/services/cohort.service';
import { Fellow } from '../../../../core/models/cohort.model';

@Component({
  selector: 'app-trainees',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, CarouselComponent],
  template: `
    <section class="trainees section-padding" id="trainees">
      <div class="container">
        <app-section-header
          title="Meet the Trainees"
          subtitle="Meet the talented young Kenyans building the skills to power our nation's digital infrastructure."
        />
        <app-carousel>
          @for (fellow of fellows(); track fellow.id) {
            <div class="trainees__card">
              <div class="trainees__portrait">
                @if (fellow.photo) {
                  <img [src]="fellow.photo" [alt]="fellow.full_name" class="trainees__photo" />
                } @else {
                  <span class="trainees__avatar">
                    {{ fellow.full_name.charAt(0) }}{{ fellow.full_name.split(' ')[1]?.charAt(0) }}
                  </span>
                }
              </div>
              <div class="trainees__info">
                <h3 class="trainees__name">{{ fellow.full_name }}</h3>
                <div class="trainees__tags">
                  <span class="trainees__tag trainees__tag--county">{{ fellow.county }}</span>
                  <span class="trainees__tag trainees__tag--focus">{{ fellow.specialization }}</span>
                </div>
                @if (fellow.quote) {
                  <p class="trainees__quote">{{ fellow.quote }}</p>
                }
              </div>
            </div>
          }
        </app-carousel>
        <div class="trainees__action">
          <a routerLink="/cohort" class="trainees__cta">
            View Full Cohort
            <span class="pi pi-arrow-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trainees { background: var(--color-surface); }
    .trainees__card { display: flex; gap: 20px; padding: 24px; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl); min-width: 0; }
    .trainees__portrait { flex-shrink: 0; }
    .trainees__photo { width: 64px; height: 64px; border-radius: var(--rounded-xl); object-fit: cover; }
    .trainees__avatar { display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: var(--rounded-xl); background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green)); font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; color: white; }
    .trainees__info { flex: 1; min-width: 0; }
    .trainees__name { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 6px; }
    .trainees__tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
    .trainees__tag { display: inline-flex; font-size: 0.65rem; font-weight: 600; padding: 2px 8px; border-radius: var(--rounded-full); }
    .trainees__tag--county { background: rgba(237,27,36,0.08); color: var(--color-electric-blue); }
    .trainees__tag--focus { background: rgba(22,196,127,0.08); color: var(--color-emerald-green); }
    .trainees__quote { font-family: var(--font-body); font-size: 0.8rem; line-height: 1.6; color: var(--color-on-surface-variant); margin: 0; font-style: italic; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .trainees__action { text-align: center; margin-top: 36px; }
    .trainees__cta { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; color: var(--color-electric-blue); padding: 12px 28px; border: 2px solid var(--color-electric-blue); border-radius: 9999px; transition: all var(--transition-base); text-decoration: none; }
    .trainees__cta:hover { background: var(--color-electric-blue); color: white; box-shadow: var(--shadow-glow-blue); gap: 12px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraineesComponent implements OnInit {
  private readonly cohortService = inject(CohortService);
  protected readonly fellows = signal<Fellow[]>([]);

  ngOnInit(): void {
    this.cohortService.getFellows().subscribe({
      next: (data) => this.fellows.set(data.slice(0, 4)),
      error: () => {}
    });
  }
}
