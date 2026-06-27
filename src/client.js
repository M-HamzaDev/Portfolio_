import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-09-16',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  try {
    return builder.image(source);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error; // Rethrow the error to handle it at a higher level if needed.
  }
};
