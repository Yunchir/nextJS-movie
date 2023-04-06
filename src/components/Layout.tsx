import Head from "next/head";
import { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

export default function Layout({ children }: PropType) {
  return (
    <div>
      <Head>
        <title>RottenTomatoes.com</title>
      </Head>

      <main>{children}</main>
    </div>
  );
}
