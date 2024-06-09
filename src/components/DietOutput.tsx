export default function DietOutput() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold">Your Diet Plan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <div className="font-medium">Total Calories</div>
                    <div>2,000 kcal</div>
                </div>
                <div>
                    <div className="font-medium">Protein</div>
                    <div>30%</div>
                </div>
                <div>
                    <div className="font-medium">Carbs</div>
                    <div>40%</div>
                </div>
                <div>
                    <div className="font-medium">Fats</div>
                    <div>30%</div>
                </div>
                <div>
                    <div className="font-medium">Diet Type</div>
                    <div>Non-Vegetarian</div>
                </div>
                <div>
                    <div className="font-medium">Meals per Day</div>
                    <div>3</div>
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="text-lg font-bold">Sample Diet Plan</h4>
                <div>
                    <div className="font-medium">Breakfast</div>
                    <p>
                        2 eggs, 2 slices of whole wheat toast, 1 cup of berries,
                        and a glass of orange juice.
                    </p>
                </div>
                <div>
                    <div className="font-medium">Lunch</div>
                    <p>
                        Grilled chicken breast, 1 cup of steamed broccoli, 1/2
                        cup of brown rice, and a side salad with balsamic
                        vinaigrette.
                    </p>
                </div>
                <div>
                    <div className="font-medium">Dinner</div>
                    <p>
                        Baked salmon, 1 cup of roasted sweet potatoes, 1 cup of
                        sautéed spinach, and a glass of water.
                    </p>
                </div>
            </div>
        </div>
    );
}
