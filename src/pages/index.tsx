import Head from "next/head";
import Cart from "../componets/Cart";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import Store from "../componets/Store";

export type Props = {
  children: React.ReactNode;
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, foloow" />
        <meta name="description" content="MKS Sistemas" />
        <link
          rel="shortcut icon"
          href="../../public/favicon.ico"
          type="image/x-icon"
        />
        <title>MKS Sistemas</title>
      </Head>

      <Header />
      <Store />
      <Cart />
      <Footer />
    </>
  );
}
