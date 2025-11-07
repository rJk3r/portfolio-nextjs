'use client';

import { useState } from 'react';
import { projects, categories } from '../../components/ui/lib/data';
import type { Project } from '../../components/ui/lib/data';
import { ProjectCard } from '../../components/ui/ProjectCard';
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

type Category = typeof categories[number] | 'All';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedCategory as any));
  
  const allCategories: Category[] = ['All', ...categories];

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tight">
          Welcome to my <span className="text-primary">Realm</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          A collection of my work in code, design, 3D, art, and music. Dive in and explore my creations.
        </p>
      </section>

      <section>
        <div className="flex justify-center mb-8">
            <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as Category)}>
                <TabsList>
                    {allCategories.map(category => (
                        <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
            <div className="text-center col-span-full py-16 text-muted-foreground">
                <p>No projects found in this category yet. Stay tuned!</p>
            </div>
        )}
      </section>
    </div>
  );
}
