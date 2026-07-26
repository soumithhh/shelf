import React, { useState, useMemo } from 'react';
import { BookFrontmatter } from '../types';

interface ShelfViewProps {
  books: BookFrontmatter[];
  onSelectBook: (book: BookFrontmatter) => void;
}

export const ShelfView: React.FC<ShelfViewProps> = ({ books, onSelectBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'finished_date' | 'title' | 'author'>('finished_date');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    books.forEach(b => {
      if (b.category) set.add(b.category);
    });
    return Array.from(set);
  }, [books]);

  // Filter & Sort
  const filteredAndSortedBooks = useMemo(() => {
    let list = [...books];

    // Filter
    if (selectedCategory !== 'All') {
      list = list.filter(b => b.category === selectedCategory);
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'finished_date') {
        return (b.finished_date || '').localeCompare(a.finished_date || '');
      } else if (sortBy === 'title') {
        return (a.title || '').localeCompare(b.title || '');
      } else if (sortBy === 'author') {
        return (a.author || '').localeCompare(b.author || '');
      }
      return 0;
    });

    return list;
  }, [books, selectedCategory, sortBy]);

  return (
    <div className="shelf-page">
      <div className="shelf-header">
        <h1 className="page-title">My Books</h1>
        <p className="page-subtitle">Mini Description</p>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          <label htmlFor="categorySelect" className="filter-label">Category:</label>
          <select 
            id="categorySelect"
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sortSelect" className="filter-label">Sort by:</label>
          <select 
            id="sortSelect"
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="finished_date">Date Read</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>
      </div>

      <div className="books-list">
        {filteredAndSortedBooks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            No books found matching category "{selectedCategory}".
          </div>
        ) : (
          filteredAndSortedBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover-container">
                {book.cover_image ? (
                  <img src={book.cover_image} alt={book.title} className="book-cover-img" />
                ) : (
                  <div className="book-cover-placeholder">Book Cover</div>
                )}
              </div>
              <div className="book-info">
                <a 
                  href={`#book-${book.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectBook(book);
                  }} 
                  className="book-card-title"
                >
                  {book.title} - {book.author}
                </a>
                <div className="book-tags-category">
                  {book.tags && book.tags.length > 0 
                    ? `${book.tags.join(', ')} & ${book.category || 'General'}` 
                    : 'Tags & category'}
                </div>
                <div className="book-summary">
                  {book.summary || 'Mini Summary'}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
