// javascript
const birthdayInput = document.querySelector("#dob");
const radios = document.getElementsByName("selectors");
const goBtn = document.querySelector("#go");
let age;
let birthdayMillis;

goBtn.addEventListener("click", function (e) {
  e.target.preventDefault;
  let today = Date.now();
  getBirthday();
  getMilliseconds(today, birthdayMillis);
  let radio = getRadioValue();
  switch (radio) {
    case years:
      return getYears(sinceBirth);
      break;
    case months:
      return getMonths(sinceBirth);
      break;
    case weeks:
      return getWeeks(sinceBirth);
      break;
    case days:
      return getDays(sinceBirth);
      break;
    case hours:
      return getHours(sinceBirth);
      break;
    case minutes:
      return getMinutes(sinceBirth);
      break;
    case seconds:
      return getSeconds(sinceBirth);
      break;
    case milliseconds:
      return getMilliseconds(sinceBirth);
      break;
  }
  console.log(age);
});

// get birthday from input
const getBirthday = () => {
  const birthday = new Date(birthdayInput.value);
  let birthdayMillis = birthday.getTime();
  return birthdayMillis;
};

// subtract birthday from today
const getMilliseconds = (today, birthday) => {
  let sinceBirth = today - birthday;
  return sinceBirth;
};

const getSeconds = (ms) => {
  let age = Math.floor(ms / 1000);
  return age;
};
const getMinutes = (ms) => {
  let age = Math.floor(ms / (1000 * 60));
  return age;
};
const getHours = (ms) => {
  let age = Math.floor(ms / (1000 * 60 * 60));
  return age;
};
const getDays = (ms) => {
  let age = Math.floor(ms / (1000 * 60 * 60 * 24));
  return age;
};
const getWeeks = (ms) => {
  let age = Math.floor(ms / (1000 * 60 * 60 * 24 * 7));
  return age;
};
const getMonths = (ms) => {
  let age = Math.floor(ms / (1000 * 60 * 60 * 24 * 30.5));
  return age;
};
const getYears = (ms) => {
  let age = Math.floor(ms / (1000 * 60 * 60 * 24 * 365.2425));
  return age;
};

const getRadioValue = (selectors) => {
  for (let i = 0; i < radios.length; i++)
    if (radios[i].checked) {
      return radios[i].value;
    }
};
