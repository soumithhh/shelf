import React, { useState } from 'react';
import { BookFrontmatter, PostFrontmatter, ActiveTab, PageRoute } from './types';
import { INITIAL_BOOKS, INITIAL_POSTS, DEFAULT_FILES } from './data/initialData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShelfView } from './components/ShelfView';
import { BookDetailView } from './components/BookDetailView';
import { BlogView } from './components/BlogView';
import { PostDetailView } from './components/PostDetailView';
import { AddContentModal } from './components/AddContentModal';
import { FileExplorer } from './components/FileExplorer';
import { GithubGuide } from './components/GithubGuide';
import { Eye, FolderGit2, PlusCircle, BookMarked, Download } from 'lucide-react';
import JSZip from 'jszip';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('preview');
  const [pageRoute, setPageRoute] = useState<PageRoute>('shelf');
  
  const [books, setBooks] = useState<BookFrontmatter[]>(INITIAL_BOOKS);
  const [posts, setPosts] = useState<PostFrontmatter[]>(INITIAL_POSTS);
  
  const [selectedBook, setSelectedBook] = useState<BookFrontmatter | null>(null);
  const [selectedPost, setSelectedPost] = useState<PostFrontmatter | null>(null);

  const handleAddBook = (newBook: BookFrontmatter) => {
    setBooks(prev => [newBook, ...prev]);
    setSelectedBook(newBook);
    setPageRoute('book-detail');
    setActiveTab('preview');
  };

  const handleAddPost = (newPost: PostFrontmatter) => {
    setPosts(prev => [newPost, ...prev]);
    setSelectedPost(newPost);
    setPageRoute('post-detail');
    setActiveTab('preview');
  };

  const handleDownloadRepoZip = async () => {
    const zip = new JSZip();

    // Static repo files
    DEFAULT_FILES.forEach(f => {
      zip.file(f.path, f.content);
    });

    // Books
    books.forEach(b => {
      zip.file(b.filename, `---
layout: ${b.layout}
title: "${b.title}"
author: "${b.author}"
category: "${b.category}"
tags: [${b.tags.map(t => `"${t}"`).join(', ')}]
finished_date: "${b.finished_date}"
cover_image: "${b.cover_image}"
summary: "${b.summary}"
---

${b.content}
`);
    });

    // Posts
    posts.forEach(p => {
      zip.file(p.filename, `---
layout: ${p.layout}
title: "${p.title}"
date: ${p.date}
author: "${p.author}"
category: "${p.category}"
---

${p.content}
`);
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'soumith-jekyll-shelf-repo.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar for Export & Repo Tools */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.4rem' }}>📚</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.3px' }}>
              Soumith's Jekyll Shelf & Blog Repository
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Full GitHub static site repo matching wireframe layout
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('preview')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeTab === 'preview' ? '#2563eb' : '#1e293b',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <Eye size={16} /> Live Preview
          </button>

          <button
            onClick={() => setActiveTab('add-content')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeTab === 'add-content' ? '#2563eb' : '#1e293b',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <PlusCircle size={16} /> Add Content
          </button>

          <button
            onClick={() => setActiveTab('explorer')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeTab === 'explorer' ? '#2563eb' : '#1e293b',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <FolderGit2 size={16} /> Repo Explorer
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeTab === 'guide' ? '#2563eb' : '#1e293b',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <BookMarked size={16} /> Deploy Guide
          </button>

          <button
            onClick={handleDownloadRepoZip}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #3b82f6',
              backgroundColor: '#1d4ed8',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Download size={16} /> Export ZIP
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div style={{ flex: 1, padding: '24px 16px', display: 'flex', justifyContent: 'center' }}>
        {activeTab === 'preview' && (
          <div className="site-frame">
            <Header 
              activePage={pageRoute === 'book-detail' ? 'shelf' : pageRoute === 'post-detail' ? 'blog' : pageRoute} 
              onNavigate={(page) => {
                setPageRoute(page);
                if (page === 'shelf') setSelectedBook(null);
                if (page === 'blog') setSelectedPost(null);
              }} 
            />

            <main className="site-main">
              {pageRoute === 'shelf' && (
                <ShelfView 
                  books={books} 
                  onSelectBook={(book) => {
                    setSelectedBook(book);
                    setPageRoute('book-detail');
                  }} 
                />
              )}

              {pageRoute === 'book-detail' && selectedBook && (
                <BookDetailView 
                  book={selectedBook} 
                  onBack={() => setPageRoute('shelf')} 
                />
              )}

              {pageRoute === 'blog' && (
                <BlogView 
                  posts={posts} 
                  onSelectPost={(post) => {
                    setSelectedPost(post);
                    setPageRoute('post-detail');
                  }} 
                />
              )}

              {pageRoute === 'post-detail' && selectedPost && (
                <PostDetailView 
                  post={selectedPost} 
                  onBack={() => setPageRoute('blog')} 
                />
              )}
            </main>

            <Footer />
          </div>
        )}

        {activeTab === 'add-content' && (
          <div style={{ width: '100%' }}>
            <AddContentModal 
              onAddBook={handleAddBook} 
              onAddPost={handleAddPost} 
              onClose={() => setActiveTab('preview')} 
            />
          </div>
        )}

        {activeTab === 'explorer' && (
          <div style={{ width: '100%' }}>
            <FileExplorer 
              files={DEFAULT_FILES} 
              books={books} 
              posts={posts} 
            />
          </div>
        )}

        {activeTab === 'guide' && (
          <div style={{ width: '100%' }}>
            <GithubGuide />
          </div>
        )}
      </div>
    </div>
  );
}
