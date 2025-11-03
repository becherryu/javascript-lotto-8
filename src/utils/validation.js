import { ERROR_MESSAGES } from "./constants.js";

export function validatePrice(price) {
  if (isNaN(price) || price <= 0 || price % 1000 !== 0) {
    throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.PRICE}`);
  }

  return price;
}
