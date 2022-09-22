import { categoryColors } from "../Theme"
import { Category } from "../types/Category"

export const categories: Category = {
    food: {title: "Alimentação", color: categoryColors.food, expense: true},
    other: {title: "Gastos", color: categoryColors.other, expense: true},
    salary: {title: "Salário", color: categoryColors.salary, expense: false}
}