import { useState } from 'react';
import PageSection from '../components/layout/PageSection';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectDetailModal from '../components/projects/ProjectDetailModal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { projects, type Project } from '../data/projects';

export default function ProjectsPage() {
  useDocumentTitle('Projects - BuildRight Construction');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div>
      <PageSection className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our portfolio of successfully completed projects across infrastructure, commercial, healthcare,
            education, and residential sectors.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </div>
      </PageSection>

      <ProjectDetailModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}

