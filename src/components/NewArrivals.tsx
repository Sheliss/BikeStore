import { useEffect, useState } from "react";
import ArrivalsItem from "./ArrivalsItem";
import { Container } from "./styles/Container.styled";
import {
  NewArrivalsInner,
  NewArrivalsTitle,
  NewArrivalsItems,
} from "./styles/NewArrivals.styled";
// @ts-ignore
import Items from "/db.json";

type ArrivalItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  category: string;
};

const NewArrivals = () => {
  const [arrivals, setArrivals] = useState<Array<ArrivalItem>>();

  //const uri: string = "http://localhost:5000/items";
  const getItems = async () => {
    try {
      const res = await Items.items;
      //const data = await res.json();
      setArrivals(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItems();
  }, [])

  return (
    <>
      <Container>
        <NewArrivalsInner>
          <NewArrivalsTitle>New Arrivals</NewArrivalsTitle>
          <NewArrivalsItems>
            {arrivals === undefined
              ? ""
              : arrivals.slice(0, 4).map((i) => <ArrivalsItem key={i.id} item={i} />)}
          </NewArrivalsItems>
        </NewArrivalsInner>
      </Container>
    </>
  );
};
export default NewArrivals;
