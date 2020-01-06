import React, { Component } from "react"
import { View, FlatList, Text } from "react-native"
import { ListItem } from "react-native-elements"
import api from "../api"
const server = api()

export default class Home extends Component {
	constructor(props) {
		super(props)
	}
	state = { list: [] }

	componentDidMount() {
		server.get().then(response => this.setState({ list: response }))
	}

	keyExtractor = (item, index) => index.toString()
	renderItem = item => {
		const person = item.item
		return (
			<ListItem
				title={`${person.name.first} ${person.name.last}`}
				subtitle={person.location.country}
				leftAvatar={{ source: { uri: person.picture.thumbnail } }}
				onPress={() => this.props.navigation.navigate("Detail", person)}
				bottomDivider
				chevron
			/>
		)
	}

	render() {
		return (
			<View>
				<FlatList
					keyExtractor={this.keyExtractor}
					data={this.state.list}
					renderItem={this.renderItem}
				/>
			</View>
		)
	}
}

// export default props => {
// 	const server = api()
// 	const getData = async () => {
// 		const list = await server.get()
// 		console.log(list)
// 		return list
// 	}
// 	console.log(getData())
// 	const keyExtractor = (item, index) => index.toString()
// 	const renderItem = item => {
// 		const person = item.item
// 		return (
// 			<ListItem
// 				title={`${person.name.first} ${person.name.last}`}
// 				subtitle={person.location.country}
// 				leftAvatar={{ source: { uri: person.picture.thumbnail } }}
// 				onPress={() => props.navigation.navigate("Detail", person)}
// 				bottomDivider
// 				chevron
// 			/>
// 		)
// 	}

// 	return (
// 		<View>
// 			<FlatList
// 				keyExtractor={keyExtractor}
// 				data={getData()}
// 				renderItem={renderItem}
// 			/>
// 		</View>
// 	)
// }
