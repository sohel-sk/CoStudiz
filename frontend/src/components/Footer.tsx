import React from 'react';
import { Clock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
                <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-bold text-white">CoStudiz</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                Your virtual study environment for focused learning, collaboration, and productivity tracking.
                </p>
            </div>

            {/* Product */}
            <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Pomodoro Timer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Study Rooms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                </ul>
            </div>

            {/* Company */}
            <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            {/* Support */}
            <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
            </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 CoStudiz. All rights reserved. Built with ❤️ for students everywhere.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;