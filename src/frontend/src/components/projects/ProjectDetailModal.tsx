import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailModal({ project, open, onOpenChange }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <DialogDescription className="flex flex-wrap gap-4 text-sm pt-2">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

