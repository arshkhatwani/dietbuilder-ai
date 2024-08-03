"use client";

import { DietResponse } from "@/lib/googleAI/gemini";
import { DietForm } from "./DietInput";
import { Button } from "./ui/button";
import { saveDiet } from "@/app/diets/actions";
import { useEffect, useState, useTransition } from "react";

export default function DietOutput({
    dietInput,
    dietOutput,
    readOnly = false,
}: {
    dietInput: DietForm | undefined;
    dietOutput: DietResponse;
    readOnly?: boolean;
}) {
    const [isPending, startTransition] = useTransition();

    const [status, setStatus] = useState<string>("");

    const dietSave = (dietInput: DietForm, dietOutput: DietResponse) => {
        startTransition(async () => {
            const response = await saveDiet(dietInput, dietOutput);
            if (response?.status === 201) {
                setStatus("Saved!");
            }
        });
    };

    useEffect(() => {
        if (isPending) setStatus("Saving...");
    }, [isPending]);

    useEffect(() => {
        setStatus("");
    }, [dietOutput]);

    if (dietInput === undefined) return <></>;

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
                {dietInput?.additionalDetails ? (
                    <div>
                        <div className="font-medium">Additional details</div>
                        <div>{dietInput?.additionalDetails}</div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="space-y-4">
                <h4 className="text-lg font-bold">Sample Diet Plan</h4>
                {dietOutput.map((item, idx) => (
                    <div key={idx}>
                        <div className="font-medium">{item.mealName}</div>

                        <p className="mb-1">{item.mealDetails}</p>

                        <div className="grid grid-cols-4 gap-4 bg-gray-200 dark:bg-gray-900 p-1.5 rounded-md">
                            <div>
                                <div className="font-medium">Calories</div>
                                <div>{item.calories}</div>
                            </div>
                            <div>
                                <div className="font-medium">Protein</div>
                                <div>{item.protein}g</div>
                            </div>
                            <div>
                                <div className="font-medium">Carbs</div>
                                <div>{item.carbs}g</div>
                            </div>
                            <div>
                                <div className="font-medium">Fats</div>
                                <div>{item.fats}g</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!readOnly ? (
                <div className="flex justify-end gap-2">
                    {status === "" ? (
                        <Button onClick={() => dietSave(dietInput, dietOutput)}>
                            Save
                        </Button>
                    ) : (
                        <>{status}</>
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
