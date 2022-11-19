import React, { useEffect, useState } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ProductProvider from './app/ui/providers/ProductProvider';
import CartProvider from './app/ui/providers/CartProvider';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3C6578',
        secondary: '#96B6C5',
        tertiary: '#7CD0F7',
    },
};

export default function Main() {

    return (
        <PaperProvider theme={theme}>
            <ProductProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductProvider>
        </PaperProvider>
    );
}



AppRegistry.registerComponent(appName, () => Main);
