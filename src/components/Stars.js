import React from "react";
import Star from "./Star";

///Задать начальное значение для пропса count равное 0
function Stars({ count = 0 }) {
///Добавить проверку на то, что значение пропса count находится в диапазоне от 1 до 5 и является числом.
  if (count < 1 || count > 5 || isNaN(count)) {
///Если значение пропса count не находится в указанном диапазоне или не является числом, то вернуть null.
    return null;
  }

  const stars = [];
  for (let i = 0; i < Math.floor(count); i++) {
    stars.push(<Star key={i} />);
    ///Cгенерировать массив из компонентов Star
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((star, index) => (
        <li key={index}>{star}</li>
      ))}
    </ul>
  );
}

export default Stars;