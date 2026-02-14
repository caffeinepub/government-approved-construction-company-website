import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageSection from '../components/layout/PageSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Building2, Shield, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  useDocumentTitle('BuildRight Construction - Government-Approved Construction Excellence');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/generated/hero-construction.dim_1600x800.png"
            alt="Construction site"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="mb-4">
              Government Approved & Certified
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building Excellence, Ensuring Safety
            </h1>
            <p className="text-lg text-primary-foreground/90 md:text-xl">
              Your trusted partner for government-approved construction projects. Licensed, bonded, and insured with a
              proven track record of delivering quality infrastructure, commercial, and residential developments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Government Approval Badge Section */}
      <PageSection className="bg-muted/30">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <img
              src="/assets/generated/gov-approved-badge.dim_512x512.png"
              alt="Government Approved Badge"
              className="h-48 w-48 md:h-64 md:w-64"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Fully Licensed & Government Approved</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BuildRight Construction maintains all necessary federal, state, and local licenses, permits, and
              certifications. Our commitment to regulatory compliance ensures every project meets or exceeds government
              standards for safety, quality, and environmental responsibility.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">Federal & State Licensed</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">Fully Bonded & Insured</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">OSHA Compliant</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">EPA Certified</span>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/compliance">
                View All Certifications <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* Why Choose Us */}
      <PageSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose BuildRight Construction</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Decades of experience delivering complex projects on time and within budget
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Zero-compromise safety culture with comprehensive training and strict OSHA compliance on every project.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Quality Assured</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Rigorous quality control processes and industry-leading standards ensure exceptional results.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Proven Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Over 15 years delivering infrastructure, commercial, and residential projects across the region.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Certified professionals with specialized expertise in complex construction and project management.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us today for a free consultation and discover how our government-approved construction services can
            bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

