import React from 'react';
import { useParams } from 'react-router-dom';
import { experienceData } from '../data/experience';
import { PageLayout } from '../components/Layout/PageLayout';
import { BackButton } from '../components/UI/BackButton';
import { ExperienceHeader } from '../components/Experience/ExperienceHeader';
import { ExperienceContent } from '../components/Experience/ExperienceContent';

export function ExperienceDetail() {
  const { id } = useParams();
  const experience = experienceData.find((exp) => exp.id === id);

  if (!experience) {
    return (
      <PageLayout>
        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <BackButton />
            <p className="text-white">Experience not found.</p>
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
            <ExperienceHeader experience={experience} />
            <ExperienceContent experience={experience} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}