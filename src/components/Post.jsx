import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/WellyngtonMS.png" />
          <div className={styles.authorInfo}>
            <strong>Wellyngton Sbardelotto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title='11 de maio de 2021 às 08:00'
          dateTime='2022-05-11 08:00:00'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
	);
}