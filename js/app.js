// DoRehab Indonesia — Logika Aplikasi & Visualisasi Latihan
// Otomatis memuat ./data/injuries.json saat di-hosting, serta memiliki fallback data tertanam saat dibuka offline (file://).

const EMBEDDED_DOREHAB_DATA = [
  {
    "id": "acl-sprain",
    "name": "Cedera Ligamen Lutut (ACL)",
    "region": "Ekstremitas Bawah",
    "category": "Robekan Ligamen Intra-artikular",
    "definition": "Peregangan berlebih, robekan parsial, atau ruptur total pada Anterior Cruciate Ligament (ACL), yaitu penstabil pasif utama lutut terhadap translasi anterior tibia dan rotasi internal tibia.",
    "mechanism": "Paling sering terjadi tanpa kontak fisik (70–80%) saat deselerasi mendadak, gerakan memotong/berputar (cutting/pivoting) dengan kaki menapak kuat, atau mendarat satu kaki dengan posisi lutut jatuh ke dalam (dynamic knee valgus).",
    "anatomy": "Anterior Cruciate Ligament (berkas anteromedial & posterolateral), berorigo pada kondilus femoralis lateralis posteromedial dan berinsersi pada area interkondilaris anterior tibia.",
    "reference": "van Melick N et al. Evidence-based clinical practice update: practice guidelines for anterior cruciate ligament rehabilitation. Br J Sports Med (BJSM). 2016;50(24):1506-1515.",
    "grades": {
      "1": {
        "summary": "Peregangan mikroskopis serabut ligamen dengan stabilitas mekanis lutut masih utuh (translasi anterior <5 mm pada tes Lachman).",
        "totalRecovery": "4 – 6 Minggu",
        "phaseDurations": [
          "Hari 1–7",
          "Hari 8–18",
          "Hari 19–30",
          "Hari 31–42"
        ]
      },
      "2": {
        "summary": "Robekan parsial serabut ACL disertai efusi (bengkak) sendi sedang, nyeri saat menumpu berat badan, dan kelonggaran anterior ringan-sedang.",
        "totalRecovery": "8 – 14 Minggu",
        "phaseDurations": [
          "Hari 1–14",
          "Minggu 3–5",
          "Minggu 6–10",
          "Minggu 11–14"
        ]
      },
      "3": {
        "summary": "Ruptur total ACL dengan instabilitas rotasional berat (tes Pivot Shift positif). Memerlukan protokol prehab/rehab terstruktur atau rehabilitasi pasca-rekonstruksi ACL.",
        "totalRecovery": "6 – 9+ Bulan",
        "phaseDurations": [
          "Minggu 1–3",
          "Minggu 4–10",
          "Minggu 11–22",
          "Minggu 23–36+"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Kontrol pembengkakan (efusi), pemulihan ekstensi pasif lutut penuh (0°), dan mengatasi inhibisi otot quadriceps (AMI).",
        "physiotherapy": "Prinsip PEACE & LOVE, krioterapi/kompresi, mobilisasi patela, stimulasi listrik neuromuskular (NMES) pada VMO, dan normalisasi pola jalan.",
        "exitCriteria": "Ekstensi pasif lutut penuh (0°), fleksi lutut ≥90–100°, bengkak minimal, dan mampu melakukan Straight Leg Raise tanpa lutut menekuk.",
        "exercises": [
          {
            "level": 1,
            "name": "Quad Sets dengan Gulungan Handuk",
            "tool": "Berat Badan + Handuk Gulung",
            "dosage": "3 set × 10 repetisi (tahan isometrik 5 detik)",
            "cues": "Tekan bagian belakang lutut kuat-kuat ke gulungan handuk di bawah lutut untuk mengontraksikan otot paha depan.",
            "pose": "supine",
            "hep2goQuery": "Quad Set with Towel Roll"
          },
          {
            "level": 2,
            "name": "Heel Slides (Geser Tumit Terlentang)",
            "tool": "Berat Badan + Handuk / Lantai Licin",
            "dosage": "3 set × 12 repetisi",
            "cues": "Geser tumit perlahan ke arah bokong dalam rentang bebas nyeri; gunakan handuk melingkar di telapak kaki untuk bantuan lembut.",
            "pose": "supine",
            "hep2goQuery": "Supine Heel Slides"
          },
          {
            "level": 3,
            "name": "Prone Hang (Peregangan Ekstensi Lutut)",
            "tool": "Tempat Tidur / Bangku + Handuk Gulung",
            "dosage": "3 set × tahan 45–60 detik",
            "cues": "Berbaring tengkurap dengan tempurung lutut tepat di tepi kasur; biarkan gravitasi meluruskan lutut secara penuh.",
            "pose": "prone",
            "hep2goQuery": "Prone Hang Knee Extension"
          },
          {
            "level": 4,
            "name": "Straight Leg Raise (Angkat Kaki Lurus 4 Arah)",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi per arah",
            "cues": "Kunci lutut hingga lurus penuh terlebih dahulu, angkat kaki 30–45° tanpa menekuk lutut, lalu turunkan perlahan selama 3 detik.",
            "pose": "supine",
            "hep2goQuery": "Straight Leg Raise"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Ko-kontraksi quadriceps/hamstring rantai tertutup (CKC), propriosepsi, dan kemampuan naik-turun tangga normal.",
        "physiotherapy": "Pembebanan CKC progresif (fleksi 0–60°), penguatan abduktor/ekstensor panggul untuk mengontrol dynamic valgus, dan keseimbangan satu kaki.",
        "exitCriteria": "Lingkup gerak sendi (ROM) penuh bebas nyeri, jalan normal tanpa pincang, dan indeks simetri kekuatan quadriceps (LSI) ≥70%.",
        "exercises": [
          {
            "level": 1,
            "name": "Double-Leg Glute Bridge",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi",
            "cues": "Dorong tubuh melalui tumit, kencangkan bokong di puncak gerakan, dan jaga tulang kering tetap vertikal.",
            "pose": "bridge",
            "hep2goQuery": "Supine Glute Bridge"
          },
          {
            "level": 2,
            "name": "Wall Sit Isometrik (45–60°)",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × tahan 30–45 detik",
            "cues": "Turunkan punggung menyusuri dinding hingga lutut menekuk 45–60°; pastikan lutut sejajar dengan jari kaki kedua.",
            "pose": "squat",
            "hep2goQuery": "Wall Sit"
          },
          {
            "level": 3,
            "name": "Terminal Knee Extension (TKE)",
            "tool": "Resistance Band Ringan + Tiang Kokoh",
            "dosage": "3 set × 15 repetisi",
            "cues": "Kaitkan band di belakang lutut; mulai dari posisi sedikit menekuk lalu luruskan lutut sepenuhnya melawan tarikan band.",
            "pose": "standing",
            "hep2goQuery": "Terminal Knee Extension Band"
          },
          {
            "level": 4,
            "name": "Forward Step-Up (Anak Tangga 15 cm)",
            "tool": "Berat Badan + Anak Tangga / Kotak",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Melangkah naik dengan mulus tanpa panggul miring atau lutut masuk ke dalam; kontrol gerakan turun selama 3 detik.",
            "pose": "standing",
            "hep2goQuery": "Forward Step Up"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Hipertrofi kekuatan unilateral, kontrol deselerasi eksentrik, dan inisiasi jogging garis lurus.",
        "physiotherapy": "Latihan resistensi berat-lambat (HSR), mekanika squat satu kaki, latihan keseimbangan dengan gangguan, dan pengenalan pliometrik submaksimal.",
        "exitCriteria": "LSI kekuatan quadriceps & hamstring ≥85%, single-leg squat hingga 60° bebas nyeri, dan toleransi jogging lurus.",
        "exercises": [
          {
            "level": 1,
            "name": "Split Squat (Lunge Statis)",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi/sisi",
            "cues": "Turunkan lutut belakang vertikal ke arah lantai sambil menjaga tulang kering depan tegak dan badan lurus.",
            "pose": "squat",
            "hep2goQuery": "Split Squat"
          },
          {
            "level": 2,
            "name": "Single-Leg Romanian Deadlift",
            "tool": "Berat Badan atau Botol Air",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Tekuk tubuh dari sendi panggul dengan lutut sedikit rileks, pertahankan punggung netral dan panggul sejajar.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Romanian Deadlift"
          },
          {
            "level": 3,
            "name": "Bulgarian Split Squat",
            "tool": "Berat Badan + Kursi / Bangku",
            "dosage": "3 set × 8–10 repetisi/kaki",
            "cues": "Letakkan punggung kaki belakang di atas kursi; turun perlahan 3 detik dan dorong kuat melalui telapak kaki depan.",
            "pose": "squat",
            "hep2goQuery": "Bulgarian Split Squat"
          },
          {
            "level": 4,
            "name": "Single-Leg Box/Chair Squat",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 8 repetisi/kaki",
            "cues": "Duduk perlahan ke kursi menggunakan satu kaki tanpa menjatuhkan badan; berdiri kembali dengan lutut sejajar jari kaki.",
            "pose": "squat",
            "hep2goQuery": "Single Leg Squat to Chair"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Kelincahan reaktif, perubahan arah multi-arah (cutting), deselerasi kecepatan tinggi, dan kesiapan psikologis.",
        "physiotherapy": "Latihan deselerasi & perubahan arah spesifik cabang olahraga, baterai tes lompat (hop test), dan latihan perturbasi reaktif.",
        "exitCriteria": "LSI ≥90–95% pada tes kekuatan dan tes lompat satu kaki (Single, Triple, Crossover) + skor kesiapan psikologis ACL-RSI.",
        "exercises": [
          {
            "level": 1,
            "name": "Double-Leg Drop Landing",
            "tool": "Berat Badan + Anak Tangga / Kotak Rendah",
            "dosage": "3 set × 8 repetisi",
            "cues": "Langkahkan kaki turun dari kotak dan mendarat lembut dalam posisi setengah squat atletik tanpa lutut masuk ke dalam.",
            "pose": "plyo",
            "hep2goQuery": "Drop Landing"
          },
          {
            "level": 2,
            "name": "Lateral Skater Bounds (Tahan Mendarat)",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 lompatan/sisi",
            "cues": "Melompat ke samping dari satu kaki ke kaki lainnya, tahan setiap pendaratan selama 2 detik dengan seimbang.",
            "pose": "plyo",
            "hep2goQuery": "Lateral Skater Jump"
          },
          {
            "level": 3,
            "name": "Single-Leg Forward Hop & Stick",
            "tool": "Berat Badan + Lakban Lantai",
            "dosage": "3 set × 6 lompatan/kaki",
            "cues": "Lompat jauh ke depan dengan satu kaki dan redam benturan secara senyap melalui fleksi panggul dan lutut.",
            "pose": "plyo",
            "hep2goQuery": "Single Leg Hop"
          },
          {
            "level": 4,
            "name": "Latihan Deselerasi & Cut 45°",
            "tool": "Berat Badan + Cone / Sepatu",
            "dosage": "4 set × 4 cut/sisi",
            "cues": "Sprint 5 meter, tancapkan kaki luar dengan pusat gravitasi rendah, lalu akselerasi ke arah 45°.",
            "pose": "plyo",
            "hep2goQuery": "Agility Cutting Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "hip-subluxation",
    "name": "Subluksasi Sendi Panggul (Hip Subluxation)",
    "region": "Ekstremitas Bawah",
    "category": "Instabilitas & Pergeseran Parsial Sendi",
    "definition": "Pergeseran parsial dan sementara kaput femoris (kepala tulang paha) keluar dari mangkuk acetabulum tanpa dislokasi total, sering disertai regangan kapsul sendi, robekan labrum acetabular, atau memar tulang (bone bruise).",
    "mechanism": "Trauma benturan aksial saat panggul fleksi dan adduksi (terjatuh dengan lutut terbentur lantai/dasbor) atau gerakan rotasi ekstrem dengan hiperekstensi pada olahraga kontak, senam, dan bela diri.",
    "anatomy": "Articulatio Coxae (kaput femoris & acetabulum), Labrum Acetabular, Ligamentum Iliofemorale (ligamen Y), Ligamentum Ischiofemorale, serta otot rotator dalam panggul (piriformis, obturator, gemelli, quadratus femoris).",
    "reference": "Reiman MP et al. Consensus recommendations on the classification, definition and diagnostic criteria of hip-related pain in young and middle-aged active adults (International Hip-related Pain Research Network / BJSM). 2020;54(11):631-641.",
    "grades": {
      "1": {
        "summary": "Subluksasi mikro/transien ringan; iritasi kapsul posterior atau anterior tanpa defek labrum mayor, nyeri saat rotasi akhir, dan stabilitas sendi terjaga.",
        "totalRecovery": "3 – 5 Minggu",
        "phaseDurations": [
          "Hari 1–7",
          "Hari 8–16",
          "Hari 17–26",
          "Hari 27–35"
        ]
      },
      "2": {
        "summary": "Subluksasi traumatik sedang disertai efusi sendi panggul, robekan parsial labrum/kapsul, rasa 'ngilu/geser' (apprehension) saat rotasi, dan hambatan tumpuan.",
        "totalRecovery": "6 – 10 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–5",
          "Minggu 6–8",
          "Minggu 9–10"
        ]
      },
      "3": {
        "summary": "Subluksasi berat dengan lesi labrum luas, memar tulang posterior acetabulum, atau robekan ligamen kapsular signifikan (wajib evaluasi MRI & ortopedi).",
        "totalRecovery": "12 – 20 Minggu",
        "phaseDurations": [
          "Minggu 1–3",
          "Minggu 4–8",
          "Minggu 9–15",
          "Minggu 16–20"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Proteksi kapsul & labrum sendi panggul, menghindari posisi provokatif (fleksi dalam + adduksi + rotasi internal), serta aktivasi isometrik stabilisator dalam.",
        "physiotherapy": "Pembatasan gerak panggul pada zona aman (hindari fleksi >90° dan menyilangkan kaki), kontrol nyeri/efusi, serta aktivasi isometrik gluteus dan rotator dalam.",
        "exitCriteria": "Jalan normal tanpa pincang (antalgic gait), nyeri istirahat 0/10, dan toleransi kontraksi isometrik panggul tanpa rasa mengganjal.",
        "exercises": [
          {
            "level": 1,
            "name": "Isometric Glute Squeeze (Kontraksi Bokong Terlentang)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi (tahan 6 detik)",
            "cues": "Berbaring terlentang dengan kaki lurus netral; kencangkan otot bokong kuat-kuat untuk menstabilkan kaput femoris di dalam mangkuk sendi.",
            "pose": "supine",
            "hep2goQuery": "Isometric Glute Squeeze"
          },
          {
            "level": 2,
            "name": "Supine Isometric Hip Abduction (Tahan Bantal/Tangan)",
            "tool": "Berat Badan + Sabuk / Handuk",
            "dosage": "3 set × 8 repetisi (tahan 5 detik)",
            "cues": "Ikatkan handuk di sekeliling paha luar dengan lutut menekuk 30°; dorong paha keluar melawan tahanan handuk tanpa menggerakkan sendi.",
            "pose": "supine",
            "hep2goQuery": "Isometric Hip Abduction"
          },
          {
            "level": 3,
            "name": "Supine Heel Slide Terbatas (Zona Aman <80°)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi",
            "cues": "Geser tumit perlahan menekuk lutut dan panggul maksimal hingga 70–80° dalam rentang bebas nyeri dan tanpa bunyi klik.",
            "pose": "supine",
            "hep2goQuery": "Supine Heel Slides"
          },
          {
            "level": 4,
            "name": "Dead Bug Statis (Stabilisasi Lumbo-Pelvik)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Kunci panggul dan punggung bawah rata di matras sambil meluruskan satu kaki perlahan melayang 15 cm di atas lantai.",
            "pose": "supine",
            "hep2goQuery": "Dead Bug Exercise"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Penguatan dinamik rotator dalam panggul (deep hip rotators), gluteus medius, dan pemulihan lingkup gerak sendi bebas jepitan.",
        "physiotherapy": "Latihan kontrol rotasi eksternal/internal terkontrol, penguatan rantai tertutup bilateral, dan latihan propriosepsi tumpuan satu kaki.",
        "exitCriteria": "Lingkup gerak fleksi dan rotasi panggul ≥85% sisi sehat tanpa rasa cemas/instabilitas (negative apprehension).",
        "exercises": [
          {
            "level": 1,
            "name": "Clamshell Terkontrol (Rotasi Eksternal Panggul)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi/sisi",
            "cues": "Berbaring miring dengan lutut menekuk 45°; buka lutut atas perlahan tanpa membiarkan panggul terguling ke belakang.",
            "pose": "prone",
            "hep2goQuery": "Clamshell Exercise"
          },
          {
            "level": 2,
            "name": "Double-Leg Glute Bridge dengan Band",
            "tool": "Mini Loop Band Ringan + Matras",
            "dosage": "3 set × 12 repetisi",
            "cues": "Pasang band di atas lutut, dorong lutut sedikit keluar agar sejajar kaki, lalu angkat panggul hingga sejajar bahu.",
            "pose": "bridge",
            "hep2goQuery": "Glute Bridge with Band"
          },
          {
            "level": 3,
            "name": "Quadruped Rock-Back (Mobilisasi Panggul Aman)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi",
            "cues": "Posisi merangkak dengan punggung netral; dorong panggul perlahan ke arah tumit hingga terasa regangan kapsul ringan yang nyaman.",
            "pose": "prone",
            "hep2goQuery": "Quadruped Rock Back"
          },
          {
            "level": 4,
            "name": "Single-Leg Stance dengan Kontrol Panggul",
            "tool": "Berat Badan",
            "dosage": "3 set × 30 detik/kaki",
            "cues": "Berdiri satu kaki tegak; pastikan tulang panggul sisi kaki yang diangkat tidak turun (mencegah Trendelenburg sign).",
            "pose": "standing",
            "hep2goQuery": "Single Leg Balance"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Stabilitas panggul unilateral di bawah beban eksentrik, kontrol rotasi dinamis, dan inisiasi lari ringan.",
        "physiotherapy": "Latihan hip hinge satu kaki, lateral band walk, step-down eksentrik, dan transisi joging progresif.",
        "exitCriteria": "Indeks simetri kekuatan abduktor dan ekstensor panggul (LSI) ≥85% serta squat satu kaki stabil.",
        "exercises": [
          {
            "level": 1,
            "name": "Lateral Monster Walk (Jalan Menyamping Band)",
            "tool": "Mini Loop Band",
            "dosage": "3 set × 12 langkah/arah",
            "cues": "Posisi setengah squat atletik; melangkah ke samping sambil menjaga jari kaki tetap menghadap lurus ke depan.",
            "pose": "standing",
            "hep2goQuery": "Monster Walk Band"
          },
          {
            "level": 2,
            "name": "Standing Hip Airplane (Stabilitas Rotasi)",
            "tool": "Berat Badan + Tumpuan Dinding",
            "dosage": "3 set × 6 repetisi/kaki",
            "cues": "Berdiri satu kaki dengan badan condong ke depan; putar panggul membuka dan menutup secara perlahan di atas kaput femoris.",
            "pose": "standing",
            "hep2goQuery": "Hip Airplane Exercise"
          },
          {
            "level": 3,
            "name": "Reverse Lunge (Langkah Mundur Terkontrol)",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Langkahkan satu kaki ke belakang dan turunkan tubuh vertikal; jaga panggul depan tetap stabil tanpa goyang ke samping.",
            "pose": "squat",
            "hep2goQuery": "Reverse Lunge"
          },
          {
            "level": 4,
            "name": "Single-Leg Glute Bridge",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Angkat satu kaki lurus ke depan dan dorong panggul naik menggunakan satu tumit tanpa membiarkan panggul miring.",
            "pose": "bridge",
            "hep2goQuery": "Single Leg Glute Bridge"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Redaman gaya kejut multi-arah, rotasi eksplosif, perubahan arah cepat, dan kepercayaan diri penuh saat bertanding.",
        "physiotherapy": "Pliometrik panggul-lutut terintegrasi, latihan pivot/cutting progresif, dan simulasi kontak/jatuh aman spesifik olahraga.",
        "exitCriteria": "LSI kekuatan & tes lompat ≥90–95%, tes FADIR/FABER bebas nyeri, dan kesiapan penuh kembali ke latihan tim.",
        "exercises": [
          {
            "level": 1,
            "name": "Lateral Skater Bound & Hold",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 lompatan/sisi",
            "cues": "Melompat menyamping dari satu kaki ke kaki lain dan kunci pendaratan dengan stabilitas panggul penuh selama 2 detik.",
            "pose": "plyo",
            "hep2goQuery": "Lateral Skater Jump"
          },
          {
            "level": 2,
            "name": "Single-Leg Hop & Stick Multi-Arah",
            "tool": "Berat Badan + Lakban Lantai",
            "dosage": "3 set × 6 lompatan/kaki",
            "cues": "Lompat ke depan dan diagonal pada satu kaki, serap pendaratan melalui otot bokong dan paha belakang secara senyap.",
            "pose": "plyo",
            "hep2goQuery": "Single Leg Hop"
          },
          {
            "level": 3,
            "name": "Rotational Step-Out & Pivot Drill",
            "tool": "Berat Badan + Cone",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Lakukan langkah pivot membuka dan menutup panggul dengan kecepatan progresif tanpa rasa tidak stabil.",
            "pose": "plyo",
            "hep2goQuery": "Agility Pivot Drill"
          },
          {
            "level": 4,
            "name": "Sprint Akselerasi & Deselerasi 45°",
            "tool": "Berat Badan + Cone / Sepatu",
            "dosage": "4 set × 4 repetisi/sisi",
            "cues": "Lari cepat 5 meter, lakukan pengereman terkontrol dengan pusat gravitasi rendah, dan berakselerasi ke arah baru.",
            "pose": "plyo",
            "hep2goQuery": "Agility Cutting Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "ankle-sprain",
    "name": "Keseleo Pergelangan Kaki (Ankle Sprain)",
    "region": "Ekstremitas Bawah",
    "category": "Cedera Ligamen Lateral",
    "definition": "Peregangan traumatik akut atau robekan pada kompleks ligamen penstabil lateral pergelangan kaki akibat mekanisme inversi dan plantarfleksi berlebihan.",
    "mechanism": "Inversi dan rotasi internal pergelangan kaki secara mendadak saat posisi kaki plantarfleksi (misalnya mendarat di atas kaki pemain lain atau permukaan lapangan tidak rata).",
    "anatomy": "Anterior Talofibular Ligament (ATFL — cedera pada ~85% kasus), Calcaneofibular Ligament (CFL), dan Posterior Talofibular Ligament (PTFL).",
    "reference": "Vuurberg G et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med (BJSM). 2018;52(15):956.",
    "grades": {
      "1": {
        "summary": "Peregangan ringan pada ATFL tanpa robekan makroskopis; bengkak minimal, nyeri tekan lokal ringan, dan masih mampu menumpu berat badan.",
        "totalRecovery": "1 – 2 Minggu",
        "phaseDurations": [
          "Hari 1–3",
          "Hari 4–7",
          "Hari 8–11",
          "Hari 12–14"
        ]
      },
      "2": {
        "summary": "Robekan parsial ATFL (dan kemungkinan CFL) disertai bengkak sedang, memar kebiruan, nyeri saat menumpu, dan kelonggaran anterior ringan.",
        "totalRecovery": "3 – 6 Minggu",
        "phaseDurations": [
          "Hari 1–5",
          "Hari 6–14",
          "Minggu 3–4",
          "Minggu 5–6"
        ]
      },
      "3": {
        "summary": "Ruptur total ATFL dan CFL dengan bengkak difus berat, tidak mampu menumpu berat badan di awal, dan instabilitas mekanis yang jelas.",
        "totalRecovery": "8 – 12 Minggu",
        "phaseDurations": [
          "Hari 1–10",
          "Hari 11–28",
          "Minggu 5–8",
          "Minggu 9–12"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Pengurangan edema, proteksi dari cedera inversi berulang, dan pemulihan mobilitas aktif pergelangan kaki bebas nyeri.",
        "physiotherapy": "Balut tekan/brace semi-rigid, elevasi, gerakan pompa dorsofleksi/plantarfleksi bebas nyeri, dan tumpuan bertahap.",
        "exitCriteria": "Bengkak akut minimal, menumpu berat badan tanpa nyeri, dan ROM aktif minimal 50% dari sisi sehat.",
        "exercises": [
          {
            "level": 1,
            "name": "Ankle Pumps (Pompa Pergelangan Kaki)",
            "tool": "Berat Badan + Bantal",
            "dosage": "3 set × 20 repetisi",
            "cues": "Tinggikan kaki di atas bantal, tarik jari kaki ke arah tulang kering lalu arahkan ke bawah secara perlahan.",
            "pose": "supine",
            "hep2goQuery": "Ankle Pumps"
          },
          {
            "level": 2,
            "name": "Ankle Alphabet (Menulis Huruf di Udara)",
            "tool": "Berat Badan",
            "dosage": "2 set × Huruf A–Z",
            "cues": "Gambar huruf kapital A hingga Z di udara hanya dengan menggerakkan jempol dan sendi pergelangan kaki.",
            "pose": "seated",
            "hep2goQuery": "Ankle Alphabet"
          },
          {
            "level": 3,
            "name": "Seated Towel Calf Stretch",
            "tool": "Berat Badan + Handuk Panjang",
            "dosage": "3 set × tahan 30 detik",
            "cues": "Lingkarkan handuk di telapak kaki depan, jaga lutut lurus, dan tarik perlahan ke arah dorsofleksi.",
            "pose": "seated",
            "hep2goQuery": "Towel Calf Stretch"
          },
          {
            "level": 4,
            "name": "Isometrik Eversi Melawan Dinding",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 10 repetisi (tahan 5 detik)",
            "cues": "Tekan sisi luar telapak kaki secara lembut ke dinding tanpa menggerakkan sendi untuk mengaktifkan otot peroneus.",
            "pose": "seated",
            "hep2goQuery": "Isometric Ankle Eversion"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Memulihkan ROM dorsofleksi rantai tertutup dan kekuatan eversi otot peroneus (fibularis longus/brevis).",
        "physiotherapy": "Mobilisasi luncur posterior talocrural, latihan resistensi elastis progresif, dan keseimbangan statis satu kaki.",
        "exitCriteria": "Tes dorsofleksi Knee-to-Wall dalam selisih 2 cm dari sisi sehat dan jinjit dua kaki bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Resisted Ankle 4-Way (Fokus Eversi)",
            "tool": "Resistance Band Ringan",
            "dosage": "3 set × 15 repetisi/arah",
            "cues": "Stabilkan tungkai bawah dan putar telapak kaki ke arah luar melawan tarikan band secara perlahan.",
            "pose": "seated",
            "hep2goQuery": "Ankle 4 Way Theraband"
          },
          {
            "level": 2,
            "name": "Mobilisasi Dorsofleksi Knee-to-Wall",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 12 repetisi",
            "cues": "Jaga tumit menempel rata di lantai dan dorong lutut ke depan menyentuh dinding tanpa lengkung kaki ambles.",
            "pose": "standing",
            "hep2goQuery": "Knee to Wall Ankle Stretch"
          },
          {
            "level": 3,
            "name": "Double-Leg Heel Raises (Jinjit Dua Kaki)",
            "tool": "Berat Badan + Sandaran Dinding",
            "dosage": "3 set × 15 repetisi",
            "cues": "Angkat tumit bertumpu merata pada pangkal jempol dan jari kedua; turunkan perlahan selama 3 detik.",
            "pose": "standing",
            "hep2goQuery": "Double Leg Heel Raise"
          },
          {
            "level": 4,
            "name": "Berdiri Satu Kaki (Mata Terbuka → Tertutup)",
            "tool": "Berat Badan",
            "dosage": "3 set × 30 detik/sisi",
            "cues": "Berdiri tanpa alas kaki di atas kaki cedera, jaga tiga titik tumpu telapak kaki (tumit, pangkal jempol & kelingking).",
            "pose": "standing",
            "hep2goQuery": "Single Leg Balance"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Daya tahan betis/peroneus unilateral, gangguan keseimbangan dinamis, dan mekanika pendaratan benturan rendah.",
        "physiotherapy": "Pembebanan eksentrik betis di anak tangga, jangkauan keseimbangan Star Excursion, dan lompatan pogo submaksimal.",
        "exitCriteria": "Mampu melakukan ≥25 jinjit satu kaki bebas nyeri dan jangkauan Star Excursion simetris.",
        "exercises": [
          {
            "level": 1,
            "name": "Single-Leg Heel Raise di Lantai Datar",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 12–15 repetisi/kaki",
            "cues": "Dorong lurus ke atas bertumpu pada pangkal jempol tanpa pergelangan kaki terguling ke luar.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Heel Raise"
          },
          {
            "level": 2,
            "name": "Keseimbangan Satu Kaki di Atas Handuk Lipat",
            "tool": "Berat Badan + Handuk Lipat",
            "dosage": "3 set × 30 detik/kaki",
            "cues": "Berdiri di permukaan handuk yang tidak rata sambil menolehkan kepala ke kiri-kanan atau melempar bola.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Balance Foam"
          },
          {
            "level": 3,
            "name": "Star Excursion Clock Reaches",
            "tool": "Berat Badan + Lakban Lantai",
            "dosage": "3 set × 6 jangkauan/arah",
            "cues": "Seimbangkan tubuh pada kaki cedera sambil menyentuhkan ujung jari kaki satunya ke depan, samping, dan belakang.",
            "pose": "standing",
            "hep2goQuery": "Star Excursion Balance"
          },
          {
            "level": 4,
            "name": "Eccentric Calf Lowering di Anak Tangga",
            "tool": "Berat Badan + Anak Tangga",
            "dosage": "3 set × 12 repetisi/kaki",
            "cues": "Naik dengan dua kaki, pindahkan beban ke kaki cedera, lalu turunkan tumit melewati tepi tangga selama 4 detik.",
            "pose": "standing",
            "hep2goQuery": "Eccentric Heel Drop"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Kekakuan elastis siklus regang-pendek (SSC), lompatan multi-arah, dan gerakan memotong (cutting) spesifik olahraga.",
        "physiotherapy": "Pliometrik elastis pergelangan kaki, latihan kelincahan lateral, dan edukasi tapping/bracing profilaksis.",
        "exitCriteria": "LSI ≥90% pada Side-Hop Test (30 detik) dan Figure-of-8 Hop Test tanpa rasa ragu.",
        "exercises": [
          {
            "level": 1,
            "name": "Double-Leg Ankle Pogo Hops",
            "tool": "Berat Badan",
            "dosage": "3 set × 20 lompatan",
            "cues": "Memantul cepat menggunakan ujung telapak kaki dengan lutut kaku dan waktu kontak lantai sesingkat mungkin.",
            "pose": "plyo",
            "hep2goQuery": "Ankle Pogo Jumps"
          },
          {
            "level": 2,
            "name": "Single-Leg Line Hops (Medial/Lateral)",
            "tool": "Berat Badan + Garis Lantai",
            "dosage": "3 set × 15 detik/kaki",
            "cues": "Lompat cepat bolak-balik melewati garis lakban dengan satu kaki tanpa pergelangan kaki tertekuk ke dalam.",
            "pose": "plyo",
            "hep2goQuery": "Single Leg Lateral Line Hops"
          },
          {
            "level": 3,
            "name": "Diagonal Hop & Stick",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 lompatan/kaki",
            "cues": "Lompat diagonal 45° ke depan dan kunci posisi mendarat seketika selama 2 detik.",
            "pose": "plyo",
            "hep2goQuery": "Diagonal Single Leg Hop"
          },
          {
            "level": 4,
            "name": "Sprint & Cut Angka-8 (Figure-of-8)",
            "tool": "Berat Badan + 2 Sepatu / Cone",
            "dosage": "4 set × 2 putaran",
            "cues": "Sprint membentuk lintasan angka 8 mengitari penanda berjarak 5 meter dengan tumpuan sisi luar kaki yang kokoh.",
            "pose": "plyo",
            "hep2goQuery": "Figure 8 Running Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "hamstring-strain",
    "name": "Cedera Otot Hamstring (Hamstring Strain)",
    "region": "Ekstremitas Bawah",
    "category": "Robekan Otot-Tendon (Myotendinous)",
    "definition": "Disrupsi regangan akut pada unit otot-tendon paha belakang, paling sering terjadi pada sambungan muskulotendinosa proksimal saat lari cepat atau peregangan ekstrem.",
    "mechanism": "Tipe 1: Fase ayunan akhir saat sprint kecepatan tinggi (deselerasi eksentrik cepat pada tibia). Tipe 2: Fleksi panggul ekstrem disertai ekstensi lutut (menendang, sliding, menari).",
    "anatomy": "Caput longum Biceps Femoris (paling sering saat sprint, ~80%), Semimembranosus (sering pada cedera overstretch), dan Semitendinosus.",
    "reference": "Hickey JT et al. Pain-Free Versus Pain-Threshold Rehabilitation Following Acute Hamstring Strain Injury: A Randomized Controlled Trial. J Orthop Sports Phys Ther (JOSPT). 2020;50(2):91-103.",
    "grades": {
      "1": {
        "summary": "Disrupsi miofibril ringan (<10% penampang otot); rasa kencang atau kram lokal, kehilangan kekuatan minimal, pola jalan normal.",
        "totalRecovery": "2 – 3 Minggu",
        "phaseDurations": [
          "Hari 1–4",
          "Hari 5–10",
          "Hari 11–16",
          "Hari 17–21"
        ]
      },
      "2": {
        "summary": "Robekan parsial serabut otot/MTJ (10–50%); nyeri tajam terlokalisir, nyeri tekan jelas, jalan pincang, dan nyeri saat fleksi lutut melawan tahanan.",
        "totalRecovery": "4 – 8 Minggu",
        "phaseDurations": [
          "Hari 1–7",
          "Hari 8–21",
          "Minggu 4–6",
          "Minggu 7–8"
        ]
      },
      "3": {
        "summary": "Robekan total atau avulsi otot/tendon; hematoma hebat, cekungan teraba, kelemahan berat (memerlukan konsultasi bedah jika avulsi proksimal).",
        "totalRecovery": "12 – 24 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–6",
          "Minggu 7–14",
          "Minggu 15–24"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Melindungi jaringan parut yang sedang sembuh, mobilisasi lembut bebas nyeri, dan neuromodulasi isometrik dini.",
        "physiotherapy": "Istirahat relatif, balut tekan, kontraksi isometrik submaksimal sudut tengah bebas nyeri, dan stabilisasi lumbo-pelvik.",
        "exitCriteria": "Langkah jalan normal bebas nyeri dan toleransi fleksi lutut isometrik submaksimal pada sudut 45°.",
        "exercises": [
          {
            "level": 1,
            "name": "Supine Isometric Heel Dig (Sudut Lutut 45°)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 5 repetisi (tahan 10 detik)",
            "cues": "Dengan lutut menekuk 45°, tekan tumit perlahan ke lantai (usaha 30–50%) tanpa mengangkat panggul.",
            "pose": "supine",
            "hep2goQuery": "Isometric Hamstring Heel Dig"
          },
          {
            "level": 2,
            "name": "Supine Active Knee Extension (90/90)",
            "tool": "Berat Badan",
            "dosage": "3 set × 12 repetisi",
            "cues": "Pegang paha vertikal pada fleksi panggul 90° dan luruskan lutut perlahan hingga terasa tarikan ringan bebas nyeri.",
            "pose": "supine",
            "hep2goQuery": "Active Knee Extension 90 90"
          },
          {
            "level": 3,
            "name": "Dead Bug (Kontrol Pelvik)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Jaga punggung bawah menempel rata di matras sambil meluruskan lengan dan kaki berlawanan secara perlahan.",
            "pose": "supine",
            "hep2goQuery": "Dead Bug Exercise"
          },
          {
            "level": 4,
            "name": "Short-Lever Glute Bridge",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi",
            "cues": "Dekatkan tumit ke bokong untuk memfokuskan kerja gluteus maximus sekaligus mengurangi beban hamstring.",
            "pose": "bridge",
            "hep2goQuery": "Glute Bridge"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Pembebanan regangan progresif pada panjang otot lebih panjang dan pola gerak engsel panggul (hip-hinge).",
        "physiotherapy": "Tahanan isometrik tuas panjang, progresi slider/bridge eksentrik, dan jogging ringan <60% kecepatan maksimal.",
        "exitCriteria": "Sudut Active Knee Extension penuh bebas nyeri dan single-leg bridge bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Long-Lever Hamstring Bridge (Lutut 20°)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi (tahan 3 detik)",
            "cues": "Letakkan tumit lebih jauh ke depan (lutut menekuk ~20–30°) dan angkat panggul untuk melatih hamstring proksimal.",
            "pose": "bridge",
            "hep2goQuery": "Long Lever Hamstring Bridge"
          },
          {
            "level": 2,
            "name": "Supine Towel Eccentric Leg Curl",
            "tool": "Berat Badan + Handuk di Lantai Licin",
            "dosage": "3 set × 8 repetisi",
            "cues": "Angkat panggul dalam posisi bridge, lalu geser tumit perlahan ke depan selama 4 detik hingga kaki lurus.",
            "pose": "bridge",
            "hep2goQuery": "Supine Hamstring Slider"
          },
          {
            "level": 3,
            "name": "Romanian Deadlift (Berat Badan / Tongkat)",
            "tool": "Berat Badan + Gagang Sapu / Tongkat",
            "dosage": "3 set × 12 repetisi",
            "cues": "Jaga tongkat menyentuh kepala, punggung atas, dan tulang ekor sambil mendorong panggul ke belakang.",
            "pose": "standing",
            "hep2goQuery": "Romanian Deadlift Bodyweight"
          },
          {
            "level": 4,
            "name": "Single-Leg Elevated Heel Bridge",
            "tool": "Berat Badan + Kursi / Kotak Rendah",
            "dosage": "3 set × 8 repetisi/kaki",
            "cues": "Tumpukan satu tumit di atas kursi rendah dan dorong panggul ke atas tanpa panggul berputar.",
            "pose": "bridge",
            "hep2goQuery": "Single Leg Elevated Bridge"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Penguatan eksentrik tegangan tinggi pada panjang sarkomer panjang dan akselerasi sprint progresif.",
        "physiotherapy": "Protokol L Askling (Extender, Diver, Glider), Nordic hamstring lowers, dan lari stride hingga 80–85% kecepatan puncak.",
        "exitCriteria": "Simetri kekuatan eksentrik hamstring ≥90% dan sprint bebas nyeri pada intensitas 85%.",
        "exercises": [
          {
            "level": 1,
            "name": "The Extender (Protokol Askling)",
            "tool": "Berat Badan",
            "dosage": "3 set × 12 repetisi/kaki",
            "cues": "Pegang paha pada fleksi panggul 90° dan luruskan lutut secara aktif hingga ujung peregangan 2x/hari.",
            "pose": "supine",
            "hep2goQuery": "Askling Extender Hamstring"
          },
          {
            "level": 2,
            "name": "The Diver (Pesawat Satu Kaki)",
            "tool": "Berat Badan",
            "dosage": "3 set × 6 repetisi/kaki",
            "cues": "Bungkukkan badan pada kaki tumpu sambil meluruskan kaki belakang dan menjulurkan lengan ke depan perlahan.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Romanian Deadlift Reach"
          },
          {
            "level": 3,
            "name": "The Glider (Geser Split Dinamis)",
            "tool": "Berat Badan + Handuk / Kaus Kaki",
            "dosage": "3 set × 6 repetisi/kaki",
            "cues": "Geser kaki belakang ke belakang di atas handuk menjadi lunge panjang, lalu tarik kembali dengan hamstring depan.",
            "pose": "squat",
            "hep2goQuery": "Hamstring Glider Exercise"
          },
          {
            "level": 4,
            "name": "Assisted Nordic Hamstring Lower",
            "tool": "Berat Badan + Bantalan Lutut + Penahan",
            "dosage": "3 set × 5 repetisi",
            "cues": "Kaitkan pergelangan kaki di bawah sofa/partner; jaga panggul lurus dan turunkan badan ke depan selambat mungkin.",
            "pose": "prone",
            "hep2goQuery": "Nordic Hamstring Curl"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Mekanika sprint kecepatan maksimal (>95%), deselerasi fase ayunan cepat, dan ketahanan terhadap kelelahan.",
        "physiotherapy": "Sprint terbang (flying sprints) 100%, latihan balistik tendangan/overstretch, dan pengondisian spesifik cabang olahraga.",
        "exitCriteria": "Sprint usaha penuh bebas nyeri, LSI kekuatan isometrik/eksentrik ≥95%, dan rasio H:Q normal.",
        "exercises": [
          {
            "level": 1,
            "name": "A-Skips & Latihan Ritme Lutut Tinggi",
            "tool": "Berat Badan",
            "dosage": "3 set × 20 meter",
            "cues": "Tarik tumit tepat ke bawah bokong dengan kontak kaki ke tanah yang cepat dan bertenaga.",
            "pose": "plyo",
            "hep2goQuery": "A Skip Running Drill"
          },
          {
            "level": 2,
            "name": "Single-Leg Bounding (Lompat Kijang)",
            "tool": "Berat Badan",
            "dosage": "3 set × 20 meter",
            "cues": "Bergantian melakukan lompatan horizontal jauh dengan menekankan tarikan aktif hamstring sebelum mendarat.",
            "pose": "plyo",
            "hep2goQuery": "Bounding Drill"
          },
          {
            "level": 3,
            "name": "Ayunan Kaki Dinamis (Deselerasi Tendangan)",
            "tool": "Berat Badan + Sandaran Dinding",
            "dosage": "3 set × 12 ayunan/kaki",
            "cues": "Ayunkan kaki lurus semakin tinggi ke depan, kontrol pengereman pada akhir gerakan ayunan.",
            "pose": "standing",
            "hep2goQuery": "Standing Forward Leg Swings"
          },
          {
            "level": 4,
            "name": "Progresi Flying Sprint 30m (90–100%)",
            "tool": "Berat Badan + Cone / Sepatu",
            "dosage": "4 set × 30m akselerasi",
            "cues": "Tingkatkan kecepatan bertahap selama 20m, pertahankan sprint puncak rileks 20m, lalu perlambat mulus.",
            "pose": "plyo",
            "hep2goQuery": "Sprint Acceleration Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "groin-strain",
    "name": "Cedera Otot Pangkal Paha (Adductor / Groin Strain)",
    "region": "Ekstremitas Bawah",
    "category": "Cedera Otot-Tendon Adduktor",
    "definition": "Regangan akut atau akut-pada-kronis kompleks otot-tendon adduktor paha medial, umumnya di dekat perlekatan tulang pubis proksimal atau sambungan muskulotendinosa.",
    "mechanism": "Abduksi panggul mendadak dan kuat saat otot berkontraksi eksentrik cepat—seperti gerakan memotong ke samping, menendang/menekel bola, atau tolakan seluncur.",
    "anatomy": "Adductor Longus (paling sering cedera, ~62%), Gracilis, Pectineus, Adductor Brevis, dan Adductor Magnus.",
    "reference": "Serner A et al. Return to Sport After Criteria-Based Rehabilitation of Acute Adductor Injuries in Male Athletes: A Prospective Cohort Study. Orthop J Sports Med / BJSM Consensus (Doha Agreement). 2020;8(1).",
    "grades": {
      "1": {
        "summary": "Peregangan berlebih serabut adduktor ringan; nyeri tekan lokal, nyeri ringan saat adduksi melawan tahanan, tanpa defisit kekuatan.",
        "totalRecovery": "2 – 3 Minggu",
        "phaseDurations": [
          "Hari 1–4",
          "Hari 5–10",
          "Hari 11–16",
          "Hari 17–21"
        ]
      },
      "2": {
        "summary": "Robekan parsial adductor longus; nyeri tajam di selangkangan saat cutting/menendang, tes jepit nyeri, dan kelemahan ringan-sedang.",
        "totalRecovery": "4 – 8 Minggu",
        "phaseDurations": [
          "Hari 1–7",
          "Hari 8–21",
          "Minggu 4–6",
          "Minggu 7–8"
        ]
      },
      "3": {
        "summary": "Robekan total atau avulsi fibrokartilago proksimal dari pubis; bengkak/memar luas di paha dalam dan kelemahan berat.",
        "totalRecovery": "10 – 16 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–6",
          "Minggu 7–11",
          "Minggu 12–16"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Modulasi nyeri, aktivasi isometrik otot adduktor, dan pemulihan ROM abduksi panggul lembut bebas nyeri.",
        "physiotherapy": "Pengurangan beban relatif, jepit bantal isometrik bilateral bebas nyeri (lutut 45° dan 0°), dan aktivasi core.",
        "exitCriteria": "Berjalan tanpa nyeri dan nyeri ≤2/10 saat tes jepit adduktor submaksimal sudut 45°.",
        "exercises": [
          {
            "level": 1,
            "name": "Jepit Bantal Isometrik Terlentang (Lutut 45°)",
            "tool": "Berat Badan + Bantal Lipat",
            "dosage": "3 set × 8 repetisi (tahan 5 detik)",
            "cues": "Tekuk lutut 45°, letakkan bantal di antara kedua lutut, dan jepit lembut dengan tenaga 40–50% bebas nyeri.",
            "pose": "supine",
            "hep2goQuery": "Isometric Hip Adduction Pillow Squeeze"
          },
          {
            "level": 2,
            "name": "Jepit Bantal Isometrik (Kaki Lurus)",
            "tool": "Berat Badan + Bantal",
            "dosage": "3 set × 8 repetisi (tahan 5 detik)",
            "cues": "Letakkan bantal di antara lutut/pergelangan kaki yang lurus dan tekan ke dalam secara mulus tanpa menahan napas.",
            "pose": "supine",
            "hep2goQuery": "Straight Leg Adductor Squeeze"
          },
          {
            "level": 3,
            "name": "Supine Butterfly Active Hip Opening",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi",
            "cues": "Temukan kedua telapak kaki dan turunkan lutut ke samping perlahan dalam batas bebas nyeri.",
            "pose": "supine",
            "hep2goQuery": "Supine Butterfly Stretch"
          },
          {
            "level": 4,
            "name": "Clamshell (Dukungan Abduktor Panggul)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi/sisi",
            "cues": "Berbaring miring dengan lutut menekuk 45°, jaga panggul sejajar, dan angkat lutut atas perlahan.",
            "pose": "prone",
            "hep2goQuery": "Clamshell Exercise"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Adduksi konsentrik/eksentrik dinamis di seluruh lingkup gerak dan stabilitas panggul bidang frontal.",
        "physiotherapy": "Adduksi panggul berbaring miring, adduksi band berdiri, dan pembebanan squat/lunge bidang frontal progresif.",
        "exitCriteria": "Abduksi pasif panggul penuh bebas nyeri dan adduksi berbaring miring bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Side-Lying Bottom-Leg Adduction Lift",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi/sisi",
            "cues": "Langkahkan kaki atas ke depan matras; angkat kaki bawah yang lurus ke arah langit-langit dengan jari kaki menghadap depan.",
            "pose": "prone",
            "hep2goQuery": "Side Lying Hip Adduction"
          },
          {
            "level": 2,
            "name": "Standing Band Hip Adduction",
            "tool": "Resistance Band Ringan + Tiang Kokoh",
            "dosage": "3 set × 12 repetisi/sisi",
            "cues": "Lingkarkan band di pergelangan kaki, berdiri tegak, dan tarik kaki melewati garis tengah tubuh dengan kontrol kembali 3 detik.",
            "pose": "standing",
            "hep2goQuery": "Standing Hip Adduction Band"
          },
          {
            "level": 3,
            "name": "Sumo / Wide-Stance Squat",
            "tool": "Berat Badan",
            "dosage": "3 set × 12 repetisi",
            "cues": "Buka kaki lebar dengan jari kaki mengarah keluar 30°; turunkan panggul lurus ke bawah dengan lutut sejajar jari kaki.",
            "pose": "squat",
            "hep2goQuery": "Sumo Squat Bodyweight"
          },
          {
            "level": 4,
            "name": "Short-Lever Copenhagen Plank (Lutut)",
            "tool": "Berat Badan + Kursi / Bangku Rendah",
            "dosage": "3 set × 15–20 detik/sisi",
            "cues": "Tumpukan lutut dalam kaki atas di atas kursi; angkat panggul hingga garis lurus sehingga otot adduktor atas menopang badan.",
            "pose": "prone",
            "hep2goQuery": "Short Lever Copenhagen Plank"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Kekuatan eksentrik adduktor beban tinggi (protokol Copenhagen) dan lunge bidang frontal dinamis.",
        "physiotherapy": "Adduksi Copenhagen tuas panjang, lateral lunge, dan lari garis lurus/melengkung progresif.",
        "exitCriteria": "Copenhagen plank tuas penuh bebas nyeri (20 detik) dan simetri kekuatan jepit adduktor ≥90%.",
        "exercises": [
          {
            "level": 1,
            "name": "Dynamic Lateral Lunge (Persiapan Cossack)",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Melangkah lebar ke samping, dorong panggul ke belakang di atas kaki yang menekuk sementara kaki satunya tetap lurus.",
            "pose": "squat",
            "hep2goQuery": "Side Lunge"
          },
          {
            "level": 2,
            "name": "Sliding Towel Lateral Lunge",
            "tool": "Berat Badan + Handuk di Lantai Licin",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Geser satu kaki ke samping di atas handuk menjadi side lunge dalam, lalu tarik kembali menggunakan otot paha dalam.",
            "pose": "squat",
            "hep2goQuery": "Sliding Lateral Lunge"
          },
          {
            "level": 3,
            "name": "Long-Lever Copenhagen Adduction (Pergelangan Kaki)",
            "tool": "Berat Badan + Kursi / Bangku",
            "dosage": "3 set × 6–8 repetisi/sisi",
            "cues": "Tumpukan pergelangan kaki atas di atas kursi; turunkan panggul bawah mendekati lantai 3 detik lalu angkat kembali.",
            "pose": "prone",
            "hep2goQuery": "Copenhagen Adduction Exercise"
          },
          {
            "level": 4,
            "name": "Ayunan Tendangan Silang dengan Band",
            "tool": "Resistance Band + Tiang",
            "dosage": "3 set × 10 repetisi/sisi",
            "cues": "Simulasikan ayunan menendang diagonal menyilang tubuh melawan tahanan band dengan rotasi batang tubuh.",
            "pose": "standing",
            "hep2goQuery": "Standing Hip Flexion Adduction Kick"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Tolakan lateral kecepatan tinggi, cutting reaktif, dan kekuatan menendang maksimal.",
        "physiotherapy": "Pliometrik lateral, latihan cutting zig-zag, dan peningkatan intensitas menendang/berlari progresif.",
        "exitCriteria": "Menendang dan cutting maksimal bebas nyeri, rasio kekuatan adduktor-terhadap-abduktor ≥95% (>0.80).",
        "exercises": [
          {
            "level": 1,
            "name": "Lateral Shuffle & Stick",
            "tool": "Berat Badan + Cone / Sepatu",
            "dosage": "3 set × 10 meter/sisi",
            "cues": "Geser cepat ke samping sejauh 5 meter dan lakukan pengereman keras pada kaki luar tanpa rasa tertarik di pangkal paha.",
            "pose": "plyo",
            "hep2goQuery": "Lateral Shuffle Drill"
          },
          {
            "level": 2,
            "name": "Explosive Lateral Skater Jumps",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 lompatan/sisi",
            "cues": "Tolak tubuh kuat dari sisi medial telapak kaki untuk jarak horizontal maksimal.",
            "pose": "plyo",
            "hep2goQuery": "Skater Jumps"
          },
          {
            "level": 3,
            "name": "T-Drill Perubahan Arah",
            "tool": "Berat Badan + 4 Sepatu / Cone",
            "dosage": "4 set × 1 repetisi",
            "cues": "Sprint maju 5m, geser kiri 5m, geser kanan 10m, kembali ke tengah, dan lari mundur.",
            "pose": "plyo",
            "hep2goQuery": "T Drill Agility"
          },
          {
            "level": 4,
            "name": "Progresi Umpan & Tendangan Menyilang",
            "tool": "Berat Badan + Bola",
            "dosage": "3 set × 10 tendangan/kaki",
            "cues": "Tingkatkan bertahap dari umpan kaki dalam 50% hingga tendangan jarak jauh 100% dengan gerak lanjut penuh.",
            "pose": "plyo",
            "hep2goQuery": "Soccer Kicking Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "lumbar-strain",
    "name": "Cedera Otot Punggung Bawah (Lumbar Strain)",
    "region": "Tulang Belakang",
    "category": "Regangan Miofasial Paraspinal",
    "definition": "Peregangan mekanis akut atau robekan mikro pada otot paraspinal lumbal dan ligamen spinal posterior tanpa penekanan akar saraf.",
    "mechanism": "Pembebanan fleksi-rotasi batang tubuh mendadak (misalnya mengangkat beban dengan punggung membungkuk), hiperekstensi cepat, atau torsi berulang pada olahraga lempar/ayun.",
    "anatomy": "Erector Spinae (iliocostalis, longissimus), Multifidus, Quadratus Lumborum, dan fasia torakolumbalis.",
    "reference": "George SZ et al. Interventions for the Management of Acute and Chronic Low Back Pain: Revision 2021 Clinical Practice Guidelines. J Orthop Sports Phys Ther (JOSPT). 2021;51(11):CPG1-CPG60.",
    "grades": {
      "1": {
        "summary": "Spasme otot paraspinal ringan dan kekakuan lokal; nyeri terlokalisir di punggung bawah tanpa penjalaran ke bokong/tungkai.",
        "totalRecovery": "1 – 2 Minggu",
        "phaseDurations": [
          "Hari 1–3",
          "Hari 4–7",
          "Hari 8–11",
          "Hari 12–14"
        ]
      },
      "2": {
        "summary": "Robekan miofibril parsial dengan penjagaan otot (guarding) paraspinal, nyeri saat membungkuk/menengadah, dan keterbatasan ROM lumbal.",
        "totalRecovery": "3 – 5 Minggu",
        "phaseDurations": [
          "Hari 1–5",
          "Hari 6–14",
          "Minggu 3–4",
          "Minggu 5"
        ]
      },
      "3": {
        "summary": "Robekan berat paraspinal/fasia torakolumbalis dengan spasme akut hebat dan kesulitan berdiri tegak di awal (singkirkan fraktur/HNP).",
        "totalRecovery": "6 – 10 Minggu",
        "phaseDurations": [
          "Hari 1–10",
          "Hari 11–24",
          "Minggu 4–7",
          "Minggu 8–10"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Mengurangi spasme protektif paraspinal, menghindari tirah baring berkepanjangan, dan memulihkan mobilitas panggul/lumbal lembut.",
        "physiotherapy": "Jalan kaki aktif dini, pernapasan diafragma, pelvic tilt lembut, dan desensitisasi jaringan lunak.",
        "exitCriteria": "Mampu berjalan kaki 15–20 menit terus-menerus dan melakukan pelvic tilt tanpa nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Pernapasan Diafragma Posisi 90/90",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 8 napas perlahan",
            "cues": "Sandarkan betis di atas kursi; tarik napas dalam ke rusuk bawah dan hembuskan perlahan untuk merilekskan spasme lumbal.",
            "pose": "supine",
            "hep2goQuery": "90 90 Diaphragmatic Breathing"
          },
          {
            "level": 2,
            "name": "Supine Posterior Pelvic Tilts",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi",
            "cues": "Tempelkan punggung bawah secara lembut ke matras dengan mengaktifkan otot perut bawah, lalu kembali ke netral.",
            "pose": "supine",
            "hep2goQuery": "Supine Pelvic Tilt"
          },
          {
            "level": 3,
            "name": "Supine Lower Trunk Rotations",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi/sisi",
            "cues": "Rapatkan kedua lutut dan ayunkan perlahan ke kiri dan kanan dalam rentang bebas nyeri yang nyaman.",
            "pose": "supine",
            "hep2goQuery": "Supine Lower Trunk Rotation"
          },
          {
            "level": 4,
            "name": "Mobilisasi Quadruped Cat-Camel",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 siklus",
            "cues": "Dalam posisi merangkak, lengkungkan dan bulatkan punggung tengah/bawah perlahan tanpa memaksa ujung nyeri.",
            "pose": "prone",
            "hep2goQuery": "Cat Camel Stretch"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Daya tahan core anti-ekstensi, anti-rotasi, dan anti-fleksi lateral (fondasi McGill Big 3).",
        "physiotherapy": "Penguncian core tulang belakang netral, latihan disosiasi hip-hinge, dan aktivasi gluteus.",
        "exitCriteria": "ROM fleksi/ekstensi lumbal penuh bebas nyeri dan side plank 30 detik bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "McGill Curl-Up (Tulang Belakang Netral)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 8 repetisi (tahan 8 detik)",
            "cues": "Letakkan tangan di bawah lengkung pinggang, tekuk satu lutut, dan angkat kepala/bahu 5 cm dari lantai.",
            "pose": "supine",
            "hep2goQuery": "McGill Curl Up"
          },
          {
            "level": 2,
            "name": "Bird-Dog (Jangkauan Berlawanan Merangkak)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 8 repetisi/sisi (tahan 5 detik)",
            "cues": "Luruskan lengan dan kaki yang berlawanan tanpa membiarkan pinggang melengkung turun atau panggul berputar.",
            "pose": "prone",
            "hep2goQuery": "Bird Dog Exercise"
          },
          {
            "level": 3,
            "name": "Modified Side Plank (Lutut Ditekuk)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 20–30 detik/sisi",
            "cues": "Sejajarkan siku di bawah bahu, kencangkan core, dan angkat panggul membentuk garis lurus dari lutut ke kepala.",
            "pose": "prone",
            "hep2goQuery": "Modified Side Plank"
          },
          {
            "level": 4,
            "name": "Hip Hinge dengan Tongkat / Gagang Sapu",
            "tool": "Berat Badan + Gagang Sapu",
            "dosage": "3 set × 12 repetisi",
            "cues": "Pertahankan 3 titik kontak (kepala, punggung atas, tulang ekor) saat membungkuk murni dari sendi panggul.",
            "pose": "standing",
            "hep2goQuery": "Dowel Hip Hinge"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Kekuatan rantai posterior dinamis, latihan membawa beban (loaded carries), dan kontrol batang tubuh multi-bidang.",
        "physiotherapy": "Daya tahan ekstensor progresif, tekanan anti-rotasi, dan jogging ringan.",
        "exitCriteria": "Tahanan ekstensi punggung 60 detik bebas nyeri dan toleransi gerakan rotasi dinamis.",
        "exercises": [
          {
            "level": 1,
            "name": "Full Side Plank (Kaki Lurus)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 30 detik/sisi",
            "cues": "Jaga pergelangan kaki, panggul, dan bahu sejajar dalam satu garis tanpa pinggang turun.",
            "pose": "prone",
            "hep2goQuery": "Side Plank"
          },
          {
            "level": 2,
            "name": "Standing Pallof Press (Anti-Rotasi)",
            "tool": "Resistance Band + Pengait Pintu",
            "dosage": "3 set × 10 repetisi/sisi",
            "cues": "Dorong band lurus ke depan dari tengah dada dan tahan tarikan rotasi kembali ke arah pengait.",
            "pose": "standing",
            "hep2goQuery": "Pallof Press Band"
          },
          {
            "level": 3,
            "name": "Suitcase Carry (Jalan Bawa Beban Satu Tangan)",
            "tool": "Galon Air / Ransel Berisi",
            "dosage": "3 set × 20 meter/sisi",
            "cues": "Berjalan tegak memegang beban di satu tangan tanpa memiringkan pinggang ke samping.",
            "pose": "standing",
            "hep2goQuery": "Suitcase Carry"
          },
          {
            "level": 4,
            "name": "Prone Superman / Ekstensi Punggung",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi (tahan 3 detik)",
            "cues": "Angkat dada dan tungkai sedikit dari lantai dengan mengencangkan otot bokong dan ekstensor tulang belakang.",
            "pose": "prone",
            "hep2goQuery": "Prone Superman Exercise"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Transfer gaya berkecepatan tinggi melalui rantai kinetik, daya rotasional, dan penyerapan benturan.",
        "physiotherapy": "Lemparan/ayunan rotasional spesifik olahraga, stabilisasi batang tubuh reaktif, dan integrasi latihan penuh.",
        "exitCriteria": "100% bebas nyeri pada latihan rotasi, angkat beban, dan benturan spesifik olahraga.",
        "exercises": [
          {
            "level": 1,
            "name": "Dead Bug dengan Tarikan Band",
            "tool": "Resistance Band + Pengait",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Tahan tarikan band di atas kepala sambil meluruskan kaki bergantian tanpa rusuk terangkat.",
            "pose": "supine",
            "hep2goQuery": "Dead Bug Band Pullover"
          },
          {
            "level": 2,
            "name": "Standing Band Woodchopper (Atas-ke-Bawah)",
            "tool": "Resistance Band + Pengait Tinggi",
            "dosage": "3 set × 10 repetisi/sisi",
            "cues": "Putar tubuh melalui panggul dan punggung atas sambil menjaga pinggang tetap terkunci stabil.",
            "pose": "standing",
            "hep2goQuery": "Band Woodchopper"
          },
          {
            "level": 3,
            "name": "Single-Leg Hop & Stick dengan Kunci Core",
            "tool": "Berat Badan",
            "dosage": "3 set × 6 repetisi/kaki",
            "cues": "Mendarat dari lompatan satu kaki dengan tubuh tegak dan tanpa kemiringan batang tubuh ke samping.",
            "pose": "plyo",
            "hep2goQuery": "Single Leg Hop Stabilization"
          },
          {
            "level": 4,
            "name": "Ayunan / Lemparan Bayangan Rotasional Eksplosif",
            "tool": "Berat Badan atau Bantal / Bola Ringan",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Lakukan ayunan/lemparan rotasional kecepatan penuh dengan urutan transfer tenaga dari panggul ke bahu.",
            "pose": "plyo",
            "hep2goQuery": "Rotational Throw Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "rotator-cuff",
    "name": "Cedera Rotator Cuff (Tendinopati / Robekan)",
    "region": "Ekstremitas Atas",
    "category": "Patologi Tendon Rotator Cuff",
    "definition": "Regangan akut, tendinopati reaktif, atau robekan parsial/total pada tendon penstabil-kompresor dinamis sendi glenohumeral bahu.",
    "mechanism": "Deselerasi/kokang lengan atas kepala berulang (melempar, berenang, tenis) atau jatuh bertumpu pada tangan yang terentang (FOOSH).",
    "anatomy": "Supraspinatus (paling sering terkena), Infraspinatus, Teres Minor (rotator eksternal), dan Subscapularis (rotator internal).",
    "reference": "Kuhn JE et al. Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears / JOSPT Rotator Cuff Tendinopathy Guidelines. J Shoulder Elbow Surg / JOSPT.",
    "grades": {
      "1": {
        "summary": "Tendinopati reaktif rotator cuff atau regangan serabut ringan; nyeri busur gerak (60–120° abduksi), kekuatan angkat aktif masih utuh.",
        "totalRecovery": "2 – 4 Minggu",
        "phaseDurations": [
          "Hari 1–5",
          "Hari 6–14",
          "Hari 15–22",
          "Hari 23–28"
        ]
      },
      "2": {
        "summary": "Robekan ketebalan parsial (<50% ketebalan tendon); nyeri malam hari saat berbaring miring ke sisi sakit, kelemahan rotasi eksternal/abduksi.",
        "totalRecovery": "6 – 12 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–5",
          "Minggu 6–9",
          "Minggu 10–12"
        ]
      },
      "3": {
        "summary": "Robekan ketebalan penuh (full-thickness tear); tanda drop-arm positif, kelemahan berat mengangkat lengan aktif (rehab konservatif vs bedah).",
        "totalRecovery": "4 – 6+ Bulan",
        "phaseDurations": [
          "Minggu 1–4",
          "Minggu 5–10",
          "Minggu 11–18",
          "Minggu 19–24+"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Pembebanan tendon isometrik analgesik, dekompresi subakromial melalui postur, dan ROM pasif/terbantu bebas nyeri.",
        "physiotherapy": "Isometrik rotasi eksternal bebas nyeri (analgesia tendon), ayunan pendulum dekompresi, dan ekstensi torakal.",
        "exitCriteria": "Nyeri malam hari mereda dan elevasi lengan terbantu bebas nyeri ≥130°.",
        "exercises": [
          {
            "level": 1,
            "name": "Ayunan Pendulum Codman",
            "tool": "Berat Badan + Meja / Kursi",
            "dosage": "3 set × 45 detik",
            "cues": "Bungkukkan badan bertumpu dengan tangan sehat di meja; biarkan lengan cedera menggantung rileks dan berayun melingkar kecil.",
            "pose": "upper",
            "hep2goQuery": "Codman Pendulum Exercise"
          },
          {
            "level": 2,
            "name": "Isometrik Rotasi Eksternal (Gulungan Handuk)",
            "tool": "Berat Badan + Handuk Gulung + Dinding",
            "dosage": "4 set × tahan 30 detik",
            "cues": "Jepit gulungan handuk di antara siku dan rusuk; tekan punggung pergelangan tangan lembut ke dinding tanpa bergerak.",
            "pose": "upper",
            "hep2goQuery": "Isometric Shoulder External Rotation"
          },
          {
            "level": 3,
            "name": "Supine Dowel-Assisted Flexion",
            "tool": "Berat Badan + Gagang Sapu / Tongkat",
            "dosage": "3 set × 10 repetisi",
            "cues": "Berbaring terlentang memegang tongkat; gunakan lengan sehat untuk membantu mengangkat lengan cedera ke atas kepala.",
            "pose": "supine",
            "hep2goQuery": "Supine Wand Shoulder Flexion"
          },
          {
            "level": 4,
            "name": "Retraksi & Depresi Skapula",
            "tool": "Berat Badan",
            "dosage": "3 set × 12 repetisi (tahan 5 detik)",
            "cues": "Tarik tulang belikat perlahan ke belakang dan ke bawah tanpa mengangkat bahu ke arah telinga.",
            "pose": "standing",
            "hep2goQuery": "Scapular Retraction"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Remodeling kolagen rotator cuff melalui pembebanan isotonik progresif dan rotasi ke atas skapulotorakal.",
        "physiotherapy": "Rotasi eksternal berbaring miring/band, serratus anterior punch, dan elevasi aktif-terbantu penuh di atas kepala.",
        "exitCriteria": "Elevasi aktif di atas kepala penuh bebas nyeri dan rotasi eksternal berbaring miring bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Wall Slides dengan Handuk (Serratus)",
            "tool": "Berat Badan + Handuk Kecil + Dinding",
            "dosage": "3 set × 10 repetisi",
            "cues": "Tekan lengan bawah ringan ke dinding beralaskan handuk dan geser ke atas sambil mendorong tulang belikat melebar.",
            "pose": "upper",
            "hep2goQuery": "Wall Slide Serratus"
          },
          {
            "level": 2,
            "name": "Side-Lying External Rotation",
            "tool": "Berat Badan + Handuk Gulung + Botol Air",
            "dosage": "3 set × 12 repetisi",
            "cues": "Berbaring pada sisi sehat dengan handuk di bawah siku atas; putar lengan bawah ke atas dan turunkan selama 3 detik.",
            "pose": "prone",
            "hep2goQuery": "Side Lying Shoulder External Rotation"
          },
          {
            "level": 3,
            "name": "Standing Band External Rotation (0°)",
            "tool": "Resistance Band Ringan + Handuk Gulung",
            "dosage": "3 set × 12 repetisi",
            "cues": "Jepit handuk di siku samping badan dan putar lengan bawah ke arah luar secara mulus.",
            "pose": "upper",
            "hep2goQuery": "Standing External Rotation Band"
          },
          {
            "level": 4,
            "name": "Full-Can Scaption Raise (hingga 90°)",
            "tool": "Berat Badan atau Botol Air 500ml",
            "dosage": "3 set × 10 repetisi",
            "cues": "Angkat lengan 30° serong ke depan bidang tubuh dengan ibu jari menghadap ke atas hingga setinggi bahu.",
            "pose": "upper",
            "hep2goQuery": "Scaption Full Can"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Kekuatan rotator cuff pada abduksi 90°, daya tahan bahu posterior, dan integrasi rantai kinetik.",
        "physiotherapy": "Penguatan rotasi eksternal 90/90, stabilisator skapula prone Y/T/W, dan tumpuan berat badan rantai tertutup.",
        "exitCriteria": "Simetri kekuatan rotasi eksternal/internal ≥85% dan gerakan menekan di atas kepala bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Prone Y-T-W Scapular Raises",
            "tool": "Berat Badan + Matras / Kasur",
            "dosage": "3 set × 8 repetisi tiap huruf",
            "cues": "Berbaring tengkurap dan angkat ibu jari ke arah langit-langit membentuk huruf W, T, dan Y menggunakan otot punggung atas.",
            "pose": "prone",
            "hep2goQuery": "Prone Y T W"
          },
          {
            "level": 2,
            "name": "90/90 Band External Rotation",
            "tool": "Resistance Band + Pengait Pintu",
            "dosage": "3 set × 12 repetisi",
            "cues": "Angkat siku setinggi bahu 90° dan putar lengan bawah ke belakang menyerupai posisi ancang-ancang melempar.",
            "pose": "upper",
            "hep2goQuery": "90 90 Shoulder External Rotation"
          },
          {
            "level": 3,
            "name": "Quadruped Shoulder Taps",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 sentuhan/sisi",
            "cues": "Tahan posisi plank tinggi/merangkak; sentuh bahu berlawanan perlahan tanpa badan bergoyang ke samping.",
            "pose": "prone",
            "hep2goQuery": "Plank Shoulder Taps"
          },
          {
            "level": 4,
            "name": "Tangkap Deselerasi Eksentrik (Posisi 90/90)",
            "tool": "Botol Air Kecil / Bola",
            "dosage": "3 set × 10 repetisi",
            "cues": "Lepaskan dan tangkap kembali botol ringan di posisi bahu 90/90, redam pengereman dengan otot bahu belakang.",
            "pose": "upper",
            "hep2goQuery": "Shoulder Eccentric External Rotation"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Siklus regang-pendek kecepatan tinggi di atas kepala, reaktivitas pliometrik cuff, dan program lempar/servis bertahap.",
        "physiotherapy": "Dribble bola di dinding atas kepala, lemparan/bantingan atas kepala, dan program interval melempar/servis.",
        "exitCriteria": "Simetri kekuatan isometrik ER/IR ≥95%, kesetaraan tes CKCUEST, dan aksi atas kepala usaha penuh bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Overhead Wall Ball / Pillow Dribbles",
            "tool": "Bola Ringan / Handuk Gulung + Dinding",
            "dosage": "3 set × 20 detik",
            "cues": "Pantulkan bola secara cepat ke dinding di ketinggian atas kepala dengan siku sedikit menekuk.",
            "pose": "upper",
            "hep2goQuery": "Wall Dribbles Shoulder"
          },
          {
            "level": 2,
            "name": "Plyometric Wall Push-Ups",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 10 repetisi",
            "cues": "Tolak tubuh secara eksplosif dari dinding dan tangkap kembali berat badan secara lembut dengan kontrol skapula.",
            "pose": "upper",
            "hep2goQuery": "Plyometric Wall Push Up"
          },
          {
            "level": 3,
            "name": "Split-Stance Band Overhead Pull-Down",
            "tool": "Resistance Band + Pengait Tinggi",
            "dosage": "3 set × 10 repetisi",
            "cues": "Langkahkan kaki berlawanan ke depan dan tarik band dari posisi kokang atas kepala ke gerakan lanjut.",
            "pose": "upper",
            "hep2goQuery": "Band Throwing Motion"
          },
          {
            "level": 4,
            "name": "Interval Melempar / Servis Atas Kepala",
            "tool": "Bola Olahraga / Raket",
            "dosage": "3 set × 15 lemparan (75–100%)",
            "cues": "Tingkatkan jarak dan kecepatan secara sistematis dengan transfer rantai kinetik penuh dari panggul ke lengan.",
            "pose": "plyo",
            "hep2goQuery": "Interval Throwing Program"
          }
        ]
      }
    ]
  },
  {
    "id": "tennis-elbow",
    "name": "Tennis Elbow (Epikondilalgia Lateralis)",
    "region": "Ekstremitas Atas",
    "category": "Tendinopati Ekstensor Pergelangan Tangan",
    "definition": "Tendinopati angiofibroblastik akibat beban berlebih pada origo tendon ekstensor pergelangan tangan komunis di epikondilus lateralis humerus.",
    "mechanism": "Ekstensi pergelangan tangan eksentrik berulang dan genggaman kuat (pukulan backhand, memalu, penggunaan mouse/mengetik berlebihan).",
    "anatomy": "Extensor Carpi Radialis Brevis (ECRB — lokasi utama), Extensor Digitorum Communis, dan epikondilus lateralis humerus.",
    "reference": "Bisset LM, Vicenzino B. Physiotherapy management of lateral epicondylalgia. J Physiother. 2015;61(4):174-181 & Coombes BK et al. JOSPT.",
    "grades": {
      "1": {
        "summary": "Tendinopati reaktif tahap awal; pegal setelah beraktivitas di sisi luar siku, nyeri menggenggam minimal.",
        "totalRecovery": "3 – 6 Minggu",
        "phaseDurations": [
          "Hari 1–7",
          "Minggu 2–3",
          "Minggu 4–5",
          "Minggu 6"
        ]
      },
      "2": {
        "summary": "Disrepair tendon dengan nyeri menetap saat menggenggam/mengangkat benda (tes Cozen & Maudsley positif) serta penurunan kekuatan genggam bebas nyeri.",
        "totalRecovery": "6 – 12 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–6",
          "Minggu 7–10",
          "Minggu 11–12"
        ]
      },
      "3": {
        "summary": "Tendinosis degeneratif dengan robekan parsial intrasubstansi ECRB; nyeri hebat bahkan saat aktivitas harian sederhana (mengangkat cangkir).",
        "totalRecovery": "3 – 6 Bulan",
        "phaseDurations": [
          "Minggu 1–3",
          "Minggu 4–9",
          "Minggu 10–18",
          "Minggu 19–24"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Analgesia tendon melalui ekstensi pergelangan tangan isometrik tertahan dan manajemen beban (hindari peregangan agresif).",
        "physiotherapy": "Isometrik ekstensi pergelangan tangan 30–45 detik, edukasi brace counterforce, dan luncur saraf radialis.",
        "exitCriteria": "Nyeri istirahat berkurang dan peningkatan kekuatan genggam bebas nyeri segera setelah latihan isometrik.",
        "exercises": [
          {
            "level": 1,
            "name": "Isometric Wrist Extension Hold",
            "tool": "Berat Badan + Meja",
            "dosage": "4 set × tahan 30–45 detik",
            "cues": "Sandarkan lengan bawah di meja dengan pergelangan tangan ekstensi 20°; tekan lembut dari atas dengan tangan sehat.",
            "pose": "seated",
            "hep2goQuery": "Isometric Wrist Extension"
          },
          {
            "level": 2,
            "name": "Mobilisasi Fleksi/Ekstensi Pergelangan Tangan",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi",
            "cues": "Dengan siku menekuk 90°, gerakkan pergelangan tangan naik-turun secara perlahan dalam rentang bebas nyeri.",
            "pose": "seated",
            "hep2goQuery": "Active Wrist Flexion Extension"
          },
          {
            "level": 3,
            "name": "Remas Handuk Gulung / Spons Lembut",
            "tool": "Handuk Tangan Gulung",
            "dosage": "3 set × 10 repetisi (tahan 5 detik)",
            "cues": "Pertahankan pergelangan tangan netral (sedikit ekstensi 20°) saat meremas gulungan handuk tanpa nyeri siku.",
            "pose": "seated",
            "hep2goQuery": "Towel Grip Squeeze"
          },
          {
            "level": 4,
            "name": "Radial Nerve Slider (Luncur Saraf Radialis)",
            "tool": "Berat Badan",
            "dosage": "2 set × 8 repetisi perlahan",
            "cues": "Turunkan bahu, putar lengan ke dalam, tekuk pergelangan tangan, dan miringkan kepala ke arah bahu yang sama secara bersamaan.",
            "pose": "standing",
            "hep2goQuery": "Radial Nerve Glide"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Pembebanan eksentrik dan resistensi berat-lambat (HSR) ekstensor pergelangan tangan untuk merangsang sintesis kolagen tenosit.",
        "physiotherapy": "Ekstensi pergelangan tangan eksentrik dengan botol air atau band ringan, serta latihan supinasi/pronasi lengan bawah.",
        "exitCriteria": "Ekstensi pergelangan tangan eksentrik 1 kg bebas nyeri dan kekuatan genggam bebas nyeri ≥75%.",
        "exercises": [
          {
            "level": 1,
            "name": "Eccentric Wrist Extension (Botol Air)",
            "tool": "Botol Air 500ml + Meja",
            "dosage": "3 set × 12 repetisi",
            "cues": "Gunakan tangan sehat untuk mengangkat botol ke atas, lalu turunkan perlahan dengan tangan cedera selama 4 detik.",
            "pose": "seated",
            "hep2goQuery": "Eccentric Wrist Extension"
          },
          {
            "level": 2,
            "name": "Supinasi / Pronasi Lengan Bawah",
            "tool": "Botol Air / Sendok Kayu",
            "dosage": "3 set × 12 repetisi",
            "cues": "Pegang ujung sendok kayu atau botol dengan siku menekuk 90°; putar telapak tangan menghadap atas dan bawah perlahan.",
            "pose": "seated",
            "hep2goQuery": "Forearm Pronation Supination"
          },
          {
            "level": 3,
            "name": "Wrist Radial Deviation (Ibu Jari ke Atas)",
            "tool": "Botol Air 500ml",
            "dosage": "3 set × 12 repetisi",
            "cues": "Sandarkan lengan bawah di paha dengan ibu jari menghadap langit-langit; angkat dan turunkan pergelangan tangan perlahan.",
            "pose": "seated",
            "hep2goQuery": "Wrist Radial Deviation"
          },
          {
            "level": 4,
            "name": "Towel Twist (Pengganti Tyler Twist)",
            "tool": "Handuk Mandi Gulung",
            "dosage": "3 set × 10 repetisi",
            "cues": "Peras gulungan handuk tebal dengan pergelangan tangan cedera mulai dari posisi ekstensi lalu memutar perlahan ke fleksi.",
            "pose": "seated",
            "hep2goQuery": "Towel Twist Tennis Elbow"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Pembebanan ekstensor dengan siku lurus, daya tahan genggaman, dan integrasi skapula/bahu proksimal.",
        "physiotherapy": "Pembebanan pergelangan tangan siku lurus, latihan band ekstensor jari, dan latihan rantai kinetik bahu-ke-pergelangan.",
        "exitCriteria": "Simetri kekuatan genggam bebas nyeri ≥90% (siku lurus) dan mengangkat beban berat bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Ekstensi Jari dengan Karet Gelang",
            "tool": "Karet Gelang Tebal",
            "dosage": "3 set × 15 repetisi",
            "cues": "Pasang karet gelang melingkari ujung-ujung jari dan mekarkan jari lebar melawan tahanan karet.",
            "pose": "seated",
            "hep2goQuery": "Finger Extension Rubber Band"
          },
          {
            "level": 2,
            "name": "Straight-Elbow Band Wrist Extension",
            "tool": "Resistance Band + Injak Kaki",
            "dosage": "3 set × 12 repetisi",
            "cues": "Injak band dengan kaki dan tarik pergelangan tangan ke atas secara perlahan dengan posisi siku lurus penuh.",
            "pose": "standing",
            "hep2goQuery": "Standing Wrist Extension Band"
          },
          {
            "level": 3,
            "name": "Farmer's Carry (Pegangan Netral)",
            "tool": "Galon Air / Ransel Berisi",
            "dosage": "3 set × 20 meter",
            "cues": "Pegang ransel/galon di samping tubuh dengan siku lurus dan tulang belikat terkunci stabil.",
            "pose": "standing",
            "hep2goQuery": "Farmers Carry"
          },
          {
            "level": 4,
            "name": "Wall Plank dengan Tumpuan Ujung Jari",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 25 detik",
            "cues": "Condongkan badan ke dinding bertumpu pada telapak terbuka, tekan ujung jari kuat ke dinding untuk mengaktifkan lengan bawah.",
            "pose": "upper",
            "hep2goQuery": "Wall Plank"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Deselerasi eksentrik kecepatan tinggi saat benturan/pukulan dan daya tahan genggaman spesifik olahraga.",
        "physiotherapy": "Latihan ayunan bayangan backhand/pukulan, evaluasi peredam getaran raket, dan kembali bertanding bertahap.",
        "exitCriteria": "100% kekuatan genggam bebas nyeri (siku lurus) dan nol kekakuan pagi hari setelah latihan.",
        "exercises": [
          {
            "level": 1,
            "name": "Jatuh & Tangkap Bola (Telapak Menghadap Bawah)",
            "tool": "Bola Tenis / Gulungan Kaus Kaki",
            "dosage": "3 set × 15 tangkapan",
            "cues": "Pegang bola dengan telapak ke bawah, lepaskan sesaat, dan sambar cepat di udara untuk melatih refleks ekstensor.",
            "pose": "seated",
            "hep2goQuery": "Ball Drop Catch Forearm"
          },
          {
            "level": 2,
            "name": "Ayunan Deselerasi Backhand dengan Band",
            "tool": "Resistance Band + Pengait",
            "dosage": "3 set × 12 repetisi",
            "cues": "Lakukan ayunan backhand terkontrol melawan tahanan band dengan pergelangan tangan kokoh saat titik kontak.",
            "pose": "upper",
            "hep2goQuery": "Band Backhand Tennis"
          },
          {
            "level": 3,
            "name": "Push-Up Plus di Lantai / Lutut",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi",
            "cues": "Lakukan push-up lalu dorong punggung atas ke arah langit-langit di puncak gerakan untuk mengintegrasikan serratus dan pergelangan.",
            "pose": "prone",
            "hep2goQuery": "Push Up Plus"
          },
          {
            "level": 4,
            "name": "Progresi Pukulan Raket / Olahraga",
            "tool": "Raket / Alat Olahraga",
            "dosage": "3 set × 15 pukulan",
            "cues": "Tingkatkan bertahap dari pukulan pelan jarak dekat hingga pukulan backhand dan voli kecepatan penuh.",
            "pose": "plyo",
            "hep2goQuery": "Tennis Backhand Progression"
          }
        ]
      }
    ]
  },
  {
    "id": "hnp-spine",
    "name": "Hernia Nukleus Pulposus (HNP C1–L5)",
    "region": "Tulang Belakang",
    "category": "Herniasi Diskus Intervertebralis",
    "definition": "Pergeseran material nukleus pulposus keluar dari batas ruang diskus intervertebralis melalui robekan annulus fibrosus, paling sering pada segmen L4–L5 / L5–S1 (lumbal) atau C5–C6 / C6–C7 (servikal).",
    "mechanism": "Kombinasi kompresi aksial dengan fleksi dan rotasi (mengangkat beban lumbal) atau fleksi servikal berkepanjangan / trauma aksial-fleksi mendadak (servikal).",
    "anatomy": "Diskus intervertebralis (annulus fibrosus & nukleus pulposus) serta akar saraf spinal yang keluar/melintas di dekatnya (C1–C8 servikal; L1–L5/S1 lumbal).",
    "reference": "Kreiner DS et al. An evidence-based clinical guideline for the diagnosis and treatment of lumbar disc herniation with radiculopathy (NASS) & JOSPT Neck/Low Back Pain CPGs.",
    "grades": {
      "1": {
        "summary": "Disc Bulge / Protrusion: Serabut annulus melemah dengan penonjolan fokal; nyeri aksial lokal dengan kesemutan radikular ringan hilang-timbul.",
        "totalRecovery": "4 – 6 Minggu",
        "phaseDurations": [
          "Hari 1–7",
          "Hari 8–18",
          "Hari 19–30",
          "Hari 31–42"
        ]
      },
      "2": {
        "summary": "Disc Extrusion: Nukleus menembus annulus luar namun masih menyatu dengan diskus; radikulopati dermatomal jelas (iskialgia/skiatika atau brakialgia).",
        "totalRecovery": "8 – 12 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–5",
          "Minggu 6–9",
          "Minggu 10–12"
        ]
      },
      "3": {
        "summary": "Disc Sequestration: Fragmen diskus lepas ke kanal spinal; nyeri radikular berat/kelemahan miotomal (skrining bedah segera jika sindrom cauda equina atau defisit motorik progresif).",
        "totalRecovery": "12 – 24+ Minggu",
        "phaseDurations": [
          "Minggu 1–3",
          "Minggu 4–8",
          "Minggu 9–16",
          "Minggu 17–24+"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Sentralisasi preferensi arah (protokol McKenzie) untuk menarik gejala nyeri menjalar di tungkai/lengan kembali ke arah tulang belakang.",
        "physiotherapy": "Latihan sentralisasi ekstensi/retraksi ujung lingkup gerak berulang, posisi dekompresi saraf, dan menghindari fleksi berkepanjangan.",
        "exitCriteria": "Nyeri radikular perifer tersentralisasi ke tulang belakang dan pemeriksaan motorik/refleks neurologis normal.",
        "exercises": [
          {
            "level": 1,
            "name": "Prone Lying Unloading (Berbaring Tengkurap)",
            "tool": "Berat Badan + Bantal + Matras",
            "dosage": "3 set × 2–3 menit",
            "cues": "Berbaring telungkup datar (ganjal bantal tipis di bawah panggul di awal jika perlu) untuk mengurangi tekanan diskus posterior.",
            "pose": "prone",
            "hep2goQuery": "Prone Lying McKenzie"
          },
          {
            "level": 2,
            "name": "Prone on Elbows (Ekstensi Sphinx)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 30–45 detik",
            "cues": "Bertumpu pada siku membiarkan punggung bawah melengkung pasif; pastikan gejala kesemutan di kaki berkurang/naik ke pinggang.",
            "pose": "prone",
            "hep2goQuery": "Prone on Elbows McKenzie"
          },
          {
            "level": 3,
            "name": "Seated Cervical Retraction (Chin Tuck)",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 10 repetisi (tahan 3 detik)",
            "cues": "Untuk keterlibatan C1–C7: tarik dagu dan kepala lurus ke belakang sejajar bahu tanpa menengadah atau menunduk.",
            "pose": "seated",
            "hep2goQuery": "Cervical Retraction Chin Tuck"
          },
          {
            "level": 4,
            "name": "Prone Press-Up (Ekstensi McKenzie)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi",
            "cues": "Jaga panggul tetap rileks menempel lantai dan dorong bahu ke atas dengan lengan untuk memulihkan lordosis lumbal.",
            "pose": "prone",
            "hep2goQuery": "McKenzie Prone Press Up"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Luncur saraf lembut (neural sliders, bukan tarikan keras) dan aktivasi stabilisator segmental dalam (Multifidus & Deep Neck Flexors).",
        "physiotherapy": "Luncur saraf ischiadicus/medianus non-provokatif, daya tahan fleksi kranioservikal, dan penguncian tulang belakang netral.",
        "exitCriteria": "Nol nyeri radikular perifer saat istirahat dan tes Straight-Leg Raise / Spurling bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Supine Deep Neck Flexor Nod",
            "tool": "Berat Badan + Handuk Lipat",
            "dosage": "3 set × 10 repetisi (tahan 5 detik)",
            "cues": "Sandarkan kepala di atas handuk lipat; lakukan anggukan kecil 'ya' untuk mengaktifkan otot leher dalam tanpa menegangkan leher luar.",
            "pose": "supine",
            "hep2goQuery": "Deep Neck Flexor Exercise"
          },
          {
            "level": 2,
            "name": "Seated Sciatic Nerve Slider (Flossing)",
            "tool": "Berat Badan + Kursi",
            "dosage": "2 set × 10 repetisi perlahan",
            "cues": "Luruskan lutut bersamaan dengan menengadahkan kepala ke langit-langit; tekuk lutut saat kepala kembali netral.",
            "pose": "seated",
            "hep2goQuery": "Seated Sciatic Nerve Glide"
          },
          {
            "level": 3,
            "name": "Standing Lumbar Extension (Tangan di Pinggang)",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi",
            "cues": "Letakkan tangan di punggung bawah dan lengkungkan tubuh ke belakang 5–10 kali setiap selesai duduk lama.",
            "pose": "standing",
            "hep2goQuery": "Standing Lumbar Extension"
          },
          {
            "level": 4,
            "name": "Quadruped Bird-Dog (Lumbal/Servikal Netral)",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Tarik dagu sedikit, kunci core, dan luruskan lengan serta kaki berlawanan tanpa pergeseran tulang belakang.",
            "pose": "prone",
            "hep2goQuery": "Bird Dog Neutral Spine"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Toleransi beban aksial, mekanika mengangkat dominan panggul, dan daya tahan skapula servikal/torakal.",
        "physiotherapy": "Squat/hinge tulang belakang netral, tahanan isometrik leher, dan jogging/benturan ringan progresif.",
        "exitCriteria": "Hip hinge berbeban bebas nyeri dan mampu duduk/berlari 30 menit tanpa gejala kembali.",
        "exercises": [
          {
            "level": 1,
            "name": "Isometrik Leher 4 Arah",
            "tool": "Berat Badan + Tangan",
            "dosage": "3 set × 8 repetisi (tahan 5 detik)",
            "cues": "Pertahankan chin tuck dan tekan telapak tangan lembut ke dahi, belakang kepala, serta pelipis kiri-kanan.",
            "pose": "seated",
            "hep2goQuery": "Isometric Cervical Exercises"
          },
          {
            "level": 2,
            "name": "Bodyweight Box Squat (Tulang Belakang Netral)",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 12 repetisi",
            "cues": "Dorong panggul ke belakang menyentuh kursi dengan dada tegap dan lengkung pinggang netral.",
            "pose": "squat",
            "hep2goQuery": "Chair Box Squat"
          },
          {
            "level": 3,
            "name": "Prone Thoracic Extension & Chin Tuck",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 10 repetisi (tahan 3 detik)",
            "cues": "Angkat dada 5 cm dari matras dengan dagu ditarik ke dalam dan lengan membentuk huruf 'W' di samping.",
            "pose": "prone",
            "hep2goQuery": "Prone Thoracic Extension"
          },
          {
            "level": 4,
            "name": "Single-Leg Romanian Deadlift (Tulang Belakang Netral)",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 repetisi/kaki",
            "cues": "Tekuk murni pada sendi panggul sambil mempertahankan keselarasan leher dan pinggang netral.",
            "pose": "standing",
            "hep2goQuery": "Single Leg RDL"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Penyerapan kejut spinal dinamis, gerakan atletik multi-bidang, dan postur tahan kelelahan.",
        "physiotherapy": "Pendaratan pliometrik terkontrol, kelincahan spesifik olahraga, dan mekanika angkat fungsional berat.",
        "exitCriteria": "Partisipasi atletik penuh tanpa gejala dengan tes ketegangan neurodinamik negatif.",
        "exercises": [
          {
            "level": 1,
            "name": "Pallof Press dengan Posisi Split-Stance",
            "tool": "Resistance Band + Pengait",
            "dosage": "3 set × 10 repetisi/sisi",
            "cues": "Dorong band ke depan melawan puntiran batang tubuh sambil mempertahankan postur tulang belakang netral.",
            "pose": "standing",
            "hep2goQuery": "Pallof Press"
          },
          {
            "level": 2,
            "name": "Goblet / Backpack Squat",
            "tool": "Ransel Berisi Beban",
            "dosage": "3 set × 10 repetisi",
            "cues": "Peluk ransel berisi di depan dada untuk menjaga badan tetap tegak dan stabilitas spinal optimal.",
            "pose": "squat",
            "hep2goQuery": "Goblet Squat"
          },
          {
            "level": 3,
            "name": "Low-Box Drop & Stick Landing",
            "tool": "Berat Badan + Anak Tangga",
            "dosage": "3 set × 8 repetisi",
            "cues": "Langkahkan turun dari kotak rendah dan serap benturan melalui panggul dan lutut dengan tulang belakang netral.",
            "pose": "plyo",
            "hep2goQuery": "Drop Landing"
          },
          {
            "level": 4,
            "name": "Kelincahan & Deselerasi Spesifik Olahraga",
            "tool": "Berat Badan + Cone",
            "dosage": "4 set × 4 repetisi",
            "cues": "Lakukan sprint multi-arah dan perubahan arah dengan menjaga posisi kepala sejajar di atas panggul.",
            "pose": "plyo",
            "hep2goQuery": "Agility Sprint Cut"
          }
        ]
      }
    ]
  },
  {
    "id": "mcl-sprain",
    "name": "Cedera Ligamen Lutut Sisi Dalam (MCL)",
    "region": "Ekstremitas Bawah",
    "category": "Robekan Ligamen Ekstra-artikular",
    "definition": "Peregangan, robekan parsial, atau ruptur total Medial Collateral Ligament (MCL), yaitu penstabil statis utama terhadap gaya valgus (dorongan dari luar) pada lutut.",
    "mechanism": "Benturan langsung pada sisi luar lutut (kontak valgus) atau rotasi eksternal tibia tanpa kontak disertai lutut jatuh ke dalam saat cutting/bermain ski.",
    "anatomy": "Superficial MCL (sMCL), Deep MCL (ligamen meniskofemoral & meniskotibial), dan Posterior Oblique Ligament (POL).",
    "reference": "LaPrade RF, Wijdicks CA. The management of injuries to the medial side of the knee. J Orthop Sports Phys Ther (JOSPT). 2012;42(3):221-233.",
    "grades": {
      "1": {
        "summary": "Robekan mikroskopis serabut; nyeri tekan lokal pada garis sendi medial, nyeri saat tes stres valgus 30° tanpa celah sendi terbuka (<3 mm).",
        "totalRecovery": "1 – 2 Minggu",
        "phaseDurations": [
          "Hari 1–3",
          "Hari 4–7",
          "Hari 8–11",
          "Hari 12–14"
        ]
      },
      "2": {
        "summary": "Robekan parsial sMCL/dMCL; bengkak medial sedang, bukaan sendi medial 5–9 mm pada fleksi 30° dengan titik henti (endpoint) tegas.",
        "totalRecovery": "3 – 6 Minggu",
        "phaseDurations": [
          "Hari 1–5",
          "Hari 6–16",
          "Minggu 3–4",
          "Minggu 5–6"
        ]
      },
      "3": {
        "summary": "Ruptur total sMCL, dMCL, dan POL; bukaan valgus >10 mm pada fleksi 30° maupun ekstensi 0° (wajib proteksi hinged knee brace).",
        "totalRecovery": "8 – 12 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–5",
          "Minggu 6–9",
          "Minggu 10–12"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Melindungi serabut medial yang sedang menyembuh dari stres valgus/rotasi eksternal sekaligus memulihkan ROM bidang sagital.",
        "physiotherapy": "Hinged knee brace (untuk Derajat II–III), kontrol edema, quad sets, dan heel slides bidang sagital.",
        "exitCriteria": "Ekstensi pasif lutut penuh (0°), fleksi ≥100°, dan menumpu berat badan tanpa nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Isometric Quad Sets",
            "tool": "Berat Badan + Handuk Gulung",
            "dosage": "3 set × 10 repetisi (tahan 5 detik)",
            "cues": "Tekan bagian belakang lutut ke gulungan handuk untuk mengaktifkan quadriceps tanpa tekanan ke samping.",
            "pose": "supine",
            "hep2goQuery": "Quad Sets"
          },
          {
            "level": 2,
            "name": "Supine Heel Slides",
            "tool": "Berat Badan + Handuk",
            "dosage": "3 set × 12 repetisi",
            "cues": "Geser tumit lurus ke arah bokong dengan menjaga lutut tetap sejajar jari kaki kedua.",
            "pose": "supine",
            "hep2goQuery": "Heel Slides"
          },
          {
            "level": 3,
            "name": "Straight Leg Raise (Bidang Sagital)",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi",
            "cues": "Kunci lutut lurus dan angkat kaki 45°; hindari kemiringan kaki ke dalam/valgus.",
            "pose": "supine",
            "hep2goQuery": "Straight Leg Raise"
          },
          {
            "level": 4,
            "name": "Double-Leg Glute Bridge dengan Bantal",
            "tool": "Berat Badan + Bantal",
            "dosage": "3 set × 12 repetisi",
            "cues": "Jepit bantal ringan di antara lutut untuk menjaga keselarasan netral saat mengangkat panggul.",
            "pose": "bridge",
            "hep2goQuery": "Glute Bridge with Pillow Squeeze"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Penguatan abduktor/rotator eksternal panggul untuk mencegah dynamic knee valgus dan fleksi CKC progresif.",
        "physiotherapy": "Pembebanan gluteus medius, squat/step-up rantai tertutup dengan pelacakan lutut ketat, dan sepeda statis.",
        "exitCriteria": "ROM lutut penuh bebas nyeri dan tes stres valgus pada 30° bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Side-Lying Hip Abduction",
            "tool": "Berat Badan + Matras",
            "dosage": "3 set × 12 repetisi/sisi",
            "cues": "Jaga kaki atas sejajar garis tubuh (sedikit ke belakang) dan angkat ke langit-langit tanpa panggul berputar.",
            "pose": "prone",
            "hep2goQuery": "Side Lying Hip Abduction"
          },
          {
            "level": 2,
            "name": "Mini-Squat dengan Band di Lutut",
            "tool": "Mini Loop Band Ringan",
            "dosage": "3 set × 12 repetisi",
            "cues": "Dorong lutut sedikit keluar melawan tarikan band selama squat untuk melatih kontrol anti-valgus.",
            "pose": "squat",
            "hep2goQuery": "Banded Squat"
          },
          {
            "level": 3,
            "name": "Lateral Monster Walks",
            "tool": "Mini Loop Band Ringan",
            "dosage": "3 set × 10 langkah/arah",
            "cues": "Tahan posisi setengah squat atletik dan melangkah ke samping dengan jari kaki menghadap depan serta lutut terbuka.",
            "pose": "standing",
            "hep2goQuery": "Monster Walk Band"
          },
          {
            "level": 4,
            "name": "Forward & Lateral Step-Down (10 cm)",
            "tool": "Berat Badan + Anak Tangga Rendah",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Sentuhkan tumit kaki satunya ke lantai perlahan sambil menjaga lutut tumpu sejajar jari kaki tengah.",
            "pose": "standing",
            "hep2goQuery": "Lateral Step Down"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Kekuatan tungkai bawah unilateral, deselerasi bidang frontal, dan lari garis lurus.",
        "physiotherapy": "Single-leg squat, lateral lunge terkontrol, dan latihan lari progresif.",
        "exitCriteria": "LSI quadriceps/abduksi panggul ≥85% dan lateral lunge bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Reverse Lunge",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Melangkah ke belakang dan turunkan lutut lurus ke bawah sambil menjaga tulang kering depan tegak.",
            "pose": "squat",
            "hep2goQuery": "Reverse Lunge"
          },
          {
            "level": 2,
            "name": "Single-Leg Balance dengan Tarikan Band",
            "tool": "Resistance Band + Pengait",
            "dosage": "3 set × 30 detik/kaki",
            "cues": "Berdiri pada kaki cedera saat band menarik lutut ke dalam; lawan tarikan tersebut agar lutut tetap lurus.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Balance Valgus Control"
          },
          {
            "level": 3,
            "name": "Controlled Lateral Lunge",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 repetisi/sisi",
            "cues": "Melangkah ke samping dan dorong panggul ke belakang dengan lutut tetap sejajar telapak kaki.",
            "pose": "squat",
            "hep2goQuery": "Lateral Lunge"
          },
          {
            "level": 4,
            "name": "Single-Leg Squat ke Kursi",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 8 repetisi/kaki",
            "cues": "Kontrol gerakan duduk satu kaki perlahan tanpa lutut masuk ke dalam.",
            "pose": "squat",
            "hep2goQuery": "Single Leg Box Squat"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Gerakan cutting kecepatan tinggi tahan valgus, lompatan lateral, dan kesiapan kontak olahraga.",
        "physiotherapy": "Pliometrik lateral, cutting reaksi cepat ke samping, dan latihan spesifik olahraga.",
        "exitCriteria": "Simetri lompat satu kaki ≥90–95% dan cutting maksimal bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Lateral Line Hops (Dua → Satu Kaki)",
            "tool": "Berat Badan + Lakban Lantai",
            "dosage": "3 set × 15 detik/kaki",
            "cues": "Lompat cepat ke kiri-kanan melewati garis dengan pergelangan kaki kokoh dan lutut sejajar.",
            "pose": "plyo",
            "hep2goQuery": "Lateral Line Hops"
          },
          {
            "level": 2,
            "name": "Skater Bound & Stick",
            "tool": "Berat Badan",
            "dosage": "3 set × 8 lompatan/sisi",
            "cues": "Melompat menyamping dan serap pendaratan melalui tekukan panggul, bukan lutut jatuh ke dalam.",
            "pose": "plyo",
            "hep2goQuery": "Lateral Skater Bound"
          },
          {
            "level": 3,
            "name": "Single-Leg Crossover Hop",
            "tool": "Berat Badan + Lakban Lantai",
            "dosage": "3 set × 3 lompatan/kaki",
            "cues": "Lakukan 3 lompatan diagonal beruntun menyilang bolak-balik melewati garis tengah.",
            "pose": "plyo",
            "hep2goQuery": "Crossover Hop Test"
          },
          {
            "level": 4,
            "name": "Latihan Cutting Side-Step Reaktif",
            "tool": "Berat Badan + Cone / Sepatu",
            "dosage": "4 set × 4 cut/sisi",
            "cues": "Sprint ke depan dan tancapkan kaki luar kuat-kuat untuk mendorong tubuh ke arah berlawanan.",
            "pose": "plyo",
            "hep2goQuery": "Side Step Cutting Drill"
          }
        ]
      }
    ]
  },
  {
    "id": "shin-splints",
    "name": "Nyeri Tulang Kering (Shin Splints / MTSS)",
    "region": "Ekstremitas Bawah",
    "category": "Cedera Stres Tulang-Fasia (Overuse)",
    "definition": "Nyeri akibat aktivitas fisik di sepanjang tepi posteromedial dua pertiga distal tulang tibia yang disebabkan oleh traksi periostitis berulang dan ketidakseimbangan remodeling tulang tibia.",
    "mechanism": "Lonjakan mendadak volume atau intensitas lari/lompat, permukaan latihan keras, pronasi dinamis berlebihan, atau lemahnya peredaman kejut otot soleus/betis.",
    "anatomy": "Korteks tibia posteromedial, periosteum tibia, otot Soleus, Tibialis Posterior, dan Flexor Digitorum Longus.",
    "reference": "Winters M et al. Treatment of medial tibial stress syndrome: a systematic review. Sports Med. 2013;43(12):1315-1333 & Warden SJ et al. JOSPT Bone Stress Injury Guidelines.",
    "grades": {
      "1": {
        "summary": "Periostitis traksi tibia tahap awal; nyeri tekan difus (>5 cm) di sepanjang tibia posteromedial yang membaik saat tubuh mulai hangat berolahraga.",
        "totalRecovery": "2 – 4 Minggu",
        "phaseDurations": [
          "Hari 1–5",
          "Hari 6–12",
          "Hari 13–20",
          "Hari 21–28"
        ]
      },
      "2": {
        "summary": "MTSS menetap dengan edema sumsum tulang pada MRI; nyeri bertahan sepanjang olahraga dan terasa pegal setelahnya; lompat satu kaki masih bebas nyeri.",
        "totalRecovery": "4 – 8 Minggu",
        "phaseDurations": [
          "Minggu 1–2",
          "Minggu 3–4",
          "Minggu 5–6",
          "Minggu 7–8"
        ]
      },
      "3": {
        "summary": "Reaksi stres tulang derajat tinggi / ancaman fraktur stres tibia; nyeri tekan terfokus tajam (<5 cm), nyeri malam hari, dan nyeri saat lompat satu kaki (wajib pencitraan & istirahat beban).",
        "totalRecovery": "8 – 16 Minggu",
        "phaseDurations": [
          "Minggu 1–3",
          "Minggu 4–7",
          "Minggu 8–12",
          "Minggu 13–16"
        ]
      }
    },
    "phases": [
      {
        "number": 1,
        "name": "Fase Akut",
        "focus": "Menghilangkan beban tekuk benturan tinggi pada tibia, mengurangi inflamasi lokal, dan mengaktifkan stabilisator intrinsik telapak kaki.",
        "physiotherapy": "Penghentian sementara lari/lompat, cross-training benturan rendah, pengurangan beban betis/soleus, dan aktivasi otot intrinsik kaki.",
        "exitCriteria": "Nol nyeri saat berjalan kaki sehari-hari dan bebas nyeri tekan saat istirahat.",
        "exercises": [
          {
            "level": 1,
            "name": "Short-Foot Intrinsic Arch Domings",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 12 repetisi (tahan 5 detik)",
            "cues": "Duduk tanpa alas kaki, tarik pangkal jempol ke arah tumit untuk mengangkat lengkung telapak kaki tanpa menekuk jari.",
            "pose": "seated",
            "hep2goQuery": "Short Foot Exercise"
          },
          {
            "level": 2,
            "name": "Towel Toe Curls (Remas Handuk dengan Jari Kaki)",
            "tool": "Berat Badan + Handuk Tangan",
            "dosage": "3 set × 12 repetisi",
            "cues": "Gulung handuk secara perlahan menggunakan jari-jari kaki untuk memperkuat otot intrinsik telapak kaki.",
            "pose": "seated",
            "hep2goQuery": "Towel Toe Scrunches"
          },
          {
            "level": 3,
            "name": "Seated Bent-Knee Soleus Stretch",
            "tool": "Berat Badan + Kursi",
            "dosage": "3 set × 30 detik/sisi",
            "cues": "Jaga tumit menempel rata di lantai dengan lutut ditekuk dan condongkan lutut perlahan melewati ujung jari kaki.",
            "pose": "seated",
            "hep2goQuery": "Seated Soleus Stretch"
          },
          {
            "level": 4,
            "name": "Isometric Bent-Knee Calf Hold",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × tahan 30 detik",
            "cues": "Tekuk lutut 20°, angkat tumit 2,5 cm dari lantai, dan tahan kontraksi isometrik secara stabil.",
            "pose": "squat",
            "hep2goQuery": "Isometric Soleus Hold"
          }
        ]
      },
      {
        "number": 2,
        "name": "Fase Proliferasi",
        "focus": "Membangun kapasitas daya tahan otot Soleus dan Tibialis Posterior untuk meredam gaya reaksi tanah.",
        "physiotherapy": "Jinjit lutut ditekuk (fokus soleus), inversi/plantarfleksi dengan band, dan penguatan abduktor panggul.",
        "exitCriteria": "20 repetisi jinjit lutut ditekuk bebas nyeri dan keseimbangan satu kaki bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Resisted Tibialis Posterior (Inversi/PF)",
            "tool": "Resistance Band",
            "dosage": "3 set × 15 repetisi/sisi",
            "cues": "Arahkan telapak kaki sedikit ke bawah dan putar ke dalam melawan tahanan band secara perlahan.",
            "pose": "seated",
            "hep2goQuery": "Tibialis Posterior Theraband"
          },
          {
            "level": 2,
            "name": "Wall-Supported Tibialis Anterior Raises",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 15 repetisi",
            "cues": "Sandarkan punggung di dinding dengan tumit 30 cm di depan; tarik ujung jari/telapak kaki ke atas ke arah tulang kering.",
            "pose": "standing",
            "hep2goQuery": "Tibialis Anterior Wall Raise"
          },
          {
            "level": 3,
            "name": "Bent-Knee Soleus Calf Raises",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 15 repetisi",
            "cues": "Pertahankan tekukan lutut 25° sepanjang gerakan jinjit untuk menargetkan otot soleus bagian dalam.",
            "pose": "squat",
            "hep2goQuery": "Bent Knee Calf Raise"
          },
          {
            "level": 4,
            "name": "Berdiri Satu Kaki dengan Kontrol Lengkung Kaki",
            "tool": "Berat Badan",
            "dosage": "3 set × 30 detik/kaki",
            "cues": "Seimbangkan tubuh tanpa alas kaki pada satu kaki dengan menjaga kontak tripod telapak kaki tanpa lengkung ambles.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Foot Tripod"
          }
        ]
      },
      {
        "number": 3,
        "name": "Fase Remodeling",
        "focus": "Kekuatan betis/soleus unilateral progresif dan stimulus osteogenik tulang bertahap.",
        "physiotherapy": "Jinjit satu kaki lutut lurus & ditekuk, latihan peredaman kejut panggul-lutut, dan evaluasi lompat satu kaki bebas nyeri.",
        "exitCriteria": "≥25 jinjit satu kaki bebas nyeri dan 10 lompatan satu kaki berturut-turut bebas nyeri.",
        "exercises": [
          {
            "level": 1,
            "name": "Single-Leg Straight-Knee Heel Raise",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 15 repetisi/kaki",
            "cues": "Angkat tumit tinggi bertumpu pada pangkal jempol dan turunkan perlahan selama 3 detik.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Calf Raise"
          },
          {
            "level": 2,
            "name": "Single-Leg Bent-Knee Soleus Raise",
            "tool": "Berat Badan + Dinding",
            "dosage": "3 set × 12 repetisi/kaki",
            "cues": "Jaga lutut kaki tumpu sedikit menekuk ~20° saat mengangkat tumit untuk memaksimalkan perlindungan soleus pada tibia.",
            "pose": "standing",
            "hep2goQuery": "Single Leg Bent Knee Calf Raise"
          },
          {
            "level": 3,
            "name": "Split-Squat Heel Hover",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Tahan posisi split squat dengan tumit depan terangkat 2,5 cm dari lantai untuk membangun kekakuan tungkai bawah.",
            "pose": "squat",
            "hep2goQuery": "Split Squat Heel Raise"
          },
          {
            "level": 4,
            "name": "Step-Down dengan Pendaratan Lembut Senyap",
            "tool": "Berat Badan + Anak Tangga",
            "dosage": "3 set × 10 repetisi/kaki",
            "cues": "Turun dari anak tangga rendah mendarat pada telapak kaki depan terlebih dahulu, biarkan tumit menyentuh lantai tanpa suara.",
            "pose": "standing",
            "hep2goQuery": "Step Down Landing"
          }
        ]
      },
      {
        "number": 4,
        "name": "Fase Kembali ke Performa",
        "focus": "Pliometrik pembebanan tulang bertahap, optimasi irama langkah lari (+5–7% step rate), dan progresi jalan-jogging.",
        "physiotherapy": "Lompatan elastis amplitudo rendah, pelatihan ulang irama langkah (170–180 langkah/menit untuk mengurangi regangan puncak tibia), dan protokol jalan-ke-lari.",
        "exitCriteria": "Lari terus-menerus selama 20 menit bebas nyeri tanpa rasa nyeri tekan tulang kering keesokan paginya.",
        "exercises": [
          {
            "level": 1,
            "name": "Double-Leg Low Pogo Hops (Senyap)",
            "tool": "Berat Badan",
            "dosage": "3 set × 20 lompatan",
            "cues": "Memantul ringan 2–5 cm dari lantai menggunakan ujung telapak kaki dengan pendaratan lembut dan senyap.",
            "pose": "plyo",
            "hep2goQuery": "Low Pogo Jumps"
          },
          {
            "level": 2,
            "name": "Uji Lompat Satu Kaki di Tempat (10 Lompatan)",
            "tool": "Berat Badan",
            "dosage": "3 set × 10 lompatan/kaki",
            "cues": "Lakukan 10 lompatan satu kaki berirama di tempat; hentikan segera jika nyeri tulang kering melebihi 0–1/10.",
            "pose": "plyo",
            "hep2goQuery": "Single Leg Hop in Place"
          },
          {
            "level": 3,
            "name": "Latihan Langkah Cepat March-to-Jog",
            "tool": "Berat Badan",
            "dosage": "4 set × 30 detik",
            "cues": "Latih langkah cepat dan pendek (~175 langkah/menit) dengan pendaratan tepat di bawah pusat massa tubuh, bukan menjangkau terlalu jauh.",
            "pose": "plyo",
            "hep2goQuery": "Running Cadence Drill"
          },
          {
            "level": 4,
            "name": "Progresi Interval Jalan-Jogging",
            "tool": "Berat Badan",
            "dosage": "6 × (2 menit Jogging / 1 menit Jalan)",
            "cues": "Berlari di permukaan rumput/lintasan yang empuk dengan kecepatan santai; naikkan volume maksimal ≤10%/minggu.",
            "pose": "plyo",
            "hep2goQuery": "Return to Running Walk Jog"
          }
        ]
      }
    ]
  }
];

let DOREHAB_DATA = EMBEDDED_DOREHAB_DATA;

function getExerciseSVG(poseType, level) {
  const accent = ["#059669", "#2563eb", "#d97706", "#e11d48"][level - 1] || "#ea580c";
  const poses = {
    supine: `
      <line x1="20" y1="88" x2="180" y2="88" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="42" cy="76" r="8" fill="${accent}"/>
      <line x1="50" y1="80" x2="105" y2="80" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="105" y1="80" x2="140" y2="55" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="140" y1="55" x2="165" y2="82" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <path d="M132 45 Q145 38 156 48" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="3 2"/>
    `,
    seated: `
      <rect x="45" y="65" width="32" height="25" rx="4" fill="#e7e5e4" stroke="#a8a29e" stroke-width="2"/>
      <line x1="20" y1="90" x2="180" y2="90" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="62" cy="30" r="8" fill="${accent}"/>
      <line x1="62" y1="38" x2="62" y2="65" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="62" y1="65" x2="102" y2="65" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="102" y1="65" x2="142" y2="65" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <path d="M115 82 Q132 82 142 70" fill="none" stroke="${accent}" stroke-width="2"/>
    `,
    bridge: `
      <line x1="20" y1="88" x2="180" y2="88" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="42" cy="78" r="8" fill="${accent}"/>
      <line x1="50" y1="82" x2="108" y2="56" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="108" y1="56" x2="142" y2="84" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="108" y1="56" x2="152" y2="38" stroke="${accent}" stroke-width="3.5" stroke-dasharray="4 2" stroke-linecap="round"/>
    `,
    standing: `
      <line x1="20" y1="90" x2="180" y2="90" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="100" cy="22" r="8" fill="${accent}"/>
      <line x1="100" y1="30" x2="100" y2="58" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="100" y1="38" x2="78" y2="52" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="100" y1="38" x2="122" y2="52" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="100" y1="58" x2="92" y2="88" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="100" y1="58" x2="124" y2="74" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
    `,
    squat: `
      <line x1="20" y1="90" x2="180" y2="90" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="88" cy="34" r="8" fill="${accent}"/>
      <line x1="90" y1="42" x2="82" y2="64" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="88" y1="46" x2="120" y2="46" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="82" y1="64" x2="112" y2="66" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="112" y1="66" x2="106" y2="88" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    `,
    prone: `
      <line x1="20" y1="88" x2="180" y2="88" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="48" cy="62" r="8" fill="${accent}"/>
      <line x1="54" y1="68" x2="106" y2="82" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="62" y1="70" x2="62" y2="86" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="106" y1="82" x2="158" y2="84" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
    `,
    upper: `
      <line x1="20" y1="90" x2="180" y2="90" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="95" cy="24" r="8" fill="${accent}"/>
      <line x1="95" y1="32" x2="95" y2="62" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="95" y1="62" x2="88" y2="88" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="95" y1="62" x2="104" y2="88" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="95" y1="38" x2="125" y2="38" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="125" y1="38" x2="142" y2="20" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <path d="M128 24 Q142 15 150 28" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="3 2"/>
    `,
    plyo: `
      <line x1="20" y1="90" x2="180" y2="90" stroke="#d6d3d1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="100" cy="18" r="8" fill="${accent}"/>
      <line x1="100" y1="26" x2="100" y2="50" stroke="#292524" stroke-width="4" stroke-linecap="round"/>
      <line x1="100" y1="32" x2="76" y2="22" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="100" y1="32" x2="124" y2="22" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="100" y1="50" x2="86" y2="68" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="86" y1="68" x2="82" y2="82" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <line x1="100" y1="50" x2="116" y2="66" stroke="#292524" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M90 86 L100 78 L110 86" fill="none" stroke="${accent}" stroke-width="2"/>
    `
  };

  return `
    <svg viewBox="0 0 200 105" class="w-full h-28 bg-stone-50 rounded-xl border border-stone-200/80">
      <text x="10" y="16" font-size="9" font-weight="800" fill="${accent}">LEVEL ${level}</text>
      ${poses[poseType] || poses.standing}
    </svg>
  `;
}

// ============================================================================
// PENGATUR STATE & ANTARMUKA PENGGUNA (BAHASA INDONESIA)
// ============================================================================
let currentInjury = null;
let currentGrade = 1;
let currentPhase = 1;

function renderDirectory() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const region = document.getElementById("regionFilter").value;
  const listEl = document.getElementById("injuryList");

  const filtered = DOREHAB_DATA.filter(item => {
    const matchesRegion = region === "ALL" || item.region === region;
    const matchesText =
      item.name.toLowerCase().includes(query) ||
      item.anatomy.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesRegion && matchesText;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="bg-white rounded-2xl border border-stone-200 p-8 text-center text-stone-500 text-sm">Tidak ditemukan protokol cedera yang sesuai. Silakan ubah kata kunci pencarian.</div>`;
    return;
  }

  listEl.innerHTML = filtered.map((injury, idx) => {
    const isNew = injury.id === "hip-subluxation";
    return `
      <div class="bg-white rounded-2xl border ${isNew ? 'border-orange-300 ring-2 ring-orange-100' : 'border-stone-200'} p-5 sm:p-6 card-elevated flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div class="space-y-1.5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-extrabold text-stone-400">#${String(idx + 1).padStart(2, "0")}</span>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-700">${injury.region}</span>
            <span class="text-xs text-stone-300">•</span>
            <span class="text-xs font-semibold text-orange-700">${injury.category}</span>
            ${isNew ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-600 text-white">Baru Ditambahkan</span>' : ''}
          </div>
          <h3 class="text-lg sm:text-xl font-extrabold text-stone-900">${injury.name}</h3>
          <p class="text-xs sm:text-sm text-stone-500 line-clamp-1">${injury.anatomy}</p>
        </div>

        <div class="flex flex-wrap items-center gap-2 shrink-0">
          <span class="text-xs font-semibold text-stone-400 mr-1 hidden sm:inline">Pilih Derajat:</span>
          <button onclick="openInjury('${injury.id}', 1)" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition">
            Derajat I
          </button>
          <button onclick="openInjury('${injury.id}', 2)" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-600 hover:text-white transition">
            Derajat II
          </button>
          <button onclick="openInjury('${injury.id}', 3)" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-600 hover:text-white transition">
            Derajat III
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function openInjury(injuryId, grade = 1) {
  currentInjury = DOREHAB_DATA.find(i => i.id === injuryId);
  currentGrade = grade;
  currentPhase = 1;

  document.getElementById("directoryView").classList.add("hidden");
  document.getElementById("detailView").classList.remove("hidden");
  document.getElementById("backBtn").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
  renderDetail();
}

function resetToDirectory() {
  document.getElementById("detailView").classList.add("hidden");
  document.getElementById("directoryView").classList.remove("hidden");
  document.getElementById("backBtn").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectGrade(grade) {
  currentGrade = grade;
  renderDetail();
}

function selectPhase(phaseNum) {
  currentPhase = phaseNum;
  renderPhaseContent();
}

function renderDetail() {
  if (!currentInjury) return;

  document.getElementById("detailRegion").textContent = currentInjury.region;
  document.getElementById("detailCategory").textContent = currentInjury.category;
  document.getElementById("detailTitle").textContent = currentInjury.name;
  document.getElementById("detailDefinition").textContent = currentInjury.definition;
  document.getElementById("detailMechanism").textContent = currentInjury.mechanism;
  document.getElementById("detailAnatomy").textContent = currentInjury.anatomy;
  document.getElementById("detailReference").textContent = currentInjury.reference;

  // Perbarui Tombol Pilihan Derajat
  [1, 2, 3].forEach(g => {
    const btn = document.getElementById(`gradeBtn${g}`);
    if (g === currentGrade) {
      btn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-orange-600 text-white border border-orange-600 shadow-sm transition";
    } else {
      btn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-50 text-stone-700 border border-stone-200 hover:border-orange-300 transition";
    }
  });

  const gradeInfo = currentInjury.grades[currentGrade];
  const gradeNames = {
    1: "Derajat I • Cedera Ringan / Mikro",
    2: "Derajat II • Robekan / Pergeseran Parsial",
    3: "Derajat III • Cedera Berat / Ruptur Total"
  };
  document.getElementById("gradeLabel").textContent = gradeNames[currentGrade];
  document.getElementById("gradeDescription").textContent = gradeInfo.summary;
  document.getElementById("gradeTotalTime").textContent = gradeInfo.totalRecovery;

  renderPhaseContent();
}

function renderPhaseContent() {
  const gradeInfo = currentInjury.grades[currentGrade];
  const tabsEl = document.getElementById("phaseTabs");

  tabsEl.innerHTML = currentInjury.phases.map((p, idx) => {
    const active = p.number === currentPhase;
    const duration = gradeInfo.phaseDurations[idx];
    return `
      <button onclick="selectPhase(${p.number})" class="text-left p-4 rounded-2xl border transition ${
        active
          ? "bg-indigo-950 text-white border-indigo-950 shadow-md"
          : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
      }">
        <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider ${active ? "text-orange-400" : "text-stone-400"}">
          <span>Fase 0${p.number}</span>
          <span>${duration}</span>
        </div>
        <div class="font-extrabold text-sm mt-1">${p.name}</div>
      </button>
    `;
  }).join("");

  const phaseObj = currentInjury.phases.find(p => p.number === currentPhase);
  const durationText = gradeInfo.phaseDurations[currentPhase - 1];
  const contentEl = document.getElementById("phaseContent");

  contentEl.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
      <div>
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
          Fase ${phaseObj.number} • Estimasi Durasi: ${durationText}
        </span>
        <h4 class="text-2xl font-extrabold text-stone-900">${phaseObj.name}</h4>
      </div>
    </div>

    <!-- Grid Panduan Klinis -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
        <span class="text-xs font-extrabold uppercase tracking-wider text-orange-700 block mb-1">Tujuan Utama Fase</span>
        <p class="text-sm text-stone-700 leading-relaxed">${phaseObj.focus}</p>
      </div>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
        <span class="text-xs font-extrabold uppercase tracking-wider text-indigo-800 block mb-1">Intervensi Fisioterapi</span>
        <p class="text-sm text-stone-700 leading-relaxed">${phaseObj.physiotherapy}</p>
      </div>
      <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
        <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">Kriteria Lanjut ke Fase Berikutnya</span>
        <p class="text-sm text-stone-700 leading-relaxed">${phaseObj.exitCriteria}</p>
      </div>
    </div>

    <!-- 4 Latihan Progresif -->
    <div class="mt-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h5 class="text-base font-extrabold text-stone-900">Resep Latihan Progresif (Termudah → Paling Kompleks)</h5>
          <p class="text-xs text-stone-500">Menggunakan berat badan & alat sederhana di rumah • Klik tautan Hep2go untuk lembar ilustrasi klinis</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${phaseObj.exercises.map(ex => {
          const badgeColors = [
            "bg-emerald-50 text-emerald-800 border-emerald-200",
            "bg-blue-50 text-blue-800 border-blue-200",
            "bg-amber-50 text-amber-800 border-amber-200",
            "bg-rose-50 text-rose-800 border-rose-200"
          ];
          const difficultyLabels = ["1. Paling Mudah", "2. Moderat", "3. Menantang", "4. Kompleks"];
          const hepUrl = `https://www.hep2go.com/exercises.php?userRef=gciaake&search=${encodeURIComponent(ex.hep2goQuery)}`;

          return `
            <div class="rounded-2xl border border-stone-200 p-4 flex flex-col justify-between bg-white hover:border-orange-300 transition">
              <div>
                <div class="flex items-center justify-between gap-2 mb-2.5">
                  <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badgeColors[ex.level - 1]}">
                    ${difficultyLabels[ex.level - 1]}
                  </span>
                </div>

                ${getExerciseSVG(ex.pose, ex.level)}

                <h6 class="font-extrabold text-sm text-stone-900 mt-3 leading-snug">${ex.name}</h6>

                <div class="mt-2 space-y-1 text-xs">
                  <p class="text-stone-600"><strong class="text-stone-800">Alat:</strong> ${ex.tool}</p>
                  <p class="text-stone-600"><strong class="text-stone-800">Dosis:</strong> ${ex.dosage}</p>
                </div>

                <p class="text-xs text-stone-500 mt-2.5 leading-relaxed border-t border-stone-100 pt-2">
                  ${ex.cues}
                </p>
              </div>

              <a href="${hepUrl}" target="_blank" rel="noopener noreferrer"
                 class="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-indigo-950 hover:bg-orange-600 text-white text-xs font-bold transition">
                <span>Buka di Hep2go</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

// Fitur Modal JSON
function toggleJsonModal() {
  const modal = document.getElementById("jsonModal");
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden")) {
    document.getElementById("jsonPreview").textContent = JSON.stringify(DOREHAB_DATA, null, 2);
  }
}

function copyJson() {
  navigator.clipboard.writeText(JSON.stringify(DOREHAB_DATA, null, 2));
  const btn = document.getElementById("copyJsonBtn");
  btn.textContent = "Tersalin!";
  setTimeout(() => (btn.textContent = "Salin JSON"), 2000);
}

async function initApp() {
  try {
    const response = await fetch('./data/injuries.json');
    if (response.ok) {
      DOREHAB_DATA = await response.json();
    }
  } catch (err) {
    console.info('Berjalan dalam mode offline mandiri dengan dataset tertanam.');
  }
  renderDirectory();
}

document.addEventListener('DOMContentLoaded', initApp);
