// // components/home/Home.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Clock, Users, TrendingUp, Award, Target, BarChart3, ArrowRight, Check, Star, Menu, X } from 'lucide-react';
// import { useAuth } from '@/hooks/useAuth';

import Navigation from '../Navigation';
import Footer from '../Footer';
import HeroSection from './HeroSection';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        {/*<FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection /> */}
        <Footer />
        </div>
    );
};

// const Home: React.FC = () => {

// const Home: React.FC = () => {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const features = [
//         {
//         icon: '⏱️',
//         title: 'Pomodoro Timer',
//         description: 'Stay focused with 25-minute work sessions and 5-minute breaks. Track your productivity and build consistent study habits.'
//         },
//         {
//         icon: '👥',
//         title: 'Study Rooms',
//         description: 'Join virtual study rooms to collaborate with others. Stay motivated by studying together in real-time.'
//         },
//         {
//         icon: '📊',
//         title: 'Progress Tracking',
//         description: 'Monitor your study streaks, total study time, and focus rate. Set goals and watch your progress grow.'
//         },
//         {
//         icon: '🔥',
//         title: 'Streak System',
//         description: 'Build and maintain study streaks to develop consistent learning habits. Compete with yourself to beat your personal best.'
//         },
//         {
//         icon: '🎯',
//         title: 'Goal Setting',
//         description: 'Set daily and weekly study goals. Get visual feedback on your progress and stay motivated to achieve your targets.'
//         },
//         {
//         icon: '📈',
//         title: 'Analytics',
//         description: 'Deep insights into your study patterns. Understand when you\'re most productive and optimize your schedule.'
//         }
//     ];

//     const testimonials = [
//         {
//         emoji: '👩‍💻',
//         quote: 'CoStudiz helped me maintain a 45-day study streak and ace my finals. The Pomodoro timer is a game-changer!',
//         name: 'Sarah Chen',
//         role: 'Computer Science Student'
//         },
//         {
//         emoji: '👨‍⚕️',
//         quote: 'The study rooms keep me accountable. Studying with peers makes long sessions much more enjoyable and productive.',
//         name: 'Marcus Rodriguez',
//         role: 'Medical Student'
//         },
//         {
//         emoji: '👩‍🎓',
//         quote: 'Tracking my progress visually has been incredibly motivating. I\'ve doubled my study time since using CoStudiz.',
//         name: 'Emily Thompson',
//         role: 'Language Learner'
//         }
//     ];

//     const steps = [
//         {
//         number: '1',
//         title: 'Create Your Account',
//         description: 'Sign up in seconds and set up your study profile. It\'s completely free to get started.'
//         },
//         {
//         number: '2',
//         title: 'Choose Your Study Mode',
//         description: 'Start a focused Pomodoro session or join a study room to collaborate with others.'
//         },
//         {
//         number: '3',
//         title: 'Track Your Progress',
//         description: 'Watch your streaks grow and analyze your study patterns to optimize your learning.'
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-white">
//         {/* Navigation */}
//         <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//                 <div className="flex items-center space-x-2">
//                 <Clock className="w-8 h-8 text-indigo-600" />
//                 <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                     CoStudiz
//                 </span>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <div className="hidden md:flex items-center space-x-8">
//                 <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
//                 <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
//                 <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
//                 <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
//                 <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                     Start Free
//                 </button>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button 
//                 className="md:hidden p-2"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//             </div>
//             </div>

//             {/* Mobile Menu */}
//             {mobileMenuOpen && (
//             <div className="md:hidden border-t border-gray-200 bg-white">
//                 <div className="px-4 py-4 space-y-3">
//                 <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
//                 <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How It Works</a>
//                 <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
//                 <button className="block w-full text-left text-gray-600 hover:text-gray-900">Sign In</button>
//                 <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//                     Start Free
//                 </button>
//                 </div>
//             </div>
//             )}
//         </nav>

//         {/* Hero Section */}
//         <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto text-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//                 Study Smarter,
//                 <br />
//                 <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Not Harder
//                 </span>
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//                 Join thousands of students using CoStudiz to build consistent study habits, track progress, 
//                 and achieve academic success through focused, productive sessions.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//                 <button className="flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg">
//                 <span>Start Studying Free</span>
//                 <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-gray-400 transition-colors">
//                 Sign In
//                 </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//                 <div className="text-center">
//                 <p className="text-4xl font-bold text-indigo-600 mb-2">10K+</p>
//                 <p className="text-gray-600">Active Students</p>
//                 </div>
//                 <div className="text-center">
//                 <p className="text-4xl font-bold text-purple-600 mb-2">1.2M+</p>
//                 <p className="text-gray-600">Study Hours</p>
//                 </div>
//                 <div className="text-center">
//                 <p className="text-4xl font-bold text-pink-600 mb-2">45%</p>
//                 <p className="text-gray-600">Productivity Increase</p>
//                 </div>
//                 <div className="text-center">
//                 <p className="text-4xl font-bold text-green-600 mb-2">89%</p>
//                 <p className="text-gray-600">Success Rate</p>
//                 </div>
//             </div>
//             </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Everything You Need to Succeed
//                 </h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Powerful tools designed to help you build consistent study habits and achieve your academic goals.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {features.map((feature, index) => (
//                 <div 
//                     key={index}
//                     className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1"
//                 >
//                     <div className="text-5xl mb-4">{feature.icon}</div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 How CoStudiz Works
//                 </h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Get started in three simple steps and transform your study routine today.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                 {steps.map((step, index) => (
//                 <div key={index} className="text-center">
//                     <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
//                     {step.number}
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
//                     <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Loved by Students Worldwide
//                 </h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Join thousands of students who have transformed their study habits with CoStudiz.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {testimonials.map((testimonial, index) => (
//                 <div 
//                     key={index}
//                     className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
//                 >
//                     <div className="flex items-center mb-4">
//                     {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                     ))}
//                     </div>
//                     <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
//                     <div className="flex items-center space-x-3">
//                     <div className="text-4xl">{testimonial.emoji}</div>
//                     <div>
//                         <p className="font-bold text-gray-900">{testimonial.name}</p>
//                         <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                     </div>
//                     </div>
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto text-center">
//             <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Ready to Transform Your Study Habits?
//                 </h2>
//                 <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
//                 Join CoStudiz today and start your journey toward academic excellence. 
//                 It's free, and you'll see results from day one.
//                 </p>
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
//                 <button className="flex items-center space-x-2 px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
//                     <span>Get Started Free</span>
//                     <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-colors">
//                     Sign In
//                 </button>
//                 </div>
//                 <p className="text-indigo-100 text-sm">
//                 No credit card required • Free forever plan • Setup in 2 minutes
//                 </p>
//             </div>
//             </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//                 {/* Brand */}
//                 <div>
//                 <div className="flex items-center space-x-2 mb-4">
//                     <Clock className="w-8 h-8 text-indigo-400" />
//                     <span className="text-2xl font-bold text-white">CoStudiz</span>
//                 </div>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                     Your virtual study environment for focused learning, collaboration, and productivity tracking.
//                 </p>
//                 </div>

//                 {/* Product */}
//                 <div>
//                 <h3 className="text-white font-semibold mb-4">Product</h3>
//                 <ul className="space-y-2 text-sm">
//                     <li><a href="#" className="hover:text-white transition-colors">Pomodoro Timer</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Study Rooms</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
//                 </ul>
//                 </div>

//                 {/* Company */}
//                 <div>
//                 <h3 className="text-white font-semibold mb-4">Company</h3>
//                 <ul className="space-y-2 text-sm">
//                     <li><a href="#" className="hover:text-white transition-colors">About</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//                 </ul>
//                 </div>

//                 {/* Support */}
//                 <div>
//                 <h3 className="text-white font-semibold mb-4">Support</h3>
//                 <ul className="space-y-2 text-sm">
//                     <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
//                     <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
//                 </ul>
//                 </div>
//             </div>

//             <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
//                 <p>© 2024 CoStudiz. All rights reserved. Built with ❤️ for students everywhere.</p>
//             </div>
//             </div>
//         </footer>
//         </div>
//     );
// };

// const store = createStore(rootReducer);

// const Home: React.FC = () => {
//   const dispatch = useDispatch();
//   const mobileMenuOpen = useSelector((state: AppState) => state.mobileMenuOpen);

//   const features = [
//     {
//       icon: '⏱️',
//       title: 'Pomodoro Timer',
//       description: 'Stay focused with 25-minute work sessions and 5-minute breaks. Track your productivity and build consistent study habits.'
//     },
//     {
//       icon: '👥',
//       title: 'Study Rooms',
//       description: 'Join virtual study rooms to collaborate with others. Stay motivated by studying together in real-time.'
//     },
//     {
//       icon: '📊',
//       title: 'Progress Tracking',
//       description: 'Monitor your study streaks, total study time, and focus rate. Set goals and watch your progress grow.'
//     },
//     {
//       icon: '🔥',
//       title: 'Streak System',
//       description: 'Build and maintain study streaks to develop consistent learning habits. Compete with yourself to beat your personal best.'
//     },
//     {
//       icon: '🎯',
//       title: 'Goal Setting',
//       description: 'Set daily and weekly study goals. Get visual feedback on your progress and stay motivated to achieve your targets.'
//     },
//     {
//       icon: '📈',
//       title: 'Analytics',
//       description: 'Deep insights into your study patterns. Understand when you\'re most productive and optimize your schedule.'
//     }
//   ];

//   const testimonials = [
//     {
//       emoji: '👩‍💻',
//       quote: 'CoStudiz helped me maintain a 45-day study streak and ace my finals. The Pomodoro timer is a game-changer!',
//       name: 'Sarah Chen',
//       role: 'Computer Science Student'
//     },
//     {
//       emoji: '👨‍⚕️',
//       quote: 'The study rooms keep me accountable. Studying with peers makes long sessions much more enjoyable and productive.',
//       name: 'Marcus Rodriguez',
//       role: 'Medical Student'
//     },
//     {
//       emoji: '👩‍🎓',
//       quote: 'Tracking my progress visually has been incredibly motivating. I\'ve doubled my study time since using CoStudiz.',
//       name: 'Emily Thompson',
//       role: 'Language Learner'
//     }
//   ];

//   const steps = [
//     {
//       number: '1',
//       title: 'Create Your Account',
//       description: 'Sign up in seconds and set up your study profile. It\'s completely free to get started.'
//     },
//     {
//       number: '2',
//       title: 'Choose Your Study Mode',
//       description: 'Start a focused Pomodoro session or join a study room to collaborate with others.'
//     },
//     {
//       number: '3',
//       title: 'Track Your Progress',
//       description: 'Watch your streaks grow and analyze your study patterns to optimize your learning.'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-2">
//               <Clock className="w-8 h-8 text-indigo-600" />
//               <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 CoStudiz
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
//               <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
//               <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
//               <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
//               <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                 Start Free
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2"
//               onClick={() => dispatch(toggleMobileMenu())}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 bg-white">
//             <div className="px-4 py-4 space-y-3">
//               <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
//               <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How It Works</a>
//               <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
//               <button className="block w-full text-left text-gray-600 hover:text-gray-900">Sign In</button>
//               <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//                 Start Free
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//             Study Smarter,
//             <br />
//             <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Not Harder
//             </span>
//           </h1>
          
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Join thousands of students using CoStudiz to build consistent study habits, track progress, 
//             and achieve academic success through focused, productive sessions.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//             <button className="flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg">
//               <span>Start Studying Free</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//             <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-gray-400 transition-colors">
//               Sign In
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <p className="text-4xl font-bold text-indigo-600 mb-2">10K+</p>
//               <p className="text-gray-600">Active Students</p>
//             </div>
//             <div className="text-center">
//               <p className="text-4xl font-bold text-purple-600 mb-2">1.2M+</p>
//               <p className="text-gray-600">Study Hours</p>
//             </div>
//             <div className="text-center">
//               <p className="text-4xl font-bold text-pink-600 mb-2">45%</p>
//               <p className="text-gray-600">Productivity Increase</p>
//             </div>
//             <div className="text-center">
//               <p className="text-4xl font-bold text-green-600 mb-2">89%</p>
//               <p className="text-gray-600">Success Rate</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Everything You Need to Succeed
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Powerful tools designed to help you build consistent study habits and achieve your academic goals.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1"
//               >
//                 <div className="text-5xl mb-4">{feature.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               How CoStudiz Works
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Get started in three simple steps and transform your study routine today.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
//                   {step.number}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Loved by Students Worldwide
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Join thousands of students who have transformed their study habits with CoStudiz.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
//               >
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
//                 <div className="flex items-center space-x-3">
//                   <div className="text-4xl">{testimonial.emoji}</div>
//                   <div>
//                     <p className="font-bold text-gray-900">{testimonial.name}</p>
//                     <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Ready to Transform Your Study Habits?
//             </h2>
//             <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
//               Join CoStudiz today and start your journey toward academic excellence. 
//               It's free, and you'll see results from day one.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
//               <button className="flex items-center space-x-2 px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
//                 <span>Get Started Free</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-colors">
//                 Sign In
//               </button>
//             </div>
//             <p className="text-indigo-100 text-sm">
//               No credit card required • Free forever plan • Setup in 2 minutes
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             {/* Brand */}
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Clock className="w-8 h-8 text-indigo-400" />
//                 <span className="text-2xl font-bold text-white">CoStudiz</span>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Your virtual study environment for focused learning, collaboration, and productivity tracking.
//               </p>
//             </div>

//             {/* Product */}
//             <div>
//               <h3 className="text-white font-semibold mb-4">Product</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white transition-colors">Pomodoro Timer</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Study Rooms</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
//               </ul>
//             </div>

//             {/* Company */}
//             <div>
//               <h3 className="text-white font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white transition-colors">About</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             {/* Support */}
//             <div>
//               <h3 className="text-white font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
//             <p>© 2024 CoStudiz. All rights reserved. Built with ❤️ for students everywhere.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

export default Home;
//     const { isAuthenticated } = useAuth();

//     const features = [
//         {
//         icon: '⏱️',
//         title: 'Pomodoro Timer',
//         description: 'Stay focused with 25-minute work sessions and 5-minute breaks. Track your productivity and build consistent study habits.',
//         },
//         {
//         icon: '👥',
//         title: 'Study Rooms',
//         description: 'Join virtual study rooms to collaborate with others. Stay motivated by studying together in real-time.',
//         },
//         {
//         icon: '📊',
//         title: 'Progress Tracking',
//         description: 'Monitor your study streaks, total study time, and focus rate. Set goals and watch your progress grow.',
//         },
//         {
//         icon: '🔥',
//         title: 'Streak System',
//         description: 'Build and maintain study streaks to develop consistent learning habits. Compete with yourself to beat your personal best.',
//         },
//         {
//         icon: '🎯',
//         title: 'Goal Setting',
//         description: 'Set daily and weekly study goals. Get visual feedback on your progress and stay motivated to achieve your targets.',
//         },
//         {
//         icon: '📈',
//         title: 'Analytics',
//         description: 'Deep insights into your study patterns. Understand when you\'re most productive and optimize your schedule.',
//         },
//     ];

//     const testimonials = [
//         {
//         name: 'Sarah Chen',
//         role: 'Computer Science Student',
//         content: 'StudyFlow helped me maintain a 45-day study streak and ace my finals. The Pomodoro timer is a game-changer!',
//         avatar: '👩‍💻',
//         },
//         {
//         name: 'Marcus Rodriguez',
//         role: 'Medical Student',
//         content: 'The study rooms keep me accountable. Studying with peers makes long sessions much more enjoyable and productive.',
//         avatar: '👨‍⚕️',
//         },
//         {
//         name: 'Emily Thompson',
//         role: 'Language Learner',
//         content: 'Tracking my progress visually has been incredibly motivating. I\'ve doubled my study time since using StudyFlow.',
//         avatar: '👩‍🎓',
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//         {/* Navigation */}
//         <nav className="border-b bg-background/80 backdrop-blur-sm">
//             <div className="container mx-auto px-6">
//             <div className="flex h-16 items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                 <span className="text-2xl font-bold text-blue-600">StudyFlow</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4">
//                 {isAuthenticated ? (
//                     <Button asChild>
//                     <Link to="/dashboard">Go to Dashboard</Link>
//                     </Button>
//                 ) : (
//                     <div className="flex space-x-3">
//                     <Button variant="outline" asChild>
//                         <Link to="/login">Sign In</Link>
//                     </Button>
//                     <Button asChild>
//                         <Link to="/signup">Get Started Free</Link>
//                     </Button>
//                     </div>
//                 )}
//                 </div>
//             </div>
//             </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="container mx-auto px-6 py-20">
//             <div className="text-center space-y-8 max-w-4xl mx-auto">
//             <div className="space-y-4">
//                 <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Study Smarter,<br />Not Harder
//                 </h1>
//                 <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Join thousands of students using StudyFlow to build consistent study habits, 
//                 track progress, and achieve academic success through focused, productive sessions.
//                 </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 {!isAuthenticated && (
//                 <>
//                     <Button size="lg" asChild className="text-lg px-8 py-3">
//                     <Link to="/signup">
//                         Start Studying Free
//                     </Link>
//                     </Button>
//                     <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3">
//                     <Link to="/login">
//                         Sign In
//                     </Link>
//                     </Button>
//                 </>
//                 )}
//                 {isAuthenticated && (
//                 <Button size="lg" asChild className="text-lg px-8 py-3">
//                     <Link to="/dashboard">
//                     Continue Studying
//                     </Link>
//                 </Button>
//                 )}
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-2xl mx-auto">
//                 <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">10K+</div>
//                 <div className="text-sm text-muted-foreground">Active Students</div>
//                 </div>
//                 <div className="text-center">
//                 <div className="text-2xl font-bold text-green-600">1.2M+</div>
//                 <div className="text-sm text-muted-foreground">Study Hours</div>
//                 </div>
//                 <div className="text-center">
//                 <div className="text-2xl font-bold text-purple-600">45%</div>
//                 <div className="text-sm text-muted-foreground">Productivity Increase</div>
//                 </div>
//                 <div className="text-center">
//                 <div className="text-2xl font-bold text-orange-600">89%</div>
//                 <div className="text-sm text-muted-foreground">Success Rate</div>
//                 </div>
//             </div>
//             </div>
//         </section>

//         {/* Features Section */}
//         <section className="container mx-auto px-6 py-20 bg-white">
//             <div className="text-center space-y-4 mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Powerful tools designed to help you build consistent study habits and achieve your academic goals.
//             </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//                 <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
//                 <CardHeader>
//                     <div className="text-4xl mb-4">{feature.icon}</div>
//                     <CardTitle className="text-xl">{feature.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <CardDescription className="text-base">
//                     {feature.description}
//                     </CardDescription>
//                 </CardContent>
//                 </Card>
//             ))}
//             </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
//             <div className="text-center space-y-4 mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold">How StudyFlow Works</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Get started in three simple steps and transform your study routine today.
//             </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="text-center space-y-4">
//                 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
//                 1
//                 </div>
//                 <h3 className="text-xl font-semibold">Create Your Account</h3>
//                 <p className="text-muted-foreground">
//                 Sign up in seconds and set up your study profile. It's completely free to get started.
//                 </p>
//             </div>

//             <div className="text-center space-y-4">
//                 <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
//                 2
//                 </div>
//                 <h3 className="text-xl font-semibold">Choose Your Study Mode</h3>
//                 <p className="text-muted-foreground">
//                 Start a focused Pomodoro session or join a study room to collaborate with others.
//                 </p>
//             </div>

//             <div className="text-center space-y-4">
//                 <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
//                 3
//                 </div>
//                 <h3 className="text-xl font-semibold">Track Your Progress</h3>
//                 <p className="text-muted-foreground">
//                 Watch your streaks grow and analyze your study patterns to optimize your learning.
//                 </p>
//             </div>
//             </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="container mx-auto px-6 py-20">
//             <div className="text-center space-y-4 mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold">Loved by Students Worldwide</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Join thousands of students who have transformed their study habits with StudyFlow.
//             </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//                 <Card key={index} className="text-center">
//                 <CardContent className="pt-6">
//                     <div className="text-4xl mb-4">{testimonial.avatar}</div>
//                     <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
//                     <div>
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-sm text-muted-foreground">{testimonial.role}</div>
//                     </div>
//                 </CardContent>
//                 </Card>
//             ))}
//             </div>
//         </section>

//         {/* CTA Section */}
//         <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white mb-20">
//             <div className="text-center space-y-8 max-w-3xl mx-auto">
//             <div className="space-y-4">
//                 <h2 className="text-3xl md:text-4xl font-bold">
//                 Ready to Transform Your Study Habits?
//                 </h2>
//                 <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//                 Join StudyFlow today and start your journey toward academic excellence. 
//                 It's free, and you'll see results from day one.
//                 </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 {!isAuthenticated && (
//                 <>
//                     <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
//                     <Link to="/signup">
//                         Get Started Free
//                     </Link>
//                     </Button>
//                     <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
//                     <Link to="/login">
//                         Sign In
//                     </Link>
//                     </Button>
//                 </>
//                 )}
//                 {isAuthenticated && (
//                 <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
//                     <Link to="/dashboard">
//                     Go to Dashboard
//                     </Link>
//                 </Button>
//                 )}
//             </div>

//             <div className="text-blue-100 text-sm">
//                 No credit card required • Free forever plan • Setup in 2 minutes
//             </div>
//             </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t bg-background">
//             <div className="container mx-auto px-6 py-12">
//             <div className="grid md:grid-cols-4 gap-8">
//                 <div className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                     <span className="text-2xl font-bold text-blue-600">StudyFlow</span>
//                 </div>
//                 <p className="text-muted-foreground">
//                     Your virtual study environment for focused learning, collaboration, and productivity tracking.
//                 </p>
//                 </div>

//                 <div>
//                 <h4 className="font-semibold mb-4">Product</h4>
//                 <ul className="space-y-2 text-muted-foreground">
//                     <li><Link to="/timer" className="hover:text-blue-600">Pomodoro Timer</Link></li>
//                     <li><Link to="/rooms" className="hover:text-blue-600">Study Rooms</Link></li>
//                     <li><Link to="/analytics" className="hover:text-blue-600">Analytics</Link></li>
//                     <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
//                 </ul>
//                 </div>

//                 <div>
//                 <h4 className="font-semibold mb-4">Company</h4>
//                 <ul className="space-y-2 text-muted-foreground">
//                     <li><a href="#" className="hover:text-blue-600">About</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Blog</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Careers</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Contact</a></li>
//                 </ul>
//                 </div>

//                 <div>
//                 <h4 className="font-semibold mb-4">Support</h4>
//                 <ul className="space-y-2 text-muted-foreground">
//                     <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Community</a></li>
//                     <li><a href="#" className="hover:text-blue-600">Status</a></li>
//                 </ul>
//                 </div>
//             </div>

//             <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
//                 <p>&copy; 2024 StudyFlow. All rights reserved. Built with ❤️ for students everywhere.</p>
//             </div>
//             </div>
//         </footer>
//         </div>
//     );
// };

// export default Home;