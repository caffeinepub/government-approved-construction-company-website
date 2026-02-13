import PageSection from '../components/layout/PageSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award } from 'lucide-react';

export default function AboutPage() {
  useDocumentTitle('About Us - BuildRight Construction');

  return (
    <div>
      <PageSection className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">About BuildRight Construction</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since 2010, BuildRight Construction has been a trusted leader in government-approved construction projects,
            delivering excellence across infrastructure, commercial, healthcare, education, and residential sectors.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BuildRight Construction was founded with a clear mission: to deliver construction projects that not only
                meet but exceed government standards for safety, quality, and sustainability. What started as a small
                team of dedicated professionals has grown into a full-service construction company with a proven track
                record of successful projects across multiple sectors.
              </p>
              <p>
                Our commitment to excellence has earned us recognition as a preferred contractor for government agencies,
                healthcare institutions, educational facilities, and private developers. We take pride in our ability to
                handle complex projects while maintaining the highest standards of safety and quality.
              </p>
              <p>
                Today, BuildRight Construction employs over 200 skilled professionals, including licensed engineers,
                certified project managers, and experienced tradespeople. Our team's expertise spans all aspects of
                construction, from initial planning and design through final inspection and handover.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 pt-8">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To deliver construction projects that exceed expectations through innovation, integrity, and an
                  unwavering commitment to safety and quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To be the most trusted construction partner, recognized for building lasting infrastructure that
                  serves communities for generations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Safety, integrity, quality, innovation, and sustainability guide every decision we make and every
                  project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-4">Leadership & Expertise</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our leadership team brings together decades of construction industry experience, combining technical
              expertise with strategic vision. Led by industry veterans with backgrounds in civil engineering, project
              management, and business development, BuildRight Construction has the knowledge and capability to tackle
              projects of any scale and complexity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

