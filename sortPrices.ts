import { Course, Price, SortFlag } from './types'

export const sortByPrice = (courses: Course[], flag: SortFlag): Course[] => {
	const arr = courses.sort((a, b) => {
		const courseMin: Price = a.prices[0]
		const courseMax: Price = b.prices[0]
		if (flag === 'asc') {
			return courseMin - courseMax
		} else {
			return courseMax - courseMin
		}
	})
	return arr
}

