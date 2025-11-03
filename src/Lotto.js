import { ERROR_MESSAGES } from "./utils/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.LOTTO_LENGTH}`
      );
    }

    const duplicateNumber = numbers.filter(
      (number, index) => numbers.indexOf(number) !== index
    );

    if (duplicateNumber.length > 0) {
      throw new Error(
        `${ERROR_MESSAGES.PREFIX}] ${
          ERROR_MESSAGES.LOTTO_DUPLICATE
        } : ${duplicates.join(", ")}`
      );
    }

    if (
      numbers.some(
        (number) =>
          isNaN(number) ||
          number < 1 ||
          number > 45 ||
          !Number.isInteger(number) ||
          number === ""
      )
    ) {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.LOTTO_RANGE}`);
    }
  }

  // 로또 번호 반환
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
