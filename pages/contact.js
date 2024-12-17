import Navbar from '@/components/common/Navbar'
import SubNav from '@/components/common/SubNav'
import React from 'react'

import styles from './contact.module.css'
import TextInput from '@/components/input/TextInput'
import TextArea from '@/components/input/TextArea'
import Button from '@/components/common/Button'
import Tag from '@/components/common/Tag'

export default function contact() {
	return (
		<>
			<SubNav pageTitle='Contact' />
			<div className={styles.container}>
				<div className={styles.leftWrapper}>
					<div className={styles.title}>
						<div className={styles.ellipse}></div>
						Message
					</div>
					<div className={styles.inputs}>
						<TextInput label={'Name*'} placeholder={'Name'} />
						<TextInput label={'Email*'} placeholder={'Email'} />
						<TextArea label={'Message*'} placeholder={'Message'} />
						<Button text={'Submit'} />
					</div>
				</div>
				<div className={styles.rightWrapper}>
					<div className={styles.content}>
						<Tag value={'address'} />
						<div className={styles.address}>
							Department of CSE
							<br />
							National Institute of Technology Calicut
							<br /> 
							NIT Campus P.O 673 601,
							<br />
							Kozhikode, Kerala
							<br />
							India
						</div>
					</div>
					<div className={styles.content}>
						<Tag value={'email'} />
						csea@nitc.ac.in
					</div>
					<div className={styles.content}>
						<Tag value={'socials'} />
						<div className={styles.logos}>
							<div className={styles.logo}>
								<img src='/svgs/X.svg' />
							</div>
							<div className={styles.logo}>
								<img src='/svgs/instagram.svg' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
