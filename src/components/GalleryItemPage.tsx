import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'

interface GalleryItemData {
  title: string
  galleryType: string
  category?: string
  description?: unknown[]
  coverImage?: { asset: { _ref: string } }
  images?: Array<{
    _key: string
    image: { asset: { _ref: string } }
    caption?: string
  }>
}

interface Props {
  data: GalleryItemData | null
  backHref: string
  backLabel: string
}

export default function GalleryItemPage({ data, backHref, backLabel }: Props) {
  if (!data) {
    return (
      <div style={{ paddingTop: '72px', backgroundColor: '#f3f0ea', minHeight: '100vh', padding: '120px 40px' }}>
        <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', color: 'rgba(21,21,21,0.4)' }}>Content coming soon.</p>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '72px', backgroundColor: '#f3f0ea', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#151515',
          padding: 'clamp(60px, 10vw, 120px) 40px clamp(40px, 6vw, 80px)',
        }}
      >
        <TransitionLink
          href={backHref}
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'rgba(243,240,234,0.35)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}
        >
          ← {backLabel}
        </TransitionLink>
        {data.category && (
          <div
            className="font-display"
            style={{ fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#f15e22', marginBottom: '16px' }}
          >
            {data.category}
          </div>
        )}
        <h1
          className="font-display fade-up"
          style={{
            fontSize: 'clamp(28px, 5vw, 72px)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            color: '#f3f0ea',
            margin: 0,
            maxWidth: '14ch',
          }}
        >
          {data.title}
        </h1>
      </section>

      {/* Cover */}
      {data.coverImage && (
        <div style={{ lineHeight: 0 }}>
          <Image
            src={urlFor(data.coverImage).width(1600).quality(90).url()}
            alt={data.title}
            width={1600}
            height={800}
            style={{ width: '100%', height: 'clamp(200px, 35vw, 520px)', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Description */}
      {data.description && (
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 40px', maxWidth: '700px' }}>
          <div
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '17px', lineHeight: 1.75, color: 'rgba(21,21,21,0.75)' }}
          >
            <PortableText value={data.description as Parameters<typeof PortableText>[0]['value']} />
          </div>
        </section>
      )}

      {/* Image gallery */}
      {data.images && data.images.length > 0 && (
        <section style={{ padding: '0 40px clamp(60px, 8vw, 100px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2px' }}>
            {data.images.map((item) => (
              <figure key={item._key} className="card-corners" style={{ margin: 0, borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
                <Image
                  src={urlFor(item.image).width(800).quality(85).url()}
                  alt={item.caption ?? ''}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                />
                {item.caption && (
                  <figcaption
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '12px',
                      color: 'rgba(21,21,21,0.4)',
                      padding: '8px 0',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
