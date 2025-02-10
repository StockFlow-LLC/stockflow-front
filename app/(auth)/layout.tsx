import PageIllustration from "@/components/page-illustration";
import {getSession} from "@/app/actions/auth";

export default async function AuthLayout({
                                           children,
                                         }: {
  children: React.ReactNode;
}) {
  const session = await getSession()
    console.log({session})
  if (session) {
    // redirect('/dashboard')
  }
  return (
      <main className="relative flex grow flex-col">
        <PageIllustration multiple/>

        {children}
      </main>
  );
}
