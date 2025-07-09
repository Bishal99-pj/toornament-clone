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
    <div className={'flex justify-center' + `${className}`}>
      {showText ? (
        <img src="/src/public/assets/toornament-logo.svg" alt="Toornament Logo Textual" className={sizeClasses[size]} />
      ) : <img src="/src/public/assets/toornament-logo-small.png" alt="Toornament Logo Small Icon" className={sizeClasses[size]} />}
    </div>
  );
};

export default Logo;