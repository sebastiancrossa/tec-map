import moment from "moment";

// checks if the current users time is in the range of the availability hours for each establishment
// returns a boolean
// range => [n, n] array of numbers that represent the time range of disponibility
export const checkIsOpen = (range) => {
  const currentTime = moment().format("HH");

  if (currentTime >= range[0] && currentTime <= range[1]) {
    console.log(moment().format("e"), " is in range ", range);

    return true;
  } else {
    console.log(moment().format("e"), " is not in range ", range);

    return false;
  }
};
