import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { PartnerService } from '../../../../core/services/partner.service';
import { Partner } from '../../../../core/models/partner.model';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <section class="partners section-padding" id="partners">
      <div class="container">
        <div class="partners__header" appScrollReveal="fade-up" [delay]="0">
          <span class="partners__label">Our Partners</span>
          <h2 class="partners__title">Backed by Kenya's Leading Institutions</h2>
          <p class="partners__subtitle">
            The Inuka Digital Leap programme is powered by the collective expertise and
            commitment of our partner organisations.
          </p>
        </div>
        <div class="partners__grid" appScrollReveal="fade-up" [delay]="100">
          @for (partner of partners(); track partner.id) {
            <div class="partners__card">
              @if (partner.logo) {
                <img [src]="partner.logo" [alt]="partner.name" class="partners__logo" loading="lazy" />
              } @else {
                <span class="partners__logo-placeholder">{{ partner.name.charAt(0) }}</span>
              }
              <span class="partners__name">{{ partner.name }}</span>
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
  styles: [`
    .partners { background: var(--color-surface-container-low); }
    .partners__header { text-align: center; margin-bottom: 48px; }
    .partners__label { display: inline-block; font: var(--label-caps); color: var(--color-electric-blue); letter-spacing: 0.12em; margin-bottom: 12px; padding: 4px 16px; border-radius: var(--rounded-full); background: rgba(237,27,36,0.08); }
    .partners__title { font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 12px; }
    .partners__subtitle { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; color: var(--color-on-surface-variant); max-width: 600px; margin: 0 auto; }
    .partners__grid { display: flex; justify-content: center; align-items: center; gap: 32px; flex-wrap: wrap; }
    .partners__card { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 36px 48px; background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl); transition: all var(--transition-base); min-width: 240px; flex: 1; max-width: 320px;
      &:hover { border-color: var(--color-electric-blue); box-shadow: var(--shadow-glow-blue); transform: translateY(-4px); }
    }
    .partners__logo { height: 60px; width: auto; object-fit: contain; }
    .partners__logo-placeholder { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green)); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: white; }
    .partners__name { font-family: var(--font-body); font-size: 0.8rem; font-weight: 600; color: var(--color-on-surface-variant); text-align: center; line-height: 1.4; }
    .partners__cta { text-align: center; margin-top: 48px; }
    .partners__cta-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; color: var(--color-electric-blue); padding: 12px 28px; border: 1px solid var(--color-electric-blue); border-radius: var(--rounded-full); transition: all var(--transition-base); text-decoration: none;
      &:hover { background: var(--color-electric-blue); color: #fff; gap: 12px; }
    }
    @media (max-width: 768px) { .partners__card { padding: 24px 32px; max-width: 100%; } .partners__logo { height: 48px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent implements OnInit {
  private readonly partnerService = inject(PartnerService);
  protected readonly partners = signal<Partner[]>([]);

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe({
      next: (data) => this.partners.set(data),
      error: () => {}
    });
  }
}
