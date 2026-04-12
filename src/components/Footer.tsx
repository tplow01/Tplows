'use client'

// ── Social icon SVGs ─────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6.5" y="6.5" width="35" height="35" rx="10" stroke="white" strokeWidth="3"/>
      <circle cx="24" cy="24" r="8.5" stroke="white" strokeWidth="3"/>
      <circle cx="35" cy="13" r="2.5" fill="white"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.954 4 4 12.954 4 24c0 8.837 5.724 16.327 13.672 18.974.999.184 1.365-.433 1.365-.964 0-.475-.017-1.733-.027-3.402-5.561 1.208-6.734-2.681-6.734-2.681-.908-2.308-2.217-2.922-2.217-2.922-1.813-1.238.137-1.213.137-1.213 2.004.141 3.059 2.059 3.059 2.059 1.781 3.051 4.673 2.169 5.814 1.659.181-1.29.697-2.17 1.268-2.667-4.439-.505-9.103-2.22-9.103-9.878 0-2.181.779-3.966 2.056-5.364-.206-.506-.892-2.538.196-5.293 0 0 1.677-.537 5.493 2.049A19.154 19.154 0 0 1 24 14.7c1.697.008 3.406.229 5.001.672 3.812-2.586 5.486-2.049 5.486-2.049 1.09 2.755.404 4.787.198 5.293 1.28 1.398 2.054 3.183 2.054 5.364 0 7.677-4.671 9.367-9.12 9.862.717.617 1.355 1.836 1.355 3.701 0 2.671-.024 4.826-.024 5.482 0 .535.362 1.158 1.376.961C38.282 40.322 44 32.836 44 24c0-11.046-8.954-20-20-20z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4.5" y="4.5" width="39" height="39" rx="6" stroke="white" strokeWidth="3"/>
      <rect x="13" y="20" width="5" height="15" fill="white"/>
      <circle cx="15.5" cy="14.5" r="2.5" fill="white"/>
      <path d="M22 20h5v2.4C27.7 20.9 29.6 20 31.8 20c4.2 0 5.7 2.8 5.7 6.9V35h-5v-7.4c0-2-.4-3.6-2.5-3.6s-3 1.7-3 3.4V35H22V20z" fill="white"/>
    </svg>
  )
}

const SOCIAL = [
  { href: 'https://www.instagram.com/tplows.design', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://github.com/tplowman',             label: 'GitHub',    Icon: GithubIcon    },
  { href: 'https://linkedin.com/in/thomas-plowman',  label: 'LinkedIn',  Icon: LinkedInIcon  },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to top, var(--c-orange) 0%, #f7f7fb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 60px',
      minHeight: '420px',
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '420px',
        paddingTop: '78px',
        paddingBottom: '28px',
        gap: '30px',
      }}>

        {/* Logo icon mark */}
        <svg
          viewBox="0 0 62.8 116.37"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ width: '63px', height: 'auto', display: 'block', flexShrink: 0 }}
        >
          <path fill="white" d="M56.51,24.48c.09.63-.11,1.28-.29,2.42-.25,1.42-.58,3.2-.81,4.49-.26,1.29-.23,1.96-1.03,2.6-.6.51-1.29.52-1.99.36-2.64-.47-12.18-2.19-14.64-2.63-.96-.23-1.18.29-1.38,1.19-.22,1.07-.47,2.55-.63,3.57-.3,1.41.79,1.73,1.98,2.04,19.19,4.67,30.94,23.75,22.09,40.04-.8,1.34-1.56,2.86-2.77,3.87-.67.44-1.38.15-2.04-.12-2.91-1.26-6.49-1.11-9.09.77-1.22.68-2.12,2.68-3.49,2.36-1.1-.44-2.01-1.31-3.04-1.97-1.06-.73-2.61-1.64-.95-2.75,4.66-2.2,8.81-5.65,10.03-10.84,1.94-8.24-3.92-16.42-12.93-19.17-.65-.21-1.91-.4-2.23-.24-1.16,3.8-8.63,48.06-10.8,59.27-.02.94-1.16,1.84-1.98,1.98-2.8.8-12.83,3.77-15.64,4.57-1.84.51-2.68-1.53-2.41-1.94,1.04-5.68,13.1-73.04,15.3-85.25.28-.75-.62-.97-1.2-1.06-.66-.13-1.81-.32-3.02-.54-1.75-.31-3.73-.67-5.58-1-2.63-.47-4.95-.89-6.09-1.09-.51-.08-1-.25-1.34-.67-.89-1.06-.49-1.88-.23-3.55.11-.62.22-1.24.33-1.86.19-1.06.43-2.43.6-3.32.11-.99.56-1.99,1.54-2.34,4.37.18,39.24,7.01,52.32,9.17.68.13,1.18.82,1.39,1.6v.05Z"/>
          <path fill="white" d="M38.24,8.36c-2.22,9.72-16.66,5.67-13.47-3.78,1.7-5.21,8.73-6.1,12.08-2.04,1.22,1.39,1.82,3.74,1.41,5.73l-.02.09Z"/>
          <path fill="white" d="M58.3,93.14c-1.38,9.79-16.08,6.88-13.61-2.7,1.35-5.3,8.13-6.67,11.79-2.91,1.3,1.27,2.07,3.53,1.82,5.54v.07Z"/>
        </svg>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ display: 'flex', opacity: 0.9, transition: 'opacity 0.2s, transform 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)' }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: 1,
          color: '#f7f7fb',
          margin: 0,
          textAlign: 'center',
        }}>
          © 2026 Thomas Plowman
        </p>

      </div>
    </footer>
  )
}
