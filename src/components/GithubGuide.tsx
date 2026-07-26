import React from 'react';
import { BookOpen, GitBranch, Globe, Terminal, Sparkles } from 'lucide-react';

export const GithubGuide: React.FC = () => {
  return (
    <div style={{
      maxWidth: '860px',
      margin: '0 auto',
      background: '#ffffff',
      border: '2.5px solid var(--border-color)',
      borderRadius: '20px',
      padding: '32px',
      boxShadow: '4px 6px 0px rgba(0,0,0,0.06)'
    }}>
      <h2 style={{ fontFamily: 'var(--font-sketch)', fontSize: '2.6rem', color: 'var(--text-main)', marginBottom: '8px' }}>
        🚀 How to Deploy to GitHub Pages
      </h2>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
        Follow these step-by-step instructions to get your personal Jekyll bookshelf and blog live on the web!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0
          }}>
            1
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.6rem', marginBottom: '4px' }}>
              Download or Export Repository
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Click <strong>"Download Repository (.zip)"</strong> in the top navigation bar or copy all files from the Repository File Explorer into your local folder.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0
          }}>
            2
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.6rem', marginBottom: '4px' }}>
              Create & Push to GitHub Repository
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Create a new repository on GitHub (e.g. named <code>soumith-bookshelf</code> or <code>soumith.github.io</code>) and push your files:
            </p>
            <pre style={{
              backgroundColor: '#0f172a',
              color: '#38bdf8',
              padding: '12px 16px',
              borderRadius: '10px',
              fontFamily: 'monospace',
              fontSize: '0.95rem'
            }}>
              git init{"\n"}
              git add .{"\n"}
              git commit -m "Initial commit of Soumith's Jekyll Shelf & Blog"{"\n"}
              git branch -M main{"\n"}
              git remote add origin https://github.com/your-username/soumith-bookshelf.git{"\n"}
              git push -u origin main
            </pre>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0
          }}>
            3
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.6rem', marginBottom: '4px' }}>
              Enable GitHub Pages in Repository Settings
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              1. Open your repository on GitHub.<br />
              2. Go to <strong>Settings</strong> ➔ <strong>Pages</strong>.<br />
              3. Under <strong>Build and deployment</strong>, set Source to <strong>Deploy from a branch</strong>.<br />
              4. Select <strong>main</strong> branch and <strong>/ (root)</strong> folder, then click <strong>Save</strong>.<br />
              5. GitHub will build your site using Jekyll automatically within ~1 minute!
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0
          }}>
            4
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.6rem', marginBottom: '4px' }}>
              How Content Adding Works (No Code Edits Required!)
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              To add a new book: create a Markdown file in <code>_books/my-book.md</code> with front-matter (<code>layout: book</code>, <code>title</code>, <code>author</code>, <code>category</code>, <code>finished_date</code>).<br />
              Jekyll will automatically place it on your <strong>/shelf</strong> page, add it to category filters, and build the book detail view!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
