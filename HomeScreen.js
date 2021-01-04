import React from 'react';
import {Text,View, Alert , FlatList} from 'react-native'
import axios from 'axios';
import {ListItem} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';



export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            listData :[],
            url : "http://02785ab2e253.ngrok.io"
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
        this.getPlanets();

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
        const { listData } = this.state;

    if (listData.length === 0) {
      return (
        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>Loading</Text>
        </View>
      );
    }
        
            return(
                <View style ={{backgroundColor:'#000000'}}>
                    <SafeAreaView/>
                    <View style = {{flex: 0.1, justifyContent: "center", alignItems: "center"}}>
                    <Text>
                        This is the home screen
                    </Text>
                    </View>
                    <View style = {{flex: 0.9}}>
                    <FlatList
                    data={this.state.listData}
                    renderItem= {this.renderItem}
                    keyExtractor= {this.keyExtractor}
                    />
                    </View>
                </View>
            );
    }
}