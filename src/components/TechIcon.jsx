import React, { useState } from 'react';
import { Atom } from 'lucide-react';

const TechIcon = ({ slug, name, size = 32 }) => {
  const [error, setError] = useState(false);
  const theme = "dark"; // Skillicons handles its own contrast well with dark theme icons
  
  if (error) return <div className="text-zinc-400"><Atom size={size * 0.75} /></div>;

  return (
    <img 
      src={`https://skillicons.dev/icons?i=${slug}&theme=${theme}`} 
      alt={name}
      style={{ width: size, height: size }}
      className="object-contain transition-transform group-hover:scale-110 duration-300"
      onError={() => setError(true)}
    />
  );
};

export default TechIcon;
