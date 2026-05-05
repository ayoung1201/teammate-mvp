// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// .env.local 파일에 안전하게 숨겨둔 URL과 키 정보를 가져옵니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Supabase와 연결하는 통로(클라이언트)를 만들어줍니다.
// 앞으로 우리가 화면에서 '등록' 버튼을 누르거나 '리스트'를 볼 때 이 supabase 변수를 통해 DB와 대화하게 됩니다.
export const supabase = createClient(supabaseUrl, supabaseKey);