import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skU6VjxfJE6Xb3rtzhtuSLMzGlvJUKwPSBu2f9lb50AKCubf5ihkBZAOMRrPlz9a2aNUhvyMXe6bKddQ3vEwdIG79JpouX4ClIXcLOufI0YRvRGU3kb4GGWEhY5bGkxthqjJgZssl31jYjPy3olrKSZkfFakS6nMPh91AgWa7320apbRJS5L"
})
