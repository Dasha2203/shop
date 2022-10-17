import React from 'react';
import {
    Bonuses, Buttons,
    Card,
    ColorText,
    Content,
    Footer, HeaderCard,
    Img,
    OriginalPrice,
    Price,
    Prices,
    Rating,
    Stars,
    Title
} from "./productStyle";

import productImg from "../../assets/images/static/product.png"

import {PrimaryButton} from "../Button/Button";
import {Cart, Star, Sale, New, Recommended, Comparison, Favorite} from "../../assets/icons/index";
import {IconButton} from "../IconButton/IconButton";

const Product = () => {
    return (
        <Card>
            <HeaderCard>
                <Bonuses>
                    <Sale/>
                    <Recommended/>
                    <New/>
                </Bonuses>
                <Buttons>
                    <IconButton >
                        <Comparison/>
                    </IconButton>
                    <IconButton>
                        <Favorite/>
                    </IconButton>
                </Buttons>
            </HeaderCard>
            <Img>
                <img src={productImg} alt={'product'}/>
            </Img>
            <Content>
                <ColorText green>В наличии</ColorText>
                <Title>Беговая дорожка CardioPower S35</Title>
                <Rating>
                    Ретинг
                    <Stars>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Stars>
                </Rating>

                <Footer>
                    <Prices>
                        <Price current>1 134 900 ₽</Price>
                        <OriginalPrice>1 134 900 ₽</OriginalPrice>
                    </Prices>
                    <PrimaryButton>
                        <Cart/> Купить
                    </PrimaryButton>
                </Footer>
            </Content>
        </Card>
    );
};

export default Product;