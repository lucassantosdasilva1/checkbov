import { useCheckList } from '@modules/Home/hook';
import { IChecklistGet } from '@modules/Home/hook/types';
import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from './Card';

import {
  Container, 
} from './styles';

export function Content() {
  const { checkLists } = useCheckList();
  console.log('checkLists', checkLists)
  return (
    <Container>
      <FlatList
        data={checkLists}
        keyExtractor={item => item._id}
        renderItem= {({item}) => (
          <Card checklist={item as IChecklistGet} key={item._id}/>
          // <Card checklist={item as IChecklistGet} key={item._id}/>
          // <Card repository={item as Repository} showFavoriteButton={true} />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={isLoading} onRefresh={getProductsAPI} />
        // }
      />
    </Container>
  );
}