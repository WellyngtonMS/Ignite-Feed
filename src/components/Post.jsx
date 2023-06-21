import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' MMMM 'às' HH:mm'h",
		{ locale: ptBR }
	);
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} alt={author.name} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line, index) => {
					if (line.type === "paragraph") {
						return <p key={index}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={index}>
								<a href="#">{line.content}</a>
							</p>
						);
					}
					return null
				})}
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe seu comentário" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
			</div>
		</article>
	);
}
