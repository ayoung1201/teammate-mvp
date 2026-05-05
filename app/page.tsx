import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f0f4f8", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ backgroundColor: "white", padding: "50px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", textAlign: "center", maxWidth: "500px", width: "100%" }}>
        <h1 style={{ color: "#1a202c", fontSize: "32px", margin: "0 0 15px 0", fontWeight: "800", letterSpacing: "-1px" }}>TeamMate</h1>
        <p style={{ color: "#4a5568", fontSize: "16px", lineHeight: "1.6", marginBottom: "35px", wordBreak: "keep-all" }}>
          창업 아이디어는 있지만 마음이 맞는 팀원을 찾지 못한 분들을 위한 매칭 서비스입니다. 지금 바로 팀원을 찾아보세요.
        </p>
        
        <Link href="/list" style={{ textDecoration: "none" }}>
          <button style={{ backgroundColor: "#2563eb", color: "white", padding: "16px 32px", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "bold", cursor: "pointer", width: "100%", boxShadow: "0 4px 6px rgba(37, 99, 235, 0.2)" }}>
            팀원 구인 글 보러가기
          </button>
        </Link>
      </div>
    </main>
  );
}