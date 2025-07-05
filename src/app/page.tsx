import Image from 'next/image';
import React from 'react';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 'dropbox',
    tag: 'Strategy',
    title: 'Dropbox',
    date: 'January 15, 2025',
    image: 'https://placehold.co/80x80/000000'
  },
  {
    id: 'superpower',
    tag: 'Superpower',
    title: 'Superpower',
    date: 'June 6, 2024',
    image: 'https://placehold.co/80x80/333333'
  },
  {
    id: 'adidas',
    tag: 'Adidas',
    title: 'Adidas x Crypto the Game',
    date: 'May 15, 2024',
    image: 'https://placehold.co/80x80/f0f0f0'
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-4">
    <div className="relative w-14 h-14 shrink-0">
      <Image src={project.image} alt={project.title} fill className="rounded-xl object-cover" data-ai-hint={project.tag === 'Strategy' ? 'strategy interface' : project.title.toLowerCase()} />
      {project.tag === 'Strategy' && (
         <div className="absolute inset-0 bg-black/40 rounded-xl flex items-start justify-start p-1.5">
          <div className="bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-white/20">Strategy</div>
        </div>
      )}
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-gray-800">{project.title}</h3>
      <p className="text-xs text-gray-500">{project.date}</p>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <h1 className="text-4xl md:text-5xl font-medium text-center text-gray-800 max-w-lg leading-tight">
        A design and technology studio.
      </h1>
      
      <div className="relative w-full max-w-5xl h-[550px] mt-20 mx-auto scale-90 md:scale-100">
        <div className="absolute top-24 left-48 w-48 h-32 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden shadow-lg" style={{ transform: 'rotate(-5deg)' }}>
          <Image src="https://placehold.co/300x200/f0f0f0" alt="Abstract colors" fill objectFit="cover" className="opacity-50" data-ai-hint="abstract color blur"/>
        </div>
        
        <div className="absolute top-1/2 -translate-y-[45%] left-12 w-72 bg-white/40 backdrop-blur-2xl rounded-3xl p-5 border border-white/50 shadow-2xl space-y-5" style={{ transform: 'rotate(-8deg)' }}>
          {projects.map((p, i) => (
            <React.Fragment key={p.id}>
              <ProjectCard project={p} />
              {i < projects.length - 1 && <div className="h-px bg-gray-500/20" />}
            </React.Fragment>
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[375px] bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10">
            <Image src="https://placehold.co/800x600/000000" alt="Adeline Preview" fill objectFit="cover" data-ai-hint="code editor landscape" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between">
                <div>
                    <h3 className="text-white font-semibold">Adeline</h3>
                    <p className="text-sm text-gray-300">Preview</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </div>
            </div>
        </div>

        <div className="absolute top-10 right-16 w-80 h-64 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 overflow-hidden shadow-xl" style={{ transform: 'rotate(6deg)' }}>
             <Image src="https://placehold.co/400x300/ffffff" alt="Unicorn illustration" fill objectFit="cover" data-ai-hint="unicorn abstract" />
        </div>

        <div className="absolute bottom-10 right-40 w-40 h-32 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl flex flex-col items-center justify-center space-y-3" style={{ transform: 'rotate(10deg)' }}>
            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-inner">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-80"></div>
            </div>
            <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 border border-white/50"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-orange-500 border border-white/50"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-white/50"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
