import React from 'react';
import { SkillsList } from '../components/Sidebar/SkillsList';
import { Bio } from '../components/Resume/Bio';
import { Experience } from '../components/Resume/Experience';
import { Education } from '../components/Resume/Education';
import { Projects } from '../components/Resume/Projects';
import { Publications } from '../components/Resume/Publications';
import { PageLayout } from '../components/Layout/PageLayout';

export function Resume() {
  return (
    <PageLayout>
      <div className="flex">
        <SkillsList />
        <main className="flex-1 p-8 space-y-8">
          <Bio />
          <Experience />
          <Projects />
          <Publications />
          <Education />
        </main>
      </div>
    </PageLayout>
  );
}