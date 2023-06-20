import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
	return (
    <div className={styles.comment}>
      <img src="https://github.com/WellyngtonMS.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wellyngton Sbardelotto</strong>
              <time
                title='11 de maio de 2021 às 08:00'
                dateTime='2022-05-11 08:00:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            Oi
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
