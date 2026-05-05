// app/page.tsx

// 사용자가 인터넷 주소로 처음 접속했을 때 보이는 첫 화면(랜딩 페이지)입니다.
export default function Home() {
  return (
    // main 태그는 이 페이지의 가장 핵심이 되는 내용을 감싸는 역할을 합니다.
    <main>
      {/* h1 태그는 페이지의 가장 큰 제목을 나타냅니다. */}
      <h1>TeamMate 준비 중입니다</h1>
      
      {/* p 태그는 일반적인 텍스트(단락)를 나타냅니다. */}
      <p>창업 팀원 매칭 서비스 MVP</p>
    </main>
  );
}