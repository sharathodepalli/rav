export function Map() {
  return (
    <div className="h-64 w-full rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-gray-600 font-medium">850 Euclid Ave</p>
        <p className="text-gray-500">Cleveland, Ohio 44114 US</p>
        <p className="text-sm text-gray-400 mt-2">Map view coming soon</p>
      </div>
      {/* Uncomment and add your Google Maps embed URL when ready */}
      {/* <iframe
        title="Office Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="YOUR_GOOGLE_MAPS_EMBED_URL"
        loading="lazy"
        allowFullScreen
      /> */}
    </div>
  );
}
