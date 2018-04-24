import React from 'react';
const DataStoreContext = React.createContext({});
// 定义一个context 对象，将他的Provider 和 Consumer export出去
export const DataStoreConsumer = DataStoreContext.Consumer;
export const DataStoreProvider = DataStoreContext.Provider;
