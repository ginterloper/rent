import { signOut } from '@/auth';
import { Button } from '@/app/ui/form/button';
import { PowerIcon } from "@heroicons/react/24/solid";

export default function Profile() {
	return (
		<>
			<form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button className="m-10">
            <PowerIcon className="w-6 mr-2" />
						Sign Out
          </Button>
        </form>
		</>
	)
}

