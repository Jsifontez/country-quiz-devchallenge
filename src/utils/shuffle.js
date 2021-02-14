const shuffle = countries => {
  let count = countries.length, copy, i;

  while (count) {
    i = Math.floor(Math.random() * count--)

    copy = countries[count]
    countries[count] = countries[i]
    countries[i] = copy
  }

  return countries
}

export default shuffle
