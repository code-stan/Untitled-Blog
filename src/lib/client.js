import { createClient } from '@sanity/client'

export const client = createClient({
     projectId: "ozui4ife",
     dataset: "production",
     apiVersion: "2022-03-14",
     useCdn: true
})