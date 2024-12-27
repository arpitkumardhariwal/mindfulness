import React, { useState } from 'react';
import { 
  Feather, 
  Book, 
  Globe, 
  Award, 
  Coffee, 
  Slack, 
  Users, 
  Pen, 
  HardDrive as TechnologyIcon, 
  Lightbulb as IdeaIcon, 
  Heart as WellnessIcon, 
  Calendar as TimeManagementIcon 
} from 'lucide-react';

// Blog Data Model
const blogPosts = [
    {
      id: 1,
      title: "Cultivating Workplace Harmony",
      author: "Emily Richards",
      date: "December 15, 2024",
      category: "Communication",
      readTime: "5 min read",
      excerpt: "Discover practical strategies to create a peaceful and collaborative work environment.",
      content: "In today's fast-paced work culture, maintaining peace is crucial for productivity and employee well-being. Workplace harmony fosters stronger relationships, better communication, and increased morale. In this post, we’ll explore actionable steps for fostering a more harmonious workplace. These include strategies like open dialogue, setting clear expectations, and creating an inclusive environment. Learn how leaders can model positive communication and conflict resolution to encourage a culture of mutual respect.",
    },
    {
      id: 2,
      title: "Conflict Resolution Techniques",
      author: "Michael Chen",
      date: "December 10, 2024", 
      category: "Management",
      readTime: "7 min read",
      excerpt: "Learn proven methods to resolve workplace conflicts constructively and maintain team harmony.",
      content: "Conflicts are inevitable in any workplace. The key is not to avoid them, but to address them effectively. In this article, we will discuss several conflict resolution techniques, such as active listening, finding common ground, and adopting a win-win approach. We will also cover the importance of timely interventions by managers, and how they can facilitate the resolution process by fostering a culture of transparency and respect.",
    },
    {
      id: 3,
      title: "Mindfulness at Work",
      author: "Sarah Thompson",
      date: "December 5, 2024",
      category: "Wellness",
      readTime: "6 min read", 
      excerpt: "Explore how mindfulness practices can reduce stress and promote peace in the workplace.",
      content: "Mindfulness is more than a trendy buzzword. It's a powerful tool for maintaining emotional balance and clarity. By incorporating mindfulness practices like deep breathing, meditation, and mindful listening into your daily routine, you can reduce stress and improve focus. This post delves into how mindfulness can help you stay present in the moment, better manage your emotions, and improve your communication skills at work.",
    },
    {
      id: 4,
      title: "The Importance of Empathy in Leadership",
      author: "Rachel Brooks",
      date: "November 30, 2024",
      category: "Leadership",
      readTime: "8 min read",
      excerpt: "Understand how leaders can cultivate empathy to drive engagement, collaboration, and trust.",
      content: "Empathy is one of the most essential traits of effective leadership. Leaders who practice empathy are better at building trust, motivating their teams, and creating a more inclusive workplace. This article covers how empathy fosters stronger connections between leaders and employees, leads to better decision-making, and encourages open communication.",
    },
    {
      id: 5,
      title: "Building a Collaborative Work Culture",
      author: "David Lee",
      date: "November 25, 2024",
      category: "Teamwork",
      readTime: "6 min read",
      excerpt: "Explore how fostering a culture of collaboration can lead to greater innovation and productivity.",
      content: "Collaboration is a cornerstone of innovation and efficiency in modern workplaces. This post outlines how to foster a collaborative work culture, focusing on communication, shared goals, and the use of collaborative tools. We will discuss the importance of cross-functional teams, how to break down silos, and encourage open knowledge sharing.",
    },
    {
      id: 6,
      title: "Remote Team Communication Best Practices",
      author: "Jessica Harris",
      date: "November 20, 2024",
      category: "Technology",
      readTime: "7 min read",
      excerpt: "Effective communication is key to managing remote teams. Learn strategies for staying connected and aligned.",
      content: "Managing remote teams presents unique communication challenges. In this article, we explore the best practices for maintaining clear and efficient communication with remote employees. Key strategies include regular video check-ins, establishing communication guidelines, and using collaboration tools to stay connected.",
    },
    {
      id: 7,
      title: "Embracing Diversity in the Workplace",
      author: "Maria Rodriguez",
      date: "November 15, 2024",
      category: "Diversity & Inclusion",
      readTime: "5 min read",
      excerpt: "Learn the benefits of a diverse and inclusive workplace, and how to create an environment that welcomes all.",
      content: "Diversity is not just a buzzword—it’s a vital part of any successful workplace. In this blog post, we dive into the importance of creating an inclusive workplace where diverse perspectives are valued. We discuss how diversity leads to improved creativity, better decision-making, and increased employee satisfaction.",
    },
    {
      id: 8,
      title: "Time Management Tips for Busy Professionals",
      author: "Jonathan Carter",
      date: "November 10, 2024",
      category: "Productivity",
      readTime: "6 min read",
      excerpt: "Discover actionable time management strategies to boost your productivity and reduce stress at work.",
      content: "Time management is a skill that can drastically improve your work-life balance. In this article, we’ll share proven strategies to help busy professionals manage their time more effectively. From prioritizing tasks using the Eisenhower Matrix to implementing time blocking techniques, these tools will allow you to take control of your day.",
    },
    {
      id: 9,
      title: "Understanding Emotional Intelligence in the Workplace",
      author: "Olivia Wright",
      date: "November 5, 2024",
      category: "Personal Development",
      readTime: "7 min read",
      excerpt: "Gain a deeper understanding of emotional intelligence and its impact on workplace relationships and performance.",
      content: "Emotional intelligence (EI) plays a key role in how we manage behavior, navigate social complexities, and make decisions. This post explores the importance of EI in the workplace, including how it affects communication, conflict resolution, and leadership.",
    },
    {
      id: 10,
      title: "The Power of Positive Feedback",
      author: "Brian Foster",
      date: "October 30, 2024",
      category: "Employee Engagement",
      readTime: "5 min read",
      excerpt: "Explore how positive feedback can boost morale, foster growth, and improve performance in the workplace.",
      content: "Positive feedback is one of the most powerful tools for employee engagement and motivation. In this article, we will explore the benefits of providing regular, constructive feedback to employees. Positive feedback not only boosts morale, but it also encourages desired behaviors and reinforces a culture of excellence.",
    }
  ];
// Category to Icon Mapping
const categoryIcons = {
  Communication: <Feather size={48} className="text-blue-500" />,
  Management: <Award size={48} className="text-green-500" />,
  Wellness: <WellnessIcon size={48} className="text-teal-500" />,
  Leadership: <Book size={48} className="text-orange-500" />,
  Teamwork: <Users size={48} className="text-purple-500" />,  // Replaced DiversityIcon with Users
  Technology: <TechnologyIcon size={48} className="text-red-500" />,
  Diversity: <Users size={48} className="text-yellow-500" />,  // Replaced DiversityIcon with Users
  Productivity: <TimeManagementIcon size={48} className="text-indigo-500" />,
  PersonalDevelopment: <Feather size={48} className="text-pink-500" />, // You can use any other icon here
  EmployeeEngagement: <Coffee size={48} className="text-brown-500" />
};

// Blog Card Component
const BlogCard = ({ blog }) => {
  const Icon = categoryIcons[blog.category] || <Feather size={48} className="text-gray-500" />; // Default icon if not found

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center items-center w-full h-48 bg-gray-200">
        {Icon}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2 text-gray-500">
          <Pen size={16} />
          <span className="text-sm">{blog.author}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">{blog.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {blog.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
            {blog.category}
          </span>
          <span className="text-gray-500 text-sm">
            {blog.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main Blog Page Component
const WorkplacePeaceBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogPosts.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">
            Mindfulness Blog
            </h1>
          </div>
          <input 
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>

      {/* Blog Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <Coffee className="mr-2" /> Workplace Peace
            </h4>
            <p className="text-sm text-blue-100">
              Empowering professionals to create harmonious and productive work environments.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Home</a></li>
              <li><a href="#" className="hover:text-blue-200">Blogs</a></li>
              <li><a href="#" className="hover:text-blue-200">About Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Categories</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Communication</a></li>
              <li><a href="#" className="hover:text-blue-200">Wellness</a></li>
              <li><a href="#" className="hover:text-blue-200">Management</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Connect</h5>
            <div className="flex space-x-4">
              <Slack className="hover:text-blue-200 cursor-pointer" />
              <Users className="hover:text-blue-200 cursor-pointer" />
              <Globe className="hover:text-blue-200 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-blue-700">
          <p className="text-sm text-blue-100">
            © 2024 Mindfulness Blog. All Rights Reserved by Arpit Kumar.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkplacePeaceBlog;
