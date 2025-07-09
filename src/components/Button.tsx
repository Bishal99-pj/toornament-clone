interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outlined';
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'outlined', 
  onClick, 
  className = '',
  href
}) => {
  const baseClasses = 'px-6 py-2 rounded-sm font-semibold transition-colors inline-block text-center';
  const variantClasses = variant === 'outlined' 
    ? 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
    : '';

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;