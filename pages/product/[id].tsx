import type { NextPage } from "next";
import { useState, useEffect, SetStateAction } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import _ from "lodash";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import {
  AddToCardButton,
  Divider,
  ProductContainer,
  ProductDescription,
  ProductDetail,
  ProductFooter,
  ProductHeader,
  ProductOptions,
  ProductPrice,
  Discount,
} from "../../components/Product/styled";
import Head from "next/head";
import ColorSwatch from "../../components/ColorSwatch";
import Spinner from "../../components/Spinner";
import LikeButton from "../../components/LikeButton";
import SizeSelection from "../../components/SizeSelection";
import { IVariant } from "../globalStyle";

type product = {
  name: string;
  description: string;
  brand: string;
  variants: Array<IVariant>;
};

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([] as unknown as product);
  const [variants, setVariants] = useState<IVariant[]>([]);
  const productUrl = `https://asia-southeast1-muze-academy.cloudfunctions.net/products/${id}`;
  const cartUrl =
    "https://asia-southeast1-muze-academy.cloudfunctions.net/cart";
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [amount, setAmount] = useState(1);
  const [stock, setStock] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  let discountPrice: number | undefined;
  if (variants.length > 0) {
    discountPrice =
      variants[selectedVariant]?.price - variants[selectedVariant]?.discount ;
  }
  useEffect(() => {
    const fetchProduct = async () => {
      if (!router.isReady) return;
      try {
        const res = await axios.get(productUrl);
        const data = await res.data;
        const uniqueColor = _.uniqBy(data.variants, "color") as unknown as IVariant[];
        setVariants(uniqueColor);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [router.isReady, productUrl]);

  const handleSelectVariant = (i: number) => {
    setSelectedSize("");
    setSelectedVariant(i);
    handleSelectSize("", 0);
  };

  const handleSelectSize = (size: string, stock: number) => {
    setSelectedSize(size);
    setStock(stock);
    setAmount(1);
  };

  const handleAddProduct = async () => {
    try {
      const sku = product.variants.filter(
        (variant) =>
          variant.size === selectedSize &&
          variant.color === variants[selectedVariant].color
      )[0].sku;
      const newItem = { sku: sku, qty: amount };
      const res = await axios.post(cartUrl, newItem);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductContainer>
        <BackButton onBack={() => router.push("/")} />
        {variants.length > 0 && (
          <Image
            src={variants[selectedVariant].imageUrl}
            alt={`product ${product.name} variant ${selectedVariant}`}
            width={650}
            height={650}
            objectFit="cover"
            priority
          />
        )}
        <ProductDetail>
          <ProductHeader>
            <div className="title">{product.name}</div>
            <div className="brand">{product.brand}</div>
          </ProductHeader>
          <Divider />
          <ProductPrice>
            <div className="label">Price</div>
            <div className="price">
              {variants.length > 0 &&
                `$ ${parseFloat((variants[selectedVariant]?.price - variants[selectedVariant]?.discount).toString()).toFixed(2)}`}
              {variants.length > 0 &&
              variants[selectedVariant]?.discount > 0 ? (
                <Discount>$ {variants[selectedVariant]?.price}</Discount>
              ) : (
                ""
              )}
            </div>
          </ProductPrice>
          <Divider />
          <ProductOptions>
            <div>
              <div className="label">Color</div>
              <ColorSwatch
                uniqueColor={variants}
                selectedVariant={variants[selectedVariant]}
                updateVariant={handleSelectVariant}
                size={30}
              />
            </div>
            <div>
              <div className="label">Size</div>
              {product.variants != undefined && (
                <SizeSelection
                  currentVariant={variants[selectedVariant]}
                  variants={product.variants}
                  selectedSize={selectedSize}
                  updateVariant={handleSelectSize}
                />
              )}
            </div>
          </ProductOptions>
          <Divider />
          <ProductFooter>
            <Spinner amount={amount} setAmount={setAmount} maxAmount={stock} />
            <AddToCardButton
              isSelectSize={selectedSize != null}
              onClick={() => handleAddProduct()}
            >
              Add to Cart
            </AddToCardButton>
            <LikeButton size="medium" />
          </ProductFooter>
        </ProductDetail>
      </ProductContainer>
      <ProductDescription>
        <div className="title">Description</div>
        <p>{product.description}</p>
      </ProductDescription>
    </>
  );
};

export default ProductPage;
