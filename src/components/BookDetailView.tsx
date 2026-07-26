import React from 'react';
import { BookFrontmatter } from '../types';
import { marked } from 'marked';
import { ArrowLeft } from 'lucide-react';

interface BookDetailViewProps {
  book: BookFrontmatter;
  onBack: () => void;
}

export const BookDetailView: React.FC<BookDetailViewProps> = ({ book, onBack }) => {
  const renderedContent = marked.parse(book.content || '');

  return (
    <article className="book-detail">
      <button 
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-sketch)',
          fontSize: '1.1rem',
          background: 'none',
          border: 'none',
          color: '#2563eb',
          cursor: 'pointer',
          marginBottom: '20px',
          fontWeight: 600
        }}
      >
        <ArrowLeft size={18} /> Back to Shelf
      </button>

      <div className="book-detail-header">
        <div className="book-detail-cover">
          {book.cover_image ? (
            <img src={book.cover_image} alt={book.title} className="book-cover-img" />
          ) : (
            <div className="book-cover-placeholder">Book Cover</div>
          )}
        </div>

        <div className="book-detail-info">
          <h1 className="book-detail-title">{book.title}</h1>
          <div className="book-meta-item">
            <span className="book-meta-label">By:</span> {book.author}
          </div>
          <div className="book-meta-item">
            <span className="book-meta-label">category:</span> {book.category}
          </div>
          <div className="book-meta-item">
            <span className="book-meta-label">Finished:</span> {book.finished_date}
          </div>
        </div>
      </div>

      <div className="book-content-section">
        <h2 className="book-content-header">Book Content:</h2>
        <div 
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </div>
    </article>
  );
};
