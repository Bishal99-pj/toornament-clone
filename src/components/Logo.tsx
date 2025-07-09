interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-96'
  };

  return (
    <a href="/" className={`flex ${className}`}>
      {showText ? (
        <img src="/public/assets/toornament-logo.svg" alt="Toornament Logo Textual" className={sizeClasses[size]} />
      ) : <img src="/public/assets/toornament-logo-small.png" alt="Toornament Logo Small Icon" className={sizeClasses[size]} />}
    </a>
  );
};

export default Logo;