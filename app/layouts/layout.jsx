"use client";
import {
	styled,
	Container,
	Box,
	ThemeProvider,
	CssBaseline,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import Footer from "~/layout/footer/page";
import Header from "~/layout/header/Header";
import Sidebar from "~/layout/sidebar/Sidebar";
import { baselightTheme } from "~/utils/theme/DefaultColors";
import { store } from "~/redux/store";

const MainWrapper = styled("div")(() => ({
	display: "flex",
	minHeight: "100vh",
	width: "100%",
}));

const PageWrapper = styled("div")(() => ({
	display: "flex",
	flexGrow: 1,
	paddingBottom: "60px",
	flexDirection: "column",
	zIndex: 1,
	backgroundColor: "transparent",
}));

export default function RootLayout({ children }) {
	const [isSidebarOpen, setSidebarOpen] = useState(true);
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	return (
		<html lang="en">
			<body>
				<ReduxProvider store={store}>
					<ThemeProvider theme={baselightTheme}>
						<CssBaseline />
						<MainWrapper className="mainwrapper">
							<Sidebar
								isSidebarOpen={isSidebarOpen}
								isMobileSidebarOpen={isMobileSidebarOpen}
								onSidebarClose={() =>
									setMobileSidebarOpen(false)
								}
							/>
							<PageWrapper className="page-wrapper">
								<Header
									toggleMobileSidebar={() =>
										setMobileSidebarOpen(true)
									}
								/>
								<Container
									sx={{
										paddingTop: "20px",
										maxWidth: "1200px",
									}}>
									<Box
										sx={{
											minHeight: "calc(100vh - 170px)",
										}}>
										{children}
									</Box>
									<Footer />
								</Container>
							</PageWrapper>
						</MainWrapper>
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
