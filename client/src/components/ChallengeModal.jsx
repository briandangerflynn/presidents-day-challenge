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
    id
  } = currentPresident

  let cocktailInstructions = []


  if (drink_type === "cocktail") {
    cocktailInstructions = specific_drink.split(";")
  }

  return (
    <div className="modal challenge-modal">
      <p className="modal-exit" onClick={handleCloseModal}>X</p>
      <h2>{name}</h2>
      <img src={image_url} />
      <h4>Favorite Drink:</h4>
      {
        drink_type === "cocktail" ?
          cocktailInstructions.map(instruction => (
            <p>{instruction}</p>
          ))
          : <p>{specific_drink}</p>
      }
      <button className="drink-button" onClick={() => handleDefeat(id)}>Drink</button>

    </div >
  )
}