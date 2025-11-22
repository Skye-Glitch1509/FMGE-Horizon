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
export const pathologyQuestions: FMGEMCQ[] = [
  // AIIMS 2017
  {
    id: "AIIMS-2017-PATH-1",
    question: "What is the function of Acetone free Methanol in Leishman stain?",
    options: [
      "Causes metabolic and enzymatic activity to stop",
      "Prevents the cells from sticking to the slide surface",
      "Colours the red cells",
      "Fixes cells to slide"
    ],
    correctIndex: 0,
    explanation: "Acetone free methanol is used in fixation (preservation of biological tissues from decay which acts by preventing metabolic and enzyme activity and not by fixing the cells to the slide). Acetone (lipid solvent) is not used as it causes shrinkage and destruction of cell membrane making identification of cells difficult.",
    topicsCovered: ["Pathology", "Staining", "Hematology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-2",
    question: "A 30-year-old woman presented with painful blisters on the skin and oral mucosa. Direct immunofluorescence shows a characteristic fish-net appearance. Which of the following is false regarding the same?",
    options: [
      "Antibodies against desmoglein 3",
      "Antibodies against desmoglein 1",
      "Suprabasal acantholytic blister is a characteristic feature",
      "Antibodies against hemidesmosomes"
    ],
    correctIndex: 3,
    explanation: "The image described (fish-net appearance on DIF) is diagnostic of Pemphigus Vulgaris. Antibodies against hemidesmosomes is the FALSE statement. Pemphigus vulgaris involves antibodies against desmosomal adhesion proteins (desmogleins 1 and 3). Antibodies against hemidesmosomes are seen in Bullous Pemphigoid.",
    topicsCovered: ["Pathology", "Dermatopathology", "Immunofluorescence"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-3",
    question: "The stain done on a section of liver shown below demonstrates reticular fibers. What is the stain?",
    options: [
      "Warthin starry stain",
      "Steiner silver stain",
      "Sweet's reticulin stain",
      "Grimelius silver stain"
    ],
    correctIndex: 2,
    explanation: "The stain demonstrates reticular fibers of the liver and is Sweet's reticulin stain. Reticulin fibers are Type 3 collagen. This stain is used to show the normal architecture of the liver and help detect disrupted architecture in conditions like hepatocellular carcinoma.",
    topicsCovered: ["Pathology", "Staining", "Liver"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-4",
    question: "ALK positivity is seen in which of the following neoplasms?",
    options: [
      "Fibromatosis",
      "Synovial sarcoma",
      "Ewing sarcoma",
      "Inflammatory myofibroblastic tumour"
    ],
    correctIndex: 3,
    explanation: "ALK (anaplastic lymphoma kinase) positivity (translocation) is seen in Inflammatory myofibroblastic tumor of the lung. ALK positivity is also seen in Adenocarcinoma of the lung and Neuroblastoma.",
    topicsCovered: ["Pathology", "Neoplasia", "Lung Tumors"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-5",
    question: "Which of the following is true regarding the internal iron homeostasis in iron-deficiency anaemia?",
    options: [
      "Ferritin mRNA concentration iron-responsive element increases and ferritin synthesis decreases",
      "Transferrin receptor 1 iron-responsive elements increases transferrin receptor mRNA concentration and synthesis",
      "Transferrin receptor 1 iron responsive elements decreases transferrin receptor mRNA concentration and synthesis",
      "Ferritin mRNA concentration iron responsive element decreases and ferritin synthesis increases"
    ],
    correctIndex: 1,
    explanation: "In iron deficiency anaemia, there is an increase in transferrin receptor mRNA concentration and synthesis. The body tries to capture more iron by increasing receptors. Simultaneously, ferritin synthesis (storage) decreases.",
    topicsCovered: ["Pathology", "Hematology", "Iron Metabolism"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-6",
    question: "A 14-year-old patient presents with bilateral proptosis. The biopsy shows hypocellular and hypercellular areas with nuclear palisading (Verocay bodies). What is the likely diagnosis?",
    options: [
      "Leiomyoma",
      "Schwannoma",
      "Rhabdomyosarcoma",
      "Fibromatosis"
    ],
    correctIndex: 1,
    explanation: "The description is characteristic of Schwannoma. It shows hypocellular (Antoni B) and hypercellular areas (Antoni A). Antoni A area has nuclei aligned in palisading rows; the nuclear-free zones between them are Verocay bodies.",
    topicsCovered: ["Pathology", "Neuropathology", "Soft Tissue Tumors"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-7",
    question: "Endoscopic and barium swallow images of a lesion in the oesophagus show an exophytic growth and apple core appearance. Histopathology shows nests of stratified malignant cells and keratin pearls. What is the diagnosis?",
    options: [
      "Esophagitis",
      "Squamous cell carcinoma",
      "Adenocarcinoma",
      "Barrett's esophagus"
    ],
    correctIndex: 1,
    explanation: "Apple core appearance and exophytic growth in the middle 1/3 of the esophagus suggests Squamous Cell Carcinoma. The characteristic histopathological finding is nests of stratified malignant cells and keratin pearls.",
    topicsCovered: ["Pathology", "GI Pathology", "Esophagus"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-8",
    question: "A patient has a HbA2 of 3% and HbF of 97%. A peripheral blood smear is taken. Which of the following blood pictures will be seen in this patient?",
    options: [
      "1, 2 and 3",
      "1 and 2",
      "2 and 3",
      "1 and 3"
    ],
    correctIndex: 3,
    explanation: "The Hb profile (HbF 97%) indicates Thalassemia Major. Hematological findings include Poikilocytes (Image 1) and Target cells (Image 3). Howell-Jolly bodies (Image 2) are typically seen post-splenectomy, which is not specified here.",
    topicsCovered: ["Pathology", "Hematology", "Anemia"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-9",
    question: "In breast cancer, FISH for gene amplification will be done based on which of the following IHC staining for Her-2/neu?",
    options: [
      "1+",
      "2+",
      "3+",
      "Gene Amplification is done irrespective of Her 2 Neu status"
    ],
    correctIndex: 1,
    explanation: "IHC score of 2+ is considered Equivocal. In these cases, FISH is performed to differentiate whether the tumor cells are positive or negative for Her-2/neu expression. 1+ is negative, 3+ is positive.",
    topicsCovered: ["Pathology", "Breast Pathology", "Oncology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-10",
    question: "A 30-year-old male patient presents with severe dyspnoea. Mitral stenosis with left atrial hypertrophy is seen. Vegetations present on the mitral valve were excised. Histopathology shows Anitschkow cells and caterpillar cells. What is the most likely diagnosis?",
    options: [
      "Rheumatic valvular disease",
      "Infective endocarditis",
      "Myxoma",
      "Sarcoidosis"
    ],
    correctIndex: 0,
    explanation: "The description (Anitschkow cells, caterpillar cells, Aschoff bodies) is diagnostic of Rheumatic Heart Disease (Rheumatic valvular disease).",
    topicsCovered: ["Pathology", "Cardiovascular Pathology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-11",
    question: "A child presents with bilateral proptosis. Which investigation will help you in arriving at a diagnosis of chloroma?",
    options: [
      "Peripheral smear",
      "Platelets",
      "Hb concentration",
      "Leucocytic count"
    ],
    correctIndex: 0,
    explanation: "Chloroma (Granulocytic Sarcoma) is an extramedullary manifestation of Acute Myeloid Leukemia (AML). Among the options, a peripheral smear would be the most helpful initial investigation to look for blasts. The definitive investigation is Flow Cytometry.",
    topicsCovered: ["Pathology", "Hematology", "Leukemia"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-12",
    question: "All are reduced in Iron Deficiency Anaemia except:",
    options: [
      "Ferritin",
      "TIBC",
      "Iron",
      "Transferrin saturation"
    ],
    correctIndex: 1,
    explanation: "In Iron Deficiency Anaemia, Total Iron Binding Capacity (TIBC) increases to compensate for the deficiency. Serum Iron, Ferritin, and Transferrin saturation are decreased.",
    topicsCovered: ["Pathology", "Hematology", "Anemia"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-13",
    question: "A 35-year-old depressed man came with complaints of sudden onset breathlessness. Histopathology of the lung shows a granuloma with refractile granules/foreign body giant cells. What is the appropriate cause?",
    options: [
      "Necrotizing TB granuloma",
      "Vegetative matter aspiration pneumonia",
      "Sarcoid granuloma",
      "Severe fungal pneumonia"
    ],
    correctIndex: 1,
    explanation: "The presence of a granuloma with refractile granules/foreign body giant cells is indicative of aspiration pneumonia due to vegetative matter (like food particles).",
    topicsCovered: ["Pathology", "Lung Pathology", "Infectious Disease"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-14",
    question: "Which of the following can be used to store blood for up to 35 days?",
    options: [
      "Acid Citrate dextrose",
      "Citrate phosphate dextrose",
      "Citrate phosphate 2 dextrose",
      "Citrate phosphate dextrose adenine - 1"
    ],
    correctIndex: 3,
    explanation: "Citrate Phosphate Dextrose Adenine-1 (CDPA-1) extends the shelf life of blood up to 35 days by improving ATP synthesis. Acid Citrate Dextrose (ACD) and CPD allow storage for 21 days.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-15",
    question: "Identify the correct sequence for blood collection:",
    options: [
      "Bedside blood collection, label the samples, fill the laboratory requisition forms, Identify the patient",
      "Fill the laboratory requisition forms, Identify the Patient, Bedside blood collection, label the samples",
      "Label the sample tubes, Bedside blood collection, fill the laboratory requisition forms, Identify the patient",
      "Identify the Patient, Fill the laboratory requisition forms, Bedside blood collection, label the samples"
    ],
    correctIndex: 1,
    explanation: "The standard WHO guideline sequence is: Request forms (filled) -> Identify Patient -> Collection -> Labelling.",
    topicsCovered: ["Pathology", "Lab Medicine"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-16",
    question: "Which anticoagulant is used for electrolyte estimation?",
    options: [
      "EDTA",
      "Citrate",
      "Sodium Fluoride",
      "Lithium Heparin"
    ],
    correctIndex: 3,
    explanation: "Lithium Heparin is used for electrolyte estimation as it causes the least interference. EDTA interferes with Calcium. Sodium Fluoride is for glucose. Citrate is for coagulation studies.",
    topicsCovered: ["Pathology", "Lab Medicine"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-17",
    question: "When you add calcium and thromboplastin to platelet poor plasma which pathway is assessed?",
    options: [
      "Extrinsic",
      "Intrinsic",
      "Fibrinolysis",
      "Common"
    ],
    correctIndex: 0,
    explanation: "Adding Thromboplastin (Tissue Factor/Factor III) and Calcium assesses the Extrinsic Pathway. This is the principle of Prothrombin Time (PT).",
    topicsCovered: ["Pathology", "Hematology", "Coagulation"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-18",
    question: "Origin of B cell in CLL/SLL is:",
    options: [
      "Centrocytes",
      "Extranodal mature Peripheral B cells",
      "Naive B cells in Interfollicular zones",
      "Bone Marrow Progenitors"
    ],
    correctIndex: 2,
    explanation: "In CLL/SLL, B cells originate from Naive B cells (Pre/Post Germinal Center memory B cells) typically found in interfollicular zones.",
    topicsCovered: ["Pathology", "Hematology", "Lymphoma"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-19",
    question: "A young boy from high altitude came with fever and weakness. Hb 17 g%, TLC 21,000. Next step in the investigation should be:",
    options: [
      "Philadelphia chromosome",
      "JAK mutation",
      "Erythropoietin levels",
      "Bone Marrow biopsy with reticulin stain"
    ],
    correctIndex: 2,
    explanation: "The patient has polycythemia (High Hb). To distinguish between Primary (Polycythemia Vera) and Secondary (e.g., High Altitude) polycythemia, Erythropoietin (EPO) levels should be checked. Primary has low EPO, Secondary has high EPO.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-20",
    question: "A 40-year-old man presents with facial puffiness and frothy urine. Histology shows diffuse thickening of the glomerular capillary wall with spikes on silver stain. Diagnosis?",
    options: [
      "Membranous nephropathy",
      "Focal segmental glomerulosclerosis",
      "Membranoproliferative nephritis",
      "Dense deposit disease"
    ],
    correctIndex: 0,
    explanation: "Diffuse thickening of capillary walls with 'spikes' on silver stain is characteristic of Membranous Nephropathy.",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-21",
    question: "A 50-year-old man with blurred vision and proteinuria. Fundus shows hemorrhages. Kidney biopsy shows Kimmelstiel-Wilson nodules. Diagnosis?",
    options: [
      "Renal amyloidosis",
      "Focal segmental glomerulosclerosis",
      "Kimmelstiel-Wilson disease",
      "Lupus nephritis"
    ],
    correctIndex: 2,
    explanation: "The presence of acellular PAS-positive nodules (Kimmelstiel-Wilson nodules) is diagnostic of Diabetic Nephropathy (Kimmelstiel-Wilson disease).",
    topicsCovered: ["Pathology", "Renal Pathology", "Diabetes"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-22",
    question: "If the RB gene is hypophosphorylated, which of the following will happen?",
    options: [
      "Cell cycle will stop at G2",
      "Cell cycle will stop at G1",
      "There will be no effect on cell cycle",
      "The cell cycle progresses and cell divides"
    ],
    correctIndex: 1,
    explanation: "Hypophosphorylated RB binds to E2F and inhibits transcription, thus arresting the cell cycle at the G1 phase (specifically the G1/S checkpoint). Phosphorylation releases E2F and allows the cycle to proceed.",
    topicsCovered: ["Pathology", "Cell Biology", "Neoplasia"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-23",
    question: "A 35-year-old patient presented with heartburn. Biopsy shows intestinal metaplasia with goblet cells in the esophagus. Diagnosis?",
    options: [
      "Esophagitis",
      "Squamous cell carcinoma",
      "Adenocarcinoma",
      "Barrett's esophagus"
    ],
    correctIndex: 3,
    explanation: "The presence of intestinal metaplasia (goblet cells) in the esophageal mucosa is the definition of Barrett's Esophagus, a complication of GERD.",
    topicsCovered: ["Pathology", "GI Pathology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-24",
    question: "A 60-year-old male with intractable diarrhea. Histology shows plasma cells with Russell bodies. Diagnosis?",
    options: [
      "Lymphoma",
      "Leishmaniasis",
      "Urate nephropathy",
      "Multiple myeloma"
    ],
    correctIndex: 3,
    explanation: "Russell bodies are large eosinophilic immunoglobulin inclusions in plasma cells. This finding, in the context of a plasma cell disorder, points towards Multiple Myeloma.",
    topicsCovered: ["Pathology", "Hematology", "Neoplasia"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-25",
    question: "A 10-year-old boy with fever, weight loss, and lymphadenopathy. Bone marrow shows lymphoblasts with condensed chromatin and small nucleoli. Diagnosis?",
    options: [
      "Acute monocytic leukemia",
      "Acute myelomonocytic leukemia",
      "Acute lymphoblastic leukemia",
      "Juvenile myelomonocytic leukemia"
    ],
    correctIndex: 2,
    explanation: "The description of lymphoblasts (condensed nuclear chromatin, small nucleoli, scanty cytoplasm) in a child is characteristic of Acute Lymphoblastic Leukemia (ALL).",
    topicsCovered: ["Pathology", "Hematology", "Leukemia"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-26",
    question: "A 32 year old female with history of back ache and polyarthralgia was found to have nucleolar pattern in IF. Which of the following is the best fit in her case?",
    options: [
      "Raynaud phenomenon and sclerodactyly",
      "Genital and oral painful ulcers",
      "Glomerulonephritis and heart failure",
      "Joint pains with nodules on skin"
    ],
    correctIndex: 0,
    explanation: "A nucleolar pattern on Immunofluorescence suggests antibodies to RNA (e.g., anti-Scl-70), which is seen in Systemic Sclerosis (Scleroderma). Raynaud phenomenon and sclerodactyly are classic features of Systemic Sclerosis (CREST syndrome).",
    topicsCovered: ["Pathology", "Immunology", "Autoimmune Diseases"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-27",
    question: "A young male with cervical lymphadenopathy. Biopsy shows RS cells (L&H variant) with vague nodules. Cells are CD20+, LCA+, EMA+ but CD15- and CD30-. Diagnosis?",
    options: [
      "Nodular Sclerosis - Hodgkin Lymphoma",
      "CLL",
      "T cell rich B cell lymphoma",
      "Nodular Lymphocyte predominant Hodgkin Lymphoma (NLPHL)"
    ],
    correctIndex: 3,
    explanation: "The immunophenotype (CD20+, CD45/LCA+, CD15-, CD30-) and the presence of 'Popcorn' cells (L&H variant of RS cells) are diagnostic of Nodular Lymphocyte Predominant Hodgkin Lymphoma (NLPHL). Classic HL is usually CD15+, CD30+, CD20-.",
    topicsCovered: ["Pathology", "Hematology", "Lymphoma"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-28",
    question: "Which of the following is a tool used in gene editing?",
    options: [
      "CRISPR",
      "Big data",
      "Gene Xpert",
      "GWAS"
    ],
    correctIndex: 0,
    explanation: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a genome editing tool.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-29",
    question: "A 37-year-old with enlarged tonsils and lymphocytosis. Monospot negative. Tonsillectomy shows large cells CD20+, EBV LMP1+, MUM1+, CD79a+. What is the diagnosis?",
    options: [
      "Hodgkin lymphoma",
      "EBV positive – DLBCL, NOS",
      "Infectious mononucleosis",
      "EBV positive mucocutaneous ulcer"
    ],
    correctIndex: 1,
    explanation: "The profile fits EBV positive Diffuse Large B Cell Lymphoma (DLBCL), NOS. It is common in older/immunocompromised but can occur in younger patients. The markers (CD20+, EBV+, MUM1+) distinguish it from Hodgkin (CD20- usually) and Mononucleosis (reactive).",
    topicsCovered: ["Pathology", "Hematology", "Lymphoma"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-30",
    question: "Painless genital ulcer scraping shows gram-negative coccobacillus surrounded by neutrophils (safety pin appearance/Donovan bodies). Diagnosis?",
    options: [
      "Chlamydia trachomatis",
      "Hemophilus ducreyi",
      "Klebsiella granulomatis",
      "Neisseria gonorrhoea"
    ],
    correctIndex: 2,
    explanation: "Gram-negative coccobacilli with a 'safety pin' appearance inside macrophages (Donovan bodies) are characteristic of Granuloma Inguinale caused by Klebsiella granulomatis.",
    topicsCovered: ["Pathology", "Microbiology", "STD"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-31",
    question: "When papain acts on a molecule of immunoglobulin, which of the following are the end products?",
    options: [
      "2 FC and 1 FAB fragments",
      "1 Variable chain and 1 constant chain",
      "1 Fc and 2 Fab fragments",
      "2 Fc and 2Fab fragments"
    ],
    correctIndex: 2,
    explanation: "Papain digestion cleaves the antibody above the disulfide bond, yielding 2 separate Fab fragments and 1 Fc fragment. (Pepsin yields 1 F(ab')2 and fragmented Fc).",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-32",
    question: "Which of the following Immunohistochemistry marker is used in Cyclin D1 negative Mantle cell lymphoma?",
    options: [
      "SOX11",
      "ITRA 1",
      "MYD88",
      "Annexin V"
    ],
    correctIndex: 0,
    explanation: "SOX11 is a transcription factor used as a marker for Mantle Cell Lymphoma, especially useful in cases that are Cyclin D1 negative.",
    topicsCovered: ["Pathology", "Hematology", "Lymphoma"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-33",
    question: "During development, thymic cells recognizing self-antigens are removed (Central Tolerance). Which gene is involved?",
    options: [
      "NOTCH1",
      "RB gene",
      "CPK gene",
      "AIRE"
    ],
    correctIndex: 3,
    explanation: "The AIRE (AutoImmune REgulator) gene is responsible for expressing self-antigens in the thymus to facilitate the negative selection of self-reactive T-cells (Central Tolerance).",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2017-PATH-34",
    question: "Among the following, which cells have MHC class II?",
    options: [
      "NK cells",
      "All nucleated cells",
      "B cells, dendritic cells, mononuclear phagocytes",
      "Platelets"
    ],
    correctIndex: 2,
    explanation: "MHC Class II molecules are found on Antigen Presenting Cells (APCs), which include B cells, Dendritic cells, and Macrophages (Mononuclear phagocytes). MHC I is found on all nucleated cells.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2017,
    examSession: "AIIMS"
  },
  // AIIMS 2018
  {
    id: "AIIMS-2018-PATH-1",
    question: "Choose the correct option regarding the storage temperatures of blood components.",
    options: [
      "RBC 20-22°C, Platelet 2-6°C, FFP -30°C",
      "RBC 2-6°C, Platelet 20-22°C, FFP -30°C",
      "RBC -30°C, FFP 2-6 °C, Platelet 20-22°C",
      "RBC 20-22°C, FFP below -30°C, Platelet 2-6 °C"
    ],
    correctIndex: 1,
    explanation: "Correct storage temperatures: RBCs at 2-6°C, Platelets at 20-22°C (room temp with agitation), and FFP at -30°C or lower.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-2",
    question: "Acid mucin is stained by:",
    options: [
      "PAS",
      "Alcian blue",
      "Masson trichrome",
      "PTAH"
    ],
    correctIndex: 1,
    explanation: "Alcian blue stains acid mucins. PAS stains neutral mucins and glycogen.",
    topicsCovered: ["Pathology", "Staining"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-3",
    question: "Toluidine blue staining is used in the Identification of which of the following cells?",
    options: [
      "Lymphocyte",
      "Fibroblast",
      "Macrophage",
      "Mast Cell"
    ],
    correctIndex: 3,
    explanation: "Toluidine blue is a metachromatic stain used to identify Mast cells (stains granules violet/purple).",
    topicsCovered: ["Pathology", "Staining"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-4",
    question: "t(11,22) is best diagnosed by:",
    options: [
      "Conventional karyotyping",
      "FISH",
      "Bone marrow aspiration",
      "Next generation sequencing"
    ],
    correctIndex: 1,
    explanation: "t(11;22) is characteristic of Ewing's Sarcoma. Fluorescence In Situ Hybridization (FISH) is the standard and best method to detect specific translocations.",
    topicsCovered: ["Pathology", "Genetics", "Neoplasia"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-5",
    question: "Gamma delta T cell(γδ TCRs) receptors recognizes:",
    options: [
      "Lipids without MHC proteins",
      "Peptides with MHC proteins",
      "CD20",
      "CD3"
    ],
    correctIndex: 0,
    explanation: "Gamma-delta T cells can recognize lipid antigens and small molecules directly, often without the requirement of MHC presentation (MHC-independent).",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-6",
    question: "Cancer that least commonly spreads by lymphatic route is:",
    options: [
      "Squamous cell carcinoma",
      "Merkel Cell Carcinoma",
      "Basal Cell Carcinoma",
      "Malignant melanoma"
    ],
    correctIndex: 2,
    explanation: "Basal Cell Carcinoma (BCC) is locally invasive but rarely metastasizes via lymphatics or blood.",
    topicsCovered: ["Pathology", "Neoplasia", "Dermatopathology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-7",
    question: "What is correct regarding transfusion of the blood received from blood bank?",
    options: [
      "It should be started within 4 hours of receiving it from the blood bank.",
      "It should be completed within 4 hours of receiving from the blood bank.",
      "No such time restraint and can be done anytime.",
      "It should be completed within 6 hours of receiving from the blood bank."
    ],
    correctIndex: 1,
    explanation: "Blood transfusion should be completed within 4 hours to prevent bacterial overgrowth as the unit warms to room temperature.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-8",
    question: "A patient working in a factory presented with lung fibrosis and thickening of pleura. Biopsy showed golden brown beaded rods. Diagnosis?",
    options: [
      "Asbestosis",
      "Silicosis",
      "Tuberculosis",
      "Mesothelioma"
    ],
    correctIndex: 0,
    explanation: "The description of 'golden brown beaded rods' refers to Asbestos bodies (Ferruginous bodies). This, combined with factory work, fibrosis, and pleural thickening, indicates Asbestosis.",
    topicsCovered: ["Pathology", "Lung Pathology", "Environmental"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-9",
    question: "All leukemias come under provisional entity in WHO 2016 classification of hematolymphoid tumours except:",
    options: [
      "Natual Killer cell lymphoblastic leukemia/lymphoma",
      "B-lymphoblastic leukemia/lymphoma with hypodiploidy",
      "Acute myeloid leukemia with RUNX1 mutation",
      "Splenic B-cell lymphoma/leukemia"
    ],
    correctIndex: 1,
    explanation: "B-lymphoblastic leukemia/lymphoma is a well-defined entity, not provisional. The others listed were considered provisional entities in the 2016 classification.",
    topicsCovered: ["Pathology", "Hematology", "Classification"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-10",
    question: "A 65-year-old HIV-positive man presented with fever and breathlessness. Lung biopsy showed cells with Owl's eye intranuclear inclusions. What is the diagnosis?",
    options: [
      "Small-cell lung cancer",
      "CMV-associated organizing pneumonia",
      "Cryptococcal pneumonia",
      "Tuberculosis"
    ],
    correctIndex: 1,
    explanation: "Cytomegalovirus (CMV) infection typically presents with enlarged cells containing large intranuclear inclusions surrounded by a halo ('Owl's eye' appearance).",
    topicsCovered: ["Pathology", "Infectious Disease", "Lung Pathology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-11",
    question: "Which of the following is a true statement about apoptosis?",
    options: [
      "There is enzymatic digestion of cellular contents",
      "It is associated with adjacent inflammation",
      "Karyolysis is present",
      "Plasma membrane remains intact"
    ],
    correctIndex: 3,
    explanation: "In apoptosis, the plasma membrane remains intact (though altered), and cellular contents are packaged into apoptotic bodies. It does NOT elicit inflammation, unlike necrosis.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-12",
    question: "Which of the following is the color of vacutainer containing sodium fluoride as a content?",
    options: [
      "Red",
      "Grey",
      "Blue",
      "Yellow"
    ],
    correctIndex: 1,
    explanation: "Grey top tubes contain Sodium Fluoride (glycolysis inhibitor) and Potassium Oxalate. Used for glucose estimation.",
    topicsCovered: ["Pathology", "Lab Medicine"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-13",
    question: "An image shows a cell engulfing another intact cell (like a neutrophil inside a megakaryocyte). What does this show?",
    options: [
      "Autophagy",
      "Emperipolesis",
      "Phagocytosis",
      "Amoebic autophagy"
    ],
    correctIndex: 1,
    explanation: "Emperipolesis is the presence of an intact cell within the cytoplasm of another cell (e.g., neutrophils inside megakaryocytes). The engulfed cell is viable, unlike in phagocytosis.",
    topicsCovered: ["Pathology", "Cell Biology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-14",
    question: "A patient presents with abdominal distension and intermittent fever. Histopathology of a resected lymph node shows follicular hyperplasia with 'lollipop' appearance and vascular hyalinization. Diagnosis?",
    options: [
      "Angiolymphoma",
      "Hodgkin's lymphoma",
      "IgG4-related disease",
      "Castleman disease"
    ],
    correctIndex: 3,
    explanation: "The 'lollipop' appearance (atrophic germinal centers with penetrating vessels) and onion-skinning are characteristic of Castleman Disease (Hyaline-vascular type).",
    topicsCovered: ["Pathology", "Hematology", "Lymph Node"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-15",
    question: "Which of the following is not usually involved in the immunohistochemistry of acute lymphoblastic leukemia?",
    options: [
      "Tdt",
      "CD1a",
      "CD3",
      "Cytokeratin"
    ],
    correctIndex: 3,
    explanation: "Cytokeratin is a marker for epithelial cells/carcinomas. Tdt, CD1a, and CD3 are markers for lymphoid cells/ALL.",
    topicsCovered: ["Pathology", "Hematology", "Leukemia"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-16",
    question: "Antibody-dependent cellular cytotoxicity (ADCC) is seen with:",
    options: [
      "Natural killer (NK) cells only",
      "Macrophages only",
      "NK cells, neutrophils and eosinophils",
      "Neutrophils and eosinophils only"
    ],
    correctIndex: 2,
    explanation: "ADCC is mediated by cells possessing Fc receptors, including NK cells (major), Macrophages, Neutrophils, and Eosinophils (against parasites).",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-17",
    question: "A middle-aged male patient has proteinuria. Immunofluorescence shows 'Full House' pattern (positive for IgG, IgA, IgM, C3, C1q). Diagnosis?",
    options: [
      "Focal segmental glomerulosclerosis (FSGS)",
      "Post-streptococcal glomerulonephritis (PSGN)",
      "Good pasture syndrome",
      "Lupus nephritis"
    ],
    correctIndex: 3,
    explanation: "The 'Full House' immunofluorescence pattern (positive for all immunoglobulins and complements) is pathognomonic for Lupus Nephritis.",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-18",
    question: "Which of the following is involved in recognition and clearance of necrotic cells?",
    options: [
      "Inflammasome",
      "Toll-like receptors (TLRs)",
      "P selectin",
      "Manoreceptor"
    ],
    correctIndex: 0,
    explanation: "Inflammasomes recognize products of dead cells (DAMPs) and triggers inflammation/pyroptosis to clear them.",
    topicsCovered: ["Pathology", "Inflammation"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-19",
    question: "A patient has been brought with severe bleeding to your ER. His blood group is unknown. Fresh frozen plasma from which of the following blood groups can be given?",
    options: [
      "O",
      "AB",
      "B",
      "A"
    ],
    correctIndex: 1,
    explanation: "Group AB plasma contains no anti-A or anti-B antibodies, making it the universal donor for Plasma. (Group O is the universal donor for RBCs).",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-20",
    question: "Which of the following is not a proto-oncogene implicated in carcinoma of thyroid?",
    options: [
      "RAS",
      "RET",
      "BRAF",
      "p53"
    ],
    correctIndex: 3,
    explanation: "p53 is a Tumor Suppressor Gene, not a proto-oncogene. RAS, RET, and BRAF are proto-oncogenes activated in thyroid cancers.",
    topicsCovered: ["Pathology", "Neoplasia", "Thyroid"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-21",
    question: "NARP syndrome is a?",
    options: [
      "Lysosomal storage disorder",
      "Mitochondrial function disorder",
      "Glycogen storage disorder",
      "Golgi body transport disorder"
    ],
    correctIndex: 1,
    explanation: "NARP (Neuropathy, Ataxia, and Retinitis Pigmentosa) is a mitochondrial DNA disorder associated with the ATPase-6 gene.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-22",
    question: "Which amongst the following is true about Turner's syndrome?",
    options: [
      "Webbing of hands and toes are associated with risk of visceral anomalies",
      "Noonan syndrome is more associated with cardiac defects",
      "Absence of neck webbing is associated with higher risk of co-arctation of aorta",
      "Webbing of neck is associated with higher risk of cardiac anomalies"
    ],
    correctIndex: 3,
    explanation: "In Turner syndrome (45,XO), cystic hygroma leads to webbing of the neck, which is strongly associated with coarctation of the aorta and other cardiac anomalies.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  // AIIMS 2019
  {
    id: "AIIMS-2019-PATH-1",
    question: "A young boy from high altitude came with fever and weakness. Hb 17 g%. Next step in the investigation should be:",
    options: [
      "Philadelphia chromosome",
      "JAK mutation",
      "Erythropoietin levels",
      "Bone Marrow biopsy with reticulin stain"
    ],
    correctIndex: 2,
    explanation: "Investigation for Polycythemia involves checking Erythropoietin (EPO) levels first to distinguish between primary (low EPO) and secondary (high EPO, e.g., altitude) causes.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-2",
    question: "A 36-year-old male with skin-colored umbilicated papules. Microscopy shows large eosinophilic intracytoplasmic inclusions (Henderson-Patterson bodies). Diagnosis?",
    options: [
      "Herpes virus",
      "Verruca vulgaris",
      "Molluscum contagiosum",
      "Lichen planus"
    ],
    correctIndex: 2,
    explanation: "Umbilicated papules and Henderson-Patterson bodies (large viral inclusions) are diagnostic of Molluscum Contagiosum (Poxvirus).",
    topicsCovered: ["Pathology", "Dermatopathology", "Infectious Disease"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-3",
    question: "Which of the following is not an intermediate filament?",
    options: [
      "Vimentin",
      "Tubulin",
      "Desmin",
      "Neurofilament"
    ],
    correctIndex: 1,
    explanation: "Tubulin is a component of Microtubules, not Intermediate Filaments. Vimentin, Desmin, and Neurofilaments are types of intermediate filaments.",
    topicsCovered: ["Pathology", "Cell Biology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-4",
    question: "A 20-year-old male patient is diagnosed with acute myeloid leukemia. The peripheral blood smear shows multiple Auer rods bundled in a cell ('Faggot cell'). This is best described as:",
    options: [
      "Auer rod",
      "Flaming promyelocyte",
      "Faggot cell",
      "Dusky promyelocyte"
    ],
    correctIndex: 2,
    explanation: "Cells containing bundles of Auer rods are called Faggot cells. They are characteristic of Acute Promyelocytic Leukemia (APL/AML M3).",
    topicsCovered: ["Pathology", "Hematology", "Leukemia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-5",
    question: "Which test evaluates the extrinsic pathway?",
    options: [
      "APTT",
      "PT",
      "TT",
      "Bleeding time"
    ],
    correctIndex: 1,
    explanation: "Prothrombin Time (PT) evaluates the Extrinsic pathway (Factor VII). APTT evaluates the Intrinsic pathway.",
    topicsCovered: ["Pathology", "Hematology", "Coagulation"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-6",
    question: "A 58-year-old man died after chest pain. Autopsy showed atheromatous plaque in the coronary artery. Which type of calcification is seen?",
    options: [
      "Dystrophic with increased serum calcium",
      "Metastatic with increased serum calcium",
      "Dystrophic with normal serum calcium",
      "Metastatic with normal serum calcium"
    ],
    correctIndex: 2,
    explanation: "Calcification in damaged tissue (atheroma) with normal serum calcium levels is Dystrophic Calcification.",
    topicsCovered: ["Pathology", "Cell Injury", "Calcification"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-7",
    question: "Hepcidin inhibits iron transfer from the enterocyte to the plasma by binding to:",
    options: [
      "Ferroportin",
      "Transferrin",
      "Divalent metal transporter 1 (DMT1)",
      "Ferritin"
    ],
    correctIndex: 0,
    explanation: "Hepcidin binds to Ferroportin (the iron exporter) and causes its degradation, thereby preventing iron release into the blood.",
    topicsCovered: ["Pathology", "Hematology", "Iron Metabolism"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-8",
    question: "A CKD patient receiving blood transfusion developed shortness of breath, hypertension (BP 180/120), and tachycardia during the second bag. What is the cause?",
    options: [
      "Allergic",
      "Transfusion related circulatory overload",
      "Transfusion-related acute lung injury",
      "Febrile non-hemolytic transfusion reaction"
    ],
    correctIndex: 1,
    explanation: "The symptoms of hypertension and volume overload signs (dyspnea) during transfusion in a compromised patient (CKD) suggest Transfusion Associated Circulatory Overload (TACO). TRALI usually presents with hypotension.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-9",
    question: "A patient with thalassemia receives recurrent transfusions and develops fever/chills without hemolysis. How can this be prevented?",
    options: [
      "Leukoreduced RBCs",
      "Antibiotics",
      "Irradiation",
      "Washed RBCs"
    ],
    correctIndex: 0,
    explanation: "Febrile Non-Hemolytic Transfusion Reaction (FNHTR) is caused by cytokines released by WBCs in the stored blood or antibodies against donor WBCs. It is prevented by using Leukoreduced blood components.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-10",
    question: "If DNA is damaged in the cell cycle, which gene causes cell cycle arrest?",
    options: [
      "Rb",
      "MYC",
      "p53",
      "K-RAS"
    ],
    correctIndex: 2,
    explanation: "p53 is the 'Guardian of the Genome'. In response to DNA damage, it halts the cell cycle (via p21) to allow repair or induce apoptosis.",
    topicsCovered: ["Pathology", "Neoplasia", "Cell Cycle"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-11",
    question: "Which of the following is not a hemostatic agent?",
    options: [
      "Zeolite",
      "Chitosan",
      "Boric acid",
      "Kaolin"
    ],
    correctIndex: 2,
    explanation: "Zeolite, Chitosan, and Kaolin are used in hemostatic dressings/agents to stop bleeding. Boric acid is an antiseptic/insecticide.",
    topicsCovered: ["Pathology", "General Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-12",
    question: "Acute inflammatory response is not seen in:",
    options: [
      "Pyroptosis",
      "Necroptosis",
      "Apoptosis",
      "Necrosis"
    ],
    correctIndex: 2,
    explanation: "Apoptosis is a non-inflammatory form of cell death. The cell membrane remains intact (apoptotic bodies) and cells are cleared by phagocytes without releasing contents that trigger inflammation. Necrosis, Pyroptosis, and Necroptosis are inflammatory.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-13",
    question: "An affected male does not have affected children but an affected female always has affected children. Type of inheritance?",
    options: [
      "X linked recessive",
      "Autosomal recessive",
      "X linked dominant",
      "Mitochondrial"
    ],
    correctIndex: 3,
    explanation: "Maternal inheritance (Mitochondrial) is passed only from mothers to all children. Fathers do not pass it on.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-14",
    question: "Which of the following is the most common cause of liver failure?",
    options: [
      "Alcohol",
      "Paracetamol",
      "CCl4",
      "Pesticides"
    ],
    correctIndex: 1,
    explanation: "Paracetamol (Acetaminophen) overdose is the most common cause of acute liver failure in the Western world (and commonly cited in exams).",
    topicsCovered: ["Pathology", "Hepatology", "Toxicology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-15",
    question: "Which is the most important light microscopic feature of irreversible cell injury?",
    options: [
      "Amorphous densities in mitochondria",
      "Cell membrane blebs and loss of microvilli",
      "Ribosomal detachment from endoplasmic reticulum",
      "Nuclear changes like pyknosis and karyolysis"
    ],
    correctIndex: 3,
    explanation: "Nuclear changes (Pyknosis, Karyorrhexis, Karyolysis) are definitive light microscopic signs of irreversible cell injury/necrosis. Amorphous densities in mitochondria are an EM finding.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-16",
    question: "Which of the following are features of iron deficiency anaemia?",
    options: [
      "TIBC increased, Ferritin decreased, Transferrin saturation increased",
      "TIBC increased, Soluble transferrin receptor decreased, Ferritin increased",
      "TIBC increased, Transferrin saturation decreased, Ferritin decreased",
      "TIBC increased, Transferrin saturation decreased, Ferritin increased"
    ],
    correctIndex: 2,
    explanation: "Iron Deficiency Anemia profile: Decreased Serum Iron, Decreased Ferritin, Decreased Transferrin Saturation, Increased TIBC.",
    topicsCovered: ["Pathology", "Hematology", "Anemia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-17",
    question: "Which of the following is the major source of plasma von-Willebrand factor?",
    options: [
      "Platelets",
      "Lymphocytes",
      "Macrophages",
      "Endothelial cells"
    ],
    correctIndex: 3,
    explanation: "Endothelial cells (Weibel-Palade bodies) are the major source of plasma vWF. Platelets also contain vWF in alpha granules but endothelial cells are the primary source.",
    topicsCovered: ["Pathology", "Hematology", "Coagulation"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-18",
    question: "Which of the following causes vasodilation?",
    options: [
      "Histamine",
      "Thromboxane A2",
      "Serotonin",
      "Leukotriene C4"
    ],
    correctIndex: 0,
    explanation: "Histamine causes vasodilation and increased permeability. Thromboxane A2 and Leukotrienes C4/D4/E4 typically cause vasoconstriction.",
    topicsCovered: ["Pathology", "Inflammation"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-19",
    question: "Both intrinsic and extrinsic pathways are seen in:",
    options: [
      "Apoptosis",
      "Necrosis",
      "Necroptosis",
      "Pyroptosis"
    ],
    correctIndex: 0,
    explanation: "Apoptosis has two main initiation pathways: The Intrinsic (Mitochondrial) pathway and the Extrinsic (Death Receptor) pathway.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-20",
    question: "What is the most likely diagnosis based on the given serum electrophoresis image showing a spike in Alpha-2 region?",
    options: [
      "Multiple myeloma",
      "Tuberculosis",
      "Hepatic cirrhosis",
      "Nephrotic syndrome"
    ],
    correctIndex: 3,
    explanation: "Nephrotic syndrome is characterized by a decrease in albumin (lost in urine) and a relative increase in large proteins like Alpha-2 Macroglobulin (causing an alpha-2 spike) because they are retained.",
    topicsCovered: ["Pathology", "Renal Pathology", "Lab Medicine"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-21",
    question: "All are small round blue cell tumors except:",
    options: [
      "Hemangioblastoma",
      "Ewing's sarcoma",
      "Retinoblastoma",
      "Neuroblastoma"
    ],
    correctIndex: 0,
    explanation: "Small Round Blue Cell Tumors include Ewing's, Retinoblastoma, Neuroblastoma, Lymphoma, Rhabdomyosarcoma, etc. Hemangioblastoma is a vascular tumor, not in this category.",
    topicsCovered: ["Pathology", "Neoplasia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-22",
    question: "A 3-year-old boy presents with recurrent bacterial infections and Pneumocystis pneumonia. Flow cytometry shows defect in CD40 Ligand (implied by context of similar cases). What is the diagnosis?",
    options: [
      "Bare lymphocytes",
      "Chronic granulocyte deficiency",
      "Hyper IgM syndrome",
      "DiGeorge syndrome"
    ],
    correctIndex: 2,
    explanation: "The clinical picture (recurrent infections, Pneumocystis) and flow cytometry (suggesting CD40L defect) point to Hyper IgM syndrome. In this condition, B cells cannot class switch from IgM to IgG/IgA.",
    topicsCovered: ["Pathology", "Immunology", "Immunodeficiency"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-23",
    question: "Which gene is not involved in SCID?",
    options: [
      "BTK",
      "JAK-3",
      "RAG1",
      "IL-7Ra"
    ],
    correctIndex: 0,
    explanation: "BTK (Bruton Tyrosine Kinase) mutation causes X-linked Agammaglobulinemia (Bruton's), not SCID. JAK-3, RAG1, and IL-7Ra are associated with forms of SCID.",
    topicsCovered: ["Pathology", "Immunology", "Immunodeficiency"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-24",
    question: "True about anaphylactoid reaction are all except:",
    options: [
      "Involves degranulation of mast cells",
      "IgE mediated",
      "Can occur on first exposure",
      "Most commonly caused by NSAIDs"
    ],
    correctIndex: 1,
    explanation: "Anaphylactoid reactions mimic anaphylaxis but are NOT IgE mediated. They occur due to direct mast cell degranulation (e.g., by contrast media, NSAIDs) and can happen on the first exposure.",
    topicsCovered: ["Pathology", "Immunology", "Hypersensitivity"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-25",
    question: "The mutations/changes that convert proto-oncogene to oncogene include all except:",
    options: [
      "Promoter insertion",
      "Enhancer deletion",
      "Gene amplification",
      "Point mutation"
    ],
    correctIndex: 1,
    explanation: "Proto-oncogenes become oncogenes (gain of function) via Point mutations, Gene amplification, Translocations (Promoter insertion), etc. Enhancer *deletion* typically reduces expression, which might affect tumor suppressors, but is not a standard mechanism for activating oncogenes.",
    topicsCovered: ["Pathology", "Neoplasia", "Genetics"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-26",
    question: "Hepcidin inhibits iron transfer from the enterocyte to the plasma by binding to:",
    options: [
      "Transferrin",
      "Ferroportin",
      "Ferritin",
      "Divalent metal transporter 1"
    ],
    correctIndex: 1,
    explanation: "Hepcidin binds to Ferroportin, causing its degradation, thus blocking iron export from cells.",
    topicsCovered: ["Pathology", "Hematology", "Iron Metabolism"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-27",
    question: "Which of the following about gamma-delta T-cells is incorrect:",
    options: [
      "Kills extracellular bacteria by granulysin and perforin",
      "Need antigen processing and presentation for it recognition",
      "Direct killing of infected macrophages",
      "Provide protection against mycobacteria"
    ],
    correctIndex: 1,
    explanation: "Gamma-delta T cells do NOT need antigen processing and MHC presentation. They can recognize lipid antigens and small molecules directly.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-28",
    question: "Which of the following is not true regarding the procedure (Bone Marrow Biopsy) done using the instrument given in the image?",
    options: [
      "Contraindicated if platelet count <40,000",
      "Breath holding is required",
      "Procedure can be done in both lateral & prone position",
      "Diagnosing an infiltrative or granulomatous disease"
    ],
    correctIndex: 0,
    explanation: "Bone marrow biopsy is generally safe even with low platelet counts (thrombocytopenia) and is not strictly contraindicated at <40,000, provided pressure is applied. It is often done to investigate the cause of low platelets.",
    topicsCovered: ["Pathology", "Hematology", "Procedures"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-29",
    question: "Ciliocytophthoria is seen in:",
    options: [
      "Acute respiratory infection",
      "Kartagener syndrome",
      "Situs inversus",
      "Cystic fibrosis"
    ],
    correctIndex: 0,
    explanation: "Ciliocytophthoria (destruction of ciliated cells, often observing detached ciliary tufts) is a cytopathic effect seen in viral acute respiratory infections (e.g., Adenovirus, Influenza).",
    topicsCovered: ["Pathology", "Lung Pathology", "Infectious Disease"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-30",
    question: "Maltese cross crystals in the urine are seen in which of the following diseases other than nephrotic syndrome?",
    options: [
      "Friedrich's ataxia",
      "Felty syndrome",
      "Fanconi anemia",
      "Fabry's disease"
    ],
    correctIndex: 3,
    explanation: "Maltese cross lipid crystals in urine (lipiduria) are characteristic of Nephrotic syndrome and Fabry's disease (lipid storage disorder affecting the kidney).",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-31",
    question: "Basophils are activated by:",
    options: [
      "IL-5",
      "INF-gamma",
      "TNF-alpha",
      "IL-2"
    ],
    correctIndex: 0,
    explanation: "Basophils (and Eosinophils) are primed and activated by IL-5, IL-3, and GM-CSF.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-32",
    question: "Which transporter is required for the transport of iron into the enterocyte?",
    options: [
      "Ferroportin",
      "Divalent metal transporter 1",
      "Divalent metal transporter 2",
      "Haptocorrin"
    ],
    correctIndex: 1,
    explanation: "Divalent Metal Transporter 1 (DMT1) transports ferrous iron (Fe2+) from the gut lumen into the enterocyte on the apical surface.",
    topicsCovered: ["Pathology", "Hematology", "Iron Metabolism"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-33",
    question: "Berry aneurysm occurs due to:",
    options: [
      "Endothelial injury of vessel due to HTN",
      "Arterial internal elastic lamina defect",
      "Endothelial layer defect",
      "Adventitia defect"
    ],
    correctIndex: 1,
    explanation: "Berry aneurysms occur due to a developmental defect in the media and internal elastic lamina, usually at the bifurcation of vessels in the Circle of Willis.",
    topicsCovered: ["Pathology", "Neuropathology", "Vascular Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },

  {
    id: "AIIMS-2018-PATH-1",
    question: "Choose the correct option regarding the storage temperatures of blood components.",
    options: [
      "RBC 20-22°C, Platelet 2-6°C, FFP -30°C",
      "RBC 2-6°C, Platelet 20-22°C, FFP -30°C",
      "RBC -30°C, FFP 2-6 °C, Platelet 20-22°C",
      "RBC 20-22°C, FFP below -30°C, Platelet 2-6 °C"
    ],
    correctIndex: 1,
    explanation: "The recommended storage temperatures are: Whole blood and red blood cells: 2–6°C; Fresh frozen plasma: -30°C or lower; Platelet: 20–24°C (with agitation).",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-2",
    question: "Acid mucin is stained by _____________________.",
    options: [
      "PAS",
      "Alcian blue",
      "Masson trichrome",
      "PTAH"
    ],
    correctIndex: 1,
    explanation: "Acid mucin is stained by Alcian blue.",
    topicsCovered: ["Pathology", "Staining"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-3",
    question: "Toluidine blue staining is used in the Identification of which of the following cells?",
    options: [
      "Lymphocyte",
      "Fibroblast",
      "Macrophage",
      "Mast Cell"
    ],
    correctIndex: 3,
    explanation: "Toluidine blue is the special stain for mast cells. It stains the mast cells violet in a blue background (metachromasia).",
    topicsCovered: ["Pathology", "Staining"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-4",
    question: "t(11,22) is best diagnosed by _______",
    options: [
      "Conventional karyotyping",
      "FISH",
      "Bone marrow aspiration",
      "Next generation sequencing"
    ],
    correctIndex: 1,
    explanation: "t(11,22) is a characteristic translocation giving rise to Ewing's Sarcoma. It involves the EWSR1 gene on chromosome 22 and FLI1 gene on chromosome 11. It is best diagnosed using fluorescence in situ hybridization (FISH).",
    topicsCovered: ["Pathology", "Genetics", "Ewing Sarcoma"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-5",
    question: "Gamma delta T cell(γδ TCRs) receptors recognizes",
    options: [
      "Lipids without MHC proteins",
      "Peptides with MHC proteins",
      "CD20",
      "CD3"
    ],
    correctIndex: 0,
    explanation: "Gamma delta TCRs (T-cell receptors) have been shown to recognize lipid antigens presented by CD1d in an MHC-independent manner.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-6",
    question: "Cancer that least commonly spreads by lymphatic route is ______.",
    options: [
      "Squamous cell carcinoma",
      "Merkel Cell Carcinoma",
      "Basal Cell Carcinoma",
      "Malignant melanoma"
    ],
    correctIndex: 2,
    explanation: "Basal cell carcinoma is a locally aggressive tumor that rarely spreads by the lymphatic route. It is primarily locally invasive.",
    topicsCovered: ["Pathology", "Neoplasia", "Skin Cancer"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-7",
    question: "What is correct regarding transfusion of the blood received from blood bank?",
    options: [
      "It should be started within 4 hours of receiving it from the blood bank.",
      "It should be completed within 4 hours of receiving from the blood bank.",
      "No such time restraint and can be done anytime.",
      "It should be completed within 6 hours of receiving from the blood bank."
    ],
    correctIndex: 1,
    explanation: "Blood received from blood bank should be completely transfused within 4 hours of receiving. Infusion of a unit for longer than 4 hours is not recommended as there is a risk of bacterial proliferation.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-8",
    question: "A patient working in a factory presented with lung fibrosis and thickening of pleura. Biopsy was done. Diagnosis from the histopathology picture (showing golden brown beaded rods) is:",
    options: [
      "Asbestosis",
      "Silicosis",
      "Tuberculosis",
      "Mesothelioma"
    ],
    correctIndex: 0,
    explanation: "The image shows typical asbestos bodies (ferruginous bodies), which are golden brown, fusiform, or beaded rods with a translucent center. This finding in a factory worker with lung fibrosis suggests Asbestosis.",
    topicsCovered: ["Pathology", "Lung Pathology", "Pneumoconiosis"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-9",
    question: "All leukemias come under provisional entity in WHO 2016 classification of hematolymphoid tumours except_______.",
    options: [
      "Natual Killer cell lymphoblastic leukemia/lymphoma",
      "B-lymphoblastic leukemia/lymphoma with hypodiploidy",
      "Acute myeloid leukemia with RUNX1 mutation",
      "Splenic B-cell lymphoma/leukemia"
    ],
    correctIndex: 1,
    explanation: "B-lymphoblastic leukemia/lymphoma is a defined entity. The others (NK cell lymphoblastic leukemia/lymphoma, AML with mutated RUNX1, Splenic B-cell lymphoma/leukemia) were included as provisional entities in the WHO 2016 classification.",
    topicsCovered: ["Pathology", "Hematology", "WHO Classification"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-10",
    question: "A 65-year-old HIV-positive man presented with fever and breathlessness for 2 weeks. Lung biopsy showed cytomegalic cells with owl's eye appearance. What is the diagnosis?",
    options: [
      "Small-cell lung cancer",
      "CMV-associated organizing pneumonia",
      "Cryptococcal pneumonia",
      "Tuberculosis"
    ],
    correctIndex: 1,
    explanation: "The image shows a cytomegalic pneumocyte containing characteristic intranuclear basophilic inclusion surrounded by a clear halo known as owl's eye appearance, suggestive of CMV pneumonia.",
    topicsCovered: ["Pathology", "Infectious Disease", "Lung Pathology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-11",
    question: "Which of the following is a true statement about apoptosis?",
    options: [
      "There is enzymatic digestion of cellular contents",
      "It is associated with adjacent inflammation",
      "Karyolysis is present",
      "Plasma membrane remains intact"
    ],
    correctIndex: 3,
    explanation: "In apoptosis, the plasma membrane remains intact. Apoptotic cells break up into fragments called apoptotic bodies which are phagocytosed without eliciting inflammation. Necrosis involves enzymatic digestion and inflammation.",
    topicsCovered: ["Pathology", "Cell Injury", "Apoptosis"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-12",
    question: "Which of the following is the color of vacutainer containing sodium fluoride as a content?",
    options: [
      "Red",
      "Grey",
      "Blue",
      "Yellow"
    ],
    correctIndex: 1,
    explanation: "Sodium fluoride (which inhibits glycolysis) is present in the grey coloured tube.",
    topicsCovered: ["Pathology", "Lab Medicine"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-13",
    question: "What does the following image show (intact hematopoietic cells within the cytoplasm of a host cell)?",
    options: [
      "Autophagy",
      "Emperipolesis",
      "Phagocytosis",
      "Amoebic autophagy"
    ],
    correctIndex: 1,
    explanation: "The image shows the phenomenon of emperipolesis, where intact hematopoietic cells are seen within the cytoplasm of the host cell without any damage.",
    topicsCovered: ["Pathology", "Cell Biology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-14",
    question: "A patient presents with abdominal distension and intermittent fever. A tumor is resected and the histopathology shows follicular hyperplasia with vascular hyalinization. What is the most probable diagnosis?",
    options: [
      "Angiolymphoma",
      "Hodgkin's lymphoma",
      "IgG4-related disease",
      "Castleman disease"
    ],
    correctIndex: 3,
    explanation: "The features described (follicular hyperplasia, lollipop appearance, onion skinning of mantle zone) are suggestive of Castleman disease (angiofollicular lymph node hyperplasia).",
    topicsCovered: ["Pathology", "Lymph Node Pathology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-15",
    question: "Which of the following is not usually involved in the immunohistochemistry of acute lymphoblastic leukemia?",
    options: [
      "Tdt",
      "CD1a",
      "CD3",
      "Cytokeratin"
    ],
    correctIndex: 3,
    explanation: "Cytokeratin is an epithelial marker and is not a marker of acute lymphoblastic leukemia (ALL). Tdt, CD1a, and CD3 are markers of ALL.",
    topicsCovered: ["Pathology", "Hematology", "Leukemia"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-16",
    question: "Antibody-dependent cellular cytotoxicity (ADCC) is seen with:",
    options: [
      "Natural killer (NK) cells only",
      "Macrophages only",
      "NK cells, neutrophils and eosinophils",
      "Neutrophils and eosinophils only"
    ],
    correctIndex: 2,
    explanation: "Antibody-dependent cellular cytotoxicity (ADCC) is mediated by NK cells, neutrophils and eosinophils (killing certain parasitic worms via IgE antibodies).",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-17",
    question: "A middle-aged male patient has proteinuria. Looking at the immunofluorescence image (positive for multiple Igs and complements), what is the diagnosis?",
    options: [
      "Focal segmental glomerulosclerosis (FSGS)",
      "Post-streptococcal glomerulonephritis (PSGN)",
      "Good pasture syndrome",
      "Lupus nephritis"
    ],
    correctIndex: 3,
    explanation: "The immunofluorescence shows positive staining for IgG, IgA, IgM, C1q, C3 (Full-house effect), which is characteristic of Lupus nephritis.",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-18",
    question: "Which of the following is involved in recognition and clearance of necrotic cells?",
    options: [
      "Inflammasome",
      "Toll-like receptors (TLRs)",
      "P selectin",
      "Manoreceptor"
    ],
    correctIndex: 0,
    explanation: "Inflammasomes are involved in the recognition and clearance of necrotic cells and in pyroptosis.",
    topicsCovered: ["Pathology", "Inflammation"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-19",
    question: "A patient has been brought with severe bleeding to your ER. His blood group is unknown. Fresh frozen plasma from which of the following blood groups can be given?",
    options: [
      "O",
      "AB",
      "B",
      "A"
    ],
    correctIndex: 1,
    explanation: "Fresh Frozen Plasma (FFP) from AB blood group is the universal plasma donor because it does not contain antibodies against A or B antigens.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-20",
    question: "Which of the following is not a proto-oncogene implicated in carcinoma of thyroid?",
    options: [
      "RAS",
      "RET",
      "BRAF",
      "p53"
    ],
    correctIndex: 3,
    explanation: "p53 is a tumor-suppressor gene, not a proto-oncogene. RAS, RET, and BRAF are proto-oncogenes implicated in thyroid carcinoma.",
    topicsCovered: ["Pathology", "Neoplasia", "Thyroid"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-21",
    question: "NARP syndrome is a?",
    options: [
      "Lysosomal storage disorder",
      "Mitochondrial function disorder",
      "Glycogen storage disorder",
      "Golgi body transport disorder"
    ],
    correctIndex: 1,
    explanation: "NARP (Neuropathy Ataxia Retinitis Pigmentosa) syndrome is a mitochondrial function disorder due to a mutation in the mitochondrial ATPase-6 gene.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "AIIMS-2018-PATH-22",
    question: "Which amongst the following is true about Turner's syndrome?",
    options: [
      "Webbing of hands and toes are associated with risk of visceral anomalies",
      "Noonan syndrome is more associated with cardiac defects",
      "Absence of neck webbing is associated with higher risk of co-arctation of aorta",
      "Webbing of neck is associated with higher risk of cardiac anomalies"
    ],
    correctIndex: 3,
    explanation: "In Turner's syndrome, webbing of the neck (cystic hygroma) is associated with a higher risk of cardiac anomalies, particularly coarctation of the aorta.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2018,
    examSession: "AIIMS"
  },

  // --- Pathology NEET 2018 ---
  {
    id: "NEET-2018-PATH-1",
    question: "The following cells seen in the lymph node (Warthin–Finkeldey giant cell) are indicative of:",
    options: [
      "Infectious Mononucleosis",
      "Measles",
      "CMV infection",
      "Influenza"
    ],
    correctIndex: 1,
    explanation: "Warthin–Finkeldey giant cells with large grapelike clusters of inclusion bodies are pathognomonic for Measles.",
    topicsCovered: ["Pathology", "Infectious Disease"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-2",
    question: "What is the most common site for an extragonadal germ cell tumor?",
    options: [
      "Pineal gland",
      "Retroperitoneum",
      "Sacro coccegeal region",
      "Mediastinum"
    ],
    correctIndex: 3,
    explanation: "Extragonadal germ cell tumors are most commonly seen in the mediastinum (50-70%).",
    topicsCovered: ["Pathology", "Neoplasia"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-3",
    question: "Identify the condition represented in the image (lung with small yellow-white consolidation foci).",
    options: [
      "Emphysema",
      "Miliary tuberculosis",
      "Sarcoidosis",
      "Asbestosis"
    ],
    correctIndex: 1,
    explanation: "The image represents 'miliary tuberculosis' with small (2-mm) foci of yellow-white consolidation scattered through the lung parenchyma.",
    topicsCovered: ["Pathology", "Infectious Disease", "Lung Pathology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-4",
    question: "Which of the following is an epithelial tumor of the stomach?",
    options: [
      "Carcinoid tumor",
      "Lymphoma",
      "Gastrointestinal stromal tumor",
      "Gastric adenocarcinoma"
    ],
    correctIndex: 3,
    explanation: "Gastric adenocarcinoma is an epithelial tumor of the stomach. Carcinoid is neuroendocrine, Lymphoma is lymphoid, and GIST is mesenchymal.",
    topicsCovered: ["Pathology", "GI Pathology", "Neoplasia"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-5",
    question: "What is the maximum duration for TRALI to occur after blood transfusion?",
    options: [
      "12 hours",
      "24 hours",
      "6 hours",
      "48 hours"
    ],
    correctIndex: 2,
    explanation: "The maximum duration for TRALI (Transfusion-related acute lung injury) to occur after blood transfusion is up to 6 hours.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-6",
    question: "Prolonged bleeding time is seen in ___.",
    options: [
      "Hemophilia A",
      "Hemophilia B",
      "von Willebrand disease",
      "Both (b) and (c)"
    ],
    correctIndex: 2,
    explanation: "Prolonged bleeding time is seen in von Willebrand disease due to platelet dysfunction. Hemophilia A and B typically show normal bleeding time but prolonged APTT.",
    topicsCovered: ["Pathology", "Hematology", "Coagulation"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-7",
    question: "The single most important long-term limitation of cardiac transplantation is ________",
    options: [
      "Allograft rejection",
      "Allograft arteriopathy",
      "Infection",
      "Malignancy"
    ],
    correctIndex: 1,
    explanation: "Allograft arteriopathy is the single most important long-term limitation of cardiac transplantation. It is a progressive, diffusely stenosing intimal proliferation in coronary arteries.",
    topicsCovered: ["Pathology", "Cardiovascular Pathology", "Transplantation"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-8",
    question: "Which chromosome is involved in myotonic dystrophy?",
    options: [
      "Chromosome 19",
      "Chromosome 20",
      "Chromosome 21",
      "Chromosome 22"
    ],
    correctIndex: 0,
    explanation: "Chromosome 19 is involved in myotonic dystrophy (DMPK gene).",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-9",
    question: "Cowden syndrome is associated with mutation in _________________",
    options: [
      "PTEN",
      "WT1",
      "p53",
      "Ras"
    ],
    correctIndex: 0,
    explanation: "Cowden syndrome is associated with PTEN mutation.",
    topicsCovered: ["Pathology", "Genetics", "Neoplasia"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-10",
    question: "What is the most common cause of agranulocytosis?",
    options: [
      "Marrow infiltration",
      "Autoimmune",
      "Drug toxicity",
      "Radiation exposure"
    ],
    correctIndex: 2,
    explanation: "The most common cause of agranulocytosis is drug toxicity.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-11",
    question: "All of these are characteristic features of pancreatic carcinoma except:",
    options: [
      "Cigarette smoking is a risk factor",
      "Carcinoma of body of pancreas often present with jaundice",
      "They elicit intense desmoplastic response",
      "Perineural invasion is common"
    ],
    correctIndex: 1,
    explanation: "Carcinoma of the HEAD of pancreas often presents with jaundice. Tumors of the body and tail are often asymptomatic until late.",
    topicsCovered: ["Pathology", "GI Pathology", "Pancreas"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-12",
    question: "Stellate granuloma is seen in :",
    options: [
      "Sarcoidosis",
      "Cat-scratch disease",
      "Cryptococcosis",
      "Histoplasmosis"
    ],
    correctIndex: 1,
    explanation: "Stellate granuloma (necrotizing granuloma with stellate shape) is characteristic of Cat-scratch disease.",
    topicsCovered: ["Pathology", "Infectious Disease"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-13",
    question: "L & H type Reed-Sternberg (RS) cell is seen in:",
    options: [
      "Mixed celluar type",
      "Nodular sclerosis",
      "Lymphocyte predominant",
      "Classical Hodgkin Lymphoma"
    ],
    correctIndex: 2,
    explanation: "L & H (Lymphocytic and Histiocytic) type or 'Popcorn' cells are seen in Nodular Lymphocyte Predominant Hodgkin Lymphoma (NLPHL).",
    topicsCovered: ["Pathology", "Hematology", "Lymphoma"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-14",
    question: "The most consistent and persistent feature of bladder carcinoma is:",
    options: [
      "Painless hematuria",
      "Painful hematuria",
      "Dysuria",
      "Suprapubic mass"
    ],
    correctIndex: 0,
    explanation: "Painless hematuria is the classical and most consistent feature of bladder carcinoma.",
    topicsCovered: ["Pathology", "Renal Pathology", "Urology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-15",
    question: "Fever occurs during inflammation due to all except:",
    options: [
      "IL 1",
      "Prostaglandins",
      "TNF",
      "Histamine"
    ],
    correctIndex: 3,
    explanation: "Histamine is involved in vascular events (vasodilation, permeability), not fever. IL-1, TNF, and Prostaglandins are pyrogens.",
    topicsCovered: ["Pathology", "Inflammation"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-16",
    question: "Anaplasia refers to:",
    options: [
      "Lack of differentiation",
      "Variation in cell size and shape",
      "Replacement of one type of cell by other",
      "Disordered arrangement of tumor cells"
    ],
    correctIndex: 0,
    explanation: "Anaplasia refers to a lack of differentiation (reversal to a primitive level).",
    topicsCovered: ["Pathology", "Neoplasia"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-17",
    question: "Which of the following is an opsonin?",
    options: [
      "C3a",
      "C3b",
      "C5a",
      "C6"
    ],
    correctIndex: 1,
    explanation: "C3b functions as an opsonin.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-18",
    question: "CD-59 is involved in ____________.",
    options: [
      "Paroxysmal nocturnal hemoglobinuria",
      "Chediak-Higashi syndrome",
      "Essential thrombocythemia",
      "Primary myelofibrosis"
    ],
    correctIndex: 0,
    explanation: "CD-59 (MIRL) and CD-55 (DAF) are absent in Paroxysmal Nocturnal Hemoglobinuria (PNH), leading to complement-mediated lysis.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-19",
    question: "Leiden mutation is of factor:",
    options: [
      "V",
      "VIII",
      "I",
      "X"
    ],
    correctIndex: 0,
    explanation: "Factor V Leiden is a specific mutation of Factor V that causes resistance to activated protein C.",
    topicsCovered: ["Pathology", "Hematology", "Coagulation"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "NEET-2018-PATH-20",
    question: "Which of the following is the most important determinant of malignant potential in the papillary type of renal tumor?",
    options: [
      "Immnunohistology",
      "Size",
      "Cytogenetics",
      "Part of kidney involved"
    ],
    correctIndex: 1,
    explanation: "The most important determinant is size. Tumors < 1.5 cm are typically adenomas, while > 1.5 cm are considered Papillary Renal Cell Carcinoma.",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2018,
    examSession: "NEET"
  },

  // --- Pathology AIIMS 2019 ---
  {
    id: "AIIMS-2019-PATH-1",
    question: "A young boy from high altitude came with fever and weakness and had the following reports - Hemoglobin 17 g%, TLC is 21,000. Next step in the investigation should be:",
    options: [
      "Philadelphia chromosome",
      "JAK mutation",
      "Erythropoietin levels",
      "Bone Marrow biopsy with reticulin stain"
    ],
    correctIndex: 2,
    explanation: "Given high Hb (polycythemia), Erythropoietin (EPO) levels should be checked to differentiate between primary (low EPO) and secondary (high EPO) causes.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-2",
    question: "A 36-year-old male with skin-colored umbilicated papules. Microscopy is as shown below. The most likely diagnosis is______.",
    options: [
      "Herpes virus",
      "Verruca vulgaris",
      "Molluscum contagiosum",
      "Lichen planus"
    ],
    correctIndex: 2,
    explanation: "Skin-colored umbilicated papules with Henderson-Patterson bodies (large eosinophilic intracytoplasmic inclusions) are diagnostic of Molluscum contagiosum.",
    topicsCovered: ["Pathology", "Dermatopathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-3",
    question: "Which of the following is not an intermediate filament?",
    options: [
      "Vimentin",
      "Tubulin",
      "Desmin",
      "Neurofilament"
    ],
    correctIndex: 1,
    explanation: "Tubulin forms microtubules, not intermediate filaments.",
    topicsCovered: ["Pathology", "Cell Biology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-4",
    question: "A 20-year-old male patient is diagnosed with acute myeloid leukemia. The peripheral blood smear shows a cell with bundles of Auer rods. The cell indicated is best described as:",
    options: [
      "Auer rod",
      "Flaming promyelocyte",
      "Faggot cell",
      "Dusky promyelocyte"
    ],
    correctIndex: 2,
    explanation: "Cells with multiple Auer rods clustered together like a bundle of sticks are called Faggot cells, seen in Acute Promyelocytic Leukemia (APL).",
    topicsCovered: ["Pathology", "Hematology", "Leukemia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-5",
    question: "Which test evaluates the extrinsic pathway?",
    options: [
      "APTT",
      "PT",
      "TT",
      "Bleeding time"
    ],
    correctIndex: 1,
    explanation: "Prothrombin Time (PT) evaluates the extrinsic pathway.",
    topicsCovered: ["Pathology", "Hematology", "Coagulation"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-6",
    question: "A 58-year-old man died 24 hours after the onset of substernal chest pain. Autopsy showed atheromatous plaque. Which type of calcification is most likely to be seen in this condition?",
    options: [
      "Dystrophic with increased serum calcium",
      "Metastatic with increased serum calcium",
      "Dystrophic with normal serum calcium",
      "Metastatic with normal serum calcium"
    ],
    correctIndex: 2,
    explanation: "Calcification in atheromatous plaques is Dystrophic Calcification, which occurs in dying/dead tissues with normal serum calcium levels.",
    topicsCovered: ["Pathology", "Cell Injury", "Calcification"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-7",
    question: "Hepcidin inhibits iron transfer from the enterocyte to the plasma by binding to ________",
    options: [
      "Ferroportin",
      "Transferrin",
      "Divalent metal transporter 1 (DMT1)",
      "Ferritin"
    ],
    correctIndex: 0,
    explanation: "Hepcidin binds to Ferroportin and degrades it, inhibiting iron transfer to plasma.",
    topicsCovered: ["Pathology", "Hematology", "Iron Metabolism"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-8",
    question: "A CKD patient developed shortness of breath and hypertension during the second bag of blood transfusion. What is the cause?",
    options: [
      "Allergic",
      "Transfusion related circulatory overload",
      "Transfusion-related acute lung injury",
      "Febrile non-hemolytic transfusion reaction"
    ],
    correctIndex: 1,
    explanation: "Hypertension and dyspnea during transfusion suggest Transfusion Associated Circulatory Overload (TACO).",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-9",
    question: "A patient who receives recurrent transfusions for thalassemia develops fever and chills during this time. Which of the following measures can decrease the rate of transfusion reactions?",
    options: [
      "Leukoreduced RBCs",
      "Antibiotics",
      "Irradiation",
      "Washed RBCs"
    ],
    correctIndex: 0,
    explanation: "Febrile non-hemolytic transfusion reactions are caused by cytokines from leukocytes. Leukoreduced RBCs prevent this.",
    topicsCovered: ["Pathology", "Blood Banking"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-10",
    question: "If DNA is damaged in the cell cycle, which gene causes cell cycle arrest?",
    options: [
      "Rb",
      "MYC",
      "p53",
      "K-RAS"
    ],
    correctIndex: 2,
    explanation: "p53 causes cell cycle arrest (via p21) in response to DNA damage.",
    topicsCovered: ["Pathology", "Cell Biology", "Neoplasia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-11",
    question: "Which of the following is not a hemostatic agent?",
    options: [
      "Zeolite",
      "Chitosan",
      "Boric acid",
      "Kaolin"
    ],
    correctIndex: 2,
    explanation: "Boric acid is not a hemostatic agent. Zeolite, Chitosan, and Kaolin are used in hemostatic dressings.",
    topicsCovered: ["Pathology", "General Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-12",
    question: "Acute inflammatory response is not seen in:",
    options: [
      "Pyroptosis",
      "Necroptosis",
      "Apoptosis",
      "Necrosis"
    ],
    correctIndex: 2,
    explanation: "Apoptosis is a non-inflammatory cell death. The membrane remains intact.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-13",
    question: "An affected male does not have affected children but an affected female always has affected children. Type of inheritance?",
    options: [
      "X linked recessive",
      "Autosomal recessive",
      "X linked dominant",
      "Mitochondrial"
    ],
    correctIndex: 3,
    explanation: "This pattern (maternal inheritance) is characteristic of Mitochondrial inheritance.",
    topicsCovered: ["Pathology", "Genetics"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-14",
    question: "Which of the following is the most common cause of liver failure?",
    options: [
      "Alcohol",
      "Paracetamol",
      "CCl4",
      "Pesticides"
    ],
    correctIndex: 1,
    explanation: "Paracetamol overdose is the most common cause of acute liver failure.",
    topicsCovered: ["Pathology", "Hepatology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-15",
    question: "Which is the most important light microscopic feature of irreversible cell injury?",
    options: [
      "Amorphous densities in mitochondria",
      "Cell membrane blebs and loss of microvilli",
      "Ribosomal detachment from endoplasmic reticulum",
      "Nuclear changes like pyknosis and karyolysis"
    ],
    correctIndex: 3,
    explanation: "Nuclear changes (pyknosis, karyorrhexis, karyolysis) are the hallmark of irreversible injury visible on light microscopy. Amorphous densities are EM features.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-16",
    question: "Which of the following are features of iron deficiency anaemia?",
    options: [
      "TIBC increased, Ferritin decreased, Transferrin saturation increased",
      "TIBC increased, Soluble transferrin receptor decreased, Ferritin increased",
      "TIBC increased, Transferrin saturation decreased, Ferritin decreased",
      "TIBC increased, Transferrin saturation decreased, Ferritin increased"
    ],
    correctIndex: 2,
    explanation: "Iron deficiency: Low Ferritin, Low Transferrin Saturation, High TIBC.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-17",
    question: "Which of the following is the major source of plasma von-Willebrand factor?",
    options: [
      "Platelets",
      "Lymphocytes",
      "Macrophages",
      "Endothelial cells"
    ],
    correctIndex: 3,
    explanation: "Endothelial cells are the major source of plasma vWF.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-18",
    question: "Which of the following causes vasodilation?",
    options: [
      "Histamine",
      "Thromboxane A2",
      "Serotonin",
      "Leukotriene C4"
    ],
    correctIndex: 0,
    explanation: "Histamine causes vasodilation.",
    topicsCovered: ["Pathology", "Inflammation"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-19",
    question: "Both intrinsic and extrinsic pathways are seen in:",
    options: [
      "Apoptosis",
      "Necrosis",
      "Necroptosis",
      "Pyroptosis"
    ],
    correctIndex: 0,
    explanation: "Apoptosis has Intrinsic (Mitochondrial) and Extrinsic (Death Receptor) pathways.",
    topicsCovered: ["Pathology", "Cell Injury"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-20",
    question: "What is the most likely diagnosis based on the given serum electrophoresis image (showing hypoalbuminemia and alpha-2 spike)?",
    options: [
      "Multiple myeloma",
      "Tuberculosis",
      "Hepatic cirrhosis",
      "Nephrotic syndrome"
    ],
    correctIndex: 3,
    explanation: "Nephrotic syndrome shows hypoalbuminemia and increased alpha-2 globulin (due to retention of alpha-2 macroglobulin).",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-21",
    question: "All are small round blue cell tumors except:",
    options: [
      "Hemangioblastoma",
      "Ewing's sarcoma",
      "Retinoblastoma",
      "Neuroblastoma"
    ],
    correctIndex: 0,
    explanation: "Hemangioblastoma is not a small round blue cell tumor. Ewing's, Retinoblastoma, and Neuroblastoma are.",
    topicsCovered: ["Pathology", "Neoplasia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-22",
    question: "A 3-year-old boy presents with recurrent bacterial infections and Pneumocystis jiroveci pneumonia. Flow cytometry suggests CD40 Ligand defect. What is the most likely diagnosis?",
    options: [
      "Bare lymphocytes",
      "Chronic granulocyte deficiency",
      "Hyper IgM syndrome",
      "DiGeorge syndrome"
    ],
    correctIndex: 2,
    explanation: "Hyper IgM syndrome is caused by CD40L deficiency (X-linked). It prevents class switching.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-23",
    question: "Which gene is not involved in SCID?",
    options: [
      "BTK",
      "JAK-3",
      "RAG1",
      "IL-7Ra"
    ],
    correctIndex: 0,
    explanation: "BTK is involved in Bruton's Agammaglobulinemia. JAK-3, RAG1, IL-7R are involved in SCID.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-24",
    question: "True about anaphylactoid reaction are all except:",
    options: [
      "Involves degranulation of mast cells",
      "IgE mediated",
      "Can occur on first exposure",
      "Most commonly caused by NSAIDs"
    ],
    correctIndex: 1,
    explanation: "Anaphylactoid reactions are NOT IgE mediated. They involve direct degranulation.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-25",
    question: "The mutations/changes that convert proto-oncogene to oncogene include all except:",
    options: [
      "Promoter insertion",
      "Enhancer deletion",
      "Gene amplification",
      "Point mutation"
    ],
    correctIndex: 1,
    explanation: "Enhancer deletion does not convert a proto-oncogene to an oncogene (it would likely reduce expression).",
    topicsCovered: ["Pathology", "Neoplasia"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-26",
    question: "Hepcidin inhibits iron transfer from the enterocyte to the plasma by binding to ______",
    options: [
      "Transferrin",
      "Ferroportin",
      "Ferritin",
      "Divalent metal transporter 1"
    ],
    correctIndex: 1,
    explanation: "Hepcidin binds to Ferroportin.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-27",
    question: "Which of the following about gamma-delta T-cells is incorrect:",
    options: [
      "Kills extracellular bacteria by granulysin and perforin",
      "Need antigen processing and presentation for it recognition",
      "Direct killing of infected macrophages",
      "Provide protection against mycobacteria"
    ],
    correctIndex: 1,
    explanation: "Gamma-delta T cells do NOT need antigen processing and presentation (MHC restriction). They recognize antigens directly.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-28",
    question: "Which of the following is not true regarding the procedure done using the instrument given in the image (Bone marrow biopsy needle)?",
    options: [
      "Contraindicated if platelet count <40,000",
      "Breath holding is required",
      "Procedure can be done in both lateral & prone position",
      "Diagnosing an infiltrative or granulomatous disease"
    ],
    correctIndex: 0,
    explanation: "Bone marrow biopsy is not strictly contraindicated for low platelets (thrombocytopenia is an indication to do it).",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-29",
    question: "Ciliocytophthoria is seen in:",
    options: [
      "Acute respiratory infection",
      "Kartagener syndrome",
      "Situs inversus",
      "Cystic fibrosis"
    ],
    correctIndex: 0,
    explanation: "Ciliocytophthoria is seen in viral acute respiratory infections.",
    topicsCovered: ["Pathology", "Lung Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-30",
    question: "Maltese cross crystals in the urine are seen in which of the following diseases other than nephrotic syndrome?",
    options: [
      "Friedrich's ataxia",
      "Felty syndrome",
      "Fanconi anemia",
      "Fabry's disease"
    ],
    correctIndex: 3,
    explanation: "Maltese cross crystals (lipiduria) can be seen in Fabry's disease.",
    topicsCovered: ["Pathology", "Renal Pathology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-31",
    question: "Basophils are activated by:",
    options: [
      "IL-5",
      "INF-gamma",
      "TNF-alpha",
      "IL-2"
    ],
    correctIndex: 0,
    explanation: "Basophils are activated by IL-5 and IL-3.",
    topicsCovered: ["Pathology", "Immunology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-32",
    question: "Which transporter is required for the transport of iron into the enterocyte?",
    options: [
      "Ferroportin",
      "Divalent metal transporter 1",
      "Divalent metal transporter 2",
      "Haptocorrin"
    ],
    correctIndex: 1,
    explanation: "DMT1 (Divalent metal transporter 1) transports iron into the enterocyte.",
    topicsCovered: ["Pathology", "Hematology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "AIIMS-2019-PATH-33",
    question: "Berry aneurysm occurs due to:",
    options: [
      "Endothelial injury of vessel due to HTN",
      "Arterial internal elastic lamina defect",
      "Endothelial layer defect",
      "Adventitia defect"
    ],
    correctIndex: 1,
    explanation: "Berry aneurysm occurs due to a defect in the arterial internal elastic lamina and media.",
    topicsCovered: ["Pathology", "Vascular Pathology"],
    year: 2019,
    examSession: "May & Nov"
  }
];