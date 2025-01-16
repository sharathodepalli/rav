import React from "react";
import { Rocket, Puzzle, Users, Clock } from "lucide-react";

const REASONS = [
  {
    title: "Innovation Focus",
    description:
      "We stay at the forefront of technology trends to deliver cutting-edge solutions.",
    icon: Rocket,
  },
  {
    title: "Perfect Match",
    description:
      "Our platform ensures the right developers for your specific project needs.",
    icon: Puzzle,
  },
  {
    title: "Collaborative Approach",
    description:
      "We foster strong partnerships between innovators and developers.",
    icon: Users,
  },
  {
    title: "Efficient Delivery",
    description: "Streamlined processes ensure timely project completion.",
    icon: Clock,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-500">
            With a commitment to innovation and collaboration, we provide a
            platform where visionaries and developers come together to create
            impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
