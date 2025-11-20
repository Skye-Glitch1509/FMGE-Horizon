module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/lib/subjectData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/lib/quizQuestions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/components/FMGEQuiz.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/subjectData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$quizQuestions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/quizQuestions.ts [app-rsc] (ecmascript)");
;
;
;
;
const FMGEQuiz = ()=>{
    // Prepare questions in subject order
    const questions = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quizSubjects"].flatMap((sub)=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$quizQuestions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quizQuestions"].filter((q)=>q.subject === sub.slug));
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({});
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const total = questions.length;
    // Handle answer selection
    const handleSelect = (optionIdx)=>{
        setAnswers((prev)=>({
                ...prev,
                [current]: optionIdx
            }));
    };
    // Next question
    const next = ()=>{
        if (current < total - 1) setCurrent(current + 1);
        else setDone(true);
    };
    // Scores
    const getScores = ()=>{
        const scores = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quizSubjects"].forEach((sub)=>{
            const subQuestions = questions.map((q, i)=>({
                    ...q,
                    idx: i
                })).filter((q)=>q.subject === sub.slug);
            const correct = subQuestions.filter((q)=>answers[q.idx] === q.correctIndex).length;
            scores[sub.slug] = subQuestions.length === 0 ? 0 : Math.round(100 * correct / subQuestions.length);
        });
        return scores;
    };
    // Prioritization
    const scores = getScores();
    // Sort for weakest list
    const weakest = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quizSubjects"]
    ].sort((a, b)=>scores[a.slug] - scores[b.slug]);
    // High yield filter
    const weakestHighYield = weakest.filter((s)=>s.highYield);
    // Conceptual filter
    const weakestConceptual = weakest.filter((s)=>s.conceptual);
    if (!done) {
        const q = questions[current];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 18,
                        fontWeight: 600,
                        color: '#b8cdf1'
                    },
                    children: [
                        "Subject: ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$subjectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quizSubjects"].find((s)=>s.slug === q.subject)?.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        marginBottom: 18
                    },
                    children: q.text
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: q.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 75,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 24,
                        textAlign: 'right'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 16,
                        color: '#7a8194',
                        fontSize: '0.9rem'
                    },
                    children: `Question ${current + 1} of ${total}`
                }, void 0, false, {
                    fileName: "[project]/app/components/FMGEQuiz.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/FMGEQuiz.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Result display
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 700,
            margin: '0 auto',
            background: '#232942',
            borderRadius: 18,
            padding: 36,
            color: 'white'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    color: '#43ea8f'
                },
                children: "Your Subject Strengths"
            }, void 0, false, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Suggested Order (Weakest → Strongest):"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        children: weakest.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    color: scores[sub.slug] < 50 ? '#ff7a7a' : '#b8cdf1'
                                },
                                children: [
                                    sub.name,
                                    " (",
                                    scores[sub.slug] || 0,
                                    "%)",
                                    sub.highYield && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    sub.conceptual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, sub.slug, true, {
                                fileName: "[project]/app/components/FMGEQuiz.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Start With Weakest High-Yield:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: weakestHighYield.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Start With Weakest Conceptual:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: weakestConceptual.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FMGEQuiz.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FMGEQuiz.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/FMGEQuiz.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FMGEQuiz;
}),
"[project]/app/prioritizer/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrioritizerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FMGEQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/FMGEQuiz.tsx [app-rsc] (ecmascript)");
;
;
function PrioritizerPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f111a, #151624)',
            color: '#efeff5',
            fontFamily: 'system-ui, sans-serif',
            padding: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '900px',
                margin: '0 auto',
                padding: '32px 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontWeight: 'bold',
                        fontSize: '2.4rem',
                        marginBottom: '2rem',
                        color: '#43ea8f'
                    },
                    children: "FMGE Diagnostic Quiz"
                }, void 0, false, {
                    fileName: "[project]/app/prioritizer/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FMGEQuiz$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/prioritizer/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/prioritizer/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/prioritizer/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/prioritizer/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/prioritizer/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__92d72630._.js.map