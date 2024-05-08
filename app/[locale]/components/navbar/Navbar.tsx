"use client";

import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchFilters";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { locales } from "@/constants/locales";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/logo-desktop.png"
              alt="MonDestinations Logo"
              width={120}
              height={34}
            />
          </Link>

          <div className="fkex space-x-6">
            <SearchFilters />
          </div>
          <Select
            onValueChange={(selectedLocale) => {
              changeLocale(selectedLocale as any);
            }}
            value={locale}
          >
            <SelectTrigger className="w-[80px]" value={locale}>
              <SelectValue placeholder={locale} />
            </SelectTrigger>
            <SelectContent className="w-[80px] min-w-0">
              {locales.map((locale, i) => {
                return (
                  <SelectItem key={i} value={locale}>
                    {locale.toUpperCase()}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <div className="">Add property - UserNav</div>
          <div className="w-[120]">
            <Button>Sign up</Button>
            <Button>Log in</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
