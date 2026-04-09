import { groq } from 'next-sanity'

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(order asc) {
    _id,
    title,
    slug,
    label,
    tag,
    description,
    coverImage,
    order
  }
`

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    label,
    tag,
    description,
    overview,
    coverImage,
    prototypeUrl,
    designComponent,
    slideshowUrl,
    gallery
  }
`

export const galleryItemsQuery = groq`
  *[_type == "galleryItem" && galleryType == $type] | order(order asc) {
    _id,
    title,
    slug,
    category,
    coverImage,
    order
  }
`

export const galleryItemBySlugQuery = groq`
  *[_type == "galleryItem" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    galleryType,
    category,
    description,
    coverImage,
    images
  }
`

export const aboutQuery = groq`
  *[_type == "about" && _id == "about"][0] {
    bio,
    photo,
    skills,
    resumeFile
  }
`
