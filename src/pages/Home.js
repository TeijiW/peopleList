import React, { Component } from "react"
import { View, FlatList, Text } from "react-native"
import { ListItem } from "react-native-elements"
// import api from "../api"
import axios from "axios"

export default props => {
	const keyExtractor = (item, index) => index.toString()
	let list = []
	const getDataAPI = async () => {
		const url = "https://randomuser.me/api/?results=10&exc=login, id&noinfo"
		const response = await axios.get(url)
		// return response.data.results
		list = response.data.results
	}
	const renderItem = item => {
		const person = item.item
		return (
			<ListItem
				title={`${person.name.first} ${person.name.last}`}
				subtitle={person.location.country}
				leftAvatar={{ source: { uri: person.picture.thumbnail } }}
				onPress={() => props.navigation.navigate("Detail", person)}
				bottomDivider
				chevron
			/>
		)
	}

	console.log(list)
	return (
		<View>
			<FlatList
				keyExtractor={keyExtractor}
				data={() => getDataAPI()}
				renderItem={renderItem}
			/>
		</View>
	)
}
