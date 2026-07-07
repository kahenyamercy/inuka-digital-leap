export interface Partner {
  id: string;
  name: string;
  role: string;
  description: string;
  focus_areas: string;
  focus_areas_list: string[];
  logo: string;
  website_url: string;
  is_required_acknowledgement: boolean;
  sort_order: number;
}
