import Head from 'next/head';
import './globals.css';
export const metadata = {
	title: 'MeetPlanr',
	description: 'Generated by create next app'
};
import { poppins } from '@/utils/fonts';
import Navbar from '@/shereComoponets/Navbar';
import Footer from '@/shereComoponets/Footer';
import { AuthProvider } from '@/providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<AuthProvider>
					<Navbar></Navbar>
					<main className="min-h-[calc(100vh-200px)]">{children}</main>
					<Footer></Footer>
					<Toaster position="top-center" reverseOrder={false} />
				</AuthProvider>
			</body>
		</html>
	);
}
