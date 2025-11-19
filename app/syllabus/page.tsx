"use client";

import React, { useState, useEffect } from 'react';
import { 
  Brain, Activity, Bone, Baby, Stethoscope, ChevronDown, ChevronRight, 
  CheckCircle2, Circle, AlertTriangle, Syringe, Microscope, ShieldAlert, 
  Eye, Ear, Scissors, Pill, FlaskConical, Biohazard, Ghost, Sparkles, 
  Loader2, HeartPulse, Dna, Zap, Scale, GraduationCap
} from 'lucide-react';

/* ----------------------------------------------------------------
   SYLLABUS DATA WITH CATEGORIES
   ----------------------------------------------------------------
*/
const SYLLABUS = [
  // --- CLINICAL ---
  {
    id: 'med',
    category: 'Clinical Subjects',
    title: 'General Medicine',
    icon: Stethoscope,
    color: 'from-indigo-500 to-blue-600',
    topics: [
      { id: 'med_cardio', title: 'Cardiology', subtopics: ['Ischemic Heart Disease', 'Heart Failure', 'Valvular Diseases', 'Endocarditis', 'Pericarditis', 'ECG Arrhythmias'] },
      { id: 'med_resp', title: 'Respiratory', subtopics: ['COPD vs Asthma', 'Pneumonia', 'Tuberculosis', 'Pleural Effusion', 'Lung Cancer'] },
      { id: 'med_neuro', title: 'Neurology', subtopics: ['Stroke Mgmt', 'Epilepsy', 'Meningitis', 'Parkinsonism', 'Myasthenia Gravis', 'GBS'] },
      { id: 'med_nephro', title: 'Nephrology', subtopics: ['AKI vs CKD', 'Glomerulonephritis', 'Dialysis', 'Electrolytes', 'Acid-Base'] },
      { id: 'med_git', title: 'Gastroenterology', subtopics: ['Peptic Ulcer', 'IBD', 'Cirrhosis', 'Pancreatitis', 'Hepatitis'] },
      { id: 'med_endo', title: 'Endocrinology', subtopics: ['Diabetes Mellitus', 'Thyroid Disorders', 'Cushing/Addison', 'Acromegaly'] },
      { id: 'med_inf', title: 'Infectious Dis', subtopics: ['HIV/AIDS', 'Malaria/Dengue', 'Sepsis', 'Typhoid', 'Pyrexia of Unknown Origin'] },
    ]
  },
  {
    id: 'surg',
    category: 'Clinical Subjects',
    title: 'General Surgery',
    icon: Scissors,
    color: 'from-orange-500 to-red-600',
    topics: [
      { id: 'surg_gen', title: 'General Principles', subtopics: ['Shock & Fluids', 'Wound Healing', 'Burns', 'Trauma (ATLS)', 'Surgical Infection'] },
      { id: 'surg_git', title: 'GI Surgery', subtopics: ['Oral CA', 'Stomach CA', 'Intestinal Obstruction', 'Appendicitis', 'Colorectal CA', 'Hernias'] },
      { id: 'surg_hpb', title: 'Hepato-Biliary', subtopics: ['Liver Abscess', 'Gallstones', 'Obstructive Jaundice', 'Pancreatic CA'] },
      { id: 'surg_uro', title: 'Urology', subtopics: ['Renal Stones', 'RCC', 'Bladder CA', 'Prostate (BPH/CA)', 'Torsion'] },
      { id: 'surg_br', title: 'Breast/Thyroid', subtopics: ['Breast CA', 'Benign Breast Dis', 'Thyroid Nodules', 'Thyroid CA'] },
    ]
  },
  {
    id: 'obgyn',
    category: 'Clinical Subjects',
    title: 'OBGYN',
    icon: Baby,
    color: 'from-pink-500 to-fuchsia-600',
    topics: [
      { id: 'obs_phys', title: 'Obstetrics', subtopics: ['Diagnosis of Preg', 'ANC', 'Normal Labor', 'Partogram', 'Maternal Pelvis'] },
      { id: 'obs_path', title: 'Obs Pathology', subtopics: ['Abortion', 'Ectopic', 'APH', 'PIH/Eclampsia', 'Rh Isoimmunization', 'PPH'] },
      { id: 'gyn', title: 'Gynecology', subtopics: ['Menstrual Cycle', 'Amenorrhea', 'Infertility', 'Contraception', 'Ca Cervix', 'Ca Endometrium'] },
    ]
  },
  {
    id: 'peds',
    category: 'Clinical Subjects',
    title: 'Pediatrics',
    icon: Baby,
    color: 'from-cyan-400 to-sky-600',
    topics: [
      { id: 'peds_gen', title: 'General', subtopics: ['Milestones', 'Breastfeeding', 'Malnutrition', 'Vitamins', 'Genetics (Downs)'] },
      { id: 'peds_neo', title: 'Neonatology', subtopics: ['NRP Resuscitation', 'Jaundice', 'Resp Distress', 'Sepsis'] },
      { id: 'peds_sys', title: 'Systemic', subtopics: ['CHD (Cyanotic)', 'Diarrhea', 'Pneumonia', 'Nephrotic Syn'] },
    ]
  },
  {
    id: 'ortho',
    category: 'Clinical Subjects',
    title: 'Orthopedics',
    icon: Bone,
    color: 'from-stone-500 to-stone-700',
    topics: [
      { id: 'ortho_tr', title: 'Trauma', subtopics: ['Fracture Healing', 'Compartment Syn', 'Colles #', 'Supracondylar #', 'Hip #'] },
      { id: 'ortho_dis', title: 'Diseases', subtopics: ['Osteomyelitis', 'Bone Tumors', 'TB Spine', 'CTEV', 'DDH'] },
    ]
  },
  {
    id: 'ent',
    category: 'Clinical Subjects',
    title: 'ENT',
    icon: Ear,
    color: 'from-purple-500 to-violet-600',
    topics: [
      { id: 'ent_ear', title: 'Ear', subtopics: ['Audiometry', 'CSOM', 'Otosclerosis', 'Facial Nerve'] },
      { id: 'ent_nose', title: 'Nose', subtopics: ['Epistaxis', 'DNS', 'Polyps', 'Sinusitis'] },
      { id: 'ent_throat', title: 'Throat', subtopics: ['Tonsillitis', 'Laryngeal CA', 'Tracheostomy'] },
    ]
  },
  {
    id: 'ophtha',
    category: 'Clinical Subjects',
    title: 'Ophthalmology',
    icon: Eye,
    color: 'from-blue-400 to-indigo-500',
    topics: [
      { id: 'eye_lens', title: 'Lens/Retina', subtopics: ['Cataract', 'Diabetic Retinopathy', 'Retinal Detachment'] },
      { id: 'eye_cornea', title: 'Cornea/Conj', subtopics: ['Conjunctivitis', 'Corneal Ulcer', 'Vit A Def'] },
      { id: 'eye_misc', title: 'Misc', subtopics: ['Glaucoma', 'Refractive Errors', 'Squint'] },
    ]
  },
  {
    id: 'skin',
    category: 'Clinical Subjects',
    title: 'Dermatology',
    icon: Activity,
    color: 'from-rose-400 to-pink-500',
    topics: [
      { id: 'skin_inf', title: 'Infections', subtopics: ['Scabies', 'Leprosy', 'Fungal', 'Viral'] },
      { id: 'skin_std', title: 'STDs', subtopics: ['Syphilis', 'Gonorrhea', 'Chancroid', 'Syndromic Mgmt'] },
      { id: 'skin_non', title: 'Non-Infectious', subtopics: ['Psoriasis', 'Lichen Planus', 'Pemphigus', 'Acne'] },
    ]
  },
  {
    id: 'psych',
    category: 'Clinical Subjects',
    title: 'Psychiatry',
    icon: Brain,
    color: 'from-violet-500 to-fuchsia-500',
    topics: [
      { id: 'psych_maj', title: 'Disorders', subtopics: ['Schizophrenia', 'Depression', 'Bipolar', 'Anxiety', 'Substance Abuse'] },
      { id: 'psych_rx', title: 'Treatment', subtopics: ['Antipsychotics', 'Lithium', 'ECT'] },
    ]
  },
  {
    id: 'radio',
    category: 'Clinical Subjects',
    title: 'Radiology',
    icon: Zap,
    color: 'from-gray-400 to-slate-500',
    topics: [
      { id: 'rad_all', title: 'All Topics', subtopics: ['X-ray Basics', 'CT/MRI Basics', 'CXR Signs', 'FAST Scan', 'Radiation Safety'] },
    ]
  },
  {
    id: 'anes',
    category: 'Clinical Subjects',
    title: 'Anesthesia',
    icon: Syringe,
    color: 'from-teal-400 to-emerald-500',
    topics: [
      { id: 'anes_all', title: 'All Topics', subtopics: ['IV Agents', 'Inhalational Agents', 'Muscle Relaxants', 'Intubation', 'Spinal/Epidural', 'CPR'] },
    ]
  },

  // --- PRE-CLINICAL ---
  {
    id: 'anat',
    category: 'Pre-Clinical',
    title: 'Anatomy',
    icon: Bone,
    color: 'from-red-500 to-rose-600',
    topics: [
      { id: 'anat_gen', title: 'General', subtopics: ['Epithelium', 'Connective Tissue', 'Joints', 'Bone Ossification'] },
      { id: 'anat_upper', title: 'Upper Limb', subtopics: ['Brachial Plexus', 'Rotator Cuff', 'Axilla', 'Hand Spaces', 'Nerve Injuries'] },
      { id: 'anat_lower', title: 'Lower Limb', subtopics: ['Femoral Triangle', 'Knee Joint', 'Arches of Foot', 'Sciatic Nerve'] },
      { id: 'anat_thx', title: 'Thorax', subtopics: ['Mediastinum', 'Coronary Arteries', 'Bronchopulmonary Seg', 'Diaphragm'] },
      { id: 'anat_abd', title: 'Abdomen', subtopics: ['Inguinal Canal', 'Peritoneum', 'Liver Segments', 'Rectus Sheath'] },
      { id: 'anat_neuro', title: 'Neuro', subtopics: ['Circle of Willis', 'Brainstem', 'Cranial Nerves', 'Basal Ganglia'] },
      { id: 'anat_emb', title: 'Embryology', subtopics: ['Pharyngeal Arches', 'Heart Dev', 'Gut Rotation'] },
    ]
  },
  {
    id: 'physio',
    category: 'Pre-Clinical',
    title: 'Physiology',
    icon: Activity,
    color: 'from-blue-500 to-sky-600',
    topics: [
      { id: 'phys_gen', title: 'General', subtopics: ['Transport', 'Action Potential', 'Sarcomere'] },
      { id: 'phys_cvs', title: 'CVS', subtopics: ['Cardiac Cycle', 'ECG', 'BP Regulation', 'Shock'] },
      { id: 'phys_resp', title: 'Respiratory', subtopics: ['Lung Volumes', 'V/Q Mismatch', 'O2 Transport', 'Regulation'] },
      { id: 'phys_renal', title: 'Renal', subtopics: ['GFR', 'Counter Current', 'RAAS', 'Acid Base'] },
      { id: 'phys_cns', title: 'CNS', subtopics: ['Synapse', 'Tracts', 'Cerebellum', 'Special Senses'] },
    ]
  },
  {
    id: 'biochem',
    category: 'Pre-Clinical',
    title: 'Biochemistry',
    icon: FlaskConical,
    color: 'from-yellow-400 to-amber-500',
    topics: [
      { id: 'bio_met', title: 'Metabolism', subtopics: ['Glycolysis', 'TCA Cycle', 'Beta Oxidation', 'Urea Cycle', 'HMP Shunt'] },
      { id: 'bio_vit', title: 'Vitamins', subtopics: ['Fat Soluble (A,D,E,K)', 'Water Soluble (B Complex, C)'] },
      { id: 'bio_mol', title: 'Genetics', subtopics: ['Replication', 'Transcription', 'Translation', 'PCR'] },
      { id: 'bio_clin', title: 'Clinical', subtopics: ['Enzymes', 'Jaundice', 'Lipid Storage Dis'] },
    ]
  },

  // --- PARA-CLINICAL ---
  {
    id: 'patho',
    category: 'Para-Clinical',
    title: 'Pathology',
    icon: Microscope,
    color: 'from-pink-500 to-rose-600',
    topics: [
      { id: 'path_gen', title: 'General', subtopics: ['Cell Injury', 'Inflammation', 'Neoplasia', 'Hemodynamics', 'Genetics'] },
      { id: 'path_hem', title: 'Hematology', subtopics: ['Anemia', 'Leukemia', 'Lymphoma'] },
      { id: 'path_sys', title: 'Systemic', subtopics: ['MI/RHD', 'TB/COPD', 'Nephrotic/Nephritic', 'Cirrhosis', 'Bone Tumors'] },
    ]
  },
  {
    id: 'pharm',
    category: 'Para-Clinical',
    title: 'Pharmacology',
    icon: Pill,
    color: 'from-green-500 to-emerald-600',
    topics: [
      { id: 'pharm_gen', title: 'General', subtopics: ['Pharmacokinetics', 'Dynamics'] },
      { id: 'pharm_ans', title: 'ANS', subtopics: ['Cholinergics', 'Adrenergics', 'Blockers', 'Glaucoma'] },
      { id: 'pharm_cvs', title: 'CVS', subtopics: ['Diuretics', 'Anti-HTN', 'Heart Failure'] },
      { id: 'pharm_cns', title: 'CNS', subtopics: ['Epilepsy', 'Psychiatry', 'Opioids', 'Anesthesia'] },
      { id: 'pharm_micro', title: 'Antimicrobial', subtopics: ['Antibiotics', 'Anti-TB', 'Anti-Viral', 'Anti-Malarial'] },
    ]
  },
  {
    id: 'micro',
    category: 'Para-Clinical',
    title: 'Microbiology',
    icon: Biohazard,
    color: 'from-lime-500 to-green-600',
    topics: [
      { id: 'micro_bact', title: 'Bacteriology', subtopics: ['Staph/Strep', 'TB/Leprosy', 'Clostridium', 'Enteric Fever'] },
      { id: 'micro_vir', title: 'Virology', subtopics: ['Hepatitis', 'HIV', 'Herpes', 'Arboviruses'] },
      { id: 'micro_par', title: 'Parasitology', subtopics: ['Malaria', 'Amoeba', 'Helminths'] },
      { id: 'micro_imm', title: 'Immunology', subtopics: ['Hypersensitivity', 'Vaccines', 'MHC'] },
    ]
  },
  {
    id: 'fmt',
    category: 'Para-Clinical',
    title: 'Forensic Med',
    icon: Ghost,
    color: 'from-slate-400 to-gray-500',
    topics: [
      { id: 'fmt_all', title: 'All Topics', subtopics: ['Legal Procedures', 'Identification', 'Thanatology', 'Injuries', 'Toxicology', 'Sexual Jurisprudence'] },
    ]
  },
  {
    id: 'psm',
    category: 'Para-Clinical',
    title: 'PSM (Community)',
    icon: ShieldAlert,
    color: 'from-emerald-500 to-green-600',
    topics: [
      { id: 'psm_epi', title: 'Epidemiology', subtopics: ['Study Designs', 'Screening', 'Epidemics'] },
      { id: 'psm_stat', title: 'Biostats', subtopics: ['Normal Dist', 'Tests of Sig', 'Sampling'] },
      { id: 'psm_prog', title: 'Programs', subtopics: ['TB', 'Vector Borne', 'MCH/Immunization'] },
    ]
  },
];

/* ----------------------------------------------------------------
   UI COMPONENTS
   ----------------------------------------------------------------
*/

const TopicItem = ({ subtopic, topicId, isCompleted, onToggle }: any) => {
  const uniqueId = `${topicId}_${subtopic.replace(/\s+/g, '_').toLowerCase()}`;
  
  return (
    <div 
      onClick={() => onToggle(uniqueId)}
      className={`
      group relative flex items-center justify-between p-3 rounded-lg transition-all duration-200 select-none cursor-pointer border
      ${isCompleted 
        ? 'bg-green-500/5 border-green-500/20' 
        : 'hover:bg-white/5 border-transparent hover:border-white/5'}
    `}>
      <div className="flex items-center gap-3 flex-1 z-10">
        <div className={`
          w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300
          ${isCompleted ? 'bg-green-500 scale-110' : 'bg-gray-700 group-hover:bg-gray-600'}
        `}>
          {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
        </div>
        <span className={`text-sm font-medium transition-colors duration-300 ${isCompleted ? 'text-gray-500 line-through decoration-green-500/30' : 'text-gray-300 group-hover:text-white'}`}>
          {subtopic}
        </span>
      </div>
    </div>
  );
};

const SubjectCard = ({ subject, progress, expandedSubjects, expandedTopics, toggleSubject, toggleTopic, toggleProgress }: any) => {
    const isExpanded = expandedSubjects[subject.id];
    const SubjectIcon = subject.icon;

    // Calculate progress
    const totalSubtopics = subject.topics.reduce((acc: number, topic: any) => acc + topic.subtopics.length, 0);
    const completedInSubject = subject.topics.reduce((acc: number, topic: any) => {
      return acc + topic.subtopics.reduce((tAcc: number, sub: string) => {
        const uid = `${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`;
        return tAcc + (progress[uid] ? 1 : 0);
      }, 0);
    }, 0);
    const percent = totalSubtopics === 0 ? 0 : Math.round((completedInSubject / totalSubtopics) * 100);

    return (
        <div className={`
            group relative overflow-hidden rounded-2xl border transition-all duration-300
            ${isExpanded ? 'bg-gray-800/80 border-gray-600 shadow-2xl' : 'bg-gray-800/40 border-white/5 hover:border-white/10 hover:bg-gray-800/60'}
            backdrop-blur-sm
        `}>
            <div 
                onClick={() => toggleSubject(subject.id)}
                className="relative p-5 cursor-pointer z-10"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${subject.color} shadow-lg`}>
                        <SubjectIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`
                        flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border
                        ${percent === 100 
                            ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                            : 'bg-gray-900/50 border-gray-700 text-gray-400'}
                    `}>
                        {percent}%
                    </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">{subject.title}</h3>
                
                <div className="relative h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <div 
                        className={`absolute h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r ${subject.color}`} 
                        style={{ width: `${percent}%` }} 
                    />
                </div>
                
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{completedInSubject}/{totalSubtopics} Topics</span>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className={`
                grid transition-all duration-300 ease-in-out
                ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
            `}>
                <div className="overflow-hidden bg-black/20 border-t border-white/5">
                    <div className="p-2 space-y-2">
                        {subject.topics.map((topic: any) => {
                            const isTopicExpanded = expandedTopics[topic.id];
                            return (
                                <div key={topic.id} className="rounded-xl bg-white/[0.02] overflow-hidden">
                                    <div 
                                        onClick={() => toggleTopic(topic.id)}
                                        className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.04] transition-colors"
                                    >
                                        <span className="text-gray-300 font-medium text-sm">{topic.title}</span>
                                        {isTopicExpanded 
                                            ? <ChevronDown className="w-3.5 h-3.5 text-gray-500" /> 
                                            : <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                                        }
                                    </div>

                                    {isTopicExpanded && (
                                        <div className="px-2 pb-2 pt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                                            {topic.subtopics.map((sub: string) => (
                                                <TopicItem 
                                                    key={sub} 
                                                    subtopic={sub}
                                                    topicId={topic.id}
                                                    isCompleted={!!progress[`${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`]}
                                                    onToggle={toggleProgress}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ----------------------------------------------------------------
   MAIN PAGE
   ----------------------------------------------------------------
*/

export default function SyllabusPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('syllabus-tracker-progress');
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem('syllabus-tracker-progress', JSON.stringify(progress));
  }, [progress, mounted]);

  const handlers = {
      toggleSubject: (id: string) => setExpandedSubjects(prev => ({ ...prev, [id]: !prev[id] })),
      toggleTopic: (id: string) => setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] })),
      toggleProgress: (uniqueId: string) => setProgress(prev => ({ ...prev, [uniqueId]: !prev[uniqueId] }))
  };

  // Helper to group subjects
  const groupedSyllabus = {
    'Clinical Subjects': SYLLABUS.filter(s => s.category === 'Clinical Subjects'),
    'Pre-Clinical': SYLLABUS.filter(s => s.category === 'Pre-Clinical'),
    'Para-Clinical': SYLLABUS.filter(s => s.category === 'Para-Clinical'),
  };

  const totalTasks = SYLLABUS.reduce((acc, subj) => acc + subj.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0), 0);
  const completedTasks = Object.values(progress).filter(Boolean).length;
  const totalPercentage = Math.round((completedTasks / totalTasks) * 100) || 0;

  if (!mounted) return <div className="min-h-screen bg-[#0F111A] flex items-center justify-center"><Loader2 className="w-8 h-8 text-indigo-500 animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-[#0F111A] text-gray-100 font-sans selection:bg-indigo-500/30">
      
      {/* Header */}
      <div className="relative pt-12 pb-8 px-4 md:px-8 border-b border-white/5 bg-[#0F111A]/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                        Comprehensive Syllabus
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-lg">
                        Track your progress across all 19 subjects.
                    </p>
                </div>
                <div className="bg-gray-800/50 border border-white/10 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                         <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                            <path className="text-indigo-500 transition-all duration-1000 ease-out" strokeDasharray={`${totalPercentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        </svg>
                        <span className="absolute text-xs font-bold">{totalPercentage}%</span>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Completed</div>
                        <div className="text-lg font-bold text-white">{completedTasks} <span className="text-gray-500 text-sm">/ {totalTasks}</span></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content with Grouped Sections */}
      <main className="relative max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        
        {/* Clinical Section */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                <h2 className="text-xl font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" /> Clinical Phase
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Clinical Subjects'].map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                ))}
            </div>
        </section>

        {/* Pre-Clinical Section */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
                <h2 className="text-xl font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Pre-Clinical Phase
                </h2>
                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Pre-Clinical'].map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                ))}
            </div>
        </section>

        {/* Para-Clinical Section */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <h2 className="text-xl font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                    <Microscope className="w-5 h-5" /> Para-Clinical Phase
                </h2>
                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Para-Clinical'].map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                ))}
            </div>
        </section>

        <div className="mt-12 text-center pb-8">
            <button 
                onClick={() => { if(confirm("Reset all?")) { setProgress({}); localStorage.removeItem('syllabus-tracker-progress'); }}}
                className="px-6 py-2 rounded-full text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
            >
                Reset All Progress
            </button>
        </div>
      </main>
    </div>
  );
}

// Small Icon helper
function BookOpen(props: any) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    )
}