import type { Design } from "@/lib/designs";
import type { DesignKit } from "./types";
import { v1Kit } from "./v1";
import { v2Kit } from "./v2";
import { v3Kit } from "./v3";

const KITS: Record<Design, DesignKit> = {
  v1: v1Kit,
  v2: v2Kit,
  v3: v3Kit,
};

export const getKit = (design: Design): DesignKit => KITS[design];
