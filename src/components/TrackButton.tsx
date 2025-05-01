import React from 'react';
import { Link } from 'react-router-dom';

interface TrackButtonProps {
  to: string;
  label: string;
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const TrackButton: React.FC<TrackButtonProps> = ({ 
  to, 
  label, 
  color = 'primary',
  fullWidth = false
}) => {
  return (
    <Link
      to={to}
      className={`btn ${color === 'primary' ? 'btn-primary' : 'btn-secondary'} 
        ${fullWidth ? 'w-full' : 'inline-block'} text-center`}
    >
      {label}
    </Link>
  );
};

export default TrackButton;