import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '1afs9f8p',
  dataset: 'production',
  apiVersion: '2023-11-27',
  useCdn: true,
  token: 'skO0hbUk9DEBvMHwzz5sVgAED5exSg0KN5vHetQilpDCyZJmClc8lV8X1Ma8LRZpHHfAISTd0Wy3Z0yP6MQnWInfBb98KZC5Lyd2sP9nYDUESTKeRmiBRsdqJUecOMRyWJKbj4BGP4wU3Yq4dGw64LfVudmB80BE5xlvEhxyckvQjdAi8grF'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);