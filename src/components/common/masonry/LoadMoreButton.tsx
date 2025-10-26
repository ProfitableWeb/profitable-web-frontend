'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './LoadMoreButton.scss';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

/**
 * Кнопка "Загрузить ещё" для masonry-сетки
 *
 * @param onClick - Обработчик клика
 * @param isLoading - Состояние загрузки
 * @param disabled - Отключена ли кнопка
 */
const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  isLoading,
  disabled = false,
}) => {
  return (
    <div className='load-more'>
      <motion.button
        className='load-more__button'
        onClick={onClick}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {isLoading ? (
          <>
            <span className='load-more__spinner' />
            <span>Загрузка...</span>
          </>
        ) : (
          <span>Загрузить ещё</span>
        )}
      </motion.button>
    </div>
  );
};

export default LoadMoreButton;
