"use client";

import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, ChevronDown, ChevronRight, CheckCircle2, Circle, 
  Scissors, Baby, Bone, Ear, Eye, Activity, Brain, Zap, Syringe, 
  ShieldAlert, FlaskConical, Microscope, Pill, Biohazard, Ghost, 
  Sparkles, Loader2, BookOpen, LayoutDashboard
} from 'lucide-react';

/* ----------------------------------------------------------------
   SYLLABUS DATA
   ----------------------------------------------------------------
*/
const SYLLABUS = [
  // --- CLINICAL ---
  {
    id: 'med',
    category: 'Clinical Subjects',
    title: 'General Medicine',
    icon: Stethoscope,
    color: 'text-blue-400',
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
    color: 'text-orange-400',
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
    color: 'text-pink-400',
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
    color: 'text-cyan-400',
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
    color: 'text-stone-400',
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
    color: 'text-purple-400',
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
    color: 'text-blue-400',
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
    color: 'text-rose-300',
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
    color: 'text-violet-400',
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
    color: 'text-gray-300',
    topics: [
      { id: 'rad_all', title: 'All Topics', subtopics: ['X-ray Basics', 'CT/MRI Basics', 'CXR Signs', 'FAST Scan', 'Radiation Safety'] },
    ]
  },
  {
    id: 'anes',
    category: 'Clinical Subjects',
    title: 'Anesthesia',
    icon: Syringe,
    color: 'text-teal-400',
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
    color: 'text-red-400',
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
    color: 'text-blue-400',
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
    color: 'text-yellow-400',
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
    color: 'text-pink-400',
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
    color: 'text-green-400',
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
    color: 'text-lime-400',
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
    color: 'text-slate-400',
    topics: [
      { id: 'fmt_all', title: 'All Topics', subtopics: ['Legal Procedures', 'Identification', 'Thanatology', 'Injuries', 'Toxicology', 'Sexual Jurisprudence'] },
    ]
  },
  {
    id: 'psm',
    category: 'Para-Clinical',
    title: 'PSM (Community)',
    icon: ShieldAlert,
    color: 'text-emerald-400',
    topics: [
      { id: 'psm_epi', title: 'Epidemiology', subtopics: ['Study Designs', 'Screening', 'Epidemics'] },
      { id: 'psm_stat', title: 'Biostats', subtopics: ['Normal Dist', 'Tests of Sig', 'Sampling'] },
      { id: 'psm_prog', title: 'Programs', subtopics: ['TB', 'Vector Borne', 'MCH/Immunization'] },
    ]
  },
];

/* ----------------------------------------------------------------
   COMPONENTS
   ----------------------------------------------------------------
*/

const TopicItem = ({ subtopic, topicId, isCompleted, onToggle }: any) => {
  const uniqueId = `${topicId}_${subtopic.replace(/\s+/g, '_').toLowerCase()}`;
  
  return (
    <div 
      onClick={() => onToggle(uniqueId)}
      className={`
      flex items-center justify-between p-3 rounded-lg transition-all duration-200 select-none cursor-pointer
      ${isCompleted 
        ? 'bg-green-500/10' 
        : 'hover:bg-white/5'}
    `}>
      <div className="flex items-center gap-3 flex-1">
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
        ) : (
          <Circle className="w-5 h-5 text-gray-600 shrink-0" />
        )}
        <span className={`text-sm font-medium ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-300'}`}>
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
        <div className="bg-[#1a1d2d] rounded-2xl border border-gray-800/50 overflow-hidden transition-all duration-300 hover:border-purple-500/30">
            <div 
                onClick={() => toggleSubject(subject.id)}
                className="p-5 cursor-pointer"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-gray-800/50 ${subject.color}`}>
                            <SubjectIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{subject.title}</h3>
                    </div>
                    {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-gray-400">{percent}% Completed</span>
                        <span className="text-gray-500">{completedInSubject}/{totalSubtopics} Topics</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div 
                            className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-purple-500 to-indigo-500"
                            style={{ width: `${percent}%` }} 
                        />
                    </div>
                </div>
            </div>

            {/* Accordion Body */}
            <div className={`
                transition-all duration-300 ease-in-out overflow-hidden
                ${isExpanded ? 'max-h-[2000px] opacity-100 border-t border-gray-800/50' : 'max-h-0 opacity-0'}
            `}>
                <div className="p-2 space-y-1 bg-[#161825]">
                    {subject.topics.map((topic: any) => {
                        const isTopicExpanded = expandedTopics[topic.id];
                        return (
                            <div key={topic.id} className="rounded-xl overflow-hidden">
                                <div 
                                    onClick={() => toggleTopic(topic.id)}
                                    className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.03] transition-colors"
                                >
                                    <span className="text-gray-300 font-semibold text-sm">{topic.title}</span>
                                    {isTopicExpanded 
                                        ? <ChevronDown className="w-4 h-4 text-gray-500" /> 
                                        : <ChevronRight className="w-4 h-4 text-gray-600" />
                                    }
                                </div>

                                {isTopicExpanded && (
                                    <div className="px-2 pb-2 pt-1 space-y-1">
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

  const groupedSyllabus = {
    'Clinical Subjects': SYLLABUS.filter(s => s.category === 'Clinical Subjects'),
    'Pre-Clinical': SYLLABUS.filter(s => s.category === 'Pre-Clinical'),
    'Para-Clinical': SYLLABUS.filter(s => s.category === 'Para-Clinical'),
  };

  const totalTasks = SYLLABUS.reduce((acc, subj) => acc + subj.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0), 0);
  const completedTasks = Object.values(progress).filter(Boolean).length;
  const totalPercentage = Math.round((completedTasks / totalTasks) * 100) || 0;

  if (!mounted) return (
    <div className="min-h-screen bg-[#0f111a] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f111a] text-gray-100 font-sans selection:bg-purple-500/30 pb-20">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard className="w-6 h-6 text-purple-500" />
            <h1 className="text-3xl font-bold text-white">Comprehensive Syllabus</h1>
        </div>
        <p className="text-gray-400 mb-8">Track your progress across all 19 subjects for FMGE/NEET-PG.</p>

        {/* Stats Card */}
        <div className="bg-[#1a1d2d] border border-gray-800 rounded-2xl p-6 flex items-center gap-8 shadow-lg">
            {/* Circular Progress */}
            <div className="relative w-24 h-24 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-purple-500 transition-all duration-1000 ease-out" strokeDasharray={`${totalPercentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-lg font-bold text-white">{totalPercentage}%</span>
                </div>
            </div>
            
            <div>
                <h2 className="text-xl font-bold text-white mb-1">Overall Progress</h2>
                <p className="text-gray-400 text-sm mb-3">You have completed <span className="text-white font-bold">{completedTasks}</span> out of <span className="text-white font-bold">{totalTasks}</span> high-yield topics.</p>
                <button 
                    onClick={() => { if(confirm("Reset all progress?")) { setProgress({}); localStorage.removeItem('syllabus-tracker-progress'); }}}
                    className="text-xs text-red-400 hover:text-red-300 underline"
                >
                    Reset Progress
                </button>
            </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Clinical Section */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-white">Clinical Subjects</h2>
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
                <div className="h-8 w-1 bg-red-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-white">Pre-Clinical Subjects</h2>
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
                <div className="h-8 w-1 bg-green-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-white">Para-Clinical Subjects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Para-Clinical'].map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}