import React, { useState, useMemo } from 'react';
import { projectCategories, projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { SectionHeading } from '../components/SectionHeading';
import { Info } from 'lucide-react';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 bg-[#161514] border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CURATED PORTFOLIO"
          title="A Reflection of Our Work."
          subtitle="Every space tells a story. Explore some of the possibilities of glass."
          align="center"
        />

        {/* Category Filter Navigation Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8 md:mb-10">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-[#121110] shadow-md border border-gold scale-105'
                    : 'bg-[#1F1D1B] hover:bg-[#2A2724] text-[#D4CBC0] border border-gold/25'
                }`}
              >
                {cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Concept Notice */}
        <div className="max-w-3xl mx-auto mb-8 p-3 rounded-xl bg-[#1F1D1B] border border-gold/30 flex items-start gap-2.5 text-xs text-[#A89F91]">
          <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <p>
            The gallery presents curated architectural glass concepts to illustrate spatial and finishing possibilities. Bespoke layouts are engineered specifically for your site.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredProjects.map((project, idx) => {
            const isFeaturedSpan = (project.aspect === 'featured' || idx === 0) && activeCategory === 'all';
            
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(p) => setSelectedProject(p)}
                className={isFeaturedSpan ? 'sm:col-span-2 lg:col-span-2' : ''}
              />
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
