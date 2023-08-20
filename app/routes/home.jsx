import { json } from "@remix-run/node";
import { UserPanel } from "../components/UserPanel";
import RootLayout from "../layouts/RootLayout";
import { requireUserId } from "../utils/auth.server";
import { getOtherUser } from "../utils/user.server";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
	const userId = await requireUserId(request);
	const users = await getOtherUser(userId);
	return json({ users });
};

export default function Home() {
	const users = useLoaderData();
	return (
		<RootLayout>
			<Outlet />
			<div className="h-full flex">
				<UserPanel users={users} />
				<div className="flex-1"></div>
			</div>
		</RootLayout>
	);
}
