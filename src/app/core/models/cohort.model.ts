export interface Cohort {
  id: string;
  name: string;
  focus_area: string;
  start_date: string;
  end_date: string;
  trainee_count: number;
  status: 'upcoming' | 'active' | 'completed';
  created_at: string;
  fellows?: Fellow[];
}

export interface Fellow {
  id: string;
  cohort: string;
  full_name: string;
  county: string;
  education_background: string;
  technical_interest: string;
  specialization: string;
  bio: string;
  quote: string;
  placement_status: string;
  portfolio_url: string;
  photo: string;
  is_featured: boolean;
  certifications?: Certification[];
}

export interface Certification {
  id: string;
  fellow: string;
  name: string;
  issuing_body: string;
  awarded_date: string;
  badge: string;
}
