import { RegisterFilter, RegisterData } from "./register-filter";
import PSGDACTable from "./psg-dac-table";
import SPFMModule from "src/spfm-module";

export default class YM2612ToYM2608Filter implements RegisterFilter {
  _div = 0;
  _dacEnabled = false;
  async initialize(mod: SPFMModule) {
    const data: Array<RegisterData> = [
      { port: 0, a: 0x29, d: 0x80 }, // enable FM 4-6ch
    ];
    await mod.spfm.writeRegs(mod.slot, data);
  }

  filterReg(context: any, data: RegisterData): RegisterData[] {
    const result = Array<RegisterData>();

    if (data.port === 0) {
      if (data.a === 0x2a) {
        this._div++;
      } else if (data.a === 0x2b) {
        this._dacEnabled = data.d & 0x80 ? true : false;
      } else {
        result.push(data);
      }
    } else {
      result.push(data);
    }

    return result;
  }
}
