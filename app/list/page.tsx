// app/list/page.tsx
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function ListPage() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false });

  return (
    // padding을 줄여 전체적인 화면 여백을 좁혔습니다.
    <main style={{ minHeight: "100vh", backgroundColor: "#f0f4f8", padding: "20px 10px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* 상단 헤더 영역 여백 축소 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/" style={{ textDecoration: "none", color: "#2563eb", fontSize: "14px", fontWeight: "bold" }}>
              ← 홈
            </Link>
            <h1 style={{ color: "#1a202c", fontSize: "22px", margin: "0", fontWeight: "800" }}>구인 글 목록</h1>
          </div>
          
          <Link href="/write" style={{ textDecoration: "none" }}>
            <button style={{ backgroundColor: "#2563eb", color: "white", padding: "8px 16px", borderRadius: "6px", border: "none", fontSize: "14px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)" }}>
              새 글 작성
            </button>
          </Link>
        </div>

        {/* 카드 사이의 gap(간격)을 15px에서 10px로 줄였습니다. */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {!posts || posts.length === 0 ? (
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", textAlign: "center", color: "#718096", fontSize: "14px" }}>
              아직 등록된 구인 글이 없습니다. 첫 번째 글을 작성해 보세요!
            </div>
          ) : (
            posts.map((post) => (
              // 카드의 안쪽 padding도 16px로 줄여 밀도를 높였습니다.
              <div key={post.id} style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <h3 style={{ margin: "0 0 6px 0", color: "#2d3748", fontSize: "18px" }}>{post.title}</h3>
                <span style={{ display: "inline-block", backgroundColor: "#eff6ff", color: "#1d4ed8", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", marginBottom: "8px", fontWeight: "bold" }}>
                  작성자: {post.author}
                </span>
                <p style={{ margin: "0", color: "#4a5568", fontSize: "14px", lineHeight: "1.4", whiteSpace: "pre-wrap" }}>{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}