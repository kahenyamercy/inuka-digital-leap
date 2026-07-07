import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ContentService } from '../../../core/services/content.service';
import { PathwayStep } from '../../../core/models/pathway.model';

@Component({
  selector: 'app-pathway-page',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <main>
      <section class="pathway-hero">
        <div class="pathway-hero__bg" aria-hidden="true">
          <div class="pathway-hero__grid"></div>
          <div class="pathway-hero__glow pathway-hero__glow--1"></div>
          <div class="pathway-hero__glow pathway-hero__glow--2"></div>
        </div>
        <div class="container">
          <div class="pathway-hero__content">
            <span class="pathway-hero__badge">Program Pathway</span>
            <h1 class="pathway-hero__title">Your Journey to Digital Infrastructure Expertise</h1>
            <p class="pathway-hero__subtitle">
              A structured 6-month pathway from selection to deployment — each stage designed to build 
              the skills, confidence, and experience needed for Kenya's digital future.
            </p>
          </div>
        </div>
      </section>

      <section class="pathway-timeline section-padding">
        <div class="container">
          <app-section-header
            title="Step by Step"
            subtitle="Every stage of the programme is crafted to deliver measurable outcomes and real-world readiness."
            label="The Journey"
          />
          <div class="pathway-timeline__rail">
            @for (step of steps(); track step.step; let i = $index) {
              <div class="pathway-timeline__step" [class.pathway-timeline__step--last]="i === steps().length - 1" appScrollReveal="fade-up" [delay]="i * 120">
                <div class="pathway-timeline__step-line" [class.pathway-timeline__step-line--filled]="step.status === 'completed' || step.status === 'active'"></div>
                <div class="pathway-timeline__step-line pathway-timeline__step-line--connector" [class.pathway-timeline__step-line--filled]="step.status === 'completed'"></div>

                <div
                  class="pathway-timeline__node"
                  [class.pathway-timeline__node--completed]="step.status === 'completed'"
                  [class.pathway-timeline__node--active]="step.status === 'active'"
                  [class.pathway-timeline__node--upcoming]="step.status === 'upcoming'"
                >
                  <span class="pathway-timeline__node-icon" [class]="step.icon" aria-hidden="true"></span>
                </div>

                <div
                  class="pathway-timeline__card"
                  [class.pathway-timeline__card--completed]="step.status === 'completed'"
                  [class.pathway-timeline__card--active]="step.status === 'active'"
                  [class.pathway-timeline__card--upcoming]="step.status === 'upcoming'"
                >
                  <div class="pathway-timeline__card-top">
                    <span class="pathway-timeline__card-step">Step {{ step.step }}</span>
                    <span
                      class="pathway-timeline__card-badge"
                      [class.pathway-timeline__card-badge--completed]="step.status === 'completed'"
                      [class.pathway-timeline__card-badge--active]="step.status === 'active'"
                      [class.pathway-timeline__card-badge--upcoming]="step.status === 'upcoming'"
                    >
                      @if (step.status === 'completed') {
                        <span class="pi pi-check" aria-hidden="true"></span>
                        Completed
                      } @else if (step.status === 'active') {
                        In Progress
                      } @else {
                        Upcoming
                      }
                    </span>
                  </div>
                  <h3 class="pathway-timeline__card-title">{{ step.title }}</h3>
                  <p class="pathway-timeline__card-desc">{{ step.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .pathway-hero {
      position: relative;
      min-height: 50vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: var(--color-deep-navy);
      padding-top: var(--navbar-height);
    }

    .pathway-hero__bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .pathway-hero__grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(237, 27, 36, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(237, 27, 36, 0.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .pathway-hero__glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      pointer-events: none;

      &--1 {
        width: 500px; height: 500px;
        background: rgba(237, 27, 36, 0.1);
        top: -200px; right: -100px;
      }

      &--2 {
        width: 400px; height: 400px;
        background: rgba(22, 196, 127, 0.06);
        bottom: -150px; left: -100px;
      }
    }

    .pathway-hero__content {
      position: relative;
      z-index: 1;
      max-width: 700px;
      animation: fadeInUp 0.8s ease-out both;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .pathway-hero__badge {
      display: inline-flex;
      align-items: center;
      font: var(--label-caps);
      letter-spacing: 0.15em;
      color: var(--color-electric-blue);
      border: 1px solid rgba(237, 27, 36, 0.3);
      padding: 6px 16px;
      border-radius: var(--rounded-md);
      background: rgba(237, 27, 36, 0.08);
      margin-bottom: 20px;
    }

    .pathway-hero__title {
      font-family: var(--font-heading);
      font-size: 3.2rem;
      font-weight: 900;
      line-height: 1.08;
      letter-spacing: -0.03em;
      color: white;
      margin: 0 0 16px;
    }

    .pathway-hero__subtitle {
      font-family: var(--font-body);
      font-size: 1.05rem;
      line-height: 1.75;
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
      max-width: 600px;
    }

    .pathway-timeline {
      background: var(--color-surface);
    }

    .pathway-timeline__rail {
      max-width: 800px;
      margin: 0 auto;
    }

    .pathway-timeline__step {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 24px;
      padding-bottom: 36px;

      &--last {
        padding-bottom: 0;
      }
    }

    .pathway-timeline__step-line {
      position: absolute;
      left: 19px;
      top: 0;
      bottom: 50%;
      width: 2px;
      background: var(--color-outline-variant);
      border-radius: 2px;
      transition: background var(--transition-base);

      &--filled {
        background: var(--color-emerald-green);
      }

      &--connector {
        top: 50%;
        bottom: 0;
      }
    }

    .pathway-timeline__node {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;
      transition: all var(--transition-base);

      .pi {
        font-size: 1rem;
        line-height: 1;
      }

      &--completed {
        background: var(--color-emerald-green);
        color: white;
        box-shadow: 0 0 12px rgba(22, 196, 127, 0.3);
      }

      &--active {
        background: var(--color-electric-blue);
        color: white;
        box-shadow: 0 0 16px rgba(237, 27, 36, 0.4);
        animation: pulseNode 2s ease-in-out infinite;
      }

      &--upcoming {
        background: var(--color-surface-container);
        color: var(--color-outline);
        border: 2px solid var(--color-outline-variant);
      }
    }

    @keyframes pulseNode {
      0%, 100% { box-shadow: 0 0 12px rgba(237, 27, 36, 0.3); }
      50% { box-shadow: 0 0 24px rgba(237, 27, 36, 0.5); }
    }

    .pathway-timeline__card {
      flex: 1;
      padding: 24px;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      transition: all var(--transition-base);
      min-width: 0;

      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-glass-lg);
      }

      &--active {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
      }

      &--completed {
        &:hover {
          border-color: var(--color-emerald-green);
          box-shadow: var(--shadow-glow-green);
        }
      }
    }

    .pathway-timeline__card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }

    .pathway-timeline__card-step {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--color-on-surface-variant);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .pathway-timeline__card-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: var(--font-body);
      font-size: 0.7rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: var(--rounded-full);
      letter-spacing: 0.02em;

      .pi {
        font-size: 0.6rem;
      }

      &--completed {
        background: rgba(22, 196, 127, 0.1);
        color: var(--color-emerald-green);
      }

      &--active {
        background: rgba(237, 27, 36, 0.1);
        color: var(--color-electric-blue);
      }

      &--upcoming {
        background: rgba(116, 119, 126, 0.1);
        color: var(--color-outline);
      }
    }

    .pathway-timeline__card-title {
      font-family: var(--font-heading);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 8px;
    }

    .pathway-timeline__card-desc {
      font-family: var(--font-body);
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--color-on-surface-variant);
      margin: 0;
    }

    @media (max-width: 1024px) {
      .pathway-hero__title {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .pathway-hero {
        min-height: 40vh;
      }

      .pathway-hero__title {
        font-size: 1.75rem;
      }

      .pathway-hero__subtitle {
        font-size: 0.95rem;
      }

      .pathway-timeline__step {
        gap: 16px;
        padding-bottom: 24px;
      }

      .pathway-timeline__node {
        width: 36px;
        height: 36px;
        margin-top: 2px;

        .pi {
          font-size: 0.85rem;
        }
      }

      .pathway-timeline__step-line {
        left: 17px;
      }

      .pathway-timeline__card {
        padding: 18px;
      }

      .pathway-timeline__card-title {
        font-size: 1rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathwayPageComponent implements OnInit {
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
