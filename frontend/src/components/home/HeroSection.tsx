import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
    return (
        <section className="  bg-white h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto text-center">
            <div className="text-4x2 md:text-7xl  text-gray-900 mb-6">
                Study Smarter,
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Not Harder
                </span>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join thousands of students using CoStudiz to build consistent study habits, track progress, 
                and achieve academic success through focused, productive sessions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button size="lg" className="text-lg">
                Start Studying Free
                <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                Sign In
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600 mb-2">10K+</p>
                <p className="text-gray-600">Active Students</p>
                </div>
                <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">1.2M+</p>
                <p className="text-gray-600">Study Hours</p>
                </div>
                <div className="text-center">
                <p className="text-4xl font-bold text-pink-600 mb-2">45%</p>
                <p className="text-gray-600">Productivity Increase</p>
                </div>
                <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">89%</p>
                <p className="text-gray-600">Success Rate</p>
                </div>
            </div>
            </div>
        </section>
  );
};

export default HeroSection;