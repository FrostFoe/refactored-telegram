import { getPostBySlug, getPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PostPageClient from './PostPageClient';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.id);
    if (!post) {
        return {
            title: 'পোস্ট পাওয়া যায়নি',
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
    <PostPageClient frontmatter={post.frontmatter}>
      <div className="prose md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-600 leading-relaxed">
        <MDXRemote source={post.content} />
      </div>
    </PostPageClient>
  );
}
