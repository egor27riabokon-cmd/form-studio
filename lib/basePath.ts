// next/image (in unoptimized mode, used for static export) does not
// automatically prefix local image paths with `basePath` the way next/link
// does for hrefs. This helper applies it manually wherever we pass a local
// /public path to next/image's `src`.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (!path) return path;
  return `${basePath}${path}`;
}
