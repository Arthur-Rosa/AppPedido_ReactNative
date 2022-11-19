import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { productsResponse } from "../../../data/actions/ProductActions";
import { ApiService } from "../../../data/services/ApiService";
import { NumberService } from "../../../data/services/NumberService";
import { ProductContext } from "../../providers/ProductProvider";


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

  const [{ productList, selectedProducts }, productDispatch] = useContext(ProductContext);

  useEffect(() => {
    ApiService.get('appPedido').then(productList => productDispatch(productsResponse(productList)))
    // 
  })

  return (
    <ViewContainer>
      <AppbarPaper>
        <Appbar.Content titleStyle={{ color: "white" }} title={'BMART'} />
      </AppbarPaper>
      <ScrollView>
        {
          productList.map((item) => (
            <ProductCard key={item.id}>
              <Card.Cover source={{ uri: item.uri }}></Card.Cover>
              <Card.Title title={item.name}
                right={(props) => <Button>Comprar</Button>} />
              <ContentCard>
                <Paragraph>{NumberService.currency(item.price)}</Paragraph>
              </ContentCard>
            </ProductCard>
          ))
        }
      </ScrollView>
    </ViewContainer>
  )
}