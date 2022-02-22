import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return(
    <footer className={styles.footer}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"> Frontend Mentor
        <span className="visuallyHidden">, opens in a new window</span>
      </a>. {' '}
      <span className={styles.noWrapSpan}>
        Coded by <a href="https://github.com/prajotsurey" target="_blank" rel="noreferrer"> Prajot Surey
          <span className="visuallyHidden">, opens in a new window</span>
        </a>.
      </span>
    </footer>
  )
}

export default Footer