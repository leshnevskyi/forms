import {useState, useEffect} from 'react';

interface ResponseData {
	fileSizeBytes: number;
	url: string;
}

const UserForm = () => {
	const [avatarUrl, setAvatarUrl] = useState<string>();

	useEffect(() => {
		fetch('https://random.dog/woof.json?ref=apilist.fun')
			.then(response => response.json())
			.then(({url}: ResponseData) => setAvatarUrl(url));
	}, []);

	return (
		<div className='p-16 flex flex-1 flex-col items-center'>
			<img 
				src={avatarUrl} 
				alt='User avatar'
				className='w-24 aspect-square object-cover rounded-full mb-2'
			/>
			<form
				id='form'
				className='relative w-full flex items-center flex-col gap-5 px-7'
			>
				<div className='w-full flex items-center flex-col gap-10'>
					<label className='w-full flex flex-col items-center'>
						<span className='mb-4 text-xl font-bold'>
							Enter your username for the game
						</span>
						<input
							className='w-full border-2 border-zinc-200 p-3'
							type='text'
							name='username'
							placeholder='Andrii'
							required
							pattern='^[A-Z][a-z ,.-]+$'
							minLength={2}
						/>
					</label>
					<fieldset className='flex gap-10'>
						<legend className='mb-3 text-xl font-bold m-auto'>
							Choose your color
						</legend>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								name='color'
								value='black'
							/>
							Black
						</label>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								name='color'
								value='white'
							/>
							White
						</label>
					</fieldset>
					<fieldset className='flex gap-10'>
						<legend className='mb-3 text-xl font-bold m-auto'>
							Choose the game time
						</legend>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								name='gameTime'
								value='0.1'
							/>
							5 min
						</label>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								name='gameTime'
								value='10'
							/>
							10 min
						</label>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								name='gameTime'
								value='30'
							/>
							30 min
						</label>
					</fieldset>
					<div className='w-full flex flex-col items-center'>
						<label
							className='mb-4 text-xl font-bold'
							htmlFor='FavoriteSpeciesSelector'
						>
							Choose your skill level
						</label>
						<select
							id='SkillLevelSelector'
							className='
								w-full border-2 border-zinc-200 p-3
							'
							name='skillLevel'
						>
							<option value='beginner'>Beginner</option>
							<option value='intermediate'>Intermediate</option>
							<option value='advanced'>Advanced</option>
						</select>
					</div>
				</div>
				<label className='flex items-center gap-3'>
					<input name='userShouldBeRemembered' type='checkbox'/>
					Remember me
				</label>
				<input
					type='hidden'
					name='userId'
					value='38b48758-7c02-41b1-aff5-6542ea393d89'
				/>
				<button
					className='
						w-full py-3 px-5 bg-black hover:bg-zinc-500
						shadow-transparent shadow-xl hover:shadow-zinc-800/20 duration-300
						text-white font-bold
					'
					type='submit'
				>
					Start Game
				</button>
			</form>
			<span className='timerRoot text-8xl justify-self-center'></span>
		</div>
	);
}

export default UserForm;
