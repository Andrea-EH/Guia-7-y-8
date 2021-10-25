import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

const Pais=({ resultado }) => {
  const [info,setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [area, setarea] = useState();
  const [banderapais, setbanderapais] = useState("");
  
  useEffect(() => {
    setinfo(resultado);
    lengua.length = 0;

    Object.values(info).map(e => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setarea(e.area.total);
      

      switch({nombre})
        {
          case 'El Salvador':
            setbanderapais("require('../imagenes/ElSalvador.jpg')");
          break;
          case 'Guatemala':
            setbanderapais("require('guatemala.jpg')");
          break;
          case 'Honduras':
            setbanderapais('../imagenes/honduras.jpg');
          break;
          case 'Nicaragua':
            setbanderapais('../imagenes/nicaragua.jpg');
          break;
          case 'Costa Rica':
            setbanderapais('../imagenes/CR.jpg');
          break;
          case 'Panamá':
            setbanderapais('../imagenes/panama.jpg');
          break;
          case 'Argentina':
            setbanderapais('../imagenes/ARG.jpg');
          break;
          case 'Colombia':
            setbanderapais('../imagenes/Col.jpg');
          break;
          case 'Espanha':
            setbanderapais('../imagenes/Spain.jpg');
          break;
          case 'Estados Unidos':
            setbanderapais('../imagenes/USA.jpg');
          break;
          case 'Mexico':
            setbanderapais('../imagenes/Mexico.jpg');
          break;
          case 'Peru':
            setbanderapais('../imagenes/Peru.jpg');
          break;
        }
      
      Object.values(e.linguas).map(l => {
        lengua.push(l.nome)
      })
    });
  });

      if(nombre === "El Salvador")
      {
        setbanderapais("require('../imagenes/ElSalvador.jpg')");
      }


      
      Object.values(e.linguas).map(l => {
        lengua.push(l.nome)
      })
    
  


  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{justifyContent: 'center'}}>
        <Text>Capital: {capital}</Text>
        <Text>Region: {region}</Text>
        <Text>Subregion: {region}</Text>
        <Text>Lengua: {lengua.toString()}</Text>
        <Text>Área: {area} km2</Text>
        <View>
            <Image source={banderapais} style={{width: '75%', height:100, backgroundColor: 'black', marginLeft: 37, marginTop: 10}}/>
            <Text>{banderapais}</Text>
          </View>
      </View>
    </Card>
  );
};

export default Pais;