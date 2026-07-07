import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ImpactService } from '../../../../core/services/impact.service';
import { Metric } from '../../../../core/models/impact.model';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [SectionHeaderComponent, CarouselComponent, ScrollRevealDirective],
  template: `
    <section class="impact section-padding" id="impact">
      <div class="container">
        <app-section-header
          title="Our Impact Dashboard"
          subtitle="Real numbers showing the measurable difference Inuka Digital Leap is making across Kenya."
          label="Impact"
        />
        <div class="impact__grid" appScrollReveal="fade-up" [delay]="0">
          @for (metric of metrics(); track metric.id) {
            <div class="impact__card">
              <div class="impact__card-header">
                <span class="impact__card-label">{{ metric.label }}</span>
                <span class="impact__card-value">{{ metric.value }}{{ metric.unit }}</span>
              </div>
              <div class="impact__progress">
                <div class="impact__progress-bar impact__progress-bar--blue"
                  [style.width.%]="80">
                </div>
              </div>
              <span class="impact__card-target">{{ metric.unit ? metric.unit : 'metric' }}</span>
            </div>
          }
        </div>
        <div class="impact__carousel">
          <app-carousel>
            @for (metric of metrics(); track metric.id) {
              <div class="impact__card">
                <div class="impact__card-header">
                  <span class="impact__card-label">{{ metric.label }}</span>
                  <span class="impact__card-value">{{ metric.value }}{{ metric.unit }}</span>
                </div>
                <div class="impact__progress">
                  <div class="impact__progress-bar impact__progress-bar--blue" [style.width.%]="80"></div>
                </div>
              </div>
            }
          </app-carousel>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .impact { background: var(--color-surface-container-low); }
    .impact__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px; margin: 0 auto; }
    .impact__carousel { display: none; }
    .impact__card { padding: 24px; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl); transition: all var(--transition-base); }
    .impact__card:hover { border-color: var(--color-electric-blue); box-shadow: var(--shadow-glow-blue); }
    .impact__card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .impact__card-label { font-family: var(--font-body); font-size: 0.85rem; font-weight: 500; color: var(--color-on-surface); }
    .impact__card-value { font-family: var(--font-heading); font-size: 1.3rem; font-weight: 800; color: var(--color-deep-navy); line-height: 1; }
    .impact__progress { height: 6px; background: var(--color-surface-container); border-radius: var(--rounded-full); overflow: hidden; margin-bottom: 8px; }
    .impact__progress-bar { height: 100%; border-radius: var(--rounded-full); transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
    .impact__progress-bar--blue { background: linear-gradient(90deg, var(--color-electric-blue), #0088cc); }
    .impact__progress-bar--green { background: linear-gradient(90deg, var(--color-emerald-green), #0a9e63); }
    .impact__progress-bar--gold { background: linear-gradient(90deg, var(--color-gold), #b88910); }
    .impact__card-target { font-family: var(--font-body); font-size: 0.75rem; color: var(--color-on-surface-variant); }
    @media (max-width: 1024px) { .impact__grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) { .impact__grid { display: none; } .impact__carousel { display: block; } .impact__card { padding: 20px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactComponent implements OnInit {
  private readonly impactService = inject(ImpactService);
  protected readonly metrics = signal<Metric[]>([]);

  ngOnInit(): void {
    this.impactService.getMetrics().subscribe({
      next: (data) => this.metrics.set(data),
      error: () => {}
    });
  }
}
