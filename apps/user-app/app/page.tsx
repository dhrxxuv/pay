import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "../lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}

// import Counter from "../components/Counter";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12">
//       <h1 className="text-4xl font-bold text-center mb-8">
//         Redux Toolkit Tutorial
//       </h1>
//       <Counter />
//     </div>
//   );
// }
