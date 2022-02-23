import certificate from '../public/img/course-certificate.svg';
import Image from 'next/image';
import styles from '../styles/Certificate.module.css';

export function Certificate ({className}) {
  return (
    <div className={`${styles.certificate}${className ? ' ' + className : ''}`}>
      <Image src={certificate} alt="certificate" width={180} height={140} />
    </div>
  )
}