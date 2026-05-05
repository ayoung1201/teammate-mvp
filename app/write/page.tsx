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
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", padding: "40px 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "550px" }}>
        
        <div style={{ backgroundColor: "white", padding: "50px 40px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
          <div style={{ marginBottom: "30px" }}>
            <Link href="/list" style={{ textDecoration: "none", color: "#64748b", fontSize: "14px", fontWeight: "600", display: "inline-block", marginBottom: "10px" }}>
              ← 목록으로 취소
            </Link>
            <h1 style={{ color: "#0f172a", fontSize: "26px", margin: "0", fontWeight: "800" }}>새로운 팀원 구하기</h1>
          </div>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: "700", fontSize: "14px" }}>글 제목</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="어떤 팀원을 찾으시나요?"
                style={{ width: "100%", padding: "14px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", boxSizing: "border-box", backgroundColor: "#f8fafc", outline: "none" }} 
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: "700", fontSize: "14px" }}>작성자 이름</label>
              <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="이름이나 닉네임을 적어주세요"
                style={{ width: "100%", padding: "14px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", boxSizing: "border-box", backgroundColor: "#f8fafc", outline: "none" }} 
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: "700", fontSize: "14px" }}>구인 내용</label>
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="프로젝트 아이디어와 역할을 자세히 적어주세요."
                style={{ width: "100%", padding: "14px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", height: "160px", boxSizing: "border-box", resize: "vertical", backgroundColor: "#f8fafc", outline: "none" }} 
              />
            </div>

            <button type="submit" style={{ marginTop: "10px", backgroundColor: "#2563eb", color: "white", padding: "16px", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 6px rgba(37, 99, 235, 0.2)" }}>
              팀원 구인 글 등록하기
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}