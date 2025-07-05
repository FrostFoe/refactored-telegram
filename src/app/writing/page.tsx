import { getPosts } from '@/lib/content';
import type { PostFrontmatter } from '@/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Exploring design, technology, and the space in between.',
};

const PostItem = ({ post }: { post: PostFrontmatter }) => (
  <div>
    <Link href={`/writing/${post.slug}`} className="block py-10 group">
      <div className="mb-2">
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <h3 className="text-3xl md:text-4xl font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
      <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center mt-6 text-md font-medium text-gray-800 transition-colors duration-300 group-hover:text-primary">
        Read Article
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  </div>
);

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 pt-32 pb-16">
      <div
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">Thoughts & Ideas</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Exploring design, technology, and the space in between.
        </p>
      </div>

      <div
        className="w-full max-w-4xl divide-y divide-gray-200/60"
      >
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
