import {Card, CourseSkill} from '../components';
import styles from '../styles/dashboard.module.css';

function DashBoard({className}) {
	return (
		<section className={`${styles.container} ${className} flex flex-row`}>
			<div className="flex-[3]">
				<div className={styles.row}>
					<h2 className={styles.content_row_title}>
						&#128591; Namaskaram, <strong className='font-black'>Aditya!!</strong>
					</h2>
					<div className={styles.row_grid}>
						<Card title="12" text="Courses Completed" />
						<Card title="3" text="Certificates Earned" />
						<Card title="2" text="Courses In Progress" />
						<Card title="1" text="Upcoming Sessions" />
					</div>
				</div>
				<div className={styles.row}>
					<h2 className={styles.content_row_title}>My 2022 Targeted Skills </h2>
					<div className={`${styles.row_contents} flex-col`}>
						<CourseSkill
							rate="4.5"
							buttonText="Enrolled"
							buttonType="info"
							headline="This is gardening."
							course={{
								title: 'Gardening Classes',
								text: 'This is gardening classes.',
							}}
						/>
						<CourseSkill
							rate="4.5"
							buttonText="Ongoing"
							buttonType="warning"
							headline="This is gardening."
							course={{
								title: 'Gardening Classes',
								text: 'This is gardening classes.',
							}}
						/>
						<CourseSkill
							rate="4.5"
							buttonText="Completed"
							buttonType="success"
							headline="This is gardening."
							course={{
								title: 'Gardening Classes',
								text: 'This is gardening classes.',
							}}
						/>
					</div>
				</div>
			</div>
			<div className="flex-[1] hidden lg:flex">
				
			</div>
		</section>
	);
}

export default DashBoard;
