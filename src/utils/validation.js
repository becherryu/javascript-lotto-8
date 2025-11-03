import { ERROR_MESSAGES } from "./constants.js";
import Lotto from "../Lotto.js";

export function validatePrice(price) {
  if (isNaN(price) || price <= 0 || price % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.PRICE);
  }

  return price;
}

export function validateLottoNumber(inputLotto) {
  const lottoNumbers = inputLotto.split(",").map((num) => Number(num.trim()));

  const winnerLotto = new Lotto(lottoNumbers);
  return winnerLotto;
}

export function validateBonusNumber(winnerLotto, inputBonus) {
  const bonusNumber = Number(inputBonus.trim());

  if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGES.BONUS_RANGE);
  }

  if (winnerLotto.getNumbers().includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_DUPLICATE);
  }
  return bonusNumber;
}
