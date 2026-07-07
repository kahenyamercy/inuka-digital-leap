import { Component, signal, HostListener, AfterViewInit, OnDestroy, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAV_LINKS, SITE_CONFIG } from '../../constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly router = inject(Router);

  protected readonly siteName = SITE_CONFIG.name;
  protected readonly navLinks = NAV_LINKS;
  protected readonly isScrolled = signal(false);
  protected readonly isMobileOpen = signal(false);
  protected readonly activeSection = signal('hero');
  protected readonly showBackToTop = signal(false);
  protected readonly isHomePage = signal(this.router.url === '/' || this.router.url === '');

  private observers: IntersectionObserver[] = [];

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
    this.showBackToTop.set(window.scrollY > 600);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.initSectionObserver(), 500);
    this.checkHomePage();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.checkHomePage();
    });
  }

  ngOnDestroy(): void {
    this.observers.forEach((o) => o.disconnect());
  }

  private initSectionObserver(): void {
    const sectionIds = this.navLinks.map((l) => l.fragment);

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.activeSection.set(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      this.observers.push(observer);
    }
  }

  protected isActiveRoute(path: string): boolean {
    if (path === '/') {
      return this.router.isActive(path, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
    }
    return this.router.isActive(path, { paths: 'subset', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

  private checkHomePage(): void {
    this.isHomePage.set(this.router.url === '/' || this.router.url === '');
  }

  protected navigateTo(event: Event, path: string): void {
    event.preventDefault();
    this.closeMobileMenu();
    this.router.navigateByUrl(path);
  }

  protected scrollToSection(event: Event, fragment: string): void {
    event.preventDefault();
    this.closeMobileMenu();
    if (this.isHomePage()) {
      this.scrollToFragmentWhenReady(fragment);
    } else {
      this.router.navigateByUrl('/').then(() => {
        this.scrollToFragmentWhenReady(fragment);
      });
    }
  }

  private scrollToFragmentWhenReady(fragment: string, attempts = 20): void {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (attempts > 0) {
      setTimeout(() => this.scrollToFragmentWhenReady(fragment, attempts - 1), 50);
    }
  }

  protected toggleMobileMenu(): void {
    this.isMobileOpen.update((v) => !v);
  }

  protected closeMobileMenu(): void {
    this.isMobileOpen.set(false);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
