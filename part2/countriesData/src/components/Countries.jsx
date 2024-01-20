/* eslint-disable react/prop-types */
function Countries({ countries }) {
  const list = countries.length

  // const countryInfo = {
  //   language: countries.languages[0],
  //   capital: countries.capital,
  //   area: countries.area,
  //   flag: countries.flag.png
  // }

  //languages = 
  //capital = countries.capital
  //area = countries.area
  //flag = countries.flags.png

  return (
    <div> 
    {list > 10 ? 'Too many matches, specify another filter' : (
      <div>
        {countries.map((country, i) => (
          <p key={i}>
            {country.name.common}
          </p>
        ))}
      </div>
    )}
    </div>
  )
}

export default Countries
