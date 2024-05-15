import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

export function Header() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>

					<div>{data?.user.name?.charAt(0) || 'A'}</div>
				</div>
			)}
		</div>
	)
}
