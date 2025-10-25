'use client';

import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { LuLogIn } from 'react-icons/lu';

import './AppBarActions.scss';

const AppBarActions: React.FC = () => {
  return (
    <div className='action-buttons'>
      <button className='action-buttons__button' aria-label='Поиск'>
        <HiSearch />
      </button>
      <button className='action-buttons__button' aria-label='Вход на сайт'>
        <LuLogIn />
      </button>
    </div>
  );
};

export default AppBarActions;
