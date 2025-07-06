import { getProjectBySlug, getProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";
import { MDXRemote } from "next-mdx-remote/rsc";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const project = await getProjectBySlug(params.id);

  if (!project) {
    notFound();
  }

  return (
    <ProductPageClient frontmatter={project.frontmatter}>
      <div className="prose md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-600 leading-relaxed font-tiro">
        <MDXRemote source={project.content} />
      </div>
    </ProductPageClient>
  );
}
