import type { Design } from "@/lib/designs";
import type { DesignKit } from "./types";
import { v1Kit } from "./v1";
import { v2Kit } from "./v2";

const KITS: Record<Design, DesignKit> = {
  v1: v1Kit,
  v2: v2Kit,
};

export const getKit = (design: Design): DesignKit => KITS[design];
