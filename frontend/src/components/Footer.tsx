import React from 'react';
import { Clock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-6 sm:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                
                {/* Brand Section */}
                <div>
                    <div className="flex items-center space-x-3 mb-5">
                    <Clock className="w-9 h-9 text-indigo-400" />
                    <span className="text-2xl font-bold text-white tracking-wide">CoStudiz</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Your virtual study environment for focused learning, collaboration, and productivity tracking.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
                    <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Pomodoro Timer</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Study Rooms</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Analytics</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Dashboard</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                    <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Status</a></li>
                    </ul>
                </div>
                </div>

                {/* Divider & Bottom Text */}
                <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                    © 2024 <span className="text-white font-semibold">CoStudiz</span>. All rights reserved. <br className="sm:hidden" />
                    Built with <span className="text-red-500">❤️</span> for students everywhere.
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;