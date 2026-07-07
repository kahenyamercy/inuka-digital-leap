import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { RouterLink } from '@angular/router';
import { PartnerService } from '../../../core/services/partner.service';
import { Partner } from '../../../core/models/partner.model';

@Component({
  selector: 'app-partners-page',
  standalone: true,
  imports: [ScrollRevealDirective, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container" appScrollReveal="fade-up">
        <span class="page-hero__label">Our Partners</span>
        <h1 class="page-hero__title">Backed by Kenya's Leading Institutions</h1>
        <p class="page-hero__subtitle">
          The Inuka Digital Leap programme is made possible through the commitment and
          expertise of our partner organisations.
        </p>
      </div>
    </section>

    <section class="partners-page">
      <div class="container">
        @if (loading()) {
          <div class="partners-page__loading">
            <span class="pi pi-spin pi-spinner" style="font-size: 2rem;"></span>
            <p>Loading partners...</p>
          </div>
        }
        <div class="partners-page__list">
          @for (partner of partners(); track partner.id; let i = $index) {
            <div class="partners-page__card" appScrollReveal="fade-up" [delay]="i * 120">
              <div class="partners-page__card-logo">
                @if (partner.logo) {
                  <img [src]="partner.logo" [alt]="partner.name" class="partners-page__logo-img" loading="lazy" />
                } @else {
                  <span class="partners-page__logo-placeholder">{{ partner.name.charAt(0) }}</span>
                }
              </div>
              <div class="partners-page__card-body">
                <div class="partners-page__card-type">
                  <span class="partners-page__type-badge">{{ partner.role }}</span>
                  @if (partner.is_required_acknowledgement) {
                    <span class="partners-page__type-badge partners-page__type-badge--primary">Primary Sponsor</span>
                  }
                </div>
                <h2 class="partners-page__card-name">{{ partner.name }}</h2>
                <p class="partners-page__card-description">{{ partner.description }}</p>
                @if (partner.website_url) {
                  <a [href]="partner.website_url" target="_blank" rel="noopener noreferrer" class="partners-page__card-link">
                    Visit website <span class="pi pi-external-link" aria-hidden="true"></span>
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="partners-cta">
      <div class="container" appScrollReveal="fade-up">
        <h2 class="partners-cta__title">Become a Partner</h2>
        <p class="partners-cta__text">
          Join us in building Kenya's digital workforce. Partner with Inuka Digital Leap
          to support technical training, provide industry attachments, or sponsor future cohorts.
        </p>
        <a routerLink="/contact" class="partners-cta__btn">
          Get in touch <span class="pi pi-arrow-right" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      background: url('/assets/network-broadband.jpg') center / cover no-repeat;
      padding: 120px 0 100px; text-align: center; position: relative; overflow: hidden;
    }
    .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(237,27,36,0.12) 0%, transparent 60%); pointer-events: none; }
    .page-hero__label { display: inline-block; font: var(--label-caps); color: var(--color-electric-blue); background: rgba(237,27,36,0.12); padding: 4px 16px; border-radius: var(--rounded-full); margin-bottom: 16px; }
    .page-hero__title { font-family: var(--font-heading); font-size: clamp(2rem,5vw,3.25rem); font-weight: 800; color: #fff; margin: 0 0 16px; line-height: 1.15; }
    .page-hero__subtitle { max-width: 640px; margin: 0 auto; font-family: var(--font-body); font-size: 1.05rem; line-height: 1.7; color: rgba(255,255,255,0.75); }
    .partners-page { padding: 80px 0; background: var(--color-surface-container-low); }
    .partners-page__loading { text-align: center; padding: 60px; color: var(--color-on-surface-variant); font-family: var(--font-body); display: flex; flex-direction: column; align-items: center; gap: 16px; }
    .partners-page__list { display: flex; flex-direction: column; gap: 32px; max-width: 900px; margin: 0 auto; }
    .partners-page__card { display: grid; grid-template-columns: 240px 1fr; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-2xl); overflow: hidden; transition: all var(--transition-base); }
    .partners-page__card:hover { border-color: var(--color-electric-blue); box-shadow: var(--shadow-glow-blue); }
    .partners-page__card-logo { display: flex; align-items: center; justify-content: center; padding: 40px 32px; background: var(--color-surface); border-right: 1px solid var(--color-outline-variant); }
    .partners-page__logo-img { max-width: 160px; max-height: 80px; object-fit: contain; }
    .partners-page__logo-placeholder { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green)); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: white; }
    .partners-page__card-body { padding: 32px 40px; display: flex; flex-direction: column; gap: 16px; }
    .partners-page__type-badge { display: inline-block; font: var(--label-caps); font-size: 0.65rem; color: var(--color-electric-blue); background: rgba(237,27,36,0.08); padding: 3px 12px; border-radius: var(--rounded-full); margin-right: 8px; }
    .partners-page__type-badge--primary { color: var(--color-emerald-green); background: rgba(22,196,127,0.08); }
    .partners-page__card-name { font-family: var(--font-heading); font-size: 1.35rem; font-weight: 700; color: var(--color-deep-navy); margin: 0; line-height: 1.3; }
    .partners-page__card-description { font-family: var(--font-body); font-size: 0.9rem; line-height: 1.7; color: var(--color-on-surface-variant); margin: 0; }
    .partners-page__card-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-body); font-size: 0.85rem; font-weight: 600; color: var(--color-electric-blue); text-decoration: none; transition: gap var(--transition-fast); }
    .partners-page__card-link:hover { gap: 10px; }
    .partners-cta { padding: 80px 0 100px; background: var(--color-surface); text-align: center; }
    .partners-cta__title { font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 12px; }
    .partners-cta__text { max-width: 560px; margin: 0 auto 28px; font-family: var(--font-body); font-size: 1rem; line-height: 1.7; color: var(--color-on-surface-variant); }
    .partners-cta__btn { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; color: #fff; background: var(--color-electric-blue); padding: 14px 32px; border-radius: var(--rounded-full); text-decoration: none; transition: all var(--transition-base); }
    .partners-cta__btn:hover { gap: 12px; box-shadow: var(--shadow-glow-blue); }
    @media (max-width: 768px) {
      .partners-page__card { grid-template-columns: 1fr; }
      .partners-page__card-logo { padding: 32px; border-right: none; border-bottom: 1px solid var(--color-outline-variant); }
      .partners-page__card-body { padding: 24px; }
      .page-hero { padding: 100px 0 70px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersPageComponent implements OnInit {
  private readonly partnerService = inject(PartnerService);
  protected readonly partners = signal<Partner[]>([]);
  protected readonly loading = signal(true);

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe({
      next: (data) => { this.partners.set(data); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
}
