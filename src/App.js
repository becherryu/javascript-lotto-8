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
import { calculateResult } from "./utils/calculateResult.js";

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

      calculateResult(lottos, winnerLotto, bonusNumber);
    } catch (error) {
      if (!error.message.startsWith("[ERROR]")) {
        Console.print(`[ERROR] ${error.message}`);
      } else {
        Console.print(error.message);
      }
      return;
    }
  }
}

export default App;
