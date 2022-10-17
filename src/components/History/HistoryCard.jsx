import React from 'react';
import {
    Content,
    Img,
    Price,
    Rating,
    Stars,
    Title
} from "../Product/productStyle";
import { Star} from "../../assets/icons";
import productImg from "../../assets/images/static/product.png";
import {Card} from "./style";

const HistoryCard = () => {
    return (
        <Card>
            <Img>
                <img src={productImg} alt={'product'}/>
            </Img>
            <Content>
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
                <Price>1 134 900 ₽</Price>
            </Content>
        </Card>
    );
};

export default HistoryCard;