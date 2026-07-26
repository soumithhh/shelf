import { BookFrontmatter, PostFrontmatter, RepoFile } from '../types';

export const INITIAL_BOOKS: BookFrontmatter[] = [
  {
    id: 'sample-book',
    filename: '_books/sample-book.md',
    layout: 'book',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Psychology',
    tags: ['psychology', 'decision-making', 'behavioral-economics'],
    finished_date: '2026-05-12',
    cover_image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
    summary: 'A groundbreaking tour of the mind explaining the two systems that drive the way we think and make decisions.',
    content: `### Book Summary & Core Insights

In *Thinking, Fast and Slow*, Nobel laureate Daniel Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think:

- **System 1**: Fast, intuitive, and emotional. It operates automatically and quickly with little or no effort.
- **System 2**: Slower, deliberative, and logical. It allocates attention to effortful mental operations.

#### Key Takeaways
1. **Anchoring Effect**: We are heavily swayed by arbitrary baseline numbers when estimating quantities.
2. **Availability Heuristic**: We judge the frequency or likelihood of events based on how easily examples come to mind.
3. **Loss Aversion**: The psychological distress of losing something is roughly twice as intense as the pleasure of gaining it.
`
  },
  {
    id: 'atomic-habits',
    filename: '_books/atomic-habits.md',
    layout: 'book',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Improvement',
    tags: ['productivity', 'habits', 'psychology'],
    finished_date: '2026-06-20',
    cover_image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
    summary: 'An easy & proven way to build good habits & break bad ones using small 1% daily improvements.',
    content: `### Summary & Key Principles

James Clear argues that big changes don't come from massive overhauls, but rather from hundreds of small decisions and daily 1% improvements.

#### The Four Laws of Behavior Change
1. **Make it obvious**: Design your environment to cue desired behaviors.
2. **Make it attractive**: Pair habits you want with things you already love.
3. **Make it easy**: Reduce friction for good habits, increase friction for bad ones.
4. **Make it satisfying**: Immediate rewards reinforce habit loops.
`
  },
  {
    id: 'clean-code',
    filename: '_books/clean-code.md',
    layout: 'book',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Tech',
    tags: ['programming', 'software-design', 'architecture'],
    finished_date: '2026-07-01',
    cover_image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
    summary: 'A handbook of agile software craftsmanship filled with practical rules for writing elegant, maintainable code.',
    content: `### Summary & Engineering Philosophy

Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.

#### Key Principles
1. **Meaningful Names**: Use intention-revealing names for variables, functions, and classes.
2. **Small Functions**: Functions should do one thing, do it well, and do it only.
3. **DRY (Don't Repeat Yourself)**: Duplication is the primary root of all evil in software design.
4. **Boy Scout Rule**: Always leave the code cleaner than you found it.
`
  }
];

export const INITIAL_POSTS: PostFrontmatter[] = [
  {
    id: '2026-07-26-sample-post',
    filename: '_posts/2026-07-26-sample-post.md',
    layout: 'post',
    title: 'Building My Personal Jekyll Bookshelf & Blog',
    date: '2026-07-26',
    author: 'Soumith',
    category: 'General',
    content: `Welcome to my personal website! I built this minimal Jekyll site to share notes on books I read and publish articles on software design and productivity.

### Why Jekyll?
Jekyll allows me to maintain all my content in simple Markdown files. Every time I finish a book, I just drop a new \`.md\` file into the \`_books/\` folder with front-matter details like \`author\`, \`category\`, and \`finished_date\`. Jekyll automatically builds the pages and lists them on my Shelf!

### What's Next
- Adding more book summaries and ratings
- Publishing weekly thoughts on tech and books
- Customizing the hand-drawn sketch theme
`
  }
];

export const DEFAULT_FILES: RepoFile[] = [
  {
    path: '_config.yml',
    content: `# Jekyll Site Configuration for Soumith's Blog & Shelf
title: "Soumith"
email: "soumithhh@gmail.com"
description: "Personal blog and bookshelf"
baseurl: "/shelf" # Subpath for username.github.io/shelf repository
url: ""

markdown: kramdown
highlighter: rouge

collections:
  books:
    output: true
    permalink: /shelf/:path/

defaults:
  - scope:
      path: ""
      type: "books"
    values:
      layout: "book"
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"

plugins:
  - jekyll-feed
  - jekyll-seo-tag
`
  },
  {
    path: 'Gemfile',
    content: `source "https://rubygems.org"

gem "jekyll", "~> 4.3.2"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-seo-tag", "~> 2.8.0"
end
`
  },
  {
    path: '_layouts/default.html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
</head>
<body>
  <div class="site-frame">
    {% include header.html %}
    <main class="site-main">{{ content }}</main>
    {% include footer.html %}
  </div>
</body>
</html>`
  },
  {
    path: '_layouts/shelf.html',
    content: `---
layout: default
---
<div class="shelf-page">
  <div class="shelf-header">
    <h1 class="page-title">{{ page.title | default: "My Books" }}</h1>
    <p class="page-subtitle">{{ page.subtitle | default: "Mini Description" }}</p>
  </div>
  ...
</div>`
  },
  {
    path: '_layouts/book.html',
    content: `---
layout: default
---
<article class="book-detail">
  <div class="book-detail-header">
    <div class="book-detail-cover">
      {% if page.cover_image %}
        <img src="{{ page.cover_image }}" alt="{{ page.title }}" />
      {% else %}
        <div>Book Cover</div>
      {% endif %}
    </div>
    <div class="book-detail-info">
      <h1>{{ page.title }}</h1>
      <div><span class="label">By:</span> {{ page.author }}</div>
      <div><span class="label">category:</span> {{ page.category }}</div>
      <div><span class="label">Finished:</span> {{ page.finished_date }}</div>
    </div>
  </div>
  <div class="book-content-section">
    <h2>Book Content:</h2>
    <div class="markdown-body">{{ content }}</div>
  </div>
</article>`
  },
  {
    path: '_layouts/post.html',
    content: `---
layout: default
---
<article class="post-detail">
  <h1>{{ page.title }}</h1>
  <div>Published on {{ page.date | date: "%B %d, %Y" }} by {{ page.author }}</div>
  <div class="markdown-body">{{ content }}</div>
</article>`
  },
  {
    path: '_includes/header.html',
    content: `<header class="site-header">
  <div class="header-container">
    <a href="#" class="site-title">Soumith</a>
    <nav class="site-nav">
      <a href="/shelf" class="nav-link">Shelf</a>
      <a href="/blog" class="nav-link">Blog</a>
    </nav>
  </div>
</header>`
  },
  {
    path: '_includes/footer.html',
    content: `<footer class="site-footer">
  <div class="footer-container">
    <p>Copyright 2026 Soumith</p>
  </div>
</footer>`
  },
  {
    path: 'assets/css/main.css',
    content: `/* Main styles for Soumith Shelf Theme */`
  },
  {
    path: 'index.html',
    content: `---
layout: shelf
title: "My Books"
subtitle: "Mini Description"
---`
  },
  {
    path: 'blog.html',
    content: `---
layout: default
title: "Blog"
permalink: /blog/
---`
  }
];
