import React, { useState } from 'react';
import { RepoFile, BookFrontmatter, PostFrontmatter } from '../types';
import { FileCode, Copy, Check, Download, Folder } from 'lucide-react';
import JSZip from 'jszip';

interface FileExplorerProps {
  files: RepoFile[];
  books: BookFrontmatter[];
  posts: PostFrontmatter[];
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ files, books, posts }) => {
  // Combine static repo files with dynamically added markdown files
  const allRepoFiles: RepoFile[] = [
    ...files,
    ...books.map(b => ({
      path: b.filename,
      content: `---
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
`
    })),
    ...posts.map(p => ({
      path: p.filename,
      content: `---
layout: ${p.layout}
title: "${p.title}"
date: ${p.date}
author: "${p.author}"
category: "${p.category}"
---

${p.content}
`
    }))
  ];

  const [selectedFilePath, setSelectedFilePath] = useState<string>('_config.yml');
  const [copied, setCopied] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);

  const selectedFile = allRepoFiles.find(f => f.path === selectedFilePath) || allRepoFiles[0];

  const handleCopy = () => {
    if (selectedFile) {
      navigator.clipboard.writeText(selectedFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadZip = async () => {
    setIsZipping(true);
    try {
      const zip = new JSZip();

      allRepoFiles.forEach(file => {
        zip.file(file.path, file.content);
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
    } catch (err) {
      console.error('Failed to generate zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      background: '#ffffff',
      border: '2.5px solid var(--border-color)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '4px 6px 0px rgba(0,0,0,0.06)'
    }}>
      <div style={{
        padding: '16px 24px',
        backgroundColor: '#f8fafc',
        borderBottom: '2px solid var(--border-color)',
        display: 'flex',
        justify健全: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.8rem', color: 'var(--text-main)', margin: 0 }}>
            📁 GitHub Repository Files
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            All files ready for your GitHub repository deployment
          </p>
        </div>

        <button
          onClick={handleDownloadZip}
          disabled={isZipping}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: '2px solid var(--border-color)',
            borderRadius: '12px',
            fontFamily: 'var(--font-sketch)',
            fontSize: '1.15rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '2px 2px 0px rgba(0,0,0,0.08)'
          }}
        >
          <Download size={18} />
          {isZipping ? 'Creating ZIP...' : 'Download Repository (.zip)'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: '520px' }}>
        {/* Sidebar File Tree */}
        <div style={{
          borderRight: '2px solid var(--border-color)',
          backgroundColor: '#fafafa',
          padding: '16px 12px',
          overflowY: 'auto'
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', paddingLeft: '8px' }}>
            Repository Tree ({allRepoFiles.length} Files)
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {allRepoFiles.map((file) => {
              const isSelected = file.path === selectedFilePath;
              return (
                <button
                  key={file.path}
                  onClick={() => setSelectedFilePath(file.path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: isSelected ? '1.5px solid var(--border-color)' : '1px solid transparent',
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#2563eb' : 'var(--text-main)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.95rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all'
                  }}
                >
                  {file.path.includes('/') ? <Folder size={14} /> : <FileCode size={14} />}
                  {file.path}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Viewer */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#ffffff',
            borderBottom: '1.5px dashed #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.05rem', color: '#2563eb' }}>
              {selectedFile?.path}
            </div>

            <button
              onClick={handleCopy}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: '#f1f5f9',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sketch)',
                fontWeight: 'bold'
              }}
            >
              {copied ? <Check size={16} color="green" /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          <pre style={{
            flex: 1,
            padding: '20px',
            margin: 0,
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}>
            <code>{selectedFile?.content}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
