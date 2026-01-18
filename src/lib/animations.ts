/**
 * Framer Motion animation variants for Everyday Properties
 * Usage: Import these variants into components for consistent animations
 */

import type { Easing } from "framer-motion";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

// Basic fade up animation
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

// For use with whileInView
export const fadeUpInView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut },
};

// Stagger container for parent elements
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item for child elements
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
};

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut },
};

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut },
};

// Scale up animation
export const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: easeOut },
};

// Hero animation with sequential delays
export const heroAnimation = {
  headline: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2, ease: easeOut },
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4, ease: easeOut },
  },
  cta: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.6, ease: easeOut },
  },
  image: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.8, ease: easeOut },
  },
};

// Navbar animation
export const navbarAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: easeOut },
};

// Card hover animation
export const cardHover = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: easeOut },
  },
};

// Button hover animation
export const buttonHover = {
  whileHover: {
    y: -2,
    transition: { duration: 0.15, ease: easeOut },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};
