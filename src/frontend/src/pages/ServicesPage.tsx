import PageSection from '../components/layout/PageSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Construction, Hospital, School, Factory, Home } from 'lucide-react';

export default function ServicesPage() {
  useDocumentTitle('Services - BuildRight Construction');

  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description:
        'Office buildings, retail centers, and mixed-use developments built to the highest standards. We specialize in complex commercial projects that require precise coordination and expert project management.',
    },
    {
      icon: Construction,
      title: 'Infrastructure Development',
      description:
        'Roads, bridges, utilities, and public works projects that serve communities for decades. Our infrastructure expertise includes transportation systems, water management, and critical public facilities.',
    },
    {
      icon: Hospital,
      title: 'Healthcare Facilities',
      description:
        'Hospitals, medical centers, and specialized healthcare facilities with advanced systems. We understand the unique requirements of healthcare construction, including infection control and specialized infrastructure.',
    },
    {
      icon: School,
      title: 'Educational Buildings',
      description:
        'Schools, universities, and training facilities designed for modern learning environments. Our educational projects incorporate flexible spaces, technology integration, and sustainable design principles.',
    },
    {
      icon: Factory,
      title: 'Industrial & Warehouse',
      description:
        'Manufacturing facilities, distribution centers, and logistics hubs optimized for operations. We deliver industrial projects with specialized systems, high-bay construction, and efficient layouts.',
    },
    {
      icon: Home,
      title: 'Residential Development',
      description:
        'Multi-family housing, residential communities, and mixed-use developments. Our residential projects balance quality construction with livability, creating communities where people thrive.',
    },
  ];

  return (
    <div>
      <PageSection className="bg-muted/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive construction solutions across multiple sectors, delivered with expertise, precision, and an
            unwavering commitment to quality and safety.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="border-2 transition-all hover:shadow-construction hover:border-secondary/50">
                <CardHeader>
                  <Icon className="h-12 w-12 text-secondary mb-3" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3">Planning & Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with architects, engineers, and stakeholders to develop comprehensive plans that address
                all project requirements, from regulatory compliance to budget constraints.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Project Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced project managers coordinate all aspects of construction, ensuring timely delivery,
                quality control, and effective communication with all parties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rigorous inspection processes and quality control measures at every stage ensure that all work meets or
                exceeds industry standards and project specifications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Safety Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive safety programs, regular training, and strict OSHA compliance protect our workers and
                ensure safe job sites throughout every project.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

