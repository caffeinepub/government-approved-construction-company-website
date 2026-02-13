import PageSection from '../components/layout/PageSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, HardHat, ClipboardCheck, Users, AlertTriangle, Award } from 'lucide-react';

export default function SafetyQualityPage() {
  useDocumentTitle('Safety & Quality - BuildRight Construction');

  return (
    <div>
      <PageSection className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Safety & Quality Commitment</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At BuildRight Construction, safety and quality are not just priorities—they are the foundation of everything
            we do. Our comprehensive programs ensure every project meets the highest standards.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Safety Culture */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-secondary" />
              <h2 className="text-3xl font-bold">Safety Culture</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Safety is our top priority on every job site. We maintain a zero-tolerance policy for unsafe practices
                and empower every team member to stop work if they identify a safety concern. Our comprehensive safety
                program includes regular training, daily safety briefings, and continuous monitoring to ensure a safe
                working environment for all personnel.
              </p>
              <p>
                Our safety record speaks for itself: we consistently exceed industry standards with incident rates well
                below the national average. This achievement is the result of our proactive approach to safety
                management, investment in training, and commitment to creating a culture where safety is everyone's
                responsibility.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <HardHat className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-lg">Safety Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive OSHA-compliant training programs for all personnel, including specialized training for
                    high-risk activities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-lg">Hazard Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Proactive identification and mitigation of potential hazards through regular site inspections and
                    risk assessments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-lg">Safety Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dedicated safety officers on every project site, ensuring compliance and fostering a culture of
                    safety awareness.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quality Assurance */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="h-10 w-10 text-secondary" />
              <h2 className="text-3xl font-bold">Quality Assurance & Quality Control</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our quality management system ensures that every aspect of construction meets or exceeds project
                specifications and industry standards. We implement rigorous quality control processes at every stage,
                from material procurement through final inspection, to deliver projects that stand the test of time.
              </p>
              <p>
                Our ISO 9001:2015 certified quality management system provides a framework for continuous improvement
                and consistent delivery of high-quality results. Regular audits, inspections, and testing verify that
                all work meets specifications and that any issues are identified and corrected promptly.
              </p>
            </div>

            <div className="grid gap-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Material Quality Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All materials are sourced from approved suppliers and undergo inspection and testing to verify
                    compliance with specifications. We maintain detailed records of material certifications and test
                    results for every project.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Workmanship Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our skilled tradespeople are trained in the latest construction techniques and industry best
                    practices. Regular inspections by quality control personnel ensure that all work meets our high
                    standards for craftsmanship and attention to detail.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentation & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive documentation of all quality control activities, inspections, and testing provides a
                    complete record of project quality. This documentation ensures compliance with regulatory
                    requirements and provides valuable information for future maintenance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Standards & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-10 w-10 text-secondary" />
              <h2 className="text-3xl font-bold">Standards & Certifications</h2>
            </div>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <div>
                      <strong>OSHA Compliance:</strong> Full compliance with all Occupational Safety and Health
                      Administration regulations and standards.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <div>
                      <strong>ISO 9001:2015:</strong> Certified quality management system ensuring consistent delivery
                      of high-quality projects.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <div>
                      <strong>Building Codes:</strong> Adherence to all applicable international, national, state, and
                      local building codes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <div>
                      <strong>Environmental Standards:</strong> Compliance with EPA regulations and sustainable building
                      practices.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <div>
                      <strong>Industry Best Practices:</strong> Implementation of construction industry best practices
                      and continuous improvement initiatives.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

