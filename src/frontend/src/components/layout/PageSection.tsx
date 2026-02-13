import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function PageSection({ children, className = '', containerClassName = '', id }: PageSectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`container max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

