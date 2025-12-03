import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { type JSX } from 'react';
import { Calendar, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Dashboard(): JSX.Element {
	const platforms = [
		{ name: 'Twitter', icon: <Twitter /> },
		{ name: 'Facebook', icon: <Facebook /> },
		{ name: 'Instagram', icon: <Instagram /> },
		{ name: 'LinkedIn', icon: <Linkedin /> },
	];

	return (
		<div className="flex flex-col items-center pt-4">
			<div className="w-3/5 p-2 space-y-6">
				<h1 className="text-2xl font-bold">Create Post</h1>

				<Card className="space-y-8">
					<CardHeader>
						<p>Select platforms</p>

						<div className="flex gap-2 my-2">
							{platforms.map(platform => (
								<Button key={platform.name} variant="outline">
									<div className="flex items-center gap-2">
										{platform.icon}

										<span>{platform.name}</span>
									</div>
								</Button>
							))}
						</div>
					</CardHeader>

					<CardContent>
						<form className="space-y-6">
							<fieldset className="flex flex-col gap-2">
								<label htmlFor="message">Compose your message</label>

								<textarea
									id="message"
									className="h-32 textarea"
									placeholder="What's on your mind?"
								/>
							</fieldset>

							<fieldset className="flex justify-end gap-4">
								<Button variant="outline" className="mr-auto border">
									<Calendar />

									<span>Schedule for Later</span>
								</Button>

								<Button variant="outline" className="border">
									Save Draft
								</Button>

								<Button type="submit">Post Now</Button>
							</fieldset>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
