import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { PARTNERS } from '../../../core/constants';

@Component({
  selector: 'app-apply-page',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container" appScrollReveal="fade-up">
        <div class="page-hero__status">
          <span class="pi pi-lock" aria-hidden="true"></span>
          Applications Closed
        </div>
        <h1 class="page-hero__title">Applications Are Currently Closed</h1>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info">
      <div class="container">
        <div class="info__card" appScrollReveal="fade-up">
          <div class="info__icon-wrapper">
            <span class="pi pi-calendar-plus info__icon" aria-hidden="true"></span>
          </div>
          <h2 class="info__title">Cohort 2 Coming Soon</h2>
          <p class="info__text">
            We are actively planning the next cohort of the Inuka Digital Leap programme. Cohort 2
            will expand to an increased intake of trainees. Details will be announced here and
            across our communication channels.
          </p>
          <div class="info__actions">
            <!-- <a href="mailto:info@jhubafrica.com" class="info__btn">
              <span class="pi pi-envelope" aria-hidden="true"></span>
              Get notified
            </a> -->
            <a routerLink="/" class="info__btn info__btn--outline">
              <span class="pi pi-home" aria-hidden="true"></span>
              Return home
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="timeline">
      <div class="container" appScrollReveal="fade-up">
        <h2 class="timeline__heading">What to Expect for Cohort 2</h2>
        <div class="timeline__grid">
          <div class="timeline__item">
            <div class="timeline__dot"></div>
            <h3 class="timeline__title">Expanded Reach</h3>
            <p class="timeline__text">
              Training centres in additional counties, bringing the programme closer to more
              communities.
            </p>
          </div>
          <div class="timeline__item">
            <div class="timeline__dot"></div>
            <h3 class="timeline__title">Larger Cohort</h3>
            <p class="timeline__text">
              Increased intake to train more trainees in the next cohort.
            </p>
          </div>
          <div class="timeline__item">
            <div class="timeline__dot"></div>
            <h3 class="timeline__title">Enhanced Curriculum</h3>
            <p class="timeline__text">
              New modules in 5G technology, network automation, and advanced fibre optic
              engineering.
            </p>
          </div>
          <div class="timeline__item">
            <div class="timeline__dot"></div>
            <h3 class="timeline__title">Announcement</h3>
            <p class="timeline__text">
              Official launch date and application details will be published on this page and our
              social channels.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners">
      <div class="container">
        <div class="partners__header" appScrollReveal="fade-up">
          <span class="partners__label">Our Partners</span>
          <h2 class="partners__title">Backed by Kenya's Leading Institutions</h2>
        </div>
        <div class="partners__grid" appScrollReveal="fade-up">
          @for (partner of partners; track partner.name) {
            <div class="partners__card">
              <img [src]="partner.logo" [alt]="partner.alt" class="partners__logo" loading="lazy" />
              <span class="partners__name">{{ partner.fullName }}</span>
            </div>
          }
        </div>
        <div class="partners__cta" appScrollReveal="fade-up">
          <a routerLink="/partners" class="partners__cta-link">
            Learn more about our partners
            <span class="pi pi-arrow-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        background: url('/assets/fibre-cable.png') center / cover no-repeat;
        padding: 120px 0 100px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .page-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
          ellipse at 30% 50%,
          rgba(237, 27, 36, 0.12) 0%,
          transparent 60%
        );
        pointer-events: none;
      }

      .page-hero__status {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font: var(--label-caps);
        color: var(--color-gold);
        background: rgba(212, 160, 23, 0.12);
        padding: 6px 18px;
        border-radius: var(--rounded-full);
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
      }

      .page-hero__title {
        font-family: var(--font-heading);
        font-size: clamp(2rem, 5vw, 3.25rem);
        font-weight: 800;
        color: #fff;
        margin: 0 0 16px;
        line-height: 1.15;
        position: relative;
        z-index: 1;
      }

      .page-hero__subtitle {
        max-width: 560px;
        margin: 0 auto;
        font-family: var(--font-body);
        font-size: 1.05rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.7);
        position: relative;
        z-index: 1;
      }

      .info {
        padding: 80px 0;
        background: var(--color-surface);
      }

      .info__card {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-2xl);
        padding: 48px 40px;
      }

      .info__icon-wrapper {
        width: 64px;
        height: 64px;
        border-radius: var(--rounded-2xl);
        background: rgba(237, 27, 36, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
      }

      .info__icon {
        font-size: 1.75rem;
        color: var(--color-electric-blue);
      }

      .info__title {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 12px;
      }

      .info__text {
        font-family: var(--font-body);
        font-size: 0.95rem;
        line-height: 1.7;
        color: var(--color-on-surface-variant);
        margin: 0 0 28px;
      }

      .info__actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .info__btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-body);
        font-size: 0.9rem;
        font-weight: 600;
        padding: 12px 24px;
        border-radius: var(--rounded-full);
        text-decoration: none;
        transition: all var(--transition-base);

        background: var(--color-electric-blue);
        color: #fff;

        &:hover {
          box-shadow: var(--shadow-glow-blue);
          transform: translateY(-2px);
        }

        &--outline {
          background: transparent;
          color: var(--color-on-surface-variant);
          border: 1px solid var(--color-outline-variant);

          &:hover {
            border-color: var(--color-electric-blue);
            color: var(--color-electric-blue);
            box-shadow: none;
            transform: translateY(-2px);
          }
        }
      }

      .timeline {
        padding: 0 0 80px;
        background: var(--color-surface);
      }

      .timeline__heading {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        text-align: center;
        margin: 0 0 48px;
      }

      .timeline__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        max-width: 900px;
        margin: 0 auto;
      }

      .timeline__item {
        text-align: center;
        position: relative;
        padding-top: 32px;
      }

      .timeline__dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-electric-blue);
        margin: 0 auto 16px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: calc(50% + 12px);
          width: calc(100% + 24px);
          height: 2px;
          background: var(--color-outline-variant);
          transform: translateY(-50%);
        }
      }

      .timeline__item:first-child .timeline__dot::before {
        display: none;
      }

      .timeline__title {
        font-family: var(--font-heading);
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 8px;
      }

      .timeline__text {
        font-family: var(--font-body);
        font-size: 0.85rem;
        line-height: 1.6;
        color: var(--color-on-surface-variant);
        margin: 0;
      }

      .partners {
        padding: 60px 0 100px;
        background: var(--color-surface-container-low);
      }

      .partners__header {
        text-align: center;
        margin-bottom: 48px;
      }

      .partners__label {
        display: inline-block;
        font: var(--label-caps);
        color: var(--color-electric-blue);
        background: rgba(237, 27, 36, 0.08);
        padding: 4px 16px;
        border-radius: var(--rounded-full);
        margin-bottom: 12px;
      }

      .partners__title {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0;
      }

      .partners__grid {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        flex-wrap: wrap;
      }

      .partners__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 36px 48px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl);
        min-width: 240px;
        flex: 1;
        max-width: 320px;
      }

      .partners__logo {
        height: 60px;
        width: auto;
        object-fit: contain;
      }

      .partners__name {
        font-family: var(--font-body);
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-on-surface-variant);
        text-align: center;
        line-height: 1.4;
      }

      .partners__cta {
        text-align: center;
        margin-top: 48px;
      }

      .partners__cta-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-body);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-electric-blue);
        padding: 12px 28px;
        border: 1px solid var(--color-electric-blue);
        border-radius: var(--rounded-full);
        text-decoration: none;
        transition: all var(--transition-base);

        &:hover {
          background: var(--color-electric-blue);
          color: #fff;
          gap: 12px;
        }
      }

      @media (max-width: 1024px) {
        .timeline__grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .timeline__dot::before {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .page-hero {
          padding: 100px 0 70px;
        }

        .info__card {
          padding: 32px 24px;
        }

        .timeline__grid {
          grid-template-columns: 1fr;
          gap: 32px;
        }

        .partners__card {
          padding: 24px 32px;
          max-width: 100%;
        }

        .partners__logo {
          height: 48px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyPageComponent {
  protected readonly partners = PARTNERS;
}
