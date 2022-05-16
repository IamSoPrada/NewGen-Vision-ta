import { Course, Price } from './types'

export const filterByPrice = (
	courses: Course[],
	filters: Price[]
): Course[] => {
	const filtersMin: Price = filters[0]
	const filtersMax: Price = filters[1]

	const arr = courses.filter(course => {
		const courseMin: Price = course.prices[0]
		const courseMax: Price = course.prices[1]

		if (
			filtersMin !== null &&
			filtersMax !== null &&
			courseMin !== null &&
			courseMax !== null
		) {
			return courseMin >= filtersMin && courseMax <= filtersMax
		} else if (filtersMax === null) {
			return courseMin >= filtersMin
		} else if (filtersMin === null) {
			return courseMax <= filtersMax && courseMin <= filtersMax
		}
	})
	return arr
}
