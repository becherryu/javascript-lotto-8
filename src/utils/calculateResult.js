import { Console } from "@woowacourse/mission-utils";

const PRIZE_INFO = {
  3: { label: "3개 일치 (5,000원)", prize: 5000 },
  4: { label: "4개 일치 (50,000원)", prize: 50000 },
  5: { label: "5개 일치 (1,500,000원)", prize: 1500000 },
  bonus: { label: "5개 일치, 보너스 볼 일치 (30,000,000원)", prize: 30000000 },
  6: { label: "6개 일치 (2,000,000,000원)", prize: 2000000000 },
};

export function calculateResult(lottos, winnerLotto, bonusNumber) {
  const winningNumbers = winnerLotto.getNumbers();
  const result = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };

  lottos.forEach((lotto) => {
    const matched = lotto
      .getNumbers()
      .filter((n) => winningNumbers.includes(n)).length;

    if (matched === 5 && lotto.getNumbers().includes(bonusNumber)) {
      result.bonus += 1;
    } else if (matched >= 3) {
      result[matched] += 1;
    }
  });

  printResult(result, lottos.length);
}

function printResult(result, totalCount) {
  Console.print("\n당첨 통계");
  Console.print("---");

  let totalPrize = 0;
  for (const [key, { label, prize }] of Object.entries(PRIZE_INFO)) {
    const count = result[key] || 0;
    Console.print(`${label} - ${count}개`);
    totalPrize += count * prize;
  }

  const rate = ((totalPrize / (totalCount * 1000)) * 100).toFixed(1);
  Console.print(`총 수익률은 ${rate}%입니다.`);
}
