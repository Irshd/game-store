import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Item from "./Item";
const Main = () => {
  let [game, setGame] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/games")
      .then((game) => {
        setGame(game.data.data);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);
  return (
    <div>
      <Header />

      <section className="item-container row">
        {game.map((game, key) => {
          return <Item key={game.id} item={game.attributes} />;
        })}
      </section>
    </div>
  );
};

export default Main;
