import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [imgCondition, setImgCondition] = useState(true)
  const [nome, setnome] = useState("casa")
  const [error, setError] = useState(false)
  const [img, setImg] = useState(`https://loremflickr.com/320/240/${nome}`)

  const getImg = ()=>{
    if(nome === "") setError(true)
    if(nome != "") setError(false)
    if(!imgCondition){
      setImgCondition(true)
      setImg(`https://loremflickr.com/320/240/${nome}`)
    }else{
      setImg(`https://loremflickr.com/320/240/${nome}`)

    }
  }
  return (
    <View className="bg-slate-100 flex flex-row justify-center w-full h-full">
      <View className="w-11/12 h-full my-20">
        
        <Text className="text-2xl font-bold w-full text-center">Gerador de Imagem</Text>
        <TextInput
          className="w-full h-11 my-5 pl-1"
          placeholder='Digite o nome...'
          value={nome}
          onChangeText={setnome}
        />
        <TouchableOpacity
        onPress={getImg}
        className="w-full h-11 bg-green-300 p-2 rounded-2xl flex justify-center items-center">
          <Text className="text-center text-2xl text-green-950 ">Gerar</Text>
        </TouchableOpacity>
        {error && (<Text className="my-2 text-red-500 text-center text-ml">Nome é Obrigatónio</Text>)}
        {/* https://loremflickr.com/320/240/ */}
        {imgCondition ?
          <Image
            className="w-full h-2/4 mt-6 rounded-lg"
            source={{uri: imgCondition ? img : "https://w7.pngwing.com/pngs/296/534/png-transparent-robot-cute-robot-blue-electronics-humanoid-robot-thumbnail.png"}}
          /> : <Text>Sem Imagem</Text>
        }
      </View>
    </View>
  )
}

export default Home