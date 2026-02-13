import PageSection from '../components/layout/PageSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileCheck, Award, CheckCircle2 } from 'lucide-react';

export default function CompliancePage() {
  useDocumentTitle('Government Approvals & Compliance - BuildRight Construction');

  const certifications = [
    {
      category: 'Federal Licenses',
      items: [
        { name: 'General Contractor License', number: 'GC-2024-789456' },
        { name: 'Federal Contractor Registration', number: 'FCR-US-123456789' },
        { name: 'EPA Lead-Safe Certification', number: 'EPA-LSC-456789' },
      ],
    },
    {
      category: 'State Certifications',
      items: [
        { name: 'State Contractor License', number: 'SCL-MC-987654' },
        { name: 'State Engineering Permit', number: 'SEP-MC-456123' },
        { name: 'Environmental Compliance Certificate', number: 'ECC-MC-789321' },
      ],
    },
    {
      category: 'Safety & Quality',
      items: [
        { name: 'OSHA Safety Certification', number: 'OSHA-SC-2024-1234' },
        { name: 'ISO 9001:2015 Quality Management', number: 'ISO-9001-BR-2024' },
        { name: 'Safety Training Certification', number: 'STC-BR-456789' },
      ],
    },
    {
      category: 'Insurance & Bonding',
      items: [
        { name: 'General Liability Insurance', number: 'GLI-5M-2024-BR' },
        { name: 'Workers Compensation Insurance', number: 'WCI-2024-BR-789' },
        { name: 'Performance Bond Capacity', number: 'PBC-50M-2024' },
      ],
    },
  ];

  return (
    <div>
      <PageSection className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-2">
            Fully Licensed & Certified
          </Badge>
          <h1 className="text-4xl font-bold md:text-5xl">Government Approvals & Compliance</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BuildRight Construction maintains all necessary federal, state, and local licenses, permits, and
            certifications required for commercial and residential construction projects.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-secondary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Shield className="h-10 w-10 text-secondary shrink-0" />
                <div>
                  <CardTitle className="text-2xl mb-2">Compliance Statement</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    BuildRight Construction is fully licensed, bonded, and insured, meeting all federal, state, and
                    local government requirements for commercial and residential construction projects. We maintain
                    active certifications in safety management, environmental compliance, and quality assurance. Our
                    commitment to regulatory compliance ensures that every project meets or exceeds all applicable
                    building codes, safety standards, and environmental regulations.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div>
            <h2 className="text-3xl font-bold mb-6">Certifications & Licenses</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((section) => (
                <Card key={section.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-secondary" />
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.number} className="space-y-1">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground font-mono">{item.number}</div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Industry Memberships & Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                  <span>Associated General Contractors (AGC)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                  <span>National Association of Home Builders (NAHB)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                  <span>U.S. Green Building Council (USGBC)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                  <span>Construction Management Association (CMAA)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-muted/30 rounded-sm p-6 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              <strong>Note:</strong> All certifications and licenses are current and regularly renewed. Specific permit
              requirements may vary based on project location, scope, and local regulations. We work closely with
              regulatory agencies to ensure full compliance for every project. For verification of any certification or
              to discuss specific compliance requirements for your project, please contact our compliance department.
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

