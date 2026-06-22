function Button({
  className = "",
  children,
  type = "button",
  ...props
}) {
  const base =
    "h-button px-6 inline-flex items-center justify-center rounded-full font-sans font-semibold text-button cursor-pointer transition-colors";

  return (
    <button className={`${base} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
