// app/write/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function WritePage() {
  const router = useRouter();
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !content) {
      alert("모든 칸을 채워주세요!");
      return;
    }

    const { error } = await supabase
      .from("posts")
      .insert([{ title: title, author: author, content: content }]);

    if (error) {
      console.error("에러 발생:", error);
      alert("글 등록에 실패했습니다.");
    } else {
      router.push("/list");
    }
  };

  return (
    // 컨테이너 주변 여백 축소
    <main style={{ minHeight: "100vh", backgroundColor: "#f0f4f8", padding: "20px 10px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        
        <Link href="/list" style={{ textDecoration: "none", color: "#2563eb", fontSize: "14px", fontWeight: "bold", display: "inline-block", marginBottom: "15px" }}>
          ← 목록으로
        </Link>

        {/* 폼 상자의 padding 축소 및 테두리 정돈 */}
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
          <h1 style={{ color: "#1a202c", fontSize: "20px", margin: "0 0 20px 0", fontWeight: "800" }}>새로운 팀원 구하기</h1>
          
          {/* 입력 항목 간의 gap을 15px로 줄였습니다. */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#4a5568", fontWeight: "bold", fontSize: "13px" }}>글 제목</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="어떤 팀원을 찾으시나요?"
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }} 
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#4a5568", fontWeight: "bold", fontSize: "13px" }}>작성자 이름</label>
              <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="이름이나 닉네임을 적어주세요"
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }} 
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#4a5568", fontWeight: "bold", fontSize: "13px" }}>구인 내용</label>
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="프로젝트 아이디어와 역할을 적어주세요."
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px", height: "120px", boxSizing: "border-box", resize: "vertical" }} 
              />
            </div>

            <button type="submit" style={{ marginTop: "5px", backgroundColor: "#2563eb", color: "white", padding: "12px", borderRadius: "6px", border: "none", fontSize: "15px", fontWeight: "bold", cursor: "pointer" }}>
              등록하기
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}