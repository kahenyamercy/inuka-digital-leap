import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <section class="cta section-padding" id="cta">
      <div class="cta__bg" aria-hidden="true">
        <div class="cta__bg-image" [style.background-image]="'url(assets/discussion.jpg)'"></div>
        <div class="cta__bg-overlay"></div>
        <div class="cta__fibre">
          <svg class="cta__fibre-svg" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path
              d="M0,200 Q360,50 720,200 T1440,200"
              fill="none"
              stroke="rgba(0,174,239,0.08)"
              stroke-width="1.5"
            />
            <path
              d="M0,250 Q360,100 720,250 T1440,250"
              fill="none"
              stroke="rgba(0,174,239,0.05)"
              stroke-width="1"
            />
          </svg>
        </div>
        <div class="cta__glow cta__glow--1"></div>
        <div class="cta__glow cta__glow--2"></div>
      </div>

      <div class="container">
        <div class="cta__content" appScrollReveal="fade-up" [delay]="0">
          <span class="cta__badge">Join the Movement</span>
          <h2 class="cta__title">Shape Kenya's Digial Future</h2>
          <p class="cta__subtitle">
            Are you a talented Kenyan youth ready to build the nation's digital infrastructure?
            Applications for Cohort 1 are now closed.
          </p>
          <div class="cta__actions">
            <a routerLink="/apply" class="cta__btn cta__btn--primary">
              Apply Now
              <span class="pi pi-arrow-right" aria-hidden="true"></span>
            </a>
          </div>
          <p class="cta__deadline">Cohort 1 Selection Ongoing</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta {
        position: relative;
        background: var(--color-deep-navy);
        overflow: hidden;
        text-align: center;
      }

      .cta__bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }

      .cta__bg-image {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        animation: ctaZoom 12s ease-in-out infinite alternate;
      }

      .cta__bg-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(7, 27, 52, 0.7) 0%,
          rgba(7, 27, 52, 0.85) 50%,
          rgba(7, 27, 52, 0.95) 100%
        );
        z-index: 1;
      }

      @keyframes ctaZoom {
        from { transform: scale(1); }
        to   { transform: scale(1.08); }
      }

      .cta__fibre {
        position: absolute;
        inset: 0;
      }

      .cta__fibre-svg {
        width: 100%;
        height: 100%;
      }

      .cta__glow {
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

      .cta__content {
        position: relative;
        z-index: 2;
        max-width: 640px;
        margin: 0 auto;
      }

      .cta__badge {
        display: inline-block;
        font: var(--label-caps);
        letter-spacing: 0.15em;
        color: var(--color-electric-blue);
        border: 1px solid rgba(237, 27, 36, 0.3);
        padding: 6px 16px;
        border-radius: var(--rounded-md);
        background: rgba(237, 27, 36, 0.08);
        margin-bottom: 24px;
      }

      .cta__title {
        font-family: var(--font-heading);
        font-size: 2.75rem;
        font-weight: 800;
        color: white;
        margin: 0 0 16px;
        line-height: 1.15;
      }

      .cta__subtitle {
        font-family: var(--font-body);
        font-size: 1.1rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.8);
        margin: 0 auto 32px;
        max-width: 500px;
      }

      .cta__subtitle {
        font-family: var(--font-body);
        font-size: 1.1rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.65);
        margin: 0 0 36px;
      }

      .cta__actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .cta__btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 16px 36px;
        font-family: var(--font-body);
        font-size: 1rem;
        font-weight: 600;
        border-radius: 9999px;
        transition: all var(--transition-base);
        cursor: pointer;

        &--primary {
          background: var(--color-electric-blue);
          color: white;
          border: none;

          &:hover {
            background: #0095d4;
            box-shadow: var(--shadow-glow-blue);
            transform: translateY(-2px);
          }
        }

        &--secondary {
          background: transparent;
          color: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(255, 255, 255, 0.25);

          &:hover {
            border-color: rgba(255, 255, 255, 0.5);
            background: rgba(255, 255, 255, 0.06);
            transform: translateY(-2px);
          }
        }
      }

      .cta__deadline {
        font-family: var(--font-body);
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.4);
        margin: 24px 0 0;
      }

      @media (max-width: 768px) {
        .cta__title {
          font-size: 1.75rem;
        }

        .cta__subtitle {
          font-size: 1rem;
        }

        .cta__btn {
          width: 100%;
          justify-content: center;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCtaComponent {}
