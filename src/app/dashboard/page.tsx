import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { type JSX } from 'react';

const PLATFORMS = ['X', 'Facebook', 'Instagram', 'LinkedIn'];

export default function Calendar(): JSX.Element {
	return (
		<div className="flex flex-col items-center pt-4">
			<div className="w-2/5 p-2 space-y-6">
				<h1 className="text-2xl font-bold">Create Post</h1>

				<Card>
					<CardHeader>
						<p>Select platforms</p>

						<div className="flex">
							{PLATFORMS.map(platform => (
								<Button key={platform} className="m-2">
									{platform}
								</Button>
							))}
						</div>
					</CardHeader>

					<CardContent>
						<form>
							<fieldset className="flex flex-col gap-2">
								<label htmlFor="message">Compose your message</label>
								<textarea id="message" className="textarea" />
							</fieldset>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
