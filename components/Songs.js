import React from "react";

function Default(props) {
  return null;
}

export function Song(props) {
  return (
    <div
      className={`p-2 h-screen w-full rounded-xl p-8 m-5 flex-inline ${props.color}`}
    >
      <h1 className="text-3xl">{props.text}</h1>
    </div>
  );
}

Song.defaultProps = {
  color: "bg-gray-100",
};

export default Default;
