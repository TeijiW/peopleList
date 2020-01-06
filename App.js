import Home from "./src/pages/Home"
import Detail from "./src/pages/Detail"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

const stackNavigator = createStackNavigator(
	{
		Main: {
			screen: Home
		},
		Detail: {
			screen: Detail,
			navigationOptions: ({ navigation }) => {
				const person = navigation.state.params
				const personName = `${person.name.first} ${person.name.last}`
				return {
					title: personName
				}
			}
		}
	},
	{
		defaultNavigationOptions: {
			title: "Home"
		}
	}
)

export default createAppContainer(stackNavigator)
