import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ImpactService } from '../../../../core/services/impact.service';
import { Metric } from '../../../../core/models/impact.model';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [StatCardComponent, CarouselComponent],
  template: `
    <section class="statistics-section">
      <div class="container">
        <div class="statistics-grid">
          @for (stat of stats(); track stat.id; let i = $index) {
            <app-stat-card
              [value]="+stat.value"
              [suffix]="stat.unit"
              [label]="stat.label"
              icon="pi pi-chart-bar"
              [delay]="i * 100"
            />
          }
        </div>
        <div class="statistics-carousel">
          <app-carousel>
            @for (stat of stats(); track stat.id; let i = $index) {
              <app-stat-card
                [value]="+stat.value"
                [suffix]="stat.unit"
                [label]="stat.label"
                icon="pi pi-chart-bar"
                [delay]="i * 100"
              />
            }
          </app-carousel>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .statistics-section { background: var(--color-surface-container); padding: 48px 0; }
    .statistics-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
    .statistics-carousel { display: none; }
    @media (max-width: 1024px) { .statistics-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px) {
      .statistics-section { padding: 32px 0; }
      .statistics-grid { display: none; }
      .statistics-carousel { display: block; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent implements OnInit {
  private readonly impactService = inject(ImpactService);
  protected readonly stats = signal<Metric[]>([]);

  ngOnInit(): void {
    this.impactService.getMetrics().subscribe({
      next: (data) => this.stats.set(data),
      error: () => {}
    });
  }
}
