import { ItemCategory, ItemPhoto, ItemPrice, ItemTitle, ItemWrapper } from "./styles/ArrivalsItem.styled";

type Props = {
  item: {
    id: number;
    name: string;
    price: number;
    description: string;
    photo: string;
    category: string;
  };
};

const ArrivalsItem = (props: Props) => {
  return <ItemWrapper>
        <ItemPhoto>
            <img src={`../src/assets/` + props.item.photo} alt="item photo" />
        </ItemPhoto>
        <ItemCategory>{props.item.category}</ItemCategory>
        <ItemTitle>{props.item.name}</ItemTitle>
        <ItemPrice>${props.item.price}</ItemPrice>
    </ItemWrapper>;
};
export default ArrivalsItem;
