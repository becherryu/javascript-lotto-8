import { Console } from "@woowacourse/mission-utils";

import {
  getPurchasePrice,
  getLottoNumbers,
  getBonusNumber,
} from "./utils/input.js";

import { ERROR_MESSAGES } from "./utils/constants.js";

class App {
  async run() {
    try {
      const inputPrice = await getPurchasePrice();
      const inputLottoNumbers = await getLottoNumbers();
      const inputBonusNumber = await getBonusNumber();
    } catch (error) {
      Console.print(`${ERROR_MESSAGES.PREFIX} ${error.message}`);
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${error.message}`);
    }
  }
}

export default App;
