const limitText = (text, maxChar = 100) => {
  const chars = text.split("");
  if (chars.length < 100) return text;

  const limitedText = chars.slice(0, maxChar).join("");
  return `${limitedText}...`;
};

const arrayOfObjectToString = (arrayOfObject, separatorOfString = ",") => {
  const arrayOfString = arrayOfObject.map((item) => item.name);
  return arrayOfString.join(` ${separatorOfString} `);
};

const resetTabIndexFromStart = () => {
  document.querySelector("#tabIndexStart").focus();
};

export { limitText, arrayOfObjectToString, resetTabIndexFromStart };
