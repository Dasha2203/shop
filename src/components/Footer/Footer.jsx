import React from 'react';

//styles
import {
    Contacts,
    CopyRight,
    FooterBottom,
    FooterContainer,
    FooterLogo,
    FooterMenu,
    FooterTop, MenuLink, MenuNav, MenuSection, MenuTitle,
    PaymentMethods, Phone, RightBottomFooter,
    SocialButtons,
} from "./style";
import {Container} from "../../assets/styles";
import {Buttons} from "../UI";

//components
import {SecondaryBorderButton, SecondaryButton} from "../Button/Button";
import {Logo} from "../Logo/Logo";
import {IconButton} from "../IconButton/IconButton";

//icons
import {FaceBook, Instagram, MasterCard, PayPal, Visa, WebMoney, YouTube, Telegram} from "../../assets/icons";
import Input from "../Input/Input";


const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterTop>
                    <FooterMenu>
                        <MenuSection>
                            <MenuTitle>Каталог</MenuTitle>
                            <MenuNav>
                                <MenuLink href={"#"}>Для дома</MenuLink>
                                <MenuLink href={"#"}>Для фитнсе клубов</MenuLink>
                                <MenuLink href={"#"}>Акции</MenuLink>
                                <MenuLink href={"#"}>Идеи и подборки</MenuLink>
                                <MenuLink href={"#"}>Новинки</MenuLink>
                                <MenuLink href={"#"}>Наши бренды</MenuLink>
                            </MenuNav>
                        </MenuSection>
                        <MenuSection>
                            <MenuTitle>Поддержка</MenuTitle>
                            <MenuNav>
                                <MenuLink href={"#"}>Доставка и оплата</MenuLink>
                                <MenuLink href={"#"}>Условия возврата</MenuLink>
                                <MenuLink href={"#"}>FAQ</MenuLink>
                                <MenuLink href={"#"}>Гарантия</MenuLink>
                            </MenuNav>
                        </MenuSection>
                        <MenuSection>
                            <MenuTitle>Услуги</MenuTitle>
                            <MenuNav>
                                <MenuLink href={"#"}>В рассрочку</MenuLink>
                                <MenuLink href={"#"}>Trade-in</MenuLink>
                            </MenuNav>
                        </MenuSection>
                        <MenuSection>
                            <MenuTitle>О компании</MenuTitle>
                            <MenuNav>
                                <MenuLink href={"#"}>О нас</MenuLink>
                                <MenuLink href={"#"}>Наша миссия</MenuLink>
                                <MenuLink href={"#"}>Наша команда</MenuLink>
                                <MenuLink href={"#"}>Наши проекты</MenuLink>
                                <MenuLink href={"#"}>Новости</MenuLink>
                                <MenuLink href={"#"}>Блог</MenuLink>
                                <MenuLink href={"#"}>Где купить</MenuLink>
                                <MenuLink href={"#"}>Контакты</MenuLink>
                            </MenuNav>
                        </MenuSection>
                    </FooterMenu>
                    <Contacts>
                        <Input placholder={'Подписаться на рассылку'} icon={<Telegram/>}/>
                        <Phone href={'tel:+70000000000'}>+7 (000) 000-00-00</Phone>
                        <Phone href={'tel:+88000000000'}>8 (800) 000-00-00</Phone>
                    </Contacts>
                </FooterTop>
                <FooterBottom>
                    <FooterLogo>
                        <Logo/>
                        <CopyRight>© WellFitness. 2007 Все права защищены</CopyRight>
                    </FooterLogo>
                    <RightBottomFooter>
                        <SocialButtons>
                            <IconButton>
                                <Instagram/>
                            </IconButton>
                            <IconButton>
                                <YouTube/>
                            </IconButton>
                            <IconButton>
                                <FaceBook/>
                            </IconButton>
                        </SocialButtons>
                        <Buttons>
                            <SecondaryButton>Become a Partner</SecondaryButton>
                            <SecondaryBorderButton>Для дилеров</SecondaryBorderButton>
                        </Buttons>
                        <PaymentMethods>
                            <Visa/>
                            <MasterCard/>
                            <PayPal/>
                            <WebMoney/>
                        </PaymentMethods>
                    </RightBottomFooter>

                </FooterBottom>
            </Container>
        </FooterContainer>
    );
};

export default Footer;