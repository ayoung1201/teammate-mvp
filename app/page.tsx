// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    // 전체 페이지의 기본 폰트와 줄 간격을 설정합니다.
    <main style={{ fontFamily: "sans-serif", color: "#333", lineHeight: "1.6" }}>
      
      {/* 
        디자인을 위한 CSS 스타일 설정입니다. 
        모바일 화면(가로 768px 이하)에서는 요소들이 세로로 배치되도록 설정했습니다.
      */}
      <style>{`
        .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 100px 0; }
        .section-title { font-size: 32px; font-weight: bold; text-align: center; margin-bottom: 50px; color: #1e293b; }
        
        .hero-title { font-size: 48px; font-weight: 800; line-height: 1.3; margin-bottom: 20px; color: #0f172a; }
        .hero-subtitle { font-size: 20px; color: #475569; margin-bottom: 40px; word-break: keep-all; }
        
        .button-group { display: flex; gap: 15px; justify-content: center; }
        .btn-primary { background-color: #2563eb; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; transition: 0.2s; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2); }
        .btn-primary:hover { background-color: #1d4ed8; }
        .btn-secondary { background-color: white; color: #2563eb; border: 2px solid #2563eb; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; transition: 0.2s; }
        .btn-secondary:hover { background-color: #eff6ff; }
        
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
        
        .card { background: white; padding: 35px 25px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); text-align: center; border: 1px solid #f1f5f9; }
        .card h3 { font-size: 20px; color: #2563eb; margin-bottom: 15px; }
        .card p { color: #64748b; font-size: 16px; word-break: keep-all; }

        .feature-box { background: white; padding: 40px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
        .feature-box h3 { font-size: 24px; color: #0f172a; margin-bottom: 15px; }
        .feature-box p { color: #475569; font-size: 17px; word-break: keep-all; }
        
        .cta-section { background-color: #1e3a8a; color: white; padding: 100px 0; text-align: center; }
        .cta-title { font-size: 36px; font-weight: bold; margin-bottom: 20px; line-height: 1.4; }
        .cta-subtitle { font-size: 20px; opacity: 0.9; margin-bottom: 40px; }
        .btn-white { background-color: white; color: #1e3a8a; padding: 18px 40px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 18px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: 0.2s; }
        .btn-white:hover { transform: translateY(-2px); }

        /* 모바일 화면을 위한 설정 */
        @media (max-width: 768px) {
          .section { padding: 60px 0; }
          .hero-title { font-size: 32px; }
          .hero-subtitle { font-size: 16px; }
          .section-title { font-size: 24px; margin-bottom: 30px; }
          .button-group { flex-direction: column; }
          .btn-primary, .btn-secondary { width: 100%; text-align: center; box-sizing: border-box; }
          .grid-3, .grid-2 { grid-template-columns: 1fr; gap: 20px; }
          .cta-title { font-size: 24px; }
        }
      `}</style>

      {/* 1. 메인 히어로 섹션 */}
      <section className="section" style={{ backgroundColor: "#f8fafc", textAlign: "center", paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container">
          <h1 className="hero-title">아이디어는 있는데,<br />개발자가 없나요?</h1>
          <p className="hero-subtitle">내일의 유니콘을 함께 만들 대학생 창업 팀원 매칭 플랫폼, TeamMate</p>
          <div className="button-group">
            <Link href="/list" className="btn-primary">모집 중인 프로젝트 보기</Link>
            <Link href="/write" className="btn-secondary">내 프로젝트 팀원 찾기</Link>
          </div>
        </div>
      </section>

      {/* 2. 문제 공감 섹션 */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2 className="section-title">마음 맞는 팀원 찾기, 왜 이렇게 어려울까요?</h2>
          <div className="grid-3">
            <div className="card">
              <h3>🤷‍♂️ 개발자 구인난</h3>
              <p>"경영학과인데 앱 개발자를 어디서 찾지? 주변에 물어볼 사람도 없네..."</p>
            </div>
            <div className="card">
              <h3>🎨 디자인의 벽</h3>
              <p>"내 아이디어를 예쁘게 디자인해 줄 사람, 어디 없을까?"</p>
            </div>
            <div className="card">
              <h3>😩 게시판의 한계</h3>
              <p>"에브리타임 게시판을 매번 뒤적거리고 끌어올리는 것도 지쳐요."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 해결책 및 핵심 기능 섹션 */}
      <section className="section" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="container">
          <h2 className="section-title">TeamMate에서 단 1분 만에 팀 빌딩을 시작하세요</h2>
          <div className="grid-2">
            <div className="feature-box">
              <h3>1. 직관적인 구인글 작성</h3>
              <p>복잡한 양식은 필요 없습니다. 찾고 있는 포지션과 내 창업 아이디어를 간단하고 명확하게 올려보세요.</p>
            </div>
            <div className="feature-box">
              <h3>2. 다양한 프로젝트 탐색</h3>
              <p>지금 진행 중인 다른 대학생들의 가슴 뛰는 프로젝트를 확인하고, 내 능력을 발휘할 곳을 찾아보세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 최종 행동 유도 섹션 */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">혼자 꾸는 꿈은 아이디어에 불과하지만,<br />함께 꾸는 꿈은 현실이 됩니다.</h2>
          <p className="cta-subtitle">지금 바로 TeamMate에서 여정을 시작하세요.</p>
          <Link href="/write" className="btn-white">
            지금 바로 팀원 구하기
          </Link>
        </div>
      </section>

    </main>
  );
}