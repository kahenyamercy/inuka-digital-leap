import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Pillar {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <main>
      <section class="about-hero">
        <div class="about-hero__bg" aria-hidden="true">
          <div
            class="about-hero__image"
            [style.background-image]="'url(assets/about-idl.png)'"
          ></div>
          <div class="about-hero__overlay"></div>
          <div class="about-hero__glow about-hero__glow--1"></div>
          <div class="about-hero__glow about-hero__glow--2"></div>
        </div>
        <div class="container">
          <div class="about-hero__content">
            <span class="about-hero__badge">About Inuka Digital Leap</span>
            <h1 class="about-hero__title">Building Kenya's Digital Future</h1>
            <p class="about-hero__subtitle">
              A transformative partnership between Kenya Pipeline Company Foundation, JHUB Africa
              and JKUAT equipping Kenyan youth with world-class digital infrastructure skills.
            </p>
          </div>
        </div>
      </section>

      <section class="about-story section-padding">
        <div class="container">
          <div class="about-story__layout">
            <div class="about-story__visual" appScrollReveal="fade-right" [delay]="0">
              <div class="about-story__image-block">
                <img
                  src="assets/about-idl.png"
                  alt="Inuka Digital Leap training lab session"
                  class="about-story__image"
                  loading="lazy"
                />
              </div>
              <div class="about-story__stats">
                <div class="about-story__stat">
                  <span class="about-story__stat-value">2026</span>
                  <span class="about-story__stat-label">Program Launched</span>
                </div>
                <div class="about-story__stat-divider"></div>
                <div class="about-story__stat">
                  <span class="about-story__stat-value">15</span>
                  <span class="about-story__stat-label">Pioneer Trainees</span>
                </div>
                <div class="about-story__stat-divider"></div>
                <div class="about-story__stat">
                  <span class="about-story__stat-value">3</span>
                  <span class="about-story__stat-label">Industry Partners</span>
                </div>
              </div>
            </div>
            <div class="about-story__content" appScrollReveal="fade-left" [delay]="100">
              <h2 class="about-story__title">Our Story</h2>
              <p class="about-story__text">
                Inuka Digital Leap was born from a shared vision between Kenya Pipeline Company
                Foundation, JHUB Africa and Jomo Kenyatta University of Agriculture & Technology
                (JKUAT) to address Kenya's critical shortage of skilled digital infrastructure
                professionals.
              </p>
              <p class="about-story__text">
                The programme provides intensive, industry-aligned training in fibre optic
                engineering, network infrastructure, broadband deployment, and digital technologies
                creating a direct pipeline from classroom to career.
              </p>
              <p class="about-story__text">
                With Kenya's digital transformation accelerating under Vision 2030, the demand for
                certified technicians and engineers has never been greater. Inuka Digital Leap is
                bridging that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-vision section-padding">
        <div class="container">
          <div class="about-vision__grid">
            <div
              class="about-vision__card about-vision__card--vision"
              appScrollReveal="fade-up"
              [delay]="0"
            >
              <div class="about-vision__card-accent about-vision__card-accent--blue"></div>
              <div class="about-vision__card-icon">
                <span class="pi pi-flag" aria-hidden="true"></span>
              </div>
              <h3 class="about-vision__card-title">Our Vision</h3>
              <p class="about-vision__card-text">
                A self-sufficient Kenya with a world-class digital infrastructure workforce driving
                national transformation and global competitiveness.
              </p>
            </div>
            <div
              class="about-vision__card about-vision__card--mission"
              appScrollReveal="fade-up"
              [delay]="100"
            >
              <div class="about-vision__card-accent about-vision__card-accent--green"></div>
              <div class="about-vision__card-icon">
                <span class="pi pi-bullseye" aria-hidden="true"></span>
              </div>
              <h3 class="about-vision__card-title">Our Mission</h3>
              <p class="about-vision__card-text">
                To identify, train, and deploy 500+ certified digital infrastructure professionals
                across Kenya by 2028, bridging the skills gap and powering the nation's digital
                economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-pillars section-padding">
        <div class="container">
          <app-section-header
            title="Our Core Pillars"
            subtitle="Four foundational principles that guide every aspect of the Inuka Digital Leap programme."
            label="Values"
          />
          <div class="about-pillars__grid">
            @for (pillar of pillars; track pillar.title; let i = $index) {
              <div class="about-pillars__card" appScrollReveal="fade-up" [delay]="i * 100">
                <div class="about-pillars__card-icon" [style.background]="pillar.color + '18'">
                  <span
                    class="pi"
                    [class]="pillar.icon"
                    aria-hidden="true"
                    [style.color]="pillar.color"
                  ></span>
                </div>
                <h3 class="about-pillars__card-title">{{ pillar.title }}</h3>
                <p class="about-pillars__card-text">{{ pillar.description }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="about-timeline section-padding">
        <div class="container">
          <app-section-header
            title="Program Milestones"
            subtitle="Key moments in our journey to transform Kenya's digital infrastructure talent landscape."
            label="Timeline"
          />
          <div class="about-timeline__grid">
            @for (milestone of milestones; track milestone.title; let i = $index) {
              <div class="about-timeline__card" appScrollReveal="fade-up" [delay]="i * 100">
                <div class="about-timeline__card-year">{{ milestone.year }}</div>
                <h3 class="about-timeline__card-title">{{ milestone.title }}</h3>
                <p class="about-timeline__card-text">{{ milestone.description }}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .about-hero {
        position: relative;
        min-height: 75vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        background: var(--color-deep-navy);
        padding-top: var(--navbar-height);
      }

      .about-hero__bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }

      .about-hero__image {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        animation: heroZoom 14s ease-in-out infinite alternate;
      }

      .about-hero__overlay {
        position: absolute;
        inset: 0;
        background: rgba(7, 27, 52, 0.08);
        pointer-events: none;
      }

      .about-hero__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        pointer-events: none;

        &--1 {
          width: 500px;
          height: 500px;
          background: rgba(237, 27, 36, 0.08);
          top: -200px;
          left: -100px;
        }

        &--2 {
          width: 400px;
          height: 400px;
          background: rgba(22, 196, 127, 0.06);
          bottom: -150px;
          right: -100px;
        }
      }

      @keyframes heroZoom {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(1.06);
        }
      }

      .about-hero__content {
        position: relative;
        z-index: 1;
        max-width: 720px;
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

      .about-hero__badge {
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

      .about-hero__title {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 900;
        line-height: 1.08;
        letter-spacing: -0.03em;
        color: white;
        margin: 0 0 16px;
      }

      .about-hero__subtitle {
        font-family: var(--font-body);
        font-size: 1.1rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
        max-width: 600px;
      }

      .about-story {
        background: var(--color-surface);
      }

      .about-story__layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }

      .about-story__visual {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .about-story__image-block {
        border-radius: var(--rounded-xl);
        overflow: hidden;
        box-shadow: var(--shadow-glass-lg);
        aspect-ratio: 4 / 3;
      }

      .about-story__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;

        &:hover {
          transform: scale(1.03);
        }
      }

      .about-story__stats {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        padding: 20px 24px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl);
      }

      .about-story__stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }

      .about-story__stat-value {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--color-deep-navy);
        line-height: 1;
      }

      .about-story__stat-label {
        font-family: var(--font-body);
        font-size: 0.7rem;
        color: var(--color-on-surface-variant);
        letter-spacing: 0.02em;
      }

      .about-story__stat-divider {
        width: 1px;
        height: 36px;
        background: var(--color-outline-variant);
      }

      .about-story__title {
        font-family: var(--font-heading);
        font-size: 2rem;
        font-weight: 800;
        color: var(--color-deep-navy);
        margin: 0 0 20px;
      }

      .about-story__text {
        font-family: var(--font-body);
        font-size: 1rem;
        line-height: 1.8;
        color: var(--color-on-surface-variant);
        margin: 0 0 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .about-vision {
        background: var(--color-surface-container-low);
      }

      .about-vision__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        max-width: 900px;
        margin: 0 auto;
      }

      .about-vision__card {
        position: relative;
        padding: 36px 32px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl);
        overflow: hidden;
        transition: all var(--transition-base);

        &:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-glass-lg);
        }
      }

      .about-vision__card-accent {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;

        &--blue {
          background: linear-gradient(90deg, var(--color-electric-blue), #0088cc);
        }

        &--green {
          background: linear-gradient(90deg, var(--color-emerald-green), #0a9e63);
        }
      }

      .about-vision__card-icon {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(237, 27, 36, 0.08);
        border-radius: var(--rounded-lg);
        margin-bottom: 20px;
      }

      .about-vision__card-icon .pi {
        font-size: 1.4rem;
        color: var(--color-electric-blue);
      }

      .about-vision__card--mission .about-vision__card-icon {
        background: rgba(22, 196, 127, 0.08);
      }

      .about-vision__card--mission .about-vision__card-icon .pi {
        color: var(--color-emerald-green);
      }

      .about-vision__card-title {
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 12px;
      }

      .about-vision__card-text {
        font-family: var(--font-body);
        font-size: 0.9rem;
        line-height: 1.7;
        color: var(--color-on-surface-variant);
        margin: 0;
      }

      .about-pillars {
        background: var(--color-surface);
      }

      .about-pillars__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }

      .about-pillars__card {
        padding: 32px 24px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl);
        transition: all var(--transition-base);
        text-align: center;
      }

      .about-pillars__card:hover {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
        transform: translateY(-6px);
      }

      .about-pillars__card-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--rounded-lg);
        margin: 0 auto 20px;
      }

      .about-pillars__card-icon .pi {
        font-size: 1.5rem;
      }

      .about-pillars__card-title {
        font-family: var(--font-heading);
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 10px;
      }

      .about-pillars__card-text {
        font-family: var(--font-body);
        font-size: 0.85rem;
        line-height: 1.7;
        color: var(--color-on-surface-variant);
        margin: 0;
      }

      .about-timeline {
        background: var(--color-surface-container-low);
      }

      .about-timeline__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .about-timeline__card {
        padding: 28px 24px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl);
        transition: all var(--transition-base);
      }

      .about-timeline__card:hover {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
        transform: translateY(-4px);
      }

      .about-timeline__card-year {
        display: inline-flex;
        font-family: var(--font-heading);
        font-size: 0.8rem;
        font-weight: 700;
        color: white;
        background: var(--color-electric-blue);
        padding: 4px 12px;
        border-radius: var(--rounded-full);
        margin-bottom: 12px;
      }

      .about-timeline__card-title {
        font-family: var(--font-heading);
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 10px;
      }

      .about-timeline__card-text {
        font-family: var(--font-body);
        font-size: 0.85rem;
        line-height: 1.7;
        color: var(--color-on-surface-variant);
        margin: 0;
      }

      @media (max-width: 1024px) {
        .about-hero__title {
          font-size: 2.5rem;
        }

        .about-story__layout {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .about-story__content {
          order: -1;
        }

        .about-vision__grid {
          grid-template-columns: 1fr;
        }

        .about-pillars__grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .about-timeline__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .about-hero {
          min-height: 60vh;
        }

        .about-hero__title {
          font-size: 1.75rem;
        }

        .about-hero__subtitle {
          font-size: 0.95rem;
        }

        .about-story__image-block {
          aspect-ratio: 16 / 9;
        }

        .about-story__stats {
          flex-direction: column;
          gap: 12px;
          padding: 16px 20px;
        }

        .about-story__stat-divider {
          width: 36px;
          height: 1px;
        }

        .about-story__title {
          font-size: 1.5rem;
        }

        .about-vision__card {
          padding: 28px 24px;
        }

        .about-pillars__grid {
          grid-template-columns: 1fr;
        }

        .about-timeline__grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  protected readonly pillars: Pillar[] = [
    {
      icon: 'pi pi-graduation',
      title: 'Technical Excellence',
      description:
        'Industry-aligned curriculum delivered by certified professionals with hands-on lab training.',
      color: 'var(--color-electric-blue)',
    },
    {
      icon: 'pi pi-briefcase',
      title: 'Industry Integration',
      description:
        'Direct partnerships with leading infrastructure companies for attachment and deployment.',
      color: 'var(--color-emerald-green)',
    },
    {
      icon: 'pi pi-heart',
      title: 'Mentorship & Support',
      description:
        'Personalised guidance from industry mentors throughout the programme and beyond.',
      color: 'var(--color-gold)',
    },
    {
      icon: 'pi pi-globe',
      title: 'National Impact',
      description:
        "Creating a sustainable pipeline of certified professionals powering Kenya's digital future.",
      color: '#8B5CF6',
    },
  ];

  protected readonly milestones: Milestone[] = [
    {
      year: '2026',
      title: 'Program Launch',
      description:
        'Inuka Digital Leap officially launched as a partnership between JKUAT, KPC Foundation, and JHUB Africa.',
    },
    {
      year: '2026',
      title: 'Cohort 1 Begins',
      description:
        'First cohort of 15 trainees begins intensive training in fibre optics and network infrastructure.',
    },
    {
      year: '2026',
      title: 'Expansion Phase',
      description: 'Programme expands to additional counties, targeting 50+ trainees across Kenya.',
    },
  ];
}
