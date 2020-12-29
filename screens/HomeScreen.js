import React from 'react';
import {Text,View, Alert , FlatList} from 'react-native'
import axios from 'axios';
import {ListItem} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';



export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state= {
            listData :[],
            url : "http://089824d05759.ngrok.io"
        }
        
    }

    getPlanets =()=>{

        const {url} = this.state;
        axios.get(url).then(response =>{
            return this.setState({listData : response.data.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })

    }

    componentDidMount(){
        this.getPlanets()
    }

    keyExtractor=(item,index )=> index.toString();

    renderItem=({item,index})=>{
        <ListItem 
            key ={index}
            title = {'Planet : ${item.name}'}

            subtitle = {'Disrance from earth: ${item.distance_from_earth'}

            onPress={()=>this.props.navigation.navigate("DetailScreen"), {planet_name : item.name}}
        />
    }

    render(){
        
            return(
                <View style ={{backgroundColor:'#000000'}}>
                    <SafeAreaView/>
                    <Text>
                        This is the home screen
                    </Text>

                    <FlatList
                    data={this.state.listData}
                    renderItem= {this.renderItem}
                    keyExtractor= {this.keyExtractor}
                    />
                </View>
            );
    }
}