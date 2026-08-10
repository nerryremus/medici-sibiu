// Date extrase din "01.07.2026-amb.-clinic-lista-furnizori-in-contract-.pdf"
// Lista furnizorilor de servicii medicale de specialitate din ambulatoriul
// pentru specialități clinice în contract cu CAS Sibiu, la 13.07.2026

const DATA_UPDATED = "13.07.2026";
const DATA_SOURCE = "Casa de Asigurări de Sănătate Sibiu (CAS) - document oficial";

// === CLINICI (furnizori) ===
const CLINICS = {
  // 1
  "alexa-og": { name: "DR.ALEXA DELIA-ALEXANDRA - CABINET MEDICAL OBSTETRICA - GINECOLOGIE", address: "SIBIU - ȘOS.ALBA IULIA, NR.50, ET.I, AP.2", phone: "0741110816" },
  // 2
  "aequalis": { name: "AEQUALIS ORTHOPAEDICA SRL", address: "MEDIAȘ - STR.CARPAȚI, NR.8", phone: "0745149490" },
  // 3
  "arcada": { name: "ARCADA CLINIC SRL", address: "SIBIU - STR.BARSEI, BL.8", phone: "0745514696" },
  // 4
  "aria": { name: "ARIA CLINIC SRL", address: "SIBIU - ȘOS.ALBA IULIA, NR.100", phone: "0269-227773" },
  // 5
  "ban-psih": { name: "BAN COSMINA - CMI PSIHIATRIE", address: "MEDIAȘ - STR.CLOSCA, NR.2, AP.1", phone: "0744492379" },
  // 6
  "beldean": { name: "BELDEAN MED SRL", address: "SIBIU - STR.RAHOVEI, BL.57, AP.3", phone: "0269-243833" },
  // 7
  "bodea-ped": { name: "BODEA RALUCA SIMONA - CMI PEDIATRIE", address: "CISNĂDIE - STR.CINDRELU, NR.4", phone: "0369-429481" },
  // 8
  "bogdan-diabet": { name: "BOGDAN MIRELA - CMI DIABET ZAH.NUTR.ȘI BOLI METABOLICE", address: "AGNITA - STR.SPITALULUI, NR.10", phone: "0745617260" },
  // 9
  "benefic": { name: "CENTRUL MEDICAL BENEFIC SRL", address: "SIBIU - STR.VALEA MARE, NR.8, AP.5", phone: "0269-214040" },
  // 10
  "burian-endo": { name: "BURIAN ADRIANA - CMI ENDOCRINOLOGIE", address: "MEDIAȘ - STR.1 DECEMBRIE, NR.23, AP.15", phone: "0269-214040" },
  // 11
  "burlacu-ped": { name: "BURLACU IURIE - CMI PEDIATRIE", address: "SIBIU - STR.BRAZILOR, NR.1, SC.B, AP.5", phone: "0369-816383" },
  // 12
  "pacala-psih": { name: "CABINET PSIHIATRIE DR.PACALA SRL", address: "SIBIU - STR.BARSEI, NR.4, BL.36, AP.3", phone: "0269225267" },
  // 13
  "calcatinge-onco": { name: "CALCATINGE MARIA DIANA - CMI ONCOLOGIE MEDICALĂ", address: "MEDIAȘ - STR.CLOSCA, NR.2 AP.4", phone: "0269-834534" },
  // 14
  "cardiolab1": { name: "CARDIOLAB SRL", address: "SIBIU - STR.ION AGÂRBICEANU, NR.1", phone: "0749662220" },
  // 15
  "cardiowellness": { name: "CARDIOLAB SRL", address: "SIBIU - STR.SĂLAJULUI, NR.7", phone: "0722885560" },
  // 16
  "praxismed": { name: "CENTRUL MEDICAL PRAXISMED SRL", address: "SIBIU - STR.ȘTEFAN CEL MARE, NR.47, ap.4 / SĂLIȘTE - STR.SPITALULUI, NR.29", phone: "0747060994" },
  // 17
  "stanila": { name: "CENTRUL MEDICAL DR.STĂNILĂ SRL", address: "SIBIU - STR.SEMAFORULUI, NR.4", phone: "0269-436480" },
  // 18
  "stejari": { name: "CENTRUL MEDICAL STEJARI SRL", address: "SIBIU - STR.GORĂSLAU, NR.1, AP.5-6 / TĂLMACIU - STR.N.BĂLCESCU, NR.20", phone: "0369-444189 / 0746524937" },
  // 19
  "sanogyn": { name: "CENTRUL MEDICAL SANOGYN SRL", address: "SIBIU - STR.N.IORGA NR.50A", phone: "0766669065" },
  // 20
  "unirea": { name: "CENTRUL MEDICAL UNIREA SRL", address: "SIBIU - STR.EMIL CIORAN, NR.6", phone: "0722182487" },
  // 30
  "gensan": { name: "GENSAN SRL", address: "SIBIU - STR.P-TA PRAHOVEI, NR.16, PARTER, AP.17A", phone: "0269-206204" },
  // 31
  "gyndia": { name: "GYNDIA NOVA SRL", address: "SIBIU - B-DUL C. COPOSU, NR.10", phone: "0770157807" },
  // 32
  "glucostat": { name: "GLUCO-STAT SRL", address: "SIBIU - B-DUL VASILE MILEA, BL.10, SC.B, ET.P, AP.17", phone: "0770616754" },
  // 33
  "holhos": { name: "HOLHOS OPTIC LINE SRL", address: "MEDIAȘ - ȘOSEAUA SIBIULUI, NR.55 / SIBIU - CALEA DUMBRAVII, NR.111", phone: "0744706944 / 0377702881" },
  // 34
  "interecomed": { name: "INTERECOMED SRL", address: "CISNĂDIE - STR.TESĂTORILOR, NR.1, BL.1, AP.IV", phone: "0369-420320" },
  // 35
  "lucas": { name: "LUCAS MEDICAL SRL", address: "SIBIU - STR.CONSTITUȚIEI, NR.5, BL.1, AP.17", phone: "0763054455" },
  // 36
  "marginean-orl": { name: "MARGINEAN I.GHE. - CMI ORL \"SANOMED\"", address: "SIBIU - DR.IOAN RATIU, NR.4", phone: "0722735272" },
  // 37
  "marinache-ped": { name: "MARINACHE LUMINIȚA - CMI PEDIATRIE", address: "MEDIAȘ - STR.CLOSCA, NR.2", phone: "0369-449550" },
  // 38
  "microfit": { name: "MICROFIT SRL", address: "SIBIU - STR.ȘERBOTA, NR.8", phone: "0740205405 / 0737172193" },
  // 39 (adăugată)
  "mimd": { name: "MIMD SUPORT MEDICAL SRL", address: "SIBIU - STR.MARAMUREȘULUI, NR.17, SC.C, AP.22", phone: "0735225915" },
  // 40
  "medica": { name: "MEDICA SRL", address: "SIBIU - STR.CALEA DUMBRAVII, NR.107", phone: "0269-212079, 0728235234" },
  // 41
  "mester-ped": { name: "DR.MESTER ELENA LAVINIA - CABINET MEDICAL PEDIATRIE", address: "CISNĂDIE - STR.CINDRELU, NR.47, SC.B, AP.9-10", phone: "0745591366" },
  // 42
  "misanmed": { name: "MISAN MED SRL", address: "SIBIU - STR.HIPODROMULUI, NR.3B", phone: "0369-801555" },
  // 43
  "moisin-npi": { name: "MOISIN LUCIA ELENA - CMI NEUROLOGIE PED.ȘI PSIHIATRIE PED.", address: "SIBIU - STR.RAHOVEI, NR.29, AP.46", phone: "0269-447548" },
  // 44
  "naturapeutica": { name: "NATURAPEUTICA MED SRL", address: "CISNĂDIE - STR.CINDRELU, NR.47, CORP C1, ET.I, AP.16", phone: "0722692050" },
  // 51
  "platin": { name: "PLATIN HEALTHMED SRL - CLINICA OMNIS", address: "SIBIU - ALEEA ROSIORILOR, NR.12", phone: "0269-212146" },
  // 53
  "prosana": { name: "PROSANA SRL", address: "SIBIU - STR.MARASTI, NR.6", phone: "078781043 / 0269233293" },
  // 54
  "psimed": { name: "PSI MED SRL", address: "SIBIU - STR.ALEEA ROSIORILOR NR.2B, AP.2", phone: "0741516543" },
  // 55
  "psihoconcept": { name: "PSIHOCONCEPT MED SRL", address: "MEDIAȘ - STR.CLOSCA NR.2, ET.1, AP.17", phone: "0726842594" },
  // 56
  "proctoven": { name: "PROCTOVEN SRL", address: "OCNA SIBIULUI - STR.PIAȚA TRAIAN, BL.24, PARTER", phone: "0741937106" },
  // 57
  "relivemed": { name: "RELIVEMED SRL", address: "SIBIU - STR.RUSCIORULUI, NR.18", phone: "0735545530" },
  // 58
  "rmn": { name: "RMN DIAGNOSTICA SRL", address: "SELIMBAR - STR.DOAMNA STANCA, NR.5, AP.1", phone: "036409151" },
  // 59
  "rmn-tratament": { name: "RMN DIAGNOSTIC SI TRATAMENT SRL", address: "AGNITA - STR.MIHAI VITEAZU, NR.30", phone: "0269-513390" },
  // 60
  "spital-pediatrie": { name: "SPITALUL CLINIC DE PEDIATRIE SIBIU", address: "SIBIU - STR.GHE.BARITIU, NR.1-3 / STR.POMPEIU ONOFREIU, NR.2-4", phone: "0269-230260" },
  // 61
  "scju": { name: "SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ SIBIU", address: "SIBIU - B-DUL CORNELIU COPOSU, NR.2-4", phone: "0269-215050" },
  // 62 (adăugată din PDF)
  "spital-pneumo": { name: "SPITALUL DE PNEUMOFTIZIOLOGIE SIBIU", address: "SIBIU - STR.ALEEA FILOZOFILOR, NR.3-5", phone: "0269-210979" },
  // 63
  "spital-psih": { name: "SPITALUL DE PSIHIATRIE SIBIU", address: "SIBIU - STR.DR.D-TRU BAGDASAR, NR.12", phone: "0269-215680" },
  // 64
  "spital-cf": { name: "SPITALUL MUNICIPAL SIBIU", address: "SIBIU - STR.C-TIN NOICA, NR.21", phone: "0269-213163" },
  // 66
  "spital-medias": { name: "SPITALUL MUNICIPAL MEDIAȘ", address: "MEDIAȘ - STR.CLOSCA, NR.2", phone: "0269-842550" },
  // 67
  "spital-cisnadie": { name: "SPITALUL ORĂȘENESC CISNĂDIE", address: "CISNĂDIE - STR.BĂILOR, NR.27", phone: "0369-105102" },
  // 68
  "turcu-dv": { name: "TURCU TEODORA - CMI DERMATO-VENEROLOGIE", address: "MEDIAȘ - STR.CLOSCA, NR.2", phone: "0269-832363" },
  // 69
  "todan-dv": { name: "DR.TODAN LILIANA ELENA - CM D-V", address: "MEDIAȘ - STR.CLOSCA, NR.2, AP.16", phone: "0369420427" },
  // 70
  "taroi": { name: "TĂROI SERV MED SRL", address: "SIBIU - STR.PROF.VICTOR LAZAR, NR.11A", phone: "0790505075" },
  // 71
  "unimed": { name: "UNIMED SRL", address: "SIBIU - STR.P-TA PRAHOVEI, NR.18, SC.A, ET.PARTER, AP.35", phone: "0269-234203 / 0757549530" },
  // 72
  "veres-diabet": { name: "VERES OANA - CMI DIABET ZAH.NUTR.ȘI BOLI METAB.", address: "MEDIAȘ - STR.CLOSCA, NR.2", phone: "0369-455289" },
};

// === MEDICI (și psihologi) ===
// n = nume, s = specialitate, g = grad profesional, c = cheia clinicii, t = tip (medic / psiholog)
const PEOPLE = [
  // --- 1. DR. ALEXA DELIA-ALEXANDRA ---
  { n: "ALEXA DELIA-ALEXANDRA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "alexa-og", t: "medic" },

  // --- 2. AEQUALIS ORTHOPAEDICA SRL ---
  { n: "AHMAD CEZAR", s: "Ortopedie", g: "Specialist", c: "aequalis", t: "medic" },
  { n: "OPRIȘAN ANDREI", s: "Ortopedie", g: "Specialist", c: "aequalis", t: "medic" },

  // --- 3. ARCADA CLINIC SRL ---
  { n: "TEODORU COSMIN ADRIAN", s: "Oftalmologie", g: "Primar", c: "arcada", t: "medic" },
  { n: "BREHARI LARISA ELENA", s: "Oftalmologie", g: "Specialist", c: "arcada", t: "medic" },
  { n: "FEIEREISZ ANDRADA IOANA", s: "Oftalmologie", g: "Specialist", c: "arcada", t: "medic" },
  { n: "CERGHEDEAN FLOREA MARIA EMILIA", s: "Oftalmologie", g: "Specialist", c: "arcada", t: "medic" },
  { n: "BOLTA ALEXANDRA FLORINA", s: "Interne", g: "Specialist", c: "arcada", t: "medic" },
  { n: "FEIEREISZ ALIN IULIAN", s: "Interne", g: "Specialist", c: "arcada", t: "medic" },
  { n: "MIHAILĂ DANIELA", s: "Interne", g: "Primar", c: "arcada", t: "medic" },

  // --- 4. ARIA CLINIC SRL ---
  { n: "ILIEȘ DIANA LUMINIȚA", s: "Psihiatrie", g: "Specialist", c: "aria", t: "medic" },
  { n: "COROEGANU ANDRADA ELENA", s: "Neurologie", g: "Specialist", c: "aria", t: "medic" },
  { n: "MUTU COSMIN", s: "Neurologie", g: "Primar", c: "aria", t: "medic" },
  { n: "PARASCHIVA VICTORIA", s: "Chirurgie Generală", g: "Specialist", c: "aria", t: "medic" },
  { n: "PICU ALEXANDRU CRISTIAN", s: "Dermato-venerologie", g: "Specialist", c: "aria", t: "medic" },
  { n: "IANCU BIANCA MARIA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "aria", t: "medic" },
  { n: "BÎRSAN ALEXANDRU", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "aria", t: "medic" },

  // --- 5. BAN COSMINA ---
  { n: "BAN COSMINA", s: "Psihiatrie", g: "Primar", c: "ban-psih", t: "medic" },

  // --- 6. BELDEAN MED SRL ---
  { n: "BELDEAN LUMINIȚA", s: "Endocrinologie", g: "Primar", c: "beldean", t: "medic" },

  // --- 7. BODEA RALUCA SIMONA ---
  { n: "BODEA RALUCA", s: "Pediatrie", g: "Primar", c: "bodea-ped", t: "medic" },

  // --- 8. BOGDAN MIRELA ---
  { n: "BOGDAN MIRELA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "bogdan-diabet", t: "medic" },

  // --- 9. CENTRUL MEDICAL BENEFIC SRL ---
  { n: "BUNEA ADELA", s: "Psihiatrie", g: "Primar", c: "benefic", t: "medic" },
  { n: "ALDEA HENNING LEON CORNELIU", s: "Psihiatrie", g: "Specialist", c: "benefic", t: "medic" },
  { n: "DUMITRU GEORGIANA LOREDANA", s: "Psihiatrie", g: "Specialist", c: "benefic", t: "medic" },
  { n: "BORODEA MARIANA", s: "Psihiatrie", g: "Specialist", c: "benefic", t: "medic" },
  { n: "STREZA TEODORA CRISTINA", s: "Psihiatrie", g: "Primar", c: "benefic", t: "medic" },

  // --- 10. BURIAN ADRIANA ---
  { n: "BURIAN ADRIANA", s: "Endocrinologie", g: "Primar", c: "burian-endo", t: "medic" },

  // --- 11. BURLACU IURIE ---
  { n: "BURLACU IURIE", s: "Endocrinologie", g: "Primar", c: "burlacu-ped", t: "medic" },

  // --- 12. CABINET PSIHIATRIE DR. PACALA SRL ---
  { n: "PACALA BOGDAN MARIUS", s: "Psihiatrie", g: "Primar", c: "pacala-psih", t: "medic" },

  // --- 13. CALCATINGE MARIA DIANA ---
  { n: "CALCATINGE MARIA DIANA", s: "Oncologie", g: "Primar", c: "calcatinge-onco", t: "medic" },

  // --- 14. CARDIOLAB SRL (Str. Ion Agârbiceanu) ---
  { n: "PODAR CARMEN MONICA", s: "Cardiologie", g: "Specialist", c: "cardiolab1", t: "medic" },

  // --- 15. CARDIOLAB SRL (Str. Sălajului) ---
  { n: "BATAR SERGIU CONSTANTIN", s: "Cardiologie", g: "Specialist", c: "cardiowellness", t: "medic" },

  // --- 16. CENTRUL MEDICAL PRAXISMED SRL ---
  { n: "SFÎNTU ANA", s: "Neurologie", g: "Specialist", c: "praxismed", t: "medic" },
  { n: "BOGA MIRELA", s: "Psihiatrie", g: "Specialist", c: "praxismed", t: "medic" },
  { n: "BOGA ZENO ADRIAN", s: "Psihiatrie", g: "Specialist", c: "praxismed", t: "medic" },
  { n: "ȘERB SILVANA ELENA", s: "Psiholog", g: "", c: "praxismed", t: "psiholog" },

  // --- 17. CENTRUL MEDICAL DR. STĂNILĂ SRL ---
  { n: "RUSU VLAD", s: "Oftalmologie", g: "Primar", c: "stanila", t: "medic" },
  { n: "FLORESCU MIHAELA", s: "Oftalmologie", g: "Primar", c: "stanila", t: "medic" },
  { n: "BOTEZAN ANDREEA", s: "Oftalmologie", g: "Primar", c: "stanila", t: "medic" },
  { n: "CRETU ANDREEA MARIA", s: "Oftalmologie", g: "Specialist", c: "stanila", t: "medic" },
  { n: "STĂNILĂ DAN MIRCEA", s: "Oftalmologie", g: "Primar", c: "stanila", t: "medic" },
  { n: "STĂNILĂ ALINA", s: "Oftalmologie", g: "Primar", c: "stanila", t: "medic" },

  // --- 18. CENTRUL MEDICAL STEJARI SRL ---
  { n: "SOCEANU EMILIA CARMEN", s: "Neurologie", g: "Primar", c: "stejari", t: "medic" },
  { n: "CHIRCUS ANDREEA CRISTINA", s: "Psihiatrie", g: "Specialist", c: "stejari", t: "medic" },
  { n: "GHEBAN AURA FLORICA", s: "Psiholog", g: "", c: "stejari", t: "psiholog" },
  { n: "DODU ROXANA ANAMARIA", s: "Psihiatrie", g: "Specialist", c: "stejari", t: "medic" },

  // --- 19. CENTRUL MEDICAL SANOGYN SRL ---
  { n: "LEBADA IOANA CODRUȚA", s: "Endocrinologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "TICHINDELEANU NORA LUMINIȚA", s: "Endocrinologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "MITEA RALUCA DARIA", s: "Cardiologie", g: "Primar", c: "sanogyn", t: "medic" },
  { n: "UNGUREANU MĂDĂLINA", s: "ORL", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "DINU ION", s: "Alergologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "DRAGOE GINA", s: "Endocrinologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "BUTICA DELIA", s: "Endocrinologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "HARANGUS MIHAI", s: "Cardiologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "MATEI CRISTINA ELENA", s: "Chirurgie Generală", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "POPENTIU ADRIAN", s: "Chirurgie Generală", g: "Primar", c: "sanogyn", t: "medic" },
  { n: "DIACONU DENISA ELENA", s: "Dermato-venerologie", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "GĂLĂȚAN SIMONA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "sanogyn", t: "medic" },
  { n: "ALDEA FLORINA ELENA", s: "Interne", g: "Specialist", c: "sanogyn", t: "medic" },
  { n: "GHEORGHIU ALIONA", s: "Hematologie", g: "Specialist", c: "sanogyn", t: "medic" },

  // --- 20. CENTRUL MEDICAL UNIREA SRL ---
  { n: "CAPALNAȘ ROXANA MARIA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CIMPEAN TULEA ANDREEA ALEXANDRA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "OPREA ADELA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CIUȚĂ DANIEL", s: "Ortopedie", g: "Primar", c: "unirea", t: "medic" },
  { n: "NEMEȘ FRUM DANIELA", s: "Neurologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CAZACU IOANA DELIA", s: "Psihiatrie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CICHI MARIANA LAVINIA", s: "Diabet, Nutriție și Boli Metabolice", g: "Specialist", c: "unirea", t: "medic" },
  { n: "DIACONU DENISA ELENA", s: "Dermato-venerologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "RĂU RAMONA TEODORA", s: "Cardiologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "STOICHIȚĂ ȘTEFANIA LIDIA", s: "Pediatrie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "PUMNEA PIA MANUELA", s: "Interne / Hematologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "ABAGIU MĂDĂLINA", s: "Interne", g: "Primar", c: "unirea", t: "medic" },
  { n: "TIUREAN MARIA LUIZA", s: "Interne", g: "Specialist", c: "unirea", t: "medic" },
  { n: "MUNTEAN ALINA", s: "Interne", g: "Specialist", c: "unirea", t: "medic" },
  { n: "COPACEANU ADELINA LIANA", s: "Interne", g: "Specialist", c: "unirea", t: "medic" },
  { n: "PROTEASA ANDREEA SIMONA", s: "Boli Infecțioase", g: "Specialist", c: "unirea", t: "medic" },
  { n: "DOBRIN RUXANDRA", s: "Cardiologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "MOCANU LORENA CAMELIA", s: "Cardiologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "RISTEA RUXANDRA PAULA", s: "Endocrinologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "NOOR CRISTINA", s: "Hematologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "TĂLĂU RAUL DORU", s: "Psihiatrie", g: "Primar", c: "unirea", t: "medic" },
  { n: "BRAN LIVIU CĂTĂLIN", s: "Oftalmologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "MOROȚI ADRIAN PETRU", s: "Oftalmologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "GLIGOR OVIDIU HORIA", s: "Obstetrică-Ginecologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "FILIP GRETI", s: "Obstetrică-Ginecologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "LUP NICOLETA ALMA", s: "Obstetrică-Ginecologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "CONDREA TEODORA MARIA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CRETU RALUCA MARIA", s: "Obstetrică-Ginecologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "SORA LIVIA ILEANA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "MARIS MARIA RICARDA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "DEDEAN IOANA DIANA", s: "Oncologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "ECEA RADU", s: "Oncologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "NIMIRCEAG VICTOR MARIAN", s: "Oncologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "SINEA LAURA OLIMPIA", s: "Oncologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "MOLNAR ANDREEA CRISTINA", s: "Oncologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "VONICA RAZVAN CONSTANTIN", s: "Oncologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CHELCEA DANIEL", s: "ORL", g: "Primar", c: "unirea", t: "medic" },
  { n: "OPRIS AURA MARIA", s: "ORL", g: "Specialist", c: "unirea", t: "medic" },
  { n: "BACALU VICTOR", s: "Radioterapie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "STAHIESCU RALUCA", s: "Radioterapie", g: "Primar", c: "unirea", t: "medic" },
  { n: "MUSTATA MARIA", s: "Radioterapie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "COMAN AUREL", s: "Chirurgie Generală", g: "Primar", c: "unirea", t: "medic" },
  { n: "KISS LORANT", s: "Chirurgie Generală", g: "Primar", c: "unirea", t: "medic" },
  { n: "NOOR HASSAN", s: "Chirurgie Generală", g: "Specialist", c: "unirea", t: "medic" },
  { n: "COSTEA CIPRIAN IOAN", s: "Chirurgie Generală", g: "Primar", c: "unirea", t: "medic" },
  { n: "TOHATAN CALIN CRISTIAN", s: "Chirurgie Generală", g: "Specialist", c: "unirea", t: "medic" },
  { n: "BARTOS LAURA IULIA", s: "Ortopedie", g: "Primar", c: "unirea", t: "medic" },
  { n: "BARBU ANGELO", s: "Urologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "FAUR CALIN ANDREI", s: "Urologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "STANCIU LOREDANA RAMONA", s: "Cardiologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "COJAN RADU", s: "Cardiologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "FLORESCU NICOLAE", s: "Cardiologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "PURCAR OANA", s: "Cardiologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "SÎRBU PRISECARU RALUCA VASILICA", s: "Cardiologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "VACARIU VICTOR", s: "Cardiologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "COSTEA RALUCA MARIA DIANA", s: "Cardiologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CRĂCIUN ROXANA ELENA", s: "Chirurgie Generală", g: "Specialist", c: "unirea", t: "medic" },
  { n: "MATEI CLAUDIU", s: "Neurochirurgie", g: "Primar", c: "unirea", t: "medic" },
  { n: "GHERMAN JOSEPH", s: "Neurochirurgie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "NISTOR IOANA SOFIA", s: "Neurochirurgie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "TĂLĂU MARIANA", s: "Neurologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "FILIP DAN", s: "Neurologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "NEDELCU MIHAELA ELENA", s: "Reumatologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "MICU ALEXANDRA IOANA", s: "Urologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "PÎRVUȚ MIRCEA VALENTIN", s: "Urologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "MĂRGINEAN GELU CRISTIAN", s: "Ortopedie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "DRĂGHICI GRECU IOANA PAULA", s: "Oftalmologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "MUNTEANU DANIELA ALEXANDRA", s: "Chirurgie Generală", g: "Specialist", c: "unirea", t: "medic" },
  { n: "GHEORGHE CRISTIANA GEORGIANA", s: "Chirurgie Pediatrică", g: "Specialist", c: "unirea", t: "medic" },
  { n: "TELEHUZ DANIELA", s: "Endocrinologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "SEICARU ELENA MARIA", s: "Endocrinologie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "SĂDEANU LAURA CARMEN", s: "Interne", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CONSTANTIN ALEXANDRA", s: "Pediatrie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "VACARIU DANIELA", s: "Pediatrie", g: "Specialist", c: "unirea", t: "medic" },
  { n: "PLUKCHI IULIA", s: "Gastroenterologie Pediatrică", g: "Specialist", c: "unirea", t: "medic" },
  { n: "GIURGIU IULIA", s: "Diabet, Nutriție și Boli Metabolice", g: "Specialist", c: "unirea", t: "medic" },
  { n: "CARCALICI IOAN RADU", s: "Neurologie", g: "Primar", c: "unirea", t: "medic" },
  { n: "PLEȘCA ADELINA IOANA", s: "Neurologie", g: "Primar", c: "unirea", t: "medic" },

  // --- 30. GENSAN SRL ---
  { n: "MUNTEAN IULIA ROXANA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "gensan", t: "medic" },
  { n: "ARCOMITA DOINA", s: "Diabet, Nutriție și Boli Metabolice", g: "Specialist", c: "gensan", t: "medic" },
  { n: "ALBU LAURA MARIA", s: "Endocrinologie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "COBIRJE POPA GEANINA MIHAELA", s: "Neurologie", g: "Primar", c: "gensan", t: "medic" },
  { n: "MIHAI MINODORA EUGENIA", s: "Reumatologie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "DOBRA ANDREEA NICOLETA", s: "Psihiatrie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "IONASCU ELENA", s: "Psiholog", g: "", c: "gensan", t: "psiholog" },
  { n: "PIRINGER ȘERBAN ANDA", s: "Psiholog", g: "", c: "gensan", t: "psiholog" },
  { n: "MAREȘ DANA DANIELA", s: "Psiholog", g: "", c: "gensan", t: "psiholog" },
  { n: "ACHIM RUXANDRA IVONA", s: "Chirurgie Plastică", g: "Specialist", c: "gensan", t: "medic" },
  { n: "BĂLAN ANDRADA MONICA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "GHERMAN IOANA ALEXANDRA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "ACHIM ANGELA TEODORA", s: "Cardiologie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "COMAN VASILE LIVIU", s: "Psihiatrie Pediatrică", g: "Specialist", c: "gensan", t: "medic" },
  { n: "PALCU CLORINA", s: "Dermato-venerologie", g: "Primar", c: "gensan", t: "medic" },
  { n: "BARBU ALEXANDRA", s: "Dermato-venerologie", g: "Specialist", c: "gensan", t: "medic" },
  { n: "ȘTEFĂNESCU ANIȘOARA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "gensan", t: "medic" },

  // --- 31. GYNDIA NOVA SRL ---
  { n: "NICOLESCU GEORGIANA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "gyndia", t: "medic" },

  // --- 32. GLUCO-STAT SRL ---
  { n: "DUMITRESCU ROXANA MONICA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "glucostat", t: "medic" },

  // --- 33. HOLHOS OPTIC LINE SRL ---
  { n: "CZIKA ALEXANDRA", s: "Oftalmologie", g: "Specialist", c: "holhos", t: "medic" },
  { n: "VONICA FLAVIA MARIA", s: "Oftalmologie", g: "Specialist", c: "holhos", t: "medic" },

  // --- 34. INTERECOMED SRL ---
  { n: "REZI ELENA CRISTINA", s: "Interne", g: "Primar", c: "interecomed", t: "medic" },

  // --- 35. LUCAS MEDICAL SRL ---
  { n: "COSTEA ALEXANDRU GEORGIAN", s: "Cardiologie", g: "Specialist", c: "lucas", t: "medic" },
  { n: "ILIESCU BIANCA ILIANA", s: "Endocrinologie", g: "Specialist", c: "lucas", t: "medic" },
  { n: "DRĂGHICI IONELA DIANA", s: "Endocrinologie", g: "Specialist", c: "lucas", t: "medic" },

  // --- 36. MARGINEAN I.GHE. - CMI ORL ---
  { n: "CHICEA IULIA OANA", s: "Neurologie", g: "Primar", c: "marginean-orl", t: "medic" },

  // --- 37. MARINACHE LUMINIȚA ---
  { n: "MARINACHE LUMINIȚA", s: "Pediatrie", g: "Primar", c: "marinache-ped", t: "medic" },

  // --- 38. MICROFIT SRL ---
  { n: "FLORESCU MIHAELA", s: "Oftalmologie", g: "Primar", c: "microfit", t: "medic" },

  // --- 39. MIMD SUPORT MEDICAL SRL (adăugată) ---
  { n: "MATUȘA ION CĂTĂLIN", s: "Psihiatrie", g: "Primar", c: "mimd", t: "medic" },
  { n: "POPA VERONICA", s: "Psihiatrie", g: "Specialist", c: "mimd", t: "medic" },

  // --- 40. MEDICA SRL ---
  { n: "SÎRBU CORNELIA", s: "Oftalmologie", g: "Specialist", c: "medica", t: "medic" },
  { n: "POPA VERONICA", s: "Psihiatrie", g: "Specialist", c: "medica", t: "medic" },
  { n: "ZUGRAVU CĂTĂLINA LAURA", s: "Endocrinologie", g: "Specialist", c: "medica", t: "medic" },
  { n: "BATAR FLORINA GABRIELA", s: "Cardiologie", g: "Primar", c: "medica", t: "medic" },
  { n: "DOBRA MARIA CASTILIA", s: "Chirurgie Generală", g: "Specialist", c: "medica", t: "medic" },
  { n: "GAFTON ANA ALINA", s: "Dermato-venerologie", g: "Specialist", c: "medica", t: "medic" },
  { n: "BALDOVIN IOANA", s: "Dermato-venerologie", g: "Primar", c: "medica", t: "medic" },
  { n: "MOLDOVAN ELENA", s: "Psihiatrie", g: "Specialist", c: "medica", t: "medic" },
  { n: "SAS ALINA DANIELA", s: "Psihiatrie", g: "Primar", c: "medica", t: "medic" },
  { n: "PRESECAN CAMELIA", s: "Psihiatrie", g: "Specialist", c: "medica", t: "medic" },
  { n: "SZAKACS DANA SILVIA MIHAELA", s: "Ortopedie", g: "Specialist", c: "medica", t: "medic" },
  { n: "PRESECAN CAMELIA", s: "Neurologie", g: "Specialist", c: "medica", t: "medic" },
  { n: "FERTU ILARIANA LUCIANA", s: "Interne", g: "Specialist", c: "medica", t: "medic" },
  { n: "TIUREAN MARIA LUIZA", s: "Interne", g: "Specialist", c: "medica", t: "medic" },
  { n: "DEUTSCH LAURENȚIU TIBERIU", s: "Urologie", g: "Primar", c: "medica", t: "medic" },
  { n: "IONASCU ELENA", s: "Psiholog", g: "", c: "medica", t: "psiholog" },
  { n: "HÎRLEA CAMELIA", s: "Psiholog", g: "", c: "medica", t: "psiholog" },

  // --- 41. DR. MESTER ELENA LAVINIA ---
  { n: "MESTER ELENA LAVINIA", s: "Pediatrie", g: "Primar", c: "mester-ped", t: "medic" },

  // --- 42. MISAN MED SRL ---
  { n: "VASILACHE VERONICA", s: "Cardiologie", g: "Primar", c: "misanmed", t: "medic" },
  { n: "COLDEA LILIANA", s: "Cardiologie", g: "Primar", c: "misanmed", t: "medic" },
  { n: "LAZAR FLORIN LEONTIN", s: "Cardiologie", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "MOSCU MARIO BOGDAN", s: "Dermato-venerologie", g: "Primar", c: "misanmed", t: "medic" },
  { n: "PRODAN IOAN", s: "Gastroenterologie", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "COMAN DANIELA", s: "Gastroenterologie", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "DRAGOMIR IONUȚ NICOLAE", s: "Interne", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "GUȚIA ALEXANDRU EMANUIL", s: "Interne", g: "Primar", c: "misanmed", t: "medic" },
  { n: "NEDELCU CONSTANTIN ALEXANDRU", s: "Chirurgie Generală", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "MUNTEAN CIPRIAN NICOLAE", s: "Chirurgie Generală", g: "Primar", c: "misanmed", t: "medic" },
  { n: "SILIVASAN EUGEN C-TIN", s: "Chirurgie Generală", g: "Primar", c: "misanmed", t: "medic" },
  { n: "ANTONIE GABRIELA", s: "ORL", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "DEUTSCH IOANA RALUCA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "BĂDESCU TUDOR MIHAI", s: "Obstetrică-Ginecologie", g: "Primar", c: "misanmed", t: "medic" },
  { n: "TURCU ADINA ELENA", s: "Neurologie", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "MITU NICOLETA ANAMARIA", s: "Ortopedie", g: "Specialist", c: "misanmed", t: "medic" },
  { n: "TEODORESCU ELENA LUISZA", s: "Psihiatrie", g: "Specialist", c: "misanmed", t: "medic" },

  // --- 43. MOISIN LUCIA ELENA ---
  { n: "MOISIN LUCIA ELENA", s: "Neurologie Pediatrică / Psihiatrie Pediatrică", g: "Specialist", c: "moisin-npi", t: "medic" },

  // --- 44. NATURAPEUTICA MED SRL ---
  { n: "BURCEA ROXANA", s: "Psihiatrie", g: "Specialist", c: "naturapeutica", t: "medic" },

  // --- 51. PLATIN HEALTHMED SRL (CLINICA OMNIS) - corectată ---
  { n: "HAUS LAURA", s: "Hematologie", g: "Specialist", c: "platin", t: "medic" },
  { n: "MIHULECEA GHEORGHE", s: "Oncologie", g: "Primar", c: "platin", t: "medic" },
  { n: "STANIMIR NATALIA ELENA", s: "Dermato-venerologie", g: "Specialist", c: "platin", t: "medic" },
  { n: "AL-DARAYSEH MOHAMMAD", s: "Dermato-venerologie", g: "Specialist", c: "platin", t: "medic" },
  { n: "COMANICIU ANDRA", s: "Gastroenterologie", g: "Specialist", c: "platin", t: "medic" },
  { n: "ARSENIU RARES", s: "Pediatrie", g: "Specialist", c: "platin", t: "medic" },
  { n: "OROIAN CRISTINA GABRIELA", s: "Psihiatrie", g: "Primar", c: "platin", t: "medic" },
  { n: "POPA MONICA CARMEN", s: "Psihiatrie", g: "Primar", c: "platin", t: "medic" },
  { n: "IANCU BIANCA", s: "Medicină Fizică și Reabilitare", g: "Specialist", c: "platin", t: "medic" },
  { n: "BUZAIANU VLAD", s: "Medicină Fizică și Reabilitare", g: "Specialist", c: "platin", t: "medic" },
  { n: "LAZAROAE ANA", s: "Neurologie", g: "Primar", c: "platin", t: "medic" },
  { n: "ZAICA SVETLANA", s: "Neurologie", g: "Specialist", c: "platin", t: "medic" },
  { n: "LUPEAN LAURA MARIA", s: "Endocrinologie", g: "Specialist", c: "platin", t: "medic" },
  { n: "TICHINDELEANU NORA LUMINIȚA", s: "Endocrinologie", g: "Specialist", c: "platin", t: "medic" },

  // --- 53. PROSANA SRL ---
  { n: "SOLOMON RADU CRINA CRISTINA", s: "Diabet, Nutriție și Boli Metabolice", g: "Specialist", c: "prosana", t: "medic" },

  // --- 54. PSI MED SRL ---
  { n: "SECELEAN ANA IOANA", s: "Psihiatrie", g: "Primar", c: "psimed", t: "medic" },
  { n: "SABĂU BOGDAN ALIN", s: "Psihiatrie", g: "Primar", c: "psimed", t: "medic" },
  { n: "POPA LUCIA MARIA", s: "Psiholog", g: "", c: "psimed", t: "psiholog" },
  { n: "LEOPOLD DELIA", s: "Psiholog", g: "", c: "psimed", t: "psiholog" },
  { n: "MARA TOMINA", s: "Psiholog", g: "", c: "psimed", t: "psiholog" },
  { n: "SEBU IULIA TEODORA", s: "Psihiatrie", g: "Specialist", c: "psimed", t: "medic" },

  // --- 55. PSIHOCONCEPT MED SRL ---
  { n: "OLTEAN GABRIELA RALUCA", s: "Psiholog", g: "", c: "psihoconcept", t: "psiholog" },
  { n: "FILIP AURORA OLIMPIA", s: "Psiholog", g: "", c: "psihoconcept", t: "psiholog" },
  { n: "CIOBANU ANCA IULIA", s: "Psihiatrie", g: "Specialist", c: "psihoconcept", t: "medic" },
  { n: "MUNTEANU COSMINA", s: "Psihiatrie", g: "Primar", c: "psihoconcept", t: "medic" },
  { n: "MITREA FELICIA", s: "Psihiatrie", g: "Primar", c: "psihoconcept", t: "medic" },
  { n: "VOULGAROPOULOS AGATA MIRELA", s: "Psihiatrie", g: "Primar", c: "psihoconcept", t: "medic" },
  { n: "PAVEL MIHAELA", s: "Psiholog", g: "", c: "psihoconcept", t: "psiholog" },
  { n: "CAPĂTÎNĂ ALINA FLORINA", s: "Psiholog", g: "", c: "psihoconcept", t: "psiholog" },

  // --- 56. PROCTOVEN SRL ---
  { n: "GRUESCU-IONESCU ANDRA-CRISTINA", s: "Psihiatrie", g: "Specialist", c: "proctoven", t: "medic" },
  { n: "TATU ANIȘOARA", s: "Psiholog", g: "", c: "proctoven", t: "psiholog" },

  // --- 57. RELIVEMED SRL ---
  { n: "TALPOȘ ANDREEA MARIA", s: "Gastroenterologie", g: "Specialist", c: "relivemed", t: "medic" },
  { n: "PICU ANDREEA MARIA", s: "Cardiologie", g: "Specialist", c: "relivemed", t: "medic" },
  { n: "DUMNEANU ALEXANDRU", s: "Cardiologie", g: "Specialist", c: "relivemed", t: "medic" },

  // --- 58. RMN DIAGNOSTICA SRL ---
  { n: "BOCODI MARIANA CORINA", s: "Interne", g: "Primar", c: "rmn", t: "medic" },
  { n: "BOGDAN ANCA CĂTĂLINA", s: "Cardiologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "BARTA ANAMARIA", s: "Cardiologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "PUIA ANDREEA DANIELA", s: "Cardiologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "NISTOR ADRIAN PETRU", s: "Cardiologie", g: "Primar", c: "rmn", t: "medic" },
  { n: "ONEA HOREA LAURENȚIU", s: "Cardiologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "TONCH CERBU ALEXANDRA KRISTINE", s: "Cardiologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "MOIȘIN ANDREI CĂTĂLIN", s: "Chirurgie Generală", g: "Specialist", c: "rmn", t: "medic" },
  { n: "VERDE IOANA MARIA", s: "Endocrinologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "IOSIF CRISTINA SOFIA", s: "Endocrinologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "PĂTRÎNCĂ ANDREI", s: "Psihiatrie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "MĂRUNȚEL DORINA IRINA", s: "Psihiatrie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "MUTU ANDREEA CODRUȚA", s: "Psihiatrie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "GHIȘE GHEORGHE", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "rmn", t: "medic" },
  { n: "HILMA ANA MARIA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "rmn", t: "medic" },
  { n: "MOLNAR ESTERA", s: "Dermato-venerologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "NEAGU IULIANA", s: "Dermato-venerologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "TINCU DIANA", s: "Dermato-venerologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "TEREC SERGIU ADRIAN", s: "Gastroenterologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "GANFALEAN ȘTEFANA", s: "Gastroenterologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "BUNEA ȘTEFAN", s: "Gastroenterologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "LUPU PETRIA ALEXANDRA DELIA", s: "Interne", g: "Specialist", c: "rmn", t: "medic" },
  { n: "COTRUȘ FLORENTA VENERA", s: "Interne", g: "Specialist", c: "rmn", t: "medic" },
  { n: "STREZA MARIA CAMELIA", s: "Interne", g: "Specialist", c: "rmn", t: "medic" },
  { n: "UNGUREANU DANDREIA ANDREEA MIHAELA", s: "Hematologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "MICU NICOLAE MĂDĂLIN", s: "Neurologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "TEPOȘU BOGDAN NICOLAE", s: "Neurologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "GHINCEA MARIUS IONUȚ", s: "Neurologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "MARGA IOAN", s: "Neurologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "TĂNASE ALEXANDRA", s: "Neurologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "SAVU DENISA", s: "Neurologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "PANTA VLADIA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "MANTA TIA MARIA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "PREDA ANDREEA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "STUPAROIU VĂTĂU ADRIANA EMILIA", s: "ORL", g: "Specialist", c: "rmn", t: "medic" },
  { n: "ERMACOV LILIANA", s: "ORL", g: "Specialist", c: "rmn", t: "medic" },
  { n: "BUTA DIANA IOANA", s: "Pneumologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "POPESCU CLAUDIA RALUCA", s: "Pneumologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "VULCU ANDRA CECILIA", s: "Pneumologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "GANCEA ALEXANDRU C-TIN", s: "Urologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "GHENȚI ZOLTI RAZVAN", s: "Urologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "DENGEHEL ADRIANA", s: "Ortopedie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "POPA ALEXANDRU DARIUS", s: "Ortopedie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "SACARELIS ALEXIS VASILIS", s: "Ortopedie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "CORLACIU IULIA ALINA", s: "Psihiatrie Pediatrică", g: "Specialist", c: "rmn", t: "medic" },
  { n: "ACARU ALEXANDRA", s: "Psiholog", g: "", c: "rmn", t: "psiholog" },
  { n: "HÎRLEA CAMELIA", s: "Psiholog", g: "", c: "rmn", t: "psiholog" },
  { n: "MICU MIHAELA", s: "Diabet, Nutriție și Boli Metabolice", g: "Specialist", c: "rmn", t: "medic" },
  { n: "NEGUȚESCU CODRUȚA IOANA", s: "Diabet, Nutriție și Boli Metabolice", g: "Specialist", c: "rmn", t: "medic" },
  { n: "LEI SABINA ALEXANDRA", s: "Oncologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "VĂLEANU VALERIA VIOARA", s: "Oncologie", g: "Primar", c: "rmn", t: "medic" },
  { n: "MUNTEAN CRISTINA", s: "Oncologie", g: "Specialist", c: "rmn", t: "medic" },
  { n: "TARCEA IOANA MARIA", s: "Pediatrie", g: "Specialist", c: "rmn", t: "medic" },

  // --- 59. RMN DIAGNOSTIC SI TRATAMENT SRL ---
  { n: "CIORA ADRIANA PETRICA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "LUCA DANIEL SIMION", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "CONSTANTIN ELENA", s: "Kinetoterapeut", g: "", c: "rmn-tratament", t: "kinetoterapeut" },
  { n: "CSILLAG ANDREEA", s: "Alergologie", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "LUCA MIHAELA CODRUȚA", s: "Boli Infecțioase", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "PATRU RAREȘ GHEORGHE", s: "Boli Infecțioase", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "TORGE SUSANA MIHAELA", s: "Boli Infecțioase", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "HAGĂU ASMAA CARLA", s: "Cardiologie Pediatrică", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "BERGHEA NEAMȚU CRISTIAN", s: "Chirurgie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "MANEA ALINA ȘTEFANIA", s: "Chirurgie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "OPREAN ADRIANA VIORICA", s: "Chirurgie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "PUTAN IULIA ELISABETA", s: "Chirurgie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "BANCIU VASILE STELIAN", s: "Chirurgie și Ortopedie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "CUMPĂNAȘU ION", s: "Ortopedie Pediatrică", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "NEAMȚU MĂDĂLINA", s: "Ortopedie Pediatrică", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "CONSTANTIN DANIEL MARIN", s: "Ortopedie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "GĂLĂȚAN SIMONA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "AXINTE ROXANA IOANA", s: "Dermato-venerologie", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "CSILLAG ANDREEA", s: "Dermato-venerologie", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "SOFARIU SIMONA P-VA", s: "Endocrinologie", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "VIȘA GABRIELA", s: "Neurologie Pediatrică", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "CRIȘAN IOANA ANDREEA", s: "Neurologie Pediatrică", g: "Specialist", c: "rmn-tratament", t: "medic" },
  { n: "IONICĂ CIPRIAN C-TIN", s: "Oftalmologie", g: "Primar", c: "rmn-tratament", t: "medic" },
  { n: "CONSTANTIN LAURA", s: "Oftalmologie", g: "Primar", c: "rmn-tratament", t: "medic" },

  // --- 60. SPITALUL CLINIC DE PEDIATRIE SIBIU ---
  { n: "DUDAS DOINA MARIANA", s: "ORL", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "GHEORGHE CĂTĂLIN GABRIEL", s: "ORL", g: "Specialist", c: "spital-pediatrie", t: "medic" },
  { n: "MUNTEAN RODICA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "BOGDAN DUICA ANCA NICOLETA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "GRĂDINARU GABRIEL", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "RĂDULESCU CARMEN MARIA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "MATACUȚĂ BOGDAN IOANA OCTAVIA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "VULCAN ANCA ȘTEFANIA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "CRACUI DENISA MARIA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "BACILA NICOLETA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "SOFARIU SIMONA P-VA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "LEUCA RALUCA IOANA", s: "Pediatrie", g: "Specialist", c: "spital-pediatrie", t: "medic" },
  { n: "POPOIU RAZVAN", s: "Pediatrie", g: "Specialist", c: "spital-pediatrie", t: "medic" },
  { n: "OPRIȘ VALENTINA", s: "Pediatrie", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "TĂLVAN ELENA TEODORA", s: "Chirurgie BMF", g: "Primar", c: "spital-pediatrie", t: "medic" },
  { n: "GIURGIU MIRCEA ANDREI", s: "Psiholog", g: "", c: "spital-pediatrie", t: "psiholog" },
  { n: "NEDELCU SUSU ANDREEA MARIA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "spital-pediatrie", t: "medic" },
  { n: "CAPĂTĂ MEDINA ILEANA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "spital-pediatrie", t: "medic" },
  { n: "PORR CORINA", s: "Alergologie", g: "Primar", c: "spital-pediatrie", t: "medic" }, // Apare la SCJU? Poate e la ambulatoriu. O las aici conform PDF.
  // SCJU are mulți, îi pun la SCJU.

  // --- 61. SPITALUL CLINIC JUDEȚEAN DE URGENȚĂ SIBIU ---
  { n: "BÎRLUȚIU VICTORIA", s: "Boli Infecțioase", g: "Primar", c: "scju", t: "medic" },
  { n: "GÎNGARAȘ COSMINA", s: "Boli Infecțioase", g: "Primar", c: "scju", t: "medic" },
  { n: "ILIE ADINA ELENA", s: "Boli Infecțioase", g: "Primar", c: "scju", t: "medic" },
  { n: "ȘTEFAN ELENA SIMONA", s: "Boli Infecțioase", g: "Specialist", c: "scju", t: "medic" },
  { n: "CRĂCIUN SMARALDA", s: "Boli Infecțioase", g: "Specialist", c: "scju", t: "medic" },
  { n: "GHIBU ANDREEA MAGDALENA", s: "Boli Infecțioase", g: "Specialist", c: "scju", t: "medic" },
  { n: "BITEA CORNEL IOAN", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "COBIRE IOANA MARIA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CĂTRINĂ IULIA BIANCA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "DRĂGHICI DORIN", s: "Cardiologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "DUMNEANU ALEXANDRU", s: "Cardiologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "FIAT EMILIA SORINA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "LAZAR FLORIN LEONTIN", s: "Cardiologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "LAZAR DELIA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MOGA RODICA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "ONEA HOREA LAURENȚIU", s: "Cardiologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "PICU ANDREEA MARIA", s: "Cardiologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "VULCU RAUL", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "STOIA OANA MARIA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "TEODORU MINODORA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "ZAGONI CRISTINA MIHAELA", s: "Cardiologie", g: "Primar", c: "scju", t: "medic" },
  { n: "FĂGEȚAN MIHAI IULIAN", s: "Chirurgie BMF", g: "Primar", c: "scju", t: "medic" },
  { n: "BĂRBULESCU BOGDAN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "BRATU DAN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "BARDAC OVIDIU DORIN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "CRETU DAN GHEORGHE", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "DUȚĂ FLORIN DANIEL", s: "Chirurgie Generală", g: "Specialist", c: "scju", t: "medic" },
  { n: "FAUR ANCA", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "FAUR MIHAI", s: "Chirurgie Generală", g: "Specialist", c: "scju", t: "medic" },
  { n: "HULPUȘ RADU", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "MOHOR CĂLIN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "MIHEȚIU ALIN FLORIN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "ROTARU MIRCEA", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "TĂNĂSESCU CIPRIAN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "SABĂU ALEXANDRU DAN", s: "Chirurgie Generală", g: "Primar", c: "scju", t: "medic" },
  { n: "AXINTE SERGIU", s: "Chirurgie Plastică", g: "Primar", c: "scju", t: "medic" },
  { n: "HELGIU ALINA", s: "Chirurgie Plastică", g: "Primar", c: "scju", t: "medic" },
  { n: "MĂRGINEAN GEORGE IOAN", s: "Chirurgie Plastică", g: "Specialist", c: "scju", t: "medic" },
  { n: "SIMON SANDA", s: "Chirurgie Plastică", g: "Primar", c: "scju", t: "medic" },
  { n: "ACHIM LUCIAN DAVID", s: "Chirurgie Toracică", g: "Primar", c: "scju", t: "medic" },
  { n: "BREAHNA VADIM", s: "Chirurgie Vasculară", g: "Specialist", c: "scju", t: "medic" },
  { n: "NEAGA IRINA", s: "Chirurgie Vasculară", g: "Specialist", c: "scju", t: "medic" },
  { n: "TICU SERGHEI", s: "Chirurgie Vasculară", g: "Specialist", c: "scju", t: "medic" },
  { n: "MOȚ ALINA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "scju", t: "medic" },
  { n: "SITTERLI NATEA CARMEN NARCISA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "scju", t: "medic" },
  { n: "DINCA GEORGIANA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "scju", t: "medic" },
  { n: "PODAR OANA MARIA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "scju", t: "medic" },
  { n: "CĂLUȚIU NICOLETA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "scju", t: "medic" },
  { n: "BALDOVIN IOANA", s: "Dermato-venerologie", g: "Primar", c: "scju", t: "medic" },
  { n: "IANCUI MARIANA GABRIELA", s: "Dermato-venerologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MANIU HORIA", s: "Dermato-venerologie", g: "Primar", c: "scju", t: "medic" },
  { n: "VÎLSAN CODRUȚ GABRIEL", s: "Dermato-venerologie", g: "Primar", c: "scju", t: "medic" },
  { n: "STANCIU MIHAELA", s: "Endocrinologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BOICEAN LOREDANA CAMELIA", s: "Endocrinologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "DRĂGHICI IONELA DIANA", s: "Endocrinologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "LEBADA IOANA CODRUȚA", s: "Endocrinologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "BOICEANU ADRIAN", s: "Gastroenterologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BĂLUȚĂ TEODORA MIHAELA", s: "Gastroenterologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "MOCANU DRAGOȘ", s: "Gastroenterologie", g: "Primar", c: "scju", t: "medic" },
  { n: "PRISCA DIANA PARASCHIVA", s: "Gastroenterologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "MAXIM MONICA", s: "Gastroenterologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CĂTANĂ ALINA", s: "Hematologie", g: "Primar", c: "scju", t: "medic" },
  { n: "FLUCUȘ OFELIA", s: "Hematologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BUȘ CRISTINA MIHAELA", s: "Hematologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MIHAILĂ ROMEO", s: "Hematologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MONDOC LIDIA MARIA", s: "Hematologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "LIENERTH DORIS", s: "Hematologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "BECA CORINA", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "HAVARNEANU BICA DANIELA", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "CIPAIAN CĂLIN", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "PETRAȘCU OVIDIU", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "SOLOMON ADELAIDA SIMINA", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "DASCĂLU DACIANA", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "TUDOR VICTOR CONSTANTIN", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "ORGA DUMITRIU DAN IOAN", s: "Interne", g: "Primar", c: "scju", t: "medic" },
  { n: "MITEA SORIN IOAN", s: "Nefrologie", g: "Primar", c: "scju", t: "medic" },
  { n: "COTÂRLĂ LIVIU", s: "Nefrologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "POPA LIVIA", s: "Nefrologie", g: "Primar", c: "scju", t: "medic" },
  { n: "POPA LIVIA MIRELA", s: "Nefrologie", g: "Primar", c: "scju", t: "medic" },
  { n: "SĂCELEANU MIRCEA VICENȚIU", s: "Neurochirurgie", g: "Primar", c: "scju", t: "medic" },
  { n: "FĂGĂRĂȘI TITUS", s: "Neurochirurgie", g: "Specialist", c: "scju", t: "medic" },
  { n: "CÎNDEA COSMIN", s: "Neurochirurgie", g: "Specialist", c: "scju", t: "medic" },
  { n: "MOSCU BIANCA", s: "Neurologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CUIBUȘ LILIANA", s: "Neurologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MUTU CĂTĂLIN COSMIN", s: "Neurologie", g: "Primar", c: "scju", t: "medic" },
  { n: "PRODAN LILIANA CARMEN", s: "Neurologie", g: "Primar", c: "scju", t: "medic" },
  { n: "ROMAN FILIP CARMEN CORINA", s: "Neurologie", g: "Primar", c: "scju", t: "medic" },
  { n: "STÎNGACIU ANCA RAFILA", s: "Neurologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "BARTOS IRINA ROXANA", s: "Oftalmologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MIHAI ELENA", s: "Oftalmologie", g: "Primar", c: "scju", t: "medic" },
  { n: "TUDOR CORINA", s: "Oftalmologie", g: "Primar", c: "scju", t: "medic" },
  { n: "POPA ELENA DORINA", s: "Oftalmologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BĂDESCU TUDOR", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BĂLĂȘOIU IONEL", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CHICEA RADU", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CODRU MARIAN VALERIU", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CORACIONI ILONCA", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "GINFALEAN GEORGETA", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "ISPASOIU IULIAN FLORIN", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "POP LODROMANEAN DIANA", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MUREȘAN IOAN OLIMPIU", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CIMPEAN TULEA ANDREEA ALEXANDRA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "POPESCU DRAGOȘ", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "POPESCU ELENA CRISTINA", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "POPA NICOLETA LUCICA", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "SUVEICA RADU", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "VOIASCIUC VALENTIN", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "TĂROI CRISTIAN", s: "Obstetrică-Ginecologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CIPAIAN ALEXANDRA", s: "Oncologie", g: "Primar", c: "scju", t: "medic" },
  { n: "COCA RAMONA", s: "Oncologie", g: "Primar", c: "scju", t: "medic" },
  { n: "COCA RAFAELA MARIA", s: "Oncologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "PĂTRAN MONICA", s: "Oncologie", g: "Primar", c: "scju", t: "medic" },
  { n: "SÎNCU PAUL", s: "Oncologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "ZIFCEAC PAULINA", s: "Oncologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "CHIALDA MIHAELA", s: "ORL", g: "Primar", c: "scju", t: "medic" },
  { n: "RUSU GABRIEL", s: "ORL", g: "Primar", c: "scju", t: "medic" },
  { n: "POPESCU ALIN TUDOR", s: "ORL", g: "Primar", c: "scju", t: "medic" },
  { n: "ERMACOV LILIANA", s: "ORL", g: "Specialist", c: "scju", t: "medic" },
  { n: "DASCĂLU IULIAN ALIN", s: "ORL", g: "Specialist", c: "scju", t: "medic" },
  { n: "IHORA BENEDEK IULIA MARIA", s: "Ortopedie", g: "Primar", c: "scju", t: "medic" },
  { n: "LUPEAN ADRIAN", s: "Ortopedie", g: "Primar", c: "scju", t: "medic" },
  { n: "MOHOR COSMIN", s: "Ortopedie", g: "Primar", c: "scju", t: "medic" },
  { n: "SOPON MIRCEA CIPRIAN", s: "Ortopedie", g: "Primar", c: "scju", t: "medic" },
  { n: "STANCIU TEODOR", s: "Ortopedie", g: "Primar", c: "scju", t: "medic" },
  { n: "BOCEA BOGDAN AXENTE", s: "Ortopedie", g: "Specialist", c: "scju", t: "medic" },
  { n: "ION NICOLAS CĂTĂLIN IONUȚ", s: "Ortopedie", g: "Specialist", c: "scju", t: "medic" },
  { n: "CARJA ALINA MIHAELA", s: "Psihiatrie", g: "Primar", c: "scju", t: "medic" },
  { n: "CHICEA LIANA", s: "Reumatologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BURIC NICOLETA", s: "Reumatologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "GRIGORE NICOLAE", s: "Urologie", g: "Primar", c: "scju", t: "medic" },
  { n: "MIHAI IONELA", s: "Urologie", g: "Primar", c: "scju", t: "medic" },
  { n: "TOHĂTI TIBERIU", s: "Urologie", g: "Primar", c: "scju", t: "medic" },
  { n: "BUMBULUȚ BOGDAN", s: "Urologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "DIACONU COSMINA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "scju", t: "medic" },
  { n: "PINTEA ALINA LILIANA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "scju", t: "medic" },
  { n: "POPA FLORINA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "scju", t: "medic" },
  { n: "CANCIU ADRIANA MARIA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "scju", t: "medic" },
  { n: "GIURCA DAN", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "scju", t: "medic" },
  { n: "ȘTEFAN SIMINA ANCUȚA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "scju", t: "medic" },

  // --- 62. SPITALUL DE PNEUMOFTIZIOLOGIE SIBIU ---
  { n: "DRĂGHILĂ IOAN", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "BUGA SEBASTIAN ARISTIDE", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "CHICHIRIȚA ADELA", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "DANCIU LAVINIA", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "SCRIDON MARIA ELENA", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "RĂDULESCU ADRIANA", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "MEȚIU JOLDEȘ OANA ELENA", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "LU CUȚĂ OVIDIU TRAIAN", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "DRUȚU GABRIELA DORINA", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "SIMINA IULIA IDA", s: "Pneumologie", g: "Primar", c: "spital-pneumo", t: "medic" },
  { n: "TECOANTA ADINA LUMINIȚA", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "SUDRIJAN IONELA MONICA", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "DĂNCILĂ DARIUS-DUMITRU", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "OAIDA IULIA-EMANUELA", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "MUSTĂȚEA SIMINA", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "DIRZU VLAD IOAN", s: "Pneumologie", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "ARSENIU RAREȘ", s: "Pneumologie Pediatrică", g: "Specialist", c: "spital-pneumo", t: "medic" },
  { n: "ORLANDEA LAURA ȘTEFANA", s: "Psiholog", g: "", c: "spital-pneumo", t: "psiholog" },

  // --- 63. SPITALUL DE PSIHIATRIE SIBIU ---
  { n: "PETRU CAMELIA", s: "Neurologie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "JOARZA ALINA ADELA", s: "Neurologie", g: "Specialist", c: "spital-psih", t: "medic" },
  { n: "IUGA MĂDĂLINA", s: "Neurologie", g: "Specialist", c: "spital-psih", t: "medic" },
  { n: "PISO CRISTINA", s: "Neurologie Pediatrică", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "HENZEL PAULA SORINA", s: "Neurologie Pediatrică - NPI", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "ROTAR OANA TEODORA", s: "Interne", g: "Specialist", c: "spital-psih", t: "medic" },
  { n: "VOULGAROPOULOS AGATA MIRELA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "MITREA FELICIA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "DUICA LAVINIA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "POPA MIRCEA BOGDAN", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "RUSU SILVIA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "ANGHEL CLAUDIA ELENA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "CORNEA MONICA", s: "Psihiatrie", g: "Specialist", c: "spital-psih", t: "medic" },
  { n: "SELEJAN ADRIAN", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "BUTNARĂȘU SIMONA", s: "Psihiatrie", g: "Specialist", c: "spital-psih", t: "medic" },
  { n: "OROIAN CRISTINA GABRIELA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "MUNTEAN COSMINA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "SABĂU BOGDAN ALIN", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "BACILĂ IONUȚ CIPRIAN", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "SENDRIUC OVIDIU NICOLAE", s: "Psihiatrie", g: "Specialist", c: "spital-psih", t: "medic" },
  { n: "ZAHARIA CARMEN ELENA", s: "Psihiatrie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "DECEAN MARIUS", s: "Psihiatrie Pediatrică", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "PAVEL MIHAELA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "POPA LUCIA MARIA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "NICOARA MARIA DANIELA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "MARA TOMINA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "LASLAU DIANA MARIA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "MĂRGINEAN HURDUBELEA MIHAELA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "STROIA IRINA LIANA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "VULCU RADU IUSTIN", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "GAJA LIVIU", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "ORLANDEA LAURA ȘTEFANA", s: "Psiholog", g: "", c: "spital-psih", t: "psiholog" },
  { n: "LUCA SILVIA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "MICU ELENA CLAUDIA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "DIMA VASILE VIOREL", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "spital-psih", t: "medic" },
  { n: "PANZARIU MĂDĂLINA ANDREEA", s: "Kinetoterapeut", g: "", c: "spital-psih", t: "kinetoterapeut" },

  // --- 64. SPITALUL MUNICIPAL SIBIU ---
  { n: "BARABAS FRANCISC AURELIAN", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "UCENIC OVIDIU MIRCEA", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "HULPUȘ ANDREEA TANIA", s: "Chirurgie Plastică", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "CÂNDEA MARGARETA-ELENA", s: "Interne", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "NISTOR ADRIAN PETRU", s: "Cardiologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "NEGREA MIHAI OCTAVIAN", s: "Cardiologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "OPRIȘ ANCA MARIA", s: "Dermato-venerologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "LUCA SILVIA", s: "Interne", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "DAMIAN ALINA DANIELA", s: "Interne", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "IACOB RAREȘ FLORIN", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "TĂNASE ALEXANDRA", s: "Neurologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "STUPARIU ADRIAN LAURENȚIU", s: "Oftalmologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "FRANDEȘ IULIA", s: "ORL", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "COSERIU FRIJAN GEORGETA LUCIA", s: "ORL", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "ARTIMON MIHAELA HENRIETA", s: "Psihiatrie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "JUGĂREAN ANDREEA ILEANA", s: "Psiholog", g: "", c: "spital-cf", t: "psiholog" },
  { n: "BOGDAN AURELIA", s: "Boli Infecțioase", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "VĂRĂTICEANU ALEXANDRU LUCIAN", s: "Boli Infecțioase", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "BURIAN IOAN", s: "Cardiologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "CALIN ELENA ANTONELA", s: "Cardiologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "BURGHELEA BOGDAN", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "PĂRĂLESCU RAUL ADRIAN", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "MURȘA ADRIAN", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "PAȘTIU ADRIAN OVIDIU", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "DAVEL IOANA ADRIANA", s: "Chirurgie Generală", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "NESTER GABRIEL", s: "Chirurgie Generală", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "NGWENYA MISHACK", s: "Chirurgie Generală", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "BURGHELEA DANIELA", s: "Chirurgie Pediatrică", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "STANCIU LACRIMA TEODORA", s: "Endocrinologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "MIRON VERONICA", s: "Gastroenterologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "PLEȘCUȚA ROXANA", s: "Gastroenterologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "MORARI SVETLANA", s: "Interne", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "ALBU ELENA ROXANA", s: "Interne", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "NEMEȘ NOEMI DALMA", s: "Interne", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "FEIER CRISTIAN DORIAN", s: "Interne", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "DANCU RADU GEORGE SEVASTIAN", s: "Interne / Hematologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "HARABOR GEORGIANA", s: "Recuperare, Medicină Fizică și Balneologie", g: "Specialist", c: "spital-cf", t: "medic" },
  { n: "TRAMBITAS GRIGORE DAN", s: "Recuperare, Medicină Fizică și Balneologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "SOMEȘAN LIVIA IONELA", s: "Neurologie", g: "Primar", c: "spital-cf", t: "medic" },
  { n: "GODO ENIKO", s: "Neurologie", g: "Specialist", c: "spital-cf", t: "medic" },

  // --- 66. SPITALUL MUNICIPAL MEDIAȘ ---
  { n: "VASO EDVIN", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "TRUȚA JAN", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "CORBEANU ONORIU", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "MIHUȚ BOGDAN IOAN", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "JUNCU VICTOR", s: "Obstetrică-Ginecologie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "RĂCHIȚĂ MIHAELA MARIA", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "ȘTEFAN ANDA SIMINA", s: "ORL", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "BĂLIN ALEXANDRU", s: "ORL", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "AHMAD CEZAR", s: "Ortopedie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "ROMAN CIPRIAN OLIVIU", s: "Ortopedie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "OPRIȘAN ANDREI", s: "Ortopedie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "TODORAN LIVIU RADU", s: "Ortopedie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "FIȘER LUCIAN DANIEL", s: "Oncologie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "ILIEȘ SABINA", s: "Pediatrie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "SÎRBU MONICA", s: "Pediatrie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "DOLGANI SVETLANA", s: "Pediatrie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "STANCIU MARIA GEORGIANA", s: "Pediatrie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "SZABO CHIRIAC EVELINE CHRISTINE", s: "Pneumologie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "HULPUȘ ANDREEA GABRIELA", s: "Pneumologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "CÂMPEAN IOAN MARIUS", s: "Pneumologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "HOLERGA IOANA IULIANA", s: "Psihiatrie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "NICOLA THEODOR ALEXANDRU", s: "Urologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "MARICA ALIN", s: "Urologie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "VIDRIGHIN NICOLAE ILIE", s: "Chirurgie Generală", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "POPA SORIN RADU", s: "Interne", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "GLOD EUGEN VASILE", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "SOTIR SETEL CODRUȚA", s: "Pediatrie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "MARIN MARCELA ADINA RODICA", s: "Psihiatrie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "EREMEEV SPIRIDON", s: "Chirurgie Generală", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "BĂLȚAT GEORGIANA", s: "Cardiologie", g: "Specialist", c: "spital-medias", t: "medic" },
  { n: "ISĂILĂ RADU", s: "Interne", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "NISTOR LĂCRĂMIOARA", s: "Interne", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "POP ANAMARIA", s: "Interne", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "BAN MARIA CRISTINA", s: "Interne / Reumatologie", g: "Primar", c: "spital-medias", t: "medic" },
  { n: "PILOIU CLAUDIA", s: "Gastroenterologie", g: "Specialist", c: "spital-medias", t: "medic" },

  // --- 67. SPITALUL ORĂȘENESC CISNĂDIE ---
  { n: "POPA ANDREEA TEODORA", s: "Obstetrică-Ginecologie", g: "Primar", c: "spital-cisnadie", t: "medic" },
  { n: "SOLOMON NICOLETA", s: "ORL", g: "Primar", c: "spital-cisnadie", t: "medic" },
  { n: "ROTH CRISTINA IOANA", s: "Oftalmologie", g: "Primar", c: "spital-cisnadie", t: "medic" },
  { n: "NOVAC MIRCEA ANTONIU", s: "Pediatrie", g: "Primar", c: "spital-cisnadie", t: "medic" },
  { n: "CĂLIN ELENA", s: "Pediatrie", g: "Specialist", c: "spital-cisnadie", t: "medic" },
  { n: "POPA MONICA CARMEN", s: "Psihiatrie", g: "Primar", c: "spital-cisnadie", t: "medic" },
  { n: "MARDARI BOGDAN CĂTĂLIN", s: "Urologie", g: "Primar", c: "spital-cisnadie", t: "medic" },
  { n: "ORLANDEA LAURA ȘTEFANA", s: "Psiholog", g: "", c: "spital-cisnadie", t: "psiholog" },

  // --- 68. TURCU TEODORA ---
  { n: "TURCU TEODORA", s: "Dermato-venerologie", g: "Primar", c: "turcu-dv", t: "medic" },

  // --- 69. DR. TODAN LILIANA ELENA ---
  { n: "TODAN LILIANA ELENA", s: "Dermato-venerologie", g: "Specialist", c: "todan-dv", t: "medic" },

  // --- 70. TĂROI SERV MED SRL ---
  { n: "TĂROI PAULA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "taroi", t: "medic" },
  { n: "TĂROI CRISTIAN", s: "Obstetrică-Ginecologie", g: "Primar", c: "taroi", t: "medic" },

  // --- 71. UNIMED SRL ---
  { n: "MUNTEAN CRISTINA", s: "Obstetrică-Ginecologie", g: "Specialist", c: "unimed", t: "medic" },
  { n: "MUREȘAN IOAN OLIMPIU", s: "Obstetrică-Ginecologie", g: "Primar", c: "unimed", t: "medic" },

  // --- 72. VERES OANA ---
  { n: "VERES OANA", s: "Diabet, Nutriție și Boli Metabolice", g: "Primar", c: "veres-diabet", t: "medic" },
];

// Export pentru Node.js (dacă este folosit ca modul)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CLINICS, PEOPLE, DATA_UPDATED, DATA_SOURCE };
}