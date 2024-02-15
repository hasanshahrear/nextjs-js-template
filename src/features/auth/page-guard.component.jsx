import { PageLoader } from "@/features/ui";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function PageGuard({ children }) {
  const { status } = useSession();

  const { push } = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("auth/login");
    }
  }, [status, push]);

  return (
    <PageLoader
      fullHeight
      loading={status !== "authenticated"}
    >
      {children}
    </PageLoader>
  );
}
