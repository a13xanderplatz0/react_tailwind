import { handlers } from '@/lib/auth'; // Adjust path as needed
export const { GET, POST } = handlers;

// Required for Edge environments if you deploy there, otherwise optional
// export const runtime = "edge";
