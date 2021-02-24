import React from 'react';

const Character = ({
  name,
  alive,
  biography,
  fullName,
  house,
  images,
  yearOfBirth,
}) => {
  return (
    <div className="character">
      <img src={images.md} alt={name} />
      <div className="character-info">
        <h3>{name}</h3>
        <span>{house}</span>
      </div>

      <div className="info-over">
        <h2>Biography:</h2>
        <p>
          {biography.fullName}
          <br /> Born {biography.placeOfBirth}
        </p>
      </div>
    </div>
  );
};

export default Character;
