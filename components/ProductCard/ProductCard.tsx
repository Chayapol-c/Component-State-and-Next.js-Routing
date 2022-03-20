import Image from "next/image";
import { useRouter } from "next/router";
import { Key, useState } from "react";
import {
  CardContainer,
  ImageContainer,
  Container,
  Discount,
  Footer,
  Price,
  CardHeader,
} from "./styled";
import _, { uniq } from "lodash";
import ColorSwatch from "../ColorSwatch";
import LikeButton from "../LikeButton";

type Props = {
  id: number;
  name: string;
  brand: string;
  variants: Array<any>;
};

const Card = ({ id, name, brand, variants }: Props) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const uniqueColor = _.uniqBy(variants, "color");
  const discountPrice =
    uniqueColor[selectedVariant].price - uniqueColor[selectedVariant].discount;
  const router = useRouter();

  const handleNavigateProduct = (e) => {
    if (
      e.target.id === "like-btn" ||
      e.target.tagName === "path" ||
      e.target.tagName === "svg" ||
      e.target.id === "color"
    ) {
      console.log("except");
      return;
    }
    router.push(`product/${id}`);
  };

  return (
    <CardContainer id={`product-card-${id}`} onClick={handleNavigateProduct}>
      <CardHeader>
        <div className="title">{name}</div>
        <div className="brand">{brand}</div>
      </CardHeader>
      <ImageContainer>
        <Image
          src={uniqueColor[selectedVariant].imageUrl}
          alt={`product ${name} variant1`}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <ColorSwatch
        uniqueColor={uniqueColor}
        selectedVariant={uniqueColor[selectedVariant]}
        updateVariant={(i) => setSelectedVariant(i)}
        size={20}
      />
      <Footer>
        <Price>
          <Discount>
            {uniqueColor[selectedVariant].discount > 0
              ? `$ ${uniqueColor[selectedVariant].price}`
              : ""}
          </Discount>
          {uniqueColor[selectedVariant].discount > 0 ? (
            <p>$ {parseFloat(discountPrice).toFixed(2)}</p>
          ) : (
            <p>$ {uniqueColor[selectedVariant].price}</p>
          )}
        </Price>
        <LikeButton size="small" />
      </Footer>
    </CardContainer>
  );
};

const ProductCard = ({ data }: Array<any>) => {
  return (
    <Container>
      {data.map(
        (
          ele: { id: number; name: string; brand: string; variants: any[] },
          i: Key
        ) => (
          <Card
            key={i}
            id={ele.id}
            name={ele.name}
            brand={ele.brand}
            variants={ele.variants}
          />
        )
      )}
    </Container>
  );
};

export default ProductCard;
