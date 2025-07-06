'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PostFrontmatter, ProjectFrontmatter } from '@/types'

const contentDirectory = path.join(process.cwd(), 'content')

async function getContent<T>(contentType: 'work' | 'writing' | 'pages', slug?: string): Promise<any> {
  const dir = path.join(contentDirectory, contentType)
  
  if (slug) {
    const filePath = path.join(dir, `${slug}.mdx`)
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        return { frontmatter: data as T, content, slug }
    } catch (error) {
        return null
    }
  } else {
    const filenames = fs.readdirSync(dir)
    return filenames.map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(dir, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      return { ...(data as T), slug }
    })
  }
}

export async function getProjects(): Promise<ProjectFrontmatter[]> {
  const projects = await getContent<ProjectFrontmatter>('work')
  return projects as ProjectFrontmatter[]
}

export async function getProjectBySlug(slug: string) {
  return getContent<ProjectFrontmatter>('work', slug)
}

export async function getPosts(): Promise<PostFrontmatter[]> {
    const posts = await getContent<PostFrontmatter>('writing');
    return (posts as PostFrontmatter[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  return getContent<PostFrontmatter>('writing', slug)
}

export async function getPageContent(slug: string) {
  const page = await getContent<any>('pages', slug)
  if (!page) {
    throw new Error(`No content found for page: ${slug}`);
  }
  return page;
}
