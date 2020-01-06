import React, { Component } from "react"
import { View, FlatList, Text } from "react-native"
import { ListItem } from "react-native-elements"
import api from "../api"
import axios from "axios"

export default props => {
	const server = api()
	const keyExtractor = (item, index) => index.toString()
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

	return (
		<View>
			<FlatList
				keyExtractor={keyExtractor}
				data={async () => await server.get()}
				renderItem={renderItem}
			/>
		</View>
	)
}
