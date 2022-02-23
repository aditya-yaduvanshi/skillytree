import { Certificate } from '../components';
import styles from '../styles/certificates.module.css';

function CertificateList ({className}) {
  return (
    <section className={`my_container ${className}`}>
      <h2 className='title'>Certificates</h2>
      <div className={styles.container}>
        <div className={`${styles.content} content`}>
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
          <Certificate className={styles.certificate} />
        </div>
        <div className={styles.sessions}>

        </div>
      </div>
    </section>
  )
}

export default CertificateList;