import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type ProjectTag = '3D' | 'Code' | 'Design' | 'Art' | 'Music' | 'Other';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: ImagePlaceholder;
  tags: ProjectTag[];
  link: string;
}

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
      console.error(`Placeholder image with id "${id}" not found.`);
      // Return a fallback to prevent crashing
      return {
        id: 'fallback',
        description: 'Fallback image',
        imageUrl: 'https://picsum.photos/seed/fallback/600/400',
        imageHint: 'abstract'
      };
    }
    return img;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'UE5 Voxel Engine',
    description: 'A performant voxel engine built from scratch in C++ for Unreal Engine 5, enabling fully destructible environments and dynamic world generation.',
    image: getImage('project-code-1'),
    tags: ['Code', '3D'],
    link: 'https://github.com',
  },
  {
    id: 'p2',
    title: 'Cyberpunk Alleyway',
    description: 'A detailed 3D environment created in Blender and rendered with Cycles, showcasing advanced lighting and texturing techniques.',
    image: getImage('project-3d-1'),
    tags: ['3D', 'Art'],
    link: '#',
  },
  {
    id: 'p3',
    title: 'Nebula UI Kit',
    description: 'A comprehensive design system and component library for futuristic applications, designed in Figma with a focus on accessibility and modularity.',
    image: getImage('project-design-1'),
    tags: ['Design'],
    link: '#',
  },
  {
    id: 'p4',
    title: 'Synthwave Dreams',
    description: 'An EP of 5 original synthwave tracks produced using Ableton Live, featuring vintage analog synth sounds and driving retro beats.',
    image: getImage('project-music-1'),
    tags: ['Music'],
    link: '#',
  },
  {
    id: 'p5',
    title: 'WPF Data Visualization Tool',
    description: 'A custom control library for the .NET Framework using C# and WPF to create interactive charts and graphs for complex datasets.',
    image: getImage('project-code-2'),
    tags: ['Code'],
    link: 'https://github.com',
  },
  {
    id: 'p6',
    title: 'Character Concept: The Wanderer',
    description: 'High-poly character sculpt in Blender, showcasing organic modeling and detailed texturing for a game-ready asset.',
    image: getImage('project-3d-2'),
    tags: ['3D', 'Art'],
    link: '#',
  },
  {
    id: 'p7',
    title: 'The Crimson Forest',
    description: 'A digital illustration painted in Adobe Photoshop, exploring atmospheric perspective and color theory to create an alien landscape.',
    image: getImage('project-art-1'),
    tags: ['Art'],
    link: '#',
  },
  {
    id: 'p8',
    title: 'Arduino MIDI Controller',
    description: 'A custom-built MIDI controller using an Arduino, C, and various electronic components to interface with digital audio workstations.',
    image: getImage('project-other-1'),
    tags: ['Other', 'Code', 'Music'],
    link: '#',
  },
];

export const skills = [
  'C++', 'C#', 'C', 'Unreal Engine 5', 'WPF', '.NET Framework',
  'Figma', 'UX/UI Design', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects',
  'Blender', '3D Modeling', '3D Animation', 'Sound Production', 'Ableton Live',
];

export const categories: ProjectTag[] = ['Code', 'Design', '3D', 'Art', 'Music', 'Other'];
