/**
 * Types for LEAP - Ferrières Luxury & Hospitality Management Landing Page
 */

export interface CareerOpportunity {
  id: string;
  title: string;
  description: string;
  partners: string[];
}

export interface StudentExperienceSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
}

export interface DifferenceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface HandbookFormInputs {
  fullname: string;
  email: string;
  phone: string;
}

export interface WebinarFormInputs {
  fullname: string;
  phone: string;
}

export interface ConsultationFormInputs {
  fullname: string;
  phone: string;
  email: string;
  education: string;
  message: string;
}
