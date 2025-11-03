import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5])).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => new Lotto(["a", 2, 3, 4, 5, 6])).toThrow("[ERROR]");
  });

  test("로또 번호가 1 미만이거나 45 초과인 경우 예외가 발생한다.", () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow("[ERROR]");
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow("[ERROR]");
  });

  test("로또 번호가 6개이고 중복 없이 1~45 범위의 숫자면 정상 생성된다.", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6])).not.toThrow();
  });
});
