import { Switch, Route } from 'wouter'
import { queryClient } from './lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Home from '@/pages/home'
import Courses from '@/pages/courses'
import CourseDetail from '@/pages/course-detail'
import Login from '@/pages/auth/login'
import Signup from '@/pages/auth/signup'
import AdminDashboard from '@/pages/dashboard/admin'
import TeacherDashboard from '@/pages/dashboard/teacher'
import StudentDashboard from '@/pages/dashboard/student'
import NotFound from '@/pages/not-found'
import About from './pages/about'
import ScrollToTop from './hooks/scrooll-to-top'

function Router() {
	return (
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/courses' component={Courses} />
			<Route path='/courses/:id' component={CourseDetail} />
			<Route path='/about' component={About} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Route path='/dashboard/admin' component={AdminDashboard} />
			<Route path='/dashboard/teacher' component={TeacherDashboard} />
			<Route path='/dashboard/student' component={StudentDashboard} />
			<Route component={NotFound} />
		</Switch>
	)
}

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<div className='min-h-screen flex flex-col'>
					<Navbar />
					<main className='flex-1'>
						<ScrollToTop/>
						<Router />
					</main>
					<Footer />
				</div>
				<Toaster />
			</TooltipProvider>
		</QueryClientProvider>
	)
}

export default App
