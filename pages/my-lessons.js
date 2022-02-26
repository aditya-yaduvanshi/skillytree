import {Journey, TutorSession} from '../components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Check from '../public/img/check.svg';
import Repeat from '../public/img/repeat.svg';

function MyLessons({className}) {
	return (
		<section className={`my_container ${className}`}>
			<Head>
				<title>MyLessons</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="title">Start Your Journey Now</h1>
			<div className="content">
				<Journey />
			</div>
			<div className="content">
				<div className="flex">
					<div className="mr-5 mt-4 lg:mt-2">
						<Image src={Check} width={23} height={23} alt="" />
					</div>
					<div className="lg:flex justify-between items-center">
						<h3 className="text-lg tracking-widest text-[#666666] font-poppins font-semibold mb-4 lg:mb-0 lg:mr-5">
							Get A Free Tutor Replacement If You Don&apos;t Like Your Trial Lesson
						</h3>
						<Link href="#!">
							<a className="text-secondary font-extrabold text-lg lg:text-base"><pre className="font-poppins font-extrabold">How To Get A Replacement</pre></a>
						</Link>
					</div>
				</div>
			</div>
      <div className='flex justify-between items-center'>
        <h2 className="title" style={{marginBottom: '0'}}>My Lessons</h2>
        <button className="flex items-center justify-between text-base text-secondary font-bold mr-5">
          <span className='mr-2 mt-1'>
            <Image src={Repeat} width={16} height={16} alt="" />
          </span>
          <span>Transfer Credit</span>
        </button>
      </div>
			<div className="content">
				<TutorSession />
			</div>
		</section>
	);
}

export default MyLessons;
