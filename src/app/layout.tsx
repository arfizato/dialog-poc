import "./globals.scss";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<title>Dialog POC - IBRAHIM DOGHRI</title>
			</head>
			<body className=''>{children}</body>
		</html>
	);
}
