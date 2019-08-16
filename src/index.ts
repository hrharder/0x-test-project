import { generatePseudoRandomSalt, BigNumber } from "0x.js";

export function TestFunction(): BigNumber {
  return generatePseudoRandomSalt();
}
