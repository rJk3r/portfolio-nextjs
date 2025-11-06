import type { Project } from './lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './card';
import { Badge } from './badge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} target={project.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1 bg-card/50 hover:bg-card">
        <div className="relative aspect-[16/10] overflow-hidden">
            <Image
                src={project.image.imageUrl}
                alt={project.image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.image.imageHint}
            />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="font-headline text-lg sm:text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal bg-accent/20 text-accent-foreground/80 border-transparent">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
