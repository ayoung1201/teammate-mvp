import Link from "next/link";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function ListPage() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false });

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", padding: "80px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "30px" }}>
          <div>
            <Link href="/" style={{ textDecoration: "none", color: "#64748b", fontSize: "15px", fontWeight: "600", display: "inline-block", marginBottom: "8px" }}>
              ← 메인으로 돌아가기
            </Link>
            <h1 style={{ color: "#0f172a", fontSize: "28px", margin: "0", fontWeight: "800" }}>구인 글 목록</h1>
          </div>
          
          <Link href="/write" style={{ textDecoration: "none" }}>
            <button style={{ backgroundColor: "#2563eb", color: "white", padding: "12px 24px", borderRadius: "8px", border: "none", fontSize: "15px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 6px rgba(37, 99, 235, 0.2)" }}>
              새 글 작성하기
            </button>
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {!posts || posts.length === 0 ? (
            <div style={{ backgroundColor: "white", padding: "60px 20px", borderRadius: "12px", textAlign: "center", color: "#64748b", border: "1px solid #e2e8f0" }}>
              아직 등록된 구인 글이 없습니다.<br/>첫 번째 팀원 모집을 시작해 보세요!
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} style={{ backgroundColor: "white", padding: "24px 30px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#0f172a", fontSize: "20px", fontWeight: "bold" }}>{post.title}</h3>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ display: "inline-block", backgroundColor: "#eff6ff", color: "#1d4ed8", padding: "5px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "bold" }}>
                    작성자: {post.author}
                  </span>
                </div>
                <p style={{ margin: "0", color: "#475569", fontSize: "16px", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}