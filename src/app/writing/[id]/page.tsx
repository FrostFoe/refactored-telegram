import { getPostBySlug, getPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PostPageClient from './PostPageClient';

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

  return <PostPageClient post={post} />;
}
