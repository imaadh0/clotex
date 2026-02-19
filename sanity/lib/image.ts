// TEMPORARILY MODIFIED - using dummy data instead of Sanity
// Original Sanity code commented out below

// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { dataset, projectId } from '../env'
// const builder = createImageUrlBuilder({ projectId, dataset })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
  // If source is a string URL, return it directly
  if (typeof source === "string") {
    return { url: () => source };
  }

  // If source has a .url property (dummy data format), return it
  if (source?.url) {
    return { url: () => source.url };
  }

  // Fallback: return a placeholder
  return { url: () => "/images/placeholder.png" };
};
