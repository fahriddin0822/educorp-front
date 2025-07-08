import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useToast } from '@/hooks/use-toast'
import { authStorage } from '@/lib/auth'
import { LogOut, Menu, User } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'wouter'

export default function Navbar() {
	const [location, setLocation] = useLocation()
	const { toast } = useToast()
	const user = authStorage.getUser()
	const [isOpen, setIsOpen] = useState(false)

	const handleLogout = () => {
		authStorage.clearUser()
		toast({
			title: 'Logged out successfully',
			description: 'You have been logged out of your account',
		})
		setLocation('/')
		window.location.reload()
	}

	const getDashboardPath = () => {
		if (!user) return '/'
		switch (user.role) {
			case 'admin':
				return '/dashboard/admin'
			case 'teacher':
				return '/dashboard/teacher'
			case 'student':
				return '/dashboard/student'
			default:
				return '/'
		}
	}

	const navigation = [
		{ name: 'Asossiy', href: '/' },
		{ name: 'Kurslar', href: '/courses' },
		{ name: 'Biz haqimizda', href: '/about' },
	]

	return (
		<header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
						<Link href='/' className='flex-shrink-0'>
							<div className='flex items-center gap-3'>
								<div>
									<img
										className='w-[50px] overflow-hidden'
										src='..//images/logo.png'
										alt='logo'
									/>
								</div>
								<div>
									<h1 className='text-3xl font-bold text-black hover:text-primary transition-colors'>
										educorp
									</h1>
									<p className='text-[10px]'>Jamoangizni rivojlantiring</p>
								</div>
							</div>
						</Link>

						<nav className='hidden md:ml-10 md:flex space-x-8'>
							{navigation.map(item => (
								<Link
									key={item.name}
									href={item.href}
									className={`px-3 py-2 text-sm font-medium transition-colors ${
										location === item.href
											? 'text-primary'
											: 'text-gray-500 hover:text-primary'
									}`}
								>
									{item.name}
								</Link>
							))}
						</nav>
					</div>

					<div className='flex items-center space-x-4'>
						{user ? (
							<div className='hidden min-[350px]:block'>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant='ghost'
											className='flex items-center space-x-2'
										>
											<div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
												<span className='text-white text-sm font-medium'>
													{user.fullName
														.split(' ')
														.map(n => n[0])
														.join('')}
												</span>
											</div>
											<span className='hidden sm:inline'>{user.fullName}</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align='end'>
										<DropdownMenuItem asChild>
											<Link href={getDashboardPath()}>
												<User className='mr-2 h-4 w-4' />
												Dashboard
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem onClick={handleLogout}>
											<LogOut className='mr-2 h-4 w-4' />
											Sign Out
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						) : (
							<div className='hidden md:flex items-center space-x-3'>
								<Button variant='ghost' asChild>
									<Link href='/login'>Sign In</Link>
								</Button>
								<Button asChild>
									<Link href='/signup'>Sign Up</Link>
								</Button>
							</div>
						)}

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant='ghost' size='icon' className='md:hidden'>
									<Menu className='h-6 w-6' />
								</Button>
							</SheetTrigger>
							<SheetContent side='right'>
								<nav className='flex flex-col space-y-4 mt-6'>
									{navigation.map(item => (
										<Link
											key={item.name}
											href={item.href}
											className='text-lg font-medium text-gray-700 hover:text-primary'
											onClick={() => setIsOpen(false)}
										>
											{item.name}
										</Link>
									))}
									{!user && (
										<>
											<Link
												href='/login'
												className='text-lg font-medium text-gray-700 hover:text-primary'
												onClick={() => setIsOpen(false)}
											>
												Sign In
											</Link>
											<Link
												href='/signup'
												className='text-lg font-medium text-gray-700 hover:text-primary'
												onClick={() => setIsOpen(false)}
											>
												Sign Up
											</Link>
											<div className='block min-[350px]:hidden border-t pt-4 mt-4'>
												<Link
													href={getDashboardPath()}
													className='text-lg font-medium text-gray-700 hover:text-primary flex items-center gap-2'
													onClick={() => setIsOpen(false)}
												>
													<User className='h-5 w-5' />
													Dashboard
												</Link>
												<button
													onClick={() => {
														handleLogout()
														setIsOpen(false)
													}}
													className='text-lg font-medium text-gray-700 hover:text-primary flex items-center gap-2 mt-2'
												>
													<LogOut className='h-5 w-5' />
													Sign Out
												</button>
											</div>
										</>
									)}
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	)
}
