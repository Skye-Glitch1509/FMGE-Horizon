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

export const anesthesiaQuestions: FMGEMCQ[] = [
  // AIIMS 2017
  {
    id: "aiims-2017-q1",
    question: "A 40 year old female with burns over her abdomen, both limbs and back and presented after 8 hours. Which of the following is the formula for calculation of fluid infusion?",
    options: [
      "2 ml/kg X %TBSA for the next 16 hours",
      "5 ml/kg X %TSBA for the next 16 hours",
      "4 ml/kg X %TSBA for first 8 hours then 2 ml/kg X %TBSA for next 16 hours",
      "4 ml/kg X%TSBA for the next 16 hours"
    ],
    correctIndex: 0,
    explanation: "According to ATLS 10th edition (2018), the resuscitation formula used in thermal burns is 2 mL/kg x % TBSA lactated Ringer solution. For a patient presenting 8 hours after sustaining thermal burns (missing the first 8-hour window where half the fluid is usually given), the remaining calculated volume for the first 24 hours should be given in the next 16 hours. The formula suggests 2 mL/kg x % TBSA represents the total volume for 24 hours in some newer protocols or the specific rate calculation for the remaining time.",
    topicsCovered: ["Burn Management", "Fluid Resuscitation"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2017-q2",
    question: "A 35-year-old woman was brought to the casualty ward with a history of road traffic accident (RTA) and head trauma. Her eye opens to pain, moans, can localize limb towards the pain stimulus on the left hand and away from the pain stimulus on the right hand and both the legs in extended posture. Calculate her GCS.",
    options: [
      "11",
      "9",
      "7",
      "3"
    ],
    correctIndex: 1,
    explanation: "E2 (Eye opens to pain) + V2 (Moans) + M5 (Localizes to pain). The motor score takes the best response, which is localizing to pain on the left hand. Total GCS = 2 + 2 + 5 = 9.",
    topicsCovered: ["Trauma", "GCS Scoring"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2017-q3",
    question: "A patient who was on ventilator and being ventilated for past few days suddenly pulls out of the endotracheal tube. What is the next step of management?",
    options: [
      "Re intubate",
      "Oxygenate and reintubate",
      "Start CPR",
      "Watch for spontaneous breaths and reintubate if needed"
    ],
    correctIndex: 3,
    explanation: "About half of self-extubated patients may not require re-intubation. The immediate step is to assess the patient's ability to breathe spontaneously and oxygenate. Re-intubation should be performed only if necessary.",
    topicsCovered: ["Critical Care", "Airway Management"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2017-q4",
    question: "The time required for preoxygenation before tracheal intubation?",
    options: [
      "1 min",
      "3 min",
      "5-7 min",
      "5 min"
    ],
    correctIndex: 1,
    explanation: "Preoxygenation with tidal volume breathing of 3 mins is required before tracheal intubation. This denitrogenation replaces nitrogen in the lungs with oxygen, delaying the onset of hypoxia during apnea.",
    topicsCovered: ["Airway Management", "Preoxygenation"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2017-q5",
    question: "Nerve fibre least susceptible to local anesthetic is:",
    options: [
      "A-delta",
      "A- gamma",
      "A- beta",
      "C"
    ],
    correctIndex: 3,
    explanation: "Although theoretically C fibers were thought to be most susceptible, practically C fibers are the least susceptible/most resistant to local anesthetics among the options. The order of susceptibility is B > A-delta > A-gamma > A-beta > A-alpha > C.",
    topicsCovered: ["Local Anesthesia", "Nerve Physiology"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2017-q6",
    question: "Which of the following can be used as an intravenous induction agent?",
    options: [
      "Lorazepam",
      "Bupivacaine",
      "Dexmedetomidine",
      "Neostigmine"
    ],
    correctIndex: 0,
    explanation: "Lorazepam is a benzodiazepine that can be used for induction of anesthesia (0.1 mg/kg), though midazolam is more common. Bupivacaine is a local anesthetic, Dexmedetomidine is a sedative/analgesic adjuvant, and Neostigmine is a reversal agent.",
    topicsCovered: ["Induction Agents", "Intravenous Anesthetics"],
    year: 2017,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2017-q7",
    question: "Which of the following is the correct sequence?",
    options: [
      "Assess the patient's response, Activate ERS, check carotid pulse, Start CPR",
      "Check carotid pulse, Start CPR, Call for help and activate ERS, Defibrillate",
      "Defibrillate, Assess response, Check carotid pulse, Maintain airway",
      "Start CPR, Activate ERS, Defibrillate, Check pulse"
    ],
    correctIndex: 0,
    explanation: "The BLS sequence is: 1. Verify scene safety. 2. Assess responsiveness. 3. Shout for help/Activate ERS. 4. Check breathing and carotid pulse simultaneously (max 10s). 5. Start CPR if no pulse.",
    topicsCovered: ["CPR", "BLS"],
    year: 2017,
    examSession: "AIIMS"
  },

  // AIIMS 2018
  {
    id: "aiims-2018-q1",
    question: "A patient is undergoing modified radical neck dissection (MRND) for laryngeal malignancy. While ligating the internal jugular vein, his etCO2 dropped from 40 mmHg to 14 mmHg, and the patient developed hypotension along with cardiac arrhythmia. Which of the following is the most likely cause?",
    options: [
      "Sympathetic overactivity",
      "Vagal stimulation",
      "Venous air embolism",
      "Carotid body stimulation"
    ],
    correctIndex: 2,
    explanation: "A drastic fall in etCO2 with hypotension during neck surgery (especially with head-up position and open veins) is classic for Venous Air Embolism (VAE). Air blocks pulmonary circulation, increasing dead space and dropping etCO2.",
    topicsCovered: ["Complications", "Monitoring", "Head and Neck Surgery"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2018-q2",
    question: "At what level does the spinal cord end in adults?",
    options: [
      "L3-L4",
      "L1-L2",
      "T12-L1",
      "L2-L3"
    ],
    correctIndex: 1,
    explanation: "The spinal cord typically ends at the lower border of L1 in adults. Therefore, L1-L2 allows for the termination point.",
    topicsCovered: ["Regional Anesthesia", "Anatomy"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2018-q3",
    question: "Which of the following is not a contraindication to the use of morphine?",
    options: [
      "Bronchial asthma",
      "Renal failure",
      "Emphysema",
      "Acute myocardial infarction"
    ],
    correctIndex: 3,
    explanation: "Morphine is the opioid of choice for acute myocardial infarction as it relieves anxiety, pain, and reduces myocardial oxygen demand. Asthma, renal failure, and emphysema are relative or absolute contraindications due to histamine release and respiratory depression/metabolite accumulation.",
    topicsCovered: ["Opioids", "Pharmacology"],
    year: 2018,
    examSession: "AIIMS"
  },
  {
    id: "aiims-2018-q4",
    question: "Cardiac output can be determined using the following except?",
    options: [
      "Thermal dilution technique",
      "Capnography",
      "Esophageal doppler",
      "Echocardiography"
    ],
    correctIndex: 1,
    explanation: "Capnography measures end-tidal CO2 to assess ventilation and confirm intubation. It does not measure cardiac output. Thermal dilution, esophageal doppler, and echocardiography are methods to measure cardiac output.",
    topicsCovered: ["Monitoring", "Cardiac Output"],
    year: 2018,
    examSession: "AIIMS"
  },

  // AIIMS 2019
  {
    id: "aiims-2019-q1",
    question: "Which is not an obvious advantage of high pressure oxygen through nasal cannula:",
    options: [
      "Decreases need of intubation",
      "Reduces nasopharyngeal dead space",
      "Heating and humidification",
      "PEEP"
    ],
    correctIndex: 0,
    explanation: "While HFNC *can* reduce the need for intubation in some cases, the question asks for an 'obvious advantage'. The physiological mechanisms are dead space washout, PEEP effect, and humidification. Decreasing the need for intubation is a clinical *outcome* resulting from these advantages, but in the context of mechanism options, it is often the outlier or the 'result' rather than the direct mechanism/advantage provided by the device mechanics itself. Note: The provided answer key selects (a).",
    topicsCovered: ["Oxygen Therapy", "HFNC"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2019-q2",
    question: "Duration of action of Proparacaine:",
    options: [
      "2 min",
      "5 min",
      "40 min",
      "20 min"
    ],
    correctIndex: 3,
    explanation: "The duration of action of proparacaine (topical ophthalmic anesthetic) is approximately 10-20 minutes.",
    topicsCovered: ["Local Anesthesia", "Pharmacology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2019-q3",
    question: "Glycopyrrolate is used as a pre-anesthetic agent for:",
    options: [
      "Reducing the secretions",
      "Sedative effect",
      "Skeletal muscle relaxant",
      "Anxiolytic"
    ],
    correctIndex: 0,
    explanation: "Glycopyrrolate is an anticholinergic used to reduce secretions (antisialagogue). It does not cross the blood-brain barrier, so it lacks sedative or anxiolytic effects.",
    topicsCovered: ["Pre-anesthetic Medication", "Pharmacology"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2019-q4",
    question: "Identify the device shown in the image below. [Image of an AED]",
    options: [
      "Automated External Desynchonizer",
      "Automated External Defibrillator",
      "Automated Electronic Defibrillator",
      "Automated External decompressor"
    ],
    correctIndex: 1,
    explanation: "The device shown is an Automated External Defibrillator (AED), used for recognizing and treating shockable rhythms in cardiac arrest.",
    topicsCovered: ["Equipment", "Resuscitation"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2019-q5",
    question: "You are an intern posted in the ICU. While taking a blood sample for ABG, which of the following steps would you not do?",
    options: [
      "Normal ph can't rule out acid base disorder",
      "Add 0.5 ml Heparin to the syringe before taking blood",
      "If modified Allens test is negative, alternate site is chosen",
      "Radial artery is the preferred site"
    ],
    correctIndex: 1,
    explanation: "You should NOT add 0.5 ml of heparin. Only a very small amount (0.05-0.1 ml) is needed to coat the syringe. Excess heparin is acidic and can alter ABG values (dilutional effect).",
    topicsCovered: ["Procedures", "ABG"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2019-q6",
    question: "Which of the following is not a risk factor for postoperative pulmonary complications?",
    options: [
      "BMI > 30",
      "Well controlled asthma",
      "Upper abdominal surgery",
      "Age > 70 years"
    ],
    correctIndex: 1,
    explanation: "Well-controlled asthma is not considered a significant risk factor for postoperative pulmonary complications compared to age, obesity, COPD, or upper abdominal/thoracic surgery.",
    topicsCovered: ["Postoperative Complications", "Respiratory System"],
    year: 2019,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2019-q7",
    question: "Which of the following is associated with respiratory alkalosis?",
    options: [
      "Assisted control mode ventilation",
      "Controlled mandatory",
      "Pressure controlled",
      "SIMV"
    ],
    correctIndex: 0,
    explanation: "In Assist Control (AC) mode, every patient effort triggers a full machine breath. If the patient is tachypneic (e.g., due to pain or anxiety), this leads to hyperventilation and respiratory alkalosis.",
    topicsCovered: ["Mechanical Ventilation"],
    year: 2019,
    examSession: "May & Nov"
  },

  // AIIMS 2020
  {
    id: "aiims-2020-q1",
    question: "A patient of blunt chest trauma has been started on mechanical ventilation. Which of the following is not correct about the initial setting?",
    options: [
      "Respiratory rate - 12 Breaths/ min",
      "PEEP - 5cm H20",
      "FiO2- 100%",
      "Tidal volume - 12ml/kg of actual BW"
    ],
    correctIndex: 3,
    explanation: "Initial tidal volume should be 4-6 ml/kg of Ideal Body Weight (IBW), not 12 ml/kg. 12 ml/kg is too high and can cause volutrauma.",
    topicsCovered: ["Mechanical Ventilation", "Trauma"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q2",
    question: "Glycopyrrolate is used as a pre-anesthetic agent for:",
    options: [
      "Reducing the secretions",
      "Sedative effect",
      "Skeletal muscle relaxant",
      "Anxiolytic"
    ],
    correctIndex: 0,
    explanation: "Glycopyrrolate is an anticholinergic used to reduce secretions. It does not cross the blood-brain barrier and has no sedative effects.",
    topicsCovered: ["Pre-anesthetic Medication", "Pharmacology"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q3",
    question: "Cardiac output can be determined using the following except?",
    options: [
      "Thermal dilution technique",
      "Capnography",
      "Esophageal doppler",
      "Echocardiography"
    ],
    correctIndex: 1,
    explanation: "Capnography measures end-tidal CO2 for ventilation assessment, not cardiac output. Thermal dilution is the gold standard for CO monitoring.",
    topicsCovered: ["Monitoring", "Cardiac Output"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q4",
    question: "Identify the equipment shown in the image below. [Image of HFNC setup]",
    options: [
      "Mechanical ventilator",
      "Infusion pump",
      "CPAP machine",
      "High flow nasal cannula"
    ],
    correctIndex: 3,
    explanation: "The image depicts a High Flow Nasal Cannula (HFNC) setup (specific device shown is typically AIRVO or similar with humidifier). It delivers heated, humidified oxygen at high flow rates.",
    topicsCovered: ["Oxygen Therapy", "Equipment"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q5",
    question: "The blue pipeline in the operation theatre is used for delivering which of the following gases?",
    options: [
      "Oxygen",
      "Nitrous oxide",
      "Air",
      "Vacuum"
    ],
    correctIndex: 1,
    explanation: "Blue is the color code for Nitrous Oxide. White is for Oxygen, Black (or Black/White) for Air, and Yellow for Vacuum.",
    topicsCovered: ["Medical Gas Supply", "Equipment"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q6",
    question: "The given set of instruments are used in: [Image of Laryngoscope, ETT, Stylet, etc]",
    options: [
      "Central line insertion",
      "Arterial line insertion",
      "Airway management",
      "Umbilical catheter insertion"
    ],
    correctIndex: 2,
    explanation: "The image shows airway equipment including laryngoscope blades, endotracheal tubes, and airways, used for airway management.",
    topicsCovered: ["Airway Management", "Equipment"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q7",
    question: "On your morning walk in the park, you notice an unconscious man lying on the ground. Which of the following options would be the next best step?",
    options: [
      "Check carotid pulse, start CPR, and call for help; Defibrillate if no pulse.",
      "Call for help, check pulse, do CPR, defibrillate if no pulse",
      "Observe",
      "Ignore and continue to walk"
    ],
    correctIndex: 1,
    explanation: "After ensuring scene safety and checking responsiveness (found unconscious), the next immediate step is to Call for Help (Activate Emergency Response System), then check pulse/breathing, then start CPR.",
    topicsCovered: ["BLS", "CPR"],
    year: 2020,
    examSession: "May & Nov"
  },
  {
    id: "aiims-2020-q8",
    question: "Which of the following can be considered as effective CPR? (1. Rate 100-120/min, 2. Depth 5-6cm, 3. Full recoil, 4. Minimize interruptions)",
    options: [
      "1, 2, 3, and 4",
      "1, 2, and 4",
      "2, 3, and 4",
      "1 and 2 only"
    ],
    correctIndex: 2,
    explanation: "Wait, the answer key in the source says (c) '2, 3, and 4'. However, statement 1 (Rate 100-120/min) is also correct for high-quality CPR. Let's re-read the question logic in the source. The source says 'Assuming an adult, statement 1 is incorrect'. The source explanation states 'Ideal rescue breath rate for adults is 10 breaths/min'. Wait, statement 1 in the explanation refers to rescue breaths? The question usually lists options. Looking at the explanation provided in the text, it seems there was a confusion in the source text between compression rate and breath rate or specific options were numbered. Based on standard AHA guidelines: Rate 100-120, Depth 5-6cm, Full Recoil, Minimize interruptions are ALL correct. If the key says C, and the explanation discusses breath rates, the option list in the original question might have had a statement about breath rates labeled as '1'. However, based on the provided text options '1, 2, 3, and 4' usually refer to the bullets. If we assume the text meant compression rate is 100-120, that is correct. If 'Statement 1' was 'Rescue breath rate is 20-30' (as hinted in the explanation discussing child rates), then it would be wrong. Given the provided text options: a) 1,2,3,4; b) 1,2,4; c) 2,3,4; d) 1,2. The source key is C. I will map to the source key C, noting the ambiguity.",
    topicsCovered: ["CPR", "BLS"],
    year: 2020,
    examSession: "May & Nov"
  },

  // NEET 2018
  {
    id: "neet-2018-q1",
    question: "What is the mechanism of action of the curare group of muscle relaxants?",
    options: [
      "Persistently depolarizing at neuromuscular junction",
      "Competitively blocking the binding of ACh to its receptors",
      "Repetitive stimulation of ACh receptors on muscle endplate",
      "Inhibiting the calcium channels on presynaptic membrane"
    ],
    correctIndex: 1,
    explanation: "Curare group (Non-depolarizing muscle relaxants) acts by competitively blocking the binding of Acetylcholine (ACh) to nicotinic receptors at the neuromuscular junction.",
    topicsCovered: ["Neuromuscular Blockers", "Pharmacology"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "neet-2018-q2",
    question: "Which of the following nerves is popularly used in clinical anaesthesia to monitor neuromuscular blockade?",
    options: [
      "Ulnar Nerve",
      "Median Nerve",
      "Radial nerve",
      "Mandibular nerve"
    ],
    correctIndex: 0,
    explanation: "The ulnar nerve is the most commonly used nerve for neuromuscular monitoring, assessing the adductor pollicis muscle.",
    topicsCovered: ["Neuromuscular Monitoring"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "neet-2018-q3",
    question: "Identify the Mallampatti class of this patient. [Image showing soft palate, fauces, but tip of uvula covered by tongue]",
    options: [
      "Class II",
      "Class I",
      "Class IV",
      "Class III"
    ],
    correctIndex: 0,
    explanation: "Mallampati Class II: Soft palate, fauces, and uvula are visible (though tip might be masked by tongue base, fauces are still visible). Class I shows pillars. Class III shows only soft palate/base of uvula. Class IV shows only hard palate.",
    topicsCovered: ["Airway Assessment", "Mallampati Score"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "neet-2018-q4",
    question: "In which of the following devices is Murphy's eye seen?",
    options: [
      "Nasopharyngeal airway",
      "Laryngoscope",
      "Bronchoscope",
      "Endotracheal tube"
    ],
    correctIndex: 3,
    explanation: "Murphy's eye is a side hole at the distal end of an Endotracheal Tube (ETT) to allow airflow if the bevel is occluded.",
    topicsCovered: ["Airway Equipment"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "neet-2018-q5",
    question: "What is the most effective circuit for anaesthesia under spontaneous breathing?",
    options: [
      "Mapleson A",
      "Mapleson B",
      "Mapleson C",
      "Mapleson D"
    ],
    correctIndex: 0,
    explanation: "Mapleson A (Magill's circuit) is the most efficient/effective circuit for spontaneous ventilation because the fresh gas flow requirement is low (equal to minute ventilation).",
    topicsCovered: ["Anesthesia Circuits"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "neet-2018-q6",
    question: "The best type of anesthesia for pre eclampsia is:",
    options: [
      "Spinal anesthesia",
      "Epidural anesthesia",
      "General anesthesia",
      "Caudal block"
    ],
    correctIndex: 1,
    explanation: "Continuous Epidural Anesthesia is preferred in pre-eclampsia as it provides hemodynamic stability, avoids intubation (airway edema risk), and improves uteroplacental perfusion. Spinal can cause sudden hypotension.",
    topicsCovered: ["Obstetric Anesthesia", "Pre-eclampsia"],
    year: 2018,
    examSession: "NEET"
  },
  {
    id: "neet-2018-q7",
    question: "What alternative drug would you use for cardiac arrest if epinephrine is not effective?",
    options: [
      "Vasopressin",
      "Atropine",
      "Amiodarone",
      "Adenosine"
    ],
    correctIndex: 2,
    explanation: "In cardiac arrest (VF/pulseless VT), if epinephrine and defibrillation fail, Amiodarone is the antiarrhythmic drug of choice.",
    topicsCovered: ["ACLS", "Cardiac Arrest"],
    year: 2018,
    examSession: "NEET"
  },

  // NEET 2019
  {
    id: "neet-2019-q1",
    question: "What is the mechanism of action of the curare group of muscle relaxants?",
    options: [
      "Persistently depolarizing at neuromuscular junction",
      "Competitively blocking the binding of ACh to its receptors",
      "Repetitive stimulation of ACh receptors on muscle endplate",
      "Inhibiting the calcium channels on presynaptic membrane"
    ],
    correctIndex: 1,
    explanation: "Curare drugs are non-depolarizing blockers that competitively inhibit ACh binding at the nicotinic receptors on the motor end plate.",
    topicsCovered: ["Neuromuscular Blockers", "Pharmacology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "neet-2019-q2",
    question: "Which among the following IV anaesthetics does not cause myocardial depression?",
    options: [
      "Etomidate",
      "Propofol",
      "Thiopentone",
      "Ketamine"
    ],
    correctIndex: 0,
    explanation: "Etomidate is the most cardio-stable IV induction agent and causes minimal myocardial depression. Ketamine causes sympathetic stimulation (indirectly increasing BP/HR) but has direct negative inotropy; in shock, it can depress the heart. Etomidate is the classic answer for cardiac stability.",
    topicsCovered: ["Intravenous Anesthetics", "Pharmacology"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "neet-2019-q3",
    question: "Which of the following is not used for induction of anaesthesia in pediatric patients?",
    options: [
      "Halothane",
      "Sevoflurane",
      "Desflurane",
      "Nitrous oxide"
    ],
    correctIndex: 2,
    explanation: "Desflurane is extremely pungent and causes airway irritation, coughing, and laryngospasm, making it unsuitable for inhalational induction, especially in children.",
    topicsCovered: ["Inhalational Anesthetics", "Pediatric Anesthesia"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "neet-2019-q4",
    question: "Which of the following agents does not elicit pain on injection?",
    options: [
      "Ketamine",
      "Propofol",
      "Etomidate",
      "Thiopentone"
    ],
    correctIndex: 0,
    explanation: "Ketamine typically does not cause pain on injection. Propofol and Etomidate are known for causing pain. Thiopentone can cause pain/necrosis if extravasated or intra-arterial, but ketamine is the best answer for lack of injection pain among the options.",
    topicsCovered: ["Intravenous Anesthetics", "Side Effects"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "neet-2019-q5",
    question: "Which among the following is most commonly used to monitor the depth of anaesthesia?",
    options: [
      "EEG",
      "Provoked lower oesophageal contractility",
      "Entropy",
      "Bispectral index"
    ],
    correctIndex: 3,
    explanation: "Bispectral Index (BIS) is the most commonly used processed EEG parameter to monitor the depth of anesthesia.",
    topicsCovered: ["Monitoring", "Depth of Anesthesia"],
    year: 2019,
    examSession: "NEET"
  },
  {
    id: "neet-2019-q6",
    question: "Which of the following is measured by the device shown in the given image? [Image of Pulse Oximeter]",
    options: [
      "Oxygen saturation",
      "Oxygen content of the blood",
      "Partial pressure of oxygen",
      "Amount of inspired oxygen"
    ],
    correctIndex: 0,
    explanation: "A pulse oximeter measures peripheral oxygen saturation (SpO2) and pulse rate. It does not measure partial pressure (PaO2) or content.",
    topicsCovered: ["Monitoring", "Pulse Oximetry"],
    year: 2019,
    examSession: "NEET"
  },

  // NEET 2020
  {
    id: "neet-2020-q1",
    question: "Which of the following investigations provides the most accurate prognostic information with respect to predicting risks of perioperative cardiac complications?",
    options: [
      "Exercise ECG testing",
      "Dobutamine stress echocardiography",
      "Myocardial perfusion scintigraphy",
      "Coronary angiography"
    ],
    correctIndex: 1,
    explanation: "Dobutamine stress echocardiography has the highest positive likelihood ratio and is very accurate for predicting perioperative cardiac risk.",
    topicsCovered: ["Preoperative Assessment", "Cardiac Risk"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "neet-2020-q2",
    question: "A capnograph obtained from an intubated patient undergoing controlled ventilation is given below. Which of the following is a likely cause of the finding seen? [Image showing Curare Cleft/Notch]",
    options: [
      "Esophageal intubation",
      "Inspiration with cardiac oscillations",
      "Bronchospasm",
      "Spontaneous respiratory effort"
    ],
    correctIndex: 3,
    explanation: "The cleft in the alveolar plateau (Curare cleft) indicates spontaneous respiratory effort by the patient during mechanical ventilation (waring off of muscle relaxant).",
    topicsCovered: ["Monitoring", "Capnography"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "neet-2020-q3",
    question: "A 50-year-old patient with a history of hypertension and diabetes mellitus developed the following rhythm [Image of SVT]. His blood pressure was 90/40 mm Hg and he had a feeble pulse. What is the next step of management?",
    options: [
      "IV adenosine",
      "IV diltiazem",
      "DC cardioversion",
      "Ibutilide"
    ],
    correctIndex: 2,
    explanation: "The patient is hemodynamically unstable (BP 90/40, feeble pulse) with SVT. The treatment of choice for unstable SVT is synchronized DC cardioversion.",
    topicsCovered: ["ACLS", "Arrhythmia Management"],
    year: 2020,
    examSession: "NEET"
  },
  {
    id: "neet-2020-q4",
    question: "A patient is given a nicotinic receptor antagonist as a muscle relaxant. Which drug is given postoperatively to recover from muscle weakness?",
    options: [
      "Physostigmine",
      "Neostigmine",
      "Carbachol",
      "Succinylcholine"
    ],
    correctIndex: 1,
    explanation: "Neostigmine (an acetylcholinesterase inhibitor) is used to reverse the effects of non-depolarizing neuromuscular blockers (nicotinic antagonists) by increasing ACh levels.",
    topicsCovered: ["Neuromuscular Blockers", "Reversal Agents"],
    year: 2020,
    examSession: "NEET"
  },

  // NEET 2021
  {
    id: "neet-2021-q1",
    question: "A patient undergoing surgery is maintained on anesthesia with halothane. During the procedure, the patient suddenly developed hyperthermia and muscle rigidity. Which of the following drugs is most likely implicated in this condition?",
    options: [
      "D-curare",
      "Suxamethonium",
      "Cis-atracurium",
      "Rocuronium"
    ],
    correctIndex: 1,
    explanation: "The clinical presentation suggests Malignant Hyperthermia. The classic triggers are Halothane (inhaled anesthetic) and Suxamethonium (Succinylcholine - depolarizing muscle relaxant).",
    topicsCovered: ["Complications", "Malignant Hyperthermia"],
    year: 2021,
    examSession: "NEET"
  },
  {
    id: "neet-2021-q2",
    question: "A 30-year-old male patient was intubated for surgery by a final-year resident. Which of the following is the best method to confirm the position of the endotracheal tube?",
    options: [
      "X-ray chest",
      "Auscultation",
      "End-tidal CO2 concentration",
      "Chest rise"
    ],
    correctIndex: 2,
    explanation: "Capnography (End-tidal CO2) is the gold standard (most reliable method) for confirming endotracheal tube placement.",
    topicsCovered: ["Airway Management", "Monitoring"],
    year: 2021,
    examSession: "NEET"
  },
  {
    id: "neet-2021-q3",
    question: "What is the maneuver being performed in the given image? [Image of Head Tilt Chin Lift]",
    options: [
      "Head tilt, chin lift",
      "Jaw thrust",
      "Head extension",
      "In line manual stabilisation"
    ],
    correctIndex: 0,
    explanation: "The image depicts the Head Tilt-Chin Lift maneuver, used to open the airway in unconscious patients without cervical spine injury.",
    topicsCovered: ["Airway Management", "BLS"],
    year: 2021,
    examSession: "NEET"
  },
  {
    id: "neet-2021-q4",
    question: "A patient presented with headache, vomiting, and fever. Meningitis was suspected. While performing a lumbar puncture, which is the last structure you will pierce just before entering the lumbar cistern?",
    options: [
      "Ligamentum flavum",
      "Dura mater",
      "Arachnoid membrane",
      "Pia mater"
    ],
    correctIndex: 2,
    explanation: "The needle passes through the Dura mater and then the Arachnoid membrane to enter the subarachnoid space (lumbar cistern). The Arachnoid is the last structure pierced.",
    topicsCovered: ["Regional Anesthesia", "Anatomy"],
    year: 2021,
    examSession: "NEET"
  },
  {
    id: "neet-2021-q5",
    question: "A young male patient was given regional block with 0.25% bupivacaine for a minor surgical procedure. Shortly after the injection, the patient suddenly became unresponsive and the pulse was not recordable. Which of the following would be the best course of management for this patient?",
    options: [
      "CPR with 20% intralipid",
      "CPR with sodium bicarbonate",
      "CPR with dobutamine",
      "CPR with calcium"
    ],
    correctIndex: 0,
    explanation: "The scenario describes Local Anesthetic Systemic Toxicity (LAST) causing cardiac arrest. The specific antidote is 20% Lipid Emulsion (Intralipid), along with CPR.",
    topicsCovered: ["Complications", "LAST"],
    year: 2021,
    examSession: "NEET"
  },

  // INI-CET 2021
  {
    id: "inicet-2021-q1",
    question: "Ventilatory support is required if SpO2 becomes less than 90% because",
    options: [
      "Tissues become vulnerable for hypoxia below 90%.",
      "Peripheral chemoreceptors becomes insensitive to hypoxia below 90%.",
      "Central chemoreceptors becomes insensitive to hypoxia below 90%.",
      "Patient capacity to generate adequate tidal volume decreases below 90%."
    ],
    correctIndex: 0,
    explanation: "Below 90% SpO2 (corresponding to PaO2 < 60 mmHg), the oxygen dissociation curve drops steeply, causing tissues to become vulnerable to hypoxia.",
    topicsCovered: ["Respiratory Physiology", "Oxygen Therapy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q2",
    question: "In conventional oxygen therapy, which device will deliver highest FiO2?",
    options: [
      "Venturi mask",
      "Hudson mask",
      "Non rebreathing mask",
      "Nasal cannula"
    ],
    correctIndex: 2,
    explanation: "Non-rebreathing mask (NRBM) with a reservoir bag can deliver the highest FiO2 (up to 90-100%) among conventional devices.",
    topicsCovered: ["Oxygen Therapy", "Equipment"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q3",
    question: "What is the nerve blocked in the following local anesthesia technique? [Image of Nasociliary block]",
    options: [
      "Nasociliary nerve",
      "Anterior ethmoidal nerve",
      "Sphenopalatine nerve",
      "Greater palatine nerve"
    ],
    correctIndex: 0,
    explanation: "The image shows a block performed at the medial canthus, targeting the Nasociliary nerve (part of ophthalmic division of trigeminal).",
    topicsCovered: ["Regional Anesthesia", "Nerve Blocks"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q4",
    question: "How long should elective surgery be deferred for a patient who had cough and fever, after he has recovered from COVID-19, and had not required any hospitalization?",
    options: [
      "6 weeks",
      "8-10 weeks",
      "12 weeks",
      "4 weeks"
    ],
    correctIndex: 0,
    explanation: "ASA guidelines suggest deferring elective surgery for 6 weeks for a symptomatic patient (e.g., cough, dyspnea) who did not require hospitalization.",
    topicsCovered: ["Preoperative Assessment", "COVID-19 Guidelines"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q5",
    question: "A 42-year-old man who was under home isolation after testing positive for COVID-19, develops breathing difficulty and is brought to the ER... SpO2 is measured to be 86%. He is administered oxygen via a face mask... SpO2 is 88%. What is the next step in management?",
    options: [
      "Increase flow rate to 15 L/min",
      "High-flow nasal cannula oxygen therapy",
      "Endotracheal intubation",
      "No specific intervention necessary"
    ],
    correctIndex: 1,
    explanation: "If standard oxygen therapy fails to maintain saturation, High-Flow Nasal Cannula (HFNC) is the next step to improve oxygenation and avoid intubation in COVID-19 patients.",
    topicsCovered: ["COVID-19 Management", "Oxygen Therapy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q6",
    question: "What is the mechanism of action of local anesthetics?",
    options: [
      "Block sodium channels",
      "Block potassium channels",
      "Block calcium channels",
      "Block chloride channels"
    ],
    correctIndex: 0,
    explanation: "Local anesthetics work by blocking voltage-gated Sodium channels, preventing depolarization and nerve impulse transmission.",
    topicsCovered: ["Local Anesthesia", "Pharmacology"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q7",
    question: "You are in the operating room and notice the tracing in yellow color on this device. What does it indicate?",
    options: [
      "Capnography",
      "Airway pressure",
      "O2 pressure in inhaled air",
      "O2 pressure in exhaled air"
    ],
    correctIndex: 0,
    explanation: "The waveform shown (square wave) is typical of Capnography (EtCO2 tracing).",
    topicsCovered: ["Monitoring", "Capnography"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q8",
    question: "What is the most common cause for hospital admission after day care surgery?",
    options: [
      "Respiratory distress",
      "Post surgical pain",
      "Postoperative nausea and vomiting",
      "Bleeding"
    ],
    correctIndex: 2,
    explanation: "Postoperative Nausea and Vomiting (PONV) is the most common cause of unanticipated hospital admission following ambulatory/day care surgery.",
    topicsCovered: ["Day Care Surgery", "Complications"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q9",
    question: "What is the frequency of tetanic stimulation used in neuromuscular monitoring?",
    options: [
      "0.2 Hz",
      "2 Hz",
      "20 Hz",
      "50 Hz"
    ],
    correctIndex: 3,
    explanation: "Tetanic stimulation typically uses a high frequency, most commonly 50 Hz (or 100 Hz) for 5 seconds.",
    topicsCovered: ["Monitoring", "Neuromuscular Blockade"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q10",
    question: "A 60-year-old male patient was undergoing laparoscopic cholecystectomy. During the surgery, a sudden drop in EtCO2 to 8 mmHg was noted. His SpO2 became 90%, his blood pressure dropped to 80/50 mmHg... What is the diagnosis?",
    options: [
      "Both 1 and 2",
      "Both 3 and 4",
      "1 only",
      "2 only"
    ],
    correctIndex: 3,
    explanation: "(Assuming options correspond to diagnoses like CO2 embolism vs others). A sudden drop in EtCO2 with hypotension during laparoscopy is highly suggestive of CO2 Embolism (Gas Embolism).",
    topicsCovered: ["Complications", "Laparoscopy"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q11",
    question: "The maximum oxygen flow rate which can be kept with a conventional oxygen mask is",
    options: [
      "5 L/min",
      "15 L/min",
      "10 L/min",
      "20 L/min"
    ],
    correctIndex: 0,
    explanation: "Wait, Simple Face Mask flow range is 5-10 L/min. However, the question asks for 'maximum flow rate'. The explanation says 10 L/min for simple mask, but discusses 'Conventional Oxygen Therapy' encompassing other devices up to 15 L/min. Based on the provided key 'a' (5 L/min) seems incorrect as a *maximum*, usually 5L is the *minimum* to wash out CO2. Let's review the key. The provided key says 'a' (5 L/min). The explanation clarifies 'If question is about maximum flow rate with conventional oxygen mask, it would be 10L/min'. It seems there might be a mismatch or a specific context. However, standard teaching is 5-10 L/min. 5L is minimum. 10L is max. If the question meant *minimum* flow to prevent rebreathing, 5 L/min is the answer. Given the ambiguity, I will stick to the provided key 'a' but note the explanation says 10.",
    topicsCovered: ["Oxygen Therapy", "Equipment"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q12",
    question: "Which of the following can be used for induction of anesthesia, maintenance and can be safely used in endotracheal intubation?",
    options: [
      "Halothane",
      "Desflurane",
      "Sevoflurane",
      "Isoflurane"
    ],
    correctIndex: 2,
    explanation: "Sevoflurane is sweet-smelling, non-pungent, and allows for rapid induction and intubation. It is the agent of choice for inhalational induction.",
    topicsCovered: ["Inhalational Anesthetics"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q13",
    question: "During resuscitation, a patient received a 20% Intralipid injection. What could have been the most probable diagnosis?",
    options: [
      "Local anaesthesia toxicity",
      "Asphxyia due to drowning",
      "Electrocution",
      "Pulseless electrical activity"
    ],
    correctIndex: 0,
    explanation: "20% Lipid Emulsion (Intralipid) is the specific antidote for Local Anesthetic Systemic Toxicity (LAST).",
    topicsCovered: ["Complications", "LAST"],
    year: 2021,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2021-q14",
    question: "A 50-year-old male patient has grade 3 ASA. Which of the following postbronchodilator PFT findings requires further evaluation of the lung function of the patient?",
    options: [
      "FEV1 < 0.85 and FEV1/FVC <0.8",
      "FEV1 < 0.85 and FEV1/FVC <0.75",
      "FEV1 < 0.8 and FEV1/FVC <0.7",
      "FEV1 < 0.8 and FEV1/FVC <0.75"
    ],
    correctIndex: 2,
    explanation: "FEV1/FVC < 0.7 is diagnostic for COPD. FEV1 < 0.8 (80%) indicates severity. These values suggest moderate to severe lung disease requiring further evaluation/optimization.",
    topicsCovered: ["Preoperative Assessment", "PFT"],
    year: 2021,
    examSession: "INI-CET"
  },

  // NEET 2022
  {
    id: "neet-2022-q1",
    question: "The image given below shows neuromuscular monitoring of the patient after anesthesia. What is the most commonly used nerve for monitoring?",
    options: [
      "Ulnar nerve",
      "Median nerve",
      "Radial nerve",
      "Metacarpal nerve"
    ],
    correctIndex: 0,
    explanation: "The Ulnar nerve (stimulating Adductor Pollicis) is the standard and most commonly used site for neuromuscular monitoring.",
    topicsCovered: ["Monitoring", "Neuromuscular Blockade"],
    year: 2022,
    examSession: "NEET"
  },
  {
    id: "neet-2022-q2",
    question: "Identify the mask in the image used for patients with COVID-19 infection.",
    options: [
      "Venturi mask",
      "Hudson mask",
      "Nebuliser",
      "Non-rebreathing mask"
    ],
    correctIndex: 3,
    explanation: "The image (mask with reservoir bag) represents a Non-Rebreathing Mask (NRBM), often used in COVID-19 for high FiO2 delivery.",
    topicsCovered: ["Oxygen Therapy", "Equipment"],
    year: 2022,
    examSession: "NEET"
  },

  // INI-CET 2022
  {
    id: "inicet-2022-q1",
    question: "Arrange the following anesthetic agents on the basis of their potency.",
    options: [
      "Methoxyflurane> Halothane> Isoflurane> Nitrous oxide",
      "Methoxyflurane> Isoflurane> Halothane> Nitrous oxide",
      "Methoxyflurane> Nitrous oxide> Halothane> Isoflurane",
      "Halothane> Isoflurane> Nitrous oxide> Methoxyflurane"
    ],
    correctIndex: 0,
    explanation: "Potency is inversely proportional to MAC. Methoxyflurane (lowest MAC) > Halothane > Isoflurane > Nitrous Oxide (highest MAC).",
    topicsCovered: ["Inhalational Anesthetics", "Pharmacology"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2022-q2",
    question: "Which of the following local anaesthetic causes hypertension?",
    options: [
      "Cocaine",
      "Lignocaine",
      "Bupivacaine",
      "Prilocaine"
    ],
    correctIndex: 0,
    explanation: "Cocaine blocks reuptake of norepinephrine, causing sympathetic stimulation, hypertension, and tachycardia. Other LAs are generally vasodilators (except Ropivacaine/Lidocaine which are less so, but Cocaine is the classic vasoconstrictor/hypertensive agent).",
    topicsCovered: ["Local Anesthesia", "Pharmacology"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2022-q3",
    question: "Which of the following is required for the cannulation of a newborn?",
    options: [
      "1,3,4,5",
      "2,3,4,5",
      "2,4",
      "1,4"
    ],
    correctIndex: 1,
    explanation: "Assuming the numbers refer to equipment sizes. For newborns, a 24G needle is typically used.",
    topicsCovered: ["Pediatric Anesthesia", "Equipment"],
    year: 2022,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2022-q4",
    question: "Identify the incorrect statement in rapid sequence intubation?",
    options: [
      "Preoxygenation with 100% oxygen for 3 min is done.",
      "High-volume low-pressure cuff is used.",
      "It is the method of choice in cardiac arrest patient.",
      "Induction agent and muscle relaxant are given simultaneously."
    ],
    correctIndex: 2,
    explanation: "RSI is used for full stomach/risk of aspiration. In Cardiac Arrest, the patient is already unconscious and apneic; immediate intubation (often without drugs) or CPR is priority. RSI implies administering drugs, which isn't the standard 'choice' terminology for arrest management (where we just intubate or use LMA).",
    topicsCovered: ["Airway Management", "RSI"],
    year: 2022,
    examSession: "INI-CET"
  },

  // NEET 2023
  {
    id: "neet-2023-q1",
    question: "Identify the maneuver being performed in the given image.",
    options: [
      "Head tilt, chin lift",
      "Jaw thrust",
      "Head extension",
      "In line manual stabilization"
    ],
    correctIndex: 0,
    explanation: "The image depicts Head Tilt-Chin Lift maneuver to open airway.",
    topicsCovered: ["Airway Management"],
    year: 2023,
    examSession: "NEET"
  },
  {
    id: "neet-2023-q2",
    question: "Which of the following is the drug of choice for preoperative antibiotic prophylaxis in a patient undergoing cardiac surgery?",
    options: [
      "Penicillin G",
      "Erythromycin",
      "Azithromycin",
      "Cefazolin"
    ],
    correctIndex: 3,
    explanation: "Cefazolin (1st/2nd gen Cephalosporin) is the standard prophylactic antibiotic for cardiac surgery to cover skin flora (Staph aureus).",
    topicsCovered: ["Perioperative Care", "Antibiotics"],
    year: 2023,
    examSession: "NEET"
  },
  {
    id: "neet-2023-q3",
    question: "During resuscitation, when is the given position indicated? [Image of Recovery Position]",
    options: [
      "Unconsciousness with pulse and breathing absent",
      "Unconsciousness with pulse present and breathing absent",
      "Unconsciousness with pulse and breathing present",
      "Unconsciousness with pulse absent and breathing present"
    ],
    correctIndex: 2,
    explanation: "The recovery position is used for unconscious patients who are breathing spontaneously and have a pulse, to maintain the airway and prevent aspiration.",
    topicsCovered: ["BLS", "First Aid"],
    year: 2023,
    examSession: "NEET"
  },

  // INI-CET 2023
  {
    id: "inicet-2023-q1",
    question: "A patient who is under general anaesthesia shows the following finding on the ET CO2 monitor. Which condition can lead to this characteristic waveform on capnography? [Image showing Shark Fin pattern]",
    options: [
      "Malignant hyperthermia",
      "Bronchospasm",
      "Rebreathing",
      "Accidental extubation"
    ],
    correctIndex: 1,
    explanation: "The 'Shark Fin' appearance (slow upstroke of phase 2) on capnography indicates expiratory obstruction, classic for Bronchospasm/Asthma/COPD.",
    topicsCovered: ["Monitoring", "Capnography"],
    year: 2023,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2023-q2",
    question: "In a patient with thrombocytopenia, platelet transfusion is done when the platelet level drops below a threshold. To proceed with surgery, platelet transfusion is done to achieve a platelet level of?",
    options: [
      "30,000",
      "40,000",
      "50,000",
      "60,000"
    ],
    correctIndex: 2,
    explanation: "For most major surgeries, a platelet count of >50,000/mm3 is recommended to ensure adequate hemostasis.",
    topicsCovered: ["Preoperative Assessment", "Hematology"],
    year: 2023,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2023-q3",
    question: "The presence of which of the following indicates that CPR is of high quality?",
    options: [
      "2, 3 only",
      "1, 3, 4 only",
      "1, 2, 3, 4",
      "1 only"
    ],
    correctIndex: 1,
    explanation: "High quality CPR includes: Rate 100-120, Depth 5-6cm, Full recoil, Minimal interruptions. (Assuming the options correspond to these criteria).",
    topicsCovered: ["CPR", "ACLS"],
    year: 2023,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2023-q4",
    question: "A 70 kg patient who presented to the emergency with acute pancreatitis was shifted to the ICU and intubated... PaO2 110, SpO2 100% on FiO2 90%. What would be the next step?",
    options: [
      "Increase PEEP to 16",
      "Increase tidal volume",
      "Reduce respiratory rate",
      "Reduce FiO2"
    ],
    correctIndex: 3,
    explanation: "The patient has hyperoxia (PaO2 110, SpO2 100%). The goal in ARDS/ICU is SpO2 88-95% or PaO2 55-80 to avoid oxygen toxicity. Therefore, reduce FiO2.",
    topicsCovered: ["Critical Care", "Mechanical Ventilation"],
    year: 2023,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2023-q5",
    question: "Which of the following best represents the American Society of Anesthesiologists (ASA) physical status III?",
    options: [
      "Mild systemic disease",
      "Moderate systemic disease",
      "Severe systemic disease",
      "Severe systemic disease with threat to life"
    ],
    correctIndex: 2,
    explanation: "ASA III is defined as 'Severe systemic disease' (limiting activity but not incapacitating). ASA II is Mild/Moderate. ASA IV is Severe threat to life.",
    topicsCovered: ["Preoperative Assessment", "ASA Classification"],
    year: 2023,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2023-q6",
    question: "A 5-year-old is on 3L/min O2 via a nasal cannula. What is the appropriate FiO2 level for this child?",
    options: [
      "25",
      "30",
      "45",
      "60"
    ],
    correctIndex: 1,
    explanation: "Approximate FiO2 formula: 21 + (4 x Flow). For 3L: 21 + (4*3) = 33%. 30% is the closest appropriate option given typical pediatric entrainment.",
    topicsCovered: ["Oxygen Therapy", "Pediatrics"],
    year: 2023,
    examSession: "INI-CET"
  },

  // INI-CET 2024
  {
    id: "inicet-2024-q1",
    question: "Which of the following is a 2nd generation LMA device?",
    options: [
      "Intubating LMA",
      "Proseal LMA",
      "Flexible LMA",
      "Ambu LMA"
    ],
    correctIndex: 1,
    explanation: "Proseal LMA (and I-Gel, LMA Supreme) are 2nd generation devices featuring a gastric drain tube. Classic, Flexible, and Intubating LMA are 1st generation.",
    topicsCovered: ["Airway Management", "LMA"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q2",
    question: "A patient was planned for surgery... rocuronium 85 mg was given... failed intubation. Which of the following drugs can be given for immediate reversal of the drug?",
    options: [
      "Neostigmine",
      "Glycopyrrolate",
      "Sugammadex",
      "Edrophonium"
    ],
    correctIndex: 2,
    explanation: "Sugammadex is the specific reversal agent for Rocuronium (and Vecuronium). It encapsulates the drug, allowing immediate reversal even of deep block/failed intubation scenarios (16 mg/kg dose for immediate reversal).",
    topicsCovered: ["Neuromuscular Blockers", "Reversal Agents"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q3",
    question: "Which of the following are components of high-quality cardio-pulmonary resuscitation(CPR) in adults?",
    options: [
      "1,2 and 3",
      "1,3 and 4",
      "2,3 and 4",
      "3 and 4 only"
    ],
    correctIndex: 1,
    explanation: "High quality CPR: Rate 100-120/min, Depth at least 5cm (2 inches) but not >6cm, Allow Full Recoil, Minimize Interruptions.",
    topicsCovered: ["CPR", "BLS"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q4",
    question: "What is the inhalational anaesthetic agent used for induction in children?",
    options: [
      "Nitrous oxide",
      "Isoflurane",
      "Sevoflurane",
      "Desflurane"
    ],
    correctIndex: 2,
    explanation: "Sevoflurane is the agent of choice for inhalational induction in children because it is non-pungent and has a rapid onset.",
    topicsCovered: ["Pediatric Anesthesia", "Inhalational Anesthetics"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q5",
    question: "Ambu Aura 40 is an example of?",
    options: [
      "Supraglottic laryngeal airway generation 1",
      "Supraglottic laryngeal airway generation 2",
      "Supraglottic laryngeal airway generation 3",
      "Supraglottic laryngeal airway generation 4"
    ],
    correctIndex: 0,
    explanation: "Ambu Aura 40 is a reusable Laryngeal Mask Airway, considered a 1st generation device (no gastric channel). Note: Ambu AuraGain is 2nd gen.",
    topicsCovered: ["Airway Management", "Equipment"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q6",
    question: "Which of the following drugs causes adrenal suppression?",
    options: [
      "Thiopental",
      "Ketamine",
      "Etomidate",
      "Propofol"
    ],
    correctIndex: 2,
    explanation: "Etomidate inhibits 11-beta-hydroxylase, causing reversible adrenal suppression (cortisol synthesis inhibition).",
    topicsCovered: ["Intravenous Anesthetics", "Pharmacology"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q7",
    question: "Which of the following is incorrect regarding thiopentone?",
    options: [
      "It is lipid soluble",
      "It achieves maximum concentration in the brain after an IV infusion",
      "Redistribution to adipose tissue and muscle is seen",
      "Rapid decline in its effect is due to renal excretion"
    ],
    correctIndex: 3,
    explanation: "Thiopentone's effect terminates due to REDISTRIBUTION, not renal excretion. It is highly lipid soluble.",
    topicsCovered: ["Intravenous Anesthetics", "Pharmacokinetics"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q8",
    question: "A female following an RTA injured her chest. On X-ray, a fracture of 3 to 5th ribs was noted. Pain was not responsive to analgesics. Which block will be given to reduce the pain?",
    options: [
      "Cervical block",
      "Thoracic epidural block",
      "Supraclavicular block",
      "Lumbar epidural block"
    ],
    correctIndex: 1,
    explanation: "Thoracic epidural analgesia is the gold standard for pain management in multiple rib fractures to improve mechanics and prevent respiratory complications.",
    topicsCovered: ["Regional Anesthesia", "Pain Management"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q9",
    question: "Which of the following will lead to a decrease in diastolic BP?",
    options: [
      "Systemic infusion of alpha-adrenergic blocker",
      "Systemic infusion of smooth muscle relaxant",
      "Loss of lumbar sympathetic outflow",
      "Systemic infusion of beta-1 adrenergic agonist"
    ],
    correctIndex: 2,
    explanation: "Loss of sympathetic outflow (e.g., spinal anesthesia) causes vasodilation, leading to a significant drop in SVR and Diastolic BP.",
    topicsCovered: ["Physiology", "Spinal Anesthesia"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q10",
    question: "Which of the following is true regarding paediatric cardiopulmonary resuscitation?",
    options: [
      "Chest compression at the rate of 30:2 with 2 rescuers",
      "Adenosine via interosseous is preferred over other methods",
      "In chest compression, depth must be at least 1/3rd of the child's chest AP diameter",
      "Adrenaline given in dose 0.01 mg/kg iv/io in 1:1000 concentration"
    ],
    correctIndex: 2,
    explanation: "In pediatric CPR, compression depth should be at least 1/3 of the AP diameter (approx 1.5 inches in infants, 2 inches in children). Ratio for 2 rescuers is 15:2. Adrenaline IV/IO is 1:10,000.",
    topicsCovered: ["Pediatric CPR", "PALS"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q11",
    question: "Which of the following must be avoided in post-cardiac arrest resuscitation care?",
    options: [
      "Maintain MAP over 65",
      "Maintain SpO2 above 94%",
      "Revascularisation procedure if the patient develops ST elevation post-resuscitation",
      "Bring the body temperature down to below 32 degrees, therapeutic hypothermia if unresponsive"
    ],
    correctIndex: 3,
    explanation: "Targeted Temperature Management (TTM) usually targets 32-36°C. Bringing temperature *below* 32°C is generally avoided/not the standard target and carries higher risks. The other options are standard care.",
    topicsCovered: ["Post-Cardiac Arrest Care", "TTM"],
    year: 2024,
    examSession: "INI-CET"
  },
  {
    id: "inicet-2024-q12",
    question: "Jackson Rees circuit is used in",
    options: [
      "Paediatric anaesthesia",
      "Cardiac anaesthesia",
      "Neuro anaesthesia",
      "Obstetric anaesthesia"
    ],
    correctIndex: 0,
    explanation: "Jackson Rees modification of Ayre's T-piece (Mapleson F) is extensively used in pediatric anesthesia due to low resistance and minimal dead space.",
    topicsCovered: ["Anesthesia Circuits", "Pediatric Anesthesia"],
    year: 2024,
    examSession: "INI-CET"
  }
];