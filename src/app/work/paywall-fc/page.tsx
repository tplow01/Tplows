'use client'

import { useEffect, useRef } from 'react'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { motion, useInView } from 'framer-motion'
import RelatedCases from '@/components/RelatedCases'

const scrollFadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring', stiffness: 160, damping: 24 },
} as const

export default function PaywallFcV2Page() {
  const solutionVideoRef = useRef<HTMLVideoElement>(null)
  const replayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const solutionVideoInView = useInView(solutionVideoRef, { amount: 0.6 })

  useEffect(() => {
    const video = solutionVideoRef.current
    if (!video) return
    if (solutionVideoInView) { void video.play().catch(() => {}); return }
    video.pause()
  }, [solutionVideoInView])

  useEffect(() => {
    const video = solutionVideoRef.current
    if (!video) return
    const handleEnded = () => {
      if (replayTimeoutRef.current) clearTimeout(replayTimeoutRef.current)
      replayTimeoutRef.current = setTimeout(() => {
        if (!solutionVideoRef.current) return
        solutionVideoRef.current.currentTime = 0
        if (solutionVideoInView) void solutionVideoRef.current.play().catch(() => {})
      }, 4000)
    }
    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('ended', handleEnded)
      if (replayTimeoutRef.current) { clearTimeout(replayTimeoutRef.current); replayTimeoutRef.current = null }
    }
  }, [solutionVideoInView])

  return (
    <>
      <style>{`

        /* ── Root ── */
        .pw2 {
          padding-top: var(--nav-h);
          background: var(--surface-card);
          --text-inverse: var(--text-primary);
          --text-inverse-muted: var(--text-primary-muted);
          overflow-x: hidden;
        }

        .pw2-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* ── Hero ── */
        .pw2-hero {
          border-radius: var(--radius-card);
          height: clamp(280px, 47.9vw, 690px);
          background: var(--text-inverse);
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
          overflow: hidden;
          position: relative;
        }
        .pw2-hero video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Overview ── */
        .pw2-overview {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .pw2-overview-title {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
        }
        .pw2-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(28px, 3.89vw, 56px);
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: var(--text-inverse);
          margin: 0;
        }
        .pw2-overview-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.39vw, 20px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: clamp(12px, 1.39vw, 20px) 0 0;
          max-width: 44ch;
        }
        .pw2-overview-right {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
        }
        .pw2-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--grid-gutter);
        }
        .pw2-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .pw2-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.6;
        }

        /* ── CTA buttons ── */
        .pw2-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(10px, 1.11vw, 16px);
        }
        .pw2-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform: skewX(-10deg);
          border-radius: 4px;
          padding: clamp(7px, 0.63vw, 9px) clamp(16px, 1.53vw, 22px);
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(15px, 1.67vw, 24px);
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          letter-spacing: -0.02em;
        }
        .pw2-btn-content { display: inline-block; transform: skewX(10deg); }
        .pw2-btn .letter,
        .pw2-btn .letter-secondary { color: inherit; transition: color 0.2s ease; }
        .pw2-btn-filled {
          background: var(--c-orange);
          color: var(--surface-card);
          border: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .pw2-btn-filled:hover { background: var(--c-orange-strong); }
        .pw2-btn-outline {
          background: transparent;
          color: var(--c-orange);
          border: clamp(2px, 0.28vw, 4px) solid var(--c-orange);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .pw2-btn-outline:hover { background: var(--c-orange); color: var(--surface-card); border-color: var(--c-orange); }

        /* ── Personal Interest ── */
        .pw2-personal-layout {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          align-items: stretch;
          padding-bottom: clamp(80px, 12.5vw, 180px);
          min-height: clamp(320px, 44.4vw, 640px);
        }
        .pw2-personal-left {
          grid-column: 1 / 5;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.22vw, 32px);
        }
        .pw2-personal-copy {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.53vw, 22px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .pw2-personal-caption {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(11px, 0.97vw, 14px);
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: var(--text-inverse-muted);
          margin: 0;
          grid-column: 1 / 5;
          grid-row: 2;
          align-self: end;
          padding-bottom: clamp(12px, 1.5vw, 20px);
        }
        .pw2-personal-right {
          grid-column: 5 / 13;
          grid-row: 1 / 3;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .pw2-personal-right img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* ── The Problem ── */
        .pw2-problem-body {
          max-width: 40ch;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .pw2-problem-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }
        .pw2-reality {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          row-gap: clamp(40px, 5.56vw, 80px);
          padding-top: clamp(40px, 5.5vw, 80px);
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }
        .pw2-reality-lbl {
          grid-column: 1 / 5;
          grid-row: 1;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          color: var(--c-orange);
          letter-spacing: -0.02em;
          align-self: start;
          margin: 0;
        }
        .pw2-reality-stat {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.83vw, 12px);
        }
        .pw2-reality-stat-1 { grid-column: 9 / 13; grid-row: 1; }
        .pw2-reality-stat-2 { grid-column: 5 / 9;  grid-row: 2; }
        .pw2-reality-stat-3 { grid-column: 1 / 5;  grid-row: 3; }
        .pw2-reality-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: var(--c-orange);
          margin: 0;
        }
        .pw2-reality-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.4;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }

        /* ── Insight ── */
        .pw2-interview-row {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(40px, 4.44vw, 64px);
        }
        .pw2-interview-left {
          flex-shrink: 0;
          width: clamp(220px, 29.2vw, 420px);
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.39vw, 20px);
        }
        .pw2-interview-media {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .pw2-interview-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .pw2-interview-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(18px, 2.22vw, 28px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.3;
          margin: 0 0 clamp(6px, 0.56vw, 8px);
        }
        .pw2-interview-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          margin: 0;
        }
        .pw2-interview-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.22vw, 32px);
        }
        .pw2-interview-statement {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(24px, 3.89vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--c-orange);
          margin: 0;
        }
        .pw2-interview-section-lbl {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          letter-spacing: -0.02em;
          margin: 0 0 clamp(8px, 0.83vw, 12px);
        }
        .pw2-findings-list {
          margin: 0;
          padding: 0;
          list-style: none;
          max-width: 62ch;
        }
        .pw2-findings-item {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.67vw, 24px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(16px, 2vw, 28px);
          padding-left: 1.1em;
          position: relative;
        }
        .pw2-findings-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 0.35em;
          height: 0.35em;
          border-radius: 1px;
          background: var(--c-orange);
          transform: skewX(-10deg);
        }
        .pw2-findings-item:last-child { margin-bottom: 0; }
        .pw2-interview-insight {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.67vw, 24px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        /* ── Design + Build ── */
        .pw2-design { padding-bottom: clamp(48px, 6.25vw, 90px); }
        .pw2-design-copy {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(40px, 5.5vw, 72px);
          max-width: 62ch;
        }

        /* A/B intro: image left (5 cols) + copy right (7 cols) */
        .pw2-ab-intro {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          align-items: flex-end;
          margin-bottom: clamp(40px, 5.5vw, 72px);
        }
        .pw2-ab-intro-img {
          grid-column: 1 / 6;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          line-height: 0;
        }
        .pw2-ab-intro-img img { width: 100%; height: auto; display: block; }
        .pw2-ab-intro-copy {
          grid-column: 6 / 13;
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 1.67vw, 24px);
        }
        .pw2-ab-intro-copy p {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.39vw, 20px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .pw2-ab-inline-img {
          border-radius: 12px;
          overflow: hidden;
          line-height: 0;
          max-width: clamp(200px, 28vw, 420px);
        }
        .pw2-ab-inline-img img { width: 100%; height: auto; display: block; }

        /* Logo variations */
        .pw2-logo-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.67vw, 24px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(16px, 1.67vw, 24px);
        }
        .pw2-logo-variation-img {
          max-width: clamp(280px, 50vw, 620px);
          border-radius: 16px;
          overflow: hidden;
          line-height: 0;
          margin-bottom: clamp(40px, 5.5vw, 72px);
        }
        .pw2-logo-variation-img img { width: 100%; height: auto; display: block; }
        .pw2-lofi-hifi {
          width: 100%;
          height: clamp(300px, 51.7vw, 744px);
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          margin-bottom: clamp(40px, 5.5vw, 72px);
        }
        /* Usability layout */
        .pw2-usability-layout {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .pw2-usability-left {
          grid-column: 1 / 6;
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 1.67vw, 24px);
        }
        .pw2-usability-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .pw2-usability-dewey {
          width: clamp(100px, 13.89vw, 200px);
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
        }
        .pw2-usability-dewey video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pw2-usability-right {
          grid-column: 6 / 13;
          aspect-ratio: 16 / 10;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
        }
        .pw2-usability-right video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #1d1f1d;
        }
        .pw2-usability-result {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.53vw, 22px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          max-width: calc(50% - var(--grid-gutter) / 2);
          margin: 0 0 clamp(40px, 5.5vw, 72px) auto;
        }

        /* ── Solution statement ── */
        .pw2-solution-statement {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          padding-bottom: clamp(48px, 6.25vw, 90px);
        }
        .pw2-solution-statement-text {
          grid-column: 1 / 7;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Solution ── */
        .pw2-solution-grid {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 6.25vw, 90px);
        }
        .pw2-solution-placeholder {
          flex: 0 0 auto;
          width: clamp(240px, 39.2vw, 565px);
          max-width: 100%;
          aspect-ratio: 1;
          height: auto;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .pw2-solution-placeholder video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .pw2-solution-text { flex: 1; min-width: 0; }
        .pw2-solution-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(16px, 2.22vw, 32px);
        }
        .pw2-solution-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .pw2-final-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .pw2-site-link { display: block; text-decoration: none; cursor: pointer; position: relative; }
        .pw2-site-link::after {
          content: 'View site';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(21, 21, 21, 0.72);
          color: #f3f0ea;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          letter-spacing: -0.02em;
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        .pw2-site-link:hover::after { opacity: 1; }
        .pw2-device-pair {
          display: flex;
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 6.25vw, 90px);
        }
        .pw2-device-video {
          flex: 1;
          min-width: 0;
          border-radius: 20px;
          overflow: hidden;
          background: #1d1f1d;
          aspect-ratio: 1;
          position: relative;
        }
        .pw2-device-video video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Conclusions ── */
        .pw2-foot {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }
        .pw2-foot-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .pw2-foot-list { margin: 0; padding: 0; list-style: none; }
        .pw2-foot-item {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(10px, 1.11vw, 16px);
          padding-left: 1.1em;
          position: relative;
          max-width: 42ch;
        }
        .pw2-foot-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 0.35em;
          height: 0.35em;
          border-radius: 1px;
          background: var(--c-orange);
          transform: skewX(-10deg);
        }
        .pw2-foot-item:last-child { margin-bottom: 0; }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */
        @media (max-width: 1023px) {
          .pw2-overview       { flex-direction: column; }
          .pw2-overview-title { flex: none; width: 100%; }
          .pw2-overview-right { flex: none; width: 100%; }
        }
        @media (max-width: 767px) {
          .pw2-meta               { grid-template-columns: 1fr; gap: 32px; }
          .pw2-reality              { grid-template-columns: 1fr; row-gap: clamp(32px, 8vw, 48px); }
          .pw2-reality-lbl,
          .pw2-reality-stat-1,
          .pw2-reality-stat-2,
          .pw2-reality-stat-3     { grid-column: 1 / -1; grid-row: auto; }
          .pw2-personal-layout    { grid-template-columns: 1fr; min-height: unset; }
          .pw2-personal-left      { grid-column: 1 / -1; grid-row: 1; }
          .pw2-personal-right     { grid-column: 1 / -1; grid-row: 2; aspect-ratio: 4 / 3; }
          .pw2-personal-caption   { grid-column: 1 / -1; grid-row: 3; padding-bottom: 0; margin-top: 12px; align-self: start; }
          .pw2-interview-row      { flex-direction: column; }
          .pw2-interview-left     { width: 100%; }
          .pw2-ab-intro           { grid-template-columns: 1fr; }
          .pw2-ab-intro-img,
          .pw2-ab-intro-copy      { grid-column: 1 / -1; }
          .pw2-logo-variation-img { max-width: 100%; }
          .pw2-ab-inline-img      { max-width: 100%; }
          .pw2-usability-dewey    { width: 100%; aspect-ratio: 1; }
          .pw2-usability-layout   { grid-template-columns: 1fr; }
          .pw2-usability-left,
          .pw2-usability-right    { grid-column: 1 / -1; }
          .pw2-usability-result        { max-width: 100%; margin-left: 0; }
          .pw2-solution-statement-text { grid-column: 1 / -1; }
          .pw2-solution-grid      { flex-direction: column; }
          .pw2-solution-placeholder { width: 100%; max-width: min(565px, 100%); flex: none; }
          .pw2-device-pair        { flex-direction: column; }
          .pw2-foot               { grid-template-columns: 1fr; }
          .pw2-lofi-hifi          { height: auto; }
        }

        @supports (corner-shape: squircle) {
          .pw2-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="pw2">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <div className="pw2-w">
          <div className="pw2-hero" role="img" aria-label="Paywall FC hero">
            <video autoPlay muted loop playsInline>
              <source src="/images/paywall-hero-new.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <RacingStripeBand label="Paywall Fc" linesFrom="left" animateOnScroll />

        <div className="pw2-w">
          <motion.div className="pw2-overview" {...scrollFadeUp}>
            <div className="pw2-overview-title">
              <h1 className="pw2-problem-ttl">Football for the fans.</h1>
              <p className="pw2-overview-desc">A long term plan to battle a worsening problem.</p>
            </div>
            <div className="pw2-overview-right">
              <div className="pw2-meta">
                <div>
                  <span className="pw2-meta-lbl">My position</span>
                  <span className="pw2-meta-val">Brand designer<br />Web designer</span>
                </div>
                <div>
                  <span className="pw2-meta-lbl">My gear</span>
                  <span className="pw2-meta-val">Figma<br />Illustrator<br />After Effects</span>
                </div>
              </div>
              <div className="pw2-cta-row">
                <a href="https://paywallfc.vercel.app/" target="_blank" rel="noopener noreferrer" className="pw2-btn pw2-btn-filled">
                  <span className="pw2-btn-content">
                    <LetterSwapPingPong label="View site" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
                <a href="/pdf/PaywallFc_PDF.pdf" target="_blank" rel="noopener noreferrer" className="pw2-btn pw2-btn-outline">
                  <span className="pw2-btn-content">
                    <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 2. PERSONAL INTEREST ─────────────────────────────────────── */}
        <RacingStripeBand label="Personal Interest" linesFrom="right" animateOnScroll />

        <div className="pw2-w">
          <motion.div className="pw2-personal-layout" {...scrollFadeUp}>
            <div className="pw2-personal-left">
              <p className="pw2-personal-copy">
                Like many others, I love the sport; it&apos;s been a big part of my life for as
                long as I can remember. With some of my fondest memories coming from watching the
                game around my friends. The laughs, the arguments, and the joy are irreplaceable.
              </p>
              <p className="pw2-personal-copy">
                As someone that was never able to have the channels because of the expense, I know
                that it is a problem, and with the rising costs it will only get worse.
              </p>
            </div>
            <div className="pw2-personal-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/paywall-watching-footy.png" alt="Watching football with friends" />
            </div>
            <p className="pw2-personal-caption">(I&apos;m pretty sure we streamed this game here lol)</p>
          </motion.div>
        </div>

        {/* ── 3. THE PROBLEM ───────────────────────────────────────────── */}
        <RacingStripeBand label="The Problem" linesFrom="left" animateOnScroll />

        <div className="pw2-w">
          <motion.div {...scrollFadeUp}>
            <p className="pw2-problem-body">
              <span className="pw2-problem-accent">Football fans</span>
              {' '}are being silenced by their own wallets, split across endless platforms,
              priced out of their passion and ignored by the leagues and broadcasters profiting
              from it.
            </p>
            <div className="pw2-reality">
              <p className="pw2-reality-lbl">The Reality</p>

              <div className="pw2-reality-stat pw2-reality-stat-1">
                <p className="pw2-reality-num">5Mill+</p>
                <p className="pw2-reality-desc">UK fans regularly pirate games.</p>
              </div>

              <div className="pw2-reality-stat pw2-reality-stat-2">
                <p className="pw2-reality-num">15%</p>
                <p className="pw2-reality-desc">Of Premier League games blacked out, even with the premium cost.</p>
              </div>

              <div className="pw2-reality-stat pw2-reality-stat-3">
                <p className="pw2-reality-num">£820+</p>
                <p className="pw2-reality-desc">Is the minimum UK fans pay to follow their team in just the Premier League.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 4. INSIGHT ───────────────────────────────────────────────── */}
        <RacingStripeBand label="Interviewing" linesFrom="right" animateOnScroll />

        <div className="pw2-w">
          <motion.div {...scrollFadeUp}>
            <div className="pw2-interview-row">
              <div className="pw2-interview-left">
                <div className="pw2-interview-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/lewis.png" alt="Lewis Darley" />
                </div>
                <p className="pw2-interview-insight">
                  The cost isn&rsquo;t just financial. Fans are being cut off from the culture
                  of watching together.
                </p>
                <div>
                  <p className="pw2-interview-name">Lewis Darley</p>
                  <p className="pw2-interview-meta">
                    23, Newmarket, England<br />
                    Southampton Fan
                  </p>
                </div>
              </div>
              <div className="pw2-interview-content">
                <p className="pw2-interview-statement">&ldquo;GREEDY FXCKXNG BXSTXRDS&rdquo;</p>
                <div>
                  <p className="pw2-interview-section-lbl">FINDINGS</p>
                  <ul className="pw2-findings-list">
                    <li className="pw2-findings-item">
                      Will watch football at the pub as a pint is cheaper than streaming a game at home
                    </li>
                    <li className="pw2-findings-item">
                      Hates the blackout — believes it actually hurts local businesses and punishes the fans who pay the most
                    </li>
                    <li className="pw2-findings-item">
                      Misses games all the time because of not having the right subscriptions, leaving him with only the highlights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 5. BIG IDEA ──────────────────────────────────────────────── */}
        <RacingStripeBand label="The Big Idea" linesFrom="right" animateOnScroll />

        <div className="pw2-w">
          <motion.div className="pw2-solution-grid" {...scrollFadeUp}>
            <div className="pw2-solution-placeholder">
              <video
                ref={solutionVideoRef}
                muted
                playsInline
                preload="auto"
                aria-label="Paywall FC logo animation"
              >
                <source src="/images/LogoAnimation.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pw2-solution-text">
              <p className="pw2-solution-title">Paywall FC</p>
              <p className="pw2-solution-body">
                I intend to solve this by building a hypothetical club to represent the millions
                of UK fans, highlighting the rising cost of watching the game, with a long-term
                plan to bring it back to the fans.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── 6. DESIGN + BUILD ────────────────────────────────────────── */}
        <RacingStripeBand label="Design + Build" linesFrom="left" animateOnScroll />

        <div className="pw2-w pw2-design">
          <motion.div {...scrollFadeUp}>

            {/* A/B intro */}
            <div className="pw2-ab-intro">
              <div className="pw2-ab-intro-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/paywall-ab-test.png" alt="Brand direction A vs B" />
              </div>
              <div className="pw2-ab-intro-copy">
                <p>I tested two different directions with A being an old logo and system and B being a new.</p>
                <p>Direction B won. The high contrast yellow and black, Kanit typography, and updated badge felt more distinctive and modern.</p>
                <p>I took direction B forward and introduced logo variations.</p>
                <div className="pw2-ab-inline-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/pwallvariation.png" alt="Paywall FC logo variations" />
                </div>
              </div>
            </div>

            {/* Lo-fi to hi-fi */}
            <div className="pw2-lofi-hifi">
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                aria-label="Lo-fi to hi-fi progression"
              >
                <source src="/images/paywall-sketching-to-final.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="pw2-usability-layout">
              <div className="pw2-usability-left">
                <p className="pw2-usability-body">
                  Once I built out the site in the final design direction I took it to be
                  used and critiqued by Dewey.
                </p>
                <p className="pw2-usability-body">
                  There was a big love of the copy — it was received and understood well.
                </p>
                <p className="pw2-usability-body">
                  But Dewey got stuck at the calculator. He liked the feature but didn&apos;t
                  want to scroll through all of the fixtures.
                </p>
                <div className="pw2-usability-dewey">
                  <video autoPlay muted loop playsInline aria-label="Dewey usability session">
                    <source src="/images/paywall-usability-testing.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="pw2-usability-right">
                <video autoPlay muted loop playsInline aria-label="Calculator fixture toggle">
                  <source src="/images/paywall-fixtoggle.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <p className="pw2-usability-result">
              This resulted in a simple skip button being added in, taking you straight to the
              big reveal to improve the UX.
            </p>

          </motion.div>
        </div>

        {/* ── FINAL SITE ────────────────────────────────────────────── */}
        <RacingStripeBand label="Final Site" linesFrom="right" animateOnScroll />

        {/* ── SOLUTION STATEMENT ───────────────────────────────────────── */}
        <div className="pw2-w">
          <motion.div className="pw2-solution-statement" {...scrollFadeUp}>
            <p className="pw2-solution-statement-text">
              Paywall FC gives fans a place to unite, putting the rising costs front and centre,
              with a club to get behind, turning peoples frustration into a collective voice the
              Premier League can&apos;t ignore.
            </p>
          </motion.div>
        </div>

        <div className="pw2-w">
          <motion.div {...scrollFadeUp}>
            <a href="https://paywallfc.vercel.app/" target="_blank" rel="noopener noreferrer" className="pw2-final-image pw2-site-link">
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
                aria-label="Paywall FC final product"
              >
                <source src="/images/paywall-product.mp4" type="video/mp4" />
              </video>
            </a>
            <div className="pw2-device-pair">
              <a href="https://paywallfc.vercel.app/" target="_blank" rel="noopener noreferrer" className="pw2-device-video pw2-site-link">
                <video autoPlay muted loop playsInline aria-label="iPad view">
                  <source src="/images/ipdsquare.mp4" type="video/mp4" />
                </video>
              </a>
              <a href="https://paywallfc.vercel.app/" target="_blank" rel="noopener noreferrer" className="pw2-device-video pw2-site-link">
                <video autoPlay muted loop playsInline aria-label="Phone view">
                  <source src="/images/phonsquare.mp4" type="video/mp4" />
                </video>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── 6. CONCLUSIONS ───────────────────────────────────────────── */}
        <RacingStripeBand label="Conclusions" linesFrom="left" animateOnScroll />

        <div className="pw2-w">
          <motion.div className="pw2-foot" {...scrollFadeUp}>
            <div>
              <p className="pw2-foot-title">Lessons</p>
              <ul className="pw2-foot-list">
                <li className="pw2-foot-item">The cost isn&apos;t just financial — fans are being cut off from the culture of watching together, and that&apos;s just the beginning of it</li>
                <li className="pw2-foot-item">Interviewing real fans revealed how normalised the frustration is — fans have adapted rather than demanded change</li>
                <li className="pw2-foot-item">A hypothetical product still needs a realistic business model — a fan-owned or fan-funded structure needs more exploration</li>
              </ul>
            </div>
            <div>
              <p className="pw2-foot-title">Next Steps</p>
              <ul className="pw2-foot-list">
                <li className="pw2-foot-item">Test the site with real fan groups and supporters to measure resonance and see if they would sign</li>
                <li className="pw2-foot-item">Develop the petition and collective action mechanic — what does &ldquo;joining&rdquo; actually mean for a fan?</li>
                <li className="pw2-foot-item">Explore partnership with existing fan advocacy organisations like the FSA</li>
                <li className="pw2-foot-item">Investigate the legal and rights landscape — what can actually be challenged, and by whom?</li>
              </ul>
            </div>
            <div style={{ gridColumn: '1 / -1', marginTop: 'clamp(24px, 2.78vw, 40px)', display: 'flex', gap: 'clamp(10px, 1.11vw, 16px)' }}>
              <a href="https://paywallfc.vercel.app/" target="_blank" rel="noopener noreferrer" className="pw2-btn pw2-btn-filled">
                <span className="pw2-btn-content">
                  <LetterSwapPingPong label="View site" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
              <a href="/pdf/PaywallFc_PDF.pdf" target="_blank" rel="noopener noreferrer" className="pw2-btn pw2-btn-outline">
                <span className="pw2-btn-content">
                  <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      <RelatedCases currentSlug="paywall-fc" />
    </>
  )
}
