import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' MMMM 'às' HH:mm'h",
		{ locale: ptBR }
	)
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})
  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }
  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Por favor, preencha o campo de comentário.')
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }
  const isNewCommentEmpty = newComment.length === 0

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

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
          value={newComment}
          placeholder="Deixe seu comentário"
          name="comment"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment, index) => {
          return (
            <Comment content={comment} key={index} onDeleteComment={deleteComment} author={author} />
          )
        })}
			</div>
		</article>
	);
}
