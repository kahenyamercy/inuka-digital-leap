import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { TRAINEES } from '../../../core/constants';

@Component({
  selector: 'app-cohort-page',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <main>
      <section class="cohort-hero">
        <div class="cohort-hero__bg" aria-hidden="true">
          <div class="cohort-hero__grid"></div>
          <div class="cohort-hero__glow cohort-hero__glow--1"></div>
          <div class="cohort-hero__glow cohort-hero__glow--2"></div>
        </div>
        <div class="container">
          <div class="cohort-hero__content">
            <span class="cohort-hero__badge">Cohort 1</span>
            <h1 class="cohort-hero__title">Meet Our Pioneer Trainees</h1>
          </div>
        </div>
      </section>

      <section class="cohort-grid section-padding">
        <div class="container">
          <div class="cohort-grid__header" appScrollReveal="fade-up" [delay]="0">
            <h2 class="cohort-grid__title">Cohort 1 — Full Roster</h2>
            <p class="cohort-grid__subtitle">
              Each trainee brings unique talents and perspectives to the programme, united by a
              shared commitment to building Kenya's digital future.
            </p>
          </div>
          <div class="cohort-grid__list">
            @for (trainee of trainees; track trainee.name; let i = $index) {
              <div class="cohort-grid__card" appScrollReveal="fade-up" [delay]="(i % 4) * 80">
                <div class="cohort-grid__card-portrait">
                  <span class="cohort-grid__card-avatar"
                    >{{ trainee.name.charAt(0) }}{{ trainee.name.split(' ')[1]?.charAt(0) }}</span
                  >
                </div>
                <div class="cohort-grid__card-body">
                  <h3 class="cohort-grid__card-name">{{ trainee.name }}</h3>
                  <div class="cohort-grid__card-tags">
                    <span class="cohort-grid__card-tag cohort-grid__card-tag--county">{{
                      trainee.county
                    }}</span>
                    <span class="cohort-grid__card-tag cohort-grid__card-tag--focus">{{
                      trainee.focus
                    }}</span>
                  </div>
                  <blockquote class="cohort-grid__card-quote">
                    <p>"{{ trainee.quote }}"</p>
                  </blockquote>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .cohort-hero {
        position: relative;
        min-height: 50vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        background:
          url('/assets/fibre-ops.png') center / cover no-repeat;
        padding-top: var(--navbar-height);
      }

      .cohort-hero__bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }

      .cohort-hero__grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(237, 27, 36, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(237, 27, 36, 0.04) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      .cohort-hero__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        pointer-events: none;

        &--1 {
          width: 500px;
          height: 500px;
          background: rgba(237, 27, 36, 0.1);
          top: -200px;
          right: -100px;
        }

        &--2 {
          width: 400px;
          height: 400px;
          background: rgba(22, 196, 127, 0.06);
          bottom: -150px;
          left: -100px;
        }
      }

      .cohort-hero__content {
        position: relative;
        z-index: 1;
        max-width: 700px;
        animation: fadeInUp 0.8s ease-out both;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .cohort-hero__badge {
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

      .cohort-hero__title {
        font-family: var(--font-heading);
        font-size: 3.2rem;
        font-weight: 900;
        line-height: 1.08;
        letter-spacing: -0.03em;
        color: white;
        margin: 0 0 16px;
      }

      .cohort-hero__subtitle {
        font-family: var(--font-body);
        font-size: 1.05rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
        max-width: 600px;
      }

      .cohort-grid {
        background: var(--color-surface);
      }

      .cohort-grid__header {
        text-align: center;
        max-width: 640px;
        margin: 0 auto 48px;
      }

      .cohort-grid__title {
        font-family: var(--font-heading);
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--color-deep-navy);
        margin: 0 0 12px;
      }

      .cohort-grid__subtitle {
        font-family: var(--font-body);
        font-size: 1rem;
        line-height: 1.7;
        color: var(--color-on-surface-variant);
        margin: 0;
      }

      .cohort-grid__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }

      .cohort-grid__card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 28px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl);
        transition: all var(--transition-base);
      }

      .cohort-grid__card:hover {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
        transform: translateY(-4px);
      }

      .cohort-grid__card-portrait {
        flex-shrink: 0;
      }

      .cohort-grid__card-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: var(--rounded-xl);
        background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green));
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 800;
        color: white;
      }

      .cohort-grid__card-name {
        font-family: var(--font-heading);
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 8px;
      }

      .cohort-grid__card-tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }

      .cohort-grid__card-tag {
        display: inline-flex;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 3px 10px;
        border-radius: var(--rounded-full);
        letter-spacing: 0.02em;

        &--county {
          background: rgba(237, 27, 36, 0.08);
          color: var(--color-electric-blue);
        }

        &--focus {
          background: rgba(22, 196, 127, 0.08);
          color: var(--color-emerald-green);
        }
      }

      .cohort-grid__card-quote {
        margin: 0 0 12px;
        padding: 0;
        border: none;
      }

      .cohort-grid__card-quote p {
        font-family: var(--font-body);
        font-size: 0.85rem;
        line-height: 1.65;
        color: var(--color-on-surface-variant);
        margin: 0;
        font-style: italic;
      }

      @media (max-width: 1200px) {
        .cohort-grid__list {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 1024px) {
        .cohort-hero__title {
          font-size: 2.5rem;
        }

        .cohort-grid__list {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .cohort-hero {
          min-height: 40vh;
        }

        .cohort-hero__title {
          font-size: 1.75rem;
        }

        .cohort-hero__subtitle {
          font-size: 0.95rem;
        }

        .cohort-grid__list {
          grid-template-columns: 1fr;
        }

        .cohort-grid__title {
          font-size: 1.35rem;
        }

        .cohort-grid__card {
          padding: 24px;
          flex-direction: row;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CohortPageComponent {
  protected readonly trainees = TRAINEES;
}
