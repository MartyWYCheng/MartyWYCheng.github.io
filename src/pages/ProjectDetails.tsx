import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { PageLayout } from '../components/Layout/PageLayout';
import { BackButton } from '../components/UI/BackButton';
import { ProjectHeader } from '../components/Projects/ProjectsHeader';
import { ProjectContent } from '../components/Projects/ProjectsContent';
import { PictureCarousel } from '../components/UI/PictureCarousel';

export function ProjectDetail() {
  const { id } = useParams();
  const projects = projectsData.find((proj) => proj.id === id);

  if (!projects) {
    return (
      <PageLayout>
        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <BackButton />
            <p className="text-white">Project not found.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          <BackButton />
          <div className="bg-gray-800/50 rounded-lg p-8">
            <ProjectHeader projects={projects} />
            <ProjectContent projects={projects} />
            <PictureCarousel images={projects.images || []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}