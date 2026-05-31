import { useEffect } from 'react'

/**
 * Sets a SEO-friendly document title (and optional meta description) for a page.
 * Restores nothing on unmount because each page sets its own on mount.
 */
export default function usePageTitle(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
