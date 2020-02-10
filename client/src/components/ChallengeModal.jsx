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
    description
  } = currentPresident

  let cocktailInstructions = []


  if (drink_type === "cocktail") {
    cocktailInstructions = specific_drink.split(";")
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
      <button className="drink-button" onClick={() => handleDefeat(id)}>Drink</button>
    </div >
  )
}