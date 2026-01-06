export default function Stats() {
  const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Luxury Villas Designed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className=" bg-white my-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 shadow-lg rounded-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-16 relative">
              {/* Vertical divider - show only between items */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-16 bg-gray-300 -translate-y-1/2"></div>
              )}

              {/* Horizontal divider for mobile - only between first two rows */}
              {(index === 0 || index === 1) && (
                <div className="block md:hidden absolute -bottom-4 left-1/2 w-3/4 h-px bg-gray-300 -translate-x-1/2"></div>
              )}

              <div className="text-2xl md:text-6xl font-bold text-black mb-2 wrap-break-word">
                {stat.value}
              </div>

              <div className="text-gray-600 text-sm md:text-base whitespace-normal wrap-break-word">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
