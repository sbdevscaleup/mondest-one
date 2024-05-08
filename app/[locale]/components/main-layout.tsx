import Footer from "@/app/[locale]/components/footer";
import SubLayout from "../client/layout";
import Navbar from "./navbar/Navbar";

type Props = {
  children: React.ReactNode;

  locale: string;
};

export default function MainLayout({ children, locale }: Props) {
  return (
    <div className="flex flex-col h-full items-center">
      <SubLayout params={{ locale }}>
        <Navbar />
      </SubLayout>
      <div className="main flex-grow flex justify-center">{children}</div>
      <Footer />
    </div>
  );
}
