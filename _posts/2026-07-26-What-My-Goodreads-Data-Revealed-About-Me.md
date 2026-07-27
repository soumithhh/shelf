---
layout: post
title: "What My Goodreads Data Revealed About Me"
date: 2026-07-27
author: "Soumith"
category: "Books & Reading"
tags: [books, reading, goodreads, data, self-reflection, personal-growth]
image: /images/ba1.png
---

I exported my Goodreads library last week expecting to feel good about myself.

I did not feel good about myself.

What came back was a 376-row CSV file — a mirror held up to nine years of reading habits, wishful thinking, Secret Santa gifts, and a very suspicious relationship with a certain former President of India who wrote 25 books that I apparently needed to own but not actually read.

So I did what any self-respecting data enthusiast would do: I visualised the whole thing.

Here's what the data actually said about me.

<p align="center">
  <img src="https://www.soumith.com/shelf/images/ba1.png" alt="Soumith's Goodreads Library — Visual Data Report" width="350" />
</p>

*A full breakdown of my 376-book Goodreads library — shelves, reading pace, ratings, top authors, and the special shelves that tell the most embarrassing stories.*

---

### The Numbers at a Glance

| Metric | Number |
|---|---|
| Total books catalogued | 376 |
| Books actually finished | 87 (23%) |
| Currently "reading" | 15 (4%) |
| On the to-read shelf | 274 (73%) |
| Pages in my backlog | 86,530 |
| Pages mid-flight (currently reading) | 4,922 |

Let that sink in for a second. **73% of my library is unread.** I have spent years building a monument to intention and a very modest collection of completions.

---

### The Peak, The Fall, and The Flatline

The bar chart in the visualisation tells a story that I find both inspiring and deeply humbling.

Between **2019 and 2020**, I was on fire. Twenty books in 2019. Twenty-one in 2020 — still the all-time record. That's almost two books a month, sustained across two full years. That's the version of me I want to get back to.

Then 2022 happened. **Three books in a calendar year.** One in 2024. The chart basically flatlines between 2022 and 2025, the reading equivalent of a patient monitor going quiet in a hospital drama.

Here's the uncomfortable math: at my average pace across 2023–2025 (about 3.3 books per year), it would take me **82 years** to clear the current to-read backlog. I would need to live to 112. I am not planning for that.

At my *best* pace — the 2020 peak — I'd clear it by 2039. Thirteen years, not eighty-two. The difference is entirely about pace, not about time available.

---

### The Currently-Reading Black Hole

This is where things get genuinely funny.

I have 15 books marked "currently reading." Fifteen. And when I looked at how long each of them has been sitting in that status, I discovered that **ten of those fifteen have been "currently reading" for more than four years.**

The oldest — *అమృతం కురిసిన రాత్రి*, a Telugu novel — has been "in progress" since June 2019. That is seven years, zero months, and zero chapters read, if I'm being honest.

The most recent addition? *Around the World in Eighty Days*, added just days ago. At least that one has an excuse.

The Currently-Reading shelf is not a reading list. It's a waiting room where books go and never come out.

---

### The Kalam Paradox

Of all the things the data revealed, this is the one that made me pause the longest.

**A.P.J. Abdul Kalam is, by a wide margin, the most collected author in my library — with 25 titles.** That's nearly three times the next closest author (J. Krishnamurti, at 10 books).

Of those 25 books, I have read exactly **one**: *Wings of Fire*, back in 2017.

Twenty-four Kalam books — manifestos, reflections on India, youth inspiration collections, spiritual guides — have been sitting untouched for as long as eight years. This is not a reading relationship. This is a collecting habit wearing a reading habit's clothes.

I respect Dr. Kalam enormously. I apparently also have a unique way of showing it.

---

### The Ratings Silence

Here is a number I did not expect: out of 87 finished books, only **3** ever received a star rating from me.

That is a 3.4% rating rate.

I finished Orwell. I finished Murakami. I finished an entire Hunger Games trilogy and Douglas Adams and Paulo Coelho and Tolkien. Not one of them got a single star.

The three books that *did* get rated are interesting in what they have in common: a personal poetry collection by a local poet (*Boundless*, 5 stars), a translated Dalit memoir (*Baluta*, 4 stars), and a small independent title (*Stories of Us*, 3 stars). None of the "famous" books. None of the bestsellers.

The pattern seems to be: I rate books that felt personal. Everything else just quietly got closed and moved on from, unscored.

---

### The Secret Santa Shelf

Somewhere across 2018, 2019, and 2020, 35 books landed in my library tagged `secret-santa`.

Three years of gift exchanges. Thirty-five thoughtful people picking something out for me.

Not one of those 35 books has been opened.

The oldest is *Ready Player One*, added in July 2018. Someone handed me that book eight years ago and is presumably still wondering if I enjoyed it. (I did not enjoy it. I did not read it. These are different things.)

This section of the visualisation is called "35 Gifts. 0 Opened." and I think that's accurate enough.

---

### The Procrastination Hall of Fame

Among the books I *did* eventually finish, some of them took a spectacularly long time to get started after being added.

The record? **Atomic Habits by James Clear — added May 2020, finally read October 2025. A wait of 1,960 days. Five years and four months.**

The book about how small, consistent daily actions compound into results. That book. The one about not procrastinating. The one that sat untouched for five years and four months.

I have no defence. I can only report the facts.

---

### The Decade on the Shelf

One more thing the data revealed: my reading history spans more than a century of original publication dates, from Kafka's *The Metamorphosis* (1915) all the way to books published this year. But it is not evenly spread.

**The 2010s alone account for 27 of my 87 finished books — nearly a third of everything I've ever read.** The six full decades before 1970 combined add up to just 14 books.

I read modern. I read recent. The classics are mostly on the to-read shelf, patiently ageing.

---

### What I'm Actually Taking From This

Honestly? More clarity than I expected.

The data isn't telling me I'm a bad reader. It's telling me I'm an **enthusiastic curator and an inconsistent finisher** — which are two very different problems with very different solutions.

The curation is not the issue. I've built a library I'm genuinely proud of: Krishnamurti, Coelho, Tharoor, Backman, Christie, Adams — the tastes are real, the interests are authentic. The collecting has been honest.

The finishing is where the gap is. And 2019–2020 proved the gap is closable. The pace exists in me. It just needs to come back.

I'm running a 50-book challenge from June to December 2026. Six books in, with the best rate in four years. The data says the challenge is ambitious. The data also says 2020 happened, and 2020 was me.

Let's see which version of the chart wins.

---

### How I Made This

The visualisation was built entirely from my Goodreads CSV export using Claude (Sonnet 4.6) as a data scientist and graphic designer. The raw data analysis used Python and pandas. The final diagram was rendered in Excalidraw via the MCP tool, then exported as a PNG. No third-party analytics tools, no premium Goodreads features — just the raw export file and a lot of curiosity.

If you want to do the same with your own library, export your data from Goodreads under **My Books → Import and Export** and start asking questions of it. The answers are more interesting than you expect.

---

### Your Turn

I'd genuinely love to know:

- What does your own to-read shelf look like?
- Do you have a Kalam of your own — an author you collect but never actually read?
- And what's the longest a book has ever sat in "currently reading" for you?

Drop it in the comments, or tag me if you run your own analysis. The more honest we are about our reading habits, the better the reading actually gets.

Until the next book — or the next dataset.

**— Soumith**

---

*Soumith is the founder of [d/dx Media](https://dbydxmedia.com), a social media agency based in Hyderabad. He writes about books, data, and the space where personal habits meet digital storytelling.*
