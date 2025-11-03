import { Console } from "@woowacourse/mission-utils";

import {
  getPurchasePrice,
  getLottoNumbers,
  getBonusNumber,
} from "./utils/input.js";
import { generateLotto, printLottos } from "./utils/generateLotto.js";

import {
  validateBonusNumber,
  validateLottoNumber,
  validatePrice,
} from "./utils/validation.js";

import { ERROR_MESSAGES } from "./utils/constants.js";

class App {
  async run() {
    try {
      const inputPrice = await getPurchasePrice();
      const totalPrice = validatePrice(inputPrice);

      const lottos = generateLotto(totalPrice);
      printLottos(lottos);

      const inputLottoNumbers = await getLottoNumbers();
      const winnerLotto = validateLottoNumber(inputLottoNumbers);

      const inputBonusNumber = await getBonusNumber();
      const bonusNumber = validateBonusNumber(winnerLotto, inputBonusNumber);
    } catch (error) {
      Console.print(`${ERROR_MESSAGES.PREFIX} ${error.message}`);
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${error.message}`);
    }
  }
}

export default App;
