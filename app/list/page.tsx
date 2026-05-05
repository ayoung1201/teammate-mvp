// app/list/page.tsx
import Link from "next/link";
import { supabase } from "../../lib/supabase"; // DB와 연결하는 통로를 불러옵니다.

// Next.js가 예전 화면을 기억(캐싱)하지 않고, 접속할 때마다 항상 최신 데이터를 불러오도록 하는 마법의 명령어입니다.
export const dynamic = "force-dynamic";

// 데이터를 불러올 때는 시간이 걸리기 때문에 async(비동기)라는 키워드를 붙여줍니다.
export default async function ListPage() {
  
  // ★ 가장 중요한 부분: Supabase의 'posts' 테이블에서 모든 데이터(*)를 가져오고, 
  // 최신 글이 맨 위에 오도록 id 기준으로 내림차순(ascending: false) 정렬합니다.
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false });

  return (
    <main style={{ padding: "20px" }}>
      <h1>구인 글 목록</h1>
      
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link href="/">
          <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
            ← 홈으로 돌아가기
          </span>
        </Link>
        
        <Link href="/write">
          <button style={{ cursor: "pointer" }}>✍️ 새로운 구인 글 작성</button>
        </Link>
      </div>

      <div style={{ marginTop: "20px" }}>
        {/* 불러온 데이터(posts)가 없을 경우 안내 문구를 보여줍니다. */}
        {!posts || posts.length === 0 ? (
          <p>아직 등록된 구인 글이 없습니다. 첫 번째 글을 작성해 보세요!</p>
        ) : (
          /* 불러온 데이터가 있다면 하나씩 꺼내서 화면에 그려줍니다. */
          posts.map((post) => (
            <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h3>{post.title}</h3>
              <p style={{ fontSize: "14px", color: "gray" }}>작성자: {post.author}</p>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}