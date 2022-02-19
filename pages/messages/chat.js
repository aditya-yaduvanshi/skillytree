import Image from 'next/image';
import { Avatar, Message } from '../../components';
import styles from '../../styles/chat.module.css';
import Send from '../../public/img/send.svg';
import { EmojiHappyIcon, ChevronLeftIcon } from '@heroicons/react/outline';

function Chat ({className}) {
  return (
    <section className={`my_container ${className} ${styles.chat_container}`}>
      <div className={styles.header}>
        <ChevronLeftIcon width={20} height={20} className={styles.back_btn} />
        <Avatar className={styles.avatar} />
      </div>
      <div className={`content ${styles.chat}`}>
        <Message last type='there'/>
        <Message/>
        <Message/>
        <Message last/>
        <div className={styles.date}>
          <span className={styles.date_text}>
            Wed, 29 Dec
          </span>
        </div>
        <Message/>
        <Message/>
        <Message/>
        <Message last/>
        <Message last type='there'/>
      </div>
      <div className={styles.footer}>
        <textarea className={styles.input_message} placeholder='Type Message Here' rows="1"></textarea>  
        <button className={styles.emoji}>
          <EmojiHappyIcon width={24} height={24} />
        </button>  
        <button className={styles.send_message}>
          <Image src={Send} alt="send" width={34} height={34} />
        </button>  
      </div>
    </section>
  )
}

export default Chat;