// src/components/Button.jsx
import React from 'react';

/**
 * Button
 * ──────
 * Props:
 *   variant   → 'primary' | 'outline' | 'lime' | 'ghost'   (default: 'primary')
 *   size      → 'sm' | 'md' | 'lg'                          (default: 'md')
 *   href      → string  — renders an <a> tag instead of <button>
 *   external  → bool    — adds target="_blank" rel="noopener noreferrer"
 *   disabled  → bool
 *   loading   → bool    — shows spinner + disables interaction
 *   className → string  — extra classes
 *   onClick   → fn
 *   children  → node
 */

const sizeMap = {
  sm: { padding: '0.45rem 1.1rem',  fontSize: '0.75rem' },
  md: { padding: '0.7rem 1.6rem',   fontSize: '0.82rem' },
  lg: { padding: '0.9rem 2.25rem',  fontSize: '0.88rem' },
};

const variantStyles = {
  primary: {
    background:  'linear-gradient(135deg, #F7E7CE 0%, #e0c9a6 100%)',
    color:       'var(--bg-base)',
    border:      '1.5px solid transparent',
    fontWeight:  700,
    boxShadow:   'var(--shadow-gold)',
  },
  outline: {
    background:  'transparent',
    color:       'var(--gold)',
    border:      '1.5px solid var(--gold)',
    fontWeight:  600,
    boxShadow:   'none',
  },
  lime: {
    background:  'transparent',
    color:       'var(--lime-main)',
    border:      '1.5px solid var(--lime-main)',
    fontWeight:  600,
    boxShadow:   'none',
  },
  ghost: {
    background:  'var(--gold-subtle)',
    color:       'var(--gold)',
    border:      '1.5px solid rgba(247,231,206,0.15)',
    fontWeight:  600,
    boxShadow:   'none',
  },
};

const hoverStyles = {
  primary: {
    background:  'linear-gradient(135deg, #fff3e0 0%, #F7E7CE 100%)',
    boxShadow:   'var(--shadow-gold-lg)',
    transform:   'translateY(-2px)',
  },
  outline: {
    background:  'rgba(247,231,206,0.08)',
    boxShadow:   'var(--shadow-gold)',
    transform:   'translateY(-2px)',
  },
  lime: {
    background:  'rgba(74,222,128,0.1)',
    boxShadow:   '0 0 20px rgba(74,222,128,0.25)',
    transform:   'translateY(-2px)',
  },
  ghost: {
    background:  'rgba(247,231,206,0.18)',
    boxShadow:   'var(--shadow-gold)',
    transform:   'translateY(-2px)',
  },
};

const Spinner = () => (
  <svg
    width="14" height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ animation: 'spin 0.7s linear infinite', flexShrink: 0 }}
  >
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="2" strokeDasharray="20" strokeDashoffset="10" strokeLinecap="round" />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </svg>
);

const Button = ({
  variant  = 'primary',
  size     = 'md',
  href,
  external = false,
  disabled = false,
  loading  = false,
  className = '',
  onClick,
  children,
  style: extraStyle = {},
  ...rest
}) => {
  const isDisabled = disabled || loading;
  const base       = variantStyles[variant] ?? variantStyles.primary;
  const sz         = sizeMap[size]          ?? sizeMap.md;

  const baseStyle = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '0.5rem',
    borderRadius:   '0.75rem',
    letterSpacing:  '0.05em',
    textTransform:  'uppercase',
    textDecoration: 'none',
    cursor:         isDisabled ? 'not-allowed' : 'pointer',
    opacity:        isDisabled ? 0.55 : 1,
    transition:     'all 0.25s ease',
    outline:        'none',
    fontFamily:     "'DM Sans', sans-serif",
    ...base,
    ...sz,
    ...extraStyle,
  };

  const handleMouseEnter = (e) => {
    if (isDisabled) return;
    const h = hoverStyles[variant] ?? hoverStyles.primary;
    Object.assign(e.currentTarget.style, h);
  };

  const handleMouseLeave = (e) => {
    if (isDisabled) return;
    Object.assign(e.currentTarget.style, {
      background: base.background,
      boxShadow:  base.boxShadow,
      transform:  'translateY(0)',
    });
  };

  const handleMouseDown = (e) => {
    if (isDisabled) return;
    e.currentTarget.style.transform = 'translateY(0) scale(0.97)';
  };

  const handleMouseUp = (e) => {
    if (isDisabled) return;
    e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
  };

  const sharedProps = {
    style:          baseStyle,
    className,
    onMouseEnter:   handleMouseEnter,
    onMouseLeave:   handleMouseLeave,
    onMouseDown:    handleMouseDown,
    onMouseUp:      handleMouseUp,
    'aria-disabled': isDisabled,
    ...rest,
  };

  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={isDisabled ? undefined : href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...sharedProps}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      {...sharedProps}
    >
      {content}
    </button>
  );
};

export default Button;

