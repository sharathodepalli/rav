import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const OFFICE_HOURS = [
  { days: "Monday - Friday", hours: "10:00 AM - 2:00 PM" },
  { days: "Saturday - Sunday", hours: "Closed" },
];

const DEPARTMENTS = [{ name: "Support", phone: "+1 (513) 859-6812" }];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="h-6 w-6 text-primary-600 mt-1" />
        <div>
          <h3 className="font-medium text-gray-900">Office Location</h3>
          <p className="text-gray-600"></p>
          <p className="text-gray-600">Cincinnati, OH </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Contact Numbers</h3>
            {DEPARTMENTS.map((dept) => (
              <div key={dept.name} className="text-gray-600">
                <span className="font-medium">{dept.name}:</span> {dept.phone}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="h-6 w-6 text-primary-600 mt-1" />
        <div>
          <h3 className="font-medium text-gray-900">Email</h3>
          <p className="text-gray-600">contact@core.dev</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Clock className="h-6 w-6 text-primary-600 mt-1" />
        <div>
          <h3 className="font-medium text-gray-900">Office Hours</h3>
          {OFFICE_HOURS.map((schedule) => (
            <div key={schedule.days} className="text-gray-600">
              <span className="font-medium">{schedule.days}:</span>{" "}
              {schedule.hours}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
