import { $ } from "../util/index.js";
import checkValidation from "./checkValidation.js";

const getUserNumber = () => {
  const $userInput = $("#user-input").value;
  const userInputNumbers = $userInput
    .split("")
    .map((number) => parseInt(number, 10));

  if (checkValidation(userInputNumbers)) {
    return userInputNumbers.join("");
  }
};

export default getUserNumber;
