import { Link } from '@tanstack/react-router';
import BrandLogo from '../brand/BrandLogo';
import { BRAND_CONSTANTS } from '../design/BrandTokens';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'construction-site'
  );

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BrandLogo className="h-10 w-10" />
              <span className="font-bold text-lg">{BRAND_CONSTANTS.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Government-approved construction excellence since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{BRAND_CONSTANTS.address}</li>
              <li>{BRAND_CONSTANTS.phone}</li>
              <li>{BRAND_CONSTANTS.email}</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday: {BRAND_CONSTANTS.businessHours.weekday}</li>
              <li>Saturday: {BRAND_CONSTANTS.businessHours.saturday}</li>
              <li>Sunday: {BRAND_CONSTANTS.businessHours.sunday}</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4">
            <strong>Disclaimer:</strong> All government approvals, certifications, and permits listed on this website
            are subject to verification and may vary by project location and scope. Please contact us directly to
            confirm specific requirements for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} {BRAND_CONSTANTS.name}. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-secondary fill-secondary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

