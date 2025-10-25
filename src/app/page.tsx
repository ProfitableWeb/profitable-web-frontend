'use client';

import AppBar from '@/components/app-layout/app-bar/AppBar';
import AppPageWrapper from '@/components/app-layout/app-page-wrapper';
import AppHomeHeroHeader from '@/components/app-layout/app-home-page/app-home-hero-header';

export default function HomePage() {
  return (
    <div className='home-page'>
      <AppBar />
      <AppPageWrapper>
        <main>
          <AppHomeHeroHeader />
        </main>
      </AppPageWrapper>
    </div>
  );
}
