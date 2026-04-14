interface IconProps {
  className?: string;
  size?: number;
}

// Building Logo Icon
export function BuildingIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="4" y="8" width="10" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="18" y="4" width="10" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="7" y="12" width="4" height="3" fill="currentColor" opacity="0.6" />
      <rect x="7" y="18" width="4" height="3" fill="currentColor" opacity="0.6" />
      <rect x="21" y="8" width="4" height="3" fill="currentColor" opacity="0.6" />
      <rect x="21" y="14" width="4" height="3" fill="currentColor" opacity="0.6" />
      <rect x="21" y="20" width="4" height="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// Arrow Down Icon for Scroll Indicator
export function ArrowDownIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 3v10m0 0l-4-4m4 4l4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hamburger Menu Icon
export function MenuIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Close Icon
export function CloseIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 6l12 12M6 18L18 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Arrow Up Icon for Back to Top
export function ArrowUpIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 16V4m0 0l-5 5m5-5l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Service Icons
export function DevelopmentIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="14" width="22" height="18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14L19 6L30 14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="22" width="8" height="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RenovationIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 10v9l6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8l4 4M30 8l-4 4M8 30l4-4M30 30l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TransactionIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8 26l11-14 11 14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 26v6h14v-6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LeasingIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="6" y="10" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 16h26" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="22" r="2" fill="currentColor" />
      <path d="M18 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LegalIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="19" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 32V22a8 8 0 0116 0v10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 26h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CommunityIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="19" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 28c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 30c0-2.2 1.8-4 4-4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 30c0-2.2-1.8-4-4-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Network Icons
export function LawyerIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="6" width="22" height="26" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 12h12M13 18h12M13 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TaxIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="6" y="8" width="26" height="22" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 14h4v4h-4zM22 14h4v4h-4zM12 22h4v4h-4zM22 22h4v4h-4z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ConstructionIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 32h26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 32V18l9-10 9 10v14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="22" width="8" height="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FinanceIcon({ className = "", size = 38 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 13v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 17h6a2 2 0 010 4h-4a2 2 0 000 4h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Email Icon
export function EmailIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="4" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Phone Icon
export function PhoneIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 3h4l2 4-2.5 1.5a11 11 0 005 5L14 11l4 2v4a1 1 0 01-1 1A15 15 0 013 4a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
