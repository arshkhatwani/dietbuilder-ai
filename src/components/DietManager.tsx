"use client";

import { generateDiet } from "@/app/diets/actions";
import { DietResponse } from "@/lib/googleAI/Gemini";
import { useState } from "react";
import DietInput, { DietForm } from "./DietInput";
import DietOutput from "./DietOutput";

function DietManager() {
    const [dietInput, setDietInput] = useState<DietForm>();
    const [dietResponse, setDietResponse] = useState<DietResponse>([]);

    const dietSubmit = async (data: DietForm) => {
        const res = await generateDiet(data);
        setDietResponse(res);
        setDietInput(data);
    };

    return (
        <>
            <DietInput dietSubmit={dietSubmit} />
            {dietResponse.length ? (
                <DietOutput dietInput={dietInput} dietOutput={dietResponse} />
            ) : (
                <></>
            )}
        </>
    );
}

export default DietManager;
