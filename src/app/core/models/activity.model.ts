export interface Activity {
  id: string;
  cohort: string;
  title: string;
  description: string;
  activity_type: 'lab' | 'masterclass' | 'field_demo' | 'attachment' | 'workshop' | 'graduation' | 'other';
  activity_date: string;
  photo: string;
  tag: string;
  created_at: string;
}
