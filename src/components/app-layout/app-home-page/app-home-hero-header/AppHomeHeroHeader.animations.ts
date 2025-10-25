import { Variants } from 'framer-motion';

/**
 * Анимационные варианты для контейнера hero-header
 * Создает эффект stagger (последовательное появление дочерних элементов)
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Анимационные варианты для дочерних элементов
 * Эффект fade-in + slide-up с плавным easing
 */
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const, // easeOut cubic-bezier
    },
  },
};
