import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { SITE_CONFIG, NAV_LINKS } from '../../constants';
import { PartnerService } from '../../services/partner.service';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  private readonly partnerService = inject(PartnerService);

  protected readonly siteName = SITE_CONFIG.name;
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly partners = signal<Partner[]>([]);
  protected readonly currentYear = new Date().getFullYear();
  private readonly allLinks = [...NAV_LINKS];
  protected readonly quickLinksCol1 = this.allLinks.slice(0, Math.ceil(this.allLinks.length / 2));
  protected readonly quickLinksCol2 = this.allLinks.slice(Math.ceil(this.allLinks.length / 2));

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe({
      next: (data) => this.partners.set(data),
      error: () => {}
    });
  }
}
