// import { NextRequest, NextResponse } from 'next/server';
// import { verifyToken } from '@/lib/jwt';
// import { getSession } from '@/actions/user-management';
// import { cookies } from 'next/headers';

// export async function middleware(request: NextRequest) {
//   const cookieStore = cookies();
//   const token = cookieStore.get('token');
//   const sessionId = cookieStore.get('session_id');

//   if (!token || !sessionId) {
//     return NextResponse.redirect('/login');
//   }

//   const decoded = verifyToken(token.value);

//   if (!decoded) {
//     return NextResponse.redirect('/login');
//   }

//   const session = await getSession(sessionId.value);

//   if (!session || session.user_id !== decoded.userId) {
//     return NextResponse.redirect('/login');
//   }

//   // Attach user information to the request
//   request.user = decoded;
//   return NextResponse.next();
// }
