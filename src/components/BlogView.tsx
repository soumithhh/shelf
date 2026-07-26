import React from 'react';
import { PostFrontmatter } from '../types';

interface BlogViewProps {
  posts: PostFrontmatter[];
  onSelectPost: (post: PostFrontmatter) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ posts, onSelectPost }) => {
  return (
    <div className="blog-page">
      <div className="shelf-header">
        <h1 className="page-title">Blog Posts</h1>
        <p className="page-subtitle">Thoughts, articles, and long-form writings</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '32px' }}>
        {posts.map((post) => (
          <article key={post.id} style={{ borderBottom: '1.5px dashed #e2e8f0', paddingBottom: '20px' }}>
            <h2 style={{ fontFamily: 'var(--font-sketch)', fontSize: '2.1rem', fontWeight: 700, marginBottom: '6px' }}>
              <a 
                href={`#post-${post.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectPost(post);
                }}
                style={{ color: 'var(--text-main)', textDecoration: 'none' }}
              >
                {post.title}
              </a>
            </h2>
            <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
              {post.date} {post.author ? `• By ${post.author}` : ''} {post.category ? `• Category: ${post.category}` : ''}
            </div>
            <p style={{ fontSize: '1.15rem', color: '#222222', lineHeight: '1.5' }}>
              {post.content.replace(/[#*`]/g, '').slice(0, 180)}...
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
