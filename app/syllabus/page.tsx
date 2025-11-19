"use client";

import React, { useState, useEffect } from 'react';
import { 
  Brain, Activity, Bone, Baby, Stethoscope, ChevronDown, ChevronRight, 
  CheckCircle2, Circle, AlertTriangle, Syringe, Microscope, ShieldAlert, 
  Eye, Ear, Scissors, Pill, FlaskConical, Biohazard, Ghost, Sparkles, 
  Loader2, HeartPulse, Dna, Zap, Scale
} from 'lucide-react';

/* ----------------------------------------------------------------
   DETAILED SYLLABUS DATA
   Order: Clinical -> Pre-Clinical -> Para-Clinical
   ----------------------------------------------------------------
*/
const SYLLABUS = [
  // ==============================================================
  // 1. CLINICAL SUBJECTS
  // ==============================================================
  {
    id: 'med',
    title: 'General Medicine',
    icon: Stethoscope,
    color: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-500/10',
    topics: [
      { id: 'med_cardio', title: 'Cardiology', subtopics: ['Ischemic Heart Disease (MI Mgmt)', 'Heart Failure (HFrEF vs HFpEF)', 'Valvular Diseases (Mitral/Aortic)', 'Infective Endocarditis (Dukes Criteria)', 'Pericarditis & Tamponade', 'Arrhythmias (ECG Approach)', 'Hypertension Guidelines'] },
      { id: 'med_resp', title: 'Respiratory', subtopics: ['COPD vs Asthma (PFTs)', 'Pneumonia (CAP/HAP)', 'Tuberculosis (Diagnosis/Mgmt)', 'Pleural Effusion (Light\'s Criteria)', 'Bronchogenic Carcinoma', 'ARDS', 'Interstitial Lung Diseases'] },
      { id: 'med_neuro', title: 'Neurology', subtopics: ['Stroke (Ischemic/Hemorrhagic)', 'Epilepsy & Seizures', 'Headache (Migraine/Cluster)', 'Meningitis & Encephalitis', 'Movement Disorders (Parkinson\'s)', 'Myasthenia Gravis', 'Guillain-Barre Syndrome', 'Multiple Sclerosis'] },
      { id: 'med_nephro', title: 'Nephrology', subtopics: ['AKI vs CKD Stages', 'Glomerulonephritis (Nephritic/Nephrotic)', 'Dialysis Indications', 'Electrolyte Imbalances (Na/K)', 'Acid-Base Disorders (ABG Analysis)'] },
      { id: 'med_git', title: 'Gastroenterology', subtopics: ['Peptic Ulcer Disease', 'GERD', 'Malabsorption Syndromes', 'IBD (Crohn\'s vs UC)', 'Cirrhosis & Complications', 'Acute/Chronic Pancreatitis', 'Hepatitis (Viral/Autoimmune)'] },
      { id: 'med_endo', title: 'Endocrinology', subtopics: ['Diabetes Mellitus (Dx, DKA, HHS)', 'Thyroid Disorders (Hyper/Hypo)', 'Adrenal (Cushing\'s/Addison\'s)', 'Pituitary Disorders (Acromegaly)', 'Calcium Metabolism (PTH)'] },
      { id: 'med_rheum', title: 'Rheumatology', subtopics: ['Rheumatoid Arthritis', 'Osteoarthritis', 'SLE (Lupus)', 'Vasculitis Types', 'Gout & Pseudogout', 'Spondyloarthropathies (Ankylosing)'] },
      { id: 'med_hem', title: 'Hematology (Clinical)', subtopics: ['Approach to Anemia', 'Coagulation Disorders (Hemophilia)', 'Platelet Disorders (ITP/TTP)', 'Transfusion Medicine'] },
      { id: 'med_inf', title: 'Infectious Diseases', subtopics: ['HIV/AIDS Mgmt', 'Malaria/Dengue/Typhoid', 'Sepsis Guidelines', 'Fever of Unknown Origin'] },
    ]
  },
  {
    id: 'surg',
    title: 'General Surgery',
    icon: Scissors,
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-500/10',
    topics: [
      { id: 'surg_gen', title: 'General Principles', subtopics: ['Metabolic Response to Injury', 'Shock & Fluid Resuscitation', 'Wound Healing & Ulcers', 'Burns (Parkland Formula)', 'Surgical Site Infections', 'Trauma (ATLS Protocol)'] },
      { id: 'surg_git', title: 'Gastrointestinal', subtopics: ['Oral Cavity Cancer', 'Esophageal CA & Motility', 'Stomach CA', 'Intestinal Obstruction', 'Appendicitis', 'Colorectal CA', 'Hernias (Inguinal/Ventral)', 'Peritonitis'] },
      { id: 'surg_hpb', title: 'Hepato-Biliary', subtopics: ['Liver Abscess/Hydatid', 'Gallstones & Cholecystitis', 'Obstructive Jaundice', 'Pancreatic Carcinoma', 'Portal Hypertension Surgery'] },
      { id: 'surg_uro', title: 'Urology', subtopics: ['Renal Calculi (Stones)', 'Renal Cell Carcinoma', 'Bladder CA', 'Prostate (BPH vs CA)', 'Testicular Torsion', 'Urethral Strictures'] },
      { id: 'surg_breast', title: 'Breast & Endo', subtopics: ['Breast CA (Staging/Mgmt)', 'Benign Breast Diseases', 'Thyroid Nodules/CA', 'Parathyroid Surgery', 'Adrenal Tumors'] },
      { id: 'surg_spec', title: 'Specialty', subtopics: ['Varicose Veins/DVT', 'Arterial Occlusive Disease', 'Cleft Lip/Palate', 'Salivary Gland Tumors'] },
    ]
  },
  {
    id: 'obgyn',
    title: 'OBGYN',
    icon: Baby,
    color: 'from-pink-500 to-fuchsia-600',
    bg: 'bg-pink-500/10',
    topics: [
      { id: 'obs_phys', title: 'Obstetrics (Physio)', subtopics: ['Maternal Changes in Pregnancy', 'Diagnosis of Pregnancy', 'Antenatal Care', 'Fetal Skull & Maternal Pelvis', 'Normal Labor Mechanism', 'Partogram'] },
      { id: 'obs_path', title: 'Obstetrics (Patho)', subtopics: ['Early Pregnancy (Abortion/Ectopic/Molar)', 'APH (Previa vs Abruptio)', 'Hypertensive Disorders (PIH/Eclampsia)', 'Multiple Pregnancy', 'Rh Isoimmunization', 'IUGR/Oligohydramnios'] },
      { id: 'obs_lab', title: 'Labor Complications', subtopics: ['Malpresentations (Breech)', 'Obstructed Labor', 'PPH (Mgmt)', 'Induction of Labor', 'C-Section Indications'] },
      { id: 'gyn_gen', title: 'General Gynecology', subtopics: ['Menstrual Cycle Physiology', 'Amenorrhea (Primary/Secondary)', 'PCOS', 'Infertility Evaluation', 'Contraception methods', 'Prolapse', 'Endometriosis'] },
      { id: 'gyn_onco', title: 'Gynae Oncology', subtopics: ['Ca Cervix (Staging/Screening)', 'Ca Endometrium', 'Ca Ovary', 'Fibroids', 'GTN (Choriocarcinoma)'] },
    ]
  },
  {
    id: 'peds',
    title: 'Pediatrics',
    icon: Baby,
    color: 'from-cyan-400 to-sky-600',
    bg: 'bg-cyan-500/10',
    topics: [
      { id: 'peds_gen', title: 'Growth & Dev', subtopics: ['Developmental Milestones', 'Anthropometry', 'Breastfeeding & Nutrition', 'SAM (Malnutrition)', 'Vitamins & Rickets'] },
      { id: 'peds_neo', title: 'Neonatology', subtopics: ['Neonatal Resuscitation (NRP)', 'Jaundice (Physio vs Patho)', 'Respiratory Distress (HMD)', 'Neonatal Sepsis', 'Kangaroo Mother Care'] },
      { id: 'peds_sys', title: 'Systemic Peds', subtopics: ['CHD (Tetralogy of Fallot/VSD)', 'Diarrhea & Dehydration', 'Pneumonia/Bronchiolitis', 'Nephrotic Syndrome', 'Congenital Hypothyroidism', 'Meningitis'] },
      { id: 'peds_genet', title: 'Genetics', subtopics: ['Down Syndrome', 'Turner/Klinefelter', 'Glycogen Storage Diseases', 'Inborn Errors of Metabolism'] },
    ]
  },
  {
    id: 'ortho',
    title: 'Orthopedics',
    icon: Bone,
    color: 'from-stone-500 to-stone-700',
    bg: 'bg-stone-500/10',
    topics: [
      { id: 'ortho_trauma', title: 'Trauma', subtopics: ['Fracture Healing', 'Compartment Syndrome', 'Shoulder Dislocation', 'Upper Limb # (Colles/Supracondylar)', 'Hip Fractures', 'Knee Injuries (ACL/Meniscus)'] },
      { id: 'ortho_inf', title: 'Infections', subtopics: ['Acute/Chronic Osteomyelitis', 'TB Spine (Pott\'s)', 'TB Hip/Knee'] },
      { id: 'ortho_tumor', title: 'Bone Tumors', subtopics: ['Osteosarcoma', 'Ewing\'s Sarcoma', 'Giant Cell Tumor', 'Multiple Myeloma'] },
      { id: 'ortho_ped', title: 'Pediatric Ortho', subtopics: ['CTEV (Clubfoot)', 'DDH', 'Perthes Disease', 'SCFE'] },
      { id: 'ortho_neuro', title: 'Nerve Injuries', subtopics: ['Radial/Ulnar/Median Nerve Palsies', 'Erb\'s/Klumpke\'s Palsy'] },
    ]
  },
  {
    id: 'ent',
    title: 'ENT',
    icon: Ear,
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-500/10',
    topics: [
      { id: 'ent_ear', title: 'Ear', subtopics: ['Audiometry (Tuning Forks)', 'CSOM (Safe/Unsafe)', 'Otosclerosis', 'Meniere\'s Disease', 'Facial Nerve Palsy', 'Acoustic Neuroma'] },
      { id: 'ent_nose', title: 'Nose', subtopics: ['Epistaxis', 'Rhinitis/Sinusitis', 'Nasal Polyps', 'Angiofibroma', 'Deviated Septum (DNS)', 'CSF Rhinorrhea'] },
      { id: 'ent_throat', title: 'Throat', subtopics: ['Tonsillitis/Adenoids', 'Deep Neck Space Infections', 'Vocal Cord Palsy', 'Laryngeal Carcinoma', 'Tracheostomy'] },
    ]
  },
  {
    id: 'ophtha',
    title: 'Ophthalmology',
    icon: Eye,
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-500/10',
    topics: [
      { id: 'eye_lens', title: 'Lens & Retina', subtopics: ['Cataract (Types/Surgery)', 'Diabetic Retinopathy', 'Retinal Detachment', 'Hypertensive Retinopathy', 'ARMD'] },
      { id: 'eye_cornea', title: 'Cornea/Conjunctiva', subtopics: ['Conjunctivitis (Viral/Bact)', 'Corneal Ulcers (Fungal/Bact)', 'Keratoplasty', 'Vitamin A Deficiency', 'Trachoma'] },
      { id: 'eye_neuro', title: 'Neuro/Misc', subtopics: ['Glaucoma (Open/Closed)', 'Optic Neuritis', 'Papilledema', 'Refractive Errors', 'Squint/Amblyopia', 'Uveitis'] },
    ]
  },
  {
    id: 'skin',
    title: 'Dermatology',
    icon: Activity,
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-500/10',
    topics: [
      { id: 'skin_inf', title: 'Infections', subtopics: ['Pyoderma/Impetigo', 'Scabies & Pediculosis', 'Leprosy (Classification/Rx)', 'Cutaneous TB', 'Fungal (Tinea/Candida)', 'Viral (Herpes/Warts)'] },
      { id: 'skin_std', title: 'STDs', subtopics: ['Syphilis', 'Gonorrhea', 'Chancroid', 'LGV/Donovanosis', 'Syndromic Mgmt'] },
      { id: 'skin_non', title: 'Non-Infectious', subtopics: ['Psoriasis', 'Lichen Planus', 'Pemphigus vs Pemphigoid', 'Acne Vulgaris', 'Vitiligo', 'Eczema/Dermatitis'] },
    ]
  },
  {
    id: 'psych',
    title: 'Psychiatry',
    icon: Brain,
    color: 'from-violet-500 to-fuchsia-500',
    bg: 'bg-violet-500/10',
    topics: [
      { id: 'psych_major', title: 'Major Disorders', subtopics: ['Schizophrenia', 'Depression', 'Bipolar Disorder (Mania)', 'Delusional Disorders'] },
      { id: 'psych_neuro', title: 'Neurotic/Stress', subtopics: ['Anxiety Disorders (GAD/Panic)', 'OCD', 'PTSD', 'Somatoform Disorders'] },
      { id: 'psych_addict', title: 'Substance Use', subtopics: ['Alcohol (Dependence/Withdrawal)', 'Opioids', 'Cannabis', 'Tobacco'] },
      { id: 'psych_misc', title: 'Misc', subtopics: ['Sleep Disorders', 'Eating Disorders', 'ECT Indications', 'Psychopharmacology (Lithium/Antipsychotics)'] },
    ]
  },
  {
    id: 'radio',
    title: 'Radiology',
    icon: Zap,
    color: 'from-gray-400 to-slate-500',
    bg: 'bg-gray-500/10',
    topics: [
      { id: 'rad_basic', title: 'Basics', subtopics: ['X-ray Physics', 'CT Hounsfield Units', 'MRI Sequences (T1/T2)', 'USG Basics', 'Radiation Safety'] },
      { id: 'rad_clin', title: 'Clinical', subtopics: ['CXR Signs (Silhouette etc)', 'Barium Studies', 'IVP', 'Neuroradiology (Stroke/Bleed)', 'Emergency USG (FAST)'] },
      { id: 'rad_rx', title: 'Radiotherapy', subtopics: ['Teletherapy', 'Brachytherapy', 'Isotopes in Medicine'] },
    ]
  },
  {
    id: 'anes',
    title: 'Anesthesia',
    icon: Syringe,
    color: 'from-teal-400 to-emerald-500',
    bg: 'bg-teal-500/10',
    topics: [
      { id: 'anes_gen', title: 'General', subtopics: ['Pre-anesthetic Checkup (ASA)', 'IV Agents (Propofol/Ketamine)', 'Inhalational Agents', 'Muscle Relaxants'] },
      { id: 'anes_proc', title: 'Procedures', subtopics: ['Endotracheal Intubation', 'Spinal vs Epidural', 'Breathing Circuits', 'CPR (BLS/ACLS)', 'Oxygen Therapy'] },
    ]
  },
  {
    id: 'psm',
    title: 'PSM (Community Med)',
    icon: ShieldAlert,
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-500/10',
    topics: [
      { id: 'psm_epi', title: 'Epidemiology', subtopics: ['Triad', 'Study Designs (Case Control/Cohort)', 'Screening (Sens/Spec/PPV)', 'Bias & Confounding', 'Investigation of Epidemic'] },
      { id: 'psm_stats', title: 'Biostats', subtopics: ['Normal Distribution', 'Central Tendency', 'Sampling Methods', 'Tests of Sig (T-test/Chi-sq)', 'Data Presentation'] },
      { id: 'psm_prog', title: 'National Programs', subtopics: ['NTEP (TB)', 'NVBDCP (Vector Borne)', 'RCH & Family Planning', 'NLEP (Leprosy)', 'NACP (HIV)', 'Immunization Schedule (NIS)'] },
      { id: 'psm_env', title: 'Health & Env', subtopics: ['Water Purification', 'Air Pollution', 'Biomedical Waste Mgmt', 'Entomology (Vectors)'] },
      { id: 'psm_misc', title: 'Misc', subtopics: ['Nutrition (Dietary Goals)', 'Demography & Indicators', 'Occupational Health', 'International Health (WHO)', 'Health Admin'] },
    ]
  },

  // ==============================================================
  // 2. PRE-CLINICAL SUBJECTS
  // ==============================================================
  {
    id: 'anat',
    title: 'Anatomy',
    icon: Bone,
    color: 'from-red-500 to-rose-600',
    bg: 'bg-red-500/10',
    topics: [
      { id: 'anat_gen', title: 'General', subtopics: ['Epithelium Types', 'Connective Tissue', 'Bone Ossification', 'Joint Classifications'] },
      { id: 'anat_upper', title: 'Upper Limb', subtopics: ['Brachial Plexus', 'Rotator Cuff', 'Axilla Boundaries/Contents', 'Spaces of Hand', 'Nerve Injuries (Claw hand)'] },
      { id: 'anat_lower', title: 'Lower Limb', subtopics: ['Femoral Triangle', 'Adductor Canal', 'Knee Joint (Cruciates/Menisci)', 'Arches of Foot', 'Sciatic/Peroneal Nerves', 'Trendelenburg Sign'] },
      { id: 'anat_thorax', title: 'Thorax', subtopics: ['Mediastinum Divisions', 'Coronary Arteries', 'Bronchopulmonary Segments', 'Diaphragm Apertures', 'Azygos System', 'Fetal Circulation'] },
      { id: 'anat_abd', title: 'Abdomen', subtopics: ['Inguinal Canal', 'Peritoneum & Pouches', 'Celiac/SMA/IMA Trunks', 'Portocaval Anastomoses', 'Liver Segments', 'Rectus Sheath'] },
      { id: 'anat_pelvis', title: 'Pelvis/Perineum', subtopics: ['Uterus Supports', 'Ischiorectal Fossa', 'Pudendal Canal', 'Prostate Zones', 'Urethra'] },
      { id: 'anat_head', title: 'Head & Neck', subtopics: ['Cavernous Sinus', 'Scalp Layers', 'Triangles of Neck', 'Parotid Gland', 'TMJ', 'Larynx Muscles/Nerves', 'Pharyngeal Arches'] },
      { id: 'anat_neuro', title: 'Neuroanatomy', subtopics: ['Circle of Willis', 'Brainstem Sections (Rule of 4)', 'Cranial Nerve Nuclei', 'Thalamic Nuclei', 'Basal Ganglia', 'CSF Flow & Ventricles'] },
      { id: 'anat_emb', title: 'Embryology', subtopics: ['Placenta/Membranes', 'Derivatives of Germ Layers', 'Heart Development', 'Gut Rotation', 'Urogenital Development'] },
    ]
  },
  {
    id: 'physio',
    title: 'Physiology',
    icon: Activity,
    color: 'from-blue-500 to-sky-600',
    bg: 'bg-blue-500/10',
    topics: [
      { id: 'phys_gen', title: 'General/Nerve', subtopics: ['Transport Mechanisms', 'Body Fluids', 'Action Potential', 'Sarcomere', 'E-C Coupling'] },
      { id: 'phys_blood', title: 'Blood', subtopics: ['RBC/Erythropoiesis', 'Hemoglobin Curve', 'Immunity types', 'Clotting Cascade'] },
      { id: 'phys_cvs', title: 'CVS', subtopics: ['Cardiac Cycle', 'ECG Vectors', 'Cardiac Output Regulation', 'BP Regulation (Baroreceptors)', 'Shock Physics'] },
      { id: 'phys_resp', title: 'Respiratory', subtopics: ['Lung Volumes/Capacities', 'V/Q Mismatch', 'Oxygen Transport', 'Hypoxia Types', 'Regulation of Respiration'] },
      { id: 'phys_renal', title: 'Renal', subtopics: ['GFR Determinants', 'Counter Current Mech', 'RAAS System', 'Acid-Base Balance', 'Micturition Reflex'] },
      { id: 'phys_git', title: 'GIT', subtopics: ['Gastric Acid Secretion', 'Pancreatic Enzymes', 'GI Hormones', 'Bile Salts', 'Deglutition'] },
      { id: 'phys_endo', title: 'Endocrinology', subtopics: ['Pituitary Hormones', 'Thyroid Synthesis', 'Adrenal Steroids', 'Calcium (PTH/Vit D)', 'Insulin/Glucagon'] },
      { id: 'phys_cns', title: 'CNS/Special Senses', subtopics: ['Synapse', 'Ascending/Descending Tracts', 'Cerebellum', 'Basal Ganglia', 'Sleep Cycles', 'Visual Pathway', 'Auditory Pathway'] },
    ]
  },
  {
    id: 'biochem',
    title: 'Biochemistry',
    icon: FlaskConical,
    color: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-500/10',
    topics: [
      { id: 'bio_carb', title: 'Carbohydrates', subtopics: ['Glycolysis & Regulation', 'TCA Cycle', 'HMP Shunt', 'Glycogen Storage Diseases', 'Gluconeogenesis'] },
      { id: 'bio_prot', title: 'Proteins', subtopics: ['Amino Acids (Essential/Non)', 'Urea Cycle', 'Protein Structure', 'Enzyme Kinetics (Km/Vmax)', 'Collagen/Heme Synthesis'] },
      { id: 'bio_lip', title: 'Lipids', subtopics: ['Beta Oxidation', 'Ketogenesis', 'Cholesterol Synthesis', 'Lipoproteins', 'Lipid Storage Diseases'] },
      { id: 'bio_vit', title: 'Vitamins', subtopics: ['Fat Soluble (A,D,E,K)', 'Water Soluble (B1, B2, B3, B12, C)', 'Deficiency Diseases'] },
      { id: 'bio_mol', title: 'Molecular Bio', subtopics: ['DNA Replication', 'Transcription', 'Translation', 'Mutations/Repair', 'PCR & Blotting Techniques'] },
      { id: 'bio_clin', title: 'Clinical', subtopics: ['Electron Transport Chain', 'Porphyrias', 'Jaundice Types', 'Liver Function Tests'] },
    ]
  },

  // ==============================================================
  // 3. PARA-CLINICAL SUBJECTS
  // ==============================================================
  {
    id: 'patho',
    title: 'Pathology',
    icon: Microscope,
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-500/10',
    topics: [
      { id: 'path_gen', title: 'General Path', subtopics: ['Cell Injury (Necrosis/Apoptosis)', 'Inflammation (Acute/Chronic)', 'Wound Healing', 'Hemodynamics (Shock/Thrombosis)', 'Neoplasia (Markers/Genes)', 'Genetics (Downs/Turners)'] },
      { id: 'path_hem', title: 'Hematology', subtopics: ['Anemias (Iron, Mega, Hemo)', 'Leukemias (AML, ALL, CML, CLL)', 'Lymphomas (Hodgkins/Non)', 'Bleeding Disorders'] },
      { id: 'path_sys1', title: 'Systemic I', subtopics: ['CVS (MI, RHD, Endocarditis)', 'Resp (COPD, TB, Tumors)', 'Renal (Nephritic vs Nephrotic)', 'GIT (IBD, Polyps, CA)'] },
      { id: 'path_sys2', title: 'Systemic II', subtopics: ['Liver (Cirrhosis, Hepatitis)', 'Breast (Fibroadenoma, CA)', 'Bone Tumors', 'CNS Tumors', 'Thyroid Cancers', 'Amyloidosis'] },
      { id: 'path_clin', title: 'Clinical Path', subtopics: ['Urine Analysis', 'Blood Banking', 'FNAC/Biopsy Basics'] },
    ]
  },
  {
    id: 'pharm',
    title: 'Pharmacology',
    icon: Pill,
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-500/10',
    topics: [
      { id: 'pharm_gen', title: 'General', subtopics: ['Pharmacokinetics (ADME)', 'Dynamics (Receptors/Potency)', 'Clinical Trials Phases', 'Teratogenicity', 'Antidotes'] },
      { id: 'pharm_ans', title: 'ANS', subtopics: ['Cholinergics (Organophosphates)', 'Anticholinergics (Atropine)', 'Sympathomimetics', 'Alpha/Beta Blockers', 'Glaucoma Drugs'] },
      { id: 'pharm_cvs', title: 'CVS/Renal', subtopics: ['Diuretics', 'Anti-Hypertensives', 'Heart Failure', 'Anti-Arrhythmics', 'Anti-Anginal (Nitrates)'] },
      { id: 'pharm_cns', title: 'CNS', subtopics: ['General Anesthetics', 'Anti-Epileptics', 'Anti-Psychotics', 'Anti-Depressants', 'Opioids', 'Parkinsons Drugs'] },
      { id: 'pharm_micro', title: 'Antimicrobials', subtopics: ['Cell Wall (Penicillins/Ceph)', 'Protein Synth (Macro/Amino)', 'Anti-TB (ATT)', 'Anti-Viral (HIV/Hep)', 'Anti-Fungal', 'Anti-Malarial'] },
      { id: 'pharm_misc', title: 'Misc', subtopics: ['Autacoids (Antihistamines)', 'Diabetes/Thyroid Drugs', 'Chemotherapy Classes', 'Immunosuppressants'] },
    ]
  },
  {
    id: 'micro',
    title: 'Microbiology',
    icon: Biohazard,
    color: 'from-lime-500 to-green-600',
    bg: 'bg-lime-500/10',
    topics: [
      { id: 'micro_bact', title: 'Bacteriology', subtopics: ['Staph/Strep', 'Mycobacterium TB', 'Clostridium', 'Enterobacteriaceae (E.coli/Salm)', 'Vibrio/Pseudomonas', 'Spirochetes (Syphilis)', 'Rickettsia'] },
      { id: 'micro_vir', title: 'Virology', subtopics: ['Herpes Family', 'Hepatitis Viruses', 'HIV', 'Influenza/Rabies', 'Arboviruses (Dengue/Chik)', 'Corona/Polio'] },
      { id: 'micro_par', title: 'Parasitology', subtopics: ['Malaria', 'Amoeba/Giardia', 'Leishmania', 'Helminths (Round/Tape/Flukes)'] },
      { id: 'micro_myc', title: 'Mycology', subtopics: ['Candida/Cryptococcus', 'Dermatophytes', 'Opportunistic Fungi (Mucor/Aspergillus)'] },
      { id: 'micro_imm', title: 'Immunology', subtopics: ['Hypersensitivity Types', 'MHC Classes', 'Complement System', 'Vaccines (Types)', 'Antigen-Antibody Reactions'] },
    ]
  },
  {
    id: 'fmt',
    title: 'Forensic Medicine',
    icon: Ghost,
    color: 'from-slate-400 to-gray-500',
    bg: 'bg-slate-500/10',
    topics: [
      { id: 'fmt_law', title: 'Legal', subtopics: ['Inquest types', 'Courts & Powers', 'Medical Negligence', 'Consent', 'Hippocratic Oath'] },
      { id: 'fmt_ident', title: 'Identification', subtopics: ['Race/Sex/Age Determination', 'Dactylography', 'Teeth/Dentition'] },
      { id: 'fmt_than', title: 'Thanatology', subtopics: ['Changes after death', 'PM Lividity/Rigor Mortis', 'Putrefaction', 'Adipocere/Mummification'] },
      { id: 'fmt_trauma', title: 'Traumatology', subtopics: ['Mechanical Injuries', 'Firearm Injuries', 'Thermal Injuries', 'Regional Injuries'] },
      { id: 'fmt_tox', title: 'Toxicology', subtopics: ['Corrosives', 'Metallic (Arsenic/Lead)', 'Plant (Datura/Strych)', 'Snake/Scorpion', 'Alcohol', 'Opioids'] },
      { id: 'fmt_sex', title: 'Sexual Jurisprudence', subtopics: ['Rape examination', 'Virginsity signs', 'Pregnancy/Delivery signs', 'Sexual offenses'] },
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
      
      {/* Subtle glow effect on hover */}
      {!isCompleted && <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}
    </div>
  );
};

const SubjectCard = ({ subject, progress, expandedSubjects, expandedTopics, toggleSubject, toggleTopic, toggleProgress }: any) => {
    const isExpanded = expandedSubjects[subject.id];
    
    // Calculate progress
    const totalSubtopics = subject.topics.reduce((acc: number, topic: any) => acc + topic.subtopics.length, 0);
    const completedInSubject = subject.topics.reduce((acc: number, topic: any) => {
      return acc + topic.subtopics.reduce((tAcc: number, sub: string) => {
        const uid = `${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`;
        return tAcc + (progress[uid] ? 1 : 0);
      }, 0);
    }, 0);
    const percent = totalSubtopics === 0 ? 0 : Math.round((completedInSubject / totalSubtopics) * 100);

    const SubjectIcon = subject.icon;

    return (
        <div className={`
            group relative overflow-hidden rounded-2xl border transition-all duration-300
            ${isExpanded ? 'bg-gray-800/80 border-gray-600 shadow-2xl ring-1 ring-gray-700' : 'bg-gray-800/40 border-white/5 hover:border-white/10 hover:bg-gray-800/60 hover:shadow-xl'}
            backdrop-blur-sm
        `}>
            {/* Header Section */}
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
                        {percent}% Done
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

            {/* Accordion Body */}
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

  // Stats calculation
  const totalTasks = SYLLABUS.reduce((acc, subj) => acc + subj.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0), 0);
  const completedTasks = Object.values(progress).filter(Boolean).length;
  const totalPercentage = Math.round((completedTasks / totalTasks) * 100) || 0;

  if (!mounted) return <div className="min-h-screen bg-[#0F111A] flex items-center justify-center"><Loader2 className="w-8 h-8 text-indigo-500 animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-[#0F111A] text-gray-100 font-sans selection:bg-indigo-500/30">
      
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Header / Dashboard */}
      <div className="relative pt-12 pb-8 px-4 md:px-8 border-b border-white/5 bg-[#0F111A]/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-indigo-400 mb-2 font-mono text-xs tracking-wider uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>FMGE Horizon</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                        Detailed Syllabus
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-lg">
                        Clinical first, then Pre & Para-Clinical. Comprehensive coverage for FMGE/NEET-PG.
                    </p>
                </div>

                {/* Main Stats Card */}
                <div className="flex gap-4">
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
      </div>

      {/* Grid Content */}
      <main className="relative max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SYLLABUS.map((subject) => (
                <SubjectCard 
                    key={subject.id} 
                    subject={subject} 
                    progress={progress} 
                    expandedSubjects={expandedSubjects}
                    expandedTopics={expandedTopics}
                    {...handlers}
                />
            ))}
        </div>

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