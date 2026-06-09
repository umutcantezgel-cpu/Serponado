// Cloudflare Edge Resizing image loader for Next.js
// https://developers.cloudflare.com/images/transform-images/integrate-with-frameworks/

export interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderParams): string {
  // In development, return the raw path
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // Cloudflare Image Resizing URL pattern
  const params = [
    `width=${width}`,
    `quality=${quality || 75}`,
    'format=auto', // Cloudflare will serve AVIF/WebP based on Accept header
    'fit=cover',
  ].join(',');
  
  return `/cdn-cgi/image/${params}${src}`;
}
