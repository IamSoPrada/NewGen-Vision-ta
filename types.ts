export type Price = number | null

export interface Course {
	name: string
	prices: Price[]
}

export type SortFlag = "asc" | "desc"