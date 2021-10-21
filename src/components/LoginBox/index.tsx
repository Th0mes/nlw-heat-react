import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'

import styles from './styles.module.scss'

export const LoginBox = () => {
	const { signInUrl } = useContext(AuthContext)

	return (
		<section className={styles.container}>
			<strong>Entre e compartilhe sua mensagem</strong>
			<a href={signInUrl} className={styles.signInWithGithhub}>
				<VscGithubInverted size="24" /> Entre com GitHub
			</a>
		</section>
	)
}
