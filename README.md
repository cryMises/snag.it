# Snag It 🪝

A daily automation that scrapes Instagram, uses AI to find event announcements, and displays them as a clean swipeable web app.

Built with n8n, Bright Data, Mistral, and Gemini.

---

## Stack

| Layer | Tools |
|---|---|
| Scraping | Bright Data (Instagram dataset API) |
| OCR | Mistral Cloud |
| AI Classification | Gemini 3.1 Flash Lite + Gemma 4 31B |
| Automation | n8n |
| Frontend | Vanilla HTML/CSS/JS — PWA, no build step |

---

## What it does

Runs every day at 12:00 → scrapes the 5 most recent posts from a target Instagram account → extracts text from images → classifies each post with an LLM → saves confirmed events → serves them via webhook API → displays as swipeable cards.

---
