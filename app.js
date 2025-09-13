// 간단 i18n 사전
const I18N = {
  ko: {
    title: "Byungchan's Portfolio",
    name: "박병찬",
    "nav.about": "About",
    "nav.project": "Projects",
    "nav.resume": "Download Resume",
    "nav.contact": "Contact",

    // Sections
    "sections.about.title": "소개",
    "sections.project.title": "프로젝트",
    "sections.contact.title": "연락처",

    // About
    "about.summary1": "Unity 기반의 적 AI, 터렛 시스템, 게임 플레이 감각에 강점을 가진 주니어 게임 개발자입니다.",
    "about.summary2": "C#, C++, JavaScript로 2D부터 3D VR까지 구현 경험이 있으며, 가독성 좋은 코드와 명확한 피드백, 플레이 가능한 빌드를 중시합니다.",
    "about.skills.title": "기술 스택",
    "about.skills.langs": "언어: C#, C++, C, JavaScript",
    "about.skills.tools": "엔진/툴: Unity, Visual Studio, Git, OpenGL, p5.js",
    "about.skills.systems": "시스템: Enemy AI, State Machines, Turret/Projectile, UI/UX, Input, Hit/Hurtbox",

    // Generic project labels
    "projects.role.solo": "단독",
    "projects.role.team3": "3인 팀",
    "projects.role.team5": "5인 팀",
    "projects.role.team8": "8인 팀",
    "projects.link.play": "▶ 온라인 플레이",
    "projects.link.download": "▶ 데모 다운로드",
    "projects.link.playDemo": "▶ 데모 링크",
    "projects.link.downloadDemo": "▶ 데모 다운로드",

    // project requirements
    "projects.requirements.pcOnly": "※ PC 환경에서만 실행 가능",
    "projects.requirements.vrRequired": "※ VR 헤드셋 필수",

    // Projects - I Am Alone
    "projects.iamalone.title": "I Am Alone – 2D Top-Down Zombie Shooter",
    "projects.iamalone.tech": "JavaScript (p5.js)",
    "projects.iamalone.desc": "화면 중앙에서 좀비 웨이브를 방어하는 고정 슈터. 마우스 조준/사격, 브라우저 플레이 지원.",
    "projects.iamalone.point1": "마우스 조준/사격 및 웨이브 루프 구현",
    "projects.iamalone.point2": "스폰 페이싱·피격 피드백 밸런싱",
    "projects.iamalone.point3": "p5.js 기반 브라우저 실행 빌드 배포",

    // Projects - BeatSlash
    "projects.beatslash.title": "BeatSlash – 2D Rhythm Game",
    "projects.beatslash.tech": "C++ with Doodle Engine (OpenGL)",
    "projects.beatslash.desc": "비트 동기화 노트 스포닝 및 내부 리듬 맵 에디터를 갖춘 리듬 게임.",
    "projects.beatslash.point1": "템포/비트 기반 노트 스포닝 & 타이밍 판정",
    "projects.beatslash.point2": "디버그 환경용 리듬 맵 에디터 구현",
    "projects.beatslash.point3": "OpenGL 기반 Doodle 라이브러리 연동",

    // Projects - Blinded
    "projects.blinded.title": "Blinded – 2D Platformer / Boss Rush",
    "projects.blinded.tech": "C++ / OpenGL",
    "projects.blinded.desc": "시각적 텔레그래프와 타이밍 중심의 정밀 전투 플랫폼 게임.",
    "projects.blinded.point1": "적/보스 패턴 및 명확한 텔레그래프 설계",
    "projects.blinded.point2": "플레이어 이동·히트/허트박스·무적 프레임 구현",
    "projects.blinded.point3": "넉백/리커버리/전투 리듬 조정",

    // Projects - Megalocephalo
    "projects.megalo.title": "Megalocephalo – 3D Unity Platformer",
    "projects.megalo.tech": "Unity / C#",
    "projects.megalo.desc": "모듈식 적 AI 상태 로직과 깔끔한 UI 플로우를 갖춘 3D 플랫포머.",
    "projects.megalo.point1": "재사용 가능한 적 AI 상태 머신 구축",
    "projects.megalo.point2": "메인/일시정지 메뉴 및 피드백 큐 구현",
    "projects.megalo.point3": "레벨 디자이너와 페이싱·온보딩 정렬",

    // Projects - Breath of the Sky
    "projects.breath.title": "Breath of the Sky – 3D VR Game",
    "projects.breath.tech": "Unity VR / C#",
    "projects.breath.desc": "속도 정보만으로 예측 조준하는 터렛과 비행 적 AI를 갖춘 VR 경험.",
    "projects.breath.point1": "속도 기반 예측 터렛 타게팅 설계",
    "projects.breath.point2": "수평 가드/수직 배럴 2축 터렛 애니메이션",
    "projects.breath.point3": "상태 머신 기반 비행 적 AI·HMD UX 최적화",
    "projects.breath.link": "▶ 데모 다운로드",

    // Resume
    "resume.edu.title": "학력",
    "sections.education.digipen.major": "전공 : CS 실시간 인터랙티브 시뮬레이션",
    "sections.education.digipen.period": "기간 :2023-09 ~ 2025-04",
    "sections.education.keimyung.major": "전공 : 디지펜게임공학과",
    "sections.education.keimyung.period": "기간 :2021-03 ~ 2025-08",
    "resume.skills.title": "핵심 역량",
    "resume.skills.item1": "Enemy AI, 상태 머신, 터렛/프로젝타일 시스템",
    "resume.skills.item2": "UI/UX, 입력 시스템, 히트/허트박스",
    "resume.skills.item3": "C#, C++, JavaScript / Unity, OpenGL",

    // Contact
    "contact.nameLabel": "이름",
    "contact.nameValue": "박병찬 (Rex)",
    "contact.emailLabel": "이메일",
    "contact.phoneLabel": "전화"
  },

  en: {
    title: "Byungchan's Portfolio",
    name: "Byungchan Park",
    "nav.about": "About",
    "nav.project": "Projects",
    "nav.resume": "Download Resume",
    "nav.contact": "Contact",

    // Sections
    "sections.about.title": "About",
    "sections.project.title": "Projects",
    "sections.contact.title": "Contact",

    // About
    "about.summary1": "Aspiring Unity Game Developer focusing on enemy AI, turret systems, and gameplay feel.",
    "about.summary2": "Hands-on across C#, C++, and JavaScript from 2D prototypes to 3D VR, with emphasis on readable code, clear feedback, and shipping playable builds.",
    "about.skills.title": "Tech Stack",
    "about.skills.langs": "Languages: C#, C++, C, JavaScript",
    "about.skills.tools": "Engines/Tools: Unity, Visual Studio, Git, OpenGL, p5.js",
    "about.skills.systems": "Systems: Enemy AI, State Machines, Turret/Projectile, UI/UX, Input, Hit/Hurtbox",

    // Generic project labels
    "projects.role.solo": "Solo",
    "projects.role.team3": "Team of 3",
    "projects.role.team5": "Team of 5",
    "projects.role.team8": "Team of 8",
    "projects.link.play": "▶ Play Online",
    "projects.link.download": "▶ Download Demo",
    "projects.link.playDemo": "▶ Demo Link",
    "projects.link.downloadDemo": "▶ Download Demo",

    // project requirements
    "projects.requirements.pcOnly": "※ PC only",
    "projects.requirements.vrRequired": "※ VR headset required",

    // Projects - I Am Alone
    "projects.iamalone.title": "I Am Alone – 2D Top-Down Zombie Shooter",
    "projects.iamalone.tech": "JavaScript (p5.js)",
    "projects.iamalone.desc": "Stationary shooter defending waves from the center with mouse-aimed shooting; browser-playable.",
    "projects.iamalone.point1": "Mouse aiming/shooting and wave progression loop",
    "projects.iamalone.point2": "Balanced spawn pacing and hit feedback",
    "projects.iamalone.point3": "Deployed browser build using p5.js",

    // Projects - BeatSlash
    "projects.beatslash.title": "BeatSlash – 2D Rhythm Game",
    "projects.beatslash.tech": "C++ with Doodle Engine (OpenGL)",
    "projects.beatslash.desc": "Beat-synchronized note spawning with an internal rhythm map editor.",
    "projects.beatslash.point1": "Tempo/beat-driven note spawning & timing windows",
    "projects.beatslash.point2": "Internal rhythm map editor (debug environment)",
    "projects.beatslash.point3": "Integrated OpenGL-based Doodle library",

    // Projects - Blinded
    "projects.blinded.title": "Blinded – 2D Platformer / Boss Rush",
    "projects.blinded.tech": "C++ / OpenGL",
    "projects.blinded.desc": "Timing-focused precision combat with clear visual telegraphing.",
    "projects.blinded.point1": "Enemy/boss patterns with readable telegraphs",
    "projects.blinded.point2": "Player controller incl. movement & hit/hurtboxes",
    "projects.blinded.point3": "Tuned knockback, recovery, and combat cadence",

    // Projects - Megalocephalo
    "projects.megalo.title": "Megalocephalo – 3D Unity Platformer",
    "projects.megalo.tech": "Unity / C#",
    "projects.megalo.desc": "3D platformer with modular enemy AI state logic and clean UI flows.",
    "projects.megalo.point1": "Reusable enemy AI state machines",
    "projects.megalo.point2": "Main/Pause menus and feedback cues",
    "projects.megalo.point3": "Aligned pacing/onboarding with level design",

    // Projects - Breath of the Sky
    "projects.breath.title": "Breath of the Sky – 3D VR Game",
    "projects.breath.tech": "Unity VR / C#",
    "projects.breath.desc": "VR experience featuring velocity-only predictive turret and flying enemy AI.",
    "projects.breath.point1": "Designed predictive turret targeting using velocity",
    "projects.breath.point2": "Dual-axis turret animation (horizontal guard / vertical barrel)",
    "projects.breath.point3": "State-machine flying enemies; HMD UX optimizations",
    "projects.breath.link": "▶ Demo Download",

    // Resume
    "resume.edu.title": "Education",
    "resume.edu.digipen": "DigiPen Institute of Technology — B.S. in Computer Science (2023–2025), WA, USA",
    "resume.edu.keimyung": "Keimyung University — BCS (2021–2023), Daegu, South Korea",
    "resume.skills.title": "Core Skills",
    "sections.education.digipen.major": "Major: CS Real-Time Interactive Simulation",
    "sections.education.digipen.period": "Dates: Sep 2023 ~ Apr 2025",
    "sections.education.keimyung.major": "Major: DigiPen Game Engineering",
    "sections.education.keimyung.period": "Dates: Mar 2021 ~ Aug 2025",

    // Contact
    "sections.contact.body": "Open to collaboration and inquiries.",
    "contact.nameLabel": "Name",
    "contact.nameValue": "Byungchan Park (Rex)",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.ko;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.setlang === lang ? "true" : "false");
  });

  try { localStorage.setItem("lang", lang); } catch(e) {}
}

function initLang() {
  let lang = "ko";
  try {
    const stored = localStorage.getItem("lang");
    if (stored) lang = stored;
    else if ((navigator.language || "").toLowerCase().startsWith("en")) lang = "en";
  } catch(e) {}
  applyLang(lang);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    applyLang(btn.dataset.setlang);
  });
}

function updateResumeLink(lang) {
  const resumeLink = document.getElementById("resume-link");

  if (lang === "en") {
    resumeLink.href = "./assets/BCP_Resume_EN.pdf?v=2025-09-13";
    resumeLink.setAttribute("download", "BCP_Resume_EN.pdf");
    resumeLink.textContent = "Download Resume";
  } else if (lang === "ko") {
    resumeLink.href = "./assets/BCP_Resume_KO.pdf?v=2025-09-13";
    resumeLink.setAttribute("download", "BCP_Resume_KO.pdf");
    resumeLink.textContent = "이력서 다운로드";
  }
}

// 언어 전환 시 호출
function setLanguage(lang) {
  document.documentElement.lang = lang;
  updateResumeLink(lang);
  // 기존 i18n 갱신 로직도 같이 실행
}

function downloadResume(lang) {
  let filePath = "";
  let fileName = "";

  if (lang === "en") {
    filePath = "./assets/BCP_Resume_EN.pdf?v=2025-09-13";
    fileName = "BCP_Resume_EN.pdf";
  } else if (lang === "ko") {
    filePath = "./assets/BCP_Resume_KO.pdf?v=2025-09-13";
    fileName = "BCP_Resume_KO.pdf";
  }

  function forceDownload(filePath, fileName) {
  const a = document.createElement('a');
  a.href = filePath;
  a.setAttribute('download', fileName);
  // 일부 브라우저에서 확실히 동작하도록
  a.setAttribute('target', '_self');
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function downloadResumeFor(lang) {
  if (lang === 'en') {
    forceDownload('./assets/BCP_Resume_EN.pdf?v=2025-09-13', 'BCP_Resume_EN.pdf');
  } else {
    // 기본 ko
    forceDownload('./assets/BCP_Resume_KO.pdf?v=2025-09-13', 'BCP_Resume_KO.pdf');
  }
}

function bindResumeMenu() {
  const resumeLink = document.getElementById('resume-link');
  if (!resumeLink) return;
  resumeLink.addEventListener('click', (e) => {
    e.preventDefault(); // 새 탭 열림 방지
    const lang = document.documentElement.getAttribute('lang') || 'ko';
    downloadResumeFor(lang);
  });
}

// 초기화 시 바인딩
document.addEventListener('DOMContentLoaded', () => {
  bindResumeMenu();
});

// 언어 변경 시에도 그대로 작동 (기존 applyLang 유지)


  // 가짜 a 태그 생성 후 강제 다운로드
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


document.addEventListener("DOMContentLoaded", initLang);
