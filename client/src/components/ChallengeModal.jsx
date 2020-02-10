import React from 'react';

export default function ChallengeModal(props) {
  const {
    currentPresident,
    handleCloseModal,
    handleDefeat
  } = props
  console.log(props.currentPresident)

  const {
    drink_type,
    specific_drink,
    name,
    image_url,
    id,
    description,
    alt_two
  } = currentPresident

  let cocktailInstructions = []


  if (drink_type === "cocktail") {
    cocktailInstructions = specific_drink.split(";")
  } else if (drink_type === "sober") {
    cocktailInstructions = alt_two.split(";")
  }

  return (
    <div className="modal challenge-modal">
      <p className="modal-exit" onClick={handleCloseModal}>X</p>
      <h2>{name}</h2>
      <img src={image_url} /><br /><br />
      <small>{description}</small>
      <h3>Favorite Drink:</h3>
      {
        drink_type === "cocktail" ?
          cocktailInstructions.map(instruction => (
            <p className="cocktail-instruction">{instruction}</p>
          ))
          : <p>{specific_drink}</p>
      }
      {
        drink_type === "sober" ?
          <div>
            <hr />
            <p>Feel like having a drink anyway? Here's a themed cocktail:</p>
          </div> : null
      }
      {
        drink_type === "sober" ?
          cocktailInstructions.map(instruction => (
            <p className="cocktail-instruction">{instruction}</p>
          )) : null
      }
      <button className="drink-button" onClick={() => handleDefeat(id)}>Drink</button>
    </div >
  )
}