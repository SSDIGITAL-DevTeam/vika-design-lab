import type { Design } from "@/lib/designs";
import type { DesignKit } from "./types";
import { v1Kit } from "./v1";

const KITS: Record<Design, DesignKit> = {
  v1: v1Kit,
};

export const getKit = (design: Design): DesignKit => KITS[design];
