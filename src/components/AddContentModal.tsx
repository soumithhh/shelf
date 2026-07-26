import React, { useState } from 'react';
import { BookFrontmatter, PostFrontmatter } from '../types';
import { PlusCircle, FileText, CheckCircle } from 'lucide-react';

interface AddContentModalProps {
  onAddBook: (book: BookFrontmatter) => void;
  onAddPost: (post: PostFrontmatter) => void;
  onClose: () => void;
}

export const AddContentModal: React.FC<AddContentModalProps> = ({ onAddBook, onAddPost, onClose }) => {
  const [contentType, setContentType] = useState<'book' | 'post'>('book');
  
  // Book fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Non-Fiction');
  const [tags, setTags] = useState('mind, learning');
  const [finishedDate, setFinishedDate] = useState('2026-07-26');
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const [copiedMd, setCopiedMd] = useState(false);

  const generateBookMarkdown = () => {
    const tagList = tags.split(',').map(t => t.trim()).filter(Boolean);
    return `---
layout: book
title: "${title || 'Sample Book'}"
author: "${author || 'Author Name'}"
category: "${category}"
tags: [${tagList.map(t => `"${t}"`).join(', ')}]
finished_date: "${finishedDate}"
cover_image: "${coverImage}"
summary: "${summary || 'Mini Summary'}"
---

${content || 'Write your book review and notes here.'}
`;
  };

  const generatePostMarkdown = () => {
    return `---
layout: post
title: "${title || 'Sample Post'}"
date: "${finishedDate}"
author: "${author || 'Soumith'}"
category: "${category}"
---

${content || 'Write your blog post content here.'}
`;
  };

  const handleSave = () => {
    const slug = (title || 'new-content').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    if (contentType === 'book') {
      const newBook: BookFrontmatter = {
        id: slug || `book-${Date.now()}`,
        filename: `_books/${slug || 'book'}.md`,
        layout: 'book',
        title: title || 'New Book Title',
        author: author || 'Author Name',
        category: category || 'General',
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        finished_date: finishedDate,
        cover_image: coverImage,
        summary: summary || 'Mini summary for the book',
        content: content || '### Book Notes\n\nWrite your thoughts here.'
      };
      onAddBook(newBook);
    } else {
      const newPost: PostFrontmatter = {
        id: slug || `post-${Date.now()}`,
        filename: `_posts/${finishedDate}-${slug || 'post'}.md`,
        layout: 'post',
        title: title || 'New Blog Post',
        date: finishedDate,
        author: author || 'Soumith',
        category: category || 'General',
        content: content || 'Write your blog post content here.'
      };
      onAddPost(newPost);
    }
  };

  const handleCopyMd = () => {
    const text = contentType === 'book' ? generateBookMarkdown() : generatePostMarkdown();
    navigator.clipboard.writeText(text);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2500);
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      background: '#ffffff',
      border: '2.5px solid var(--border-color)',
      borderRadius: '20px',
      padding: '28px',
      boxShadow: '4px 6px 0px rgba(0,0,0,0.06)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'var(--font-sketch)', fontSize: '2.2rem', color: 'var(--text-main)' }}>
          Add Content Workflow Tester
        </h2>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button 
          onClick={() => setContentType('book')}
          style={{
            flex: 1,
            padding: '10px',
            fontFamily: 'var(--font-sketch)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: '2px solid var(--border-color)',
            backgroundColor: contentType === 'book' ? '#2563eb' : '#ffffff',
            color: contentType === 'book' ? '#ffffff' : 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          📚 Add Book (`_books/*.md`)
        </button>
        <button 
          onClick={() => setContentType('post')}
          style={{
            flex: 1,
            padding: '10px',
            fontFamily: 'var(--font-sketch)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: '2px solid var(--border-color)',
            backgroundColor: contentType === 'post' ? '#2563eb' : '#ffffff',
            color: contentType === 'post' ? '#ffffff' : 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          ✍️ Add Post (`_posts/*.md`)
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder={contentType === 'book' ? 'e.g. Deep Work' : 'e.g. Reflections on Coding'}
            style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>
            {contentType === 'book' ? 'Author' : 'Author Name'}
          </label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            placeholder={contentType === 'book' ? 'Cal Newport' : 'Soumith'}
            style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>Category</label>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            placeholder="Psychology, Tech, Design..."
            style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>
            {contentType === 'book' ? 'Finished Date' : 'Published Date'}
          </label>
          <input 
            type="date" 
            value={finishedDate} 
            onChange={(e) => setFinishedDate(e.target.value)} 
            style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
          />
        </div>
      </div>

      {contentType === 'book' && (
        <>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>Tags (comma-separated)</label>
            <input 
              type="text" 
              value={tags} 
              onChange={(e) => setTags(e.target.value)} 
              placeholder="productivity, focus, habits"
              style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>Cover Image URL</label>
            <input 
              type="text" 
              value={coverImage} 
              onChange={(e) => setCoverImage(e.target.value)} 
              placeholder="https://..."
              style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>Mini Summary</label>
            <input 
              type="text" 
              value={summary} 
              onChange={(e) => setSummary(e.target.value)} 
              placeholder="A short 1-line summary for the shelf page list"
              style={{ width: '100%', padding: '8px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
            />
          </div>
        </>
      )}

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '1rem' }}>Markdown Body Content</label>
        <textarea 
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="### Key Takeaways&#10;1. Point one&#10;2. Point two..."
          style={{ width: '100%', padding: '10px 12px', border: '2px solid var(--border-color)', borderRadius: '10px', fontFamily: 'var(--font-sketch)', fontSize: '1.1rem' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button
          onClick={handleCopyMd}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            borderRadius: '12px',
            border: '2px solid var(--border-color)',
            background: '#f8fafc',
            fontFamily: 'var(--font-sketch)',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {copiedMd ? <CheckCircle size={18} color="green" /> : <FileText size={18} />}
          {copiedMd ? 'Copied Markdown!' : 'Copy Markdown File'}
        </button>

        <button
          onClick={handleSave}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: '2px solid var(--border-color)',
            background: '#2563eb',
            color: '#ffffff',
            fontFamily: 'var(--font-sketch)',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          <PlusCircle size={18} />
          Add to Live Preview
        </button>
      </div>
    </div>
  );
};
