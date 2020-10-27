import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, } from 'react-native';

import {Button, RestaurantCard } from "./components"

const Main = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [restaurantData, setRestaurantData] = useState([]);

    // ASYNC-AWAIT
    const fetchRestaurant = async () => {
        setLoading(true);
        const response = await axios.get('https://random-data-api.com/api/restaurant/random_restaurant');
        setRestaurantData(response.data);
        setLoading(false);
    }
    // const [userData, setUserData] = useState([]);

    // const fetchData_Then = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(({ data }) => {
    //             setUserData(data);
    //         })
    // }

    // const fetchData_Await = async () => {
    //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     setUserData(data);
    // }


    // function promiseFunction(number) {
    //     return new Promise((resolve, reject) => {
    //         if (number > 5) {
    //             resolve("Sayı beşten büyük!");
    //         }
    //         else {
    //             reject("Sayı beşten küçük..");
    //         }
    //     })
    // }

    // const checkNumber = () => {
    //     promiseFunction(1)
    //         .then(response => {
    //             console.log("response: ");
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log("error: ");
    //             console.log(error);
    //         })
    // }

    useEffect(() => {
        fetchRestaurant();
    }, [])

    return (
        <SafeAreaView style ={{flex:1}}>
            <View style ={{flex:1}}>
                
            {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <RestaurantCard item={restaurantData} />
                }

                <Button
                    title="Suggest New Restaurant"
                    onNewRequest={() => fetchRestaurant()}
                />
              {/* <Button title = "Suggest a New Restaurants. "/> */}
                {/* <Button title="Fetch Data With Then " onPress={fetchData_Then} />
                <Button title="Fetch Data With Await " onPress={fetchData_Await} />
                <Button title="Number" onPress={checkNumber} />

                <FlatList
                    data={userData}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                /> */}

            </View>
        </SafeAreaView>
    );
}

export default Main;