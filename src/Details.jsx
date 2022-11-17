import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPets";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  // if (results.isError) {
  //   return <h1>Oh No!</h1>;
  // }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader"> loader </h2>
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />

      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
