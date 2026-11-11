import React from 'react';

/**
 * Reusable WhatsApp Click-to-Chat Button
 * Target Number: 919073407966
 * Official link format: https://wa.me/919073407966?text=ENCODED_MESSAGE
 */
export const WhatsAppButton = ({
  message = "Hello Agarwal Glass, I would like to enquire about your interior glass design services.",
  children,
  className = "",
  variant = "solid", // 'solid', 'outline', 'floating', 'pill'
  size = "md", // 'sm', 'md', 'lg'
  iconOnly = false,
  ariaLabel = "Chat with Agarwal Glass on WhatsApp"
}) => {
  const phoneNumber = "919073407966";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // SVG WhatsApp Icon
  const WhatsAppIcon = ({ iconSize = 20 }) => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.631-.929-2.233-.244-.587-.492-.507-.677-.517l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.125-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.98.58 3.83 1.58 5.39L2 22l4.78-1.55c1.5 1 3.28 1.55 5.26 1.55 5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18.2c-1.72 0-3.32-.51-4.66-1.39l-.33-.22-2.84.92.94-2.77-.22-.35C3.96 15.01 3.44 13.56 3.44 12c0-4.74 3.86-8.6 8.6-8.6s8.6 3.86 8.6 8.6-3.86 8.6-8.6 8.6z"/>
    </svg>
  );

  // Floating Button Style: Compact, fixed strictly to bottom-right corner
  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title="Chat on WhatsApp with Agarwal Glass"
        className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 ${className}`}
      >
        <WhatsAppIcon iconSize={26} />
      </a>
    );
  }

  // Pill / Solid / Outline Variants
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-3 py-1 text-xs gap-1.5",
    md: "px-4 py-2 text-xs sm:text-sm gap-2",
    lg: "px-6 py-2.5 text-sm sm:text-base gap-2.5"
  }[size];

  const variantClasses = {
    solid: "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#25D366]",
    outline: "border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white focus:ring-[#25D366]",
    pill: "bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white"
  }[variant] || "";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      <WhatsAppIcon iconSize={size === "sm" ? 15 : size === "lg" ? 20 : 17} />
      {!iconOnly && <span>{children || "WhatsApp Enquiry"}</span>}
    </a>
  );
};
