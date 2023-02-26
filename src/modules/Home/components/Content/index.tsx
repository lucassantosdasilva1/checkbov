import { useCheckList } from '@modules/Home/hook';
import { IChecklistGet } from '@modules/Home/hook/types';
import React from 'react';
import { Text, FlatList } from 'react-native';

import {
  Container, 
} from './styles';

export function Content() {
  const { checkLists } = useCheckList();
  return (
    <Container>
      <FlatList
        data={checkLists}
        keyExtractor={item => String(item)}
        renderItem= {({item} : {item : IChecklistGet}) => (
          <Text style={{color: 'white'}}>{item.farmer.name}</Text>
          // <Card repository={item as Repository} showFavoriteButton={true} />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={isLoading} onRefresh={getProductsAPI} />
        // }
      />
    </Container>
  );
}