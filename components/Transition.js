import {useState} from 'react';
import styles from '../styles/Transition.module.css';

export function Transition({articles}) {
	const [ActiveComponent, setActiveComponent] = useState(
		articles.find((ar) => ar.default === true).Component
	);

  function handleClick (e) {
    let i = articles.findIndex(ar => ar.Component === ActiveComponent);
		setActiveComponent(articles[i === articles.length-1 ? 0 : i+1].Component);
  }
	
	return (
		<div className={styles.transition}>
			<div className={styles.transition_article}>
        <ActiveComponent />
      </div>
			<div className={styles.transition_dots}>
				{articles.map((article, index) => (
					<button
            onClick={handleClick}
            key={index}
						className={`${styles.transition_dot}${article.default === true ? styles.transition_dot_active : ""}`}
					/>
				))}
			</div>
		</div>
	);
}
