import { getPostBySlug, getPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.id);
    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }
    return {
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
    };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    id: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-16">
      <div
        className="w-full max-w-4xl"
      >
        <div className="mb-12">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
                <Link href="/writing">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Writing
                </Link>
            </Button>
        </div>
        
        <article>
          <header className="mb-8 text-center">
            <p className="text-lg text-gray-500 mb-2">{post.frontmatter.date}</p>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-800">{post.frontmatter.title}</h1>
          </header>

          <div 
            className="prose lg:prose-xl max-w-none mx-auto text-2xl text-gray-600 leading-relaxed space-y-8"
          >
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
