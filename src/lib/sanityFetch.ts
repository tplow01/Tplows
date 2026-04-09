import { client, isSanityConfigured } from '@/sanity/lib/client'
import type { QueryParams } from 'next-sanity'

export async function safeFetch<T>(query: string, params?: QueryParams): Promise<T | null> {
  if (!isSanityConfigured) return null
  try {
    if (params) {
      return await client.fetch<T>(query, params)
    }
    return await client.fetch<T>(query)
  } catch {
    return null
  }
}
