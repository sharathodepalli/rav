import React from "react";
import { Calendar } from "lucide-react";

const MILESTONES = [
  {
    year: "2024",
    title: "Organization Founded",
    description:
      "The beginning of our journey to connect innovators with developers, laying the foundation for a collaborative community.",
  },
  {
    year: "2024",
    title: "First Project Idea",
    description:
      "Received our first innovative project proposal, marking the start of our efforts to turn ideas into real-world solutions.",
  },
  {
    year: "2024",
    title: "Developer Network",
    description:
      "Formed our initial team of skilled developers, establishing a core group ready to collaborate and innovate.",
  },
  {
    year: "2025",
    title: "News Hub",
    description:
      "Developed a simple local news website to aggregate and display relevant, real-time news content in an easily digestible format. The project focused on clean design, mobile responsiveness, and ensuring quick access to local stories, laying the foundation for exploring content management systems and backend integrations for future applications.",
  },
  {
    year: "2025",
    title: "First Hackathon Participation",
    description:
      "Participated in our first hackathon as a team, collaborating with external developers to build a small-scale project in 48 hours. This experience helped strengthen our team dynamics and foster a creative problem-solving culture.",
  },
];

export function Journey() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
          <p className="mt-4 text-xl text-gray-500">
            The story of our growth and impact
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-16">
            {MILESTONES.map((milestone, index) => (
              <div key={milestone.title} className="relative">
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="h-5 w-5 text-primary-600" />
                        <span className="text-sm font-semibold text-primary-600">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
