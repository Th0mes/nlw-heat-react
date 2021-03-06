import { useContext, useState, FormEvent } from 'react'
import { VscSignOut, VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api'
import { AuthContext } from '../../contexts/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './styles.module.scss'

export const SendMessageForm = () => {
	const { user, signOut } = useContext(AuthContext)
	const [message, setMessage] = useState('')

	const successToast = () => {
		toast.success('Success Notification !', {})
	}

	const errorToast = () => {
		toast.error('Error Notification !', {})
	}

	async function handleSendMessage(e: FormEvent) {
		e.preventDefault()

		if (!message.trim()) {
			return
		}

		await api.post('messages', { message })

		setMessage('')
	}

	return (
		<section className={styles.container}>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<button onClick={signOut} className={styles.signOutButton}>
				<VscSignOut size="32" />
			</button>

			<header className={styles.userInformation}>
				<div className={styles.userImage}>
					<img src={user?.avatar_url} alt={user?.name} />
				</div>
				<strong className={styles.userName}>{user?.name}</strong>
				<span className={styles.userGithub}>
					<VscGithubInverted size="16" />
					{user?.login}
				</span>
			</header>

			<form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
				<label htmlFor="message">Mensagem</label>

				<textarea
					name="message"
					id="message"
					placeholder="Qual sua expectativa para o evento"
					onChange={e => setMessage(e.target.value)}
					value={message}
				/>

				<button type="submit" onClick={successToast}>
					Enviar mensagem
				</button>
			</form>
		</section>
	)
}
