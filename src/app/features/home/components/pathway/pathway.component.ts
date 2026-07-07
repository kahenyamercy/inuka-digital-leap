import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ContentService } from '../../../../core/services/content.service';
import { PathwayStep } from '../../../../core/models/pathway.model';

@Component({
  selector: 'app-pathway',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="pathway section-padding" id="pathway">
      <div class="container">
        <app-section-header
          title="Program Pathway"
          subtitle="A structured 6-month journey from selection to deployment transforming talented youth into certified digital infrastructure professionals."
          label="The Journey"
        />
        <div class="pathway__summary">
          <div class="pathway__steps" appScrollReveal="fade-up" [delay]="0">
            @for (step of steps(); track step.step) {
              <div class="pathway__step">
                <div class="pathway__node" [class.pathway__node--completed]="step.status === 'completed'" [class.pathway__node--active]="step.status === 'active'">
                  <span class="pathway__node-icon" [class]="step.icon" aria-hidden="true"></span>
                </div>
                <div class="pathway__step-info">
                  <span class="pathway__step-number">Step {{ step.step }}</span>
                  <h3 class="pathway__step-title">{{ step.title }}</h3>
                </div>
              </div>
            }
          </div>
          <a routerLink="/pathway" class="pathway__cta">
            View Full Pathway
            <span class="pi pi-arrow-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pathway { background: var(--color-surface); }
    .pathway__summary { max-width: 700px; margin: 0 auto; text-align: center; }
    .pathway__steps { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 32px; }
    .pathway__step { display: flex; align-items: center; gap: 10px; padding: 12px 18px; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl); transition: all var(--transition-base); }
    .pathway__step:hover { border-color: var(--color-electric-blue); transform: translateY(-2px); }
    .pathway__node { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: var(--color-surface-container); color: var(--color-outline); border: 2px solid var(--color-outline-variant); transition: all var(--transition-base); }
    .pathway__node .pi { font-size: 0.9rem; }
    .pathway__node--completed { background: var(--color-emerald-green); border-color: var(--color-emerald-green); color: white; }
    .pathway__node--active { background: var(--color-electric-blue); border-color: var(--color-electric-blue); color: white; box-shadow: 0 0 12px rgba(237,27,36,0.3); }
    .pathway__step-info { text-align: left; }
    .pathway__step-number { font-family: var(--font-mono); font-size: 0.6rem; font-weight: 600; color: var(--color-on-surface-variant); letter-spacing: 0.08em; text-transform: uppercase; display: block; }
    .pathway__step-title { font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-deep-navy); margin: 0; }
    .pathway__cta { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; color: var(--color-electric-blue); padding: 12px 28px; border: 2px solid var(--color-electric-blue); border-radius: 9999px; transition: all var(--transition-base); text-decoration: none; }
    .pathway__cta:hover { background: var(--color-electric-blue); color: white; box-shadow: var(--shadow-glow-blue); gap: 12px; }
    @media (max-width: 768px) { .pathway__step { width: 100%; max-width: 280px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathwayComponent implements OnInit {
  private readonly contentService = inject(ContentService);
  protected readonly steps = signal<PathwayStep[]>([]);

  ngOnInit(): void {
    this.contentService.getSettingByKey<PathwayStep[]>('pathway_steps').subscribe({
      next: (data) => {
        if (data) this.steps.set(data);
      },
      error: () => {}
    });
  }
}
