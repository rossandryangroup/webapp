import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required: scopes Turbopack's file watcher to this app's tree.
  // Without it, Turbopack walks up looking for lockfiles, picks the parent
  // monorepo's bun.lock, and OOM-crashes. Match cowork-defrag's working config.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
