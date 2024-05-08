import { getI18n } from "@/locales/server";

export default async function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getI18n();

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("dashTitle")}
      </h1>
    </div>
  );
}
