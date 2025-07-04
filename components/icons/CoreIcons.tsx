
import React from 'react';

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-1.344-.688 11.85 11.85 0 01-2.032-1.103A31.625 31.625 0 017.65 15.64c-.64-1.292-1-2.64-1-3.939 0-3.418 2.761-6.179 6.179-6.179 3.418 0 6.179 2.761 6.179 6.179 0 1.299-.36 2.647-.999 3.938a31.474 31.474 0 01-2.553 3.635 11.85 11.85 0 01-2.032 1.103 15.34 15.34 0 01-1.344.688l-.022.012-.007.003-.002.001a.752.752 0 01-.692 0l-.002-.001z" />
  </svg>
);
