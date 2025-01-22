import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const user = (await params).user;
  const cookieMessage = await (await cookies()).get("message")?.value;

  return (
    <div>
      <p>
        User{" -> "}
        {user}
      </p>
      <p>
        Message{" -> "}
        {cookieMessage}
      </p>
    </div>
  );
}
