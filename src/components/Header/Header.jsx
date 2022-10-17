import React from "react";

//components
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import {PrimaryButton} from "../Button/Button";

//styles
import {Header as HeaderContainer, HeaderBottom, HeaderProfile, HeaderSection, HeaderTop, TabMenu} from "./style";
import { Container } from "../../assets/styles";

//images
import { Avatar, Catalogue, Search } from "../../assets/icons/index";
import { IconButton } from "../IconButton/IconButton";
import { FavoritePanel } from "../FavoritePanel/FavoritePanel";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <Container>
          <Logo />
          <TabMenu>
            <HeaderSection>
              <IconButton>
                <Search/>
              </IconButton>
            </HeaderSection>
            <FavoritePanel data={{
              favorite: 10,
              cart: 1,
              comparison: 34
            }}/>
          </TabMenu>
          <HeaderProfile>
            <a href={"/#"} className="link">Войти</a>
            <a href={"/#"} aria-label="Go to profile page">
              <IconButton>
                <Avatar/>
              </IconButton>
            </a>
          </HeaderProfile>
        </Container>
      </HeaderTop>
      <HeaderBottom>
        <Container>
          <HeaderSection>
            <PrimaryButton>
              <Catalogue/>
              Каталог
            </PrimaryButton>
            <IconButton>
              <Search/>
            </IconButton>
          </HeaderSection>
          <Navigation/>
          <FavoritePanel data={{
            favorite: 10,
            cart: 1,
            comparison: 34
          }}/>
        </Container>
      </HeaderBottom>
    </HeaderContainer>
  )
}