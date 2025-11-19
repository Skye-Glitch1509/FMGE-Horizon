"use client";

import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, ChevronDown, ChevronRight, CheckCircle2, Circle, 
  Scissors, Baby, Bone, Ear, Eye, Activity, Brain, Zap, Syringe, 
  ShieldAlert, FlaskConical, Microscope, Pill, Biohazard, Ghost, 
  Sparkles, Loader2, BookOpen, LayoutDashboard, Award, TrendingUp, Target
} from 'lucide-react';

/* ----------------------------------------------------------------
   SYLLABUS DATA (keeping your existing data structure)
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
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
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
    bgGradient: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/30',
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
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-500/30',
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
    bgGradient: 'from-cyan-500/10 to-teal-500/10',
    borderColor: 'border-cyan-500/30',
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
    bgGradient: 'from-stone-500/10 to-gray-500/10',
    borderColor: 'border-stone-500/30',
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
    bgGradient: 'from-purple-500/10 to-violet-500/10',
    borderColor: 'border-purple-500/30',
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
    color: 'text-sky-400',
    bgGradient: 'from-sky-500/10 to-blue-500/10',
    borderColor: 'border-sky-500/30',
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
    color: 'text-rose-400',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    borderColor: 'border-rose-500/30',
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
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    borderColor: 'border-violet-500/30',
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
    color: 'text-amber-400',
    bgGradient: 'from-amber-500/10 to-yellow-500/10',
    borderColor: 'border-amber-500/30',
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
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
    borderColor: 'border-teal-500/30',
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
    bgGradient: 'from-red-500/10 to-orange-500/10',
    borderColor: 'border-red-500/30',
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
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
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
    bgGradient: 'from-yellow-500/10 to-amber-500/10',
    borderColor: 'border-yellow-500/30',
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
    bgGradient: 'from-pink-500/10 to-fuchsia-500/10',
    borderColor: 'border-pink-500/30',
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
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
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
    bgGradient: 'from-lime-500/10 to-green-500/10',
    borderColor: 'border-lime-500/30',
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
    bgGradient: 'from-slate-500/10 to-gray-500/10',
    borderColor: 'border-slate-500/30',
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
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
    topics: [
      { id: 'psm_epi', title: 'Epidemiology', subtopics: ['Study Designs', 'Screening', 'Epidemics'] },
      { id: 'psm_stat', title: 'Biostats', subtopics: ['Normal Dist', 'Tests of Sig', 'Sampling'] },
      { id: 'psm_prog', title: 'Programs', subtopics: ['TB', 'Vector Borne', 'MCH/Immunization'] },
    ]
  },
];

/* ----------------------------------------------------------------
   ENHANCED COMPONENTS
   ----------------------------------------------------------------
*/

const TopicItem = ({ subtopic, topicId, isCompleted, onToggle }: any) => {
  const uniqueId = `${topicId}_${subtopic.replace(/\s+/g, '_').toLowerCase()}`;
  
  return (
    <div 
      onClick={() => onToggle(uniqueId)}
      className={`
        group flex items-center justify-between p-3.5 rounded-lg transition-all duration-200 select-none cursor-pointer
        ${isCompleted 
          ? 'bg-gradient-to-r from-green-500/15 to-emerald-500/10 border border-green-500/20' 
          : 'bg-gray-800/30 hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50'}
      `}>
      <div className="flex items-center gap-3 flex-1">
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 animate-in fade-in duration-200" />
        ) : (
          <Circle className="w-5 h-5 text-gray-600 shrink-0 group-hover:text-gray-500 transition-colors" />
        )}
        <span className={`text-sm font-medium transition-all ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-200 group-hover:text-white'}`}>
          {subtopic}
        </span>
      </div>
      {isCompleted && (
        <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
      )}
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
        <div className={`group relative bg-gradient-to-br ${subject.bgGradient} backdrop-blur-sm rounded-2xl border ${subject.borderColor} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] ${isExpanded ? 'ring-2 ring-purple-500/20' : ''}`}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div 
                onClick={() => toggleSubject(subject.id)}
                className="relative p-6 cursor-pointer"
            >
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                        <div className={`relative p-3 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-lg ${subject.color} group-hover:scale-110 transition-transform duration-300`}>
                            <SubjectIcon className="w-7 h-7" />
                            {percent === 100 && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-gray-900">
                                <Award className="w-3 h-3 text-white" />
                              </div>
                            )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{subject.title}</h3>
                          <p className="text-xs text-gray-500 font-medium">{totalSubtopics} Topics</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {percent > 0 && (
                        <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
                          <span className={`text-sm font-bold ${percent === 100 ? 'text-green-400' : 'text-purple-400'}`}>
                            {percent}%
                          </span>
                        </div>
                      )}
                      <div className={`p-2 rounded-lg bg-gray-800/50 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className="space-y-2.5">
                    <div className="flex justify-between text-xs font-semibold">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5" />
                          Progress
                        </span>
                        <span className="text-gray-500">{completedInSubject}/{totalSubtopics}</span>
                    </div>
                    <div className="relative h-2.5 w-full bg-gray-800/70 rounded-full overflow-hidden shadow-inner">
                        <div 
                            className={`h-full rounded-full transition-all duration-700 ease-out ${
                              percent === 100 
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                : 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500'
                            }`}
                            style={{ width: `${percent}%` }} 
                        />
                        {percent > 0 && percent < 100 && (
                          <div 
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                            style={{ 
                              left: `${percent}%`,
                              animation: 'shimmer 2s infinite'
                            }}
                          />
                        )}
                    </div>
                </div>
            </div>

            {/* Accordion Body with smooth animation */}
            <div className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className="px-3 pb-3 space-y-2 bg-black/20 backdrop-blur-sm">
                    {subject.topics.map((topic: any) => {
                        const isTopicExpanded = expandedTopics[topic.id];
                        const topicCompleted = topic.subtopics.filter((sub: string) => 
                          progress[`${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`]
                        ).length;
                        const topicPercent = Math.round((topicCompleted / topic.subtopics.length) * 100);
                        
                        return (
                            <div key={topic.id} className="rounded-xl overflow-hidden bg-gray-900/40 border border-gray-800/50">
                                <div 
                                    onClick={() => toggleTopic(topic.id)}
                                    className="px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.03] transition-all group/topic"
                                >
                                    <div className="flex items-center gap-3">
                                      <span className="text-gray-200 font-semibold text-sm group-hover/topic:text-white transition-colors">{topic.title}</span>
                                      {topicPercent > 0 && (
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                          {topicCompleted}/{topic.subtopics.length}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      {topicPercent === 100 && (
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                      )}
                                      <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isTopicExpanded ? 'rotate-90' : ''}`} />
                                    </div>
                                </div>

                                {isTopicExpanded && (
                                    <div className="px-3 pb-3 pt-1 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
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

  // Calculate category stats
  const categoryStats = Object.entries(groupedSyllabus).map(([category, subjects]) => {
    const total = subjects.reduce((acc, subj) => acc + subj.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0), 0);
    const completed = subjects.reduce((acc, subj) => {
      return acc + subj.topics.reduce((tAcc, topic) => {
        return tAcc + topic.subtopics.reduce((sAcc, sub) => {
          const uid = `${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`;
          return sAcc + (progress[uid] ? 1 : 0);
        }, 0);
      }, 0);
    }, 0);
    return { category, total, completed, percent: Math.round((completed / total) * 100) || 0 };
  });

  if (!mounted) return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f111a] via-[#13152a] to-[#0f111a] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin mx-auto mb-4" />
        <p className="text-gray-400 text-sm">Loading your syllabus...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f111a] via-[#13152a] to-[#0f111a] text-gray-100 font-sans selection:bg-purple-500/30 pb-20">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-10">
        <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
              <BookOpen className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FMGE Syllabus Tracker
              </h1>
              <p className="text-gray-400 mt-1 text-sm">Master all 19 subjects • Track every topic</p>
            </div>
        </div>

        {/* Enhanced Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Overall Progress Card */}
          <div className="relative bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative flex items-center gap-6">
              {/* Circular Progress */}
              <div className="relative w-28 h-28 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-gray-800/50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path 
                        className={`transition-all duration-1000 ease-out ${totalPercentage === 100 ? 'text-green-500' : 'text-purple-500'}`}
                        strokeDasharray={`${totalPercentage}, 100`} 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                      />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold text-white">{totalPercentage}%</span>
                      <TrendingUp className={`w-4 h-4 mt-1 ${totalPercentage > 50 ? 'text-green-400' : 'text-purple-400'}`} />
                  </div>
              </div>
              
              <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Overall Progress
                    {totalPercentage === 100 && <Award className="w-6 h-6 text-yellow-400" />}
                  </h2>
                  <p className="text-gray-300 text-sm mb-3">
                    <span className="text-white font-bold text-lg">{completedTasks}</span>
                    <span className="text-gray-400"> / </span>
                    <span className="text-gray-400 font-semibold">{totalTasks}</span>
                    <span className="text-gray-400"> topics mastered</span>
                  </p>
                  <div className="flex gap-2">
                    <button 
                        onClick={() => { if(confirm("Reset all progress?")) { setProgress({}); localStorage.removeItem('syllabus-tracker-progress'); }}}
                        className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30 transition-colors font-medium"
                    >
                        Reset Progress
                    </button>
                  </div>
              </div>
            </div>
          </div>

          {/* Category Stats Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-gray-400" />
              Category Breakdown
            </h3>
            <div className="space-y-3">
              {categoryStats.map(({ category, completed, total, percent }) => (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">{category}</span>
                    <span className="text-xs font-semibold text-gray-400">{completed}/{total}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        category === 'Clinical Subjects' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        category === 'Pre-Clinical' ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                        'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid with enhanced sections */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 space-y-14">
        
        {/* Clinical Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Clinical Subjects</h2>
                  <p className="text-sm text-gray-500">11 core clinical specialties</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Clinical Subjects'].map((subject, idx) => (
                    <div key={subject.id} style={{ animationDelay: `${idx * 50}ms` }} className="animate-in fade-in slide-in-from-bottom-2">
                      <SubjectCard subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                    </div>
                ))}
            </div>
        </section>

        {/* Pre-Clinical Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1.5 bg-gradient-to-b from-red-500 to-orange-500 rounded-full shadow-lg shadow-red-500/50"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Pre-Clinical Subjects</h2>
                  <p className="text-sm text-gray-500">Foundation sciences</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Pre-Clinical'].map((subject, idx) => (
                    <div key={subject.id} style={{ animationDelay: `${idx * 50}ms` }} className="animate-in fade-in slide-in-from-bottom-2">
                      <SubjectCard subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                    </div>
                ))}
            </div>
        </section>

        {/* Para-Clinical Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1.5 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Para-Clinical Subjects</h2>
                  <p className="text-sm text-gray-500">Supporting sciences & community medicine</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupedSyllabus['Para-Clinical'].map((subject, idx) => (
                    <div key={subject.id} style={{ animationDelay: `${idx * 50}ms` }} className="animate-in fade-in slide-in-from-bottom-2">
                      <SubjectCard subject={subject} progress={progress} expandedSubjects={expandedSubjects} expandedTopics={expandedTopics} {...handlers} />
                    </div>
                ))}
            </div>
        </section>

      </div>

      {/* Add shimmer animation to your globals.css */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
