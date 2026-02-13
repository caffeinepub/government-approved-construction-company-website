interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = 'h-12 w-12' }: BrandLogoProps) {
  return (
    <img
      src="/assets/generated/construction-logo.dim_512x512.png"
      alt="BuildRight Construction Logo"
      className={className}
    />
  );
}

