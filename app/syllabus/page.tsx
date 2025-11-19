"use client";

import React, { useState, useEffect } from 'react';
import { 
  Brain, Activity, Bone, Baby, Stethoscope, ChevronDown, ChevronRight, 
  CheckCircle2, Circle, AlertTriangle, Syringe, Microscope, ShieldAlert, 
  Eye, Ear, Scissors, Pill, FlaskConical, Biohazard, Ghost, Sparkles, Loader2
} from 'lucide-react';

/* ----------------------------------------------------------------
   DATA
   ----------------------------------------------------------------
*/
const SYLLABUS = [
  {
    id: 'anat',
    title: 'Anatomy',
    icon: Bone,
    color: 'text-red-400',
    topics: [
      { id: 'anat_gen', title: 'General Anatomy', subtopics: ['Epithelium Types', 'Connective Tissue', 'Bone Ossification', 'Cartilage types', 'Joints classifications'] },
      { id: 'anat_embryo', title: 'Embryology', subtopics: ['Pharyngeal Arches', 'Placenta & Fetal Membranes', 'Heart Development', 'Gut Rotation', 'Urogenital Development'] },
      { id: 'anat_upper', title: 'Upper Limb', subtopics: ['Brachial Plexus', 'Rotator Cuff', 'Axilla Boundaries', 'Spaces of Hand', 'Nerve Injuries'] },
      { id: 'anat_lower', title: 'Lower Limb', subtopics: ['Femoral Triangle', 'Adductor Canal', 'Knee Joint', 'Arches of Foot', 'Sciatic Nerve'] },
      { id: 'anat_thorax', title: 'Thorax', subtopics: ['Mediastinum', 'Coronary Arteries', 'Bronchopulmonary Segments', 'Diaphragm', 'Azygos System'] },
      { id: 'anat_abd', title: 'Abdomen', subtopics: ['Inguinal Canal', 'Peritoneum & Pouches', 'Celiac Trunk/SMA/IMA', 'Portocaval Anastomoses', 'Liver Segments', 'Rectus Sheath'] },
      { id: 'anat_pelvis', title: 'Pelvis', subtopics: ['Uterus Supports', 'Urethra', 'Ischiorectal Fossa', 'Pudendal Nerve Canal', 'Prostate Zones'] },
      { id: 'anat_head', title: 'Head & Neck', subtopics: ['Cavernous Sinus', 'Scalp Layers', 'Triangles of Neck', 'Parotid Gland', 'TMJ', 'Larynx'] },
      { id: 'anat_neuro', title: 'Neuroanatomy', subtopics: ['Circle of Willis', 'Brainstem Sections', 'Cranial Nerve Nuclei', 'Thalamic Nuclei', 'Basal Ganglia', 'CSF Flow'] },
    ]
  },
  {
    id: 'physio',
    title: 'Physiology',
    icon: Activity,
    color: 'text-blue-400',
    topics: [
      { id: 'phys_gen', title: 'General Physio', subtopics: ['Transport', 'Fluid Compartments', 'Homeostasis'] },
      { id: 'phys_cvs', title: 'CVS', subtopics: ['Cardiac Cycle', 'ECG Basics', 'Cardiac Output', 'BP Regulation', 'Shock Types'] },
      { id: 'phys_resp', title: 'Respiratory', subtopics: ['Lung Volumes', 'V/Q Mismatch', 'Oxygen Transport', 'Hypoxia Types'] },
      { id: 'phys_renal', title: 'Renal', subtopics: ['GFR Determinants', 'Counter Current', 'RAAS System', 'Acid-Base Balance'] },
      { id: 'phys_cns', title: 'CNS', subtopics: ['Synaptic Transmission', 'Sensory Tracts', 'Motor Tracts', 'Basal Ganglia', 'Visual Pathway'] },
    ]
  },
  {
    id: 'biochem',
    title: 'Biochemistry',
    icon: FlaskConical,
    color: 'text-yellow-400',
    topics: [
      { id: 'bio_carb', title: 'Carbohydrates', subtopics: ['Glycolysis', 'TCA Cycle', 'HMP Shunt', 'Glycogen Storage', 'Gluconeogenesis'] },
      { id: 'bio_prot', title: 'Proteins', subtopics: ['Amino Acids', 'Urea Cycle', 'Protein Structure', 'Enzyme Kinetics'] },
      { id: 'bio_lip', title: 'Lipids', subtopics: ['Beta Oxidation', 'Ketogenesis', 'Cholesterol Synthesis', 'Lipoproteins'] },
      { id: 'bio_mol', title: 'Molecular Bio', subtopics: ['DNA Replication', 'Transcription', 'Translation', 'Mutations', 'PCR'] },
    ]
  },
  {
    id: 'patho',
    title: 'Pathology',
    icon: Microscope,
    color: 'text-pink-400',
    topics: [
      { id: 'path_gen', title: 'General Path', subtopics: ['Cell Injury', 'Inflammation', 'Wound Healing', 'Hemodynamics', 'Neoplasia', 'Genetics'] },
      { id: 'path_hem', title: 'Hematology', subtopics: ['Anemias', 'Leukemias', 'Lymphomas', 'Bleeding Disorders'] },
      { id: 'path_sys', title: 'Systemic', subtopics: ['CVS Pathology', 'Resp Pathology', 'Renal Pathology', 'Liver Pathology', 'Breast CA'] },
    ]
  },
  {
    id: 'pharm',
    title: 'Pharmacology',
    icon: Pill,
    color: 'text-green-400',
    topics: [
      { id: 'pharm_gen', title: 'General', subtopics: ['Pharmacokinetics', 'Dynamics', 'Clinical Trials'] },
      { id: 'pharm_ans', title: 'ANS', subtopics: ['Cholinergics', 'Sympathomimetics', 'Blockers'] },
      { id: 'pharm_cvs', title: 'CVS/Renal', subtopics: ['Diuretics', 'Anti-Hypertensives', 'Heart Failure', 'Anti-Arrhythmics'] },
      { id: 'pharm_micro', title: 'Antimicrobials', subtopics: ['Cell Wall Inhibitors', 'Protein Synth Inhibitors', 'Anti-TB', 'Anti-Viral'] },
    ]
  },
  {
    id: 'micro',
    title: 'Microbiology',
    icon: Biohazard,
    color: 'text-lime-500',
    topics: [
      { id: 'micro_bact', title: 'Bacteriology', subtopics: ['Staph/Strep', 'Mycobacterium', 'Clostridium', 'Enterobacteriaceae'] },
      { id: 'micro_vir', title: 'Virology', subtopics: ['Herpes Family', 'Hepatitis', 'HIV', 'Influenza'] },
      { id: 'micro_par', title: 'Parasitology', subtopics: ['Malaria', 'Amoeba', 'Leishmania'] },
      { id: 'micro_imm', title: 'Immunology', subtopics: ['Hypersensitivity', 'MHC Classes', 'Vaccines'] },
    ]
  },
  {
    id: 'psm',
    title: 'PSM',
    icon: ShieldAlert,
    color: 'text-emerald-500',
    topics: [
      { id: 'psm_epi', title: 'Epidemiology', subtopics: ['Study Designs', 'Screening Tests', 'Bias'] },
      { id: 'psm_stats', title: 'Biostats', subtopics: ['Central Tendency', 'Normal Distribution', 'Tests of Sig'] },
      { id: 'psm_prog', title: 'Programs', subtopics: ['NTEP', 'RCH', 'Vaccines/Cold Chain'] },
    ]
  },
  {
    id: 'med',
    title: 'Medicine',
    icon: Stethoscope,
    color: 'text-indigo-400',
    topics: [
      { id: 'med_cardio', title: 'Cardiology', subtopics: ['MI Mgmt', 'Heart Failure', 'Valvular Diseases'] },
      { id: 'med_neuro', title: 'Neurology', subtopics: ['Stroke', 'Epilepsy', 'Meningitis'] },
      { id: 'med_resp', title: 'Respiratory', subtopics: ['COPD', 'Asthma', 'Tuberculosis'] },
      { id: 'med_endo', title: 'Endocrinology', subtopics: ['Diabetes', 'Thyroid Disorders'] },
    ]
  },
  {
    id: 'surg',
    title: 'Surgery',
    icon: Scissors,
    color: 'text-orange-400',
    topics: [
      { id: 'surg_gen', title: 'General', subtopics: ['Shock', 'Burns', 'Wound Healing'] },
      { id: 'surg_git', title: 'GI Surgery', subtopics: ['Intestinal Obstruction', 'Appendicitis', 'Hernias'] },
      { id: 'surg_uro', title: 'Urology', subtopics: ['Renal Stones', 'BPH'] },
      { id: 'surg_spec', title: 'Specialty', subtopics: ['Breast CA', 'Thyroid CA', 'Trauma (ATLS)'] },
    ]
  },
  {
    id: 'obgyn',
    title: 'OBGYN',
    icon: Baby,
    color: 'text-pink-500',
    topics: [
      { id: 'obs', title: 'Obstetrics', subtopics: ['ANC', 'APH', 'PIH/Eclampsia', 'Labor'] },
      { id: 'gyn', title: 'Gynecology', subtopics: ['Menstrual Cycle', 'Contraception', 'Ca Cervix'] },
    ]
  },
  {
    id: 'peds',
    title: 'Pediatrics',
    icon: Baby,
    color: 'text-cyan-400',
    topics: [
      { id: 'peds_gen', title: 'General', subtopics: ['Milestones', 'Breastfeeding', 'SAM', 'Jaundice'] },
      { id: 'peds_sys', title: 'Systemic', subtopics: ['Pneumonia', 'Diarrhea', 'CHD'] },
    ]
  },
  {
    id: 'ent',
    title: 'ENT',
    icon: Ear,
    color: 'text-purple-400',
    topics: [
      { id: 'ent_all', title: 'All Topics', subtopics: ['CSOM', 'Epistaxis', 'Tonsillitis', 'Laryngeal CA'] },
    ]
  },
  {
    id: 'ophtha',
    title: 'Ophthalmology',
    icon: Eye,
    color: 'text-blue-500',
    topics: [
      { id: 'eye_all', title: 'All Topics', subtopics: ['Cataract', 'Diabetic Retinopathy', 'Glaucoma'] },
    ]
  },
  {
    id: 'ortho',
    title: 'Orthopedics',
    icon: Bone,
    color: 'text-stone-400',
    topics: [
      { id: 'ortho_all', title: 'All Topics', subtopics: ['Fractures', 'Osteomyelitis', 'Bone Tumors', 'Nerve Injuries'] },
    ]
  },
  {
    id: 'skin',
    title: 'Dermatology',
    icon: Activity,
    color: 'text-rose-300',
    topics: [
      { id: 'skin_all', title: 'All Topics', subtopics: ['Scabies', 'Leprosy', 'STDs', 'Psoriasis'] },
    ]
  },
  {
    id: 'psych',
    title: 'Psychiatry',
    icon: Brain,
    color: 'text-violet-400',
    topics: [
      { id: 'psych_all', title: 'All Topics', subtopics: ['Schizophrenia', 'Depression', 'Anxiety', 'Lithium'] },
    ]
  },
  {
    id: 'fmt',
    title: 'Forensic Med',
    icon: Ghost,
    color: 'text-slate-400',
    topics: [
      { id: 'fmt_all', title: 'All Topics', subtopics: ['Legal Procedures', 'Identification', 'Toxicology', 'Trauma'] },
    ]
  }
];

/* ----------------------------------------------------------------
   COMPONENTS
   ----------------------------------------------------------------
*/

const TopicItem = ({ subtopic, topicId, isCompleted, onToggle }: any) => {
  // Create a unique ID for the subtopic
  const uniqueId = `${topicId}_${subtopic.replace(/\s+/g, '_').toLowerCase()}`;
  
  return (
    <div className={`
      group flex items-center justify-between p-3 rounded-md transition-all select-none mb-1
      ${isCompleted ? 'bg-green-900/20 border border-green-500/30' : 'hover:bg-gray-800 border border-transparent'}
    `}>
      <div 
        onClick={() => onToggle(uniqueId)}
        className="flex items-center gap-3 cursor-pointer flex-1"
      >
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
        ) : (
          <Circle className="w-5 h-5 text-gray-600 shrink-0 group-hover:text-gray-400" />
        )}
        <span className={`text-sm font-medium transition-colors ${isCompleted ? 'text-gray-400 line-through decoration-gray-600' : 'text-gray-200'}`}>
          {subtopic}
        </span>
      </div>
    </div>
  );
};

export default function SyllabusPage() {
  // Hydration fix: Wait until component mounts to load storage
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  // 1. Initialize state from Local Storage AFTER mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('syllabus-tracker-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // 2. Save to Local Storage whenever progress changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('syllabus-tracker-progress', JSON.stringify(progress));
    }
  }, [progress, mounted]);

  // Handlers
  const toggleSubject = (id: string) => setExpandedSubjects(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleTopic = (id: string) => setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] }));

  const toggleProgress = (uniqueId: string) => {
    setProgress(prev => ({
      ...prev,
      [uniqueId]: !prev[uniqueId]
    }));
  };

  // Clear Data Functionality
  const resetData = () => {
    if(confirm("Are you sure you want to reset all progress?")) {
      setProgress({});
      localStorage.removeItem('syllabus-tracker-progress');
    }
  };

  // Prevent Hydration Mismatch
  if (!mounted) {
    return (
        <div className="min-h-screen bg-[#151624] flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        </div>
    );
  }

  // Calculation for total stats
  const totalTasks = SYLLABUS.reduce((acc, subj) => acc + subj.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0), 0);
  const completedTasks = Object.values(progress).filter(Boolean).length;
  const totalPercentage = Math.round((completedTasks / totalTasks) * 100) || 0;

  return (
    <div className="min-h-screen bg-[#151624] text-gray-100 font-sans pb-20">
      {/* Header */}
      <header className="bg-[#151624]/90 border-b border-gray-800 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" /> 
              Syllabus
            </h1>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Offline Mode</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-bold text-white leading-none">{completedTasks} <span className="text-xs text-gray-500 font-normal">/ {totalTasks}</span></div>
              <div className="text-[10px] uppercase tracking-wider text-green-400 mt-1">{totalPercentage}% Done</div>
            </div>
          </div>
        </div>
        {/* Global Progress Bar */}
        <div className="w-full h-1 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 ease-out" 
            style={{ width: `${totalPercentage}%` }}
          ></div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {SYLLABUS.map((subject) => {
          const SubjectIcon = subject.icon;
          const isExpanded = expandedSubjects[subject.id];
          
          // Calculate progress per subject
          const totalSubtopics = subject.topics.reduce((acc, topic) => acc + topic.subtopics.length, 0);
          const completedInSubject = subject.topics.reduce((acc, topic) => {
            return acc + topic.subtopics.reduce((tAcc, sub) => {
              const uid = `${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`;
              return tAcc + (progress[uid] ? 1 : 0);
            }, 0);
          }, 0);
          const percent = totalSubtopics === 0 ? 0 : Math.round((completedInSubject / totalSubtopics) * 100);

          return (
            <div key={subject.id} className="bg-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg transition-all hover:border-gray-600">
              
              {/* Subject Header */}
              <div 
                onClick={() => toggleSubject(subject.id)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl bg-gray-800 ${subject.color} shadow-inner`}>
                    <SubjectIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-gray-100">{subject.title}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${percent === 100 ? 'bg-green-500' : 'bg-indigo-500'}`} 
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono text-gray-400">{percent}%</span>
                    </div>
                  </div>
                </div>
                {isExpanded ? <ChevronDown className="text-gray-500" /> : <ChevronRight className="text-gray-500" />}
              </div>

              {/* Topics List */}
              {isExpanded && (
                <div className="border-t border-gray-700/50 bg-black/20 animate-in slide-in-from-top-2 duration-200">
                  {subject.topics.map((topic) => {
                    const isTopicExpanded = expandedTopics[topic.id];
                    return (
                      <div key={topic.id} className="border-b border-gray-800/50 last:border-0">
                        <div 
                          onClick={() => toggleTopic(topic.id)}
                          className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/5"
                        >
                          <span className="text-indigo-200 font-semibold text-sm pl-14">{topic.title}</span>
                          {isTopicExpanded ? <ChevronDown className="w-4 h-4 text-gray-600" /> : <ChevronRight className="w-4 h-4 text-gray-600" />}
                        </div>

                        {isTopicExpanded && (
                          <div className="px-4 pb-4 pl-16 space-y-1">
                            {topic.subtopics.map((sub) => (
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
              )}
            </div>
          );
        })}

        <div className="pt-8 text-center">
          <button 
            onClick={resetData} 
            className="text-xs text-gray-600 hover:text-red-400 underline transition-colors"
          >
            Reset All Progress
          </button>
        </div>
      </main>
    </div>
  );
}