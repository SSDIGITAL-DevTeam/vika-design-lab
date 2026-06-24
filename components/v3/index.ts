import type { DesignKit } from "@/components/types";
import { Header } from "./header";
import { Home } from "./home";
import { v1Kit } from "@/components/v1";
import { v2Kit } from "@/components/v2";

export const v3Kit: DesignKit = {
  Header,
  Footer:    v2Kit.Footer,
  Home,
  About:     v1Kit.About,
  Services:  v1Kit.Services,
  Portfolio: v1Kit.Portfolio,
  Contact:   v1Kit.Contact,
};
