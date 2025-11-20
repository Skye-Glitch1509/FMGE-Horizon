export interface QuizSubject {
  slug: string;
  name: string;
  highYield: boolean;
  conceptual: boolean;
}

export const quizSubjects: QuizSubject[] = [
  { slug: 'anatomy', name: 'Anatomy', highYield: true, conceptual: true },
  { slug: 'physiology', name: 'Physiology', highYield: true, conceptual: true },
  { slug: 'biochemistry', name: 'Biochemistry', highYield: false, conceptual: true },
  { slug: 'pathology', name: 'Pathology', highYield: true, conceptual: true },
  { slug: 'pharmacology', name: 'Pharmacology', highYield: true, conceptual: false },
  { slug: 'microbiology', name: 'Microbiology', highYield: true, conceptual: false },
  { slug: 'forensic', name: 'Forensic Medicine', highYield: false, conceptual: false },
  { slug: 'community', name: 'Community Medicine', highYield: false, conceptual: true },
  { slug: 'medicine', name: 'General Medicine', highYield: true, conceptual: true },
  { slug: 'surgery', name: 'General Surgery', highYield: true, conceptual: true },
  { slug: 'pediatrics', name: 'Pediatrics', highYield: true, conceptual: false },
  { slug: 'obg', name: 'Obstetrics & Gynecology', highYield: true, conceptual: false },
  { slug: 'ophthal', name: 'Ophthalmology', highYield: false, conceptual: false },
  { slug: 'ent', name: 'ENT', highYield: false, conceptual: false },
  { slug: 'ortho', name: 'Orthopedics', highYield: false, conceptual: true },
  { slug: 'psychiatry', name: 'Psychiatry', highYield: true, conceptual: false },
  { slug: 'derma', name: 'Dermatology', highYield: false, conceptual: false },
  { slug: 'radiology', name: 'Radiology', highYield: false, conceptual: false },
  { slug: 'anesthesia', name: 'Anesthesiology', highYield: false, conceptual: false }
];
