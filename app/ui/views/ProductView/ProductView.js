import React from "react";
import { Appbar, Card } from "react-native-paper";
import styled from "styled-components/native";


export const ViewContainer = styled.SafeAreaView`
  background-color: aliceblue !important;
  flex: 1;
`;

export const ProductCard = styled(Card)`
        padding: 15px;
    `;

    export const AppbarPaper = styled(Appbar.Header)`
      
      background-color: #E83D30;
    `;

export const ContentCard = styled(Card.Content)`
    padding-top: 0px;
`;

export default function ProductsView(props) {
  return <ViewContainer />
}