export interface User {
    id: string;
    email: string;
    name: string;
    streak: number;
    longestStreak: number;
    totalStudyTime: number;
}

export interface StudySession {
    id: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    type: 'work' | 'break';
}

export interface StudyRoom { 
    id : string;
    name : string;
    description: string;
    createdAt : string;
    updatedAt : string;
}

export interface TimerState {
    isRunning: boolean;
    timeLeft: number;
    mode: 'work' | 'break';
    sessionsCompleted: number;
}

export interface AppState {
  mobileMenuOpen: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  emoji: string;
  quote: string;
  name: string;
  role: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}