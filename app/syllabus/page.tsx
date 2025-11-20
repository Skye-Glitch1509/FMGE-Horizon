"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Stethoscope, ChevronDown, ChevronRight, CheckCircle2, Circle, 
  Scissors, Baby, Bone, Ear, Eye, Activity, Brain, Zap, Syringe, 
  ShieldAlert, FlaskConical, Microscope, Pill, Biohazard, Ghost, 
  Loader2, BookOpen, Award, Target, Home, Calendar
} from 'lucide-react';

const SYLLABUS = [
  // CLINICAL SUBJECTS
  {
    id: 'med',
    category: 'Clinical Subjects',
    title: 'General Medicine',
    icon: Stethoscope,
    color: '#60a5fa',
    topics: [
      { id: 'med_cardio', title: 'Cardiology', subtopics: [
        'Cardiac tamponade', 'Hyperkalemia', 'Aortic dissection*', 'Myocardial infarction, Treatment*', 'Constructive pericarditis', 'WPW syndrome', 'Infective endocarditis*', 'Heart failure', 'JVP*', 'ECG basics, Stroke*', 'QT Interval changes*'
      ]},
      { id: 'med_resp', title: 'Respiratory', subtopics: [
        'Squamous cell carcinoma lung', 'Tension Pneumothorax*', 'Pneumonia**', 'Asbestosis, silicosis*', 'Pulmonary embolism', 'Pleural effusion**', 'Bronchiectasis', 'Cryptic TB', 'Cystic fibrosis*', 'Hemoptysis', 'Respiratory failure'
      ]},
      { id: 'med_neuro', title: 'Neurology', subtopics: [
        'Epilepsy (drug of choice)**', 'Glasgow coma scale*', 'Brain hemorrhages*', 'Meningitis (bacterial, viral, TB, fungal, cryptococcal)**', 'Guillain Barre syndrome', 'Charcot Marie tooth disease', 'Cerebral malaria', 'Alzheimer disease', 'Pseudotumor cerebri', 'Kartagener syndrome'
      ]},
      { id: 'med_nephro', title: 'Nephrology', subtopics: [
        'PSGN*', 'Amyloidosis*', 'Good pasture syndrome', 'ADPKD'
      ]},
      { id: 'med_git', title: 'Gastroenterology', subtopics: [
        'Hepatitis B*', 'Ascites', 'MELD score', 'Crohn\'s disease, ulcerative colitis*', 'CHILD PUGH score', 'Congenital hyperbilirubinemia, Dublin syndrome', 'Budd chiari syndrome', 'Liver cirrhosis*', 'Sicca syndrome'
      ]},
      { id: 'med_endo', title: 'Endocrinology', subtopics: [
        'Acromegaly', 'Glucagonoma, insulinoma, VIPOma, gastrinoma*', 'Diabetes mellitus, Diabetic ketoacidosis**', 'Pheochromocytoma*', 'Hyperthyroidism, hypothyroidism*', 'Graves disease', 'Medullary thyroid carcinoma, papillary thyroid carcinoma*', 'Conn\'s syndrome', 'Delphian nodes', 'Ectopic ACTH secreting tumor', 'Hypercarbia', 'Primary Familial hypercholesterolemia'
      ]},
      { id: 'med_inf', title: 'Infectious Dis', subtopics: [
        'HIV', 'Anemia presentations'
      ]},
      { id: 'med_rheum', title: 'Rheumatology', subtopics: [
        'Wegener\'s granulomatosis', 'Sarcoidosis*', 'Ankylosing spondylitis*', 'Gout*', 'Dermatomyositis'
      ]},
      { id: 'med_hema', title: 'Hematology & Oncology', subtopics: [
        'Multiple myeloma**', 'Leukemias**', 'Von Willebrand disease', 'Chronic granulomatous disease'
      ]}
    ]
  },
  {
    id: 'surg',
    category: 'Clinical Subjects',
    title: 'General Surgery',
    icon: Scissors,
    color: '#fb923c',
    topics: [
      { id: 'surg_gen', title: 'General Principles', subtopics: [
        'Cannula', 'Suture classification', 'Causes of Post operative fever', 'SIRS, Sepsis, SOFA', 'GCS*'
      ]},
      { id: 'surg_shock', title: 'Shock & Resuscitation', subtopics: [
        'Hypovolemic shock, neurogenic shock*', 'Massive blood transfusion*', 'ATLS resuscitation guidelines'
      ]},
      { id: 'surg_trauma', title: 'Trauma', subtopics: [
        'Blunt trauma abdomen*', 'Thoracic trauma', 'Pneumothorax*', 'Brain hemorrhages*', 'RTA cases*', 'Burns*'
      ]},
      { id: 'surg_head', title: 'Head & Neck Pathology', subtopics: [
        'Ranula, Cystic hygroma, dermoid cyst, thyroglossal cyst', 'Wartin\'s tumor, Adenoid Cystic carcinoma'
      ]},
      { id: 'surg_ulcers', title: 'Ulcers & Wounds', subtopics: [
        'Venous ulcer, arterial ulcer, neuropathic ulcer, marjolin\'s ulcer*', 'Wound healing*', 'Keloid, hypertrophic scar*', 'Necrotising fasciitis', 'Gangrene', 'Refeeding syndrome'
      ]},
      { id: 'surg_breast', title: 'Breast Surgery', subtopics: [
        'Breast surgery, classification of cancer, Rx, abscess*'
      ]},
      { id: 'surg_thyroid', title: 'Thyroid & Endocrine Surgery', subtopics: [
        'Goitre, Thyroid surgery, hyperparathyroidism', 'Graves disease, hypothyroidism, hashimoto thyroiditis*', 'Papillary, medullary thyroid cancer*', 'Pheochromocytoma*', 'Carcinoid tumors*'
      ]},
      { id: 'surg_esoph', title: 'Esophageal Surgery', subtopics: [
        'Carcinoma esophagus', 'GERD', 'Barrett\'s esophagus*', 'Zenker diverticulum*', 'Achalasia Cardia', 'Diffuse esophageal spasm*', 'Mallory Weiss tear', 'Esophageal varices', 'CHILD PUGH Score'
      ]},
      { id: 'surg_gastric', title: 'Gastric & Upper GI', subtopics: [
        'Congenital hypertrophic pyloric stenosis*', 'Peptic ulcer', 'Gastric reconstruction surgeries', 'Dumping syndrome', 'GIST'
      ]},
      { id: 'surg_bariatric', title: 'Bariatric Surgery', subtopics: [
        'Bariatric surgery'
      ]},
      { id: 'surg_bowel', title: 'Small Bowel & Colon', subtopics: [
        'Duodenal atresia*', 'Intussusception', 'Sigmoid volvulus', 'Meckel\'s diverticulum*', 'Hirschsprung\'s disease', 'Ileostomy, colostomy', 'Short bowel syndrome', 'Crohn\'s vs ulcerative colitis*', 'Diverticulosis'
      ]},
      { id: 'surg_appendix', title: 'Appendix & Rectum', subtopics: [
        'Acute appendicitis*', 'Anal carcinoma', 'Rectal prolapse', 'Hemorrhoids*', 'Perianal fistula'
      ]},
      { id: 'surg_hpb', title: 'Liver & Pancreas', subtopics: [
        'Liver abscess*', 'Hepatocellular carcinoma', 'MELD score', 'Gall stones*', 'Choledocholithiasis*', 'Choledochal cyst', 'Acute pancreatitis*', 'Insulinoma, gastrinoma, vipoma'
      ]},
      { id: 'surg_trans', title: 'Transplantation', subtopics: [
        'Graft rejection*', 'Graft types*', 'Organ rejection in transplant', 'Skin grafts types'
      ]},
      { id: 'surg_cns', title: 'CNS Surgery', subtopics: [
        'Astrocytomas'
      ]},
      { id: 'surg_uro', title: 'Urological Surgery', subtopics: [
        'Varicocele', 'Testicular tumors*', 'Fournier\'s gangrene**', 'Urethral trauma and radiology**', 'Renal stones, treatment and complications of treatment*', 'Renal tumors pathological classification, Wilm\'s tumor', 'BPH*'
      ]},
      { id: 'surg_hernia', title: 'Hernias & Abdominal Wall', subtopics: [
        'Hernia repair*', 'Gastroschisis vs omphalocele', 'Mesh repairs'
      ]},
      { id: 'surg_vasc', title: 'Vascular Surgery', subtopics: [
        'DVT, varicose veins*', 'Buerger\'s disease', 'Atherosclerosis', 'Aortic dissection', 'Raynaud\'s phenomenon', 'Pulmonary Embolism', 'Lymphatic filariasis', 'Lymphangiosarcoma', 'SVC vs IVC compression'
      ]},
      { id: 'surg_onco', title: 'Surgical Oncology', subtopics: [
        'Malignant melanoma'
      ]},
      { id: 'surg_misc', title: 'Miscellaneous', subtopics: [
        'Lung collapse', 'Pseudomyxoma peritonei and mucinous cystadenoma', 'MEN syndrome*', 'Instruments-images', 'INR values for surgery basic', 'Boyd\'s classification', 'Parotid surgery basics'
      ]}
    ]
  },
  {
    id: 'obgyn',
    category: 'Clinical Subjects',
    title: 'OBGYN',
    icon: Baby,
    color: '#f472b6',
    topics: [
      { id: 'obs_normal', title: 'Normal Pregnancy & ANC', subtopics: [
        'Amniotic fluid amount changes in pregnancy', 'Pelvic inlet', 'Type of pelvis*', 'Anticoagulation in pregnancy'
      ]},
      { id: 'obs_placenta', title: 'Placental Pathology', subtopics: [
        'Abruption placenta*', 'Placenta previa', 'Placenta accreta'
      ]},
      { id: 'obs_disorders', title: 'Pregnancy-Induced Disorders', subtopics: [
        'HTN in pregnancy*', 'HELLP syndrome'
      ]},
      { id: 'obs_molar', title: 'Molar Pregnancy & Abortion', subtopics: [
        'Complete mole*', 'MTP*', 'Post partum hemorrhage*'
      ]},
      { id: 'obs_labor', title: 'Labor & Delivery', subtopics: [
        'Leopold maneuver', 'Pinard\'s maneuver', 'C section Indications and contraindications', 'Uterus rupture', 'Uterus inversion', 'Shoulder Dystocia', 'Down syndrome screening'
      ]},
      { id: 'obs_ectopic', title: 'Ectopic & Early Pregnancy Loss', subtopics: [
        'Ectopic pregnancy*'
      ]},
      { id: 'obs_postpartum', title: 'Postpartum', subtopics: [
        'Puerperal Pyrexia', 'Anti D protocol in Rh Babies and mother', 'Milk formation physiology'
      ]},
      { id: 'gyn_contra', title: 'Contraception & Sterilization', subtopics: [
        'Contraception choice in different situations*', 'Twins', 'Emergency contraception*', 'IUCD, COC*', 'Sterilization*'
      ]},
      { id: 'gyn_infert', title: 'Infertility & Assisted Reproduction', subtopics: [
        'Infertility causes, azoospermia', 'Sperm pathway basic physiology'
      ]},
      { id: 'gyn_disorders', title: 'Gynecological Disorders', subtopics: [
        'PCOD*', 'Amenorrhea*', 'Fibroids', 'Endometriosis', 'Adenomyosis', 'Ovarian cyst', 'Ovarian Torsion', 'Uterus prolapse and POP Q classification*', 'Incompetent cervix', 'Septate uterus, bicornuate uterus', 'Imperforated hymen', 'Hydrosalpinx', 'Urinary fistula', 'Stress urinary incontinence', 'Genital TB', 'Bacterial vaginosis, trichomoniasis, candidiasis*'
      ]},
      { id: 'gyn_onco', title: 'Gynecological Oncology', subtopics: [
        'Carcinoma cervix*'
      ]},
      { id: 'gyn_fetal', title: 'Fetal & Pregnancy Complications', subtopics: [
        'Aneuploidy', 'Folic acid doses'
      ]},
      { id: 'gyn_instr', title: 'Instruments & Anatomy', subtopics: [
        'Instruments', 'Components of Placenta'
      ]},
      { id: 'gyn_lap', title: 'Laproscopic Surgery', subtopics: [
        'Laproscopic hysterectomy'
      ]}
    ]
  },
  {
    id: 'peds',
    category: 'Clinical Subjects',
    title: 'Pediatrics',
    icon: Baby,
    color: '#22d3ee',
    topics: [
      { id: 'peds_growth', title: 'Growth & Development', subtopics: [
        'WHO growth charts', 'Short stature causes and definition', 'Dentition', 'Development milestones', 'Down syndrome, turner syndrome'
      ]},
      { id: 'peds_neo', title: 'Neonatology', subtopics: [
        'Neonates classification', 'Neonatal reflexes*', 'Neonatal resuscitation*', 'APGAR score', 'Neonatal sepsis'
      ]},
      { id: 'peds_nutr', title: 'Feeding & Nutrition', subtopics: [
        'Breast feeding', 'Kwashiorkor, Marasmus', 'Severe acute malnutrition*', 'Vitamin A deficiency**'
      ]},
      { id: 'peds_fluid', title: 'Fluid & Electrolyte', subtopics: [
        'Fluid resuscitation in child**'
      ]},
      { id: 'peds_meta', title: 'Metabolic Disorders', subtopics: [
        'Alkaptonuria', 'Maple syrup urine disease', 'Wilson\'s disease*'
      ]},
      { id: 'peds_immun', title: 'Immunization & Prevention', subtopics: [
        'Immunization schedule**', 'Hepatitis B vaccine, measles vaccine', 'Chicken pox*', 'Measles*', 'Mumps'
      ]},
      { id: 'peds_resp', title: 'Respiratory System', subtopics: [
        'Cough, Difficulty breathing approach', 'Acute epiglottitis', 'Croup', 'Bronchiolitis'
      ]},
      { id: 'peds_git', title: 'GIT & Congenital', subtopics: [
        'Esophageal atresia', 'Diarrhea, dehydration assessment', 'Congenital diaphragmatic hernia*'
      ]},
      { id: 'peds_renal', title: 'Renal System', subtopics: [
        'PSGN, minimal change disease', 'Renal agenesis', 'PUJ obstruction, PUV'
      ]},
      { id: 'peds_neuro', title: 'Neurological', subtopics: [
        'Febrile seizures, absence seizures*', 'Rickets*', 'Scurvy*'
      ]},
      { id: 'peds_hema', title: 'Hematologic', subtopics: [
        'Hemophilia', 'Henoch Schölein purpura'
      ]},
      { id: 'peds_endo', title: 'Endocrine', subtopics: [
        'Congenital hypothyroidism', 'Cretinism'
      ]},
      { id: 'peds_other', title: 'Other Conditions', subtopics: [
        'Kawasaki disease', 'Duchenne Muscular Dystrophy', 'Anencephaly*', 'Erythema toxicum', 'IMCNI classification'
      ]}
    ]
  },
  {
    id: 'ortho',
    category: 'Clinical Subjects',
    title: 'Orthopedics',
    icon: Bone,
    color: '#a8a29e',
    topics: [
      { id: 'ortho_fracture', title: 'Fracture Healing & Types', subtopics: [
        'Stages of fracture healing', 'Splints*', 'Colle\'s fracture*', 'Scaphoid fracture*', 'Posterior and anterior hip dislocation**', 'Femur neck fractures', 'Perthes disease', 'Patella fracture', 'Bennet fracture, Bumper Fracture', 'Neuropraxia, axonotmesis, neurotmesis*'
      ]},
      { id: 'ortho_joint', title: 'Joints & Arthritis', subtopics: [
        'Scoliosis', 'Rheumatoid Arthritis*', 'Ankylosing spondylitis*', 'Charcot joint/neuropathic joint'
      ]},
      { id: 'ortho_bone', title: 'Bones & Infections', subtopics: [
        'Shoulder dislocation*', 'Nerve injuries*', 'Osteomyelitis*', 'Tile\'s classification of Pelvic fractures'
      ]},
      { id: 'ortho_metabolic', title: 'Nutritional & Metabolic', subtopics: [
        'Rickets*', 'Scurvy*', 'Fluorosis', 'Paget Disease'
      ]},
      { id: 'ortho_congenital', title: 'Congenital & Developmental', subtopics: [
        'CTEV', 'Supraspinatous tendonitis', 'Hip TB*', 'Radio ulnar synostosis'
      ]},
      { id: 'ortho_tumor', title: 'Bone Tumors & Imaging', subtopics: [
        'Bone tumor locations, X-rays*', 'Normal radiology of ankle, hip, wrist, pelvis***'
      ]}
    ]
  },
  {
    id: 'ent',
    category: 'Clinical Subjects',
    title: 'ENT',
    icon: Ear,
    color: '#c084fc',
    topics: [
      { id: 'ent_ear', title: 'Ear Disorders', subtopics: [
        'Malignant otitis externa', 'Serous otitis media', 'Mastoiditis', 'Inner ear anatomy', 'Bithermal caloric test', 'Rinne test', 'Brainstem Evoked Response Audiometry', 'Tympanometry', 'Otosclerosis', 'Glomus jugulare*', 'Meniere\'s disease**', 'Facial nerve*', 'Cochlear implants', 'Bone Anchored Hearing Aid', 'Audiogram**'
      ]},
      { id: 'ent_nose', title: 'Nose & Paranasal Sinuses', subtopics: [
        'Paranasal sinuses*', 'Nasal polyp', 'Ringertz tumor', 'Mucormycosis*', 'Septal hematoma', 'Septal perforation', 'Atrophic rhinitis', 'CSF rhinorrhea*', 'Epistaxis', 'Choanal atresia', 'Nasal bone fracture', 'Rhinophyma', 'Nasal valve', 'Nose anatomy', 'Rhinalia clausa'
      ]},
      { id: 'ent_throat', title: 'Throat & Larynx', subtopics: [
        'Epiglottis', 'Laryngocele', 'Reinke\'s Edema', 'Vocal nodules*', 'Juvenile papilloma of larynx', 'Sensory supply of larynx', 'Laryngomalacia*', 'Croup*', 'Stridor in different diseases', 'Laryngeal cancer staging', 'Tracheostomy*', 'Killian\'s dehiscence*', 'Laryngeal crepitus', 'Laryngeal cancer', 'Tonsil', 'Candidiasis, Diphtheria*', 'Quinsy', 'Fordyce spot, Leukoplakia', 'Adenoids*', 'Angiofibroma*', 'Nasopharyngeal carcinoma*', 'Ranula'
      ]},
      { id: 'ent_surgical', title: 'Surgical Procedures', subtopics: [
        'DCR Surgery*', 'Radical neck dissection', 'Endoscopy images markings'
      ]},
      { id: 'ent_audiology', title: 'Hearing & Audiology', subtopics: [
        'Ear nerve supply', 'Rhinolia clausa'
      ]}
    ]
  },
  {
    id: 'ophtha',
    category: 'Clinical Subjects',
    title: 'Ophthalmology',
    icon: Eye,
    color: '#38bdf8',
    topics: [
      { id: 'eye_orbit', title: 'Orbit & Adnexa', subtopics: [
        'Orbital cellulitis', 'Ptosis', 'Lacrimal apparatus', 'Nasolacrimal duct obstruction*', 'Marcus Gunn jaw winking syndrome', '3rd nerve palsy', 'Pre Septal cellulitis', 'Horner\'s syndrome*'
      ]},
      { id: 'eye_anterior', title: 'Anterior Segment', subtopics: [
        'Anterior uveitis*', 'Sympathetic ophthalmitis', 'Iridocyclitis', 'Congenital glaucoma, Angle closure glaucoma', 'Sicca syndrome*', 'Xerophthalmia*', 'Pterygium*', 'Trachoma*', 'Vernal catarrh', 'Cornea anatomy', 'Keratoplasty', 'Keratitis*', 'Herpes zoster ophthalmicus', 'Keratoconus*', 'Hyphema', 'Chalazion', 'Staphyloma'
      ]},
      { id: 'eye_lens', title: 'Lens', subtopics: [
        'Cataract types*', 'Cataract surgeries*', 'Subluxation of lens', 'Amblyopia*'
      ]},
      { id: 'eye_retina', title: 'Posterior Segment & Retina', subtopics: [
        'Optic neuritis*', 'Retinal detachment*', 'Diabetic retinopathy*', 'Retinitis pigmentosa', 'CMV retinitis', 'Hypertensive retinopathy', 'Amaurosis fugax'
      ]},
      { id: 'eye_glaucoma', title: 'Glaucoma', subtopics: [
        'Glaucoma drugs, Types'
      ]},
      { id: 'eye_refraction', title: 'Refraction & Strabismus', subtopics: [
        'Myopia, astigmatism', 'Normal optics and muscles functions*', 'Yoke muscles of eye', 'Muscles of eyes and functions'
      ]},
      { id: 'eye_exam', title: 'Examination & Imaging', subtopics: [
        'Opthalmoscopy', 'Tonopen, tonometer', 'Visual field defects*', 'Tanopen', 'Instruments images', 'CME'
      ]},
      { id: 'eye_trauma', title: 'Trauma & Foreign Body', subtopics: [
        'Trauma to eye (magnetic, metal)'
      ]},
      { id: 'eye_oncology', title: 'Oncology & Other', subtopics: [
        'Retinoblastoma', 'Choroidal melanoma', 'Sclerosis', 'Wilson\'s disease*'
      ]}
    ]
  },
  {
    id: 'skin',
    category: 'Clinical Subjects',
    title: 'Dermatology',
    icon: Activity,
    color: '#fb7185',
    topics: [
      { id: 'skin_structural', title: 'Structural & Genetic', subtopics: [
        'Epidermis layers'
      ]},
      { id: 'skin_autoimmune', title: 'Autoimmune & Inflammatory', subtopics: [
        'Pemphigus', 'Linear IgA disease', 'Erysipelas', 'Lichen planus*', 'Koebner\'s phenomenon', 'Psoriasis, types, treatment*', 'Xeroderma pigmentosum'
      ]},
      { id: 'skin_inf', title: 'Infections', subtopics: [
        'Pityriasis versicolor', 'Tinea infection', 'Leprosy and types*', 'Syphilis, LGV, Chancroid, Donovanosis**', 'Chickenpox*', 'Bacterial/fungal/viral infections'
      ]},
      { id: 'skin_hair', title: 'Hair & Pigmentation', subtopics: [
        'Alopecia Areata', 'Acne vulgaris', 'Melasma', 'Vitiligo'
      ]},
      { id: 'skin_drug', title: 'Drug Reactions & Dermatitis', subtopics: [
        'Fixed Drug eruptions', 'Dermatomyositis*'
      ]},
      { id: 'skin_systemic', title: 'Systemic Manifestations', subtopics: [
        'Scabies', 'Pellagra*'
      ]},
      { id: 'skin_oncology', title: 'Oncology & STDs', subtopics: [
        'Malignant melanoma', 'Anogenital warts', 'Condyloma accuminata', 'Acrodermatitis enteropathica', 'Wood lamp findings in different lesions*'
      ]}
    ]
  },
  {
    id: 'psych',
    category: 'Clinical Subjects',
    title: 'Psychiatry',
    icon: Brain,
    color: '#a78bfa',
    topics: [
      { id: 'psych_psychosis', title: 'Thought Disorders & Psychosis', subtopics: [
        'Delusions**', 'Higher mental function test', 'Schizophrenia*', 'Delusional disorder', 'Acute psychosis', 'Hallucinations'
      ]},
      { id: 'psych_affective', title: 'Affective Disorders', subtopics: [
        'Anhedonia, affective flattening, alexithymia', 'Form of thought disorders', 'Post partum blues, post partum depression*', 'Depression treatment*', 'Rapid cycling bipolar disorder, Lithium use**'
      ]},
      { id: 'psych_personality', title: 'Personality & Behavioral', subtopics: [
        'Borderline personality disorder', 'Oppositional defiant disorder vs conduct disorder'
      ]},
      { id: 'psych_anxiety', title: 'Anxiety Disorders & OCD', subtopics: [
        'Panic disorder*', 'Generalized anxiety disorder', 'Obsessive compulsive disorder*', 'Post traumatic stress disorder', 'Acute stress disorder', 'Hypochondriasis'
      ]},
      { id: 'psych_substance', title: 'Substance Abuse & Withdrawal', subtopics: [
        'Alcohol withdrawal, Wernicke\'s encephalopathy*', 'Opioid withdrawal*', 'Cocaine intoxication*'
      ]},
      { id: 'psych_childhood', title: 'Childhood & Development', subtopics: [
        'Rett\'s syndrome', 'Mental retardation', 'Specific learning disability', 'Psychosexual stages of development'
      ]},
      { id: 'psych_dementia', title: 'Dementia & Delirium', subtopics: [
        'Lewy body dementia, Delirium'
      ]},
      { id: 'psych_sexual', title: 'Sexual & Impulse', subtopics: [
        'Premature ejaculation', 'Impulse disorders'
      ]},
      { id: 'psych_eating', title: 'Eating Disorders', subtopics: [
        'Bulimia Nervosa', 'Trichobezoar*'
      ]}
    ]
  },
  {
    id: 'radio',
    category: 'Clinical Subjects',
    title: 'Radiology',
    icon: Zap,
    color: '#fbbf24',
    topics: [
      { id: 'rad_all', title: 'All Topics', subtopics: [
        'X-ray Basics', 'CT/MRI Basics', 'CXR Signs', 'FAST Scan', 'Radiation Safety'
      ]}
    ]
  },
  {
    id: 'anes',
    category: 'Clinical Subjects',
    title: 'Anesthesia',
    icon: Syringe,
    color: '#2dd4bf',
    topics: [
      { id: 'anes_general', title: 'General Anesthesia & Agents', subtopics: [
        'Halothane, isoflurane, sevoflurane, desflurane*', 'Ketamine, etomidate, propofol*', 'Malignant hyperthermia'
      ]},
      { id: 'anes_airway', title: 'Airway Management', subtopics: [
        'Mallampati grading', 'Endotracheal intubation', 'LMA'
      ]},
      { id: 'anes_monitoring', title: 'Monitoring & Hemodynamics', subtopics: [
        'Capnography graphs', 'Train of 4 response', 'Neuromuscular blocker*'
      ]},
      { id: 'anes_regional', title: 'Regional Anesthesia', subtopics: [
        'Local anesthesia*', 'Lumbar puncture, epidural anesthesia', 'Nasal Cannula, venturi mask*', 'Cannula', 'BIPAP contraindications', 'Blom singer prosthesis'
      ]},
      { id: 'anes_preop', title: 'Pre-operative', subtopics: [
        'Drugs to stop before surgery', 'Gas cylinders*', 'Vaporizers colors*'
      ]}
    ]
  },

  // PRE-CLINICAL SUBJECTS
  {
    id: 'anat',
    category: 'Pre-Clinical',
    title: 'Anatomy',
    icon: Bone,
    color: '#f87171',
    topics: [
      { id: 'anat_gen', title: 'General Anatomy', subtopics: [
        'Types of joints**', 'Ulnar, radial, median nerve injury*', 'Winging of scapula*', 'Frozen shoulder', 'Muscles of mastication', 'Muscles of arm', 'Hesselbach triangle', 'Diaphragm anatomy', 'Body planes', 'Types of epithelium in different parts'
      ]},
      { id: 'anat_regional', title: 'Regional/Systemic Anatomy', subtopics: [
        'Brain sinuses', 'Physiological areas of brain', 'CN XII (Cranial Nerve XII)', 'Lower limb muscles and nerve supply', 'Cut sections of brain markings', 'Killian\'s dehiscence', 'Gluteus muscles functions', 'Stomach arterial supply', 'Intestine blood supply*', 'Femoral triangle*', 'Knee joint', 'Tongue nerve supply*', 'Anatomical snuff box*', 'Larynx anatomy', 'Esophagus constrictions', 'Liver segments', 'Rotation of gut', 'Urethral injury*', 'Skull foramina', 'Skull anatomy'
      ]},
      { id: 'anat_emb', title: 'Embryology', subtopics: [
        'Embryological arches derivatives*', 'Anencephaly*', 'Cadaveric photos markings'
      ]}
    ]
  },
  {
    id: 'physio',
    category: 'Pre-Clinical',
    title: 'Physiology',
    icon: Activity,
    color: '#60a5fa',
    topics: [
      { id: 'phys_cellular', title: 'Cellular Physiology', subtopics: [
        'Intercellular receptors', 'GLUT transporters**', 'Facilitated diffusion', 'Active and passive transport*', 'Resting membrane potential', 'Ions absorption at different levels of nephron*'
      ]},
      { id: 'phys_resp', title: 'Respiratory System', subtopics: [
        'Ventilation', 'Pneumocytes*'
      ]},
      { id: 'phys_cvs', title: 'Cardiovascular System', subtopics: [
        'ECG basics, heart phases', 'Actin, myosin physiology, Sarcomere*'
      ]},
      { id: 'phys_blood', title: 'Blood & Immunity', subtopics: [
        'Antibodies structures', 'Haematopoiesis*'
      ]},
      { id: 'phys_renal', title: 'Renal System', subtopics: [
        'RAAS System*', 'Nephron structure*'
      ]},
      { id: 'phys_nervous', title: 'Metabolic & Nervous System', subtopics: [
        'Reflexes in body', 'Sleep cycle', 'Centers in brain*'
      ]},
      { id: 'phys_endo', title: 'Endocrine & Mineral Metabolism', subtopics: [
        'Hypocalcemia, hypercalcemia*'
      ]},
      { id: 'phys_repro', title: 'Reproductive', subtopics: [
        'Sperm analysis'
      ]},
      { id: 'phys_git', title: 'GIT', subtopics: [
        'Segmentation, peristalsis'
      ]},
      { id: 'phys_hormones', title: 'Hormones', subtopics: [
        'Oxytocin, LDH, FSH'
      ]}
    ]
  },
  {
    id: 'biochem',
    category: 'Pre-Clinical',
    title: 'Biochemistry',
    icon: FlaskConical,
    color: '#facc15',
    topics: [
      { id: 'bio_metabolic', title: 'Metabolic Disorders & Storage Diseases', subtopics: [
        'Glycolysis**', 'Galactosemia*', 'Alkaptonuria, phenylketonuria*', 'Wilson\'s disease*', 'Gaucher\'s disease*', 'Maple syrup urine disease', 'Von Gierke disease*', 'McArdle\'s disease', 'Cori cycle', 'Lysosomal storage disease*', 'Zellweger Syndrome'
      ]},
      { id: 'bio_amino', title: 'Amino Acids & Proteins', subtopics: [
        'Amino acids classification and structure', 'Collagen types, structure'
      ]},
      { id: 'bio_vitamins', title: 'Vitamins & Micronutrients', subtopics: [
        'Vitamins deficiency*', 'Vitamin B classification*', 'Vitamin A deficiency', 'Niacin deficiency and formation*'
      ]},
      { id: 'bio_lipid', title: 'Lipid & Cholesterol Metabolism', subtopics: [
        'Cholesterol synthesis', 'ETC'
      ]},
      { id: 'bio_gout', title: 'Gout & Related', subtopics: [
        'Gout'
      ]},
      { id: 'bio_molecular', title: 'Molecular Biology', subtopics: [
        'Transcription sequences', 'Rate limiting enzymes', 'CRISPER CAS 9'
      ]},
      { id: 'bio_mito', title: 'Mitochondrial', subtopics: [
        'Mitochondrial matrix'
      ]},
      { id: 'bio_glut', title: 'GLUT Disorders', subtopics: [
        'GLUTs functions'
      ]},
      { id: 'bio_uncouple', title: 'Uncouplers', subtopics: [
        'Uncouplers'
      ]}
    ]
  },

  // PARA-CLINICAL SUBJECTS
  {
    id: 'patho',
    category: 'Para-Clinical',
    title: 'Pathology',
    icon: Microscope,
    color: '#f472b6',
    topics: [
      { id: 'path_hemodynamics', title: 'Hemodynamics & Storage', subtopics: [
        'Hemochromatosis*', 'Asbestosis, silicosis, arsenic*', 'Lipofusion'
      ]},
      { id: 'path_cellular', title: 'Cell Biology & Apoptosis', subtopics: [
        'Apoptosis markers, Apoptotic bodies', 'Cyclins in cell cycle, Phases'
      ]},
      { id: 'path_tumor', title: 'Tumor Pathology', subtopics: [
        'Tumor markers', 'Carcinoma of lung Types*', 'Leukemia*', 'Multiple myeloma*', 'Burkitt\'s lymphoma*'
      ]},
      { id: 'path_blood', title: 'Blood Disorders', subtopics: [
        'Types of Anemia**', 'Sickle cell anemia, thalassemia*', 'Coagulation pathway'
      ]},
      { id: 'path_infection', title: 'Infection & Inflammation', subtopics: [
        'Giant cells in TB, Sarcoidosis, cat scratch disease*', 'Granulomas in different diseases*'
      ]},
      { id: 'path_systemic', title: 'Systemic Diseases', subtopics: [
        'Celiac disease', 'Asthma pathology*', 'Reiter syndrome'
      ]},
      { id: 'path_cns', title: 'CNS Pathology', subtopics: [
        'Meningioma, oligodendroglioma, glioblastoma', 'Alzheimer\'s vs Parkinson\'s vs chorea', 'Frontotemporal Dementia'
      ]},
      { id: 'path_endo', title: 'Endocrine Pathology', subtopics: [
        'Papillary, medullary, follicular carcinoma of thyroid*'
      ]},
      { id: 'path_genetics', title: 'Inheritance & Genetic', subtopics: [
        'Inheritance Types (AD, AR, XLD, XLR)*', 'Philadelphia chromosome'
      ]},
      { id: 'path_bone', title: 'Bone Pathology', subtopics: [
        'Osteoid osteoma, osteosarcoma'
      ]},
      { id: 'path_urinary', title: 'Urinary System', subtopics: [
        'Structure of Renal stones', 'Urine cast Types'
      ]},
      { id: 'path_other', title: 'Other Pathology', subtopics: [
        'Type of amyloid deposition*', 'Hypersensitivity Types*'
      ]},
      { id: 'path_lab', title: 'Lab & Blood Banking', subtopics: [
        'Vacutainer tubes and content', 'FNHTR', 'Bombay Blood Group'
      ]}
    ]
  },
  {
    id: 'pharm',
    category: 'Para-Clinical',
    title: 'Pharmacology',
    icon: Pill,
    color: '#4ade80',
    topics: [
      { id: 'pharm_gen', title: 'General Pharmacology', subtopics: [
        'Efficacy, potency curves*', 'Clinical drug trials'
      ]},
      { id: 'pharm_ans', title: 'Autonomic Nervous System', subtopics: [
        'Adrenaline, noradrenaline, dopamine*', 'Beta blockers', 'ACE inhibitors, ARBs, K+ sparing diuretics*'
      ]},
      { id: 'pharm_cvs', title: 'Cardiovascular Drugs', subtopics: [
        'Drugs in hypertension, pulmonary hypertension*', 'Antiplatelets, heparin, warfarin, thrombolysis indication', 'Drug of choice in shock', 'Motility reducing drugs in heart failure*'
      ]},
      { id: 'pharm_diuretics', title: 'Diuretics', subtopics: [
        'Diuretics physiology at different part of nephron*'
      ]},
      { id: 'pharm_resp', title: 'Respiratory', subtopics: [
        'SABA, LABA in asthma'
      ]},
      { id: 'pharm_git', title: 'GIT Drugs', subtopics: [
        'Proton pump inhibitors'
      ]},
      { id: 'pharm_endo', title: 'Endocrine & Metabolism', subtopics: [
        'Anti Diabetic drugs, metformin, linagliptin, semaglutide*', 'Raloxifene, action of osteoporosis treatment drugs', 'SERM, SERD', 'Gout treatment*'
      ]},
      { id: 'pharm_cns', title: 'CNS & Psychiatric Drugs', subtopics: [
        'Drug of choice in different seizures**', 'Lithium uses, doses*', 'Alcohol aversion therapy, Opioid uses*', 'Intoxication antidotes*', 'SSRI', 'Benzodiazepines'
      ]},
      { id: 'pharm_anti', title: 'Antimicrobials', subtopics: [
        'Antibiotics (penicillin uses, vancomycin, tetracyclines, aminoglycosides, fluoroquinolones)', 'TB treatment regime', 'Leprosy treatment*', 'Malaria treatment in different parts of India*', 'Amphotericin B*'
      ]},
      { id: 'pharm_toxicity', title: 'Toxicity & Adverse Effects', subtopics: [
        'Drugs causes gynecomastia, pulmonary fibrosis', 'Drugs use to treat obesity', 'Toxicity antidotes*', 'Drugs safe in pregnancy**'
      ]},
      { id: 'pharm_onco', title: 'Oncology', subtopics: [
        'Anticancer drugs actions on cell cycle', 'Breast cancer treatment drugs'
      ]},
      { id: 'pharm_inflam', title: 'Inflammatory & Infection', subtopics: [
        'Acute Rheumatic fever Treatment'
      ]}
    ]
  },
  {
    id: 'micro',
    category: 'Para-Clinical',
    title: 'Microbiology',
    icon: Biohazard,
    color: '#a3e635',
    topics: [
      { id: 'micro_gram_pos', title: 'Bacteriology - Gram Positive', subtopics: [
        'Streptococcus**', 'Staphylococcus Types, virulence factors*', 'C. Diphtheria, test for Diphtheria*'
      ]},
      { id: 'micro_gram_neg', title: 'Bacteriology - Gram Negative', subtopics: [
        'E. Coli Types*', 'Hemolytic uremic syndrome', 'Salmonella, widely tested', 'Vibrio cholera*', 'Neisseria meningitis'
      ]},
      { id: 'micro_myco', title: 'Mycobacteria', subtopics: [
        'M. TB, M. Leprae*'
      ]},
      { id: 'micro_gen', title: 'Bacterial General', subtopics: [
        'Acid fast stain', 'Gram positive and gram negative', 'Bacterial growth curve', 'Types of motility*', 'Food poisoning causes*', 'Mac-conkey agar content'
      ]},
      { id: 'micro_steril', title: 'Sterilization & Culture', subtopics: [
        'Methods of Sterilization, controls**'
      ]},
      { id: 'micro_fungi', title: 'Mycology', subtopics: [
        'Dermatophytes', 'Aspergillus vs mucormycosis', 'Blastomyces, histoplasma, coccidioidomycosis, sporotrichosis*', 'Chromoblastomycosis', 'Tinea versicolor*', 'Mycetoma', 'Mucormycosis*'
      ]},
      { id: 'micro_vir_gen', title: 'Virology - General', subtopics: [
        'Shape of different viruses', 'Inclusion bodies in viruses*', 'Classification of viruses (DNA, RNA)*'
      ]},
      { id: 'micro_vir_spec', title: 'Virology - Specific', subtopics: [
        'Molluscum contagiosum*', 'Herpes viruses classification', 'CMV, EBV*', 'Measles, Mumps, rubella*', 'Chicken pox, small pox*', 'Hepatitis B*'
      ]},
      { id: 'micro_par_proto', title: 'Parasitology - Protozoa', subtopics: [
        'Entamoeba histolytica', 'Cyclospora, cryptosporidium, isospora', 'Giardia lamblia', 'Trichomonas vaginalis**', 'Plasmodium vivax'
      ]},
      { id: 'micro_par_helm', title: 'Parasitology - Helminths', subtopics: [
        'Eggs of cestodes and nematodes slides*', 'Filariasis'
      ]}
    ]
  },
  {
    id: 'fmt',
    category: 'Para-Clinical',
    title: 'Forensic Medicine',
    icon: Ghost,
    color: '#94a3b8',
    topics: [
      { id: 'fmt_injuries', title: 'Injuries - Classification', subtopics: [
        'Artificial bruise', 'Laceration Types', 'Chop wound', 'Suture fracture, depressed fracture, pond fracture, fissure fracture, gutter fracture*'
      ]},
      { id: 'fmt_firearms', title: 'Firearms & Ballistics', subtopics: [
        'Ranges of rifled gun*', 'Bevelling Types'
      ]},
      { id: 'fmt_postmortem', title: 'Postmortem Changes', subtopics: [
        'Cadaveric spasm*', 'Rigor mortis', 'Changes in dead body due to starvation', 'Mummification'
      ]},
      { id: 'fmt_asphyxia', title: 'Asphyxial Deaths', subtopics: [
        'Hanging', 'Smothering, gagging, mugging, burking photos*', 'Diatoms test'
      ]},
      { id: 'fmt_autopsy', title: 'Autopsy', subtopics: [
        'Autopsy opening sequence', 'Techniques of organs removal in autopsy'
      ]},
      { id: 'fmt_ident', title: 'Identification', subtopics: [
        'Rule of Hasse, rule of Morrison', 'Dactylography', 'Identification of sex, female vs male pelvis'
      ]},
      { id: 'fmt_poison', title: 'Poisons & Toxicology', subtopics: [
        'Poisons and their smells', 'Poisoning (cocaine, LSD, Lead, cannabis, Ketamine)*', 'Atropa belladona', 'Cobra, viper', 'Alcohol poisoning*', 'Symptoms of morphine poisoning, cocaine intake*', 'Amanita phalloides', 'Body packer syndrome'
      ]},
      { id: 'fmt_legal', title: 'Legal & Medical Examinations', subtopics: [
        'Chemical tests (Takayama test, teichman test, Barberio test, Preciptin Test)*', 'Inquest, consent**', 'Dying declaration', 'Medical negligence*', 'Criminal abortion', 'Perversions*', 'MTP**', 'Courts of India and their powers*'
      ]},
      { id: 'fmt_blood', title: 'Blood Stains & Other', subtopics: [
        'Blood stain disinfectant', 'Signs after death'
      ]}
    ]
  },
  {
    id: 'psm',
    category: 'Para-Clinical',
    title: 'Community Medicine',
    icon: ShieldAlert,
    color: '#34d399',
    topics: [
      { id: 'psm_epi', title: 'Epidemiological Studies & Design', subtopics: [
        'Cohort study, case control study*', 'Color bags**', 'Demographic cycle**', 'Epidemic Types, graphs*', 'Epidemic dropsy', 'Screening'
      ]},
      { id: 'psm_diseases', title: 'Diseases & Control Programs', subtopics: [
        'Measles, Mumps, rubella*', 'Vaccination (BCG, OPV, Hepatitis B, Td, national immunization schedule)*', 'Rabies, leptosporosis, filariasis', 'Chicken pox, small pox*', 'Dengue, malaria vectors*', 'NLEP'
      ]},
      { id: 'psm_maternal', title: 'Maternal & Child Health', subtopics: [
        'Antenatal visits', 'SAFE Strategy in trachoma*', 'RBSK, STEP committees, JSSY, RKSK', 'Anmol program'
      ]},
      { id: 'psm_nutrition', title: 'Nutrition & Deficiencies', subtopics: [
        'Vitamins deficiency (Vit A, Niacin)*', 'Xerophthalmia*', 'Anemia mukt bharat'
      ]},
      { id: 'psm_vaccine', title: 'Vaccine Specifics', subtopics: [
        'Vaccine vial monitor', 'MMR, IMR, U5MR, SMR, CDR'
      ]},
      { id: 'psm_health', title: 'Health Programs & Systems', subtopics: [
        'MTP*', 'NHM, NPCBVI, NVBDCP', 'WHO, UNICEF'
      ]},
      { id: 'psm_comm', title: 'Communication & Health Education', subtopics: [
        'Group discussion, panel discussion, demonstration', 'Socratic vs Didactic vs Mass communication'
      ]},
      { id: 'psm_indicators', title: 'Health Indicators & Planning', subtopics: [
        'DALY', 'Civil registration system', 'TFR, GFR, GRR, NRR', 'GHI, HDI, PQLI', 'Demographic product', 'Euthenics'
      ]},
      { id: 'psm_dehydration', title: 'Dehydration & Emergency', subtopics: [
        'Dehydration treatment*'
      ]},
      { id: 'psm_workers', title: 'Community Workers', subtopics: [
        'ASHA worker'
      ]},
      { id: 'psm_public', title: 'Public Health & Sanitation', subtopics: [
        'Triage', 'Referral units', 'Sanitation methods', 'Chlorination'
      ]},
      { id: 'psm_ncd', title: 'Non-Communicable Diseases', subtopics: [
        'Coronary heart disease, HTN vs Septal defects vs Fibrillation prevalence', 'Factory Act'
      ]}
    ]
  }
];

export default function SyllabusPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('syllabus-progress');
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem('syllabus-progress', JSON.stringify(progress));
  }, [progress, mounted]);

  const toggleSubject = (id: string) => setExpandedSubjects(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleTopic = (id: string) => setExpandedTopics(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleProgress = (id: string) => setProgress(prev => ({ ...prev, [id]: !prev[id] }));

  const grouped = {
    'Clinical Subjects': SYLLABUS.filter(s => s.category === 'Clinical Subjects'),
    'Pre-Clinical': SYLLABUS.filter(s => s.category === 'Pre-Clinical'),
    'Para-Clinical': SYLLABUS.filter(s => s.category === 'Para-Clinical'),
  };

  const totalTasks = SYLLABUS.reduce((acc, subj) => acc + subj.topics.reduce((tAcc, t) => tAcc + t.subtopics.length, 0), 0);
  const completedTasks = Object.values(progress).filter(Boolean).length;
  const totalPercent = Math.round((completedTasks / totalTasks) * 100) || 0;

  if (!mounted) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a1d2e, #16182a)' }}>
      <div style={{ textAlign: 'center' }}>
        <Loader2 style={{ width: '40px', height: '40px', color: '#a855f7', margin: '0 auto 1rem' }} />
        <p style={{ color: '#9ca3af', fontSize: '14px' }}>Loading syllabus...</p>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } svg { animation: spin 1s linear infinite; }`}</style>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1d2e 0%, #16182a 50%, #1a1d2e 100%)', color: '#f3f4f6', paddingBottom: '80px' }}>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.7s ease-out;
        }
      `}</style>

      <nav style={{ borderBottom: '1px solid rgba(75, 85, 99, 0.3)', background: 'rgba(24, 25, 43, 0.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #2352a1, #43ea8f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
              FH
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#c4d7fd', letterSpacing: '-0.5px' }}>FMGE Horizon</div>
              <div style={{ fontSize: '10px', color: '#7a8194', marginTop: '-2px' }}>Syllabus Tracker</div>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link 
              href="/"
              style={{ 
                padding: '10px 18px', 
                borderRadius: '8px', 
                background: 'rgba(35, 82, 161, 0.15)', 
                border: '1px solid rgba(35, 82, 161, 0.4)', 
                color: '#2352a1',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              <Home style={{ width: '16px', height: '16px' }} />
              Home
            </Link>
            <Link 
              href="/planner"
              style={{ 
                padding: '10px 18px', 
                borderRadius: '8px', 
                background: 'rgba(67, 234, 143, 0.15)', 
                border: '1px solid rgba(67, 234, 143, 0.4)', 
                color: '#43ea8f',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              <Calendar style={{ width: '16px', height: '16px' }} />
              Planner
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 16px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <div style={{ padding: '12px', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
            <BookOpen style={{ width: '28px', height: '28px', color: '#a855f7' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', margin: 0 }}>FMGE Syllabus Tracker</h1>
            <p style={{ color: '#9ca3af', marginTop: '4px', fontSize: '14px' }}>Master all 19 subjects • Track every topic • Only High Yield Topics from Past 10 Years Papers are included in this syllabus</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1))', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '16px', padding: '24px', marginTop: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: '112px', height: '112px', flexShrink: 0 }}>
              <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(31, 41, 55, 0.5)" strokeWidth="2.5" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={totalPercent === 100 ? '#22c55e' : '#a855f7'} strokeWidth="2.5" strokeLinecap="round" strokeDasharray={`${totalPercent}, 100`} />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>{totalPercent}%</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Overall Progress
                {totalPercent === 100 && <Award style={{ width: '24px', height: '24px', color: '#facc15' }} />}
              </h2>
              <p style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '12px' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>{completedTasks}</span>
                <span style={{ color: '#9ca3af' }}> / {totalTasks} topics mastered</span>
              </p>
              <button 
                onClick={() => { if(confirm("Reset all progress?")) setProgress({}); }}
                style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
              >
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        {Object.entries(grouped).map(([category, subjects], catIndex) => (
          <div key={category} className="fade-in" style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ height: '40px', width: '6px', borderRadius: '9999px', background: category === 'Clinical Subjects' ? 'linear-gradient(to bottom, #3b82f6, #06b6d4)' : category === 'Pre-Clinical' ? 'linear-gradient(to bottom, #ef4444, #f97316)' : 'linear-gradient(to bottom, #22c55e, #10b981)' }}></div>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', margin: 0 }}>{category}</h2>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{subjects.length} subjects</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'start' }}>

              {subjects.map(subject => {
                const Icon = subject.icon;
                const total = subject.topics.reduce((acc, t) => acc + t.subtopics.length, 0);
                const completed = subject.topics.reduce((acc, topic) => {
                  return acc + topic.subtopics.filter(sub => progress[`${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`]).length;
                }, 0);
                const percent = Math.round((completed / total) * 100) || 0;
                const isExpanded = expandedSubjects[subject.id];

                return (
                  <div key={subject.id} style={{ background: `linear-gradient(135deg, ${subject.color}15, ${subject.color}10)`, border: `1px solid ${subject.color}40`, borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer' }}>
                    <div onClick={() => toggleSubject(subject.id)} style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(31, 41, 55, 0.8)' }}>
                            <Icon style={{ width: '28px', height: '28px', color: subject.color }} />
                          </div>
                          <div>
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{subject.title}</h3>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{total} Topics</p>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          {percent > 0 && (
                            <div style={{ padding: '6px 12px', borderRadius: '9999px', background: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#a855f7' }}>{percent}%</span>
                            </div>
                          )}
                          <ChevronDown style={{ width: '20px', height: '20px', color: '#9ca3af', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'none' }} />
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>
                        <span style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Target style={{ width: '14px', height: '14px' }} />
                          Progress
                        </span>
                        <span style={{ color: '#6b7280' }}>{completed}/{total}</span>
                      </div>
                      <div style={{ height: '10px', background: 'rgba(31, 41, 55, 0.7)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${percent}%`, borderRadius: '9999px', background: percent === 100 ? 'linear-gradient(to right, #22c55e, #10b981)' : 'linear-gradient(to right, #a855f7, #6366f1, #3b82f6)', transition: 'width 0.7s' }} />
                      </div>
                    </div>

                    {isExpanded && (
                      <div style={{ padding: '0 12px 12px', background: 'rgba(0, 0, 0, 0.2)' }}>
                        {subject.topics.map(topic => {
                          const isTopicExpanded = expandedTopics[topic.id];
                          const topicCompleted = topic.subtopics.filter((sub: string) => progress[`${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`]).length;
                          
                          return (
                            <div key={topic.id} style={{ marginBottom: '8px', borderRadius: '12px', overflow: 'hidden', background: 'rgba(17, 24, 39, 0.4)', border: '1px solid rgba(31, 41, 55, 0.5)' }}>
                              <div onClick={(e) => { e.stopPropagation(); toggleTopic(topic.id); }} style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'background 0.2s' }}
                                   onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                                   onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <span style={{ color: '#e5e7eb', fontWeight: 600, fontSize: '14px' }}>{topic.title}</span>
                                  {topicCompleted > 0 && (
                                    <span style={{ fontSize: '12px', fontWeight: 500, padding: '2px 8px', borderRadius: '9999px', background: 'rgba(168, 85, 247, 0.2)', color: '#d8b4fe' }}>
                                      {topicCompleted}/{topic.subtopics.length}
                                    </span>
                                  )}
                                </div>
                                <ChevronRight style={{ width: '16px', height: '16px', color: '#6b7280', transition: 'transform 0.3s', transform: isTopicExpanded ? 'rotate(90deg)' : 'none' }} />
                              </div>
                              {isTopicExpanded && (
                                <div style={{ padding: '12px' }}>
                                  {topic.subtopics.map(sub => {
                                    const uid = `${topic.id}_${sub.replace(/\s+/g, '_').toLowerCase()}`;
                                    const isCompleted = !!progress[uid];
                                    return (
                                      <div
                                        key={sub}
                                        onClick={(e) => { e.stopPropagation(); toggleProgress(uid); }}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '12px',
                                          padding: '12px',
                                          borderRadius: '8px',
                                          marginBottom: '8px',
                                          cursor: 'pointer',
                                          background: isCompleted ? 'linear-gradient(to right, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1))' : 'rgba(31, 41, 55, 0.3)',
                                          border: `1px solid ${isCompleted ? 'rgba(34, 197, 94, 0.2)' : 'transparent'}`,
                                          transition: 'all 0.2s'
                                        }}
                                        onMouseOver={(e) => { if (!isCompleted) e.currentTarget.style.background = 'rgba(55, 65, 81, 0.4)'; }}
                                        onMouseOut={(e) => { if (!isCompleted) e.currentTarget.style.background = 'rgba(31, 41, 55, 0.3)'; }}
                                      >
                                        {isCompleted ? 
                                          <CheckCircle2 style={{ width: '20px', height: '20px', color: '#22c55e', flexShrink: 0 }} /> : 
                                          <Circle style={{ width: '20px', height: '20px', color: '#4b5563', flexShrink: 0 }} />
                                        }
                                        <span style={{ fontSize: '14px', fontWeight: 500, color: isCompleted ? '#9ca3af' : '#e5e7eb', textDecoration: isCompleted ? 'line-through' : 'none' }}>{sub}</span>
                                      </div>
                                    );
                                  })}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
