import React from "react";
import { Calendar, Clock } from "lucide-react";

const BLOG_POSTS = [
  {
    title: "Shades Presents: 21-Day FAANG DSA Challenge",
    excerpt:
      "We’re thrilled to announce our **21-Day FAANG DSA Challenge**, starting **May 2nd**! Over the next 21 days, we’ll dive into 21 essential coding problems, covering topics like arrays, strings, bit manipulation, and more, commonly asked by top tech companies like Facebook, Amazon, Apple, Netflix, and Google. Whether you’re preparing for interviews or looking to improve your coding skills, this challenge is for you! Join us for 21 days of DSA and let's level up your interview prep!",
    date: new Date().toLocaleDateString(),
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1685558593626-686907d7ee4b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay tuned for upcoming articles and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.title}
              className="bg-gray-50 rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
