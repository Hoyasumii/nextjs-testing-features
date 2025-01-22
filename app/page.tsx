"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "next/form";
import { sendForm } from "@/server/sendForm";

export default function Home() {
  const [value, setValue] = useState<number>(0);
  const router = useRouter();

  return (
    <main className="px-4">
      <h1>Client Side</h1>
      <ul className="*:list-inside *:list-item *:list-disc">
        <li>State Management; has; not tested</li>
        <li>Button With Action; has; not tested</li>
        <li>Button With Redirect; has; not tested</li>
        <li>Links; has; not tested</li>
        <li>Next.js Link; has; not tested</li>
        <li>Links to Dynamic Routes; has; not tested</li>
        <li>
          Form: (Client Page {" -> "} Server Action {" -> "} Redirect); has; not
          tested
        </li>
        {/* <li>
          Form: (Client Page {" -> "} onClick Action {" -> "} Redirect); hasn
          {"'"}t; not tested
        </li> */}
        <li>Cookies; has; not tested</li>
      </ul>

      <button
        className="bg-blue-500 p-4"
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      {value}
      <button
        className="bg-blue-500 p-4"
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>

      <div className="flex flex-col gap-4 *:text-blue-600 *:underline">
        <button
          onClick={() => {
            router.push("/testing");
          }}
        >
          Router push using useRouter hook
        </button>
        <button
          onClick={() => {
            window.location.href = "/testing";
          }}
        >
          Navigation Redirect
        </button>
        <a href="https://google.com">Web Link</a>
        <Link href={"https://google.com"}>Next.js Link</Link>
      </div>

      <Form action={sendForm}>
        <input type="text" name="message" className="border" />
        <button type="submit" className="bg-green-400 p-4">
          Send
        </button>
      </Form>
    </main>
  );
}
