import { DietResponse } from "@/lib/googleAI/gemini";
import { DietForm } from "./DietInput";

export default function DietOutput({
    dietInput,
    dietOutput,
}: {
    dietInput: DietForm | undefined;
    dietOutput: DietResponse;
}) {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold">Your Diet Plan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <div className="font-medium">Total Calories</div>
                    <div>{dietInput?.calories} kcal</div>
                </div>
                <div>
                    <div className="font-medium">Protein</div>
                    <div>{dietInput?.protein}%</div>
                </div>
                <div>
                    <div className="font-medium">Carbs</div>
                    <div>{dietInput?.carbs}%</div>
                </div>
                <div>
                    <div className="font-medium">Fats</div>
                    <div>{dietInput?.fats}%</div>
                </div>
                <div>
                    <div className="font-medium">Diet Type</div>
                    <div>{dietInput?.dietType}</div>
                </div>
                <div>
                    <div className="font-medium">Meals per Day</div>
                    <div>{dietInput?.mealCount}</div>
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="text-lg font-bold">Sample Diet Plan</h4>
                {dietOutput.map((item, idx) => (
                    <div key={idx}>
                        <div className="font-medium">{item.mealName}</div>
                        <p>{item.mealDetails}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
