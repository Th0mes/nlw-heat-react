import { useContext } from 'react'
import { AuthContext } from './contexts/auth'
import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'
import styles from './App.module.scss'
import { SendMessageForm } from './components/SendMessageForm'

function App() {
	const { user } = useContext(AuthContext)

	return (
		<main
			className={`${styles.container} ${!!user ? styles.contentSigned : ''}`}
		>
			<MessageList />
			{!!user ? <SendMessageForm /> : <LoginBox />}
		</main>
	)
}

export default App
