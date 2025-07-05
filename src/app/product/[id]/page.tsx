import { getProjectBySlug, getProjects } from '@/lib/content';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.id);
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(project => ({
    id: project.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const project = await getProjectBySlug(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-16">
      <div className="w-full max-w-4xl">
        <div className="mb-12">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Work
                </Link>
            </Button>
        </div>
        
        <article>
          <header className="mb-8 text-center">
            <p className="text-lg text-gray-500 mb-2">{project.frontmatter.year}</p>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-800">{project.frontmatter.title}</h1>
          </header>

          <div 
            className="prose lg:prose-xl max-w-none mx-auto text-2xl text-gray-600 leading-relaxed space-y-8"
          >
            <MDXRemote source={project.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
