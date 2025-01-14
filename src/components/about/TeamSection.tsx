import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const TEAM = [
  {
    name: "Sharath Chandra Odepalli",
    //role: 'CEO & Founder',
    description: "Passionate about turning innovative ideas into reality.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    linkedin: "https://www.linkedin.com/in/sharath-chandra-odepalli-7925a5175/",
  },
  {
    name: "John Smith",
    role: "CTO",
    description: "Technical visionary with expertise in scalable solutions.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Emily Chen",
    role: "Head of Innovation",
    description: "Bridging the gap between ideas and implementation.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export function TeamSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-xl text-gray-500">
            Dedicated professionals committed to your success
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  className="object-cover w-full h-full"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>

                <div className="mt-4 flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-primary-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
