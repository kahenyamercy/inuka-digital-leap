import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { PARTNERS, SITE_CONFIG } from '../../../core/constants';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <section class="page-hero">
      <div class="container" appScrollReveal="fade-up">
        <span class="page-hero__label">Get in Touch</span>
        <h1 class="page-hero__title">Contact Us</h1>
        <p class="page-hero__subtitle">
          Have questions about the Inuka Digital Leap programme? Reach out to our team and we'll get
          back to you as soon as possible.
        </p>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="contact__layout">
          <!-- Form -->
          <div class="contact__form-wrapper" appScrollReveal="fade-up">
            <form class="contact__form" (submit)="onSubmit($event)">
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style="display:none" />
              @if (formState() === 'success') {
                <div class="contact__alert contact__alert--success">
                  <span class="pi pi-check-circle" aria-hidden="true"></span>
                  Message sent successfully! We'll get back to you within 1-2 business days.
                </div>
              }
              @if (formState() === 'error') {
                <div class="contact__alert contact__alert--error">
                  <span class="pi pi-exclamation-circle" aria-hidden="true"></span>
                  Something went wrong. Please try again or email us directly.
                </div>
              }
              <div class="contact__field">
                <label for="name" class="contact__label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="contact__input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div class="contact__field">
                <label for="email" class="contact__label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="contact__input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div class="contact__field">
                <label for="subject" class="contact__label">Subject</label>
                <select id="subject" name="subject" class="contact__input contact__select">
                  <option value="">Select a topic</option>
                  <option value="Programme Inquiry">Programme Inquiry</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Application Question">Application Question</option>
                  <option value="Media Request">Media Request</option>
                  <option value="General Feedback">General Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="contact__field">
                <label for="message" class="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  class="contact__input contact__textarea"
                  placeholder="Tell us how we can help..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="contact__submit" [disabled]="formState() === 'sending'">
                @if (formState() === 'sending') {
                  <span class="pi pi-spin pi-spinner" aria-hidden="true"></span>
                  Sending...
                } @else {
                  <span class="pi pi-send" aria-hidden="true"></span>
                  Send message
                }
              </button>
              <p class="contact__form-note">We'll get back to you within 1-2 business days.</p>
            </form>
          </div>

          <!-- Info -->
          <div class="contact__info" appScrollReveal="fade-up">
            <div class="contact__info-card">
              <h2 class="contact__info-heading">Contact Information</h2>

              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <span class="pi pi-map-marker" aria-hidden="true"></span>
                </div>
                <div>
                  <h3 class="contact__info-label">Location</h3>
                  <p class="contact__info-value">JKUAT, Juja, Kenya</p>
                </div>
              </div>

              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <span class="pi pi-envelope" aria-hidden="true"></span>
                </div>
                <div>
                  <h3 class="contact__info-label">Email</h3>
                  <a href="mailto:info.jhub@jkuat.ac.ke" class="contact__info-link">
                    info.jhub&#64;jkuat.ac.ke
                  </a>
                </div>
              </div>

              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <span class="pi pi-phone" aria-hidden="true"></span>
                </div>
                <div>
                  <h3 class="contact__info-label">Phone</h3>
                  <a href="tel:0116-900-601" class="contact__info-link"> 0116-900-601 </a>
                </div>
              </div>

              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <span class="pi pi-share-alt" aria-hidden="true"></span>
                </div>
                <div>
                  <h3 class="contact__info-label">Follow Us</h3>
                  <div class="contact__social">
                    <a
                      href="https://x.com/JHUBAfrica"
                      class="contact__social-link"
                      aria-label="Twitter/X"
                    >
                      <span class="pi pi-twitter" aria-hidden="true"></span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/jhubafrica/"
                      class="contact__social-link"
                      aria-label="LinkedIn"
                    >
                      <span class="pi pi-linkedin" aria-hidden="true"></span>
                    </a>
                    <a
                      href="https://www.youtube.com/@JHUB-Africa"
                      class="contact__social-link"
                      aria-label="YouTube"
                    >
                      <span class="pi pi-youtube" aria-hidden="true"></span>
                    </a>
                    <a
                      href="https://www.instagram.com/jhubafrica/"
                      class="contact__social-link"
                      aria-label="Instagram"
                    >
                      <span class="pi pi-instagram" aria-hidden="true"></span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@jhubafrica"
                      class="contact__social-link"
                      aria-label="TikTok"
                    >
                      <span class="pi pi-tiktok" aria-hidden="true"></span>
                    </a>
                    <a
                      href="//https://www.facebook.com/JHUBAfrica"
                      class="contact__social-link"
                      aria-label="Facebook"
                    >
                      <span class="pi pi-facebook" aria-hidden="true"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
        background: url('/assets/networking.jpg') center / cover no-repeat;
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
          rgba(237, 27, 36, 0.04) 0%,
          transparent 60%
        );
        pointer-events: none;
      }

      .page-hero__label {
        display: inline-block;
        font: var(--label-caps);
        color: var(--color-electric-blue);
        background: rgba(237, 27, 36, 0.12);
        padding: 4px 16px;
        border-radius: var(--rounded-full);
        margin-bottom: 16px;
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
        max-width: 640px;
        margin: 0 auto;
        font-family: var(--font-body);
        font-size: 1.05rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.8);
        position: relative;
        z-index: 1;
      }

      .contact {
        padding: 80px 0;
        background: var(--color-surface);
      }

      .contact__layout {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 48px;
        align-items: start;
      }

      .contact__form-wrapper {
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-2xl);
        padding: 40px;
      }

      .contact__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .contact__field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .contact__label {
        font-family: var(--font-body);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--color-deep-navy);
      }

      .contact__input {
        font-family: var(--font-body);
        font-size: 0.9rem;
        color: var(--color-deep-navy);
        background: var(--color-surface);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-lg);
        padding: 12px 16px;
        outline: none;
        transition:
          border-color var(--transition-fast),
          box-shadow var(--transition-fast);

        &::placeholder {
          color: var(--color-on-surface-variant);
          opacity: 0.6;
        }

        &:focus {
          border-color: var(--color-electric-blue);
          box-shadow: 0 0 0 3px rgba(237, 27, 36, 0.1);
        }

        &:user-invalid {
          border-color: #dc3545;
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
        }

        &:user-valid {
          border-color: #16c47f;
          box-shadow: 0 0 0 3px rgba(22, 196, 127, 0.1);
        }
      }

      .contact__select {
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 14px center;
        cursor: pointer;
      }

      .contact__textarea {
        resize: vertical;
        min-height: 120px;
      }

      .contact__submit {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-family: var(--font-body);
        font-size: 0.95rem;
        font-weight: 600;
        color: #fff;
        background: var(--color-electric-blue);
        border: none;
        padding: 14px 32px;
        border-radius: var(--rounded-full);
        cursor: pointer;
        transition: all var(--transition-base);

        &:hover {
          box-shadow: var(--shadow-glow-blue);
          transform: translateY(-2px);
        }
      }

      .contact__form-note {
        font-family: var(--font-body);
        font-size: 0.8rem;
        color: var(--color-on-surface-variant);
        margin: 12px 0 0;
        text-align: center;
      }

      .contact__alert {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        border-radius: var(--rounded-lg);
        font-family: var(--font-body);
        font-size: 0.85rem;
        margin-bottom: 16px;

        &--success {
          background: rgba(22, 196, 127, 0.1);
          border: 1px solid rgba(22, 196, 127, 0.3);
          color: #16c47f;
        }

        &--error {
          background: rgba(220, 53, 69, 0.1);
          border: 1px solid rgba(220, 53, 69, 0.3);
          color: #dc3545;
        }

        .pi {
          font-size: 1.1rem;
        }
      }

      .contact__submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .contact__info-card {
        background: var(--color-surface-container-low);
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-2xl);
        padding: 40px 32px;
      }

      .contact__info-heading {
        font-family: var(--font-heading);
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--color-deep-navy);
        margin: 0 0 28px;
      }

      .contact__info-item {
        display: flex;
        gap: 14px;
        align-items: flex-start;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-outline-variant);

        &:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }
      }

      .contact__info-icon {
        width: 42px;
        height: 42px;
        border-radius: var(--rounded-xl);
        background: rgba(237, 27, 36, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--color-electric-blue);
        font-size: 1.1rem;
      }

      .contact__info-label {
        font-family: var(--font-body);
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-on-surface-variant);
        margin: 0 0 4px;
      }

      .contact__info-value,
      .contact__info-link {
        font-family: var(--font-body);
        font-size: 0.9rem;
        color: var(--color-deep-navy);
        margin: 0;
        line-height: 1.4;
      }

      .contact__info-link {
        text-decoration: none;
        transition: color var(--transition-fast);

        &:hover {
          color: var(--color-electric-blue);
        }
      }

      .contact__social {
        display: flex;
        gap: 8px;
        margin-top: 4px;
      }

      .contact__social-link {
        width: 36px;
        height: 36px;
        border-radius: var(--rounded-lg);
        background: var(--color-surface);
        border: 1px solid var(--color-outline-variant);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-on-surface-variant);
        font-size: 0.9rem;
        text-decoration: none;
        transition: all var(--transition-fast);

        &:hover {
          border-color: var(--color-electric-blue);
          color: var(--color-electric-blue);
          background: rgba(237, 27, 36, 0.06);
        }
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
        .contact__layout {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 768px) {
        .page-hero {
          padding: 100px 0 70px;
        }

        .contact__form-wrapper {
          padding: 24px;
        }

        .contact__info-card {
          padding: 28px 24px;
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
export class ContactPageComponent {
  protected readonly partners = PARTNERS;
  protected readonly siteUrl = SITE_CONFIG.url;
  protected readonly formState = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) return;

    this.formState.set('sending');
    const data = new FormData(form);
    const json: Record<string, string> = {};
    data.forEach((value, key) => {
      if (typeof value === 'string') json[key] = value;
    });

    try {
      const res = await fetch('https://formsubmit.co/ajax/info.jhub@jkuat.ac.ke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(json),
      });
      if (res.ok) {
        this.formState.set('success');
        form.reset();
      } else {
        this.formState.set('error');
      }
    } catch {
      this.formState.set('error');
    }
  }
}
