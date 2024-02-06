import { useState } from 'react'
import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { View, FlatList } from 'react-native'

import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string){
    console.log(selectedCategory)
    setCategory(selectedCategory)
  }

  return (
    <View className='flex-1 pt-8'>
      <Header title='Faça seu pedido' cartQuantityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton 
            title={item} 
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='max-h-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}