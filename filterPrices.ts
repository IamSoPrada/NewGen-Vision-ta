type Price = number | null

interface Course {
	name: string
	prices: Price[]
}

let courses: Course[] = [
	{ name: 'Courses in England', prices: [0, 100] },
	{ name: 'Courses in Germany', prices: [500, null] },
	{ name: 'Courses in Italy', prices: [100, 200] },
	{ name: 'Courses in Russia', prices: [null, 400] },
	{ name: 'Courses in China', prices: [50, 250] },
	{ name: 'Courses in USA', prices: [200, null] },
	{ name: 'Courses in Kazakhstan', prices: [56, 324] },
	{ name: 'Courses in France', prices: [null, null] },
]

export const filterByPrice = (courses: Course[], filters: Price[]): Course[] => {
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

let requiredRange1 = [null, 200]
let requiredRange2 = [100, 350]
let requiredRange3 = [200, null]

filterByPrice(courses, requiredRange1) //?
filterByPrice(courses, requiredRange2) //?
filterByPrice(courses, requiredRange3) //?
