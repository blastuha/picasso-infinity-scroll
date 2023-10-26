import { FiSearch } from 'react-icons/fi'
import styles from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <header>
      <p className={styles.logo}>Some Blog</p>
      <FiSearch size={24} />
    </header>
  )
}
