import React from "react"
import { View, FlatList, Text } from "react-native"
import { ListItem } from "react-native-elements"

export default props => {
	console.clear()
	const person = props.navigation.state.params
	const arrayOfFields = [
		"Name",
		"Email",
		"Phone Number",
		"Age",
		"City",
		"Country"
	]
	const personToShow = {
		Name: `${person.name.first} ${person.name.last}`,
		Email: person.email,
		"Phone Number": person.cell,
		Age: person.dob.age,
		City: person.location.city,
		Country: person.location.country
	}
	return (
		<View>
			{arrayOfFields.map((fieldName, index) => (
				<ListItem
					key={index}
					title={fieldName}
					subtitle={personToShow[fieldName]}
					bottomDivider
				/>
			))}
		</View>
	)
}
