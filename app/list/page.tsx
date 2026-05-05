import Link from "next/link";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function ListPage() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false });

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f0f4f8", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div>
            <Link href="/" style={{ textDecoration: "none", color: "#2563eb", fontSize: "14px", fontWeight: "bold" }}>
              ← 홈으로
            </Link>
            <h1 style={{ color: "#1a202c", fontSize: "28px", margin: "10px 0 0 0", fontWeight: "800" }}>구인 글 목록</h1>
          </div>
          
          <Link href="/write" style={{ textDecoration: "none" }}>
            <button style={{ backgroundColor: "#2563eb", color: "white", padding: "12px 20px", borderRadius: "8px", border: "none", fontSize: "15px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)" }}>
              새로운 글 작성
            </button>
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {!posts || posts.length === 0 ? (
            <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "12px", textAlign: "center", color: "#718096" }}>
              아직 등록된 구인 글이 없습니다. 첫 번째 글을 작성해 보세요!
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <h3 style={{ margin: "0 0 8px 0", color: "#2d3748", fontSize: "20px" }}>{post.title}</h3>
                <span style={{ display: "inline-block", backgroundColor: "#e2e8f0", color: "#4a5568", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", marginBottom: "15px", fontWeight: "bold" }}>
                  작성자: {post.author}
                </span>
                <p style={{ margin: "0", color: "#4a5568", fontSize: "15px", lineHeight: "1.5", whiteSpace: "pre-wrap" }}>{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}