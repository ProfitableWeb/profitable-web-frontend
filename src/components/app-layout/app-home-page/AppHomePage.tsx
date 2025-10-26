'use client';

import React from 'react';
import AppBar from '@/components/app-layout/app-bar/AppBar';
import AppPageWrapper from '@/components/app-layout/app-page-wrapper';
import AppHomeHeroHeader from '@/components/app-layout/app-home-page/app-home-hero-header';
import { MasonryGrid } from '@/components/common/masonry';
import { Article } from '@/components/common/masonry/types';

interface AppHomePageProps {
  articles: Article[];
}

/**
 * Client Component для главной страницы
 * Получает данные статей из Server Component
 */
const AppHomePage: React.FC<AppHomePageProps> = ({ articles }) => {
  return (
    <div className='home-page'>
      <AppBar />
      <AppPageWrapper>
        <main>
          <AppHomeHeroHeader />
          <MasonryGrid articles={articles} />
        </main>
      </AppPageWrapper>
    </div>
  );
};

export default AppHomePage;
