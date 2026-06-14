import { ReactNode } from 'react';
import { useIntersection } from '../lib/useIntersection';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, children, className = '' }: Props) => {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  );
};