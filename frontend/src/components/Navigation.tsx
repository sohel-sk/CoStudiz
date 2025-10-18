import React from 'react';
import { Clock, Menu } from 'lucide-react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleMobileMenu } from '../store/actions';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation: React.FC = () => {
    // const dispatch = useDispatch();
    // const mobileMenuOpen = useSelector((state: any) => state.mobileMenuOpen);

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-indigo-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    CoStudiz
                </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-x-10  ">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
                <Button className='rounded' variant="ghost">Sign In</Button>
                <Button className='rounded-b-4xl' variant="outline">Start Free</Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                    </SheetTrigger>
                    <SheetContent>
                    <div className="flex flex-col space-y-4 mt-8">
                        <a href="#features" className="text-lg text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#how-it-works" className="text-lg text-gray-600 hover:text-gray-900">How It Works</a>
                        <a href="#testimonials" className="text-lg text-gray-600 hover:text-gray-900">Testimonials</a>
                        <Button variant="outline" className="w-full">Sign In</Button>
                        <Button className="w-full">Start Free</Button>
                    </div>
                    </SheetContent>
                </Sheet>
                </div>
            </div>
            </div>
        </nav>
    );
};

export default Navigation;