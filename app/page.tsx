// app/page.tsx
import Link from "next/link"; // 페이지 이동을 도와주는 Next.js의 기본 도구입니다.

export default function Home() {
  return (
    // 여백을 약간 주어 글씨가 벽에 붙지 않게 합니다.
    <main style={{ padding: "20px" }}>
      <h1>TeamMate에 오신 것을 환영합니다!</h1>
      <p>창업 아이디어는 있지만 팀원이 없는 분들을 위한 매칭 서비스입니다.</p>
      
      {/* /list 주소로 이동하게 해주는 링크입니다. */}
      <Link href="/list">
        <button style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>
          팀원 구인 글 보러가기
        </button>
      </Link>
    </main>
  );
}