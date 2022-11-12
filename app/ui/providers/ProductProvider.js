import React, { createContext, useEffect, useReducer, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar, Paragraph, Card, Button } from 'react-native-paper';

import { initialState, ProductReducer } from "../../data/reducers/ProductReducer"
import { ApiService } from '../../data/services/ApiService';
import { ViewContainer, ProductCard, ContentCard, AppbarPaper } from '../views/ProductView/ProductView';

export const ProductContext = createContext(initialState);

export default function ProductProvider(props) {
    const [productState, productDispatch] = useReducer(ProductReducer, initialState);

    /**
     *  @ignore
     * 
     *  @param {data} productState  The state of the product component of get am API in Localhost storage.
     *  @param {data} productCreate The state to save the product in code.   
     */
    const data = [
        {
            id: "1",
            name: "Pizza",
            preco: "R$ 2,00",
            uri: "https://www.killerpickles.com/wp-content/uploads/2012/10/DSCN8932.jpg"
        },
        {
            id: "2",
            name: "Hamburguer",
            preco: "R$ 10,00",
            uri: "https://s2.glbimg.com/-skQXghwNBeLCuYy742th0fMiZQ=/e.glbimg.com/og/ed/f/original/2019/12/10/marfrig.jpg"
        },
        {
            id: "3",
            name: "Hot Row",
            preco: "R$ 200,00",
            uri: "https://th.bing.com/th/id/R.2ab1c998e12a70c796b2b973969055d5?rik=QCZsZ5DIZqHQ2g&riu=http%3a%2f%2fcozinhaemcena.com.br%2fwp-content%2fuploads%2f2016%2f10%2fhot-roll-veggie-capa.jpg&ehk=mR%2fBS5GCZgr2%2fLQ5gRkbGFTr5jWXzF7hu8bZ3kI26S0%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id: "4",
            name: "Coxinha",
            preco: "R$ 30,00",
            uri: "https://th.bing.com/th/id/OIP.Ywo3glr0athRnae1jvFyPQHaE7?pid=ImgDet&rs=1"
        }
    ]

    return (
        <ProductContext.Provider value={[productState, productDispatch]}>
            <ViewContainer>
                <AppbarPaper>
                    <Appbar.Content titleStyle={{ color: "white" }} title={'Produtos'} />
                </AppbarPaper>
                <ScrollView>
                    {
                        data.map((value) => (
                            <ProductCard key={value.id}>
                                <Card.Cover source={{ uri: value.uri }}></Card.Cover>
                                <Card.Title title={value.name}
                                    right={(props) => <Button>Selecionar</Button>} />
                                <ContentCard>
                                    <Paragraph>{value.preco}</Paragraph>
                                </ContentCard>
                            </ProductCard>
                        ))
                    }
                </ScrollView>
            </ViewContainer>
        </ProductContext.Provider>
    )
}