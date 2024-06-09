import { useState } from "react";

export default function SavedDiets() {
    const [savedDiets, setSavedDiets] = useState<any>([]);

    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex flex-col gap-4 p-4">
                <h3 className="text-lg font-semibold">Saved Diets</h3>
                <div className="flex-1 overflow-auto">
                    {savedDiets.map((diet: any, index: number) => (
                        <div
                            key={index}
                            className="rounded-md bg-white p-3 shadow-sm dark:bg-gray-900 dark:text-gray-200">
                            <h4 className="text-sm font-medium">
                                Diet {index + 1}
                            </h4>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {diet.totalCalories} calories, {diet.protein}%
                                protein, {diet.carbs}% carbs, {diet.fats}% fats
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
