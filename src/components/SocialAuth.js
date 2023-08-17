import googleImg from '../assets/google.png';
import githubImg from '../assets/github.png';
import Image from 'next/image';
import { UserAuth } from '@/providers/AuthProvider';
import { toast } from 'react-hot-toast';

const SocialAuth = ({ router, setError }) => {
	const { continueWithGoogle, continueWithGithub, setLoading } = UserAuth();

	const handleGoogleAuth = () => {
		continueWithGoogle()
			.then((data) => {
				console.log(data.user);
				setLoading(false);
				toast.success('Successfully logged in!');
				router.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
			});
	};

	const handleGithubAuth = () => {
		continueWithGithub()
			.then((data) => {
				console.log(data.user);
				setLoading(false);
				toast.success('Successfully logged in!');
				router.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
			});
	};

	return (
		<>
			<div className="divider text-xs">or continue with</div>
			<div className="flex justify-center items-center gap-2 mb-12 md:mb-0">
				<Image
					onClick={handleGoogleAuth}
					className="hover:scale-105 active:scale-90 duration-200"
					src={googleImg}
					alt="google"
					width={50}
				/>
				<Image
					onClick={handleGithubAuth}
					className="hover:scale-105 active:scale-90 duration-200"
					src={githubImg}
					alt="github"
					width={50}
				/>
			</div>
		</>
	);
};

export default SocialAuth;