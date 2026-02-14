import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer transition-all hover:shadow-construction hover:scale-[1.02] group"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.year}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

