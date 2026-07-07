export interface PathwayStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  status: 'completed' | 'active' | 'upcoming';
}

export interface LearningArea {
  title: string;
  description: string;
  icon: string;
}
