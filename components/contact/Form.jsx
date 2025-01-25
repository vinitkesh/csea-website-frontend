import React, { useState } from 'react';
import styles from './Form.module.css';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';
import Button from '../common/Button';

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSendEmail = () => {
		const mailtoLink = `mailto:csea@nitc.ac.in?subject=New%20Message%20from%20${encodeURIComponent(
			name
		)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
			email
		)}%0AMessage:%20${encodeURIComponent(message)}`;
		window.location.href = mailtoLink;
	};

	return (
		<div className={styles.inputs}>
			<TextInput
				label={'Name*'}
				placeholder={'Name'}
				input={name}
				setInput={setName}
			/>
			<TextInput
				label={'Email*'}
				placeholder={'Email'}
				input={email}
				setInput={setEmail}
			/>
			<TextArea
				label={'Message*'}
				placeholder={'Message'}
				input={message}
				setInput={setMessage}
			/>
			<Button text={'Submit'} onClick={handleSendEmail} />
		</div>
	);
}
