(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/subjectData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quizSubjects",
    ()=>quizSubjects
]);
const quizSubjects = [
    {
        slug: 'anatomy',
        name: 'Anatomy',
        highYield: true,
        conceptual: true
    },
    {
        slug: 'physiology',
        name: 'Physiology',
        highYield: true,
        conceptual: true
    },
    {
        slug: 'biochemistry',
        name: 'Biochemistry',
        highYield: false,
        conceptual: true
    },
    {
        slug: 'pathology',
        name: 'Pathology',
        highYield: true,
        conceptual: true
    },
    {
        slug: 'pharmacology',
        name: 'Pharmacology',
        highYield: true,
        conceptual: false
    },
    {
        slug: 'microbiology',
        name: 'Microbiology',
        highYield: true,
        conceptual: false
    },
    {
        slug: 'forensic',
        name: 'Forensic Medicine',
        highYield: false,
        conceptual: false
    },
    {
        slug: 'community',
        name: 'Community Medicine',
        highYield: false,
        conceptual: true
    },
    {
        slug: 'medicine',
        name: 'General Medicine',
        highYield: true,
        conceptual: true
    },
    {
        slug: 'surgery',
        name: 'General Surgery',
        highYield: true,
        conceptual: true
    },
    {
        slug: 'pediatrics',
        name: 'Pediatrics',
        highYield: true,
        conceptual: false
    },
    {
        slug: 'obg',
        name: 'Obstetrics & Gynecology',
        highYield: true,
        conceptual: false
    },
    {
        slug: 'ophthal',
        name: 'Ophthalmology',
        highYield: false,
        conceptual: false
    },
    {
        slug: 'ent',
        name: 'ENT',
        highYield: false,
        conceptual: false
    },
    {
        slug: 'ortho',
        name: 'Orthopedics',
        highYield: false,
        conceptual: true
    },
    {
        slug: 'psychiatry',
        name: 'Psychiatry',
        highYield: true,
        conceptual: false
    },
    {
        slug: 'derma',
        name: 'Dermatology',
        highYield: false,
        conceptual: false
    },
    {
        slug: 'radiology',
        name: 'Radiology',
        highYield: false,
        conceptual: false
    },
    {
        slug: 'anesthesia',
        name: 'Anesthesiology',
        highYield: false,
        conceptual: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/quizQuestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quizQuestions",
    ()=>quizQuestions
]);
const quizQuestions = [
    // Anatomy
    {
        subject: 'anatomy',
        text: 'The medial wall of the middle ear is formed by:',
        options: [
            'Temporal bone',
            'Lateral wall of the vestibule',
            'Sphenoid bone',
            'Lateral wall of the nasopharynx'
        ],
        correctIndex: 0
    },
    {
        subject: 'anatomy',
        text: 'The main blood supply to the femoral head in adults is:',
        options: [
            'Obturator artery',
            'Lateral circumflex femoral artery',
            'Medial circumflex femoral artery',
            'Iliac artery'
        ],
        correctIndex: 2
    },
    {
        subject: 'anatomy',
        text: 'Which joint allows maximum range of movement?',
        options: [
            'Saddle joint',
            'Ball and socket joint',
            'Pivot joint',
            'Hinge joint'
        ],
        correctIndex: 1
    },
    {
        subject: 'anatomy',
        text: 'Largest organ in the human body is:',
        options: [
            'Skin',
            'Heart',
            'Lung',
            'Liver'
        ],
        correctIndex: 0
    },
    {
        subject: 'anatomy',
        text: 'The nerve supplying the posterior compartment of the arm is:',
        options: [
            'Musculocutaneous nerve',
            'Median nerve',
            'Radial nerve',
            'Ulnar nerve'
        ],
        correctIndex: 2
    },
    // Physiology
    {
        subject: 'physiology',
        text: 'Resting membrane potential is maintained by:',
        options: [
            'Calcium pump',
            'Voltage-gated potassium channels',
            'Na+-K+ ATPase pump',
            'Passive sodium influx'
        ],
        correctIndex: 2
    },
    {
        subject: 'physiology',
        text: 'Maximum oxygen consumption (VO2 max) is a measure of:',
        options: [
            'Ventilatory equivalent',
            'Cardiorespiratory fitness',
            'Anaerobic threshold',
            'Heart rate'
        ],
        correctIndex: 1
    },
    {
        subject: 'physiology',
        text: 'Main pacemaker of the heart is:',
        options: [
            'AV node',
            'Bundle of His',
            'Purkinje fibers',
            'SA node'
        ],
        correctIndex: 3
    },
    {
        subject: 'physiology',
        text: 'Main function of platelets is:',
        options: [
            'Oxygen transport',
            'Immune response',
            'Coagulation',
            'Hormone secretion'
        ],
        correctIndex: 2
    },
    {
        subject: 'physiology',
        text: 'The chloride shift (Hamburger phenomenon) occurs in:',
        options: [
            'Both tissues and lungs',
            'Liver',
            'Tissues only',
            'Lungs only'
        ],
        correctIndex: 0
    },
    // Biochemistry
    {
        subject: 'biochemistry',
        text: 'Rate-limiting enzyme in cholesterol synthesis is:',
        options: [
            'HMG-CoA reductase',
            'Mevalonate kinase',
            'HMG-CoA synthase',
            'Squalene synthase'
        ],
        correctIndex: 0
    },
    {
        subject: 'biochemistry',
        text: 'Enzyme deficiency in phenylketonuria:',
        options: [
            'Tyrosinase',
            'Phenylalanine hydroxylase',
            'DOPA decarboxylase',
            'Homogentisate oxidase'
        ],
        correctIndex: 1
    },
    {
        subject: 'biochemistry',
        text: 'Vitamin required for transamination reactions:',
        options: [
            'Riboflavin (B2)',
            'Niacin (B3)',
            'Pyridoxine (B6)',
            'Thiamine (B1)'
        ],
        correctIndex: 2
    },
    {
        subject: 'biochemistry',
        text: 'Maple syrup urine disease results from a defect in:',
        options: [
            'Phenylalanine hydroxylase',
            'Tyrosine hydroxylase',
            'Branched-chain alpha-ketoacid dehydrogenase',
            'Homogentisate oxidase'
        ],
        correctIndex: 2
    },
    {
        subject: 'biochemistry',
        text: 'Glycogen storage disease type I is due to deficiency of:',
        options: [
            'Debranching enzyme',
            'Muscle phosphorylase',
            'Glucose-6-phosphatase',
            'Liver phosphorylase'
        ],
        correctIndex: 2
    },
    // Pathology
    {
        subject: 'pathology',
        text: 'Microsatellite instability is characteristic of:',
        options: [
            'Breast cancer',
            'Leukemias',
            'Colorectal cancer',
            'Lung cancer'
        ],
        correctIndex: 2
    },
    {
        subject: 'pathology',
        text: 'First marker to increase in myocardial infarction:',
        options: [
            'LDH',
            'CK-MB',
            'Myoglobin',
            'Troponin T'
        ],
        correctIndex: 2
    },
    {
        subject: 'pathology',
        text: 'Reed-Sternberg cells are a feature of:',
        options: [
            'ALL',
            'Hodgkin lymphoma',
            'Non-Hodgkin lymphoma',
            'Multiple myeloma'
        ],
        correctIndex: 1
    },
    {
        subject: 'pathology',
        text: 'Which genetic translocation is seen in CML?',
        options: [
            't(15;17)',
            't(9;22)',
            't(8;14)',
            't(14;18)'
        ],
        correctIndex: 1
    },
    {
        subject: 'pathology',
        text: 'In nephrotic syndrome, the main urinary protein lost is:',
        options: [
            'Renin',
            'Albumin',
            'Transferrin',
            'Immunoglobulin'
        ],
        correctIndex: 1
    },
    // Pharmacology
    {
        subject: 'pharmacology',
        text: 'Drug contraindicated in children with viral infections:',
        options: [
            'Aspirin',
            'Paracetamol',
            'Diclofenac',
            'Ibuprofen'
        ],
        correctIndex: 0
    },
    {
        subject: 'pharmacology',
        text: 'Antidote for benzodiazepine overdose is:',
        options: [
            'Flumazenil',
            'Naloxone',
            'Atropine',
            'N-acetylcysteine'
        ],
        correctIndex: 0
    },
    {
        subject: 'pharmacology',
        text: 'Drug of choice for status epilepticus:',
        options: [
            'Valproic acid',
            'Phenytoin',
            'Carbamazepine',
            'Diazepam'
        ],
        correctIndex: 3
    },
    {
        subject: 'pharmacology',
        text: 'Which antibiotic causes "red man syndrome"?',
        options: [
            'Vancomycin',
            'Amikacin',
            'Linezolid',
            'Penicillin'
        ],
        correctIndex: 0
    },
    {
        subject: 'pharmacology',
        text: 'First-line anti-tubercular drug causing peripheral neuritis:',
        options: [
            'Ethambutol',
            'Rifampicin',
            'Isoniazid',
            'Pyrazinamide'
        ],
        correctIndex: 2
    },
    // Microbiology
    {
        subject: 'microbiology',
        text: 'Gram-positive cocci in clusters, catalase-positive refers to:',
        options: [
            'Streptococcus',
            'Enterococcus',
            'Staphylococcus',
            'Pneumococcus'
        ],
        correctIndex: 2
    },
    {
        subject: 'microbiology',
        text: 'Best stain for Mycobacterium tuberculosis:',
        options: [
            'Ziehl-Neelsen stain',
            'Gram stain',
            'PAS stain',
            'Wright stain'
        ],
        correctIndex: 0
    },
    {
        subject: 'microbiology',
        text: 'Most common cause of bacterial meningitis in adults:',
        options: [
            'Haemophilus influenzae',
            'Listeria',
            'Neisseria meningitidis',
            'Streptococcus pneumoniae'
        ],
        correctIndex: 3
    },
    {
        subject: 'microbiology',
        text: 'Eosinophilic inclusion bodies in Negri bodies are seen in:',
        options: [
            'Measles',
            'Rabies',
            'Herpes',
            'Poliovirus'
        ],
        correctIndex: 1
    },
    {
        subject: 'microbiology',
        text: 'Most common opportunistic infection in HIV:',
        options: [
            'Candida',
            'TB',
            'Pneumocystis jirovecii',
            'CMV'
        ],
        correctIndex: 2
    },
    // Forensic Medicine
    {
        subject: 'forensic',
        text: 'Widmark\'s formula is used to estimate:',
        options: [
            'Quantity of alcohol in blood',
            'Age of wound',
            'Cause of death',
            'Stature'
        ],
        correctIndex: 0
    },
    {
        subject: 'forensic',
        text: 'The "pugilistic attitude" is seen in:',
        options: [
            'Burns',
            'Hanging',
            'Strangulation',
            'Drowning'
        ],
        correctIndex: 0
    },
    {
        subject: 'forensic',
        text: 'Best site for demonstrating gunpowder residue:',
        options: [
            'Face',
            'Clothes',
            'Palm',
            'Dorsum of hand'
        ],
        correctIndex: 3
    },
    {
        subject: 'forensic',
        text: 'Post-mortem lividity (hypostasis) is best seen in:',
        options: [
            'Face',
            'Buttocks',
            'Hands',
            'Back'
        ],
        correctIndex: 3
    },
    {
        subject: 'forensic',
        text: 'Magnan\'s symptom is indicative of addiction to:',
        options: [
            'Cannabis',
            'Cocaine',
            'Alcohol',
            'Opium'
        ],
        correctIndex: 1
    },
    // Community Medicine
    {
        subject: 'community',
        text: 'Herd immunity does NOT protect against:',
        options: [
            'Polio',
            'Diphtheria',
            'Measles',
            'Tetanus'
        ],
        correctIndex: 3
    },
    {
        subject: 'community',
        text: 'Best indicator of tuberculosis in a community:',
        options: [
            'Sputum conversion rate',
            'TB prevalence',
            'Invalid rate',
            'TB incidence'
        ],
        correctIndex: 0
    },
    {
        subject: 'community',
        text: 'Incubation period of hepatitis A is:',
        options: [
            '2 days',
            '15–50 days',
            '120 days',
            '7–14 days'
        ],
        correctIndex: 1
    },
    {
        subject: 'community',
        text: 'Most effective method for primary prevention of disease is:',
        options: [
            'Health education',
            'Immunization',
            'Screening',
            'Early diagnosis'
        ],
        correctIndex: 1
    },
    {
        subject: 'community',
        text: 'First epidemiological triad component:',
        options: [
            'Environment',
            'Host',
            'Disease',
            'Agent'
        ],
        correctIndex: 3
    },
    // General Medicine
    {
        subject: 'medicine',
        text: '"Butterfly rash" is classical of:',
        options: [
            'Psoriasis',
            'Dermatomyositis',
            'SLE',
            'Seborrheic dermatitis'
        ],
        correctIndex: 2
    },
    {
        subject: 'medicine',
        text: 'First-line drug for hypertension in diabetic patients:',
        options: [
            'Thiazide diuretics',
            'CCBs',
            'ACE inhibitors',
            'Beta-blockers'
        ],
        correctIndex: 2
    },
    {
        subject: 'medicine',
        text: 'Most common cause of heart failure worldwide:',
        options: [
            'IHD',
            'Hypertension',
            'Rheumatic heart disease',
            'Valvular lesions'
        ],
        correctIndex: 1
    },
    {
        subject: 'medicine',
        text: 'On ECG, "sawtooth pattern" is seen in:',
        options: [
            'Atrial flutter',
            'Ventricular fibrillation',
            'Atrial fibrillation',
            'Ventricular tachycardia'
        ],
        correctIndex: 0
    },
    {
        subject: 'medicine',
        text: 'Normal fasting blood glucose level in adults (mg/dL):',
        options: [
            '100–125',
            '126–140',
            '<100',
            '140–160'
        ],
        correctIndex: 2
    },
    // General Surgery
    {
        subject: 'surgery',
        text: 'The "Triangle of Doom" in laparoscopic hernia surgery contains:',
        options: [
            'External iliac vessels',
            'Inferior epigastric vessels',
            'Femoral vessels',
            'Vas deferens'
        ],
        correctIndex: 0
    },
    {
        subject: 'surgery',
        text: 'Courvoisier\'s law is associated with:',
        options: [
            'Gallstone disease',
            'Carcinoma head of pancreas',
            'Hepatocellular carcinoma',
            'Choledochal cyst'
        ],
        correctIndex: 1
    },
    {
        subject: 'surgery',
        text: 'Sentinel lymph node biopsy is most diagnostic for:',
        options: [
            'Ovarian cancer',
            'Breast cancer',
            'Colon cancer',
            'Lung cancer'
        ],
        correctIndex: 1
    },
    {
        subject: 'surgery',
        text: 'Most common cause of acute abdomen in adults:',
        options: [
            'Gallstones',
            'Appendicitis',
            'Pancreatitis',
            'Peptic ulcer'
        ],
        correctIndex: 1
    },
    {
        subject: 'surgery',
        text: '"Coffee bean sign" on X-ray abdomen is seen in:',
        options: [
            'Sigmoid volvulus',
            'Intussusception',
            'Small bowel obstruction',
            'Perforated ulcer'
        ],
        correctIndex: 0
    },
    // Pediatrics
    {
        subject: 'pediatrics',
        text: 'Most common cause of pneumonia in children under 5 years:',
        options: [
            'RSV',
            'Staph aureus',
            'Strep pneumoniae',
            'H. influenzae'
        ],
        correctIndex: 2
    },
    {
        subject: 'pediatrics',
        text: 'Age for first dose of measles vaccine in India:',
        options: [
            '6 months',
            '9 months',
            '18 months',
            '12 months'
        ],
        correctIndex: 1
    },
    {
        subject: 'pediatrics',
        text: 'Causative agent of epiglottitis in children:',
        options: [
            'H. influenzae type B',
            'Strep pyogenes',
            'Pneumococcus',
            'Staph aureus'
        ],
        correctIndex: 0
    },
    {
        subject: 'pediatrics',
        text: 'Most common congenital heart disease:',
        options: [
            'ASD',
            'VSD',
            'Tetralogy of Fallot',
            'PDA'
        ],
        correctIndex: 1
    },
    {
        subject: 'pediatrics',
        text: 'Kernicterus is caused by increased:',
        options: [
            'Direct bilirubin',
            'Indirect bilirubin',
            'Albumin',
            'Alkaline phosphatase'
        ],
        correctIndex: 1
    },
    // Obstetrics & Gynecology
    {
        subject: 'obg',
        text: 'Earliest sign of pregnancy on USG:',
        options: [
            'Gestational sac',
            'Yolk sac',
            'Amniotic fluid',
            'Fetal cardiac activity'
        ],
        correctIndex: 0
    },
    {
        subject: 'obg',
        text: 'Most common cause of postpartum hemorrhage:',
        options: [
            'Uterine atony',
            'Retained placenta',
            'Uterine rupture',
            'Lacerations'
        ],
        correctIndex: 0
    },
    {
        subject: 'obg',
        text: '"String of pearls" appearance seen in:',
        options: [
            'Ovarian torsion',
            'Endometriosis',
            'Ectopic pregnancy',
            'PCOS'
        ],
        correctIndex: 3
    },
    {
        subject: 'obg',
        text: 'Best time for nuchal translucency scan:',
        options: [
            '16–22 weeks',
            '11–14 weeks',
            '18–20 weeks',
            '8–10 weeks'
        ],
        correctIndex: 1
    },
    {
        subject: 'obg',
        text: 'Most common site of ectopic pregnancy:',
        options: [
            'Isthmus of fallopian tube',
            'Ampulla of fallopian tube',
            'Ovary',
            'Cervix'
        ],
        correctIndex: 1
    },
    // Ophthalmology
    {
        subject: 'ophthal',
        text: 'Most common cause of blindness worldwide:',
        options: [
            'Diabetic retinopathy',
            'Cataract',
            'Trachoma',
            'Glaucoma'
        ],
        correctIndex: 1
    },
    {
        subject: 'ophthal',
        text: 'Cherry-red spot seen in:',
        options: [
            'Central retinal vein occlusion',
            'Central retinal artery occlusion',
            'Retinitis pigmentosa',
            'Diabetic maculopathy'
        ],
        correctIndex: 1
    },
    {
        subject: 'ophthal',
        text: 'Argyll Robertson pupil is characteristic of:',
        options: [
            'Neurosyphilis',
            'Diabetes',
            'Wernicke\'s encephalopathy',
            'Multiple sclerosis'
        ],
        correctIndex: 0
    },
    {
        subject: 'ophthal',
        text: 'Most common cause of visual loss in elderly:',
        options: [
            'Age-related macular degeneration',
            'Diabetic retinopathy',
            'Cataract',
            'Glaucoma'
        ],
        correctIndex: 0
    },
    {
        subject: 'ophthal',
        text: 'Drug used for acute angle-closure glaucoma:',
        options: [
            'Pilocarpine',
            'Acetazolamide',
            'Atropine',
            'Timolol'
        ],
        correctIndex: 1
    },
    // ENT
    {
        subject: 'ent',
        text: 'Most common cause of acute otitis media in children:',
        options: [
            'H. influenzae',
            'Strep pneumoniae',
            'Moraxella catarrhalis',
            'Staph aureus'
        ],
        correctIndex: 1
    },
    {
        subject: 'ent',
        text: 'Carhart\'s notch in audiogram seen in:',
        options: [
            'Presbycusis',
            'Menier\'s disease',
            'Noise-induced hearing loss',
            'Otosclerosis'
        ],
        correctIndex: 3
    },
    {
        subject: 'ent',
        text: 'Nerve supplying muscles of the tongue except palatoglossus:',
        options: [
            'Hypoglossal',
            'Glossopharyngeal',
            'Facial',
            'Vagus'
        ],
        correctIndex: 0
    },
    {
        subject: 'ent',
        text: 'Complication of chronic suppurative otitis media:',
        options: [
            'Meningitis',
            'Deafness',
            'Facial nerve palsy',
            'All of the above'
        ],
        correctIndex: 3
    },
    {
        subject: 'ent',
        text: 'Most common cause of sensorineural hearing loss:',
        options: [
            'Noise trauma',
            'Presbycusis',
            'Viral infection',
            'Otosclerosis'
        ],
        correctIndex: 1
    },
    // Orthopedics
    {
        subject: 'ortho',
        text: 'Most common site for osteosarcoma:',
        options: [
            'Distal femur',
            'Scapula',
            'Proximal tibia',
            'Distal humerus'
        ],
        correctIndex: 0
    },
    {
        subject: 'ortho',
        text: 'Codman\'s triangle on X-ray indicates:',
        options: [
            'Osteosarcoma',
            'Ewings sarcoma',
            'Osteoid osteoma',
            'Chondrosarcoma'
        ],
        correctIndex: 0
    },
    {
        subject: 'ortho',
        text: 'Treatment of choice for fracture neck femur in elderly:',
        options: [
            'Cast immobilization',
            'Closed reduction',
            'Hemiarthroplasty',
            'Open reduction internal fixation'
        ],
        correctIndex: 2
    },
    {
        subject: 'ortho',
        text: 'Most common childhood bone tumor:',
        options: [
            'Ewing\'s sarcoma',
            'Chondrosarcoma',
            'Osteogenic sarcoma',
            'Osteochondroma'
        ],
        correctIndex: 3
    },
    {
        subject: 'ortho',
        text: 'Most important complication of open fracture:',
        options: [
            'Gas gangrene',
            'Nonunion',
            'Fat embolism',
            'Osteomyelitis'
        ],
        correctIndex: 0
    },
    // Psychiatry
    {
        subject: 'psychiatry',
        text: 'First-line drug for OCD is:',
        options: [
            'Benzodiazepines',
            'SSRIs',
            'Tricyclics',
            'Mood stabilizers'
        ],
        correctIndex: 1
    },
    {
        subject: 'psychiatry',
        text: 'Delusion of persecution is a feature of:',
        options: [
            'Mania',
            'Schizophrenia',
            'Depression',
            'Dementia'
        ],
        correctIndex: 1
    },
    {
        subject: 'psychiatry',
        text: 'Lithium toxicity presents as:',
        options: [
            'Hypotension',
            'Tremors and ataxia',
            'Hypertension',
            'Coma'
        ],
        correctIndex: 1
    },
    {
        subject: 'psychiatry',
        text: 'Most common anxiety disorder:',
        options: [
            'OCD',
            'Specific phobia',
            'Generalized anxiety disorder',
            'Panic disorder'
        ],
        correctIndex: 2
    },
    {
        subject: 'psychiatry',
        text: 'First-line treatment for PTSD:',
        options: [
            'Benzodiazepines',
            'SSRIs',
            'Antipsychotics',
            'Beta-blockers'
        ],
        correctIndex: 1
    },
    // Dermatology
    {
        subject: 'derma',
        text: 'Koebner phenomenon is seen in:',
        options: [
            'Urticaria',
            'Tinea',
            'Psoriasis',
            'Vitiligo'
        ],
        correctIndex: 2
    },
    {
        subject: 'derma',
        text: 'Most common type of skin cancer:',
        options: [
            'Basal cell carcinoma',
            'Squamous cell carcinoma',
            'Malignant melanoma',
            'Kaposi\'s sarcoma'
        ],
        correctIndex: 0
    },
    {
        subject: 'derma',
        text: 'Nikolsky\'s sign is positive in:',
        options: [
            'Pemphigus vulgaris',
            'Bullous pemphigoid',
            'Scabies',
            'Eczema'
        ],
        correctIndex: 0
    },
    {
        subject: 'derma',
        text: 'Port-wine stain is seen in:',
        options: [
            'Hemangioma',
            'Nevus flammeus',
            'Telangiectasia',
            'Vitiligo'
        ],
        correctIndex: 1
    },
    {
        subject: 'derma',
        text: 'Pathognomonic sign of syphilis:',
        options: [
            'Chancre',
            'Mucous patch',
            'Gumma',
            'Rhagades'
        ],
        correctIndex: 0
    },
    // Radiology
    {
        subject: 'radiology',
        text: '"Double bubble" sign on abdominal X-ray is seen in:',
        options: [
            'Hirschsprung disease',
            'Duodenal atresia',
            'Jejunal stenosis',
            'Pyloric stenosis'
        ],
        correctIndex: 1
    },
    {
        subject: 'radiology',
        text: 'Investigation of choice for subarachnoid hemorrhage:',
        options: [
            'CT scan without contrast',
            'MRI',
            'Angiography',
            'X-ray skull'
        ],
        correctIndex: 0
    },
    {
        subject: 'radiology',
        text: '"Spina bifida" is best detected by:',
        options: [
            'Prenatal ultrasound',
            'X-ray',
            'MRI',
            'CT scan'
        ],
        correctIndex: 0
    },
    {
        subject: 'radiology',
        text: 'Best imaging for acute stroke:',
        options: [
            'CT scan without contrast',
            'MRI',
            'PET scan',
            'Ultrasound'
        ],
        correctIndex: 0
    },
    {
        subject: 'radiology',
        text: '"Thumb sign" on lateral neck X-ray seen in:',
        options: [
            'Laryngitis',
            'Epiglottitis',
            'Croup',
            'Tracheitis'
        ],
        correctIndex: 1
    },
    // Anesthesiology
    {
        subject: 'anesthesia',
        text: 'Intravenous induction agent of choice for day care surgery:',
        options: [
            'Propofol',
            'Etomidate',
            'Ketamine',
            'Thiopentone'
        ],
        correctIndex: 0
    },
    {
        subject: 'anesthesia',
        text: 'Antidote for opioid toxicity is:',
        options: [
            'Flumazenil',
            'Naloxone',
            'Atropine',
            'Physostigmine'
        ],
        correctIndex: 1
    },
    {
        subject: 'anesthesia',
        text: 'Malignant hyperthermia is treated with:',
        options: [
            'Dantrolene',
            'Succinylcholine',
            'Diazepam',
            'Halothane'
        ],
        correctIndex: 0
    },
    {
        subject: 'anesthesia',
        text: 'Most commonly used muscle relaxant:',
        options: [
            'Suxamethonium',
            'Rocuronium',
            'Mivacurium',
            'Pancuronium'
        ],
        correctIndex: 1
    },
    {
        subject: 'anesthesia',
        text: 'Local anesthetic with longest duration:',
        options: [
            'Bupivacaine',
            'Lidocaine',
            'Procaine',
            'Cocaine'
        ],
        correctIndex: 0
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/FMGEQuiz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/subjectData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$quizQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/quizQuestions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const FMGEQuiz = ()=>{
    _s();
    const questions = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizSubjects"].flatMap((sub)=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$quizQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"].filter((q)=>q.subject === sub.slug));
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const total = questions.length;
    const handleSelect = (optionIdx)=>{
        setAnswers((prev)=>({
                ...prev,
                [current]: optionIdx
            }));
    };
    const next = ()=>{
        if (current < total - 1) setCurrent(current + 1);
        else setDone(true);
    };
    const getScores = ()=>{
        const scores = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizSubjects"].forEach((sub)=>{
            const subQuestions = questions.map((q, i)=>({
                    ...q,
                    idx: i
                })).filter((q)=>q.subject === sub.slug);
            const correct = subQuestions.filter((q)=>answers[q.idx] === q.correctIndex).length;
            scores[sub.slug] = subQuestions.length === 0 ? 0 : Math.round(100 * correct / subQuestions.length);
        });
        return scores;
    };
    const scores = getScores();
    const weakest = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizSubjects"]
    ].sort((a, b)=>scores[a.slug] - scores[b.slug]);
    const weakestHighYield = weakest.filter((s)=>s.highYield);
    const weakestConceptual = weakest.filter((s)=>s.conceptual);
    if (!done) {
        const q = questions[current];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 600,
                margin: '0 auto',
                background: '#292d42',
                borderRadius: 16,
                padding: 32,
                color: 'white',
                boxShadow: '0 4px 24px #23294244'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 18,
                        fontWeight: 600,
                        color: '#b8cdf1'
                    },
                    children: [
                        "Subject: ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizSubjects"].find((s)=>s.slug === q.subject)?.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        marginBottom: 18
                    },
                    children: q.text
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: q.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSelect(idx),
                            style: {
                                display: 'block',
                                width: '100%',
                                padding: '12px 16px',
                                marginBottom: '12px',
                                background: answers[current] === idx ? '#43ea8f' : '#232942',
                                border: 'none',
                                borderRadius: '8px',
                                color: answers[current] === idx ? 'black' : '#efeff5',
                                fontWeight: 500,
                                cursor: 'pointer'
                            },
                            children: opt
                        }, idx, false, {
                            fileName: "[project]/app/components/FMGEQuiz.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 24,
                        textAlign: 'right'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: answers[current] === undefined,
                        onClick: next,
                        style: {
                            background: '#2352a1',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '0.6rem 1.4rem',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        },
                        children: current === total - 1 ? "Finish Quiz" : "Next"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 16,
                        color: '#7a8194',
                        fontSize: '0.9rem'
                    },
                    children: `Question ${current + 1} of ${total}`
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '32px',
                        textAlign: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            padding: '14px 36px',
                            background: 'linear-gradient(135deg, #2352a1, #43ea8f)',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 24px #23294240',
                            display: 'inline-block'
                        },
                        children: "← Go to Home"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/FMGEQuiz.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Result display
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 700,
            margin: '0 auto',
            background: '#232942',
            borderRadius: 18,
            padding: 36,
            color: 'white'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    color: '#43ea8f'
                },
                children: "Your Subject Strengths"
            }, void 0, false, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Suggested Order (Weakest → Strongest):"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        children: weakest.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    color: scores[sub.slug] < 50 ? '#ff7a7a' : '#b8cdf1'
                                },
                                children: [
                                    sub.name,
                                    " (",
                                    scores[sub.slug] || 0,
                                    "%)",
                                    sub.highYield && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: '#43ea8f',
                                            color: 'black',
                                            marginLeft: '8px',
                                            padding: '2px 8px',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem'
                                        },
                                        children: "High Yield"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    sub.conceptual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: '#2352a1',
                                            color: 'white',
                                            marginLeft: '8px',
                                            padding: '2px 8px',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem'
                                        },
                                        children: "Conceptual"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, sub.slug, true, {
                                fileName: "[project]/app/components/FMGEQuiz.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Start With Weakest High-Yield:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: weakestHighYield.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    color: scores[sub.slug] < 50 ? '#ff7a7a' : '#43ea8f'
                                },
                                children: [
                                    sub.name,
                                    " (",
                                    scores[sub.slug] || 0,
                                    "%)"
                                ]
                            }, sub.slug, true, {
                                fileName: "[project]/app/components/FMGEQuiz.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Start With Weakest Conceptual:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: weakestConceptual.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    color: scores[sub.slug] < 50 ? '#ff7a7a' : '#b8cdf1'
                                },
                                children: [
                                    sub.name,
                                    " (",
                                    scores[sub.slug] || 0,
                                    "%)"
                                ]
                            }, sub.slug, true, {
                                fileName: "[project]/app/components/FMGEQuiz.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '32px',
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        padding: '14px 36px',
                        background: 'linear-gradient(135deg, #2352a1, #43ea8f)',
                        color: 'white',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 24px #23294240',
                        display: 'inline-block'
                    },
                    children: "← Go to Home"
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/FMGEQuiz.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FMGEQuiz, "rgI7s0lAtWhPi1tn7+K1PCBtj4g=");
_c = FMGEQuiz;
const __TURBOPACK__default__export__ = FMGEQuiz;
var _c;
__turbopack_context__.k.register(_c, "FMGEQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=_73d0e3a9._.js.map