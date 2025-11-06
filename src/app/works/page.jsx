"use client";
import { useState } from 'react';
import styles from './works.module.css';
import Navbar from '../../components/ui/LocalNav';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  { id: 1, name: 'Arduino MIDI Controller', description: 'A custom-built MIDI controller using an Arduino, C, and various electronic components to interface with digital audio workstations.', types: ['Other', 'Code', 'Music'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+1' },
  { id: 2, name: 'Project Two', description: 'A modern web application.', types: ['Web'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+2' },
  { id: 3, name: 'Project Three', description: 'A 3D model of a car.', types: ['3D'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+3' },
  { id: 4, name: 'Project Four', description: 'An abstract piece of art.', types: ['Art'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+4' },
  { id: 5, name: 'Project Five', description: 'A short animated film.', types: ['Animation'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+5' },
  { id: 6, name: 'Project Six', description: 'A user interface for a mobile app.', types: ['UI'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+6' },
  { id: 7, name: 'Project Seven', description: 'A collection of useful code snippets.', types: ['Code'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+7' },
  { id: 8, name: 'Project Eight', description: 'Something else entirely.', types: ['Other', 'C++'], imageUrl: 'https://placehold.co/600x400/252528/FFFFFF?text=Project+8' },
];

const projectTypes = ['All', 'C++', 'Web', '3D', 'Art', 'Animation', 'UI', 'Code', 'Other', 'Music'];

const Works = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.types.includes(filter));

  const getTagClassName = (type) => {
    const sanitizedType = type.toLowerCase().replace('++', 'pp');
    // For CSS modules, dynamic keys require bracket access
    const typeClass = styles[`type-${sanitizedType}`];
    return `${styles.cardTag}${typeClass ? ' ' + typeClass : ''}`;
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          {projectTypes.map(type => (
            <button
              key={type}
              className={`${styles.filterButton} ${filter === type ? styles.active : ''}`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className={styles.cardGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.card}>
              <img src={project.imageUrl} alt={project.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitleContainer}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <FiExternalLink className={styles.icon} />
                </div>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.types.map(type => (
                    <span key={type} className={getTagClassName(type)}>{type}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
