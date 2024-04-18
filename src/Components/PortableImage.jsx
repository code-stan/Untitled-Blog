/* eslint-disable react/prop-types */
import imageUrlBuilder from '@sanity/image-url';
import { client }from '../lib/client';

const PortableTextImage = ({ value }) => {
  const imageUrl = imageUrlBuilder(client)
    .image(value)
    .width(800) // Set a default width for images
    .fit('max')
    .auto('format')
    .url();

  return (
    <img
      src={imageUrl}
      alt={value.alt || ' '}
      loading="lazy"
      style={{ width: '200px' }}
    />
  );
};

export default PortableTextImage;