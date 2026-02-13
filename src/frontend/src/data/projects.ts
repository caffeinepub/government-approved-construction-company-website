export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'metro-tower',
    title: 'Metro Tower Complex',
    location: 'Downtown Metro City',
    year: 2024,
    shortDescription: '42-story mixed-use development with retail and residential spaces',
    longDescription:
      'A landmark 42-story mixed-use tower featuring 300 luxury residential units, ground-floor retail spaces, and underground parking. This project showcases our expertise in high-rise construction with advanced structural engineering and sustainable building practices. Completed on schedule and within budget, meeting all government safety and environmental standards.',
    image: '/assets/generated/project-thumb-01.dim_800x600.png',
    category: 'Commercial',
  },
  {
    id: 'riverside-bridge',
    title: 'Riverside Infrastructure Bridge',
    location: 'Riverside County',
    year: 2023,
    shortDescription: 'Major infrastructure project connecting two counties',
    longDescription:
      'A critical infrastructure project spanning 2.5 miles across the Riverside Valley, connecting two major counties and improving regional transportation. This bridge features state-of-the-art seismic protection systems and was built to withstand extreme weather conditions. The project required extensive coordination with multiple government agencies and environmental compliance measures.',
    image: '/assets/generated/project-thumb-03.dim_800x600.png',
    category: 'Infrastructure',
  },
  {
    id: 'greenfield-hospital',
    title: 'Greenfield Medical Center',
    location: 'Greenfield Township',
    year: 2023,
    shortDescription: 'State-of-the-art 250-bed hospital facility',
    longDescription:
      'A comprehensive healthcare facility featuring 250 beds, advanced surgical suites, emergency department, and diagnostic imaging centers. Built to the highest healthcare construction standards with specialized HVAC systems, medical gas infrastructure, and infection control measures. This project demonstrates our capability in complex healthcare construction.',
    image: '/assets/generated/project-thumb-04.dim_800x600.png',
    category: 'Healthcare',
  },
  {
    id: 'oakwood-school',
    title: 'Oakwood Elementary School',
    location: 'Oakwood District',
    year: 2022,
    shortDescription: 'Modern educational facility for 800 students',
    longDescription:
      'A modern K-6 elementary school designed for 800 students, featuring flexible learning spaces, STEM labs, gymnasium, and outdoor learning areas. The facility incorporates energy-efficient systems, natural lighting, and sustainable materials. Built in compliance with all educational facility standards and accessibility requirements.',
    image: '/assets/generated/project-thumb-05.dim_800x600.png',
    category: 'Education',
  },
  {
    id: 'harbor-logistics',
    title: 'Harbor Logistics Center',
    location: 'Port District',
    year: 2022,
    shortDescription: '500,000 sq ft distribution and warehouse facility',
    longDescription:
      'A massive 500,000 square foot logistics and distribution center featuring advanced warehouse management systems, loading docks, and office spaces. The facility includes high-bay storage areas, climate-controlled sections, and modern security systems. Designed for efficient operations with sustainable building practices and energy management systems.',
    image: '/assets/generated/project-thumb-06.dim_800x600.png',
    category: 'Industrial',
  },
  {
    id: 'sunset-residential',
    title: 'Sunset Hills Residential Community',
    location: 'Sunset Hills',
    year: 2021,
    shortDescription: '150-unit residential community with amenities',
    longDescription:
      'A thoughtfully planned residential community featuring 150 single-family homes and townhouses with community amenities including a clubhouse, pool, and parks. The development emphasizes sustainable living with energy-efficient homes, green spaces, and pedestrian-friendly design. All construction met strict residential building codes and HOA standards.',
    image: '/assets/generated/project-thumb-01.dim_800x600.png',
    category: 'Residential',
  },
];

