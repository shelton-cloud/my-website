22:59:15.490 Running build in Washington, D.C., USA (East) – iad1
22:59:15.491 Build machine configuration: 2 cores, 8 GB
22:59:15.611 Cloning github.com/shelton-cloud/my-website (Branch: feat/redesign, Commit: 75dcfbc)
22:59:17.072 Cloning completed: 1.460s
22:59:17.255 Restored build cache from previous deployment (8tRm4cHHy8GGARGJnNmEdrJyWv7C)
22:59:17.526 Running "vercel build"
22:59:18.358 Vercel CLI 53.3.1
22:59:18.622 Installing dependencies...
22:59:20.227 
22:59:20.228 removed 4 packages in 1s
22:59:20.228 
22:59:20.229 145 packages are looking for funding
22:59:20.229   run `npm fund` for details
22:59:20.260 Detected Next.js version: 16.1.6
22:59:20.265 Running "npm run build"
22:59:20.372 
22:59:20.372 > temp_app@0.1.0 build
22:59:20.372 > next build
22:59:20.373 
22:59:21.519 ▲ Next.js 16.1.6 (Turbopack)
22:59:21.520 
22:59:21.556   Creating an optimized production build ...
22:59:35.087 
22:59:35.088 > Build error occurred
22:59:35.092 Error: Turbopack build failed with 2 errors:
22:59:35.092 ./src/app/projects/page.tsx:6:1
22:59:35.092 Module not found: Can't resolve '@/components/VibeCodingSection'
22:59:35.092   4 | import { Footer } from "@/components/Footer";
22:59:35.092   5 | import { ProjectsSection } from "@/components/ProjectsSection";
22:59:35.092 > 6 | import { VibeCodingSection } from "@/components/VibeCodingSection";
22:59:35.093     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
22:59:35.093   7 | import { PersonalSection } from "@/components/PersonalSection";
22:59:35.093   8 | import MusicPlayerWrapper from '@/components/MusicPlayerWrapper';
22:59:35.093   9 |
22:59:35.094 
22:59:35.094 Import map: aliased to relative './src/components/VibeCodingSection' inside of [project]/
22:59:35.094 
22:59:35.094 
22:59:35.094 https://nextjs.org/docs/messages/module-not-found
22:59:35.094 
22:59:35.094 
22:59:35.094 ./src/components/FadeIn.tsx:4:1
22:59:35.094 Module not found: Can't resolve 'framer-motion'
22:59:35.095   2 |
22:59:35.095   3 | import React from 'react';
22:59:35.095 > 4 | import { motion } from 'framer-motion';
22:59:35.096     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
22:59:35.096   5 |
22:59:35.096   6 | interface FadeInProps {
22:59:35.096   7 |     children: React.ReactNode;
22:59:35.097 
22:59:35.097 
22:59:35.097 
22:59:35.097 Import trace:
22:59:35.097   Server Component:
22:59:35.097     ./src/components/FadeIn.tsx
22:59:35.097     ./src/app/page.tsx
22:59:35.097 
22:59:35.098 https://nextjs.org/docs/messages/module-not-found
22:59:35.098 
22:59:35.098 
22:59:35.098     at <unknown> (./src/app/projects/page.tsx:6:1)
22:59:35.098     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:59:35.098     at <unknown> (./src/components/FadeIn.tsx:4:1)
22:59:35.098     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:59:35.184 Error: Command "npm run build" exited with 1
