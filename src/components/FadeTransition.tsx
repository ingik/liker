'use client';

import { useEffect, useState } from 'react';

interface FadeTransitionProps {
  show: boolean;
  children: React.ReactNode;
}

export default function FadeTransition({
  show,
  children,
}: FadeTransitionProps) {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) setShouldRender(true);
    else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div
      className={`transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {shouldRender && children}
    </div>
  );
}
