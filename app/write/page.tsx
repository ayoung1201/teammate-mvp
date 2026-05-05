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
    <main style={{ minHeight: "100vh", backgroundColor: "#f0f4f8", padding: "40px 20px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        
        <Link href="/list" style={{ textDecoration: "none", color: "#2563eb", fontSize: "14px", fontWeight: "bold", display: "inline-block", marginBottom: "20px" }}>
          ← 목록으로 돌아가기
        </Link>

        <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <h1 style={{ color: "#1a202c", fontSize: "24px", margin: "0 0 30px 0", fontWeight: "800" }}>새로운 팀원 구하기</h1>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#4a5568", fontWeight: "bold", fontSize: "14px" }}>글 제목</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="어떤 팀원을 찾으시나요?"
                style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px", boxSizing: "border-box" }} 
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#4a5568", fontWeight: "bold", fontSize: "14px" }}>작성자 이름</label>
              <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="이름이나 닉네임을 적어주세요"
                style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px", boxSizing: "border-box" }} 
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#4a5568", fontWeight: "bold", fontSize: "14px" }}>구인 내용</label>
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="프로젝트 아이디어와 필요한 팀원의 역할을 자세히 적어주세요."
                style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px", height: "150px", boxSizing: "border-box", resize: "vertical" }} 
              />
            </div>

            <button type="submit" style={{ marginTop: "10px", backgroundColor: "#2563eb", color: "white", padding: "16px", borderRadius: "8px", border: "none", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
              팀원 구인 글 등록하기
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}