const links = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'About',
      path: '/about'
    },
]
import Link from 'next/link';
import styles from './Navigation.module.scss'
export default function Navigation() {
return (
    <header className={styles.navbar}>
        <div className={styles.social_navbar}>
            <div className={styles.social_navbar_left}>
                <p> 0923226552 |</p>
                <div className={styles.social_navbar_left_icons}></div>
            </div>
            <div className={styles.social_navbar_rigth}>
                Ingresar
            </div>
        </div>
        <nav className={styles.principal_navbar}>
            <div className={styles.logo}>
                LOGO
            </div>
            <ul className={styles.principal_navbar_items}>
                {
                links.map(el => {
                    return <li key={el.path}>
                    <Link href={el.path}>
                        {el.label}
                    </Link>
                    </li>
                })
                }
            </ul>
        </nav>
    </header>
    )
}
  