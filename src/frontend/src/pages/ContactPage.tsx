import PageSection from '../components/layout/PageSection';
import ContactForm from '../components/contact/ContactForm';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BRAND_CONSTANTS } from '../components/design/BrandTokens';

export default function ContactPage() {
  useDocumentTitle('Contact Us - BuildRight Construction');

  return (
    <div>
      <PageSection className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get in touch with our team to discuss your construction project. We're here to answer your questions and
            provide expert guidance.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're planning a new construction project or have questions about our services, our team is
                ready to help. Contact us today for a free consultation.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{BRAND_CONSTANTS.address}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Phone className="h-5 w-5 text-secondary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{BRAND_CONSTANTS.phone}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Mail className="h-5 w-5 text-secondary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{BRAND_CONSTANTS.email}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Clock className="h-5 w-5 text-secondary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: {BRAND_CONSTANTS.businessHours.weekday}</p>
                    <p>Saturday: {BRAND_CONSTANTS.businessHours.saturday}</p>
                    <p>Sunday: {BRAND_CONSTANTS.businessHours.sunday}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

