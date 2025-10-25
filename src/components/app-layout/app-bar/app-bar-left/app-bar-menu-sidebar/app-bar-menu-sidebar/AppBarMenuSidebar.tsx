'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import Overlay from '@/components/common/overlay/';
import SwipeDetector from '@/components/common/swipe-detector/';
import './AppBarMenuSidebar.scss';
import Link from 'next/link';

interface AppBarMenuSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const AppBarMenuSidebar: React.FC<AppBarMenuSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Overlay isVisible={isOpen} onClick={onClose} zIndex={1040} />
      <AnimatePresence>
        {isOpen && (
          <div className='app-bar-menu-sidebar'>
            <motion.div
              className='app-bar-menu-sidebar__content'
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SwipeDetector
                onSwipeLeft={onClose}
                threshold={50}
                className='app-bar-menu-sidebar__swipe-detector'
              >
                <nav className='app-bar-menu-sidebar__nav'>
                  <ul>
                    <li>
                      <Link href='/' className='app-bar-menu-sidebar__nav-item'>
                        Главная
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/rubrics'
                        className='app-bar-menu-sidebar__nav-item'
                      >
                        Рубрики
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/about'
                        className='app-bar-menu-sidebar__nav-item'
                      >
                        О проекте
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contacts'
                        className='app-bar-menu-sidebar__nav-item'
                      >
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </nav>
              </SwipeDetector>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppBarMenuSidebar;
