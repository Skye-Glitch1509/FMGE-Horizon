export type FMGEMCQ = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicsCovered: string[];
  year: number | string;
  examSession?: string;
};

export const pharmacologyQuestions: FMGEMCQ[] = [
  // NEET 2018
  {
    id: "NEET2018-Q1",
    question: "A colonoscopy of an elderly patient revealed brownish pigmented lesions as shown below (melanosis coli). He admitted to chronic laxative abuse. Which of the following laxatives is most likely to cause this condition?",
    options: [
      "Bran",
      "Psyllium",
      "Senna",
      "Methylcellulose"
    ],
    correctIndex: 2,
    explanation: "The colonoscopy image depicts a brownish moiré pattern that is indicative of melanosis coli. Chronic use of anthraquinone laxatives like senna and cascara sagrada can cause melanosis coli. Bisacodyl is also implicated in causing melanosis coli.",
    topicsCovered: ["GI Pharmacology", "Laxatives"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q2",
    question: "A patient who is on treatment for angina, presents to you with erectile dysfunction. You decide against prescribing sildenafil because the patient is being treated with ______",
    options: [
      "Calcium channel blockers",
      "Beta blockers",
      "Nitrates",
      "ACE inhibitors"
    ],
    correctIndex: 2,
    explanation: "The patient would be on nitrates for angina and thus should not be prescribed sildenafil as sildenafil causes dangerous potentiation of nitrate action resulting in severe hypotension. The combination of the two drugs has a synergistic action on the intracellular cGMP levels that can result in uninhibited vasodilation and a precipitous fall in blood pressure.",
    topicsCovered: ["Cardiovascular Pharmacology", "Drug Interactions"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q3",
    question: "An example of a bacteriostatic drug is ______",
    options: [
      "Aminoglycoside",
      "Vancomycin",
      "Metronidazole",
      "Linezolid"
    ],
    correctIndex: 3,
    explanation: "Linezolid is an example of a bacteriostatic drug. Bacteriostatic drugs include Sulfonamides, Erythromycin, Tetracyclines, Clindamycin, Chloramphenicol, Linezolid, Ethambutol. Bactericidal drugs include Penicillins, Cephalosporins, Aminoglycosides, Vancomycin, Ciprofloxacin, Rifampin, Metronidazole, Isoniazid.",
    topicsCovered: ["Antimicrobials", "General Pharmacology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q4",
    question: "The antiviral drug having dual antiviral activity against HIV and HBV is:",
    options: [
      "Enfuviritide",
      "Abacavir",
      "Emtricitabine",
      "Ritonavir"
    ],
    correctIndex: 2,
    explanation: "Antiviral drug having dual antiviral activity against HIV and HBV is emtricitabine. It is a nucleoside reverse transcriptase inhibitor similar to lamivudine. It has activity against HIV-1, HIV-2, and HBV.",
    topicsCovered: ["Antivirals"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q5",
    question: "The replacement dose of hydrocortisone for chronic adrenal insufficiency is (in mg/day):",
    options: [
      "10",
      "12",
      "20",
      "5"
    ],
    correctIndex: 2,
    explanation: "The replacement dose of hydrocortisone for chronic adrenal insufficiency is 20 mg/day. The treatment requires glucocorticoid replacement at a dose that replaces the physiologic daily cortisol production (15-25mg Hydrocortisone). A midpoint dose of 20mg is often used.",
    topicsCovered: ["Endocrinology", "Corticosteroids"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q6",
    question: "Which of the following is the drug of choice for scrub typhus?",
    options: [
      "Doxycycline",
      "Azithromycin",
      "Chloramphenicol",
      "Ciprofloxacin"
    ],
    correctIndex: 0,
    explanation: "Doxycycline is the drug of choice for scrub typhus. Azithromycin, chloramphenicol, or rifampin can be administered as alternatives in patients allergic to doxycycline and in pregnancy.",
    topicsCovered: ["Antimicrobials"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q7",
    question: "Which of the following drugs is associated with QT prolongation?",
    options: [
      "Lignocaine",
      "Quinidine",
      "Magnesium sulfate",
      "All of the above"
    ],
    correctIndex: 1,
    explanation: "QT prolongation is seen with quinidine. It causes torsades de pointes, a life-threatening form of polymorphic ventricular tachycardia.",
    topicsCovered: ["Cardiovascular Pharmacology", "Antiarrhythmics"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q8",
    question: "Sacubitril is a new drug approved for chronic heart failure. The mechanism of action of sacubitril is:",
    options: [
      "Angiotensin II inhibitor",
      "ACE inhibitor",
      "Renin inhibitor",
      "Neutral endopeptidase inhibitor"
    ],
    correctIndex: 3,
    explanation: "Sacubitril is a neutral endopeptidase (neprilysin) inhibitor. It increases the levels of atrial and brain natriuretic peptides and lowers blood pressure. It is used in combination with valsartan.",
    topicsCovered: ["Cardiovascular Pharmacology", "Heart Failure"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q9",
    question: "Coagulation profile monitoring is needed in therapy with which of the following drugs?",
    options: [
      "Fondaparinux",
      "Enoxaparin",
      "Dabigatran",
      "Lepirudin"
    ],
    correctIndex: 3,
    explanation: "Coagulation profile monitoring is needed for lepirudin. Lepirudin is a direct irreversible thrombin inhibitor and its most adverse reaction is bleeding. Enoxaparin, fondaparinux, and dabigatran usually do not require monitoring.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q10",
    question: "Which of the following antihypertensives are not used in pregnancy?",
    options: [
      "Alpha methyldopa",
      "Hydralazine",
      "Propranolol",
      "Labetalol"
    ],
    correctIndex: 2,
    explanation: "Propranolol is a non-selective beta-blocker and is not safe for use during pregnancy. ACE inhibitors, ARBs, Diuretics, and Nonselective beta-blockers are generally avoided. Safe drugs include Hydralazine, Methyldopa, and Labetalol.",
    topicsCovered: ["Cardiovascular Pharmacology", "Pregnancy"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q11",
    question: "Which of the following atypical antipsychotics has the highest risk of galactorrhea?",
    options: [
      "Iloperidone",
      "Risperidone",
      "Clozapine",
      "Aripiprazole"
    ],
    correctIndex: 1,
    explanation: "Among atypical antipsychotics, risperidone and paliperidone have the highest risk of galactorrhea. The adverse effect occurs due to their higher D2 blocking potency.",
    topicsCovered: ["Psychopharmacology", "Antipsychotics"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q12",
    question: "When the pH = pKa of a drug, which of the following statements is true?",
    options: [
      "Concentration of the drug is 50% ionic and 50 % non-ionic",
      "Concentration of the drug is 90% ionic and 10% non-ionic",
      "Concentration of the drug is 75% ionic and 25 % non-ionic",
      "Concentration of the drug is 25% ionic and 75 % non-ionic"
    ],
    correctIndex: 0,
    explanation: "When the pH = pKa of a drug, the concentration of the drug is 50% ionic and 50% non-ionic. pKa is defined as the pH at which a drug exists as 50% ionized (hydrophilic) and 50% unionized (lipophilic).",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q13",
    question: "Corticosteroid indicated for the stimulation of fetal lung maturation in preterm labor is?",
    options: [
      "Hydrocortisone",
      "Triamcinolone",
      "Methylprednisolone",
      "Betamethasone"
    ],
    correctIndex: 3,
    explanation: "Betamethasone is indicated for the stimulation of fetal lung maturation in preterm labor. It binds to maternal proteins less and has less placental metabolism, allowing increased transfer to the fetus. Dexamethasone is also used.",
    topicsCovered: ["Endocrinology", "Obstetrics"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q14",
    question: "What is the site of action of amphotericin B in fungi?",
    options: [
      "Nucleic acid",
      "Ribosome",
      "Cell membrane",
      "Cytoplasm"
    ],
    correctIndex: 2,
    explanation: "The site of action of amphotericin B in fungi is the cell membrane. It binds to ergosterol in the cell membrane and forms pores, increasing permeability and causing leakage.",
    topicsCovered: ["Antifungals"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q15",
    question: "Which of the following acts by causing both decreased bone resorption and increased bone formation?",
    options: [
      "Strontium ranelate",
      "Ibandronate",
      "Teriparatide",
      "Calcitonin"
    ],
    correctIndex: 0,
    explanation: "Strontium ranelate acts by both decreased bone resorption and increased bone formation. Bisphosphonates and Calcitonin decrease resorption. Teriparatide increases formation.",
    topicsCovered: ["Bone Pharmacology", "Osteoporosis"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q16",
    question: "Which is the drug used for refractory intractable rheumatic chorea?",
    options: [
      "Probenecid",
      "Diazepam",
      "Haloperidol",
      "Sodium valproate"
    ],
    correctIndex: 3,
    explanation: "The drug used for refractory intractable rheumatic chorea is sodium valproate, as it doesn't have extrapyramidal side effects. Haloperidol is used but valproate is preferred for refractory cases to avoid EPS.",
    topicsCovered: ["CNS Pharmacology", "Rheumatology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q17",
    question: "What is basiliximab?",
    options: [
      "IL-1 receptor antagonist",
      "Anti-CD3 antibody",
      "IL-2 receptor antagonist",
      "TNF inhibitor"
    ],
    correctIndex: 2,
    explanation: "Basiliximab exhibits a high affinity towards IL-2 receptor (CD25) and inhibits it. It is used to prevent transplant rejection.",
    topicsCovered: ["Immunopharmacology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q18",
    question: "Which of the following conditions can be treated with pirenzepine?",
    options: [
      "Asthma",
      "Peptic ulcer disease",
      "Glaucoma",
      "Hypertension"
    ],
    correctIndex: 1,
    explanation: "Pirenzepine is used for treating gastric ulcers. It is a selective M1 anticholinergic drug that decreases gastric acid secretions.",
    topicsCovered: ["Autonomic Nervous System", "GI Pharmacology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q19",
    question: "Which of the following antimicrobials is effective against an organism producing extended-spectrum beta-lactamases?",
    options: [
      "Amoxicillin - clavulanic acid",
      "Penicillin",
      "Piperacillin - tazobactam",
      "Ceftriaxone"
    ],
    correctIndex: 2,
    explanation: "Piperacillin-tazobactam is effective. ESBLs cause resistance to most penicillins and cephalosporins. They can be inhibited by beta-lactamase inhibitors. Carbapenems are also very effective.",
    topicsCovered: ["Antimicrobials"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q20",
    question: "Which of the following inhibits the synthesis of glucocorticoid?",
    options: [
      "Mifepristone",
      "Flutamide",
      "Finasteride",
      "Metyrapone"
    ],
    correctIndex: 3,
    explanation: "Metyrapone inhibits the synthesis of glucocorticoids by inhibiting steroid 11-beta-hydroxylase reversibly.",
    topicsCovered: ["Endocrinology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q21",
    question: "Isosorbide dinitrate is indicated for congestive heart failure in combination with which of the following vasodilators?",
    options: [
      "Minoxidil",
      "Hydralazine",
      "Nimodipine",
      "Nitrendipine"
    ],
    correctIndex: 1,
    explanation: "Isosorbide dinitrate (ISDN) is indicated in combination with hydralazine for CHF (specifically in African-Americans). Hydralazine reduces nitrate tolerance.",
    topicsCovered: ["Cardiovascular Pharmacology", "Heart Failure"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q22",
    question: "What is the mechanism of action of colchicine?",
    options: [
      "Inhibits synthesis of uric acid",
      "Promotes excretion of uric acid",
      "Inhibits xanthine oxidase enzyme",
      "Binds to tubulin and inhibits granulocyte migration"
    ],
    correctIndex: 3,
    explanation: "Colchicine acts by binding to tubulin and inhibits granulocyte migration and phagocytosis. It arrests cell division at G1 phase.",
    topicsCovered: ["Rheumatology", "Gout"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q23",
    question: "Which of the following statements is true about prasugrel?",
    options: [
      "It acts as an P2 Y12 agonist",
      "It is 10 times less potent than clopidogrel",
      "It is a pro drug",
      "Omeprazole interferes in its activation to an active metabolite"
    ],
    correctIndex: 2,
    explanation: "Prasugrel is a prodrug. It is an irreversible ADP (P2Y12) antagonist. It is more potent than clopidogrel. Omeprazole does not interfere with its activation (unlike clopidogrel).",
    topicsCovered: ["Hematology", "Antiplatelets"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET2018-Q24",
    question: "Apixaban belongs to which of the following class of drugs?",
    options: [
      "Antifibrinolytic",
      "Factor Xa inhibitor",
      "Oral direct thrombin inhibitor",
      "Parenteral direct thrombin inhibitor"
    ],
    correctIndex: 1,
    explanation: "Apixaban is an oral direct factor Xa inhibitor used in VTE and stroke prophylaxis in atrial fibrillation.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2018,
    examSession: "NEET"
  },

  // NEET 2019
  {
    id: "NEET2019-Q1",
    question: "Calculate the therapeutic index of a drug whose dose-response curves are plotted as shown below (LD50=400, ED50=100):",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    correctIndex: 2,
    explanation: "Therapeutic index (TI) = LD50/ED50. LD50 = 400, ED50 = 100. TI = 400/100 = 4.",
    topicsCovered: ["General Pharmacology", "Pharmacodynamics"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q2",
    question: "Which of the following statements is true regarding the dose-response curve shown in the image below (Drug B shifts curve right)?",
    options: [
      "C is competitive antagonist",
      "C is more potent than A",
      "B is more potent than A",
      "B is competitive antagonist"
    ],
    correctIndex: 3,
    explanation: "In the image, drug B is a competitive antagonist because it shifts the DRC to the right without suppressing maximal effect. Drug C is a non-competitive antagonist (flattens curve).",
    topicsCovered: ["General Pharmacology", "Pharmacodynamics"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q3",
    question: "Which of the following antiglaucoma medications is unsafe in infants?",
    options: [
      "Timolol",
      "Brimonidine",
      "Latanoprost",
      "Dorzolamide"
    ],
    correctIndex: 1,
    explanation: "Brimonidine is unsafe in infants. It is an alpha-2 agonist that can cross the blood-brain barrier, resulting in CNS depression and apnoea in neonates.",
    topicsCovered: ["Ophthalmology", "Autonomic Nervous System"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q4",
    question: "Apparent volume of distribution of a drug is very high (6L/kg). Which of the following is true regarding the distribution of that drug?",
    options: [
      "Highly bound to plasma proteins",
      "Confined to vascular compartment",
      "Sequestered in body tissues",
      "Both A and B"
    ],
    correctIndex: 2,
    explanation: "A very high volume of distribution (Vd > Total body water) implies that the drug is sequestered and accumulated in the tissues (e.g., chloroquine).",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q5",
    question: "Which of the following phases of a clinical trial is also referred to as efficacy trial?",
    options: [
      "Phase 1",
      "Phase 2",
      "Phase 3",
      "Phase 4"
    ],
    correctIndex: 1,
    explanation: "Phase 2 is the therapeutic exploration phase where efficacy is the main aim. Phase 1 is safety. Phase 3 is therapeutic confirmation.",
    topicsCovered: ["Clinical Pharmacology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q6",
    question: "Which of the following is an oral factor Xa inhibitor?",
    options: [
      "Bivalirudin",
      "Dabigatran",
      "Rivaroxaban",
      "Enoxaparin"
    ],
    correctIndex: 2,
    explanation: "Rivaroxaban is an oral direct factor Xa inhibitor. Dabigatran is a direct thrombin inhibitor. Bivalirudin is parenteral.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q7",
    question: "What is the drug of choice for diphtheria carrier state?",
    options: [
      "Amoxicillin",
      "Erythromycin",
      "Rifampicin",
      "Tetracycline"
    ],
    correctIndex: 1,
    explanation: "The drug of choice for diphtheria carrier state is erythromycin. It eradicates the carrier state effectively.",
    topicsCovered: ["Antimicrobials"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q8",
    question: "What is the mechanism of action of oseltamivir and zanamivir?",
    options: [
      "DNA polymerase inhibition",
      "Protein synthesis inhibition",
      "Nucleotide analogue",
      "Neuraminidase inhibition"
    ],
    correctIndex: 3,
    explanation: "Oseltamivir and zanamivir are neuraminidase inhibitors. They inhibit viral release from infected host cells.",
    topicsCovered: ["Antivirals"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q9",
    question: "Which of the following is a synthetic PGF2 alpha derivative used as an abortifacient?",
    options: [
      "Dinoprost",
      "Dinoprostone",
      "Misoprostol",
      "Carboprost"
    ],
    correctIndex: 3,
    explanation: "Carboprost is a 15-methyl synthetic derivative of PGF2 alpha used as an abortifacient and for refractory PPH.",
    topicsCovered: ["Autacoids", "Obstetrics"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q10",
    question: "Which of the following drugs causes activation of K+-ATP channels?",
    options: [
      "Nicorandil",
      "Molsidomine",
      "Isosorbide dinitrate",
      "Nitroglycerin"
    ],
    correctIndex: 0,
    explanation: "Nicorandil causes activation of K+-ATP channels (potassium channel opener) and also has nitrate-like activity.",
    topicsCovered: ["Cardiovascular Pharmacology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q11",
    question: "Most effective antiemetic for chemotherapy-induced vomiting is__________.",
    options: [
      "Domperidone",
      "Tegaserod",
      "Granisetron",
      "Doxylamine"
    ],
    correctIndex: 2,
    explanation: "Granisetron (5-HT3 antagonist) is the most effective antiemetic among the options for chemotherapy-induced vomiting.",
    topicsCovered: ["GI Pharmacology", "Antiemetics"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q12",
    question: "True statement about teduglutide is :",
    options: [
      "It is a GLP- 2 analogue",
      "It’s half life is 6 - 8 hours",
      "It is administered orally",
      "It is recommended for patients with colorectal cancer"
    ],
    correctIndex: 0,
    explanation: "Teduglutide is a GLP-2 analogue used for short bowel syndrome. It is administered subcutaneously and can potentially cause bowel cancer.",
    topicsCovered: ["GI Pharmacology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q13",
    question: "Cisatracurium is preferred over atracurium because?",
    options: [
      "It has rapid onset of action",
      "It has less depressant action on heart",
      "It has short duration of action",
      "It causes less release of histamine"
    ],
    correctIndex: 3,
    explanation: "Cisatracurium is preferred over atracurium because it causes less release of histamine.",
    topicsCovered: ["Anesthesia", "Muscle Relaxants"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q14",
    question: "Which one of the following drugs inhibits neutrophil recruitment?",
    options: [
      "Montelukast",
      "Sodium cromolyn",
      "Colchicine",
      "Febuxostat"
    ],
    correctIndex: 2,
    explanation: "Colchicine inhibits neutrophil recruitment by binding to tubulin and preventing microtubule polymerization.",
    topicsCovered: ["Rheumatology", "Gout"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q15",
    question: "Which of the following fluoroquinolones has maximum bioavailability?",
    options: [
      "Ciprofloxacin",
      "Levofloxacin",
      "Gatifloxacin",
      "Norfloxacin"
    ],
    correctIndex: 1,
    explanation: "Levofloxacin and ofloxacin have the maximum bioavailability among fluoroquinolones (nearly 100%).",
    topicsCovered: ["Antimicrobials"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q16",
    question: "What is the mechanism of triazoles?",
    options: [
      "Interferes with DNA and RNA synthesis",
      "Inhibition of ergosterol synthesis",
      "Forms pores in fungal membranes",
      "Inhibits epoxidation of squalene in fungi"
    ],
    correctIndex: 1,
    explanation: "Triazoles act by inhibition of ergosterol synthesis (inhibit 14-alpha-demethylase).",
    topicsCovered: ["Antifungals"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q17",
    question: "A dermatologist wants to prescribe acitretin to a patient with psoriasis. Which of the following statements is false regarding the drug?",
    options: [
      "Contraindicated in persons with hyperlipidemia",
      "It can cause increased sensitivity to sunlight",
      "Female patients should avoid getting pregnant for 6 months after therapy",
      "Acitretin has a half life of about 50 hours"
    ],
    correctIndex: 2,
    explanation: "False statement: Female patients should avoid conception for 3 years (not 6 months) after discontinuing acitretin due to teratogenicity.",
    topicsCovered: ["Dermatology", "Retinoids"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q18",
    question: "Cilastatin is administered to prolong the action of which of the following drugs?",
    options: [
      "Meropenem",
      "Imipenem",
      "Cefazolin",
      "Piperacillin"
    ],
    correctIndex: 1,
    explanation: "Cilastatin inhibits renal dehydropeptidase I, which degrades Imipenem. It is given to prolong Imipenem's action.",
    topicsCovered: ["Antimicrobials"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q19",
    question: "What is the drug used to differentiate myasthenia gravis from cholinergic crisis?",
    options: [
      "Obidoxime",
      "Edrophonium",
      "Donepezil",
      "Atropine"
    ],
    correctIndex: 1,
    explanation: "Edrophonium (Tensilon test) is used. Improvement in strength indicates Myasthenia Gravis; worsening indicates cholinergic crisis.",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q20",
    question: "Which of the following is true about pegylated-filgrastim?",
    options: [
      "Duration of action is shorter than normal filgrastim",
      "Added advantage is that it can be taken orally",
      "It should not be administered in sickle cell patients",
      "It is not effective in the treatment of severe neutropenia"
    ],
    correctIndex: 2,
    explanation: "Pegylated filgrastim has a longer duration of action. It should not be administered in sickle cell patients as it can trigger a crisis.",
    topicsCovered: ["Hematology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q21",
    question: "The best approach in the treatment of chronic SIADH is ______",
    options: [
      "Tolvaptan",
      "Reducing fluid intake to <500 ml per day",
      "Demeclocycline",
      "Fludrocortisone"
    ],
    correctIndex: 0,
    explanation: "The best approach in the treatment of chronic SIADH is oral administration of a vaptan like Tolvaptan (V2 receptor antagonist).",
    topicsCovered: ["Endocrinology", "Renal Pharmacology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q22",
    question: "Intravenous mannitol is used in ____?",
    options: [
      "Pulmonary edema",
      "Congestive cardiac failure",
      "Acute kidney injury with anuria",
      "Glaucoma"
    ],
    correctIndex: 3,
    explanation: "Intravenous mannitol is used for the treatment of acute attacks of glaucoma and to reduce cerebral edema. It is contraindicated in pulmonary edema and anuria.",
    topicsCovered: ["Diuretics", "Ophthalmology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q23",
    question: "Which of the following carbapenems has increased risk of causing seizures?",
    options: [
      "Meropenem",
      "Imipenem",
      "Etrapenem",
      "Doripenem"
    ],
    correctIndex: 1,
    explanation: "Imipenem is associated with an increased risk of seizures, especially in patients with CNS lesions or renal failure.",
    topicsCovered: ["Antimicrobials"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "NEET2019-Q24",
    question: "Which of the following helps in maintaining the patency of ductus arteriosus?",
    options: [
      "PGF2a",
      "PGE1",
      "PGH2",
      "PGI2"
    ],
    correctIndex: 1,
    explanation: "Prostaglandin E1 (PGE1) maintains the patency of the ductus arteriosus. NSAIDs like Indomethacin close it.",
    topicsCovered: ["Autacoids", "Pediatrics"],
    year: 2019,
    examSession: "NEET"
  },

  // NEET 2020
  {
    id: "NEET2020-Q1",
    question: "Which of the following is an inhibitor of DNA synthesis?",
    options: [
      "6-mercaptopurine",
      "Mitomycin",
      "Actinomycin",
      "Asparaginase"
    ],
    correctIndex: 0,
    explanation: "6-Mercaptopurine is an antimetabolite that inhibits de novo purine nucleotide synthesis (DNA synthesis).",
    topicsCovered: ["Anticancer Drugs"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q2",
    question: "A patient on lithium therapy developed hypertension. He was started on thiazides for hypertension. After few days, he developed coarse tremors and other symptoms suggestive of lithium toxicity. Explain the likely mechanism of this interaction.",
    options: [
      "Thiazide inhibits the metabolism of lithium",
      "Thiazides act as an add on drug to lithium",
      "Thiazides increase the tubular reabsorption of lithium",
      "Thiazides cause water loss therby increase lithium levels"
    ],
    correctIndex: 2,
    explanation: "Thiazides cause sodium loss. The kidney compensates by increasing proximal tubular reabsorption of Sodium. Lithium is handled similarly to Sodium, so Lithium reabsorption also increases, leading to toxicity.",
    topicsCovered: ["Psychopharmacology", "Drug Interactions"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q3",
    question: "Which of the following should not be prescribed with theophylline?",
    options: [
      "Erythromycin",
      "Cefotaxime",
      "Cotrimoxazole",
      "Amoxicillin"
    ],
    correctIndex: 0,
    explanation: "Erythromycin inhibits CYP1A2, which metabolizes theophylline. Co-administration increases theophylline levels and toxicity.",
    topicsCovered: ["Respiratory Pharmacology", "Drug Interactions"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q4",
    question: "Which of the following drugs gets deposited in cornea?",
    options: [
      "Leflunamide",
      "Chloroquine",
      "Methotrexate",
      "Sulfasalazine"
    ],
    correctIndex: 1,
    explanation: "Chloroquine can cause corneal deposits (cornea verticillata) leading to visual disturbances.",
    topicsCovered: ["Ophthalmology", "Antimalarials"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q5",
    question: "A patient was prescribed an antipsychotic drug following which he developed parkinsonism. Which of the following drugs can be given?",
    options: [
      "Trihexiphenidyl",
      "Entacapone",
      "Rasagiline",
      "Pramipexole"
    ],
    correctIndex: 0,
    explanation: "Trihexiphenidyl (central anticholinergic) is the drug of choice for drug-induced parkinsonism to restore the cholinergic-dopaminergic balance.",
    topicsCovered: ["CNS Pharmacology", "Parkinsonism"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q6",
    question: "Which of the following antiarrhythmic drugs is contraindicated in a patient with interstitial lung disease?",
    options: [
      "Amiodarone",
      "Sotalol",
      "Quinidine",
      "Lignocaine"
    ],
    correctIndex: 0,
    explanation: "Amiodarone causes pulmonary fibrosis and is contraindicated in patients with interstitial lung disease.",
    topicsCovered: ["Cardiovascular Pharmacology", "Antiarrhythmics"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q7",
    question: "Which of the following drugs acts by inhibiting the late sodium current in the heart?",
    options: [
      "Ivabradine",
      "Ranolazine",
      "Trimetazidine",
      "Fasudil"
    ],
    correctIndex: 1,
    explanation: "Ranolazine acts by inhibiting the late sodium current (INa) in the heart, reducing calcium overload and wall tension.",
    topicsCovered: ["Cardiovascular Pharmacology", "Angina"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q8",
    question: "A patient with diabetes and COPD developed post-operative urinary retention. Which of the following drugs can be used for short-term treatment of the condition?",
    options: [
      "Tamsulosin",
      "Bethanechol",
      "Terazosin",
      "Methacoline"
    ],
    correctIndex: 0,
    explanation: "Tamsulosin (Alpha-1 blocker) is preferred. Bethanechol is a muscarinic agonist that helps retention but causes bronchoconstriction, so it is unsafe in COPD.",
    topicsCovered: ["Autonomic Nervous System", "Urology"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q9",
    question: "Which of the following drugs is used for the treatment of motion sickness?",
    options: [
      "Cetrizine",
      "Promethazine",
      "Misolastin",
      "Loratidine"
    ],
    correctIndex: 1,
    explanation: "Promethazine is an antihistamine with significant anticholinergic activity, making it effective for motion sickness.",
    topicsCovered: ["GI Pharmacology", "Autocoids"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q10",
    question: "Which of the following is not a prokinetic?",
    options: [
      "5HT4 agonist",
      "Dopamine antagonist",
      "Motilin",
      "Diphenylmethane"
    ],
    correctIndex: 3,
    explanation: "Diphenylmethane derivatives (like Bisacodyl) are laxatives, not prokinetics.",
    topicsCovered: ["GI Pharmacology"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q11",
    question: "Which of the following is used in the first-line management of postmenopausal osteoporosis?",
    options: [
      "Estrogen",
      "Bisphosphonates",
      "Raloxifene",
      "Combined oral contraceptives"
    ],
    correctIndex: 1,
    explanation: "Bisphosphonates are the first-line management for postmenopausal osteoporosis.",
    topicsCovered: ["Bone Pharmacology"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q12",
    question: "What is the mechanism of resistance by lactamases to beta-lactam antibiotics?",
    options: [
      "Alteration of penicillin binding protein",
      "Degradation of antibiotics",
      "Drug efflux",
      "Alteration in 50s ribosome structure"
    ],
    correctIndex: 1,
    explanation: "Beta-lactamases cause resistance by hydrolyzing (degrading) the beta-lactam ring of the antibiotic.",
    topicsCovered: ["Antimicrobials", "Resistance"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q13",
    question: "A female patient is on first-line pharmacological therapy for bipolar disorder for 6 months. She is fasting for a few days due to religious reasons and presented with seizures, coarse tremors, confusion, and weakness of limbs. Which of the following investigations should be done to help diagnose her condition?",
    options: [
      "Serum potassium level",
      "Serum lithium level",
      "ECG",
      "MRI"
    ],
    correctIndex: 1,
    explanation: "The patient is likely on Lithium (first-line for bipolar). Fasting/dehydration increases Lithium reabsorption, leading to toxicity (tremors, seizures, confusion). Serum Lithium levels confirm the diagnosis.",
    topicsCovered: ["Psychopharmacology", "Toxicology"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q14",
    question: "Pegloticase is used in management of:",
    options: [
      "Chronic gout",
      "Rheumatoid arthritis",
      "Psoriatric arthritis",
      "Calcium pyrophosphate dihydrate crystal deposition (CPPD)"
    ],
    correctIndex: 0,
    explanation: "Pegloticase is a recombinant uricase used for severe, refractory chronic gout.",
    topicsCovered: ["Rheumatology", "Gout"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q15",
    question: "Which of the following is an inhibitor of RNA synthesis?",
    options: [
      "5-Fluorouracil",
      "Rifampicin",
      "Nitrofurantoin",
      "Novobiocin"
    ],
    correctIndex: 1,
    explanation: "Rifampicin inhibits DNA-dependent RNA polymerase, thus inhibiting RNA synthesis.",
    topicsCovered: ["Antimicrobials"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q16",
    question: "Which of the following fluoroquinolone is not given in liver disease?",
    options: [
      "Ofloxacin",
      "Levofloxacin",
      "Pefloxacin",
      "Lomefloxacin"
    ],
    correctIndex: 2,
    explanation: "Pefloxacin (and Moxifloxacin) is primarily metabolized by the liver and should be avoided or used with caution in liver disease.",
    topicsCovered: ["Antimicrobials"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q17",
    question: "Theophylline causes diuresis by:",
    options: [
      "Adenosine antagonism",
      "PDE 4 inhibition",
      "Beta 2 agonism",
      "PDE 3 inhibition"
    ],
    correctIndex: 0,
    explanation: "Theophylline causes diuresis by blocking adenosine A1 receptors in the renal tubules/afferent arteriole.",
    topicsCovered: ["Respiratory Pharmacology", "Diuretics"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q18",
    question: "The graph below shows the relationship between the log(dose) and the response of three drugs, A, B, and C. Which of these drugs has the highest potency? (Graph shows A leftmost)",
    options: [
      "A",
      "B",
      "Both A and B",
      "C"
    ],
    correctIndex: 0,
    explanation: "Potency is determined by the position on the X-axis (Dose). The curve furthest to the left (Drug A) requires the least dose for effect, thus is most potent.",
    topicsCovered: ["General Pharmacology", "Pharmacodynamics"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q19",
    question: "A patient presented with biliary colic. The intern has administered an analgesic, following which the pain got aggravated. Which of the following could be responsible for the aggravation of the patient's symptoms?",
    options: [
      "Morphine",
      "Diclofenac",
      "Nefopam",
      "Etoricoxib"
    ],
    correctIndex: 0,
    explanation: "Morphine can cause spasm of the sphincter of Oddi, potentially aggravating biliary colic.",
    topicsCovered: ["Opioids", "Analgesics"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q20",
    question: "A patient with gout develops hypertension. The uric acid level was found to be elevated. Which of the following is not administered?",
    options: [
      "Hydrochlorothiazide",
      "Atenolol",
      "Enalapril",
      "Prazosin"
    ],
    correctIndex: 0,
    explanation: "Hydrochlorothiazide (thiazides) competes with uric acid for secretion and increases reabsorption, worsening hyperuricemia/gout.",
    topicsCovered: ["Cardiovascular Pharmacology", "Gout"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q21",
    question: "Voriconazole is not effective against which of the following?",
    options: [
      "Candida albicans",
      "Mucormycosis",
      "Candida tropicalis",
      "Aspergillosis"
    ],
    correctIndex: 1,
    explanation: "Voriconazole is ineffective against Mucormycosis (Zygomycosis). Amphotericin B is the drug of choice.",
    topicsCovered: ["Antifungals"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "NEET2020-Q22",
    question: "A patient who was diagnosed with ADPKD was prescribed tolvaptan. After a few weeks, he presented with dry mouth and increased thirst. What is the likely cause?",
    options: [
      "Increased free water clearance",
      "V2 receptor agonism",
      "Increased renal cAMP levels",
      "Increase in urine osmolality"
    ],
    correctIndex: 0,
    explanation: "Tolvaptan is a V2 antagonist. It prevents water reabsorption, increasing free water clearance (aquaresis), leading to dehydration and thirst.",
    topicsCovered: ["Renal Pharmacology"],
    year: 2020,
    examSession: "NEET"
  },

  // INI-CET 2021
  {
    id: "INICET2021-Q1",
    question: "Which of the following is false about the selection of essential drugs?",
    options: [
      "Adequate safety profile needs to be established",
      "Cost to benefit has to be considered",
      "Fixed drug combination is preferred over single drugs",
      "Disease prevalence is considered"
    ],
    correctIndex: 2,
    explanation: "Fixed drug combinations are generally NOT preferred over single drugs unless they offer a specific advantage in adherence or efficacy. Single compounds are preferred for essential lists.",
    topicsCovered: ["General Pharmacology", "Essential Medicines"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q2",
    question: "A 34-year-old man with hypertension is diagnosed with stage 4 chronic kidney disease, with eGFR of <30. His doctor wants to prescribe a thiazide diuretic. Which of the following can be given?",
    options: [
      "Chlorothiazide",
      "Chlorthalidone",
      "Metolazone",
      "Hydrochlorothiazide"
    ],
    correctIndex: 2,
    explanation: "Standard thiazides lose efficacy at low GFR. Metolazone is effective even in severe renal failure (low GFR).",
    topicsCovered: ["Diuretics", "Renal Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q3",
    question: "A patient who was diagnosed with epilepsy was put on retigabine TDS. Now phenytoin is being added. Which of the following changes should be made to retigabine?",
    options: [
      "Increase the dose",
      "Decrease the dose",
      "Stop the drug",
      "Stop retigabine and start on carbamazepine"
    ],
    correctIndex: 0,
    explanation: "Phenytoin is a potent enzyme inducer and increases the metabolism of retigabine (ezogabine), reducing its levels. The dose of retigabine needs to be increased.",
    topicsCovered: ["Antiepileptics", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q4",
    question: "A patient with history of ischemic stroke was started on clopidogrel. However, she had another attack of stroke after 6 months. Which of the following is likely to be responsible for the failure of clopidogrel in this patient?",
    options: [
      "Downregulation of CYP2C19",
      "Downregulation of CYP2D6",
      "Upregulation of CYP1A1",
      "Downregulation of CYP2E1"
    ],
    correctIndex: 0,
    explanation: "Clopidogrel is a prodrug activated by CYP2C19. Downregulation or genetic poor metabolizer status of CYP2C19 results in treatment failure.",
    topicsCovered: ["Antiplatelets", "Pharmacogenetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q5",
    question: "Which of the following can be given for long term management of obesity?",
    options: [
      "Liraglutide",
      "Metformin",
      "Sibutramine",
      "Fenfluramine"
    ],
    correctIndex: 0,
    explanation: "Liraglutide (GLP-1 agonist) is approved for long-term weight management. Sibutramine and Fenfluramine were withdrawn due to safety issues.",
    topicsCovered: ["Endocrinology", "Obesity"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q6",
    question: "An HIV-positive woman on ART was prescribed ergotamine for a migraine attack 4 days back. She presented with complaints that she is unable to feel her legs from the mid-thigh to her toes, for the past two days. The angiography image shows diffuse narrowing. What is the likely diagnosis?",
    options: [
      "Atherosclerosis",
      "Ergotism",
      "Polyradicular neuropathy",
      "Herniated disc"
    ],
    correctIndex: 1,
    explanation: "Protease inhibitors (ART) inhibit CYP3A4, accumulating Ergotamine levels, leading to severe vasoconstriction and Ergotism (gangrene/ischemia).",
    topicsCovered: ["Antimicrobials", "Autonomic Nervous System", "Toxicology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q7",
    question: "Topiramate is used for",
    options: [
      "Treatment of migrane",
      "Treatment of Lennox Gastaut syndrome",
      "Prophylaxis of ADHD",
      "Treatment of dementia"
    ],
    correctIndex: 1,
    explanation: "Topiramate is used for Lennox-Gastaut syndrome and migraine prophylaxis (not acute treatment).",
    topicsCovered: ["Antiepileptics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q8",
    question: "Which of the following is incorrectly matched?",
    options: [
      "Andexanet alfa: Edoxaban",
      "Andexanet alfa: Rivaroxaban",
      "Idarucizumab : Dabigatran",
      "Ciraparantag: Fondaparinux"
    ],
    correctIndex: 3,
    explanation: "Ciraparantag is a universal reversal agent for direct anticoagulants but is NOT effective for Fondaparinux (an indirect factor Xa inhibitor).",
    topicsCovered: ["Anticoagulants", "Antidotes"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q9",
    question: "Inhaled Nitric oxide is approved for treatment of",
    options: [
      "Labile hypertension",
      "Pulmonary hypertension",
      "Treatment of resistant migraine",
      "Resistant Parkinson's disease"
    ],
    correctIndex: 1,
    explanation: "Inhaled Nitric Oxide acts as a selective pulmonary vasodilator and is used for pulmonary hypertension (especially in neonates).",
    topicsCovered: ["Cardiovascular Pharmacology", "Respiratory Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q10",
    question: "Nivolumab is used as a checkpoint inhibitor in",
    options: [
      "Retinoblastoma",
      "Medulloblastoma",
      "Pleuropulmonary blastoma",
      "Hodgkin's lymphoma"
    ],
    correctIndex: 3,
    explanation: "Nivolumab (PD-1 inhibitor) is used in classical Hodgkin's lymphoma, melanoma, NSCLC, etc.",
    topicsCovered: ["Anticancer Drugs", "Immunotherapy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q11",
    question: "Paradoxical bronchoconstriction seen with ipratropium bromide is due to all except",
    options: [
      "Hypertonic saline",
      "EDTA",
      "Benzalkonium chloride",
      "Prejunctional M2 receptor blockade"
    ],
    correctIndex: 0,
    explanation: "Paradoxical bronchoconstriction from nebulizers is often due to additives like Benzalkonium chloride or EDTA, or blockade of prejunctional M2 autoreceptors (which normally limit ACh release). Hypertonic saline is not the primary mechanism implicated in this specific drug paradox in this context.",
    topicsCovered: ["Respiratory Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q12",
    question: "Antimicrobial combinations are used in all except",
    options: [
      "Gonorrhea",
      "Tuberculosis",
      "Intra abdominal infections",
      "Malaria"
    ],
    correctIndex: 0,
    explanation: "While dual therapy was common, current guidelines sometimes shift. However, compared to TB, Malaria, and Mixed abdominal infections (which MANDATE combination), Gonorrhea is the most likely answer for contexts where single-drug therapy (e.g., Ceftriaxone) might be sufficient or the question refers to historical contexts compared to obligate combination therapies.",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q13",
    question: "Which of the following steps does Vancomycin act on? (Based on cell wall synthesis diagram)",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctIndex: 3,
    explanation: "Vancomycin inhibits cell wall synthesis by binding to the D-Ala-D-Ala terminus of the peptidoglycan precursor, preventing transglycosylation and transpeptidation (late stages).",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q14",
    question: "What would happen to the half-life and plasma concentration of a drug which follows first-order kinetics, if the dose is doubled?",
    options: [
      "Half-life doubles and plasma concentration remains the same",
      "Half-life remains the same and plasma concentration doubles",
      "Half-life and plasma concentration remains the same",
      "Half life and plasma concentration doubles"
    ],
    correctIndex: 1,
    explanation: "In first-order kinetics, half-life is constant (independent of dose). Plasma concentration is proportional to dose (doubles if dose doubles).",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q15",
    question: "Which of the following is not an off-label use of risperidone?",
    options: [
      "OCD",
      "Dementia",
      "PTSD",
      "Bipolar disorder"
    ],
    correctIndex: 3,
    explanation: "Risperidone is FDA approved (on-label) for Bipolar Disorder. It is used off-label for dementia, OCD, PTSD.",
    topicsCovered: ["Psychopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q16",
    question: "The elimination rate constant of a drug is 0.05/hr. What is its half-life?",
    options: [
      "20.8 hours",
      "6.9 hours",
      "13.8 hours",
      "9.8 hours"
    ],
    correctIndex: 2,
    explanation: "t1/2 = 0.693 / k. t1/2 = 0.693 / 0.05 = 13.86 hours.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q17",
    question: "A patient is on phenytoin for a seizure disorder. He was prescribed sucralfate 4 times a day for peptic ulcers. What should be the minimum duration of time between consumption of these drugs?",
    options: [
      "30 minutes",
      "60 minutes",
      "90 minutes",
      "120 minutes"
    ],
    correctIndex: 3,
    explanation: "Sucralfate binds to phenytoin in the GI tract, reducing its absorption. A gap of at least 2 hours (120 minutes) is recommended.",
    topicsCovered: ["Drug Interactions", "GI Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q18",
    question: "Category A, B, C, D, X in drug classification are indicative of which of the following?",
    options: [
      "Safety in pregnancy",
      "Dose adjustment in renal failure",
      "Cost ratio from cheap to expensive",
      "As per safety or therapeutic index"
    ],
    correctIndex: 0,
    explanation: "These are the FDA pregnancy safety categories.",
    topicsCovered: ["General Pharmacology", "Pregnancy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q19",
    question: "Identify the false statement regarding suicidal inhibition.",
    options: [
      "The inhibitor can bind with any site resulting in suicidal inhibition",
      "The binding of the enzyme to the substrate analogue is irreversible",
      "They are enzyme specific and used in rational drug design",
      "The inhibitor forms a product with the enzyme and the product inhibits it"
    ],
    correctIndex: 0,
    explanation: "Suicidal inhibition (mechanism-based inhibition) is specific to the active site and involves the enzyme converting the inhibitor into a reactive intermediate that irreversibly binds. It is not 'any site'.",
    topicsCovered: ["Enzymology", "General Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q20",
    question: "The dose at which dopamine acts on beta 1 receptors is ____.",
    options: [
      "2-10 mcg/kg/min",
      "<2 mcg/kg/min",
      "10-20 mcg/kg/min",
      ">20 mcg/kg/min"
    ],
    correctIndex: 0,
    explanation: "Dopamine doses: <2 (Renal/D1), 2-10 (Cardiac/Beta1), >10 (Vascular/Alpha1).",
    topicsCovered: ["Autonomic Nervous System", "Cardiovascular Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q21",
    question: "Which of the following is the incorrect statement regarding clomiphene citrate?",
    options: [
      "Causes monofollicular development",
      "Inhibits negative feedback on GnRH",
      "Causes endometrial thinning",
      "Can be used with gonadotropin"
    ],
    correctIndex: 0,
    explanation: "Clomiphene increases FSH/LH drive and often causes multifollicular development (increasing risk of twins). It is not specific for monofollicular development.",
    topicsCovered: ["Endocrinology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q22",
    question: "What is the mechanism of action of remdesivir?",
    options: [
      "RNA-dependent DNA polymerase inhibition",
      "RNA-dependent RNA polymerase inhibition",
      "Fusion inhibition",
      "Entry inhibition"
    ],
    correctIndex: 1,
    explanation: "Remdesivir inhibits the viral RNA-dependent RNA polymerase (RdRp).",
    topicsCovered: ["Antivirals"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q23",
    question: "Administration of which of the following drugs would increase the bioavailability of saquinavir?",
    options: [
      "Ritonavir",
      "Vitamin C",
      "Cimetidine",
      "Ganciclovir"
    ],
    correctIndex: 0,
    explanation: "Ritonavir is a potent CYP3A4 inhibitor used to boost the levels of other protease inhibitors like Saquinavir.",
    topicsCovered: ["Antivirals", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q24",
    question: "The table below gives the AUC of drug B alone and that of drug B when combined with another drug A. If the value (Combined/Alone) is <0.01, then which of the following statements is true?",
    options: [
      "Drug A decreases intestinal absorption of Drug B",
      "Drug A reduces first pass metabolism of Drug B",
      "Drug A increases the metabolism of Drug B",
      "Drug A increases renal elimination of Drug B"
    ],
    correctIndex: 1,
    explanation: "Based on the answer key (b), Drug A reduces first pass metabolism (Enzyme inhibition), leading to a drastic change in bioavailability parameters. (Note: The question phrasing regarding the ratio <0.01 is ambiguous without the table, assuming standard 'Boosting' interaction context where AUC increases significantly).",
    topicsCovered: ["Pharmacokinetics", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q25",
    question: "What is the mechanism of action of cyclosporine?",
    options: [
      "Inhibition of calcineurin",
      "AMP kinase stimulation",
      "IMP dehydrogenase inhibition",
      "Dihydro-orotate dehydrogenase inhibition"
    ],
    correctIndex: 0,
    explanation: "Cyclosporine binds to cyclophilin and inhibits calcineurin, preventing IL-2 production.",
    topicsCovered: ["Immunopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q26",
    question: "Anionic and weakly acidic drugs bind to which of the following?",
    options: [
      "Albumin",
      "Globulin",
      "Lipoprotein",
      "Alpha-1 glycoprotein"
    ],
    correctIndex: 0,
    explanation: "Acidic drugs bind primarily to Albumin. Basic drugs bind to Alpha-1 acid glycoprotein.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q27",
    question: "A 14-month-old boy was diagnosed with Hemophilus influenza meningitis. The initial treatment plan was to start on ampicillin but later was shifted to ceftriaxone. What could be the probable reason?",
    options: [
      "Hemophilus alters penicillin binding protein sites, hence resistant to ampicillin",
      "Easier to administer IV ceftriaxone than IV ampicillin",
      "Cotrimoxazole is the drug of choice, but patient is allergic to sulfa drugs",
      "Hemophilus produces beta lactamase, hence resistant to ampicillin"
    ],
    correctIndex: 3,
    explanation: "H. influenzae resistance to Ampicillin is commonly due to beta-lactamase production. Ceftriaxone is stable against these enzymes.",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q28",
    question: "A patient who is a known case of cirrhosis of the liver presents with abdominal distension and swelling of the lower limbs. The preferred diuretic for this patient would be",
    options: [
      "Triamterene",
      "Eplerenone",
      "Chlorthalidone",
      "Furosemide"
    ],
    correctIndex: 1,
    explanation: "Spironolactone (or Eplerenone) is the diuretic of choice for cirrhotic ascites because secondary hyperaldosteronism is a major driver.",
    topicsCovered: ["Diuretics", "GI Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q29",
    question: "Which of the following is the most effective drug in smoking cessation?",
    options: [
      "Varenicline",
      "Buspirone SR",
      "Nicotine gum",
      "Rimonabant"
    ],
    correctIndex: 0,
    explanation: "Varenicline (partial nicotinic agonist) is considered the most effective pharmacotherapy for smoking cessation.",
    topicsCovered: ["CNS Pharmacology", "Addiction"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q30",
    question: "A patient who was on warfarin therapy for atrial fibrillation is prescribed a cephalosporin antibiotic for the treatment of a lower respiratory tract infection. He reports back to the hospital after having developed hemarthrosis. Which of the following cephalosporins is likely to have caused this?",
    options: [
      "Cefixime",
      "Cefoperazone",
      "Ceftobiprole",
      "Ceftazidime"
    ],
    correctIndex: 1,
    explanation: "Cefoperazone contains an N-methylthiotetrazole (MTT) side chain which inhibits Vitamin K epoxide reductase, potentiating Warfarin and causing bleeding.",
    topicsCovered: ["Antimicrobials", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q31",
    question: "Which of the following is a novel anti-depressant?",
    options: [
      "Lurasidone",
      "Vilazodone",
      "Asenapine",
      "Blonanserin"
    ],
    correctIndex: 1,
    explanation: "Vilazodone is a novel antidepressant (SPARI - Serotonin Partial Agonist Reuptake Inhibitor). Others listed are antipsychotics.",
    topicsCovered: ["Psychopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q32",
    question: "A 57-year-old man was brought to the hospital with complaints of dizziness and breathlessness. During his physical examination, you notice discolouration over his face (Blue-man syndrome). He is presently being treated with amiodarone, metoprolol, verapamil, lisinopril, and amlodipine. Which of the following drugs is most likely responsible?",
    options: [
      "Amiodarone",
      "Amlodipine",
      "Metoprolol",
      "Verapamil"
    ],
    correctIndex: 0,
    explanation: "Amiodarone can cause blue-grey skin discoloration (ceruloderma) typically in sun-exposed areas.",
    topicsCovered: ["Antiarrhythmics", "Toxicology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q33",
    question: "Which of the following is a centrally acting opioid antitussive?",
    options: [
      "Ambroxol",
      "Diphenoxylate",
      "Levopropoxyphene",
      "Levorphanol"
    ],
    correctIndex: 2,
    explanation: "Levopropoxyphene is a centrally acting antitussive. Ambroxol is a mucolytic. Diphenoxylate is an antidiarrheal.",
    topicsCovered: ["Respiratory Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q34",
    question: "The anti-epileptic drugs which can also be used for the treatment of neuropathic pain are [Note: Numbered list missing from source]",
    options: [
      "1, 2 and 3",
      "1, 2 and 4",
      "1, 3 and 4",
      "2 and 4 only"
    ],
    correctIndex: 1,
    explanation: "Common antiepileptics used for neuropathic pain include Carbamazepine, Gabapentin, and Pregabalin.",
    topicsCovered: ["Antiepileptics", "Analgesics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q35",
    question: "A breast cancer patient post-chemotherapy developed a low-grade fever with anemia and leukocytopenia (<4000/cm3; DNC: 30). Which of the following antibiotics will not be used in the empirical management of this patient?",
    options: [
      "Cefepime",
      "Piperacillin-Tazobactam",
      "Linezolid",
      "Meropenem"
    ],
    correctIndex: 2,
    explanation: "Linezolid is bacteriostatic and causes myelosuppression, which would worsen the patient's leukocytopenia/anemia. Empirical therapy typically uses bactericidal agents like Cefepime or Carbapenems.",
    topicsCovered: ["Antimicrobials", "Oncology"],
    year: 2021,
    examSession: "INI-CET"
  },

  {
    id: "AIIMS2017-Q1",
    question: "How much drug will remain at the end of 6 hours when a patient is given 200 mg drug, 75 mg excreted in 90 min and if the drug follows first-order kinetics?",
    options: [
      "50 mg",
      "30.5 mg",
      "12.5 mg",
      "6.25 mg"
    ],
    correctIndex: 1,
    explanation: "In first order kinetics, a constant fraction of the drug is excreted in a given time. Since 75 mg of 200 mg is excreted in 90 minutes, the fraction eliminated is 75/200 = 3/8. Thus, 5/8 remains. After 6 hours (4 cycles of 90 mins), the remaining amount is 200 * (5/8)^4 ≈ 30.5 mg.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q2",
    question: "What is the most bactericidal anti leprotic drug amongst the given drugs?",
    options: [
      "Amoxicillin",
      "Ciprofloxacin",
      "Ofloxacin",
      "Erythromycin"
    ],
    correctIndex: 2,
    explanation: "Among the options provided, Ofloxacin is the most bactericidal anti-leprotic drug. While Rifampicin is the most potent overall, Ofloxacin (a fluoroquinolone) exhibits high activity against M. leprae and is used in alternative MDT regimens.",
    topicsCovered: ["Antimicrobials", "Leprosy"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q3",
    question: "Which of the following is not true about P-glycoprotein?",
    options: [
      "Pgp stands for permeability glycoprotein",
      "Also known as CD243",
      "Also known as ABCB1",
      "Also known as MDR2"
    ],
    correctIndex: 3,
    explanation: "P-glycoprotein is known as Multidrug Resistance Protein 1 (MDR1), not MDR2. It is also known as ABCB1 and CD243. It acts as an efflux membrane transporter.",
    topicsCovered: ["General Pharmacology", "Transporters"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q4",
    question: "For which of the following drugs, is absorption increased after a fatty meal?",
    options: [
      "Griseofulvin",
      "Amphotericin B",
      "Ampicillin",
      "Aspirin"
    ],
    correctIndex: 0,
    explanation: "The absorption of Griseofulvin is increased after a fatty meal because it is highly lipophilic. Other drugs with increased absorption with food include Atovaquone, Carbamazepine, and Lumefantrine.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics", "Antifungals"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q5",
    question: "A patient with Prinzmetal angina is administered isosorbide mononitrate and is noticed to have symptomatic relief. What is the mechanism of action of nitrate in this case?",
    options: [
      "Endothelium independent coronary vasodilation",
      "Reduced cardiac contractility",
      "Increased left ventricular end diastolic volume",
      "Decreased diastolic perfusion pressure"
    ],
    correctIndex: 0,
    explanation: "In Prinzmetal angina (vasospastic angina), nitrates work by causing endothelium-independent coronary vasodilation, relaxing the smooth muscles of epicardial coronary arteries and relieving spasm.",
    topicsCovered: ["Cardiovascular Pharmacology", "Antianginal Drugs"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q6",
    question: "The drug of choice in anaphylactic shock is?",
    options: [
      "Adrenaline 0.5 mg 1/1000 IM",
      "Adrenaline 1 mg 1/10000 IV",
      "Atropine 3 mg",
      "Adenosine 6 mg followed by 12 mg IV"
    ],
    correctIndex: 0,
    explanation: "Adrenaline 0.5 mg (1:1000 solution) via intramuscular route (IM) is the drug of choice for anaphylactic shock. It allows for rapid and effective absorption compared to the subcutaneous route and is safer than the IV bolus in initial management.",
    topicsCovered: ["Autonomic Nervous System", "Emergency Medicine"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q7",
    question: "What instruction do you give to a mother who is lactating for drug use?",
    options: [
      "No advice as most of drug are not present in breast milk",
      "Give longer half-life drugs",
      "Tell the mother to feed when it is least efficacious",
      "To feed just before the next dose, when the plasma concentration of the drug would be the least"
    ],
    correctIndex: 3,
    explanation: "Ideally, the mother should feed just before the next dose, when the plasma concentration of the drug in the mother (and consequently in the breast milk) is at its lowest trough level.",
    topicsCovered: ["General Pharmacology", "Special Populations"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q8",
    question: "In a case of acute exacerbation of asthma, salbutamol was given, however, no improvement was noticed. Intravenous corticosteroids and aminophylline were given and the condition improved. What is the probable mechanism by which the corticosteroids would have improved the condition?",
    options: [
      "Corticosteroids increase bronchial responsiveness to salbutamol",
      "Corticosteroids cause direct bronchodilatation when used with xanthines",
      "Corticosteroids indirectly increase the effect of xanthines on adenosine receptor",
      "Corticosteroids increase mucociliary clearance"
    ],
    correctIndex: 0,
    explanation: "Corticosteroids improve the condition by increasing the airway responsiveness to beta-2 agonists (salbutamol) through upregulation of beta-2 receptors.",
    topicsCovered: ["Respiratory Pharmacology", "Asthma"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q9",
    question: "Which of the following opioids is a partial agonist at mu and a full agonist at kappa receptors?",
    options: [
      "Pentazocine",
      "Buprenorphine",
      "Tramadol",
      "Fentanyl"
    ],
    correctIndex: 0,
    explanation: "Pentazocine is a mixed agonist-antagonist opioid. It is a full agonist at the kappa receptor and a partial agonist or weak antagonist at the mu receptor.",
    topicsCovered: ["Analgesics", "Opioids"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q10",
    question: "The drug of choice for insomnia in blind people is",
    options: [
      "Latanoprostene",
      "Zerviate",
      "Tasimelteon",
      "Ramelteon"
    ],
    correctIndex: 2,
    explanation: "Tasimelteon is a melatonin receptor agonist approved for the treatment of non-24-hour sleep-wake disorder, which commonly affects blind people.",
    topicsCovered: ["CNS Pharmacology", "Sedative-Hypnotics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q11",
    question: "Dofetilide belongs to which class of anti-arrhythmic drugs?",
    options: [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    correctIndex: 2,
    explanation: "Dofetilide is a Class III anti-arrhythmic drug (Potassium channel blocker).",
    topicsCovered: ["Cardiovascular Pharmacology", "Antiarrhythmics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q12",
    question: "What is the mechanism of action of vancomycin?",
    options: [
      "Cell wall synthesis inhibition",
      "Cell membrane inhibition",
      "Peptide synthesis inhibition",
      "50s ribosome inhibition"
    ],
    correctIndex: 0,
    explanation: "Vancomycin inhibits cell wall synthesis by binding to the D-alanyl-D-alanine terminus of the peptidoglycan precursor, preventing transglycosylation and transpeptidation.",
    topicsCovered: ["Antimicrobials", "Antibiotics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q13",
    question: "A drug 'X' causes an increase in Systolic BP and Heart Rate, but a decrease in Diastolic BP. What would be the probable mechanism of action?",
    options: [
      "alpha-1 agonist and beta-1 agonist",
      "M2 agonist and M3 agonist",
      "alpha-1 antagonist and beta-2 agonist",
      "beta-1 agonist and beta-2 agonist"
    ],
    correctIndex: 3,
    explanation: "Increased SBP and HR suggests Beta-1 agonism. Decreased DBP suggests vasodilation via Beta-2 agonism. Thus, the drug is likely a non-selective Beta agonist (like Isoprenaline).",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q14",
    question: "A patient requires Ceftriaxone 180 mg. You have a 2 ml syringe with 10 divisions per ml. The vial contains 500 mg/5ml of ceftriaxone. How many divisions in the 2 ml syringe will you fill to give 180 mg ceftriaxone?",
    options: [
      "18",
      "1.8",
      "20",
      "2"
    ],
    correctIndex: 0,
    explanation: "Concentration = 500mg/5ml = 100mg/ml. For 180mg, volume = 180/100 = 1.8ml. The syringe has 10 divisions per ml, so 1 division = 0.1ml. To get 1.8ml, you need 18 divisions.",
    topicsCovered: ["General Pharmacology", "Calculations"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q15",
    question: "The drug that decreases the size of prostate is:",
    options: [
      "Tamsulosin",
      "Sildenafil",
      "Finasteride",
      "Flutamide"
    ],
    correctIndex: 2,
    explanation: "Finasteride is a 5-alpha-reductase inhibitor that prevents the conversion of testosterone to DHT, leading to a reduction in prostate size over time.",
    topicsCovered: ["Endocrinology", "Urology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q16",
    question: "Which one of the following is a placebo?",
    options: [
      "Herbal medication with no effect known",
      "Physiotherapy",
      "Sham surgery",
      "Cognitive behavioural therapy"
    ],
    correctIndex: 2,
    explanation: "Sham surgery is a faked surgical intervention used as a placebo control in clinical trials. While herbal meds with no known effect can be placebos, sham surgery is the classic example of a procedural placebo.",
    topicsCovered: ["General Pharmacology", "Clinical Trials"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q17",
    question: "A young male developed 5 episodes of loose stools 2 hours after eating in a restaurant. He is afebrile and has mild dehydration. What should be the treatment?",
    options: [
      "Ciprofloxacin and tinidazole",
      "Only ciprofloxacin",
      "Only ORS",
      "Ciprofloxacin, tinidazole and ORS"
    ],
    correctIndex: 2,
    explanation: "Acute watery diarrhea without fever or blood is usually viral or toxin-mediated and self-limiting. The mainstay of treatment is rehydration with ORS. Antibiotics are not indicated.",
    topicsCovered: ["GI Pharmacology", "Management of Diarrhea"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q18",
    question: "Atropine is indicated in all of the following poisonings except ______.",
    options: [
      "Baygon",
      "TIK 20",
      "Parathion",
      "Endrin"
    ],
    correctIndex: 3,
    explanation: "Endrin is an organochlorine pesticide (neurotoxic). Atropine is the antidote for organophosphates (Parathion, TIK 20) and carbamates (Baygon), but not for organochlorines.",
    topicsCovered: ["Toxicology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q19",
    question: "27-year-old female came for treatment of infertility to OPD. Bromocriptine was prescribed. What could be the possible reason?",
    options: [
      "Hyperprolactinemia",
      "PCOD",
      "Hypogonadotrophic hypogonadism",
      "PID"
    ],
    correctIndex: 0,
    explanation: "Bromocriptine is a dopamine agonist used to treat hyperprolactinemia, which inhibits GnRH and causes infertility.",
    topicsCovered: ["Endocrinology", "Infertility"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q20",
    question: "Which is a mood stabiliser with an anti-suicidal role?",
    options: [
      "Carbamazepine",
      "Lamotrigine",
      "Lithium",
      "Valproate"
    ],
    correctIndex: 2,
    explanation: "Lithium is a mood stabilizer that has been specifically shown to reduce the risk of suicide in patients with mood disorders.",
    topicsCovered: ["Psychopharmacology", "Bipolar Disorder"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q21",
    question: "Which of the following is not an idiosyncratic reaction of carbamazepine?",
    options: [
      "Blurred vision",
      "Agranulocytosis",
      "Rash",
      "Steven Johnson Syndrome"
    ],
    correctIndex: 0,
    explanation: "Blurred vision is a dose-dependent side effect of carbamazepine, not an idiosyncratic reaction. Agranulocytosis, Rash, and SJS are idiosyncratic.",
    topicsCovered: ["Antiepileptics", "Adverse Drug Reactions"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q22",
    question: "In a middle-aged diabetic patient with chronic kidney disease stage 5, which of the following drugs can be given safely without altering the dose?",
    options: [
      "Vildagliptin",
      "Linagliptin",
      "Saxagliptin",
      "Sitagliptin"
    ],
    correctIndex: 1,
    explanation: "Linagliptin is primarily excreted via the hepatobiliary route and does not require dose adjustment in renal failure. Other DPP-4 inhibitors need renal dose adjustment.",
    topicsCovered: ["Endocrinology", "Diabetes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q23",
    question: "Which of the following drugs can be used as an antidote for fibrinolytic therapy?",
    options: [
      "Protamine",
      "Streptokinase",
      "Heparin",
      "epsilon-Aminocaproic acid"
    ],
    correctIndex: 3,
    explanation: "Epsilon-Aminocaproic acid (and Tranexamic acid) acts as an antidote for fibrinolytic therapy by inhibiting plasminogen activation.",
    topicsCovered: ["Hematology", "Antidotes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q24",
    question: "A known epileptic patient on levetiracetam has been seizure-free for 2 years. But he develops agitation and anger issues. Which of the following measures is to be taken next?",
    options: [
      "Slowly taper the drug over next 6 months",
      "Continue levetriacetam since a 5 year seizure free interval is needed",
      "Stop levetiracetam and start on a different anti-epileptic",
      "Discontinue the drug as he is seizure free"
    ],
    correctIndex: 0,
    explanation: "Behavioral changes like agitation are adverse effects of levetiracetam. Since the patient is seizure-free for 2 years, the drug can be slowly tapered. Abrupt withdrawal can cause rebound seizures.",
    topicsCovered: ["Antiepileptics", "Neurology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q25",
    question: "A drug was given IV at a rate of 1.6mg/min. The clearance of the drug is 640ml/min. The half life of the drug is 1.8 hour. Calculate the plasma concentration of the drug at steady state.",
    options: [
      "2.88mg/ml",
      "0.004mg/ml",
      "3.55mg/ml",
      "0.002mg/ml"
    ],
    correctIndex: 3,
    explanation: "At steady state, Dosing Rate = Clearance x Plasma Concentration (Css). Css = Rate / Clearance = 1.6 mg/min / 640 ml/min = 0.0025 mg/ml. The closest option is 0.002 mg/ml.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q26",
    question: "Which of the following disease-modifying anti rheumatoid drug increases extracellular adenosine?",
    options: [
      "Methotrexate",
      "Lefunamide",
      "Sulphasalazine",
      "Hydroxychloroquine"
    ],
    correctIndex: 0,
    explanation: "Methotrexate inhibits AICAR transformylase, leading to accumulation of AICAR, which inhibits AMP deaminase, causing accumulation of adenosine extracellularly, which mediates its anti-inflammatory effects.",
    topicsCovered: ["Rheumatology", "DMARDs"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q27",
    question: "Composition of Lente insulin is:",
    options: [
      "70% amorphous 30% crystalline",
      "70% crystalline 30% amorphous",
      "Only 70% amorphous",
      "Other name of NPH insulin"
    ],
    correctIndex: 1,
    explanation: "Lente insulin is a mixture of 30% Semilente (amorphous) and 70% Ultralente (crystalline) insulin.",
    topicsCovered: ["Endocrinology", "Diabetes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q28",
    question: "Mechanism of action of Oseltamivir as an antiviral agent is:",
    options: [
      "Inhibition of M2 receptor",
      "Neuraminidase inhibition",
      "Inhibition of RNA dependent DNA polymerase",
      "Apoptosis of infected cells"
    ],
    correctIndex: 1,
    explanation: "Oseltamivir is a neuraminidase inhibitor used for Influenza.",
    topicsCovered: ["Antivirals"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q29",
    question: "A male patient who is suffering from a psychotic disorder is on antipsychotic, antidepressant and antihypertensive treatment. He suddenly developed tachycardia and chest tightness. On evaluation he had metabolic acidosis. ECG showed widened QRS complex and prolonged QT interval. Which of the following drugs is responsible for this?",
    options: [
      "Amitriptyline",
      "Amlodipine",
      "Chlorthalidone",
      "Enalapril"
    ],
    correctIndex: 0,
    explanation: "The clinical scenario (Torsades de pointes/QT prolongation, QRS widening, acidosis) is suggestive of Tricyclic Antidepressant (Amitriptyline) toxicity.",
    topicsCovered: ["Psychopharmacology", "Toxicology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q30",
    question: "You and your friend plan for a mountain trip for the day after. What medication would you advise him to help with his motion sickness?",
    options: [
      "Ranitidine tablet before start of trip",
      "Dimenhydrinate before start of trip",
      "Scopolamine patch the night before trip",
      "Omeprazole the night before and before start of trip"
    ],
    correctIndex: 2,
    explanation: "Transdermal Scopolamine is the most effective drug for preventing motion sickness. It should be applied 4 hours before travel, often the night before if travel starts early.",
    topicsCovered: ["Autonomic Nervous System", "Antiemetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q31",
    question: "A patient was treated for septicemia with norepinephrine infusion. Which of the following best explains the benefit of this drug?",
    options: [
      "Bradycardia",
      "Tachycardia",
      "Increases urine output",
      "Increases mean arterial blood pressure"
    ],
    correctIndex: 3,
    explanation: "Norepinephrine is a potent vasoconstrictor (alpha activity) and inotrope (beta-1 activity). Its main benefit in septic shock is increasing mean arterial blood pressure (MAP) to maintain organ perfusion.",
    topicsCovered: ["Autonomic Nervous System", "Shock"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017-Q32",
    question: "Which of the following suggests storage of drugs in tissue?",
    options: [
      "Excretion in saliva",
      "Excretion in urine",
      "Large volume of distribution",
      "Small volume of distribution"
    ],
    correctIndex: 2,
    explanation: "A large volume of distribution (Vd) indicates that the drug is extensively distributed to tissues and stored there, leading to low plasma concentrations.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2017,
    examSession: "AIIMS"
  },

  // AIIMS 2018
  {
    id: "AIIMS2018-Q1",
    question: "Which of the following is not a side effect of salbutamol?",
    options: [
      "Hypoglycemia",
      "Hypokalemia",
      "Tremors",
      "Tachycardia"
    ],
    correctIndex: 0,
    explanation: "Salbutamol (beta-2 agonist) causes hyperglycemia (by glycogenolysis), not hypoglycemia. Common side effects include tremors, tachycardia, and hypokalemia.",
    topicsCovered: ["Autonomic Nervous System", "Respiratory Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q2",
    question: "Which of the following drugs should be sold only on prescription from a registered medical practitioner?",
    options: [
      "Schedule M drugs",
      "Schedule H drugs",
      "Schedule J drugs",
      "Schedule X drugs"
    ],
    correctIndex: 1,
    explanation: "Schedule H drugs are prescription drugs that can only be sold against a valid prescription from a registered medical practitioner. Schedule X also requires prescription but has stricter controls.",
    topicsCovered: ["General Pharmacology", "Pharmacy Laws"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q3",
    question: "The loading dose of a drug is governed primarily by:",
    options: [
      "Clearance",
      "Volume of distribution",
      "Plasma half life",
      "Bioavailability"
    ],
    correctIndex: 1,
    explanation: "Loading dose = Volume of distribution (Vd) x Target Concentration. It is determined primarily by Vd.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q4",
    question: "Therapeutic index is used for assessing which of the following factors?",
    options: [
      "Safety",
      "Efficacy",
      "Potency",
      "Toxicity"
    ],
    correctIndex: 0,
    explanation: "Therapeutic index (LD50/ED50) is a measure of the safety of a drug. A higher index implies a safer drug.",
    topicsCovered: ["General Pharmacology", "Pharmacodynamics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q5",
    question: "Which of the following drugs causes flagellate pigmentation?",
    options: [
      "Bleomycin",
      "Doxorubicin",
      "Vincristine",
      "Minocycline"
    ],
    correctIndex: 0,
    explanation: "Flagellate hyperpigmentation is a characteristic cutaneous adverse effect of Bleomycin.",
    topicsCovered: ["Anticancer Drugs", "Adverse Drug Reactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q6",
    question: "Which is the anticoagulant of choice for the management of cancer-associated thromboembolism?",
    options: [
      "Unfractionated Heparin",
      "Warfarin",
      "Low molecular weight heparin",
      "Dabigatran"
    ],
    correctIndex: 2,
    explanation: "Low molecular weight heparin (LMWH) is the preferred anticoagulant for cancer-associated thrombosis due to better efficacy and safety profile compared to Warfarin.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q7",
    question: "Which of the following new drugs has been approved for the treatment of amyotrophic lateral sclerosis?",
    options: [
      "Edaravone",
      "Piracetam",
      "Dabrafenib",
      "Trametinib"
    ],
    correctIndex: 0,
    explanation: "Edaravone is an antioxidant drug approved for the treatment of ALS. Riluzole is another drug used.",
    topicsCovered: ["CNS Pharmacology", "Neurology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q8",
    question: "What is the drug of choice for scrub typhus during pregnancy and otherwise respectively?",
    options: [
      "Chloramphenicol, doxycycline",
      "Doxycycline, doxycycline",
      "Doxycycline, azithromycin",
      "Azithromycin, doxycycline"
    ],
    correctIndex: 3,
    explanation: "Doxycycline is the drug of choice for scrub typhus generally. In pregnancy, Azithromycin is preferred due to the side effects of tetracyclines on the fetus.",
    topicsCovered: ["Antimicrobials", "Pregnancy"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q9",
    question: "Which of the following is an example of a GPCR?",
    options: [
      "Muscarinic",
      "Nicotinic",
      "GABA-A",
      "Insulin"
    ],
    correctIndex: 0,
    explanation: "Muscarinic receptors are G-protein coupled receptors. Nicotinic and GABA-A are ion channels. Insulin receptor is a tyrosine kinase.",
    topicsCovered: ["General Pharmacology", "Receptors"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q10",
    question: "The package description of a drug states that 500mg of paracetamol is present in each unit of the tablet formulation, but in reality, each unit contains only 200mg. What is the terminology used to refer to these kinds of drugs?",
    options: [
      "Misbranded drug",
      "Adulterated drugs",
      "Spurious drugs",
      "Counterfeit drugs"
    ],
    correctIndex: 0,
    explanation: "A drug is misbranded if its label makes a false claim about its contents (e.g., incorrect amount). Spurious usually refers to imitations/substitutions.",
    topicsCovered: ["General Pharmacology", "Pharmacy Laws"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q11",
    question: "A patient presented to the casualty with signs of dehydration due to severe vomiting. The intern gave the patient a parenteral medication, following which the patient developed grimacing and abnormal posturing. What could have been the inciting drug for this reaction?",
    options: [
      "Atropine",
      "Ranitidine",
      "Metoclopramide",
      "Domperidone"
    ],
    correctIndex: 2,
    explanation: "Metoclopramide (a D2 blocker) crosses the BBB and causes extrapyramidal side effects like dystonia (grimacing, abnormal posturing). Domperidone does not cross the BBB readily.",
    topicsCovered: ["GI Pharmacology", "Antiemetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q12",
    question: "Identify the wrongly matched pair of antifungals with its mechanism of action:",
    options: [
      "Ketoconazole : Lanosterol-14-demethylase inhibition",
      "Flucytosine : Inhibits microtubule synthesis and thus hinders mitosis",
      "Terbinafine : Squalene epoxidase inhibition",
      "Amphotericin B : Sequesters ergosterol"
    ],
    correctIndex: 1,
    explanation: "Flucytosine acts by inhibiting DNA synthesis (via conversion to 5-FU), not microtubule synthesis. Griseofulvin inhibits microtubules.",
    topicsCovered: ["Antifungals"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q13",
    question: "Which of the following parameters is used to assess the extent of drug absorption in a plasma concentration vs. time graph?",
    options: [
      "Tmax",
      "Cmax",
      "T1/2",
      "Area under the curve"
    ],
    correctIndex: 3,
    explanation: "Area under the curve (AUC) represents the extent of drug absorption (bioavailability). Cmax and Tmax relate to rate.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q14",
    question: "Which of the following routes of administration will not bypass hepatic first-pass metabolism?",
    options: [
      "Sublingual",
      "Oral",
      "Intravenous",
      "Transdermal"
    ],
    correctIndex: 1,
    explanation: "The Oral route involves absorption into the portal circulation, leading to hepatic first-pass metabolism. Sublingual, IV, and Transdermal routes bypass the liver initially.",
    topicsCovered: ["General Pharmacology", "Routes of Administration"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q15",
    question: "For the action of heparin as an anticoagulant, availability of which of the following chemical substances is mandatory?",
    options: [
      "Thrombin",
      "Plasmin",
      "Antithrombin-III",
      "Thrombomodulin"
    ],
    correctIndex: 2,
    explanation: "Heparin acts by activating Antithrombin-III (AT-III), which then inhibits thrombin and Factor Xa. Without AT-III, heparin is ineffective.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q16",
    question: "What is the bioavailability of a drug administered intravenously?",
    options: [
      "10%",
      "100%",
      "50%",
      "Variable"
    ],
    correctIndex: 1,
    explanation: "By definition, intravenous administration provides 100% bioavailability as the drug is placed directly into the systemic circulation.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q17",
    question: "A drug solution containing 500 mg/5 ml of the drug is given to you. You are provided with a 2 ml syringe (having 10 divisions for each ml). How many divisions of the 2 ml syringe need to be administered to deliver 180 mg of the drug to a patient?",
    options: [
      "1.8",
      "10",
      "14",
      "18"
    ],
    correctIndex: 3,
    explanation: "Concentration = 100 mg/ml. Dose = 180 mg. Volume = 1.8 ml. 1 ml = 10 divisions. 1.8 ml = 18 divisions.",
    topicsCovered: ["General Pharmacology", "Calculations"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q18",
    question: "Which of the following is gametocidal to all the species causing malaria?",
    options: [
      "Primaquine",
      "Chloroquine",
      "Quinine",
      "None"
    ],
    correctIndex: 0,
    explanation: "Primaquine is gametocidal against all species of malaria, including P. falciparum.",
    topicsCovered: ["Antimalarials"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q19",
    question: "A drug label suggests storage in a 'cool' place. What is the temperature at which this drug is to be stored?",
    options: [
      "- 2 degree Celsius",
      "0 degree Celsius",
      "2-6 degree Celsius",
      "8-15 degree Celsius"
    ],
    correctIndex: 3,
    explanation: "According to pharmacopoeial definitions, 'Cool' generally refers to a temperature between 8°C and 15°C. 'Cold' is 2-8°C.",
    topicsCovered: ["General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q20",
    question: "A patient with AIDS was treated with zidovudine, lamivudine, indinavir, ketoconazole and cotrimoxazole. He developed nephrolithiasis, central obesity, hyperlipidemia and insulin resistance. Which of the drugs could have been the cause?",
    options: [
      "Ketoconazole",
      "Indinavir",
      "Lamivudine",
      "Zidovudine"
    ],
    correctIndex: 1,
    explanation: "Indinavir (a protease inhibitor) is known to cause lipodystrophy syndrome (central obesity, insulin resistance, hyperlipidemia) and nephrolithiasis (crystaluria).",
    topicsCovered: ["Antivirals", "HIV"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q21",
    question: "If carbamazepine is added to ongoing valproate therapy, what adverse effect is risked?",
    options: [
      "Pancreatitis",
      "Thrombocytopenia",
      "Hepatotoxicity",
      "Hyperammonemia"
    ],
    correctIndex: 2,
    explanation: "The combination of valproate and carbamazepine increases the risk of hepatotoxicity. Valproate inhibits the metabolism of the active metabolite of carbamazepine.",
    topicsCovered: ["Antiepileptics", "Drug Interactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q22",
    question: "What is the mechanism of action of dapsone, considering that it is used in the treatment of leprosy, fungal infections and, also for immunomodulatory actions?",
    options: [
      "Cell wall synthesis inhibitor",
      "Folic acid synthesis inhibitor",
      "Protein synthesis inhibitor",
      "Cell membrane inhibitor"
    ],
    correctIndex: 1,
    explanation: "Dapsone is a sulfone that inhibits dihydropteroate synthase, thus inhibiting folic acid synthesis.",
    topicsCovered: ["Antimicrobials", "Leprosy"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q23",
    question: "What is the mechanism of action of sodium nitroprusside?",
    options: [
      "Increased cAMP",
      "Stimulation of guanylyl cyclase",
      "Calcium channel blockage",
      "K+ channel opener"
    ],
    correctIndex: 1,
    explanation: "Sodium nitroprusside releases nitric oxide (NO), which stimulates guanylyl cyclase, increasing cGMP, leading to vasodilation.",
    topicsCovered: ["Cardiovascular Pharmacology", "Vasodilators"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q24",
    question: "Levothyroxine/liothyronine acts by binding to thyroid receptors. Thyroid hormone receptors belong to which of the following class of receptors?",
    options: [
      "Transmembrane receptor linked to tyrosine kinase",
      "Nuclear receptor",
      "Ion channel receptor",
      "G protein coupled receptor"
    ],
    correctIndex: 1,
    explanation: "Thyroid hormone receptors are nuclear receptors that regulate gene transcription.",
    topicsCovered: ["Endocrinology", "Receptors"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q25",
    question: "The Nobel Prize in Physiology or Medicine, 2018 was awarded to James P. Allison and Tasuku Honjo for which of the following discoveries?",
    options: [
      "Discovery of mechanisms of autophagy",
      "Discoveries of molecular mechanisms controlling the circadian rhythm",
      "Discovery of cancer therapy by inhibition of negative immune regulation",
      "Discovery that mature cells can be reprogrammed to become pluripotent"
    ],
    correctIndex: 2,
    explanation: "They were awarded for the discovery of cancer therapy by inhibition of negative immune regulation (Immune Checkpoint Inhibitors).",
    topicsCovered: ["Immunopharmacology", "General Knowledge"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q26",
    question: "Which of the following drugs does not require dose reduction in patients with renal failure?",
    options: [
      "Gentamicin",
      "Vancomycin",
      "Amphotericin B",
      "Doxycycline"
    ],
    correctIndex: 3,
    explanation: "Doxycycline is excreted primarily in the bile/feces and does not require dose adjustment in renal failure.",
    topicsCovered: ["Antimicrobials", "Renal Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q27",
    question: "Which of the following drugs does not increase the risk of bleeding in patients undergoing warfarin therapy?",
    options: [
      "Cimetidine",
      "Carbamazepine",
      "Isoniazid",
      "Amiodarone"
    ],
    correctIndex: 1,
    explanation: "Carbamazepine is an enzyme inducer. It decreases warfarin levels and reduces the risk of bleeding (increases risk of clotting). The others are enzyme inhibitors.",
    topicsCovered: ["Anticoagulants", "Drug Interactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q28",
    question: "Which of the following is used in acute mountain sickness?",
    options: [
      "Dexamathasone",
      "Digoxin",
      "Diltiazem",
      "Acetazolamide"
    ],
    correctIndex: 3,
    explanation: "Acetazolamide (carbonic anhydrase inhibitor) is used for the prophylaxis and treatment of acute mountain sickness. Dexamethasone is also used but Acetazolamide is primary.",
    topicsCovered: ["Diuretics", "Respiratory Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q29",
    question: "Which of the following anti-tubercular drugs is associated with ophthalmic toxicity?",
    options: [
      "Ethambutol",
      "Isoniazid",
      "Kanamycin",
      "Rifampin"
    ],
    correctIndex: 0,
    explanation: "Ethambutol causes retrobulbar neuritis (optic neuritis), leading to decreased visual acuity and color blindness.",
    topicsCovered: ["Antimicrobials", "Tuberculosis"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q30",
    question: "A patient with diabetic macular edema developed glaucoma. Which of the following drugs would you consider giving last?",
    options: [
      "Beta blocker",
      "Alpha agonist",
      "Pilocarpine",
      "Prostaglandin analogues"
    ],
    correctIndex: 3,
    explanation: "Prostaglandin analogues (e.g., Latanoprost) can cause macular edema and should be avoided or used with caution in patients with existing macular edema.",
    topicsCovered: ["Ophthalmology", "Glaucoma"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q31",
    question: "What is the mechanism by which acetylcholine causes a decrease in the heart rate?",
    options: [
      "Delayed diastolic depolarization",
      "Increase in plateau",
      "Decrease in preload",
      "Increase in afterload"
    ],
    correctIndex: 0,
    explanation: "Acetylcholine acts on M2 receptors, opening K+ channels (IK-ACh), causing hyperpolarization and decreasing the slope of phase 4 diastolic depolarization, thus slowing heart rate.",
    topicsCovered: ["Autonomic Nervous System", "Cardiovascular Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q32",
    question: "Diamox is given to a patient with glaucoma. It is a non-competitive inhibitor of the carbonic anhydrase enzyme. Which of the following would be the effect of this drug?",
    options: [
      "Decrease in Vmax",
      "Decrease in Km",
      "Decrease in both Km and Vmax",
      "No change in Vmax"
    ],
    correctIndex: 0,
    explanation: "Non-competitive inhibitors decrease Vmax but do not change Km.",
    topicsCovered: ["Enzymology", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q33",
    question: "Low apparent volume of distribution of drug indicates",
    options: [
      "Low t 1/2",
      "Low bioavailability",
      "Low efficacy",
      "Not extensively distributed to tissues"
    ],
    correctIndex: 3,
    explanation: "A low volume of distribution (Vd) indicates the drug remains in the plasma/vascular compartment and is not extensively distributed to tissues.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q34",
    question: "An infant had a serum bilirubin level of 33 mg/dL. The mother might have taken which of the following drugs during the third trimester for this to occur?",
    options: [
      "Ampicillin",
      "Co-trimoxazole",
      "Azithromycin",
      "Chloramphenicol"
    ],
    correctIndex: 1,
    explanation: "Sulfonamides (in Co-trimoxazole) displace bilirubin from albumin, increasing the risk of kernicterus in the newborn.",
    topicsCovered: ["Antimicrobials", "Adverse Drug Reactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018-Q35",
    question: "Lithium usage in pregnancy can lead to which of the following teratogenic effects?",
    options: [
      "Cardiac defects",
      "Facial defects",
      "CNS defects",
      "Urogenital defects"
    ],
    correctIndex: 0,
    explanation: "Lithium use during pregnancy is associated with Ebstein's anomaly (a cardiac defect).",
    topicsCovered: ["Psychopharmacology", "Teratogenicity"],
    year: 2018,
    examSession: "AIIMS"
  },

  // AIIMS 2019 (May & Nov)
  {
    id: "AIIMS2019-Q1",
    question: "Which of the following is not an adverse effect of salbutamol?",
    options: [
      "Tachycardia",
      "Tolerance",
      "Hypokalemia",
      "Hypoglycemia"
    ],
    correctIndex: 3,
    explanation: "Salbutamol causes hyperglycemia, not hypoglycemia.",
    topicsCovered: ["Respiratory Pharmacology", "Adverse Drug Reactions"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q2",
    question: "Propranolol is drug of choice for:",
    options: [
      "Ulcerated infantile hemangioma",
      "Lymphangioma circumscriptum",
      "Capillary malformation",
      "Pyogenic granuloma"
    ],
    correctIndex: 0,
    explanation: "Propranolol is the drug of choice for infantile hemangioma.",
    topicsCovered: ["Cardiovascular Pharmacology", "Dermatology"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q3",
    question: "Clostridium difficile associated diarrhea occurs maximally due to:",
    options: [
      "Lincosamides",
      "Tetracyclines",
      "Carbapenems",
      "Macrolide"
    ],
    correctIndex: 0,
    explanation: "Lincosamides (Clindamycin) are classically associated with the highest risk of C. difficile associated diarrhea (pseudomembranous colitis). Cephalosporins and Fluoroquinolones are also common causes.",
    topicsCovered: ["Antimicrobials", "Adverse Drug Reactions"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q4",
    question: "A 53 year old man is found to have stage 2 hypertension without any co morbidities. Which drug will you start?",
    options: [
      "Furosemide",
      "Chlorthalidone",
      "Spironolactone",
      "Triamterene"
    ],
    correctIndex: 1,
    explanation: "Thiazide-like diuretics (Chlorthalidone) are preferred first-line agents for uncomplicated hypertension.",
    topicsCovered: ["Cardiovascular Pharmacology", "Hypertension"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q5",
    question: "Which of the following is a schedule X drug?",
    options: [
      "Halothane",
      "Thalidomide",
      "Ketamine",
      "Colistin"
    ],
    correctIndex: 2,
    explanation: "Ketamine is a Schedule X drug due to its abuse potential.",
    topicsCovered: ["Pharmacy Laws"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q6",
    question: "LMWH is given by which route?",
    options: [
      "Intravenous",
      "Subcutaneous",
      "Intramuscular",
      "Intradermal"
    ],
    correctIndex: 1,
    explanation: "Low Molecular Weight Heparin (LMWH) is administered subcutaneously.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q7",
    question: "A patient presents to the emergency department with diarrhea, sweating, excessive lacrimation, and salivation. His pulse rate is 55/min and his plasma cholinesterase level was 50U/mL. Which of the following can be used to treat this patient?",
    options: [
      "Neostigmine",
      "Atropine",
      "Epinephrine",
      "Benztropine"
    ],
    correctIndex: 1,
    explanation: "The patient has organophosphate poisoning (Cholinergic crisis). Atropine is the specific antidote for muscarinic symptoms.",
    topicsCovered: ["Toxicology", "Autonomic Nervous System"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q8",
    question: "What is pegloticase used for?",
    options: [
      "Chronic gout",
      "Rheumatoid arthritis",
      "Psoriatric arthritis",
      "Paralytic ileus"
    ],
    correctIndex: 0,
    explanation: "Pegloticase (recombinant uricase) is used for treatment-refractory chronic gout.",
    topicsCovered: ["Rheumatology", "Gout"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q9",
    question: "Which of the following GPCRs does not act via the K+ channel?",
    options: [
      "Angiotensin 1 receptor",
      "Muscarinic M2 receptor",
      "Dopamine D2 receptor",
      "Serotonin 5 HT1 receptor"
    ],
    correctIndex: 0,
    explanation: "Angiotensin II type 1 (AT1) receptor is Gq coupled and acts via PLC/IP3/Ca2+ pathway, not K+ channels. M2, D2, and 5HT1 are Gi coupled and often open K+ channels.",
    topicsCovered: ["General Pharmacology", "Receptors"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q10",
    question: "Which of the following is not used in heart failure?",
    options: [
      "Trimetazidine",
      "Sacubitril",
      "Metoprolol",
      "Nesiritide"
    ],
    correctIndex: 0,
    explanation: "Trimetazidine is an anti-anginal drug (metabolic modulator). While it might help in ischemic cardiomyopathy, it is primarily approved for angina, not heart failure guidelines compared to the others.",
    topicsCovered: ["Cardiovascular Pharmacology", "Heart Failure"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q11",
    question: "Which of the following causes an increase in ACh release from the presynaptic neuron?",
    options: [
      "Potassium channel blocker",
      "Sodium channel blocker",
      "Calcium channel blocker",
      "Chlorine channel blocker"
    ],
    correctIndex: 0,
    explanation: "Potassium channel blockers (like aminopyridines) prolong depolarization, leading to increased calcium influx and increased ACh release.",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q12",
    question: "Apart from mu-opioid receptors, on which other receptor does tramadol act?",
    options: [
      "Anticholinergic",
      "5HT1a inhibition",
      "Serotonergic and norepinephrine reuptake inhibition",
      "Antihistaminic"
    ],
    correctIndex: 2,
    explanation: "Tramadol acts on Mu receptors and also inhibits the reuptake of Serotonin (5HT) and Norepinephrine.",
    topicsCovered: ["Analgesics"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q13",
    question: "In which of the following conditions is non-pulsatile dosing of GnRH agonist not used?",
    options: [
      "Male infertility",
      "Endometriosis",
      "Precocious puberty",
      "Prostate cancer"
    ],
    correctIndex: 0,
    explanation: "Non-pulsatile (continuous) GnRH agonists cause downregulation and suppression of gonadotropins (used in prostate cancer, endometriosis, precocious puberty). Pulsatile dosing stimulates gonadotropins and is used for infertility.",
    topicsCovered: ["Endocrinology"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q14",
    question: "Which of the following cannot be used to decrease intraocular pressure in glaucoma?",
    options: [
      "Dexamethasone",
      "Acetazolamide",
      "Apraclonidine",
      "Mannitol"
    ],
    correctIndex: 0,
    explanation: "Dexamethasone (steroid) increases intraocular pressure and can cause glaucoma. It is not used to treat it.",
    topicsCovered: ["Ophthalmology", "Glaucoma"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q15",
    question: "Prucalopride is a ______.",
    options: [
      "5HT2a agonist",
      "5HT2b agonist",
      "5HT4 antagonist",
      "5HT4 agonist"
    ],
    correctIndex: 3,
    explanation: "Prucalopride is a selective 5-HT4 receptor agonist used for chronic constipation.",
    topicsCovered: ["GI Pharmacology"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q16",
    question: "Z track technique is used for?",
    options: [
      "Administration of nicotine patches",
      "Monitoring of carbamazepine therapy",
      "Administration of long acting depot antipsychotics",
      "Monitoring of lithium therapy"
    ],
    correctIndex: 2,
    explanation: "The Z-track technique is used for intramuscular injection of irritating substances or depot antipsychotics to prevent leakage into subcutaneous tissues.",
    topicsCovered: ["General Pharmacology", "Drug Administration"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q17",
    question: "Tafenoquine is used in which of the following conditions?",
    options: [
      "Radical cure of plasmodium vivax",
      "Prophylaxis of malaria in pregnancy",
      "Treatment of severe falciparum malaria",
      "Treatment of malaria in children <2 years"
    ],
    correctIndex: 0,
    explanation: "Tafenoquine is used for the radical cure (prevention of relapse) of P. vivax malaria (targets hypnozoites).",
    topicsCovered: ["Antimalarials"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q18",
    question: "Which is not given in Wilson's disease?",
    options: [
      "Zinc",
      "Penicillamine",
      "Calcium citrate",
      "Trientine"
    ],
    correctIndex: 2,
    explanation: "Calcium citrate is not a treatment for Wilson's disease. Treatments include Copper chelators (Penicillamine, Trientine) and Zinc (blocks copper absorption).",
    topicsCovered: ["Toxicology", "Metabolic Disorders"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q19",
    question: "What dose of epinephrine is used in anaphylactic shock?",
    options: [
      "1:10000 I.V. - 10 ml",
      "1:1000 I.M. - 0.5 ml",
      "1:1000 I.M. - 1 ml",
      "1:1000 I.V. - 0.5 ml"
    ],
    correctIndex: 1,
    explanation: "The standard dose for anaphylaxis is Epinephrine 0.5 mg (0.5 ml of 1:1000) Intramuscularly.",
    topicsCovered: ["Emergency Medicine"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q20",
    question: "Which of the following is true about tedizolid?",
    options: [
      "Active against gram positive organisms",
      "Poor oral bioavailability",
      "Active against anaerobes",
      "Causes peripheral neuropathy"
    ],
    correctIndex: 0,
    explanation: "Tedizolid is an oxazolidinone active against Gram-positive bacteria, including MRSA. It has high oral bioavailability.",
    topicsCovered: ["Antimicrobials"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q21",
    question: "The best approach in the treatment of chronic SIADH is ______",
    options: [
      "Tolvaptan",
      "Reducing fluid intake to <500 ml per day",
      "Demeclocycline",
      "Fludrocortisone"
    ],
    correctIndex: 0,
    explanation: "Tolvaptan (V2 antagonist) is the best approach for chronic SIADH, especially to correct hyponatremia.",
    topicsCovered: ["Endocrinology"],
    year: 2019,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2019-Q22",
    question: "A patient who was diagnosed with ADPKD was prescribed tolvaptan. After a few weeks, he presented with dry mouth and increased thirst. What is the likely cause?",
    options: [
      "Increased free water clearance",
      "V2 receptor agonism",
      "Increased renal cAMP levels",
      "Increase in urine osmolality"
    ],
    correctIndex: 0,
    explanation: "Tolvaptan blocks V2 receptors, preventing water reabsorption. This increases free water clearance (aquaresis), causing thirst and dry mouth.",
    topicsCovered: ["Renal Pharmacology"],
    year: 2019,
    examSession: "AIIMS"
  },

  // INI-CET 2021
  {
    id: "INICET2021-Q1",
    question: "Which of the following is false about the selection of essential drugs?",
    options: [
      "Adequate safety profile needs to be established",
      "Cost to benefit has to be considered",
      "Fixed drug combination is preferred over single drugs",
      "Disease prevalence is considered"
    ],
    correctIndex: 2,
    explanation: "Fixed drug combinations are generally NOT preferred over single drugs unless they offer a specific advantage. Single compounds are preferred for essential lists.",
    topicsCovered: ["General Pharmacology", "Essential Medicines"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q2",
    question: "A 34-year-old man with hypertension is diagnosed with stage 4 chronic kidney disease, with eGFR of <30. His doctor wants to prescribe a thiazide diuretic. Which of the following can be given?",
    options: [
      "Chlorothiazide",
      "Chlorthalidone",
      "Metolazone",
      "Hydrochlorothiazide"
    ],
    correctIndex: 2,
    explanation: "Standard thiazides lose efficacy at low GFR (<30). Metolazone remains effective even in severe renal failure.",
    topicsCovered: ["Diuretics", "Renal Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q3",
    question: "A patient who was diagnosed with epilepsy was put on retigabine TDS. Now phenytoin is being added. Which of the following changes should be made to retigabine?",
    options: [
      "Increase the dose",
      "Decrease the dose",
      "Stop the drug",
      "Stop retigabine and start on carbamazepine"
    ],
    correctIndex: 0,
    explanation: "Phenytoin is a potent enzyme inducer and increases the metabolism of retigabine, reducing its plasma levels. Therefore, the dose of retigabine needs to be increased.",
    topicsCovered: ["Antiepileptics", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q4",
    question: "A patient with history of ischemic stroke was started on clopidogrel. However, she had another attack of stroke after 6 months. Which of the following is likely to be responsible for the failure of clopidogrel in this patient?",
    options: [
      "Downregulation of CYP2C19",
      "Downregulation of CYP2D6",
      "Upregulation of CYP1A1",
      "Downregulation of CYP2E1"
    ],
    correctIndex: 0,
    explanation: "Clopidogrel is a prodrug activated by CYP2C19. Poor metabolizers (downregulation/genetic polymorphism of CYP2C19) cannot activate the drug efficiently, leading to therapeutic failure.",
    topicsCovered: ["Antiplatelets", "Pharmacogenetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q5",
    question: "Which of the following can be given for long term management of obesity?",
    options: [
      "Liraglutide",
      "Metformin",
      "Sibutramine",
      "Fenfluramine"
    ],
    correctIndex: 0,
    explanation: "Liraglutide (a GLP-1 receptor agonist) is approved for the long-term management of obesity. Sibutramine and Fenfluramine are withdrawn.",
    topicsCovered: ["Endocrinology", "Obesity"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q6",
    question: "An HIV-positive woman on ART was prescribed ergotamine for a migraine attack 4 days back. She presented with complaints that she is unable to feel her legs from the mid-thigh to her toes, for the past two days. The angiography image is given below. What is the likely diagnosis?",
    options: [
      "Atherosclerosis",
      "Ergotism",
      "Polyradicular neuropathy",
      "Herniated disc"
    ],
    correctIndex: 1,
    explanation: "Protease inhibitors (used in ART) inhibit CYP3A4, which metabolizes ergotamine. This leads to ergotamine toxicity (ergotism), causing severe vasoconstriction and ischemia.",
    topicsCovered: ["Toxicology", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q7",
    question: "Topiramate is used for",
    options: [
      "Treatment of migrane",
      "Treatment of Lennox Gastaut syndrome",
      "Prophylaxis of ADHD",
      "Treatment of dementia"
    ],
    correctIndex: 1,
    explanation: "Topiramate is approved for the treatment of seizures associated with Lennox-Gastaut syndrome and for migraine prophylaxis (not acute treatment).",
    topicsCovered: ["Antiepileptics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q8",
    question: "Which of the following is incorrectly matched?",
    options: [
      "Andexanet alfa: Edoxaban",
      "Andexanet alfa: Rivaroxaban",
      "Idarucizumab : Dabigatran",
      "Ciraparantag: Fondaparinux"
    ],
    correctIndex: 3,
    explanation: "Ciraparantag is being developed as a universal reversal agent, but currently, there is no specific approved antidote for Fondaparinux (unlike the others). However, Andexanet alfa reverses factor Xa inhibitors. Idarucizumab reverses Dabigatran. The question implies Ciraparantag is incorrectly matched likely because it is not the standard/established antidote or Fondaparinux is difficult to reverse. Actually, the key says 'd'.",
    topicsCovered: ["Anticoagulants", "Antidotes"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q9",
    question: "Inhaled Nitric oxide is approved for treatment of",
    options: [
      "Labile hypertension",
      "Pulmonary hypertension",
      "Treatment of resistant migraine",
      "Resistant Parkinson's disease"
    ],
    correctIndex: 1,
    explanation: "Inhaled Nitric Oxide acts as a selective pulmonary vasodilator and is approved for the treatment of pulmonary hypertension (e.g., in neonates).",
    topicsCovered: ["Respiratory Pharmacology", "Vasodilators"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q10",
    question: "Nivolumab is used as a checkpoint inhibitor in",
    options: [
      "Retinoblastoma",
      "Medulloblastoma",
      "Pleuropulmonary blastoma",
      "Hodgkin's lymphoma"
    ],
    correctIndex: 3,
    explanation: "Nivolumab (PD-1 inhibitor) is approved for classical Hodgkin's lymphoma, among other cancers.",
    topicsCovered: ["Anticancer Drugs", "Immunotherapy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q11",
    question: "Paradoxical bronchoconstriction seen with ipratropium bromide is due to all except",
    options: [
      "Hypertonic saline",
      "EDTA",
      "Benzalkonium chloride",
      "Prejunctional M2 receptor blockade"
    ],
    correctIndex: 0,
    explanation: "Paradoxical bronchoconstriction is linked to additives like Benzalkonium chloride and EDTA, and blockade of prejunctional M2 autoreceptors. Hypertonic saline can cause bronchoconstriction but is not the primary mechanism for ipratropium's paradoxical effect.",
    topicsCovered: ["Respiratory Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q12",
    question: "Antimicrobial combinations are used in all except",
    options: [
      "Gonorrhea",
      "Tuberculosis",
      "Intra abdominal infections",
      "Malaria"
    ],
    correctIndex: 0,
    explanation: "Combination therapy is standard for TB, Malaria, and mixed intra-abdominal infections. Uncomplicated Gonorrhea is often treated with single-dose Ceftriaxone (plus Azithromycin sometimes, but single drug is feasible in some guidelines). TB and Malaria strictly require combinations to prevent resistance.",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q13",
    question: "Which of the following steps does Vancomycin act on?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctIndex: 3,
    explanation: "Vancomycin inhibits cell wall synthesis by binding to D-Ala-D-Ala, preventing the transglycosylation/transpeptidation step (Stage 4 in typical diagrams).",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q14",
    question: "What would happen to the half-life and plasma concentration of a drug which follows first-order kinetics, if the dose is doubled?",
    options: [
      "Half-life doubles and plasma concentration remains the same",
      "Half-life remains the same and plasma concentration doubles",
      "Half-life and plasma concentration remains the same",
      "Half life and plasma concentration doubles"
    ],
    correctIndex: 1,
    explanation: "In first-order kinetics, half-life is constant and independent of dose. Plasma concentration is proportional to the dose (linear kinetics).",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q15",
    question: "Which of the following is not an off-label use of risperidone?",
    options: [
      "OCD",
      "Dementia",
      "PTSD",
      "Bipolar disorder"
    ],
    correctIndex: 3,
    explanation: "Risperidone is FDA approved (on-label) for Bipolar Disorder. Uses for OCD, Dementia, and PTSD are considered off-label.",
    topicsCovered: ["Psychopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q16",
    question: "The elimination rate constant of a drug is 0.05/hr. What is its half-life?",
    options: [
      "20.8 hours",
      "6.9 hours",
      "13.8 hours",
      "9.8 hours"
    ],
    correctIndex: 2,
    explanation: "Half-life (t1/2) = 0.693 / k. t1/2 = 0.693 / 0.05 = 13.86 hours.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q17",
    question: "A patient is on phenytoin for a seizure disorder. He was prescribed sucralfate 4 times a day for peptic ulcers. What should be the minimum duration of time between consumption of these drugs?",
    options: [
      "30 minutes",
      "60 minutes",
      "90 minutes",
      "120 minutes"
    ],
    correctIndex: 3,
    explanation: "Sucralfate can bind to phenytoin and reduce its absorption. A gap of at least 2 hours (120 minutes) is recommended between administrations.",
    topicsCovered: ["Drug Interactions", "GI Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q18",
    question: "Category A, B, C, D, X in drug classification are indicative of which of the following?",
    options: [
      "Safety in pregnancy",
      "Dose adjustment in renal failure",
      "Cost ratio from cheap to expensive",
      "As per safety or therapeutic index"
    ],
    correctIndex: 0,
    explanation: "These categories (A, B, C, D, X) refer to the FDA pregnancy safety classification.",
    topicsCovered: ["General Pharmacology", "Pregnancy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q19",
    question: "Identify the false statement regarding suicidal inhibition.",
    options: [
      "The inhibitor can bind with any site resulting in suicidal inhibition",
      "The binding of the enzyme to the substrate analogue is irreversible",
      "They are enzyme specific and used in rational drug design",
      "The inhibitor forms a product with the enzyme and the product inhibits it"
    ],
    correctIndex: 0,
    explanation: "Suicidal inhibition (mechanism-based inhibition) involves binding to the active site where the enzyme converts the inhibitor into a reactive intermediate that irreversibly binds. It does not bind to 'any site'.",
    topicsCovered: ["Enzymology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q20",
    question: "The dose at which dopamine acts on beta 1 receptors is ____.",
    options: [
      "2-10 mcg/kg/min",
      "<2 mcg/kg/min",
      "10-20 mcg/kg/min",
      ">20 mcg/kg/min"
    ],
    correctIndex: 0,
    explanation: "Dopamine acts on Beta-1 receptors at moderate doses (2-10 mcg/kg/min). Low doses (<2) affect D1, and high doses (>10) affect Alpha-1.",
    topicsCovered: ["Autonomic Nervous System", "Cardiovascular Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q21",
    question: "Which of the following is the incorrect statement regarding clomiphene citrate?",
    options: [
      "Causes monofollicular development",
      "Inhibits negative feedback on GnRH",
      "Causes endometrial thinning",
      "Can be used with gonadotropin"
    ],
    correctIndex: 0,
    explanation: "Clomiphene promotes multifollicular development, not monofollicular. It works by inhibiting negative feedback, leading to increased FSH/LH.",
    topicsCovered: ["Endocrinology", "Infertility"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q22",
    question: "What is the mechanism of action of remdesivir?",
    options: [
      "RNA-dependent DNA polymerase inhibition",
      "RNA-dependent RNA polymerase inhibition",
      "Fusion inhibition",
      "Entry inhibition"
    ],
    correctIndex: 1,
    explanation: "Remdesivir inhibits the viral RNA-dependent RNA polymerase (RdRp), preventing viral replication.",
    topicsCovered: ["Antivirals"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q23",
    question: "Administration of which of the following drugs would increase the bioavailability of saquinavir?",
    options: [
      "Ritonavir",
      "Vitamin C",
      "Cimetidine",
      "Ganciclovir"
    ],
    correctIndex: 0,
    explanation: "Ritonavir inhibits CYP3A4, which metabolizes Saquinavir. Co-administration boosts Saquinavir levels.",
    topicsCovered: ["Antivirals", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q24",
    question: "The table below gives the AUC of drug B alone and that of drug B when combined with another drug A. If the value is <0.01, then which of the following statements is true?",
    options: [
      "Drug A decreases intestinal absorption of Drug B",
      "Drug A reduces first pass metabolism of Drug B",
      "Drug A increases the metabolism of Drug B",
      "Drug A increases renal elimination of Drug B"
    ],
    correctIndex: 1,
    explanation: "If the ratio of AUC (combined/alone) is very high, Drug A inhibits metabolism. If the ratio is very low (<0.01 implies AUC combined is 1% of AUC alone), Drug A induces metabolism. Wait, the key says 'b' (Reduces first pass metabolism). If Drug A reduces first pass, AUC should increase. If the value is ratio (Combined/Alone) and it's <0.01, AUC decreased. If the table implies boosting, the ratio would be >1. Let's follow the key 'b': Drug A reduces first pass metabolism (Enzyme Inhibition). This implies AUC increases. The text mentions '<0.01' which is confusing or likely refers to p-value or a specific ratio. Based on the key and standard boosting questions, enzyme inhibition is the intended concept.",
    topicsCovered: ["Pharmacokinetics", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q25",
    question: "What is the mechanism of action of cyclosporine?",
    options: [
      "Inhibition of calcineurin",
      "AMP kinase stimulation",
      "IMP dehydrogenase inhibition",
      "Dihydro-orotate dehydrogenase inhibition"
    ],
    correctIndex: 0,
    explanation: "Cyclosporine inhibits calcineurin, thereby preventing the transcription of IL-2.",
    topicsCovered: ["Immunopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q26",
    question: "Anionic and weakly acidic drugs bind to which of the following?",
    options: [
      "Albumin",
      "Globulin",
      "Lipoprotein",
      "Alpha-1 glycoprotein"
    ],
    correctIndex: 0,
    explanation: "Acidic drugs bind to Albumin. Basic drugs bind to Alpha-1 acid glycoprotein.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q27",
    question: "A 14-month-old boy was diagnosed with Hemophilus influenza meningitis. The initial treatment plan was to start on ampicillin but later was shifted to ceftriaxone. What could be the probable reason?",
    options: [
      "Hemophilus alters penicillin binding protein sites, hence resistant to ampicillin",
      "Easier to administer IV ceftriaxone than IV ampicillin",
      "Cotrimoxazole is the drug of choice, but patient is allergic to sulfa drugs",
      "Hemophilus produces beta lactamase, hence resistant to ampicillin"
    ],
    correctIndex: 3,
    explanation: "H. influenzae often produces beta-lactamases, rendering it resistant to Ampicillin. Ceftriaxone is stable against these enzymes and is the drug of choice for meningitis.",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q28",
    question: "A patient who is a known case of cirrhosis of the liver presents with abdominal distension and swelling of the lower limbs. The preferred diuretic for this patient would be",
    options: [
      "Triamterene",
      "Eplerenone",
      "Chlorthalidone",
      "Furosemide"
    ],
    correctIndex: 1,
    explanation: "Aldosterone antagonists (Spironolactone, Eplerenone) are the diuretics of choice for ascites in liver cirrhosis because secondary hyperaldosteronism is a major pathophysiological factor.",
    topicsCovered: ["Diuretics", "GI Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q29",
    question: "Which of the following is the most effective drug in smoking cessation?",
    options: [
      "Varenicline",
      "Buspirone SR",
      "Nicotine gum",
      "Rimonabant"
    ],
    correctIndex: 0,
    explanation: "Varenicline is considered the most effective pharmacotherapy for smoking cessation.",
    topicsCovered: ["CNS Pharmacology", "Addiction"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q30",
    question: "A patient who was on warfarin therapy for atrial fibrillation is prescribed a cephalosporin antibiotic for the treatment of a lower respiratory tract infection. He reports back to the hospital after having developed hemarthrosis. Which of the following cephalosporins is likely to have caused this?",
    options: [
      "Cefixime",
      "Cefoperazone",
      "Ceftobiprole",
      "Ceftazidime"
    ],
    correctIndex: 1,
    explanation: "Cefoperazone inhibits Vitamin K epoxide reductase (due to MTT side chain), potentiating Warfarin's effect and causing bleeding.",
    topicsCovered: ["Antimicrobials", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q31",
    question: "Which of the following is a novel anti-depressant?",
    options: [
      "Lurasidone",
      "Vilazodone",
      "Asenapine",
      "Blonanserin"
    ],
    correctIndex: 1,
    explanation: "Vilazodone is a novel antidepressant. The others are atypical antipsychotics.",
    topicsCovered: ["Psychopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q32",
    question: "A 57-year-old man was brought to the hospital with complaints of dizziness and breathlessness. During his physical examination, you notice the following discolouration over his face. He is presently being treated with amiodarone, metoprolol, verapamil, lisinopril, and amlodipine. Which of the following drugs is most likely responsible?",
    options: [
      "Amiodarone",
      "Amlodipine",
      "Metoprolol",
      "Verapamil"
    ],
    correctIndex: 0,
    explanation: "Amiodarone can cause a characteristic blue-grey skin discoloration (ceruloderma) in sun-exposed areas.",
    topicsCovered: ["Antiarrhythmics", "Adverse Drug Reactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q33",
    question: "Which of the following is a centrally acting opioid antitussive?",
    options: [
      "Ambroxol",
      "Diphenoxylate",
      "Levopropoxyphene",
      "Levorphanol"
    ],
    correctIndex: 2,
    explanation: "Levopropoxyphene is a centrally acting opioid antitussive. Levorphanol is an analgesic.",
    topicsCovered: ["Respiratory Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q34",
    question: "The anti-epileptic drugs which can also be used for the treatment of neuropathic pain are",
    options: [
      "1, 2 and 3",
      "1, 2 and 4",
      "1, 3 and 4",
      "2 and 4 only"
    ],
    correctIndex: 1,
    explanation: "Common antiepileptics for neuropathic pain include Carbamazepine (1), Valproate (2), and Gabapentin (4). Ethosuximide (3) is not used for pain.",
    topicsCovered: ["Antiepileptics", "Pain Management"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021-Q35",
    question: "A breast cancer patient post-chemotherapy developed a low-grade fever with anemia and leukocytopenia (<4000/cm3; DNC: 30). Which of the following antibiotics will not be used in the empirical management of this patient?",
    options: [
      "Cefepime",
      "Piperacillin-Tazobactam",
      "Linezolid",
      "Meropenem"
    ],
    correctIndex: 2,
    explanation: "Linezolid is bacteriostatic and causes myelosuppression, worsening leukocytopenia. Bactericidal drugs like Cefepime are preferred for neutropenic fever.",
    topicsCovered: ["Antimicrobials", "Oncology"],
    year: 2021,
    examSession: "INI-CET"
  },

  {
    id: "AIIMS2017_Q1",
    question: "How much drug will remain at the end of 6 hours when a patient is given 200 mg drug, 75 mg excreted in 90 min and if the drug follows first-order kinetics?",
    options: [
      "50 mg",
      "30.5 mg",
      "12.5 mg",
      "6.25 mg"
    ],
    correctIndex: 1,
    explanation: "In first-order kinetics, a constant fraction of the drug is eliminated per unit time. 75 mg of 200 mg is eliminated in 90 mins (1.5 hours), which is 37.5%. Thus, 62.5% (5/8) remains every 90 mins. \n6 hours = 4 x 90 mins.\nAfter 1st 90 mins: 125 mg remains.\nAfter 2nd: ~78.1 mg.\nAfter 3rd: ~48.8 mg.\nAfter 4th (6 hours): ~30.5 mg.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q2",
    question: "What is the most bactericidal anti-leprotic drug amongst the given drugs?",
    options: [
      "Amoxicillin",
      "Ciprofloxacin",
      "Ofloxacin",
      "Erythromycin"
    ],
    correctIndex: 2,
    explanation: "Ofloxacin is the most bactericidal drug against M. leprae among the choices provided. Rifampicin is the most potent overall bactericidal anti-leprotic drug, but it is not in the options.",
    topicsCovered: ["Antimicrobials", "Leprosy"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q3",
    question: "Which of the following is not true about P-glycoprotein?",
    options: [
      "Pgp stands for permeability glycoprotein",
      "Also known as CD243",
      "Also known as ABCB1",
      "Also known as MDR2"
    ],
    correctIndex: 3,
    explanation: "P-glycoprotein (P-gp) is known as Multidrug Resistance Protein 1 (MDR1), not MDR2. It is also designated as CD243 and ABCB1 (ATP-binding cassette sub-family B member 1). It functions as an efflux transporter.",
    topicsCovered: ["General Pharmacology", "Pharmacokinetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q4",
    question: "For which of the following drugs is absorption increased after a fatty meal?",
    options: [
      "Griseofulvin",
      "Amphotericin B",
      "Ampicillin",
      "Aspirin"
    ],
    correctIndex: 0,
    explanation: "Griseofulvin is a lipophilic drug, and its absorption is significantly enhanced when taken with a fatty meal. Other drugs with similar properties include Atovaquone and Lumefantrine.",
    topicsCovered: ["Antifungals", "Pharmacokinetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q5",
    question: "A patient with Prinzmetal angina is administered isosorbide mononitrate and is noticed to have symptomatic relief. What is the mechanism of action of nitrate in this case?",
    options: [
      "Endothelium independent coronary vasodilation",
      "Reduced cardiac contractility",
      "Increased left ventricular end diastolic volume",
      "Decreased diastolic perfusion pressure"
    ],
    correctIndex: 0,
    explanation: "In Prinzmetal (vasospastic) angina, nitrates provide relief primarily through endothelium-independent vasodilation of the coronary arteries, reversing the vasospasm.",
    topicsCovered: ["Cardiovascular Pharmacology", "Antianginal Drugs"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q6",
    question: "The drug of choice in anaphylactic shock is?",
    options: [
      "Adrenaline 0.5 mg 1/1000 IM",
      "Adrenaline 1 mg 1/10000 IV",
      "Atropine 3 mg",
      "Adenosine 6 mg followed by 12 mg IV"
    ],
    correctIndex: 0,
    explanation: "Adrenaline (Epinephrine) 0.5 mg (0.5 ml of 1:1000 solution) given Intramuscularly (IM) is the first-line drug of choice for anaphylactic shock.",
    topicsCovered: ["Autonomic Nervous System", "Emergency Medicine"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q7",
    question: "What instruction do you give to a mother who is lactating for drug use?",
    options: [
      "No advice as most of drug are not present in breast milk",
      "Give longer half-life drugs",
      "Tell the mother to feed when it is least efficacious",
      "To feed just before the next dose, when the plasma concentration of the drug would be the least"
    ],
    correctIndex: 3,
    explanation: "To minimize drug exposure to the infant, a lactating mother should breastfeed just before taking the next dose of the medication. This ensures the feeding occurs when the maternal plasma drug concentration is at its lowest (trough level).",
    topicsCovered: ["General Pharmacology", "Special Populations"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q8",
    question: "In a case of acute exacerbation of asthma, salbutamol was given, however, no improvement was noticed. Intravenous corticosteroids and aminophylline were given and the condition improved. What is the probable mechanism by which the corticosteroids would have improved the condition?",
    options: [
      "Corticosteroids increase bronchial responsiveness to salbutamol",
      "Corticosteroids cause direct bronchodilatation when used with xanthines",
      "Corticosteroids indirectly increase the effect of xanthines on adenosine receptor",
      "Corticosteroids increase mucociliary clearance"
    ],
    correctIndex: 0,
    explanation: "Corticosteroids increase the transcription of beta-2 adrenergic receptors, thereby restoring or increasing the bronchial responsiveness to beta-2 agonists like salbutamol.",
    topicsCovered: ["Respiratory Pharmacology", "Asthma"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q9",
    question: "Which of the following opioids is a partial agonist at mu and a full agonist at kappa receptors?",
    options: [
      "Pentazocine",
      "Buprenorphine",
      "Tramadol",
      "Fentanyl"
    ],
    correctIndex: 0,
    explanation: "Pentazocine is a mixed agonist-antagonist opioid. It acts as a full agonist at kappa receptors and a partial agonist/weak antagonist at mu receptors.",
    topicsCovered: ["Analgesics", "Opioids"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q10",
    question: "The drug of choice for insomnia in blind people is",
    options: [
      "Latanoprostene",
      "Zerviate",
      "Tasimelteon",
      "Ramelteon"
    ],
    correctIndex: 2,
    explanation: "Tasimelteon is a melatonin receptor agonist specifically approved for Non-24-Hour Sleep-Wake Disorder, a circadian rhythm disorder common in totally blind individuals.",
    topicsCovered: ["CNS Pharmacology", "Sedatives and Hypnotics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q11",
    question: "Dofetilide belongs to which class of anti-arrhythmic drugs?",
    options: [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    correctIndex: 2,
    explanation: "Dofetilide is a Class III anti-arrhythmic drug. It acts by blocking potassium channels, prolonging the action potential duration.",
    topicsCovered: ["Cardiovascular Pharmacology", "Antiarrhythmics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q12",
    question: "What is the mechanism of action of vancomycin?",
    options: [
      "Cell wall synthesis inhibition",
      "Cell membrane inhibition",
      "Peptide synthesis inhibition",
      "50s ribosome inhibition"
    ],
    correctIndex: 0,
    explanation: "Vancomycin inhibits bacterial cell wall synthesis by binding to the D-Ala-D-Ala terminus of the peptidoglycan precursors, blocking transglycosylation and transpeptidation.",
    topicsCovered: ["Antimicrobials", "Antibiotics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q13",
    question: "A drug 'X' causes an increase in Systolic BP and Heart Rate, but a decrease in Diastolic BP. What would be the probable mechanism of action of drug 'X'?",
    options: [
      "alpha-1 agonist and beta-1 agonist",
      "M2 agonist and M3 agonist",
      "alpha-1 antagonist and beta-2 agonist",
      "beta-1 agonist and beta-2 agonist"
    ],
    correctIndex: 3,
    explanation: "Stimulation of Beta-1 receptors increases heart rate and contractility (raising Systolic BP), while stimulation of Beta-2 receptors causes vasodilation (lowering Diastolic BP). This profile matches non-selective beta agonists like Isoprenaline.",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q14",
    question: "A patient requires Ceftriaxone 180 mg. You have a 2 ml syringe with 10 divisions per ml. The vial contains 500 mg/5ml of ceftriaxone. How many divisions in the 2 ml syringe will you fill to give 180 mg ceftriaxone?",
    options: [
      "18",
      "1.8",
      "20",
      "2"
    ],
    correctIndex: 0,
    explanation: "Concentration = 500mg / 5ml = 100mg/ml. \nTarget dose = 180mg. \nVolume needed = 180mg / 100mg/ml = 1.8 ml. \nSince 1 ml = 10 divisions, 1.8 ml = 18 divisions.",
    topicsCovered: ["General Pharmacology", "Calculations"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q15",
    question: "The drug that decreases the size of prostate is:",
    options: [
      "Tamsulosin",
      "Sildenafil",
      "Finasteride",
      "Flutamide"
    ],
    correctIndex: 2,
    explanation: "Finasteride is a 5-alpha-reductase inhibitor. By inhibiting the conversion of testosterone to dihydrotestosterone (DHT), it reduces the size of the prostate gland in BPH.",
    topicsCovered: ["Endocrinology", "Urology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q16",
    question: "Which one of the following is a placebo?",
    options: [
      "Herbal medication with no effect known",
      "Physiotherapy",
      "Sham surgery",
      "Cognitive behavioural therapy"
    ],
    correctIndex: 2,
    explanation: "Sham surgery is a mock surgical intervention where the actual therapeutic step is omitted, used as a control (placebo) in surgical clinical trials.",
    topicsCovered: ["General Pharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q17",
    question: "A young male developed 5 episodes of loose stools 2 hours after eating in a restaurant. He is afebrile and has mild dehydration. What should be the treatment?",
    options: [
      "Ciprofloxacin and tinidazole",
      "Only ciprofloxacin",
      "Only ORS",
      "Ciprofloxacin, tinidazole and ORS"
    ],
    correctIndex: 2,
    explanation: "For acute non-inflammatory diarrhea (afebrile, no blood) with mild dehydration, the mainstay of treatment is Oral Rehydration Salts (ORS). Antibiotics are not indicated unless specific pathogens are suspected or in severe cases.",
    topicsCovered: ["GI Pharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q18",
    question: "Atropine is indicated in all of the following poisonings except _____.",
    options: [
      "Baygon",
      "TIK 20",
      "Parathion",
      "Endrin"
    ],
    correctIndex: 3,
    explanation: "Atropine is the antidote for organophosphates (TIK 20, Parathion) and carbamates (Baygon). Endrin is an organochlorine compound for which Atropine is not the specific antidote; treatment is symptomatic.",
    topicsCovered: ["Toxicology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q19",
    question: "27-year-old female came for treatment of infertility to OPD. Bromocriptine was prescribed. What could be the possible reason?",
    options: [
      "Hyperprolactinemia",
      "PCOD",
      "Hypogonadotrophic hypogonadism",
      "PID"
    ],
    correctIndex: 0,
    explanation: "Bromocriptine is a dopamine agonist used to treat hyperprolactinemia. High prolactin levels inhibit GnRH release, leading to infertility.",
    topicsCovered: ["Endocrinology", "Infertility"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q20",
    question: "Which is a mood stabiliser with an anti-suicidal role?",
    options: [
      "Carbamazepine",
      "Lamotrigine",
      "Lithium",
      "Valproate"
    ],
    correctIndex: 2,
    explanation: "Lithium is a mood stabilizer that has been proven to have significant anti-suicidal properties in patients with bipolar disorder.",
    topicsCovered: ["Psychopharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q21",
    question: "Which of the following is not an idiosyncratic reaction of carbamazepine?",
    options: [
      "Blurred vision",
      "Agranulocytosis",
      "Rash",
      "Steven Johnson Syndrome"
    ],
    correctIndex: 0,
    explanation: "Blurred vision is a dose-dependent (type A) adverse effect of carbamazepine. Agranulocytosis, rash, and SJS are idiosyncratic (type B) reactions.",
    topicsCovered: ["Antiepileptics", "Adverse Drug Reactions"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q22",
    question: "In a middle-aged diabetic patient with chronic kidney disease stage 5, which of the following drugs can be given safely without altering the dose?",
    options: [
      "Vildagliptin",
      "Linagliptin",
      "Saxagliptin",
      "Sitagliptin"
    ],
    correctIndex: 1,
    explanation: "Linagliptin is primarily eliminated via the hepatobiliary route, so it does not require dose adjustment in patients with renal failure, unlike other DPP-4 inhibitors.",
    topicsCovered: ["Endocrinology", "Diabetes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q23",
    question: "Which of the following drugs can be used as an antidote for fibrinolytic therapy?",
    options: [
      "Protamine",
      "Streptokinase",
      "Heparin",
      "e-Aminocaproic acid"
    ],
    correctIndex: 3,
    explanation: "Epsilon-Aminocaproic acid (and Tranexamic acid) is an antifibrinolytic agent used as an antidote for overdose of fibrinolytic drugs (like Streptokinase or t-PA).",
    topicsCovered: ["Hematology", "Antidotes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q24",
    question: "A known epileptic patient on levetiracetam has been seizure-free for 2 years. But he develops agitation and anger issues. Which of the following measures is to be taken next?",
    options: [
      "Slowly taper the drug over next 6 months",
      "Continue levetriacetam since a 5 year seizure free interval is needed",
      "Stop levetiracetam and start on a different anti-epileptic",
      "Discontinue the drug as he is seizure free"
    ],
    correctIndex: 0,
    explanation: "Levetiracetam is associated with behavioral side effects like agitation and aggression. Since the patient has been seizure-free for 2 years (standard duration to consider withdrawal), the drug can be slowly tapered off. Abrupt withdrawal can precipitate seizures.",
    topicsCovered: ["Antiepileptics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q25",
    question: "A drug was given IV at a rate of 1.6mg/min. The clearance of the drug is 640ml/min. The half life of the drug is 1.8 hour. Calculate the plasma concentration of the drug at steady state.",
    options: [
      "2.88mg/ml",
      "0.004mg/ml",
      "3.55mg/ml",
      "0.002mg/ml"
    ],
    correctIndex: 3,
    explanation: "Steady State Concentration (Css) = Rate of Infusion / Clearance. \nCss = 1.6 mg/min / 640 ml/min = 0.0025 mg/ml. \nThe closest option is 0.002 mg/ml.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q26",
    question: "Which of the following disease-modifying anti rheumatoid drug increases extracellular adenosine?",
    options: [
      "Methotrexate",
      "Lefunamide",
      "Sulphasalazine",
      "Hydroxychloroquine"
    ],
    correctIndex: 0,
    explanation: "Methotrexate inhibits AICAR transformylase, leading to intracellular accumulation of AICAR, which inhibits AMP deaminase, ultimately causing the release and accumulation of adenosine extracellularly. Adenosine mediates the anti-inflammatory effects.",
    topicsCovered: ["Rheumatology", "DMARDs"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q27",
    question: "Composition of Lente insulin is:",
    options: [
      "70% amorphous 30% crystalline",
      "70% crystalline 30% amorphous",
      "Only 70% amorphous",
      "Other name of NPH insulin"
    ],
    correctIndex: 1,
    explanation: "Lente insulin is an intermediate-acting insulin composed of 70% Ultralente (crystalline) and 30% Semilente (amorphous) insulin zinc suspension.",
    topicsCovered: ["Endocrinology", "Diabetes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q28",
    question: "Mechanism of action of Oseltamivir as an antiviral agent is:",
    options: [
      "Inhibition of M2 receptor",
      "Neuraminidase inhibition",
      "Inhibition of RNA dependent DNA polymerase",
      "Apoptosis of infected cells"
    ],
    correctIndex: 1,
    explanation: "Oseltamivir acts by inhibiting the neuraminidase enzyme of the Influenza virus, preventing the release of new viral particles from infected cells.",
    topicsCovered: ["Antivirals"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q29",
    question: "A male patient who is suffering from a psychotic disorder is on antipsychotic, antidepressant and antihypertensive treatment. He suddenly developed tachycardia and chest tightness. On evaluation he had metabolic acidosis. ECG showed widened QRS complex and prolonged QT interval. Which of the following drugs is responsible for this?",
    options: [
      "Amitriptyline",
      "Amlodipine",
      "Chlorthalidone",
      "Enalapril"
    ],
    correctIndex: 0,
    explanation: "The clinical picture of widened QRS, prolonged QT, tachycardia, and metabolic acidosis is characteristic of Tricyclic Antidepressant (e.g., Amitriptyline) toxicity.",
    topicsCovered: ["Toxicology", "Psychopharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q30",
    question: "You and your friend plan for a mountain trip for the day after. What medication would you advise him to help with his motion sickness?",
    options: [
      "Ranitidine tablet before start of trip",
      "Dimenhydrinate before start of trip",
      "Scopolamine patch the night before trip",
      "Omeprazole the night before and before start of trip"
    ],
    correctIndex: 2,
    explanation: "Transdermal Scopolamine is the most effective prophylactic for motion sickness. It is applied behind the ear at least 4 hours before travel (or the night before for early morning travel).",
    topicsCovered: ["Autonomic Nervous System", "Antiemetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q31",
    question: "A patient was treated for septicemia with norepinephrine infusion. Which of the following best explains the benefit of this drug?",
    options: [
      "Bradycardia",
      "Tachycardia",
      "Increases urine output",
      "Increases mean arterial blood pressure"
    ],
    correctIndex: 3,
    explanation: "Norepinephrine acts as a potent alpha-agonist (vasoconstriction) and beta-1 agonist. In septic shock, its primary benefit is increasing Mean Arterial Pressure (MAP) to maintain perfusion.",
    topicsCovered: ["Autonomic Nervous System", "Shock"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2017_Q32",
    question: "Which of the following suggests storage of drugs in tissue?",
    options: [
      "Excretion in saliva",
      "Excretion in urine",
      "Large volume of distribution",
      "Small volume of distribution"
    ],
    correctIndex: 2,
    explanation: "A large volume of distribution (Vd) typically indicates that the drug is extensively distributed into body tissues, leaving a low concentration in the plasma.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2017,
    examSession: "AIIMS"
  },
  // AIIMS 2018
  {
    id: "AIIMS2018_Q1",
    question: "Which of the following is not a side effect of salbutamol?",
    options: [
      "Hypoglycemia",
      "Hypokalemia",
      "Tremors",
      "Tachycardia"
    ],
    correctIndex: 0,
    explanation: "Salbutamol stimulates beta-2 receptors, causing glycogenolysis and hyperglycemia, not hypoglycemia. Tremors, tachycardia, and hypokalemia are known side effects.",
    topicsCovered: ["Respiratory Pharmacology", "Adverse Drug Reactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q2",
    question: "Which of the following drugs should be sold only on prescription from a registered medical practitioner?",
    options: [
      "Schedule M drugs",
      "Schedule H drugs",
      "Schedule J drugs",
      "Schedule X drugs"
    ],
    correctIndex: 1,
    explanation: "Schedule H drugs are prescription drugs that must be sold by retail only against a prescription by a registered medical practitioner.",
    topicsCovered: ["Pharmacy Laws", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q3",
    question: "The loading dose of a drug is governed primarily by:",
    options: [
      "Clearance",
      "Volume of distribution",
      "Plasma half life",
      "Bioavailability"
    ],
    correctIndex: 1,
    explanation: "Loading dose is calculated based on the Volume of Distribution (Vd) to achieve a target plasma concentration rapidly. Loading Dose = Vd x Target Concentration.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q4",
    question: "Therapeutic index is used for assessing which of the following factors?",
    options: [
      "Safety",
      "Efficacy",
      "Potency",
      "Toxicity"
    ],
    correctIndex: 0,
    explanation: "Therapeutic Index (LD50/ED50) is a measure of the safety of a drug. A wider therapeutic index indicates a safer drug.",
    topicsCovered: ["Pharmacodynamics", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q5",
    question: "Which of the following drugs causes flagellate pigmentation?",
    options: [
      "Bleomycin",
      "Doxorubicin",
      "Vincristine",
      "Minocycline"
    ],
    correctIndex: 0,
    explanation: "Flagellate pigmentation (linear streaks of hyperpigmentation) is a characteristic side effect of Bleomycin.",
    topicsCovered: ["Anticancer Drugs", "Adverse Drug Reactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q6",
    question: "Which is the anticoagulant of choice for the management of cancer-associated thromboembolism?",
    options: [
      "Unfractionated Heparin",
      "Warfarin",
      "Low molecular weight heparin",
      "Dabigatran"
    ],
    correctIndex: 2,
    explanation: "Low Molecular Weight Heparin (LMWH) is the preferred anticoagulant for the treatment of cancer-associated thrombosis (CLOT trial data).",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q7",
    question: "Which of the following new drugs has been approved for the treatment of amyotrophic lateral sclerosis?",
    options: [
      "Edaravone",
      "Piracetam",
      "Dabrafenib",
      "Trametinib"
    ],
    correctIndex: 0,
    explanation: "Edaravone is an antioxidant drug approved by the FDA for the treatment of Amyotrophic Lateral Sclerosis (ALS).",
    topicsCovered: ["CNS Pharmacology", "Neurology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q8",
    question: "What is the drug of choice for scrub typhus during pregnancy and otherwise respectively?",
    options: [
      "Chloramphenicol, doxycycline",
      "Doxycycline, doxycycline",
      "Doxycycline, azithromycin",
      "Azithromycin, doxycycline"
    ],
    correctIndex: 3,
    explanation: "Doxycycline is the drug of choice for scrub typhus in the general population. In pregnancy, Azithromycin is preferred.",
    topicsCovered: ["Antimicrobials", "Pregnancy"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q9",
    question: "Which of the following is an example of a GPCR?",
    options: [
      "Muscarinic",
      "Nicotinic",
      "GABA-A",
      "Insulin"
    ],
    correctIndex: 0,
    explanation: "Muscarinic acetylcholine receptors are G-protein coupled receptors (GPCRs). Nicotinic and GABA-A are ligand-gated ion channels. The Insulin receptor is a Tyrosine Kinase receptor.",
    topicsCovered: ["General Pharmacology", "Receptors"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q10",
    question: "The package description of a drug states that 500mg of paracetamol is present in each unit of the tablet formulation, but in reality, each unit contains only 200mg. What is the terminology used to refer to these kinds of drugs?",
    options: [
      "Misbranded drug",
      "Adulterated drugs",
      "Spurious drugs",
      "Counterfeit drugs"
    ],
    correctIndex: 0,
    explanation: "A drug is considered 'Misbranded' if its label makes false claims about the contents (e.g., stating 500mg when it contains 200mg).",
    topicsCovered: ["Pharmacy Laws", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q11",
    question: "A patient presented to the casualty with signs of dehydration due to severe vomiting. The intern gave the patient a parenteral medication, following which the patient developed grimacing and abnormal posturing. What could have been the inciting drug for this reaction?",
    options: [
      "Atropine",
      "Ranitidine",
      "Metoclopramide",
      "Domperidone"
    ],
    correctIndex: 2,
    explanation: "Metoclopramide crosses the blood-brain barrier and blocks D2 receptors, causing extrapyramidal side effects like acute dystonia (grimacing, abnormal posturing).",
    topicsCovered: ["GI Pharmacology", "Antiemetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q12",
    question: "Identify the wrongly matched pair of antifungals with its mechanism of action:",
    options: [
      "Ketoconazole : Lanosterol-14-demethylase inhibition",
      "Flucytosine : Inhibits microtubule synthesis and thus hinders mitosis",
      "Terbinafine : Squalene epoxidase inhibition",
      "Amphotericin B : Sequesters ergosterol"
    ],
    correctIndex: 1,
    explanation: "Flucytosine is converted to 5-fluorouracil and inhibits DNA/RNA synthesis (thymidylate synthase inhibitor). It does not inhibit microtubules. Griseofulvin inhibits microtubules.",
    topicsCovered: ["Antifungals"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q13",
    question: "Which of the following parameters is used to assess the extent of drug absorption in a plasma concentration vs. time graph?",
    options: [
      "Tmax",
      "Cmax",
      "T1/2",
      "Area under the curve"
    ],
    correctIndex: 3,
    explanation: "Area Under the Curve (AUC) reflects the total extent of drug absorption (bioavailability). Cmax indicates the peak concentration, and Tmax indicates the rate of absorption.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q14",
    question: "Which of the following routes of administration will not bypass hepatic first-pass metabolism?",
    options: [
      "Sublingual",
      "Oral",
      "Intravenous",
      "Transdermal"
    ],
    correctIndex: 1,
    explanation: "Drugs administered orally enter the portal circulation and undergo first-pass metabolism in the liver before reaching systemic circulation. Sublingual, IV, and Transdermal routes bypass the portal circulation.",
    topicsCovered: ["General Pharmacology", "Routes of Administration"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q15",
    question: "For the action of heparin as an anticoagulant, availability of which of the following chemical substances is mandatory?",
    options: [
      "Thrombin",
      "Plasmin",
      "Antithrombin-III",
      "Thrombomodulin"
    ],
    correctIndex: 2,
    explanation: "Heparin works by binding to and activating Antithrombin-III (AT-III), which then inactivates clotting factors like Thrombin and Factor Xa.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q16",
    question: "What is the bioavailability of a drug administered intravenously?",
    options: [
      "10%",
      "100%",
      "50%",
      "Variable"
    ],
    correctIndex: 1,
    explanation: "Intravenous administration places the drug directly into the systemic circulation, bypassing absorption barriers and first-pass metabolism. Therefore, bioavailability is 100%.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q17",
    question: "A drug solution containing 500 mg/5 ml of the drug is given to you. You are provided with a 2 ml syringe (having 10 divisions for each ml). How many divisions of the 2 ml syringe need to be administered to deliver 180 mg of the drug to a patient?",
    options: [
      "1.8",
      "10",
      "14",
      "18"
    ],
    correctIndex: 3,
    explanation: "Concentration = 500 mg / 5 ml = 100 mg/ml. Target dose = 180 mg. Volume = 180 mg / 100 mg/ml = 1.8 ml. Since 1 ml = 10 divisions, 1.8 ml = 18 divisions.",
    topicsCovered: ["General Pharmacology", "Calculations"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q18",
    question: "Which of the following is gametocidal to all the species causing malaria?",
    options: [
      "Primaquine",
      "Chloroquine",
      "Quinine",
      "None"
    ],
    correctIndex: 0,
    explanation: "Primaquine is the only antimalarial drug that is gametocidal against all species of human malaria, including P. falciparum.",
    topicsCovered: ["Antimalarials"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q19",
    question: "A drug label suggests storage in a 'cool' place. What is the temperature at which this drug is to be stored?",
    options: [
      "- 2 degree Celsius",
      "0 degree Celsius",
      "2-6 degree Celsius",
      "8-15 degree Celsius"
    ],
    correctIndex: 3,
    explanation: "In pharmaceutical storage definitions, 'Cool' typically refers to a temperature between 8°C and 15°C. 'Cold' is 2°C to 8°C.",
    topicsCovered: ["General Pharmacology", "Pharmacy"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q20",
    question: "A patient with AIDS was treated with zidovudine, lamivudine, indinavir, ketoconazole and cotrimoxazole. He developed nephrolithiasis, central obesity, hyperlipidemia and insulin resistance. Which of the drugs could have been the cause?",
    options: [
      "Ketoconazole",
      "Indinavir",
      "Lamivudine",
      "Zidovudine"
    ],
    correctIndex: 1,
    explanation: "Indinavir (a protease inhibitor) is associated with metabolic side effects like lipodystrophy (central obesity, hyperlipidemia, insulin resistance) and nephrolithiasis (kidney stones).",
    topicsCovered: ["Antivirals", "HIV"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q21",
    question: "If carbamazepine is added to ongoing valproate therapy, what adverse effect is risked?",
    options: [
      "Pancreatitis",
      "Thrombocytopenia",
      "Hepatotoxicity",
      "Hyperammonemia"
    ],
    correctIndex: 2,
    explanation: "The combination of valproate and carbamazepine increases the risk of hepatotoxicity due to the formation of toxic metabolites.",
    topicsCovered: ["Antiepileptics", "Drug Interactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q22",
    question: "What is the mechanism of action of dapsone, considering that it is used in the treatment of leprosy, fungal infections and, also for immunomodulatory actions?",
    options: [
      "Cell wall synthesis inhibitor",
      "Folic acid synthesis inhibitor",
      "Protein synthesis inhibitor",
      "Cell membrane inhibitor"
    ],
    correctIndex: 1,
    explanation: "Dapsone inhibits dihydropteroate synthase, thereby inhibiting folic acid synthesis. It is structurally similar to PABA.",
    topicsCovered: ["Antimicrobials", "Leprosy"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q23",
    question: "What is the mechanism of action of sodium nitroprusside?",
    options: [
      "Increased cAMP",
      "Stimulation of guanylyl cyclase",
      "Calcium channel blockage",
      "K+ channel opener"
    ],
    correctIndex: 1,
    explanation: "Sodium nitroprusside releases nitric oxide (NO), which activates guanylyl cyclase, increasing cGMP, leading to vascular smooth muscle relaxation.",
    topicsCovered: ["Cardiovascular Pharmacology", "Vasodilators"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q24",
    question: "Levothyroxine/liothyronine acts by binding to thyroid receptors. Thyroid hormone receptors belong to which of the following class of receptors?",
    options: [
      "Transmembrane receptor linked to tyrosine kinase",
      "Nuclear receptor",
      "Ion channel receptor",
      "G protein coupled receptor"
    ],
    correctIndex: 1,
    explanation: "Thyroid hormone receptors are nuclear receptors that act as transcription factors to regulate gene expression.",
    topicsCovered: ["Endocrinology", "Receptors"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q25",
    question: "The Nobel Prize in Physiology or Medicine, 2018 was awarded to James P. Allison and Tasuku Honjo for which of the following discoveries?",
    options: [
      "Discovery of mechanisms of autophagy",
      "Discoveries of molecular mechanisms controlling the circadian rhythm",
      "Discovery of cancer therapy by inhibition of negative immune regulation",
      "Discovery that mature cells can be reprogrammed to become pluripotent"
    ],
    correctIndex: 2,
    explanation: "They were awarded the Nobel Prize for discovering cancer therapy by inhibition of negative immune regulation (Immune Checkpoint Inhibitors like CTLA-4 and PD-1 inhibitors).",
    topicsCovered: ["General Knowledge", "Immunopharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q26",
    question: "Which of the following drugs does not require dose reduction in patients with renal failure?",
    options: [
      "Gentamicin",
      "Vancomycin",
      "Amphotericin B",
      "Doxycycline"
    ],
    correctIndex: 3,
    explanation: "Doxycycline is primarily excreted via bile/feces and does not require dose adjustment in renal failure.",
    topicsCovered: ["Antimicrobials", "Renal Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q27",
    question: "Which of the following drugs does not increase the risk of bleeding in patients undergoing warfarin therapy?",
    options: [
      "Cimetidine",
      "Carbamazepine",
      "Isoniazid",
      "Amiodarone"
    ],
    correctIndex: 1,
    explanation: "Carbamazepine is a CYP450 inducer, which increases the metabolism of warfarin, thereby *decreasing* its anticoagulant effect and bleeding risk (actually increasing clotting risk). The others are inhibitors that increase bleeding risk.",
    topicsCovered: ["Drug Interactions", "Anticoagulants"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q28",
    question: "Which of the following is used in acute mountain sickness?",
    options: [
      "Dexamathasone",
      "Digoxin",
      "Diltiazem",
      "Acetazolamide"
    ],
    correctIndex: 3,
    explanation: "Acetazolamide is used for prophylaxis and treatment of acute mountain sickness. It induces metabolic acidosis to counteract respiratory alkalosis.",
    topicsCovered: ["Respiratory Pharmacology", "Diuretics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q29",
    question: "Which of the following anti-tubercular drugs is associated with ophthalmic toxicity?",
    options: [
      "Ethambutol",
      "Isoniazid",
      "Kanamycin",
      "Rifampin"
    ],
    correctIndex: 0,
    explanation: "Ethambutol causes optic neuritis (retrobulbar neuritis), leading to decreased visual acuity and color blindness (red-green).",
    topicsCovered: ["Antimicrobials", "Tuberculosis"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q30",
    question: "A patient with diabetic macular edema developed glaucoma. Which of the following drugs would you consider giving last?",
    options: [
      "Beta blocker",
      "Alpha agonist",
      "Pilocarpine",
      "Prostaglandin analogues"
    ],
    correctIndex: 3,
    explanation: "Prostaglandin analogues (e.g., Latanoprost) can cause or worsen macular edema and are generally avoided or used with caution in patients with existing macular edema.",
    topicsCovered: ["Ophthalmology", "Glaucoma"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q31",
    question: "What is the mechanism by which acetylcholine causes a decrease in the heart rate?",
    options: [
      "Delayed diastolic depolarization",
      "Increase in plateau",
      "Decrease in preload",
      "Increase in afterload"
    ],
    correctIndex: 0,
    explanation: "Acetylcholine acts on M2 receptors in the SA node, opening K+ channels (IK-ACh), causing hyperpolarization and decreasing the slope of phase 4 diastolic depolarization.",
    topicsCovered: ["Autonomic Nervous System", "Cardiovascular Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q32",
    question: "Diamox is given to a patient with glaucoma. It is a non-competitive inhibitor of the carbonic anhydrase enzyme. Which of the following would be the effect of this drug?",
    options: [
      "Decrease in Vmax",
      "Decrease in Km",
      "Decrease in both Km and Vmax",
      "No change in Vmax"
    ],
    correctIndex: 0,
    explanation: "Non-competitive inhibition decreases Vmax (maximum velocity) but does not alter Km (affinity).",
    topicsCovered: ["Enzymology", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q33",
    question: "Low apparent volume of distribution of drug indicates",
    options: [
      "Low t 1/2",
      "Low bioavailability",
      "Low efficacy",
      "Not extensively distributed to tissues"
    ],
    correctIndex: 3,
    explanation: "A low volume of distribution (Vd) means the drug is confined mainly to the plasma/vascular compartment and is not extensively distributed to tissues.",
    topicsCovered: ["Pharmacokinetics", "General Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q34",
    question: "An infant had a serum bilirubin level of 33 mg/dL. The mother might have taken which of the following drugs during the third trimester for this to occur?",
    options: [
      "Ampicillin",
      "Co-trimoxazole",
      "Azithromycin",
      "Chloramphenicol"
    ],
    correctIndex: 1,
    explanation: "Sulfonamides (part of Co-trimoxazole) displace bilirubin from albumin binding sites, increasing free bilirubin levels and risking kernicterus in the newborn.",
    topicsCovered: ["Antimicrobials", "Adverse Drug Reactions"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS2018_Q35",
    question: "Lithium usage in pregnancy can lead to which of the following teratogenic effects?",
    options: [
      "Cardiac defects",
      "Facial defects",
      "CNS defects",
      "Urogenital defects"
    ],
    correctIndex: 0,
    explanation: "Lithium use in pregnancy is associated with Ebstein's anomaly, a congenital cardiac defect.",
    topicsCovered: ["Psychopharmacology", "Teratogenicity"],
    year: 2018,
    examSession: "AIIMS"
  },
  // AIIMS 2019
  {
    id: "AIIMS2019_Q1",
    question: "Which of the following is not an adverse effect of salbutamol?",
    options: [
      "Tachycardia",
      "Tolerance",
      "Hypokalemia",
      "Hypoglycemia"
    ],
    correctIndex: 3,
    explanation: "Salbutamol causes hyperglycemia, not hypoglycemia. Tachycardia, tolerance (downregulation), and hypokalemia are known adverse effects.",
    topicsCovered: ["Respiratory Pharmacology", "Adverse Drug Reactions"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q2",
    question: "Propranolol is drug of choice for:",
    options: [
      "Ulcerated infantile hemangioma",
      "Lymphangioma circumscriptum",
      "Capillary malformation",
      "Pyogenic granuloma"
    ],
    correctIndex: 0,
    explanation: "Propranolol is the drug of choice for problematic or ulcerated infantile hemangiomas.",
    topicsCovered: ["Dermatology", "Cardiovascular Pharmacology"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q3",
    question: "Clostridium difficile associated diarrhea occurs maximally due to:",
    options: [
      "Lincosamides",
      "Tetracyclines",
      "Carbapenems",
      "Macrolide"
    ],
    correctIndex: 0,
    explanation: "Lincosamides (specifically Clindamycin) have the highest association with Clostridium difficile associated diarrhea (pseudomembranous colitis).",
    topicsCovered: ["Antimicrobials", "Adverse Drug Reactions"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q4",
    question: "A 53 year old man is found to have stage 2 hypertension without any co morbidities. Which drug will you start?",
    options: [
      "Furosemide",
      "Chlorthalidone",
      "Spironolactone",
      "Triamterene"
    ],
    correctIndex: 1,
    explanation: "Thiazide-like diuretics such as Chlorthalidone are preferred first-line agents for essential hypertension without compelling indications for other drugs.",
    topicsCovered: ["Cardiovascular Pharmacology", "Hypertension"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q5",
    question: "Which of the following is a schedule X drug?",
    options: [
      "Halothane",
      "Thalidomide",
      "Ketamine",
      "Colistin"
    ],
    correctIndex: 2,
    explanation: "Ketamine is a Schedule X drug under the Drugs and Cosmetics Rules in India due to its potential for abuse.",
    topicsCovered: ["Pharmacy Laws"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q6",
    question: "LMWH is given by which route?",
    options: [
      "Intravenous",
      "Subcutaneous",
      "Intramuscular",
      "Intradermal"
    ],
    correctIndex: 1,
    explanation: "Low Molecular Weight Heparin (LMWH) is administered via the subcutaneous route.",
    topicsCovered: ["Hematology", "Anticoagulants"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q7",
    question: "A patient presents to the emergency department with diarrhea, sweating, excessive lacrimation, and salivation. His pulse rate is 55/min and his plasma cholinesterase level was 50U/mL. Which of the following can be used to treat this patient?",
    options: [
      "Neostigmine",
      "Atropine",
      "Epinephrine",
      "Benztropine"
    ],
    correctIndex: 1,
    explanation: "The patient presents with cholinergic crisis (Organophosphate poisoning). Atropine is the antidote for muscarinic symptoms.",
    topicsCovered: ["Toxicology", "Autonomic Nervous System"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q8",
    question: "What is pegloticase used for?",
    options: [
      "Chronic gout",
      "Rheumatoid arthritis",
      "Psoriatric arthritis",
      "Paralytic ileus"
    ],
    correctIndex: 0,
    explanation: "Pegloticase is a recombinant uricase enzyme used for the treatment of chronic refractory gout.",
    topicsCovered: ["Rheumatology", "Gout"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q9",
    question: "Which of the following GPCRs does not act via the K+ channel?",
    options: [
      "Angiotensin 1 receptor",
      "Muscarinic M2 receptor",
      "Dopamine D2 receptor",
      "Serotonin 5 HT1 receptor"
    ],
    correctIndex: 0,
    explanation: "Angiotensin II type 1 receptor (AT1) works via the Gq pathway (Phospholipase C -> IP3/DAG -> Ca2+), not directly via K+ channels. M2, D2, and 5HT1 are Gi coupled and open K+ channels.",
    topicsCovered: ["General Pharmacology", "Receptors"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q10",
    question: "Which of the following is not used in heart failure?",
    options: [
      "Trimetazidine",
      "Sacubitril",
      "Metoprolol",
      "Nesiritide"
    ],
    correctIndex: 0,
    explanation: "Trimetazidine is an anti-anginal metabolic modulator. While sometimes used in ischemic cardiomyopathy, it is primarily an anti-anginal. Sacubitril, Metoprolol, and Nesiritide are standard or specific treatments for heart failure.",
    topicsCovered: ["Cardiovascular Pharmacology", "Heart Failure"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q11",
    question: "Which of the following causes an increase in ACh release from the presynaptic neuron?",
    options: [
      "Potassium channel blocker",
      "Sodium channel blocker",
      "Calcium channel blocker",
      "Chlorine channel blocker"
    ],
    correctIndex: 0,
    explanation: "Potassium channel blockers (e.g., aminopyridines) prevent repolarization, prolonging the action potential and calcium influx, thereby increasing Acetylcholine release.",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q12",
    question: "Apart from mu-opioid receptors, on which other receptor does tramadol act?",
    options: [
      "Anticholinergic",
      "5HT1a inhibition",
      "Serotonergic and norepinephrine reuptake inhibition",
      "Antihistaminic"
    ],
    correctIndex: 2,
    explanation: "Tramadol has a dual mechanism: it is a weak mu-opioid agonist and it also inhibits the reuptake of Serotonin and Norepinephrine.",
    topicsCovered: ["Analgesics"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q13",
    question: "In which of the following conditions is non-pulsatile dosing of GnRH agonist not used?",
    options: [
      "Male infertility",
      "Endometriosis",
      "Precocious puberty",
      "Prostate cancer"
    ],
    correctIndex: 0,
    explanation: "Non-pulsatile (continuous) GnRH agonists suppress the HPG axis (downregulation) and are used in prostate cancer, endometriosis, etc. Pulsatile dosing mimics physiology and is used for infertility treatment to induce ovulation/spermatogenesis.",
    topicsCovered: ["Endocrinology"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q14",
    question: "Which of the following cannot be used to decrease intraocular pressure in glaucoma?",
    options: [
      "Dexamethasone",
      "Acetazolamide",
      "Apraclonidine",
      "Mannitol"
    ],
    correctIndex: 0,
    explanation: "Dexamethasone is a corticosteroid that can increase intraocular pressure and cause steroid-induced glaucoma. It is not used to treat it.",
    topicsCovered: ["Ophthalmology", "Glaucoma"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q15",
    question: "Prucalopride is a ______.",
    options: [
      "5HT2a agonist",
      "5HT2b agonist",
      "5HT4 antagonist",
      "5HT4 agonist"
    ],
    correctIndex: 3,
    explanation: "Prucalopride is a selective, high-affinity 5-HT4 receptor agonist used for chronic idiopathic constipation.",
    topicsCovered: ["GI Pharmacology"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q16",
    question: "Z track technique is used for?",
    options: [
      "Administration of nicotine patches",
      "Monitoring of carbamazepine therapy",
      "Administration of long acting depot antipsychotics",
      "Monitoring of lithium therapy"
    ],
    correctIndex: 2,
    explanation: "The Z-track technique is used for intramuscular injections, particularly for irritating drugs or depot antipsychotics, to prevent leakage into subcutaneous tissues.",
    topicsCovered: ["General Pharmacology", "Drug Administration"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q17",
    question: "Tafenoquine is used in which of the following conditions?",
    options: [
      "Radical cure of plasmodium vivax",
      "Prophylaxis of malaria in pregnancy",
      "Treatment of severe falciparum malaria",
      "Treatment of malaria in children <2 years"
    ],
    correctIndex: 0,
    explanation: "Tafenoquine is approved for the radical cure (prevention of relapse) of P. vivax malaria, targeting hypnozoites.",
    topicsCovered: ["Antimalarials"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q18",
    question: "Which is not given in Wilson's disease?",
    options: [
      "Zinc",
      "Penicillamine",
      "Calcium citrate",
      "Trientine"
    ],
    correctIndex: 2,
    explanation: "Wilson's disease treatment involves copper chelators (Penicillamine, Trientine) or zinc salts (to block copper absorption). Calcium citrate is not a treatment.",
    topicsCovered: ["Toxicology", "Metabolic Disorders"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q19",
    question: "What dose of epinephrine is used in anaphylactic shock?",
    options: [
      "1:10000 I.V. - 10 ml",
      "1:1000 I.M. - 0.5 ml",
      "1:1000 I.M. - 1 ml",
      "1:1000 I.V. - 0.5 ml"
    ],
    correctIndex: 1,
    explanation: "The standard adult dose for anaphylactic shock is 0.5 mg Epinephrine (0.5 ml of 1:1000 solution) Intramuscularly.",
    topicsCovered: ["Emergency Medicine"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q20",
    question: "Which of the following is true about tedizolid?",
    options: [
      "Active against gram positive organisms",
      "Poor oral bioavailability",
      "Active against anaerobes",
      "Causes peripheral neuropathy"
    ],
    correctIndex: 0,
    explanation: "Tedizolid is an oxazolidinone antibiotic effective against Gram-positive bacteria, including MRSA. It generally has good oral bioavailability.",
    topicsCovered: ["Antimicrobials"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q21",
    question: "The best approach in the treatment of chronic SIADH is ______",
    options: [
      "Tolvaptan",
      "Reducing fluid intake to <500 ml per day",
      "Demeclocycline",
      "Fludrocortisone"
    ],
    correctIndex: 0,
    explanation: "Vaptans (Vasopressin receptor antagonists) like Tolvaptan are effective for hyponatremia in SIADH. Fluid restriction is first-line but often difficult to maintain. Tolvaptan corrects sodium directly.",
    topicsCovered: ["Endocrinology", "Renal Pharmacology"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },
  {
    id: "AIIMS2019_Q22",
    question: "A patient who was diagnosed with ADPKD was prescribed tolvaptan. After a few weeks, he presented with dry mouth and increased thirst. What is the likely cause?",
    options: [
      "Increased free water clearance",
      "V2 receptor agonism",
      "Increased renal cAMP levels",
      "Increase in urine osmolality"
    ],
    correctIndex: 0,
    explanation: "Tolvaptan blocks V2 receptors, preventing water reabsorption (aquaresis), leading to increased free water clearance and consequent thirst.",
    topicsCovered: ["Renal Pharmacology"],
    year: 2019,
    examSession: "AIIMS (May & Nov)"
  },

  // INI-CET 2021
  {
    id: "INICET2021_Q1",
    question: "Which of the following is false about the selection of essential drugs?",
    options: [
      "Adequate safety profile needs to be established",
      "Cost to benefit has to be considered",
      "Fixed drug combination is preferred over single drugs",
      "Disease prevalence is considered"
    ],
    correctIndex: 2,
    explanation: "Essential medicines lists generally prefer single compounds. Fixed-dose combinations are selected only if they offer specific advantages in efficacy, safety, or adherence.",
    topicsCovered: ["General Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q2",
    question: "A 34-year-old man with hypertension is diagnosed with stage 4 chronic kidney disease, with eGFR of <30. His doctor wants to prescribe a thiazide diuretic. Which of the following can be given?",
    options: [
      "Chlorothiazide",
      "Chlorthalidone",
      "Metolazone",
      "Hydrochlorothiazide"
    ],
    correctIndex: 2,
    explanation: "Metolazone is a thiazide-like diuretic that remains effective even in severe renal impairment (GFR < 30 ml/min), whereas most other thiazides lose efficacy.",
    topicsCovered: ["Diuretics", "Renal Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q3",
    question: "A patient who was diagnosed with epilepsy was put on retigabine TDS. Now phenytoin is being added. Which of the following changes should be made to retigabine?",
    options: [
      "Increase the dose",
      "Decrease the dose",
      "Stop the drug",
      "Stop retigabine and start on carbamazepine"
    ],
    correctIndex: 0,
    explanation: "Phenytoin is a strong CYP450 inducer and increases the clearance of retigabine (ezogabine), requiring a dose increase of retigabine.",
    topicsCovered: ["Antiepileptics", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q4",
    question: "A patient with history of ischemic stroke was started on clopidogrel. However, she had another attack of stroke after 6 months. Which of the following is likely to be responsible for the failure of clopidogrel in this patient?",
    options: [
      "Downregulation of CYP2C19",
      "Downregulation of CYP2D6",
      "Upregulation of CYP1A1",
      "Downregulation of CYP2E1"
    ],
    correctIndex: 0,
    explanation: "Clopidogrel is a prodrug requiring activation by CYP2C19. Reduced function (genetic poor metabolizers or inhibition) of CYP2C19 leads to therapeutic failure.",
    topicsCovered: ["Pharmacogenetics", "Antiplatelets"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q5",
    question: "Which of the following can be given for long term management of obesity?",
    options: [
      "Liraglutide",
      "Metformin",
      "Sibutramine",
      "Fenfluramine"
    ],
    correctIndex: 0,
    explanation: "Liraglutide is a GLP-1 agonist approved for chronic weight management. Sibutramine and Fenfluramine were withdrawn.",
    topicsCovered: ["Obesity", "Endocrinology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q6",
    question: "An HIV-positive woman on ART was prescribed ergotamine for a migraine attack 4 days back. She presented with complaints that she is unable to feel her legs from the mid-thigh to her toes, for the past two days. The angiography image is given below. What is the likely diagnosis?",
    options: [
      "Atherosclerosis",
      "Ergotism",
      "Polyradicular neuropathy",
      "Herniated disc"
    ],
    correctIndex: 1,
    explanation: "Protease inhibitors (often part of ART) inhibit CYP3A4, leading to accumulation of ergotamine and causing severe vasoconstriction (ergotism/gangrene).",
    topicsCovered: ["Toxicology", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q7",
    question: "Topiramate is used for",
    options: [
      "Treatment of migrane",
      "Treatment of Lennox Gastaut syndrome",
      "Prophylaxis of ADHD",
      "Treatment of dementia"
    ],
    correctIndex: 1,
    explanation: "Topiramate is indicated for seizures in Lennox-Gastaut syndrome. It is also used for migraine prophylaxis (not acute treatment).",
    topicsCovered: ["Antiepileptics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q8",
    question: "Which of the following is incorrectly matched?",
    options: [
      "Andexanet alfa: Edoxaban",
      "Andexanet alfa: Rivaroxaban",
      "Idarucizumab : Dabigatran",
      "Ciraparantag: Fondaparinux"
    ],
    correctIndex: 3,
    explanation: "Ciraparantag is a universal reversal agent for direct factor Xa and thrombin inhibitors, but Fondaparinux is an indirect inhibitor. While it may have activity, the established specific antidotes are Andexanet for Xa inhibitors and Idarucizumab for Dabigatran. The question likely points to the least specific or established pairing at the time.",
    topicsCovered: ["Anticoagulants", "Antidotes"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q9",
    question: "Inhaled Nitric oxide is approved for treatment of",
    options: [
      "Labile hypertension",
      "Pulmonary hypertension",
      "Treatment of resistant migraine",
      "Resistant Parkinson's disease"
    ],
    correctIndex: 1,
    explanation: "Inhaled Nitric Oxide acts selectively on pulmonary vasculature causing vasodilation, used for pulmonary hypertension.",
    topicsCovered: ["Respiratory Pharmacology", "Cardiovascular Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q10",
    question: "Nivolumab is used as a checkpoint inhibitor in",
    options: [
      "Retinoblastoma",
      "Medulloblastoma",
      "Pleuropulmonary blastoma",
      "Hodgkin's lymphoma"
    ],
    correctIndex: 3,
    explanation: "Nivolumab is an anti-PD-1 antibody approved for classical Hodgkin's lymphoma, melanoma, NSCLC, etc.",
    topicsCovered: ["Anticancer Drugs", "Immunotherapy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q11",
    question: "Paradoxical bronchoconstriction seen with ipratropium bromide is due to all except",
    options: [
      "Hypertonic saline",
      "EDTA",
      "Benzalkonium chloride",
      "Prejunctional M2 receptor blockade"
    ],
    correctIndex: 0,
    explanation: "Paradoxical bronchoconstriction from nebulizers is linked to hypotonic solutions, preservatives like EDTA/Benzalkonium chloride, or M2 blockade. Hypertonic saline causes constriction but is not the mechanism usually cited for ipratropium paradox specifically (typically hypotonicity is cited).",
    topicsCovered: ["Respiratory Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q12",
    question: "Antimicrobial combinations are used in all except",
    options: [
      "Gonorrhea",
      "Tuberculosis",
      "Intra abdominal infections",
      "Malaria"
    ],
    correctIndex: 0,
    explanation: "While gonococcal treatment guidelines change, single-dose Ceftriaxone is often sufficient (or was standard monotherapy for a time). Tuberculosis and Malaria strictly require combinations to prevent resistance. Mixed abdominal infections require combinations for coverage.",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q13",
    question: "Which of the following steps does Vancomycin act on?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctIndex: 3,
    explanation: "Vancomycin binds to the D-Ala-D-Ala terminus, inhibiting transglycosylation and transpeptidation (cross-linking), which corresponds to the later stages of cell wall synthesis (Step 4 in typical diagrams).",
    topicsCovered: ["Antimicrobials"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q14",
    question: "What would happen to the half-life and plasma concentration of a drug which follows first-order kinetics, if the dose is doubled?",
    options: [
      "Half-life doubles and plasma concentration remains the same",
      "Half-life remains the same and plasma concentration doubles",
      "Half-life and plasma concentration remains the same",
      "Half life and plasma concentration doubles"
    ],
    correctIndex: 1,
    explanation: "In first-order kinetics, half-life is constant regardless of dose. Plasma concentration is proportional to dose.",
    topicsCovered: ["Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q15",
    question: "Which of the following is not an off-label use of risperidone?",
    options: [
      "OCD",
      "Dementia",
      "PTSD",
      "Bipolar disorder"
    ],
    correctIndex: 3,
    explanation: "Risperidone is FDA approved for Bipolar Disorder. Its use in OCD or Dementia behavior is often off-label.",
    topicsCovered: ["Psychopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q16",
    question: "The elimination rate constant of a drug is 0.05/hr. What is its half-life?",
    options: [
      "20.8 hours",
      "6.9 hours",
      "13.8 hours",
      "9.8 hours"
    ],
    correctIndex: 2,
    explanation: "t1/2 = 0.693 / k = 0.693 / 0.05 = 13.86 hours.",
    topicsCovered: ["Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q17",
    question: "A patient is on phenytoin for a seizure disorder. He was prescribed sucralfate 4 times a day for peptic ulcers. What should be the minimum duration of time between consumption of these drugs?",
    options: [
      "30 minutes",
      "60 minutes",
      "90 minutes",
      "120 minutes"
    ],
    correctIndex: 3,
    explanation: "Sucralfate interferes with phenytoin absorption. A gap of at least 2 hours (120 minutes) is recommended.",
    topicsCovered: ["Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q18",
    question: "Category A, B, C, D, X in drug classification are indicative of which of the following?",
    options: [
      "Safety in pregnancy",
      "Dose adjustment in renal failure",
      "Cost ratio from cheap to expensive",
      "As per safety or therapeutic index"
    ],
    correctIndex: 0,
    explanation: "These are the FDA Pregnancy Risk Categories.",
    topicsCovered: ["General Pharmacology", "Pregnancy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q19",
    question: "Identify the false statement regarding suicidal inhibition.",
    options: [
      "The inhibitor can bind with any site resulting in suicidal inhibition",
      "The binding of the enzyme to the substrate analogue is irreversible",
      "They are enzyme specific and used in rational drug design",
      "The inhibitor forms a product with the enzyme and the product inhibits it"
    ],
    correctIndex: 0,
    explanation: "Suicide inhibitors bind to the active site, not just any site. They are mechanism-based irreversible inhibitors.",
    topicsCovered: ["Enzymology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q20",
    question: "The dose at which dopamine acts on beta 1 receptors is ____.",
    options: [
      "2-10 mcg/kg/min",
      "<2 mcg/kg/min",
      "10-20 mcg/kg/min",
      ">20 mcg/kg/min"
    ],
    correctIndex: 0,
    explanation: "Dopamine dosing: Low (<2) = Dopaminergic; Moderate (2-10) = Beta-1; High (>10) = Alpha.",
    topicsCovered: ["Autonomic Nervous System", "Cardiovascular Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q21",
    question: "Which of the following is the incorrect statement regarding clomiphene citrate?",
    options: [
      "Causes monofollicular development",
      "Inhibits negative feedback on GnRH",
      "Causes endometrial thinning",
      "Can be used with gonadotropin"
    ],
    correctIndex: 0,
    explanation: "Clomiphene increases gonadotropins often leading to multifollicular development (risk of multiple pregnancy).",
    topicsCovered: ["Endocrinology", "Infertility"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q22",
    question: "What is the mechanism of action of remdesivir?",
    options: [
      "RNA-dependent DNA polymerase inhibition",
      "RNA-dependent RNA polymerase inhibition",
      "Fusion inhibition",
      "Entry inhibition"
    ],
    correctIndex: 1,
    explanation: "Remdesivir inhibits the viral RNA-dependent RNA polymerase (RdRp).",
    topicsCovered: ["Antivirals"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q23",
    question: "Administration of which of the following drugs would increase the bioavailability of saquinavir?",
    options: [
      "Ritonavir",
      "Vitamin C",
      "Cimetidine",
      "Ganciclovir"
    ],
    correctIndex: 0,
    explanation: "Ritonavir is a potent CYP3A4 inhibitor used to 'boost' protease inhibitors like Saquinavir.",
    topicsCovered: ["Antivirals", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q24",
    question: "The table below gives the AUC of drug B alone and that of drug B when combined with another drug A. If the value (ratio) is <0.01, then which of the following statements is true?",
    options: [
      "Drug A decreases intestinal absorption of Drug B",
      "Drug A reduces first pass metabolism of Drug B",
      "Drug A increases the metabolism of Drug B",
      "Drug A increases renal elimination of Drug B"
    ],
    correctIndex: 1,
    explanation: "Based on context from solution: Drug A reduces first-pass metabolism (enzyme inhibition), which would actually INCREASE AUC significantly. The numeric condition in the question stem (<0.01) implies a massive reduction, which contradicts the 'enzyme inhibitor' answer key. However, assuming the question implies boosting (AUC increase), 'Reduces first pass metabolism' is the mechanism.",
    topicsCovered: ["Pharmacokinetics", "Drug Interactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q25",
    question: "What is the mechanism of action of cyclosporine?",
    options: [
      "Inhibition of calcineurin",
      "AMP kinase stimulation",
      "IMP dehydrogenase inhibition",
      "Dihydro-orotate dehydrogenase inhibition"
    ],
    correctIndex: 0,
    explanation: "Cyclosporine forms a complex with cyclophilin which inhibits Calcineurin.",
    topicsCovered: ["Immunopharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q26",
    question: "Anionic and weakly acidic drugs bind to which of the following?",
    options: [
      "Albumin",
      "Globulin",
      "Lipoprotein",
      "Alpha-1 glycoprotein"
    ],
    correctIndex: 0,
    explanation: "Albumin binds acidic drugs. Alpha-1 acid glycoprotein binds basic drugs.",
    topicsCovered: ["Pharmacokinetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q27",
    question: "Match the following teratogenic drugs with their teratogenic effects. (1. Lithium, 2. Chloramphenicol, 3. Warfarin, 4. Thalidomide)",
    options: [
      "1-a, 2-b, 3-c, 4-d",
      "1-c, 2-d, 3-a, 4-b",
      "1-d, 2-a, 3-d, 4-c",
      "1-d, 2-c, 3-b, 4-a"
    ],
    correctIndex: 3,
    explanation: "Lithium -> Ebstein's (d); Chloramphenicol -> Gray Baby (c); Warfarin -> Embryopathy (b); Thalidomide -> Phocomelia (a). Match: 1-d, 2-c, 3-b, 4-a.",
    topicsCovered: ["Teratogenicity", "Adverse Drug Reactions"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q28",
    question: "A young man sustained a scorpion sting 2 hours ago. On examination, his blood pressure is 108/ 60 mm Hg; HR, 72 beats/minute, and respiratory rate, 32 breaths/minute. He also complains of breathlessness. How do you manage this patient?",
    options: [
      "Metoprolol",
      "Ivabradine",
      "Prazosin",
      "Frusemide"
    ],
    correctIndex: 2,
    explanation: "Prazosin (alpha blocker) is the drug of choice for scorpion sting induced autonomic storm and pulmonary edema.",
    topicsCovered: ["Toxicology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q29",
    question: "An experiment is being conducted on a cat spine to study the effect of acetylcholine. The blood pressure is recorded at each intervention and is shown below. What does phase 4 in the graph indicate?",
    options: [
      "Muscarinic action of acetylcholine",
      "Potentiation of acetylcholine",
      "Antagonism of acetylcholine",
      "Nicotinic action of acetylcholine"
    ],
    correctIndex: 3,
    explanation: "Following atropine blockade of muscarinic receptors (depressor effect), a high dose of ACh causes a pressor effect due to stimulation of nicotinic receptors in sympathetic ganglia (Dale's vasomotor reversal).",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q30",
    question: "A patient who is a known case of HIV is started on combined active antiretroviral therapy (cART). After 5 months of treatment, he develops hyperpigmentation in the palms and soles. What is the most likely drug causing this?",
    options: [
      "Nelfinavir",
      "Emtricitabine",
      "Abacavir",
      "Zidovudine"
    ],
    correctIndex: 1,
    explanation: "Emtricitabine is known to cause hyperpigmentation of palms and soles.",
    topicsCovered: ["Antivirals", "HIV"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q31",
    question: "Dorzolamide is a ______.",
    options: [
      "Topically applied sulfonamide antibacterial",
      "Topical ocular carbonic anhydrase inhibitor",
      "Second-generation sulfonylurea",
      "Opioid receptor agonist"
    ],
    correctIndex: 1,
    explanation: "Dorzolamide is a topical carbonic anhydrase inhibitor used for glaucoma.",
    topicsCovered: ["Ophthalmology", "Glaucoma"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q32",
    question: "A patient with erectile dysfunction is given sildenafil. The penile erectile function is found to be improved after the therapy. Which of the following mediates the action of sildenafil?",
    options: [
      "cAMP",
      "cGMP",
      "Calcium",
      "Phosphatidyl glycerol and inositol phosphate"
    ],
    correctIndex: 1,
    explanation: "Sildenafil inhibits PDE-5, preventing the breakdown of cGMP, which mediates smooth muscle relaxation and erection.",
    topicsCovered: ["Urology", "Cardiovascular Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q33",
    question: "Match the following diuretics in column A to their site of action in column B.",
    options: [
      "A-2, B-3, C-1, D-4",
      "A-3, B-4, C-2, D-1",
      "A-1, B-2, C-4, D-3",
      "A-4, B-1, C-3, D-2"
    ],
    correctIndex: 3,
    explanation: "Acetazolamide (4 - Proximal); Torsemide (1 - Loop); Chlorthalidone (3 - Distal); Vasopressin (2 - Collecting duct).",
    topicsCovered: ["Diuretics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q34",
    question: "Alkalinization of urine will be helpful in the removal of ______.",
    options: [
      "Weakly basic drugs",
      "Strong electrolytes",
      "Polar drugs",
      "Weakly acidic drugs"
    ],
    correctIndex: 3,
    explanation: "Alkalinization of urine ionizes weakly acidic drugs, preventing their reabsorption (ion trapping) and increasing excretion (e.g., Aspirin, Barbiturates).",
    topicsCovered: ["Pharmacokinetics", "Toxicology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "INICET2021_Q35",
    question: "All of the following side effects are more commonly seen with carbamazepine than oxcarbazepine, except ______.",
    options: [
      "Hypotension",
      "Hyponatremia",
      "Rash",
      "Elevated levels of gamma glutamyl transpeptidases"
    ],
    correctIndex: 1,
    explanation: "Hyponatremia is more common with Oxcarbazepine than with Carbamazepine.",
    topicsCovered: ["Antiepileptics", "Adverse Drug Reactions"],
    year: 2021,
    examSession: "INI-CET"
  },

  // INI-CET 2022
  {
    id: "INICET2022_Q1",
    question: "The extent of drug absorption is represented by:",
    options: [
      "Tmax",
      "Area under the curve",
      "Cmax",
      "t1/2"
    ],
    correctIndex: 1,
    explanation: "Area under the curve (AUC) represents the extent of drug absorption (Bioavailability).",
    topicsCovered: ["Pharmacokinetics"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q2",
    question: "Which of the following statement is correct regarding the given graph? (Graph shows Dose-Response curves)",
    options: [
      "Drug 1 represents agonist and drug 2 represents inverse agonist",
      "Drug 3 represents agonist and drug 4 represents inverse agonist",
      "Drug 1 represents agonist and drug 4 represents inverse agonist",
      "Drug 2 represents partial agonist and drug 3 represents inverse agonist"
    ],
    correctIndex: 2,
    explanation: "Drug 1 (top curve) is a full agonist. Drug 4 (bottom curve, below baseline) is an inverse agonist. Drug 2 is partial agonist. Drug 3 is antagonist.",
    topicsCovered: ["Pharmacodynamics"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q3",
    question: "Which among the following drugs is the new FDA approved immune check point inhibitor for carcinoma endometrium?",
    options: [
      "Nivolumab",
      "Pembrolizumab",
      "Trastuzumab",
      "Ipilimumab"
    ],
    correctIndex: 1,
    explanation: "Pembrolizumab (PD-1 inhibitor) is approved for advanced endometrial carcinoma.",
    topicsCovered: ["Anticancer Drugs"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q4",
    question: "Which of the following is not an immune checkpoint inhibitor?",
    options: [
      "Nivolumab",
      "Pembrolizumab",
      "Atezolimumab",
      "Cetuximab"
    ],
    correctIndex: 3,
    explanation: "Cetuximab targets EGFR. The others are checkpoint inhibitors (PD-1 or PD-L1).",
    topicsCovered: ["Anticancer Drugs"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q5",
    question: "NAPQI is the metabolite of which of the following drug toxicity?",
    options: [
      "Aspirin",
      "Paracetamol",
      "Diclofenac",
      "Ketorolac"
    ],
    correctIndex: 1,
    explanation: "NAPQI is the toxic metabolite of Paracetamol responsible for hepatotoxicity.",
    topicsCovered: ["Toxicology"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q6",
    question: "Identify the correct match, regarding the drug and its adverse effect.",
    options: [
      "Hydralazine - heart failure",
      "Atenolol - hemolytic anemia",
      "Aliskiren - hypokalemia",
      "Verapamil - constipation"
    ],
    correctIndex: 3,
    explanation: "Constipation is a well-known side effect of Verapamil.",
    topicsCovered: ["Cardiovascular Pharmacology", "Adverse Drug Reactions"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q7",
    question: "A lady who had undergone mastectomy for breast cancer is being treated with tamoxifen. How long should it be stopped for before she can conceive?",
    options: [
      "1 month",
      "3 months",
      "No need to stop",
      "Can be stopped and conceived soon after stopping"
    ],
    correctIndex: 1,
    explanation: "Tamoxifen should be stopped for at least 2-3 months before conception due to its long half-life and teratogenic potential.",
    topicsCovered: ["Anticancer Drugs", "Pregnancy"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q8",
    question: "A young boy with a history of multiple blood transfusions presents with bone pain for the past 6 months. A peripheral smear showed sickle-shaped RBCs. Which of the following drugs are not used in the treatment of his condition?",
    options: [
      "Bebtelovimab",
      "Voxelotor",
      "Hydroxyurea",
      "L-glutamine"
    ],
    correctIndex: 0,
    explanation: "Bebtelovimab is a monoclonal antibody for COVID-19. The others are used in Sickle Cell Disease.",
    topicsCovered: ["Hematology"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q9",
    question: "The half-life of letrozole is:",
    options: [
      "45 hours",
      "70 hours",
      "90 hours",
      "120 hours"
    ],
    correctIndex: 0,
    explanation: "Letrozole has a half-life of approximately 2 days (around 45 hours).",
    topicsCovered: ["Pharmacokinetics", "Anticancer Drugs"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q10",
    question: "Identify the false statement about eicosanoids.",
    options: [
      "Synthesized from arginine",
      "Synthesized from arachidonic acid",
      "Prostaglandins have 5 carbon ring",
      "Synthesized in platelets"
    ],
    correctIndex: 0,
    explanation: "Eicosanoids are synthesized from Arachidonic acid, not Arginine (Nitric Oxide is from Arginine).",
    topicsCovered: ["Autacoids"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q11",
    question: "The given diagram shows the steps in bacterial cell wall formation. Identify the site of action of beta-lactam antibiotics.",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctIndex: 3,
    explanation: "Beta-lactams inhibit transpeptidases (Step 4, cross-linking). Step 1 (Fosfomycin), Step 2 (Cycloserine), Step 3 (Vancomycin/Bacitracin).",
    topicsCovered: ["Antimicrobials", "Antibiotics"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q12",
    question: "Phospholipase C acts via which of the following G protein-coupled receptors?",
    options: [
      "Gs",
      "Gi",
      "Gq",
      "Go"
    ],
    correctIndex: 2,
    explanation: "Gq coupled receptors activate Phospholipase C (PLC).",
    topicsCovered: ["General Pharmacology", "Receptors"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q13",
    question: "A patient was diagnosed with pulmonary tuberculosis and was started on first-line antitubercular drugs. Which of the following drug acts by inhibiting the synthesis of the marked layer shown in the image (Mycolic Acid)?",
    options: [
      "Isoniazid",
      "Rifampicin",
      "Pyrazinamide",
      "Ethambutol"
    ],
    correctIndex: 0,
    explanation: "Isoniazid inhibits mycolic acid synthesis.",
    topicsCovered: ["Antimicrobials", "Tuberculosis"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q14",
    question: "A man was brought to the emergency room after poisoning with an unknown substance. Muscarinic poisoning was suspected and he was treated for the same. What is the possible presenting feature which led to the diagnosis?",
    options: [
      "Mydriasis",
      "Diuresis",
      "Muscle fasciculations",
      "Bradycardia"
    ],
    correctIndex: 3,
    explanation: "Muscarinic poisoning causes DUMBBELSS (Diarrhea, Urination, Miosis, Bradycardia, Bronchospasm, Emesis, Lacrimation, Salivation, Sweating). Bradycardia is a key feature.",
    topicsCovered: ["Toxicology", "Autonomic Nervous System"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q15",
    question: "A 29-year-old lady came to psychiatry OPD with symptoms of hypomania. There is a past history of maniac episode. Now, she is planning to conceive. Which drug should be avoided for being highly teratogenic to the fetus?",
    options: [
      "Valproate",
      "Lithium",
      "Oxcarbazepine",
      "Olanzapine"
    ],
    correctIndex: 0,
    explanation: "Valproate is highly teratogenic (Neural tube defects). Lithium causes Ebstein's anomaly but is less teratogenic than Valproate. Valproate should be avoided.",
    topicsCovered: ["Psychopharmacology", "Teratogenicity"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q16",
    question: "True statement regarding the administration of 5 alpha-reductase inhibitors is/are: (1. Reduce DHT levels, 4. Reduce Prostate Volume/PSA)",
    options: [
      "1, 2, 3",
      "1, 3, 4",
      "1, 4",
      "2, 3"
    ],
    correctIndex: 2,
    explanation: "5-alpha reductase inhibitors (Finasteride) reduce DHT levels and reduce prostate volume/PSA levels.",
    topicsCovered: ["Endocrinology", "Urology"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q17",
    question: "The manufacturer of a drug company labels a drug as having 500 mg paracetamol. On quantitative analysis of the drug, it actually contained only 200 mg of paracetamol. What is this type of drug called?",
    options: [
      "Spurious drug",
      "Adulterated drug",
      "Unethical drug",
      "Misbranded drug"
    ],
    correctIndex: 3,
    explanation: "A drug is 'Misbranded' if the label is false or misleading regarding the contents.",
    topicsCovered: ["Pharmacy Laws"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q18",
    question: "Which of the following anti-diabetic drugs is associated with the increased risk of fractures?",
    options: [
      "Rosiglitazone",
      "Liraglutide",
      "Voglibose",
      "Canagliflozin"
    ],
    correctIndex: 3,
    explanation: "SGLT2 inhibitors like Canagliflozin are associated with an increased risk of bone fractures. Thiazolidinediones (Rosiglitazone) also increase risk, but Canagliflozin has specific warnings.",
    topicsCovered: ["Endocrinology", "Diabetes"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q19",
    question: "The active metabolite of cyclophosphamide is:",
    options: [
      "N - hydroxy cyclophosphamide",
      "4 - hydroxy cyclophosphamide",
      "4 - acetyl cyclophosphamide",
      "N - acetyl cyclophosphamide"
    ],
    correctIndex: 1,
    explanation: "The active metabolite is 4-hydroxycyclophosphamide.",
    topicsCovered: ["Anticancer Drugs"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q20",
    question: "Urinary alkalinization will be most useful in toxicity of which of the following drugs?",
    options: [
      "Beta blockers",
      "Calcium channel blockers",
      "Acetaminophen",
      "Aspirin"
    ],
    correctIndex: 3,
    explanation: "Aspirin (Salicylate) is a weak acid. Alkalinization of urine ionizes it, trapping it in urine and enhancing excretion.",
    topicsCovered: ["Toxicology", "Pharmacokinetics"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q21",
    question: "A hospital is conducting a study to check the efficacy of statins in multiple centers. There are 4-5 patients per center... What phase of the clinical trial describes the above scenario? (Multicenter, Efficacy, Large population)",
    options: [
      "Phase 1",
      "Phase 3",
      "Phase 2",
      "Phase 4"
    ],
    correctIndex: 1,
    explanation: "Multi-center, randomized controlled trials to confirm efficacy in a larger population describe Phase 3 trials.",
    topicsCovered: ["Clinical Trials"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q22",
    question: "A patient who is a known addict is brought to the hospital with the intoxication of an agent. An ocular examination shows the following finding (Miosis). Which of the following is true regarding this condition?",
    options: [
      "This action can be reversed by phenylephrine",
      "It cannot be reversed by levallorphan",
      "It is caused by activation of the Edinger-Westphal nucleus",
      "Tolerance develops due to long-term use"
    ],
    correctIndex: 2,
    explanation: "Opioid-induced miosis is due to the stimulation of the Edinger-Westphal nucleus. Tolerance does NOT develop to miosis.",
    topicsCovered: ["Toxicology", "Opioids"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q23",
    question: "Match the following drugs in Column A with their site of action in Column B (Diuretics).",
    options: [
      "A-2, B-3, C-1, D-4",
      "A-3, B-4, C-2, D-1",
      "A-1, B-2, C-4, D-3",
      "A-4, B-1, C-3, D-2"
    ],
    correctIndex: 3,
    explanation: "Acetazolamide (A) - Proximal Tubule (4); Torsemide (B) - Loop (1); Chlorthalidone (C) - Distal Tubule (3); Vasopressin (D) - Collecting Duct (2). Match: A-4, B-1, C-3, D-2.",
    topicsCovered: ["Diuretics"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q24",
    question: "Which of the following statements is true regarding memantine?",
    options: [
      "1, 2, 3, 4",
      "1, 2",
      "3, 4",
      "1, 2, 3"
    ],
    correctIndex: 1,
    explanation: "Memantine is an NMDA antagonist used in Alzheimer's. It can be used with cholinesterase inhibitors. Dizziness is a side effect. (Statements likely were: 1. NMDA antagonist, 2. Used in AD, 3. ?, 4. ?). Key says 'b' (1, 2).",
    topicsCovered: ["CNS Pharmacology", "Dementia"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q25",
    question: "The image below shows the life cycle of a virus. Which of the following drugs acts at step 5 (Integration)?",
    options: [
      "Raltegravir",
      "Enfuvirtide",
      "Tenofovir",
      "Zidovudine"
    ],
    correctIndex: 0,
    explanation: "Step 5 depicts integration of viral DNA into host DNA. Raltegravir is an Integrase Strand Transfer Inhibitor (INSTI).",
    topicsCovered: ["Antivirals", "HIV"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q26",
    question: "Which of the following statements is correct regarding clinical trials?",
    options: [
      "New drug application is done after phase 4",
      "Phase 4 is also called post-marketing surveillance",
      "Phase 3 is always double-blinded",
      "Phase 2 is done on healthy individuals"
    ],
    correctIndex: 1,
    explanation: "Phase 4 occurs after marketing approval and is known as post-marketing surveillance.",
    topicsCovered: ["Clinical Trials"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q27",
    question: "Match the following teratogenic drugs with their teratogenic effects. (1. Lithium, 2. Chloramphenicol, 3. Warfarin, 4. Thalidomide)",
    options: [
      "1-a, 2-b, 3-c, 4-d",
      "1-c, 2-d, 3-a, 4-b",
      "1-d, 2-a, 3-d, 4-c",
      "1-d, 2-c, 3-b, 4-a"
    ],
    correctIndex: 3,
    explanation: "Lithium - Ebstein (d); Chloramphenicol - Gray Baby (c); Warfarin - Embryopathy (b); Thalidomide - Phocomelia (a).",
    topicsCovered: ["Teratogenicity"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q28",
    question: "A young man sustained a scorpion sting 2 hours ago. He has high BP, tachycardia, and breathlessness (Pulmonary edema). How do you manage this patient?",
    options: [
      "Metoprolol",
      "Ivabradine",
      "Prazosin",
      "Frusemide"
    ],
    correctIndex: 2,
    explanation: "Prazosin (alpha-blocker) is the specific antidote for the autonomic storm caused by scorpion sting, which leads to pulmonary edema.",
    topicsCovered: ["Toxicology", "Emergency Medicine"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q29",
    question: "An experiment on a cat spine shows BP response to Acetylcholine. Phase 4 (High dose ACh after Atropine) shows increased BP. What does phase 4 indicate?",
    options: [
      "Muscarinic action of acetylcholine",
      "Potentiation of acetylcholine",
      "Antagonism of acetylcholine",
      "Nicotinic action of acetylcholine"
    ],
    correctIndex: 3,
    explanation: "This phenomenon is 'Dale's Vasomotor Reversal'. After muscarinic blockade by Atropine, high dose ACh stimulates Nicotinic receptors in ganglia/adrenal medulla, releasing catecholamines and raising BP.",
    topicsCovered: ["Autonomic Nervous System"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q30",
    question: "A patient on cART develops hyperpigmentation in the palms and soles. What is the most likely drug causing this?",
    options: [
      "Nelfinavir",
      "Emtricitabine",
      "Abacavir",
      "Zidovudine"
    ],
    correctIndex: 1,
    explanation: "Emtricitabine is known to cause hyperpigmentation of palms and soles.",
    topicsCovered: ["Antivirals", "Adverse Drug Reactions"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q31",
    question: "Dorzolamide is a ______.",
    options: [
      "Topically applied sulfonamide antibacterial",
      "Topical ocular carbonic anhydrase inhibitor",
      "Second-generation sulfonylurea",
      "Opioid receptor agonist"
    ],
    correctIndex: 1,
    explanation: "Dorzolamide is a topical carbonic anhydrase inhibitor used for glaucoma.",
    topicsCovered: ["Ophthalmology", "Glaucoma"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "INICET2022_Q32",
    question: "A patient with erectile dysfunction is given sildenafil. Which of the following mediates the action of sildenafil?",
    options: [
      "cAMP",
      "cGMP",
      "Calcium",
      "Phosphatidyl glycerol and inositol phosphate"
    ],
    correctIndex: 1,
    explanation: "Sildenafil inhibits PDE-5, leading to increased levels of cGMP, which causes smooth muscle relaxation and erection.",
    topicsCovered: ["Urology", "Cardiovascular Pharmacology"],
    year: 2022,
    examSession: "INI-CET"
  },

    {
        id: "NEET2022-01",
        question: "A male patient with chronic obstructive pulmonary disease (COPD) was prescribed theophylline. He noticed that his urine output had increased the following day. This action of the drug is mediated through which of the following receptors?",
        options: [
            "Interleukin-10",
            "Histone deacetylase",
            "Adenosine A1",
            "Beta 2 adrenergic receptors"
        ],
        correctIndex: 2,
        explanation: "An increased urine output after administering theophylline is due to the antagonism at adenosine A1 receptors. The adenosine A1 receptors are present in the afferent arteriole of the glomeruli. When activated, they cause vasoconstriction that reduces the glomerular filtration rate (GFR) and renal blood flow. This reduces urine output. Antagonistic action on these receptors will cause an increased GFR and renal blood flow and hence increased urine output.",
        topicsCovered: ["Respiratory Pharmacology", "Diuretics", "Autacoids"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-02",
        question: "Which of the following drugs is not likely to cause a pleural pathology?",
        options: [
            "Metformin",
            "Methysergide",
            "Bleomycin",
            "Nitrofurantoin"
        ],
        correctIndex: 0,
        explanation: "Metformin is not associated with pleural pathology. It acts by activation of AMP-dependent protein kinase (AMPK). Methysergide is associated with abdominal, pulmonary and endocardial fibrosis. Bleomycin causes mucocutaneous toxicity and pulmonary fibrosis. Nitrofurantoin is associated with pulmonary fibrosis.",
        topicsCovered: ["General Pharmacology", "Adverse Drug Reactions"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-03",
        question: "A patient with deep vein thrombosis was started on a new drug. After 2 days, he presented with the given finding (Purple Toe Syndrome). Which of the following drugs is implicated in causing the above condition?",
        options: [
            "Warfarin",
            "Heparin",
            "Dabigatran",
            "Rivaroxaban"
        ],
        correctIndex: 0,
        explanation: "The clinical scenario of the development of purple toe syndrome is suggestive of the adverse effect of warfarin. It occurs due to cholesterol microemboli released from atheromatous plaques. Warfarin inhibits Vitamin K epoxide reductase. Proteins C and S have shorter half-lives than other clotting factors (particularly factor II), creating a transient pro-thrombotic state initially.",
        topicsCovered: ["Hematology", "Anticoagulants"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-04",
        question: "A patient undergoing chemotherapy was given an antiemetic, after which he developed symptoms like acute dystonia, bradykinesia, and tremors. Which of the following drugs would have caused these symptoms?",
        options: [
            "Ondansetron",
            "Metoclopramide",
            "Meclizine",
            "Scopolamine"
        ],
        correctIndex: 1,
        explanation: "Metoclopramide is a dopamine receptor antagonist. Adverse effects are mainly extrapyramidal effects including acute dystonia, Parkinson-like symptoms (tremors, bradykinesia, rigidity), and tardive dyskinesia.",
        topicsCovered: ["Gastrointestinal Pharmacology", "Antiemetics", "CNS Pharmacology"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-05",
        question: "A young patient started to take a weight loss medication that acts by inhibiting fat absorption from food. After a few weeks, she developed easy bruising and increased menstrual bleeding. Deficiency of which of the following vitamins is responsible for her condition?",
        options: [
            "Vitamin E",
            "Vitamin K",
            "Vitamin B6",
            "Vitamin D"
        ],
        correctIndex: 1,
        explanation: "Drugs that inhibit fat absorption (e.g., ezetimibe, orlistat) also inhibit absorption of fat-soluble vitamin K. Vitamin K is required for gamma-carboxylation of clotting factors II, VII, IX, and X. Deficiency leads to bleeding diathesis characterized by easy bruising and increased bleeding.",
        topicsCovered: ["Vitamins", "Hematology"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-06",
        question: "A woman presenting with symptoms of urinary tract infection was prescribed a drug that causes tendon rupture and arthropathy. What is the mechanism of action of the drug?",
        options: [
            "DNA gyrase inhibition",
            "Ribosomal inhibition",
            "Cell wall synthesis inhibition",
            "Inhibition of folic acid synthesis"
        ],
        correctIndex: 0,
        explanation: "The drug causing tendon rupture and arthropathy is likely a fluoroquinolone. The mechanism of action is DNA gyrase inhibition (in gram-negative bacteria) or Topoisomerase IV inhibition (in gram-positive bacteria).",
        topicsCovered: ["Antimicrobials", "Antibiotics"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-07",
        question: "A patient was brought to the emergency with a history of consumption of 8 tablets of digoxin. On examination, he was unstable and his heart rate was 56 bpm. ECG showed a 3rd-degree heart block. What is the next step in the management of this patient?",
        options: [
            "Antibody against digoxin",
            "Lidocaine",
            "DC cardioversion",
            "Phenytoin"
        ],
        correctIndex: 0,
        explanation: "Administration of digibind (antibody against digoxin) is the next step. An unstable patient with bradycardia and 3rd-degree heart block following digoxin toxicity should be treated with digibind.",
        topicsCovered: ["Cardiovascular Pharmacology", "Toxicology"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-08",
        question: "An elderly man, who is a known case of diabetic nephropathy, presented to the emergency with palpitations and chest discomfort. ECG showed tall T-waves. Laboratory investigations showed elevated potassium levels. Which of the following drugs will cause the shift of potassium back into the cell?",
        options: [
            "Epinephrine",
            "Glucagon",
            "Atropine",
            "Lactic acid"
        ],
        correctIndex: 0,
        explanation: "The patient has hyperkalemia. Epinephrine (Beta-2 agonist activity) promotes cellular uptake of potassium via the Na+/K+ ATPase pump, shifting potassium back into the cell.",
        topicsCovered: ["Endocrine Pharmacology", "Emergency Medicine"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-09",
        question: "A patient with a pituitary tumor that overproduced growth hormone underwent surgical removal of the tumor. The resection was found to be incomplete. What is the first-line treatment for this patient?",
        options: [
            "Leuprolide",
            "Goserelin",
            "Nafarelin",
            "Octreotide"
        ],
        correctIndex: 3,
        explanation: "The scenario suggests acromegaly. Octreotide (a somatostatin analog) is the first-line medical treatment for acromegaly when surgery is incomplete or not possible.",
        topicsCovered: ["Endocrine Pharmacology", "Pituitary Hormones"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-10",
        question: "A middle-aged male patient presents with protrusion of the chin, excessive sweating, impaired glucose tolerance, and enlargement of hands and feet. Which of the following is a growth hormone receptor antagonist used to treat this condition?",
        options: [
            "Octreotide",
            "Pegvisomant",
            "Cabergoline",
            "Olcegepant"
        ],
        correctIndex: 1,
        explanation: "The symptoms describe acromegaly. Pegvisomant is a specific Growth Hormone receptor antagonist used to treat this condition.",
        topicsCovered: ["Endocrine Pharmacology"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-11",
        question: "A diabetic patient presented with rhinitis and facial swelling. An intranasal biopsy revealed the presence of broad-based aseptate hyphae with branching at right angle. Evidence of vascular invasion was present. What will be the drug of choice for this condition?",
        options: [
            "Fluconazole",
            "Amphotericin B",
            "Ketoconazole",
            "Griseofulvin"
        ],
        correctIndex: 1,
        explanation: "The biopsy findings (broad-based aseptate hyphae, right-angle branching) and clinical setting (diabetic) are classic for Mucormycosis. The drug of choice is Amphotericin B.",
        topicsCovered: ["Antifungals", "Infectious Diseases"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-12",
        question: "A tuberculosis patient on anti-tubercular treatment presents with a tingling sensation and paresthesia in the lower limbs. He is not a diabetic and occasionally consumes alcohol. Which of the following vitamins must be supplemented to this patient?",
        options: [
            "Vitamin B6",
            "Vitamin B12",
            "Vitamin B2",
            "Vitamin B3"
        ],
        correctIndex: 0,
        explanation: "Symptoms suggest peripheral neuropathy caused by Isoniazid. Isoniazid interferes with Pyridoxine (Vitamin B6) metabolism. Supplementation with Vitamin B6 prevents this neurotoxicity.",
        topicsCovered: ["Antimicrobials", "Tuberculosis", "Vitamins"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-13",
        question: "An elderly woman received a botox injection for the treatment of wrinkles. Which of the following is the mechanism of action of botulinum toxin?",
        options: [
            "Inhibits the release of acetylcholine",
            "Release of noradrenaline at synaptic cleft",
            "Selectively and irreversibly inhibits nicotinic receptors",
            "Stimulates muscarinic and nicotinic receptors"
        ],
        correctIndex: 0,
        explanation: "Botulinum toxin acts by cleaving SNARE proteins involved in exocytosis, thereby inhibiting the release of acetylcholine into the synaptic cleft.",
        topicsCovered: ["Autonomic Nervous System", "Toxins"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-14",
        question: "Which of the following is a PCSK9 inhibitor?",
        options: [
            "Evolocumab",
            "Ezetimibe",
            "Bempedoic acid",
            "Clofibrate"
        ],
        correctIndex: 0,
        explanation: "Evolocumab is a monoclonal antibody that inhibits PCSK9. This prevents the degradation of LDL receptors in the liver, increasing LDL clearance.",
        topicsCovered: ["Cardiovascular Pharmacology", "Hypolipidemics"],
        year: 2022,
        examSession: "NEET"
    },
    {
        id: "NEET2022-15",
        question: "An elderly man presents with rigidity and tremors. On examination, he has blank facial expressions. Which of the following drugs can be used to manage this condition?",
        options: [
            "Clozapine",
            "Donepezil",
            "Selegiline",
            "Haloperidol"
        ],
        correctIndex: 2,
        explanation: "The symptoms suggest Parkinson's disease. Selegiline is a selective MAO-B inhibitor used in the treatment of Parkinson's disease to increase dopamine levels.",
        topicsCovered: ["CNS Pharmacology", "Parkinson's Disease"],
        year: 2022,
        examSession: "NEET"
    },

    // ---------------------------------------------------------
    // NEET 2023 Questions
    // ---------------------------------------------------------
    {
        id: "NEET2023-01",
        question: "A bronchial asthma patient on inhalational steroids presented with white patchy lesions on the tongue and buccal mucosa. What is the drug that can be used to treat this condition?",
        options: [
            "Clotrimazole",
            "Griseofulvin",
            "Terbinafine",
            "Flucytosine"
        ],
        correctIndex: 0,
        explanation: "The patient has oral candidiasis (thrush), a common side effect of inhaled steroids. Clotrimazole is a topical azole antifungal effective for oropharyngeal candidiasis.",
        topicsCovered: ["Respiratory Pharmacology", "Antifungals"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-02",
        question: "A pregnant woman with a history of bronchial asthma is in the third stage of labor. Which of the following drugs should be avoided in the management of postpartum hemorrhage in this mother?",
        options: [
            "Carboprost",
            "Oxytocin",
            "Dinoprostone",
            "Methyl ergometrine"
        ],
        correctIndex: 0,
        explanation: "Carboprost is a PGF2-alpha analog. It causes bronchoconstriction and should be avoided in patients with asthma.",
        topicsCovered: ["Reproductive Pharmacology", "Autacoids"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-03",
        question: "Name the drug that acts on both the marked areas (Inhibiting both ACE and Neprilysin).",
        options: [
            "Sacubitril",
            "Omapatrilat",
            "Losartan",
            "Nesiritide"
        ],
        correctIndex: 1,
        explanation: "Omapatrilat is a dual inhibitor of ACE (Angiotensin-Converting Enzyme) and Neutral Endopeptidase (Neprilysin). Sacubitril inhibits only Neprilysin.",
        topicsCovered: ["Cardiovascular Pharmacology", "Heart Failure"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-04",
        question: "A patient with a previous history of myocardial infarction and ventricular arrhythmia is on treatment for a few months. He developed fatigue, dyspnea, and weight gain. He had also developed pulmonary fibrosis. Which of the following drugs is responsible for the above-mentioned side effects?",
        options: [
            "Amiodarone",
            "Atenolol",
            "Aspirin",
            "Spironolactone"
        ],
        correctIndex: 0,
        explanation: "Amiodarone is a class III antiarrhythmic known to cause pulmonary fibrosis, thyroid dysfunction (hypo or hyper), and corneal microdeposits.",
        topicsCovered: ["Cardiovascular Pharmacology", "Antiarrhythmics"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-05",
        question: "A young female comes to the emergency department after consuming 100 tablets of aspirin. What should be the next step in management?",
        options: [
            "N-acetyl cysteine to replenish glutathione stores",
            "Pralidoxime",
            "Glucagon to control bradycardia and hypoglycemia",
            "Give sodium bicarbonate to alkalize urine"
        ],
        correctIndex: 3,
        explanation: "Aspirin (salicylate) is a weak acid. Alkalinization of the urine with Sodium Bicarbonate promotes the ionization of salicylate, trapping it in the urine (ion trapping) and enhancing its excretion.",
        topicsCovered: ["Toxicology", "General Pharmacology"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-06",
        question: "A chronic smoker was on nicotine replacement therapy and clonidine tablets for smoking de-addiction. He stopped taking clonidine tablets and now presents with a headache. What is the reason behind this condition?",
        options: [
            "Postural hypotension",
            "Receptor upregulation",
            "Rebound hypertension",
            "Receptor hypersensitivity"
        ],
        correctIndex: 2,
        explanation: "Clonidine is a central alpha-2 agonist. Abrupt withdrawal causes rebound hypertension due to sympathetic overactivity.",
        topicsCovered: ["Autonomic Nervous System", "Antihypertensives"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-07",
        question: "A patient with recurrent attacks of gout was started on a therapy that inhibits the synthesis of uric acid. His symptoms were reduced after therapy. Which drug was he started on?",
        options: [
            "Probenecid",
            "Colchicine",
            "Diclofenac",
            "Allopurinol"
        ],
        correctIndex: 3,
        explanation: "Allopurinol is a xanthine oxidase inhibitor that inhibits the synthesis of uric acid. Probenecid increases excretion, and Colchicine/Diclofenac treat inflammation/pain.",
        topicsCovered: ["Rheumatology", "Gout"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-08",
        question: "A patient with a malignancy is undergoing chemotherapy. The platelet counts were reduced after the previous cycle of chemotherapy. Which of the following drugs can be used in the treatment of this patient?",
        options: [
            "Oprelvekin (IL-11)",
            "Filgrastim",
            "Erythropoietin",
            "Amifostine"
        ],
        correctIndex: 0,
        explanation: "Oprelvekin (Recombinant IL-11) stimulates thrombopoiesis and is used to treat chemotherapy-induced thrombocytopenia.",
        topicsCovered: ["Hematology", "Chemotherapy"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-09",
        question: "The true statement among the following is _____",
        options: [
            "The dose of telmisartan should be reduced in renal failure but not in hepatic failure.",
            "The dose of irbesartan should be reduced in case of mild-moderate hepatic failure and renal failure.",
            "The dose of candesartan should be reduced in mild-moderate liver failure but not in renal failure.",
            "Losartan acts as thromboxane A2 antagonist and inhibits platelet aggregation."
        ],
        correctIndex: 3,
        explanation: "Losartan has an active metabolite (EXP-3174) which is a potent competitive antagonist at the Thromboxane A2 receptor, contributing to anti-platelet aggregation effects.",
        topicsCovered: ["Cardiovascular Pharmacology", "Antihypertensives"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-10",
        question: "A patient given digoxin started having side effects like nausea and vomiting. The serum concentration of digoxin was 4 mg/dL. The plasma therapeutic range is 1 mg/dL. If the half-life of digoxin is 40 hours, how long one should wait before resuming the treatment?",
        options: [
            "40 hours",
            "80 hours",
            "120 hours",
            "140-180 hours"
        ],
        correctIndex: 1,
        explanation: "Current concentration = 4 mg/dL. Target = 1 mg/dL. \nAfter 1 half-life (40h): 4 -> 2 mg/dL. \nAfter 2 half-lives (80h): 2 -> 1 mg/dL. \nTotal wait time = 80 hours.",
        topicsCovered: ["General Pharmacology", "Cardiovascular Pharmacology"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-11",
        question: "A patient comes to the casualty with organophosphate poisoning. He was started on atropine infusion and pralidoxime. After 2 hours, the patient had a sudden rise in temperature. What is the likely cause of fever?",
        options: [
            "Atropine toxicity",
            "Side effect of pralidoxime",
            "Due to organophosphate poisoning",
            "Idiopathic"
        ],
        correctIndex: 0,
        explanation: "Atropine blocks muscarinic receptors, including those on sweat glands (sympathetic cholinergic). This causes anhidrosis and hyperthermia ('Hot as a hare'), a classic sign of atropine toxicity.",
        topicsCovered: ["Autonomic Nervous System", "Toxicology"],
        year: 2023,
        examSession: "NEET"
    },
    {
        id: "NEET2023-12",
        question: "The mechanism of action of tissue plasminogen activator is _____",
        options: [
            "Inhibit extrinsic pathway",
            "Inhibits platelet aggregation",
            "Enhance fibrin degradation",
            "Inhibit clot formation"
        ],
        correctIndex: 2,
        explanation: "Tissue plasminogen activators (t-PA) activate plasminogen bound to fibrin, converting it to plasmin. Plasmin degrades fibrin (fibrinolysis).",
        topicsCovered: ["Hematology", "Fibrinolytics"],
        year: 2023,
        examSession: "NEET"
    },

    // ---------------------------------------------------------
    // INI-CET 2023 Questions
    // ---------------------------------------------------------
    {
        id: "INICET2023-01",
        question: "A patient underwent a hysterectomy and was given morphine in the post-operative period and in the ward for pain. She now presents with respiratory depression and pin point pupils. What is the drug used to treat this condition?",
        options: [
            "Naloxone",
            "Pethidine",
            "Atropine",
            "Buprenorphine"
        ],
        correctIndex: 0,
        explanation: "The symptoms (respiratory depression, pinpoint pupils/miosis) indicate opioid overdose. Naloxone is a pure opioid antagonist and is the drug of choice for reversal.",
        topicsCovered: ["Analgesics", "Opioids", "Toxicology"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-02",
        question: "Drug used for trastuzumab-resistant HER 2 positive breast cancer is:",
        options: [
            "Vismodegib",
            "Lapatinib",
            "Vemurafenib",
            "Erlotinib"
        ],
        correctIndex: 1,
        explanation: "Lapatinib is a tyrosine kinase inhibitor affecting EGFR and HER2. It is indicated for HER2-positive breast cancer that is resistant to trastuzumab.",
        topicsCovered: ["Anticancer Drugs", "Chemotherapy"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-03",
        question: "Nomogram used for vancomycin dosing is?",
        options: [
            "Salazar",
            "Halsted",
            "Rummack-mathew",
            "Matzke"
        ],
        correctIndex: 3,
        explanation: "The Matzke nomogram is designed to guide the determination of the initial empiric dose and interval of intravenous vancomycin based on creatinine clearance.",
        topicsCovered: ["Antimicrobials", "General Pharmacology"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-04",
        question: "Which of the following is true statement regarding lithium?",
        options: [
            "It is not absorbed from the stomach",
            "It can cause fine tremors in the therapeutic range",
            "Approved for the treatment of absent seizures",
            "It is not teratogenic"
        ],
        correctIndex: 1,
        explanation: "Lithium frequently causes fine tremors at therapeutic levels. Coarse tremors indicate toxicity. It is absorbed from the GI tract, used for bipolar (not absence seizures), and is teratogenic (Ebstein's anomaly).",
        topicsCovered: ["Psychopharmacology", "Bipolar Disorder"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-05",
        question: "Match the following drugs to their receptor activity:\nList 1: A. Mirabegron, B. Indacaterol, C. Betaxolol, D. Isoproterenol\nList 2: 1. Beta 1, 2. Beta 1 & 2, 3. Beta 3, 4. Beta 2",
        options: [
            "A-2, B-3, C-4, D-1",
            "A-3, B-4, C-1, D-2",
            "A-4, B-2, C-3, D-1",
            "A-1, B-2, C-3, D-4"
        ],
        correctIndex: 1,
        explanation: "Mirabegron is a Beta-3 agonist. Indacaterol is a long-acting Beta-2 agonist. Betaxolol is a Beta-1 selective blocker. Isoproterenol is a non-selective Beta agonist (Beta 1 & 2).",
        topicsCovered: ["Autonomic Nervous System", "Adrenergic Drugs"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-06",
        question: "True about therapeutic index of a drug is:",
        options: [
            "Denotes safety and efficacy after experiments on humans",
            "Denotes safety and efficacy in the population",
            "Denotes safety and efficacy in an individual",
            "Ratio of median lethal dose in 50% of population to median effective dose in 50% of population"
        ],
        correctIndex: 1,
        explanation: "The therapeutic index (LD50/ED50) denotes the margin of safety of a drug in a population. It represents the gap between the dose producing the desired effect and the dose causing toxicity/death in 50% of the population/subjects.",
        topicsCovered: ["General Pharmacology", "Pharmacodynamics"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-07",
        question: "Osimertinib is used in NSCLC with which of the following mutation?",
        options: [
            "T790M mutation",
            "L858R mutation",
            "T890M mutation",
            "M790T mutation"
        ],
        correctIndex: 0,
        explanation: "Osimertinib is a 3rd generation EGFR inhibitor specifically effective against the T790M resistance mutation in NSCLC.",
        topicsCovered: ["Anticancer Drugs", "Targeted Therapy"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-08",
        question: "A patient was started on a drug for mood disorder and he developed priapism. The causative drug is:",
        options: [
            "Trazodone",
            "Venlafaxine",
            "Bupropion",
            "Mirtazapine"
        ],
        correctIndex: 0,
        explanation: "Trazodone is an atypical antidepressant known to cause priapism (painful, prolonged erection) as a rare but serious side effect.",
        topicsCovered: ["Psychopharmacology", "Antidepressants"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-09",
        question: "Cyclosporine-induced cholestasis is due to which receptor?",
        options: [
            "MDR 1",
            "BRCA",
            "MRP 1",
            "OAT1B1"
        ],
        correctIndex: 0,
        explanation: "Cyclosporine is a substrate and inhibitor of MDR1 (P-glycoprotein). It can inhibit ATP-dependent transporters like MDR1 in the bile canalicular membrane, leading to cholestasis.",
        topicsCovered: ["Immunomodulators", "Hepatotoxicity"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-10",
        question: "A diabetic patient was started on a drug that decreased her HbA1C from 7.6 to 6.7. She started complaining of itching around vulvovaginal area. What was the most likely drug she was started on?",
        options: [
            "Acarbose",
            "Canagliflozin",
            "Linagliptin",
            "Liraglutide"
        ],
        correctIndex: 1,
        explanation: "Canagliflozin is an SGLT-2 inhibitor. By promoting glycosuria (excretion of glucose in urine), it increases the risk of genital mycotic infections (itching/candidiasis).",
        topicsCovered: ["Endocrine Pharmacology", "Diabetes"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-11",
        question: "An anti-diabetic drug causes a decrease in HbA1C by causing an increase in GIP and GLP-1 levels and a decrease in glucagon levels. It is an oral drug causing a reduction in both pre and post-prandial glucose. The drug is:",
        options: [
            "Pramlinitide",
            "Alogliptin",
            "Liraglutide",
            "Metformin"
        ],
        correctIndex: 1,
        explanation: "Alogliptin is a DPP-4 inhibitor. By inhibiting the breakdown of incretins (GLP-1 and GIP), it enhances insulin release and decreases glucagon.",
        topicsCovered: ["Endocrine Pharmacology", "Diabetes"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-12",
        question: "What is true about keynote 189 trial?",
        options: [
            "Pembrolizumab plus chemotherapy used in NSCLC",
            "Pembrolizumab used in NSCLC",
            "Nivolumab plus chemotherapy used in NSCLC",
            "Nivolumab is used in NSCLC"
        ],
        correctIndex: 0,
        explanation: "The KEYNOTE-189 trial investigated the combination of Pembrolizumab and chemotherapy (pemetrexed and a platinum-based drug) in metastatic non-squamous NSCLC.",
        topicsCovered: ["Anticancer Drugs", "Clinical Trials"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-13",
        question: "Which of the following is not a mechanism for thalidomide teratogenicity?",
        options: [
            "Release of reactive oxygen species and free radicles",
            "Supression of angiogenesis",
            "Cereblon binding",
            "Inhibition of IL2, IL4, IL5"
        ],
        correctIndex: 3,
        explanation: "Thalidomide teratogenicity involves oxidative stress, anti-angiogenesis, and cereblon binding. Inhibition of interleukins is not a primary mechanism for its teratogenic effects (phocomelia).",
        topicsCovered: ["Immunomodulators", "Teratogenicity"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-14",
        question: "Which is a rare but very severe side effect of clozapine that requires regular monitoring?",
        options: [
            "Suicidal tendency",
            "Agranulocytosis",
            "Myocarditis",
            "Cerebral bleeding"
        ],
        correctIndex: 1,
        explanation: "Clozapine carries a significant risk of agranulocytosis (severe drop in WBCs), necessitating mandatory regular blood count monitoring.",
        topicsCovered: ["Psychopharmacology", "Antipsychotics"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-15",
        question: "Which of the following newly approved anti-diabetic drugs can be given for heart failure with reduced ejection fraction and impaired renal function?",
        options: [
            "Empaglifozin",
            "Degludec",
            "Linagliptin",
            "Rosiglitazone"
        ],
        correctIndex: 0,
        explanation: "Empagliflozin (SGLT2 inhibitor) is approved for heart failure with reduced ejection fraction and has renoprotective properties, making it suitable for patients with impaired renal function (down to certain GFR limits).",
        topicsCovered: ["Endocrine Pharmacology", "Cardiovascular Pharmacology"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-16",
        question: "A patient diagnosed with ulcerative colitis presents with 2-3 episodes of bloody stools per day. What should be given to manage this patient?",
        options: [
            "Budesonide",
            "Azathioprine",
            "6-mercaptopurine",
            "5-aminosalicylic acid"
        ],
        correctIndex: 3,
        explanation: "For mild to moderate ulcerative colitis (indicated by frequency of stools), 5-aminosalicylic acid (5-ASA/Mesalamine) is the first-line induction and maintenance therapy.",
        topicsCovered: ["Gastrointestinal Pharmacology", "IBD"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-17",
        question: "A 25 year old male patient presents with several purpuric skin lesions and is diagnosed with idiopathic thrombocytopenic purpura. Which of the following tyrosine kinase inhibitors can be used in his condition?",
        options: [
            "Eltrombopag",
            "Romiplostim",
            "Bosutinib",
            "Fostamatinib"
        ],
        correctIndex: 3,
        explanation: "Fostamatinib is a spleen tyrosine kinase (SYK) inhibitor used in chronic immune thrombocytopenia (ITP) unresponsive to other treatments. Eltrombopag/Romiplostim are TPO agonists, not TKIs.",
        topicsCovered: ["Hematology", "Immunomodulators"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-18",
        question: "A 40-year-old woman with multidrug-resistant tuberculosis presents with fatigue, constipation, weight gain, and neck swelling. Which of the following drugs is implicated in this case?",
        options: [
            "Pyrazinamide",
            "Ethionamide",
            "Cycloserine",
            "Streptomycin"
        ],
        correctIndex: 1,
        explanation: "The symptoms (fatigue, weight gain, neck swelling/goiter, constipation) suggest hypothyroidism. Ethionamide is a second-line anti-TB drug known to cause hypothyroidism.",
        topicsCovered: ["Antimicrobials", "Tuberculosis"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-19",
        question: "A patient on amitriptyline was found in an unconscious state. Which of the following does not suggest amitriptyline toxicity?",
        options: [
            "Arrhythmias",
            "Confusion",
            "Hypothermia",
            "Mydriasis"
        ],
        correctIndex: 2,
        explanation: "Amitriptyline (TCA) overdose causes anticholinergic effects (hyperthermia, not hypothermia, mydriasis, confusion) and cardiotoxicity (arrhythmias). Hypothermia is inconsistent with TCA toxicity.",
        topicsCovered: ["Toxicology", "Antidepressants"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-20",
        question: "Which of the following is beneficial in reducing the painful crisis of sickle cell anemia?",
        options: [
            "Hydroxyurea",
            "Methotrexate + leukovorin",
            "Methionine",
            "Eltrombopag"
        ],
        correctIndex: 0,
        explanation: "Hydroxyurea increases fetal hemoglobin (HbF), which inhibits polymerization of HbS, thereby reducing painful vaso-occlusive crises in sickle cell anemia.",
        topicsCovered: ["Hematology", "Anemia"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-21",
        question: "What is the most useful drug to treat doxorubicin induced cardiotoxicity?",
        options: [
            "Dexrazoxane",
            "Dexamethasone",
            "Aprepitant",
            "Amifostine"
        ],
        correctIndex: 0,
        explanation: "Dexrazoxane is an intracellular iron-chelating agent used to prevent or reduce anthracycline (doxorubicin)-induced cardiotoxicity.",
        topicsCovered: ["Anticancer Drugs", "Antidotes"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-22",
        question: "An elderly patient with dementia is not compliant with oral medications. Which of the following will be beneficial in this case?",
        options: [
            "Donepezil",
            "Rivastigmine",
            "Galantamine",
            "Memantine"
        ],
        correctIndex: 1,
        explanation: "Rivastigmine is available as a transdermal patch, which is beneficial for patients who are non-compliant with oral medications or have difficulty swallowing.",
        topicsCovered: ["CNS Pharmacology", "Dementia"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-23",
        question: "Sodium valproate has an inhibitory action at which of the following sites? [Image of GABA synapse where A=Synthesis, B=Degradation, C=Reuptake, D=Receptor]",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correctIndex: 1,
        explanation: "Sodium valproate increases GABA levels. It stimulates GABA synthesis (Site A) and inhibits GABA degradation (Site B / GABA Transaminase). Since the question asks for 'inhibitory action', it acts on the degradation pathway (B).",
        topicsCovered: ["CNS Pharmacology", "Antiepileptics"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-24",
        question: "Which of the following drugs acts via the ATP-binding cassette transporter?",
        options: [
            "Verapamil",
            "Diltiazem",
            "Nifedipine",
            "Amlodipine"
        ],
        correctIndex: 0,
        explanation: "Verapamil is a potent inhibitor of P-glycoprotein, which is an ATP-binding cassette (ABC) transporter responsible for drug efflux.",
        topicsCovered: ["General Pharmacology", "Transporters"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-25",
        question: "A 12 year old boy presents with complaints of profuse watery stools and an elevated WBC count of 16000 cells/mm3. He has been on treatment with amoxicillin for the past 1 week. What is the treatment of choice for his condition?",
        options: [
            "Fidaxomycin",
            "Clindamycin",
            "Zanamivir",
            "Cilastatin"
        ],
        correctIndex: 0,
        explanation: "The history implies Clostridium difficile infection (antibiotic-associated diarrhea). Fidaxomicin (or Oral Vancomycin) is a treatment of choice. Clindamycin causes it.",
        topicsCovered: ["Antimicrobials", "Gastrointestinal Pharmacology"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-26",
        question: "Which of the following mood stabilisers causes hepatotoxicity and hyperammonemia?",
        options: [
            "Lithium",
            "Valproate",
            "Carbamazepine",
            "Topiramate"
        ],
        correctIndex: 1,
        explanation: "Valproate is known to cause hepatotoxicity and hyperammonemia (which can lead to encephalopathy). Other side effects include weight gain, alopecia, and teratogenicity.",
        topicsCovered: ["CNS Pharmacology", "Antiepileptics", "Mood Stabilizers"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-27",
        question: "Which of the following pathogens is correctly matched with its intrinsic drug resistance?",
        options: [
            "Aspergillus niger - Voriconazole",
            "Candida krusei - Fluconazole",
            "Candida Glabrata - Amphotericin B",
            "Sporothrix - Itraconazole"
        ],
        correctIndex: 1,
        explanation: "Candida krusei possesses intrinsic resistance to Fluconazole. This is a classic microbiological pharmacological fact.",
        topicsCovered: ["Antifungals", "Microbiology"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-28",
        question: "A child was receiving a blood transfusion. At what serum iron level will desferrioxamine be administered to him?",
        options: [
            "350 mcg/dL",
            "400 mcg/dL",
            "450 mcg/dL",
            "500 mcg/dL"
        ],
        correctIndex: 3,
        explanation: "Explanation not provided in source document. Generally, chelation therapy for acute iron toxicity is indicated when serum iron levels exceed 500 mcg/dL or in the presence of severe symptoms.",
        topicsCovered: ["Toxicology", "Chelators"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-29",
        question: "A patient on fluoxetine was started on a pain control drug for neuropathic pain. He developed an episode of syncope after 2 weeks. ECG reveals QT interval of 477 ms. Which of the following is the causative drug?",
        options: [
            "Methadone",
            "Morphine",
            "Meperidine",
            "Propoxyphene"
        ],
        correctIndex: 0,
        explanation: "Methadone is an opioid used for pain and maintenance, but it has a known risk of QT prolongation (Torsades de pointes). Fluoxetine (CYP inhibitor) can increase Methadone levels, worsening the risk.",
        topicsCovered: ["Analgesics", "Opioids", "Drug Interactions"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-30",
        question: "All of the following side effects are more commonly seen with carbamazepine than oxcarbazepine except",
        options: [
            "Rashes",
            "Hyponatremia",
            "Blood dyscrasia",
            "Hepatitis"
        ],
        correctIndex: 1,
        explanation: "Oxcarbazepine is more likely to cause Hyponatremia than Carbamazepine. Carbamazepine is more associated with auto-induction, rashes, and blood dyscrasias.",
        topicsCovered: ["CNS Pharmacology", "Antiepileptics"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-31",
        question: "A patient with hemophilia on antiretroviral therapy is brought in altered mental status following complaints of nausea, vomiting and headache. Which of the following medications was he taking?",
        options: [
            "Lopinavir",
            "Tipranavir",
            "Darunavir",
            "Ritonavir"
        ],
        correctIndex: 1,
        explanation: "Tipranavir is a protease inhibitor associated with a risk of intracranial hemorrhage, especially in patients with hemophilia or on anti-platelet agents.",
        topicsCovered: ["Antivirals", "HIV"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-32",
        question: "A 60-year-old patient with chronic kidney disease suddenly develops chest pain and palpitations. He had previously complained about feeling weak for the past week. Serum potassium was found to be 6.5mEq/L. Which of the following is likely to be found in this patients ECG?",
        options: [
            "Tall peaked T waves",
            "Flat T waves",
            "Tall QRS complexes",
            "Prolonged PR intervals"
        ],
        correctIndex: 0,
        explanation: "Hyperkalemia (Serum K+ > 5.5-6.0 mEq/L) typically presents early on ECG as Tall, Peaked T waves.",
        topicsCovered: ["General Pharmacology", "Electrolytes", "Cardiology"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-33",
        question: "Which of the following drugs can be used in diabetic neuropathy, post herpetic neuralgia and spinal cord injury?",
        options: [
            "Amitriptyline",
            "Phenytoin",
            "Carbamazepine",
            "Pregabalin"
        ],
        correctIndex: 3,
        explanation: "Pregabalin (and Gabapentin) are first-line agents for neuropathic pain, including diabetic neuropathy, post-herpetic neuralgia, and spinal cord injury pain.",
        topicsCovered: ["CNS Pharmacology", "Analgesics"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "INICET2023-34",
        question: "Which of the following antibiotics acts by inhibiting the 50s ribosome?",
        options: [
            "Aztreonam",
            "Daptomycin",
            "Linezolid",
            "Rifampicin"
        ],
        correctIndex: 2,
        explanation: "Linezolid acts by inhibiting bacterial protein synthesis by binding to the 23S rRNA of the 50S subunit. Aztreonam (Cell wall), Daptomycin (Cell membrane), Rifampicin (RNA polymerase).",
        topicsCovered: ["Antimicrobials", "Antibiotics"],
        year: 2023,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-1",
        question: "Which of the following drugs used in the treatment of diabetes is known to cause urinary tract infections?",
        options: [
            "Dapagliflozin",
            "Sitagliptin",
            "Pioglitazone",
            "Glimepiride"
        ],
        correctIndex: 0,
        explanation: "Dapagliflozin is a sodium-glucose transporter 2 (SGLT-2) inhibitor. It acts by inhibiting the SGLT-2 transporter in the proximal renal tubule, responsible for reabsorbing 80-90% of filtered glucose. This results in glycosuria, which increases the risk of urinary tract infections and genital mycotic infections. Other SGLT-2 inhibitors include canagliflozin and empagliflozin.",
        topicsCovered: [
            "Pharmacology",
            "Endocrinology",
            "Antidiabetic Drugs"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-2",
        question: "Which of the following medications used in treating leprosy causes skin pigmentation?",
        options: [
            "Ofloxacin",
            "Dapsone",
            "Clofazimine",
            "Rifampicin"
        ],
        correctIndex: 2,
        explanation: "Clofazimine is a dye with leprostatic and anti-inflammatory properties. It accumulates in macrophages and deposits as crystals in tissues, including subcutaneous fat. A major adverse effect is reddish-black discoloration of the skin (ichthyosis) and body secretions. It can also cause GI symptoms due to crystal deposition in the intestinal submucosa.",
        topicsCovered: [
            "Pharmacology",
            "Antimicrobials",
            "Leprosy"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-3",
        question: "A patient is set to receive intermittent treatment with teriparatide. Which of the following complications does this drug predispose him to?",
        options: [
            "Osteonecrosis of the jaw bone",
            "Subtrochanteric fractures",
            "Net loss of bone mass",
            "Osteosarcoma"
        ],
        correctIndex: 3,
        explanation: "Teriparatide is a parathormone analog that stimulates new bone formation. Its use has been associated with the development of osteosarcoma in rat studies. Consequently, it carries a black-box warning, and its use is limited to 2 years and contraindicated in patients with increased baseline risk for osteosarcoma (e.g., Paget's disease, prior radiation).",
        topicsCovered: [
            "Pharmacology",
            "Endocrinology",
            "Bone Mineral Homeostasis"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-4",
        question: "Which of the following monoclonal antibodies is not a HER-1 inhibitor?",
        options: [
            "Pertuzumab",
            "Cetuximab",
            "Panitumumab",
            "Necitumumab"
        ],
        correctIndex: 0,
        explanation: "Pertuzumab targets HER-2 (human epidermal growth factor receptor 2) and is used in HER-2 positive breast cancer. Cetuximab, Panitumumab, and Necitumumab are inhibitors of EGFR (Epidermal Growth Factor Receptor), also known as HER-1.",
        topicsCovered: [
            "Pharmacology",
            "Anticancer Drugs",
            "Monoclonal Antibodies"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-5",
        question: "A G2P1 delivered a preterm baby at 36 weeks. The baby was admitted in the NICU for a week and was given expressed breast milk. Unfortunately the baby did not survive. Which of the following drugs can be used to reduce the engorgement and pain of the lactating breasts?",
        options: [
            "Cabergoline",
            "Sumatriptan",
            "Chlorpromazine",
            "Pramipexole"
        ],
        correctIndex: 0,
        explanation: "Cabergoline is a long-acting dopamine agonist (D2 receptor) used to suppress lactation. Dopamine inhibits prolactin secretion. Cabergoline is preferred over bromocriptine due to better efficacy and fewer side effects.",
        topicsCovered: [
            "Pharmacology",
            "Endocrinology",
            "Reproductive System"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-6",
        question: "Coagulation profile monitoring is required for which of the following drugs?",
        options: [
            "Lepirudin",
            "Enoxaparin",
            "Fondaparinux",
            "Dabigatran"
        ],
        correctIndex: 0,
        explanation: "Lepirudin is a parenteral direct thrombin inhibitor used for heparin-induced thrombocytopenia (HIT). It requires monitoring via aPTT. Enoxaparin (LMWH), Fondaparinux, and Dabigatran (oral direct thrombin inhibitor) generally do not require routine coagulation monitoring.",
        topicsCovered: [
            "Pharmacology",
            "Hematology",
            "Anticoagulants"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-7",
        question: "A patient known case of diabetes, shows microalbuminuria on urine analysis, done twice at an interval of 6 months. Renal function tests are normal. Which of the following drugs is not useful in preventing the progression of renal damage?",
        options: [
            "Finerenone",
            "Hydrochlorothiazide",
            "Angiotensin receptor blockers",
            "SGLT2 inhibitor"
        ],
        correctIndex: 1,
        explanation: "Hydrochlorothiazide is a thiazide diuretic used for hypertension but does not have the specific renoprotective effects seen with ACE inhibitors/ARBs, SGLT2 inhibitors, or Finerenone (mineralocorticoid receptor antagonist) in slowing the progression of diabetic kidney disease.",
        topicsCovered: [
            "Pharmacology",
            "Renal Pharmacology",
            "Diabetes"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-8",
        question: "Which of the following causes a decrease in serum parathyroid hormone?",
        options: [
            "Calcitriol",
            "Risedronate",
            "Furosemide",
            "Lithium"
        ],
        correctIndex: 0,
        explanation: "Calcitriol (1,25-dihydroxyvitamin D) exerts negative feedback on the parathyroid gland, directly suppressing PTH gene expression and secretion. Furosemide increases calcium excretion (potentially raising PTH). Lithium can increase PTH secretion. Risedronate inhibits bone resorption but doesn't directly suppress PTH.",
        topicsCovered: [
            "Pharmacology",
            "Endocrinology",
            "Bone Mineral Homeostasis"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-9",
        question: "Which of the following acts by suicide inhibition? \n1. Ritonavir\n2. Benzbromarone\n3. Ethinyl estradiol\n4. Spironolactone",
        options: [
            "1, 2",
            "3, 4",
            "1, 2, 4",
            "1, 3, 4"
        ],
        correctIndex: 0,
        explanation: "Suicide inhibition (mechanism-based inhibition) occurs when an inhibitor binds to an enzyme and forms an irreversible complex. Ritonavir (protease inhibitor, inhibits CYP3A4) and Benzbromarone (uricosuric, inhibits CYP2C9) act via suicide inhibition. Ethinyl estradiol and Spironolactone act via receptor-mediated mechanisms.",
        topicsCovered: [
            "Pharmacology",
            "General Pharmacology",
            "Enzyme Inhibition"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-10",
        question: "Which of the following diuretics is matched correctly with its location of action?\n1. Osmotic diuretics - PCT\n2. Thiazides - DCT\n3. Carbonic anhydrase inhibitors - PCT\n4. Potassium sparing diuretics - Collecting tubule",
        options: [
            "1, 2, 3",
            "3, 4",
            "2, 4",
            "1, 2"
        ],
        correctIndex: 1,
        explanation: "Carbonic anhydrase inhibitors (e.g., Acetazolamide) act on the Proximal Convoluted Tubule (PCT). Potassium-sparing diuretics (e.g., Spironolactone) act on the Collecting Tubule/Duct. Thiazides act on the Distal Convoluted Tubule (DCT). Osmotic diuretics act on the PCT and Loop of Henle. Based on the provided answer key and explanation context, the correct match set for this specific question structure points to C and D (3 and 4) being the focus of the correct statement selection.",
        topicsCovered: [
            "Pharmacology",
            "Renal Pharmacology",
            "Diuretics"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-11",
        question: "Which of the following drugs acts as an inhibitor of PCSK-9?",
        options: [
            "Bempedoic acid",
            "Lomitapide",
            "Ezetimibe",
            "Evolocumab"
        ],
        correctIndex: 3,
        explanation: "Evolocumab is a monoclonal antibody that inhibits PCSK-9 (proprotein convertase subtilisin/kexin type 9). This prevents the degradation of LDL receptors, increasing their recycling to the hepatocyte surface and enhancing LDL clearance.",
        topicsCovered: [
            "Pharmacology",
            "Cardiovascular System",
            "Hypolipidemic Drugs"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-12",
        question: "Inhaled nitric oxide (iNO) is used for?",
        options: [
            "Persistent pulmonary hypertension of newborn",
            "Unstable angina",
            "Obstructive sleep apnea",
            "Erectile dysfunction"
        ],
        correctIndex: 0,
        explanation: "Inhaled nitric oxide selectively dilates pulmonary vasculature and is FDA-approved for the treatment of persistent pulmonary hypertension of the newborn (PPHN). It reduces pulmonary vascular resistance without significantly affecting systemic blood pressure.",
        topicsCovered: [
            "Pharmacology",
            "Respiratory System",
            "Vasodilators"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-13",
        question: "A patient presents with complaints of a cough producing tenacious white sputum. Which of the following statements is true about the drug that could be prescribed for this condition?",
        options: [
            "Codeine as it is a potent drug and quickly relieves symptoms.",
            "Bromhexine and Dextromethorphan syrup as they liquify sputum and reduce cough due to antitussive effect",
            "Dextromethorphan alone as it does not have addictive potential like codeine",
            "Bromhexine as it liquifies sputum"
        ],
        correctIndex: 3,
        explanation: "Bromhexine is a mucolytic agent. It depolymerizes mucopolysaccharides, liquifying tenacious sputum and aiding in its expectoration. Antitussives like Codeine or Dextromethorphan suppress the cough reflex and are generally not recommended for productive coughs as they can lead to sputum retention.",
        topicsCovered: [
            "Pharmacology",
            "Respiratory System",
            "Mucolytics/Antitussives"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-14",
        question: "Which of the following antidiabetic drugs is known to cause unexplained diarrhea?",
        options: [
            "Sitagliptin",
            "Metformin",
            "Glimepiride",
            "Pioglitazone"
        ],
        correctIndex: 1,
        explanation: "Metformin, a biguanide, commonly causes gastrointestinal side effects, including nausea, abdominal discomfort, and diarrhea. It is a known cause of unexplained diarrhea in diabetic patients.",
        topicsCovered: [
            "Pharmacology",
            "Endocrinology",
            "Antidiabetic Drugs"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-15",
        question: "A young female weighing 46 kg is on digoxin with Vd = 6 L/kg and clearance = 4.6 L/h. Calculate the half-life of digoxin.",
        options: [
            "4h",
            "68h",
            "42h",
            "0.9h"
        ],
        correctIndex: 2,
        explanation: "t1/2 = (0.693 * Vd) / CL. \nVd = 6 L/kg * 46 kg = 276 L. \nCL = 4.6 L/h. \nt1/2 = (0.693 * 276) / 4.6 \u2248 41.58 hours, which rounds to 42h.",
        topicsCovered: [
            "Pharmacology",
            "General Pharmacology",
            "Pharmacokinetics"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-16",
        question: "Choose the correct option regarding phenytoin.",
        options: [
            "Acute oral overdose results primarily in cerebellar and vestibular symptoms and high doses have been associated with marked cerebellar atrophy",
            "High dose causes cardiotoxicity in old and nephrotoxicity in young patients",
            "These complications can be minimized by administering fosphenytoin at a rate of less than 250 mg of phenytoin sodium equivalents per minute",
            "Given in all patients with seizures regardless of cardiac arrhythmias, hypotension and/or CNS depression"
        ],
        correctIndex: 0,
        explanation: "Acute phenytoin toxicity manifests with cerebellar and vestibular symptoms like ataxia, nystagmus, and diplopia. Chronic high toxicity can lead to cerebellar atrophy. Fosphenytoin should be administered at <150 mg PE/min to minimize cardiotoxicity.",
        topicsCovered: [
            "Pharmacology",
            "CNS",
            "Antiepileptics"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-17",
        question: "True statement about Iron Isomaltoside 1000 is",
        options: [
            "Iron requirement can be fulfilled in single dose",
            "More immunogenic than iron dextran",
            "Given intravenously and gets deposited in adipose tissue therefore less toxic",
            "Cannot be given with erythropoietin"
        ],
        correctIndex: 0,
        explanation: "Iron Isomaltoside 1000 allows for a high dose of iron to be administered in a single infusion (total dose replacement), which is convenient for patients.",
        topicsCovered: [
            "Pharmacology",
            "Hematology",
            "Iron Therapy"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-18",
        question: "The drug that binds to CD4 and has action on both CCR5 and CXCR4 in tropic HIV infections is",
        options: [
            "Maraviroc",
            "Ibalizumab",
            "Elvitregravir",
            "Fosamprenavir"
        ],
        correctIndex: 1,
        explanation: "Ibalizumab is a monoclonal antibody that binds to domain 2 of the CD4 receptor, interfering with post-attachment steps required for viral entry. It is effective against both CCR5 and CXCR4 tropic HIV-1 viruses.",
        topicsCovered: [
            "Pharmacology",
            "Antivirals",
            "HIV"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-19",
        question: "Inhibitors of Poly ADP ribose polymerase (PARP) are approved for BRCA-positive breast cancers. Which among the following drugs is used?",
        options: [
            "Pablociclib",
            "Rucaparib",
            "Regorafenib",
            "Vandetinib"
        ],
        correctIndex: 1,
        explanation: "Rucaparib is a PARP inhibitor. PARP inhibitors are effective in BRCA-mutated cancers by exploiting synthetic lethality. Other PARP inhibitors include Olaparib and Talazoparib.",
        topicsCovered: [
            "Pharmacology",
            "Anticancer Drugs",
            "Targeted Therapy"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-20",
        question: "A 60-year-old patient who is a known case of hypertension and diabetes underwent PCI stent placement for NSTEMI last year. He is currently on aspirin, metoprolol and atorvastatin. He comes for a follow-up, and his lipid profile is as follows: Total cholesterol 252mg/dl, LDL 156mg/dl, triglyceride 158mg/dl and HDL 40 mg/dl. Which drugs can be added based on his lipid profile?\n1. Evolocumab\n2. Ezetimibe\n3. Gemfibrozil\n4. Bempedoic acid",
        options: [
            "1, 2 and 4",
            "Only 1 and 2",
            "1, 3 and 4",
            "Only 1 and 3"
        ],
        correctIndex: 0,
        explanation: "The patient has ASCVD and high LDL despite statin therapy. Drugs that lower LDL include Ezetimibe, PCSK9 inhibitors (Evolocumab), and Bempedoic acid. Gemfibrozil primarily lowers triglycerides and is not the first choice for LDL reduction in this context.",
        topicsCovered: [
            "Pharmacology",
            "Cardiovascular System",
            "Hypolipidemic Drugs"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-21",
        question: "Which of the following is a true statement regarding Pretomanid?",
        options: [
            "Given in XDR TB with Bedaquiline and Linezolid",
            "Contraindicated in patients on enzyme inducer drugs",
            "Acts by reactive oxygen species",
            "For resistant cases of malaria"
        ],
        correctIndex: 1,
        explanation: "Pretomanid is metabolized by CYP3A4. Co-administration with strong CYP3A4 inducers (like rifampicin) significantly reduces its levels, hence it is contraindicated or should be avoided with enzyme inducers. It acts via reactive nitrogen species (NO). It is used in the BPaL regimen (Bedaquiline, Pretomanid, Linezolid) for XDR or treatment-intolerant/non-responsive MDR TB.",
        topicsCovered: [
            "Pharmacology",
            "Antimicrobials",
            "Tuberculosis"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-22",
        question: "Which of the following drugs act on sodium channels and potentiate slow sodium inactivation?",
        options: [
            "Phenytoin",
            "Lamotrigine",
            "Lacosamide",
            "Topiramate"
        ],
        correctIndex: 2,
        explanation: "Lacosamide enhances the slow inactivation of voltage-gated sodium channels, distinguishing it from other sodium channel blockers like phenytoin and carbamazepine which affect fast inactivation.",
        topicsCovered: [
            "Pharmacology",
            "CNS",
            "Antiepileptics"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-23",
        question: "Which drug acts on the marked receptor? (Image shows GABA Transporter 1 / GAT-1)",
        options: [
            "Tiagabine",
            "Ganaxolone",
            "Felbamate",
            "Stiripentol"
        ],
        correctIndex: 0,
        explanation: "The receptor marked (responsible for GABA reuptake into the nerve terminal) is GAT-1. Tiagabine inhibits GAT-1, thereby increasing GABA levels in the synaptic cleft.",
        topicsCovered: [
            "Pharmacology",
            "CNS",
            "Antiepileptics"
        ],
        year: 2024,
        examSession: "INI-CET"
    },
    {
        id: "inicet-2024-24",
        question: "Match the treatment with its respective condition.\na. Naloxone -> ii. Opioid overdose\nb. Oxazepam -> iii. Delirium tremens\nc. Varenicline -> i. Smoking cessation\nd. Acamprosate -> iv. Treatment of alcoholism",
        options: [
            "a-i, b-ii, c-iii, d-iv",
            "a-ii, b-iii, c-i, d-iv",
            "a-iii, b-i, c-iv, d-ii",
            "a-iv, b-ii, c-iii, d-i"
        ],
        correctIndex: 1,
        explanation: "Naloxone is an opioid antagonist (Opioid overdose). Oxazepam is a benzodiazepine (Delirium tremens). Varenicline is a partial nicotinic agonist (Smoking cessation). Acamprosate modulates glutamate/GABA (Alcoholism treatment).",
        topicsCovered: [
            "Pharmacology",
            "Toxicology",
            "Substance Abuse"
        ],
        year: 2024,
        examSession: "INI-CET"
    }
];