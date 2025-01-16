import React from "react";

export function Map() {
  return (
    <div className="h-64 w-full rounded-lg overflow-hidden shadow-sm">
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.4770099366793!2d-84.51660548428584!3d39.10169724246897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3fd21611e15%3A0x7e4cc568f3b8c0c0!2s302%20W%203rd%20St%2C%20Cincinnati%2C%20OH%2045202!5e0!3m2!1sen!2sus!4v1629308474138!5m2!1sen!2sus"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
