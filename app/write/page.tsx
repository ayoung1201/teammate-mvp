// app/write/page.tsx
"use client"; // Next.js에서 사용자가 버튼을 누르거나 글을 입력하는 페이지에는 항상 맨 위에 이 줄을 써야 합니다.

import { useState } from "react";
import { useRouter } from "next/navigation"; // 페이지 이동을 도와주는 도구입니다.
import { supabase } from "../../lib/supabase"; // 2단계에서 만든 DB 연결 통로를 불러옵니다.

export default function WritePage() {
  const router = useRouter();
  
  // 사용자가 입력할 제목, 작성자, 내용을 임시로 저장하는 '빈 상자'들을 만듭니다.
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  // '등록' 버튼을 눌렀을 때 실행되는 마법의 주문(함수)입니다.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 버튼을 눌렀을 때 화면이 껌뻑이며 새로고침 되는 것을 막아줍니다.

    // 빈칸이 있는지 확인합니다.
    if (!title || !author || !content) {
      alert("모든 칸을 채워주세요!");
      return;
    }

    // ★ 가장 중요한 부분: Supabase의 'posts' 테이블에 우리가 입력한 값들을 넣으라고 명령합니다.
    const { error } = await supabase
      .from("posts")
      .insert([{ title: title, author: author, content: content }]);

    if (error) {
      console.error("에러 발생:", error);
      alert("글 등록에 실패했습니다.");
    } else {
      alert("글이 성공적으로 등록되었습니다!");
      router.push("/list"); // 등록 성공 시 자동으로 리스트 페이지로 이동시킵니다.
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>새로운 팀원 구하기</h1>
      
      {/* 폼(form) 태그 안에서 '제출(submit)'이 일어나면 위에 만든 handleSubmit 함수가 실행됩니다. */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
        
        <div>
          <label>글 제목</label><br />
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} // 키보드를 칠 때마다 빈 상자(title)에 글자를 채웁니다.
            style={{ width: "100%", padding: "8px" }} 
          />
        </div>

        <div>
          <label>작성자 이름</label><br />
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            style={{ width: "100%", padding: "8px" }} 
          />
        </div>

        <div>
          <label>구인 내용</label><br />
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            style={{ width: "100%", padding: "8px", height: "100px" }} 
          />
        </div>

        <button type="submit" style={{ padding: "10px", backgroundColor: "#0070f3", color: "white", border: "none", cursor: "pointer" }}>
          팀원 구인 글 등록하기
        </button>
      </form>
    </main>
  );
}
