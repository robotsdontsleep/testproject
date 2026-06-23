function Section({ className = "", children }) {
  return (
    <section className={`w-full px-gutter py-section md:px-gutter-md md:py-20 lg:px-gutter-lg lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
