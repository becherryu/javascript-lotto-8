import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export function generateLotto(price) {
  const count = price / 1000;
  const lottoNumbers = [];

  for (let i = 0; i < count; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumbers.push(new Lotto(numbers));
  }

  return lottoNumbers;
}

export function printLottos(lottos) {
  Console.print(`\n${lottos.length}개를 구매했습니다.`);
  lottos.forEach((lotto) => {
    Console.print(`[${lotto.getNumbers().join(", ")}]`);
  });
}
