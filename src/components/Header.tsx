import React from 'react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: 'shelf' | 'blog') => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('shelf'); }} 
          className="site-title"
        >
          Soumith
        </a>
        <nav className="site-nav">
          <a 
            href="#shelf" 
            onClick={(e) => { e.preventDefault(); onNavigate('shelf'); }} 
            className={`nav-link ${activePage === 'shelf' ? 'active' : ''}`}
          >
            Shelf
          </a>
          <a 
            href="#blog" 
            onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} 
            className={`nav-link ${activePage === 'blog' ? 'active' : ''}`}
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
};
